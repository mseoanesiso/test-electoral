// Lógica del test (Nueva metodología de Opciones y Pesos)

// ---------- CÁLCULO ----------
// respuestas: { idPregunta: { principal: "A", secundaria: "B"|null, importante: bool } }
function calcularAfinidad(partido, respuestas, preguntas) {
  let sumaPuntos = 0;
  let sumaPesosMax = 0;
  const porTema = {};
  const detalle = [];

  for (const q of preguntas) {
    const r = respuestas[q.id];
    if (!r) continue; // Si la saltó o marcó "ninguna", no cuenta en el total
    
    const pos = partido.posiciones[q.id];
    if (!pos || !pos.opcion) continue; // Si el partido no tiene propuesta, se ignora

    const multiplicador = r.importante ? 2 : 1;
    const pesoTotalPregunta = q.pesoBase * multiplicador;

    let puntos = 0;
    if (r.principal === pos.opcion) {
      puntos = 1 * pesoTotalPregunta;
    } else if (r.secundaria === pos.opcion) {
      puntos = 0.5 * pesoTotalPregunta;
    }

    sumaPuntos += puntos;
    sumaPesosMax += pesoTotalPregunta;

    if (!porTema[q.tema]) porTema[q.tema] = { suma: 0, max: 0 };
    porTema[q.tema].suma += puntos;
    porTema[q.tema].max += pesoTotalPregunta;

    // Obtener los textos para el detalle
    const textoTuya = q.opciones.find(o => o.id === r.principal)?.texto || "Ninguna";
    const textoPartido = q.opciones.find(o => o.id === pos.opcion)?.texto || "Sin definir";

    detalle.push({ 
      pregunta: q, 
      textoTuya: textoTuya,
      textoPartido: textoPartido,
      puntosObtenidos: puntos,
      pesoMaximo: pesoTotalPregunta,
      fuente: pos.fuente + " (" + pos.fecha + ")"
    });
  }

  const total = sumaPesosMax ? Math.round((sumaPuntos / sumaPesosMax) * 100) : null;
  const temas = Object.entries(porTema).map(([tema, t]) => ({ 
    tema, pct: Math.round((t.suma / t.max) * 100) 
  }));
  
  return { total, temas, detalle, respondidas: Object.keys(respuestas).length };
}

if (typeof module !== "undefined") module.exports = { calcularAfinidad };

