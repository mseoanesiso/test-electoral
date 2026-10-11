// Lógica del test (Nueva metodología con navegación)
function calcularAfinidad(partido, respuestas, preguntas) {
  let sumaPuntos = 0, sumaPesosMax = 0;
  const porTema = {};
  const detalle = [];

  for (const q of preguntas) {
    const r = respuestas[q.id];
    if (!r) continue; 
    
    const pos = partido.posiciones[q.id];
    if (!pos || !pos.opcion) continue; 

    const multiplicador = r.importante ? 2 : 1;
    const pesoTotalPregunta = (q.pesoBase || 1) * multiplicador;

    let puntos = 0;
    if (r.principal === pos.opcion) puntos = 1 * pesoTotalPregunta;
    else if (r.secundaria === pos.opcion) puntos = 0.5 * pesoTotalPregunta;

    sumaPuntos += puntos;
    sumaPesosMax += pesoTotalPregunta;

    if (!porTema[q.tema]) porTema[q.tema] = { suma: 0, max: 0 };
    porTema[q.tema].suma += puntos;
    porTema[q.tema].max += pesoTotalPregunta;

    const textoTuya = q.opciones.find(o => o.id === r.principal)?.texto || "Ninguna";
    const textoPartido = q.opciones.find(o => o.id === pos.opcion)?.texto || "Sin definir";

    detalle.push({ 
      pregunta: q, textoTuya, textoPartido, puntosObtenidos: puntos, pesoMaximo: pesoTotalPregunta, fuente: pos.fuente + " (" + pos.fecha + ")"
    });
  }

  const total = sumaPesosMax ? Math.round((sumaPuntos / sumaPesosMax) * 100) : null;
  const temas = Object.entries(porTema).map(([tema, t]) => ({ tema, pct: Math.round((t.suma / t.max) * 100) }));
  return { total, temas, detalle, respondidas: Object.keys(respuestas).length };
}