// ---------- INTERFAZ ----------
if (typeof document !== "undefined") {
  document.addEventListener("DOMContentLoaded", () => {
    // Función segura para obtener elementos (avisa si falta alguno)
    const $ = (id) => {
      const el = document.getElementById(id);
      if (!el) console.warn("Falta el elemento HTML con el id:", id);
      return el;
    };

    const vistas = ["inicio", "pregunta", "resultados", "metodologia"];
    let indice = 0;
    let respuestas = {};
    let vistaAnterior = "inicio";

    function mostrar(nombre) {
      vistas.forEach((v) => {
        const el = $("vista-" + v);
        if (el) el.hidden = v !== nombre;
      });
      window.scrollTo(0, 0);
    }

    function pintarPregunta() {
      const q = PREGUNTAS[indice];
      $("progreso").style.width = ((indice) / PREGUNTAS.length) * 100 + "%";
      $("contador").textContent = "Pregunta " + (indice + 1) + " de " + PREGUNTAS.length;
      $("tema").textContent = q.tema;
      $("texto-pregunta").textContent = q.texto;
      
      const contenedorOpts = $("opciones-dinamicas");
      contenedorOpts.innerHTML = "";
      
      const previa = respuestas[q.id] || {};
      
      q.opciones.forEach(opt => {
        const div = document.createElement("div");
        div.className = "opcion-tarjeta";
        if (previa.principal === opt.id) div.classList.add("sel-prin");
        if (previa.secundaria === opt.id) div.classList.add("sel-sec");

        const txt = document.createElement("p");
        txt.textContent = opt.texto;
        
        const cajaBotones = document.createElement("div");
        cajaBotones.className = "opcion-botones";

        const btnPrin = document.createElement("button");
        btnPrin.className = "btn-prin " + (previa.principal === opt.id ? "activo" : "");
        btnPrin.textContent = previa.principal === opt.id ? "Tu principal" : "Elegir";
        btnPrin.onclick = () => marcarOpcion(q.id, opt.id, 'principal');

        const btnSec = document.createElement("button");
        btnSec.className = "btn-sec " + (previa.secundaria === opt.id ? "activo" : "");
        btnSec.textContent = previa.secundaria === opt.id ? "Tu 2ª opción" : "Aceptable";
        
        if (!previa.principal || previa.principal === opt.id) {
          btnSec.style.display = "none";
        }
        btnSec.onclick = () => marcarOpcion(q.id, opt.id, 'secundaria');

        cajaBotones.append(btnPrin, btnSec);
        div.append(txt, cajaBotones);
        contenedorOpts.append(div);
      });

      $("chk-importante").checked = !!previa.importante;
      $("btn-atras").style.visibility = indice === 0 ? "hidden" : "visible";
      $("btn-siguiente").disabled = !previa.principal;
    }

    function marcarOpcion(idPregunta, idOpcion, tipo) {
      if (!respuestas[idPregunta]) respuestas[idPregunta] = { importante: $("chk-importante").checked };
      
      if (tipo === 'principal') {
        if (respuestas[idPregunta].principal === idOpcion) {
          respuestas[idPregunta].principal = null;
          respuestas[idPregunta].secundaria = null;
        } else {
          respuestas[idPregunta].principal = idOpcion;
          if (respuestas[idPregunta].secundaria === idOpcion) respuestas[idPregunta].secundaria = null;
        }
      } else if (tipo === 'secundaria') {
        if (respuestas[idPregunta].secundaria === idOpcion) {
          respuestas[idPregunta].secundaria = null;
        } else {
          respuestas[idPregunta].secundaria = idOpcion;
        }
      }
      pintarPregunta();
    }

    function avanzar() {
      const q = PREGUNTAS[indice];
      if (respuestas[q.id]) respuestas[q.id].importante = $("chk-importante").checked;

      if (indice < PREGUNTAS.length - 1) { 
        indice++; 
        pintarPregunta(); 
      } else { 
        pintarResultados(); 
        mostrar("resultados"); 
      }
    }

    function pintarResultados() {
      const res = PARTIDOS.map((p) => ({ p: p, r: calcularAfinidad(p, respuestas, PREGUNTAS) }))
        .filter((x) => x.r.total !== null)
        .sort((a, b) => b.r.total - a.r.total);
      
      const cont = $("lista-resultados");
      cont.innerHTML = "";
      if (!res.length) { 
        $("nota-resultados").textContent = "";
        cont.textContent = "No has respondido a ninguna pregunta o no hay coincidencias."; 
        return; 
      }

      $("nota-resultados").textContent = "Has respondido " + res[0].r.respondidas + " de " + PREGUNTAS.length + " preguntas.";
      window._resultado = res;

      res.forEach((x) => {
        const div = document.createElement("div");
        div.className = "partido";
        const cab = document.createElement("div");
        cab.className = "partido-cab";
        const nom = document.createElement("span"); nom.className = "partido-nombre"; nom.textContent = x.p.nombre;
        const pct = document.createElement("span"); pct.className = "partido-pct"; pct.textContent = x.r.total + " %";
        cab.append(nom, pct);
        
        const barra = document.createElement("div"); barra.className = "barra";
        const rel = document.createElement("div"); rel.style.width = x.r.total + "%"; rel.style.background = x.p.color;
        barra.append(rel);
        
        const det = document.createElement("details");
        const sum = document.createElement("summary"); sum.textContent = "Ver desglose por tema y fuentes";
        det.append(sum);
        
        x.r.temas.forEach((t) => {
          const f = document.createElement("div"); f.className = "tema-fila";
          const a = document.createElement("span"); a.textContent = t.tema;
          const b = document.createElement("strong"); b.textContent = t.pct + " %";
          f.append(a, b); det.append(f);
        });
        
        const h = document.createElement("p"); h.className = "nota mt-3"; h.textContent = "Respuestas y fuentes:"; det.append(h);
        
        x.r.detalle.forEach((d) => {
          const f = document.createElement("div"); f.className = "detalle-preg";
          f.innerHTML = `
            <div style="margin-bottom: 6px; font-size: 15px; color: var(--acento);"><strong>${d.pregunta.tema}</strong></div>
            <div style="margin-bottom: 4px; padding-left: 8px; border-left: 2px solid var(--borde);">
              <div style="margin-bottom: 4px;">👤 <strong>Tú:</strong> ${d.textoTuya}</div>
              <div style="margin-bottom: 6px;">🏛️ <strong>Partido:</strong> ${d.textoPartido}</div>
            </div>
            <div class="nota" style="font-size: 12.5px; background: var(--fondo); padding: 4px 8px; border-radius: 4px; display: inline-block;">
              ⚖️ Puntos: <strong>${d.puntosObtenidos}/${d.pesoMaximo}</strong> &nbsp;·&nbsp; 🔗 Fuente: ${d.fuente}
            </div>
          `;
          det.append(f);
        });
    }

    // Eventos
    if ($("btn-empezar")) $("btn-empezar").onclick = () => { indice = 0; respuestas = {}; pintarPregunta(); mostrar("pregunta"); };
    if ($("btn-siguiente")) $("btn-siguiente").onclick = avanzar;
    if ($("btn-saltar")) $("btn-saltar").onclick = () => { delete respuestas[PREGUNTAS[indice].id]; avanzar(); };
    if ($("btn-atras")) $("btn-atras").onclick = () => { if (indice > 0) { indice--; pintarPregunta(); } };
    if ($("btn-repetir")) $("btn-repetir").onclick = () => { respuestas = {}; indice = 0; mostrar("inicio"); };
    if ($("logo")) $("logo").onclick = (e) => { e.preventDefault(); mostrar("inicio"); };
    
    if ($("btn-metodologia")) {
      $("btn-metodologia").onclick = () => {
        const visible = vistas.find((v) => !$("vista-" + v).hidden);
        if (visible !== "metodologia") vistaAnterior = visible;
        mostrar("metodologia");
      };
    }
    
    if ($("btn-volver")) $("btn-volver").onclick = () => mostrar(vistaAnterior);
    if ($("btn-copiar")) $("btn-copiar").onclick = () => {
      const txt = (window._resultado || []).map((x) => x.p.nombre + ": " + x.r.total + " %").join("\n");
      const cuerpo = "Mi resultado en el test de afinidad electoral 2026:\n\n" + txt + "\n\n" + location.href;
      if (navigator.clipboard) navigator.clipboard.writeText(cuerpo).then(() => { $("btn-copiar").textContent = "¡Copiado!"; });
    };

    // Arranque
    if ($("sub-eleccion")) $("sub-eleccion").textContent = ELECCIONES.nombre + " · " + ELECCIONES.fecha;
    if ($("num-preguntas")) $("num-preguntas").textContent = PREGUNTAS.length;
    if ($("fecha-act")) $("fecha-act").textContent = ELECCIONES.actualizacion;
    if ($("aviso-ejemplo") && ELECCIONES.datosDeEjemplo) $("aviso-ejemplo").hidden = false;
  }); // Fin de DOMContentLoaded
}