if (typeof document !== "undefined") {
  document.addEventListener("DOMContentLoaded", () => {
    const $ = (id) => document.getElementById(id);
    const vistas = ["inicio", "pregunta", "resultados", "metodologia"];
    let indice = 0, respuestas = {}, vistaAnterior = "inicio";

    function mostrar(nombre) {
      vistas.forEach((v) => { if ($("vista-" + v)) $("vista-" + v).hidden = v !== nombre; });
      window.scrollTo(0, 0);
    }

    // NUEVO: Pinta los números de arriba para navegar
    function pintarNavegacion() {
      const nav = $("nav-numeros");
      if (!nav) return;
      nav.innerHTML = "";
      PREGUNTAS.forEach((q, i) => {
        const btn = document.createElement("button");
        btn.className = "btn-num";
        
        if (i === indice) btn.classList.add("actual");
        else if (respuestas[q.id] && respuestas[q.id].principal) btn.classList.add("respondida");
        
        btn.textContent = i + 1;
        btn.onclick = () => {
          const qActual = PREGUNTAS[indice];
          if (respuestas[qActual.id] && $("chk-importante")) {
            respuestas[qActual.id].importante = $("chk-importante").checked;
          }
          indice = i;
          pintarPregunta();
        };
        nav.append(btn);
      });
    }

    function pintarPregunta() {
      if (!PREGUNTAS || !PREGUNTAS[indice]) return;
      const q = PREGUNTAS[indice];
      
      if ($("progreso")) $("progreso").style.width = ((indice) / PREGUNTAS.length) * 100 + "%";
      if ($("contador")) $("contador").textContent = "Pregunta " + (indice + 1) + " de " + PREGUNTAS.length;
      
      pintarNavegacion(); // Actualizamos los círculos de navegación

      if ($("tema")) $("tema").textContent = q.tema;
      if ($("texto-pregunta")) $("texto-pregunta").textContent = q.texto;
      
      const contenedorOpts = $("opciones-dinamicas");
      if (contenedorOpts) {
        contenedorOpts.innerHTML = "";
        const previa = respuestas[q.id] || {};
        
        q.opciones.forEach(opt => {
          const div = document.createElement("div");
          div.className = "opcion-tarjeta" + (previa.principal === opt.id ? " sel-prin" : "") + (previa.secundaria === opt.id ? " sel-sec" : "");
          
          const txt = document.createElement("p"); txt.textContent = opt.texto;
          const cajaBotones = document.createElement("div"); cajaBotones.className = "opcion-botones";

          const btnPrin = document.createElement("button");
          btnPrin.className = "btn-prin" + (previa.principal === opt.id ? " activo" : "");
          btnPrin.textContent = previa.principal === opt.id ? "Tu principal" : "Elegir";
          btnPrin.onclick = () => marcarOpcion(q.id, opt.id, 'principal');

          const btnSec = document.createElement("button");
          btnSec.className = "btn-sec" + (previa.secundaria === opt.id ? " activo" : "");
          btnSec.textContent = previa.secundaria === opt.id ? "Tu 2ª opción" : "Aceptable";
          if (!previa.principal || previa.principal === opt.id) btnSec.style.display = "none";
          btnSec.onclick = () => marcarOpcion(q.id, opt.id, 'secundaria');

          cajaBotones.append(btnPrin, btnSec);
          div.append(txt, cajaBotones);
          contenedorOpts.append(div);
        });
      }

      if ($("chk-importante")) $("chk-importante").checked = !!(respuestas[q.id] && respuestas[q.id].importante);
      if ($("btn-atras")) $("btn-atras").style.visibility = indice === 0 ? "hidden" : "visible";
      if ($("btn-siguiente")) $("btn-siguiente").disabled = !(respuestas[q.id] && respuestas[q.id].principal);
    }

    function marcarOpcion(idPregunta, idOpcion, tipo) {
      if (!respuestas[idPregunta]) respuestas[idPregunta] = { importante: $("chk-importante") ? $("chk-importante").checked : false };
      
      if (tipo === 'principal') {
        if (respuestas[idPregunta].principal === idOpcion) {
          respuestas[idPregunta].principal = null; respuestas[idPregunta].secundaria = null;
        } else {
          respuestas[idPregunta].principal = idOpcion;
          if (respuestas[idPregunta].secundaria === idOpcion) respuestas[idPregunta].secundaria = null;
        }
      } else {
        respuestas[idPregunta].secundaria = respuestas[idPregunta].secundaria === idOpcion ? null : idOpcion;
      }
      pintarPregunta();
    }

    function avanzar() {
      const q = PREGUNTAS[indice];
      if (respuestas[q.id] && $("chk-importante")) respuestas[q.id].importante = $("chk-importante").checked;

      if (indice < PREGUNTAS.length - 1) { 
        indice++; pintarPregunta(); 
      } else { 
        pintarResultados(); mostrar("resultados"); 
      }
    }

    function pintarResultados() {
      const res = PARTIDOS.map((p) => ({ p: p, r: calcularAfinidad(p, respuestas, PREGUNTAS) })).filter((x) => x.r.total !== null).sort((a, b) => b.r.total - a.r.total);
      const cont = $("lista-resultados");
      if (!cont) return;
      cont.innerHTML = "";
      
      if (!res.length) { 
        if ($("nota-resultados")) $("nota-resultados").textContent = "";
        cont.textContent = "No has respondido a ninguna pregunta o no hay coincidencias."; return; 
      }

      if ($("nota-resultados")) $("nota-resultados").textContent = "Has respondido " + res[0].r.respondidas + " de " + PREGUNTAS.length + " preguntas.";
      window._resultado = res;

      res.forEach((x) => {
        const div = document.createElement("div"); div.className = "partido";
        div.innerHTML = `<div class="partido-cab"><span class="partido-nombre">${x.p.nombre}</span><span class="partido-pct">${x.r.total} %</span></div>
                         <div class="barra"><div style="width: ${x.r.total}%; background: ${x.p.color}"></div></div>`;
        
        const det = document.createElement("details");
        const sum = document.createElement("summary"); sum.textContent = "Ver desglose por tema y fuentes"; det.append(sum);
        
        x.r.temas.forEach((t) => {
          const f = document.createElement("div"); f.className = "tema-fila";
          f.innerHTML = `<span>${t.tema}</span><strong>${t.pct} %</strong>`; det.append(f);
        });
        
        const h = document.createElement("p"); h.className = "nota mt-3"; h.textContent = "Respuestas y fuentes:"; det.append(h);
        
        // DISEÑO MEJORADO DE LOS DETALLES
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
        div.append(det); cont.append(div);
      });
    }

    // Eventos
    if ($("btn-empezar")) $("btn-empezar").onclick = () => { indice = 0; respuestas = {}; pintarPregunta(); mostrar("pregunta"); };
    if ($("btn-siguiente")) $("btn-siguiente").onclick = avanzar;
    if ($("btn-saltar")) $("btn-saltar").onclick = () => { delete respuestas[PREGUNTAS[indice].id]; avanzar(); };
    if ($("btn-atras")) $("btn-atras").onclick = () => { if (indice > 0) { indice--; pintarPregunta(); } };
    if ($("btn-repetir")) $("btn-repetir").onclick = () => { respuestas = {}; indice = 0; mostrar("inicio"); };
    if ($("logo")) $("logo").onclick = (e) => { e.preventDefault(); mostrar("inicio"); };
    
    if ($("btn-metodologia")) $("btn-metodologia").onclick = () => {
      const visible = vistas.find((v) => $("vista-" + v) && !$("vista-" + v).hidden);
      if (visible !== "metodologia") vistaAnterior = visible;
      mostrar("metodologia");
    };
    if ($("btn-volver")) $("btn-volver").onclick = () => mostrar(vistaAnterior);

    // Inicialización
    if (typeof ELECCIONES !== "undefined") {
      if ($("sub-eleccion")) $("sub-eleccion").textContent = ELECCIONES.nombre + " · " + ELECCIONES.fecha;
      if ($("fecha-act")) $("fecha-act").textContent = ELECCIONES.actualizacion;
      if ($("aviso-ejemplo") && ELECCIONES.datosDeEjemplo) $("aviso-ejemplo").hidden = false;
    }
    if (typeof PREGUNTAS !== "undefined" && $("num-preguntas")) $("num-preguntas").textContent = PREGUNTAS.length;
  });
}
