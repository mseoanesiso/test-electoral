// Lógica del test (Límites, Navegación, Provincias y Compartir)
const MAX_IMP = 3;
const MAX_VETOS = 2;

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
    if (r.inaceptable === pos.opcion) {
      puntos = -pesoTotalPregunta * 1.5; // Veto penaliza
    } else if (r.principal === pos.opcion) {
      puntos = 1 * pesoTotalPregunta;
    } else if (r.secundaria === pos.opcion) {
      puntos = 0.5 * pesoTotalPregunta;
    }

    sumaPuntos += puntos;
    sumaPesosMax += pesoTotalPregunta;

    if (!porTema[q.tema]) porTema[q.tema] = { suma: 0, max: 0 };
    porTema[q.tema].suma += puntos;
    porTema[q.tema].max += pesoTotalPregunta;

    let textoTuya = q.opciones.find(o => o.id === r.principal)?.texto || "Ninguna";
    if (r.inaceptable) textoTuya += " <br><span style='color:#d1495b'>🚫 Vetaste: " + (q.opciones.find(o => o.id === r.inaceptable)?.texto) + "</span>";
    
    const textoPartido = q.opciones.find(o => o.id === pos.opcion)?.texto || "Sin definir";

    detalle.push({ 
      pregunta: q, textoTuya, textoPartido, puntosObtenidos: puntos, pesoMaximo: pesoTotalPregunta, 
      fuente: pos.fuente + " (" + pos.fecha + ")", vetado: r.inaceptable === pos.opcion
    });
  }

  let total = sumaPesosMax ? Math.round((sumaPuntos / sumaPesosMax) * 100) : null;
  if (total !== null && total < 0) total = 0; 
  
  const temas = Object.entries(porTema).map(([tema, t]) => {
    let pct = Math.round((t.suma / t.max) * 100);
    if (pct < 0) pct = 0;
    return { tema, pct };
  });

  return { total, temas, detalle, respondidas: Object.keys(respuestas).length };
}

if (typeof document !== "undefined") {
  document.addEventListener("DOMContentLoaded", () => {
    const $ = (id) => document.getElementById(id);
    
    // Vista "mapa" al principio
    const vistas = ["mapa", "inicio", "pregunta", "resultados", "metodologia", "guia"]; 
    let indice = 0, respuestas = {}, vistaAnterior = "mapa";

    function contarLimites() {
      let imp = 0, vetos = 0;
      Object.values(respuestas).forEach(r => {
        if (r.importante) imp++;
        if (r.inaceptable) vetos++;
      });
      return { imp, vetos };
    }

    function actualizarContadoresUI() {
      const { imp, vetos } = contarLimites();
      if ($("cont-imp")) {
        $("cont-imp").textContent = `⭐️ Importantes: ${imp}/${MAX_IMP}`;
        $("cont-imp").className = imp === MAX_IMP ? "cont-max" : (imp > 0 ? "cont-activo" : "");
      }
      if ($("cont-veto")) {
        $("cont-veto").textContent = `🚫 Inaceptables: ${vetos}/${MAX_VETOS}`;
        $("cont-veto").className = vetos === MAX_VETOS ? "cont-max" : (vetos > 0 ? "cont-activo" : "");
      }
    }

    function mostrar(nombre) {
      vistas.forEach((v) => { if ($("vista-" + v)) $("vista-" + v).hidden = v !== nombre; });
      window.scrollTo(0, 0);
    }

    function pintarNavegacion() {
      const nav = $("nav-numeros");
      if (!nav) return;
      nav.innerHTML = "";
      PREGUNTAS.forEach((q, i) => {
        const btn = document.createElement("button");
        btn.className = "btn-num";
        if (i === indice) btn.classList.add("actual");
        else if (respuestas[q.id] && (respuestas[q.id].principal || respuestas[q.id].inaceptable)) btn.classList.add("respondida");
        btn.textContent = i + 1;
        btn.onclick = () => { indice = i; pintarPregunta(); };
        nav.append(btn);
      });
    }

    function pintarPregunta() {
      if (!PREGUNTAS || !PREGUNTAS[indice]) return;
      const q = PREGUNTAS[indice];
      actualizarContadoresUI();
      pintarNavegacion();
      
      if ($("progreso")) $("progreso").style.width = ((indice) / PREGUNTAS.length) * 100 + "%";
      if ($("contador")) $("contador").textContent = "Pregunta " + (indice + 1) + " de " + PREGUNTAS.length;
      if ($("tema")) $("tema").textContent = q.tema;
      if ($("texto-pregunta")) $("texto-pregunta").textContent = q.texto;
      
      // Mostrar contexto informativo
      if ($("caja-contexto")) {
        if (q.contexto) {
          $("caja-contexto").innerHTML = `
            <details class="detalles-contexto">
              <summary>ℹ️ ¿De qué va este debate?</summary>
              <p>${q.contexto}</p>
            </details>
          `;
          $("caja-contexto").style.display = "block";
        } else {
          $("caja-contexto").style.display = "none";
        }
      }
      
      const contenedorOpts = $("opciones-dinamicas");
      if (contenedorOpts) {
        contenedorOpts.innerHTML = "";
        const previa = respuestas[q.id] || {};
        
        q.opciones.forEach(opt => {
          const div = document.createElement("div");
          div.className = "opcion-tarjeta";
          if (previa.principal === opt.id) div.classList.add("sel-prin");
          if (previa.secundaria === opt.id) div.classList.add("sel-sec");
          if (previa.inaceptable === opt.id) div.classList.add("sel-veto");
          
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

          const btnVeto = document.createElement("button");
          btnVeto.className = "btn-veto" + (previa.inaceptable === opt.id ? " activo" : "");
          btnVeto.textContent = previa.inaceptable === opt.id ? "Línea roja" : "Inaceptable 🚫";
          btnVeto.onclick = () => marcarOpcion(q.id, opt.id, 'inaceptable');

          cajaBotones.append(btnPrin, btnSec, btnVeto);
          div.append(txt, cajaBotones);
          contenedorOpts.append(div);
        });
      }

      if ($("chk-importante")) {
        $("chk-importante").checked = !!(respuestas[q.id] && respuestas[q.id].importante);
        $("chk-importante").onchange = (e) => {
          const { imp } = contarLimites();
          if (e.target.checked && imp >= MAX_IMP) {
            alert(`Ya has marcado el máximo de ${MAX_IMP} temas importantes. Desmarca otro primero.`);
            e.target.checked = false;
          } else {
            if (!respuestas[q.id]) respuestas[q.id] = {};
            respuestas[q.id].importante = e.target.checked;
            actualizarContadoresUI();
          }
        };
      }

      if ($("btn-atras")) $("btn-atras").style.visibility = indice === 0 ? "hidden" : "visible";
      if ($("btn-siguiente")) $("btn-siguiente").disabled = !(respuestas[q.id] && (respuestas[q.id].principal || respuestas[q.id].inaceptable));
    }

    function marcarOpcion(idPregunta, idOpcion, tipo) {
      if (!respuestas[idPregunta]) respuestas[idPregunta] = { importante: $("chk-importante") ? $("chk-importante").checked : false };
      
      if (tipo === 'principal') {
        if (respuestas[idPregunta].principal === idOpcion) {
          respuestas[idPregunta].principal = null; respuestas[idPregunta].secundaria = null;
        } else {
          respuestas[idPregunta].principal = idOpcion;
          if (respuestas[idPregunta].secundaria === idOpcion) respuestas[idPregunta].secundaria = null;
          if (respuestas[idPregunta].inaceptable === idOpcion) respuestas[idPregunta].inaceptable = null;
        }
      } else if (tipo === 'secundaria') {
        respuestas[idPregunta].secundaria = respuestas[idPregunta].secundaria === idOpcion ? null : idOpcion;
        if (respuestas[idPregunta].inaceptable === idOpcion) respuestas[idPregunta].inaceptable = null;
      } else if (tipo === 'inaceptable') {
        const { vetos } = contarLimites();
        if (respuestas[idPregunta].inaceptable === idOpcion) {
          respuestas[idPregunta].inaceptable = null;
        } else {
          if (!respuestas[idPregunta].inaceptable && vetos >= MAX_VETOS) {
            alert(`Solo puedes marcar ${MAX_VETOS} opciones inaceptables en todo el test.`);
            return;
          }
          respuestas[idPregunta].inaceptable = idOpcion;
          if (respuestas[idPregunta].principal === idOpcion) { respuestas[idPregunta].principal = null; respuestas[idPregunta].secundaria = null; }
          if (respuestas[idPregunta].secundaria === idOpcion) respuestas[idPregunta].secundaria = null;
        }
      }
      pintarPregunta();
    }

    function avanzar() {
      if (indice < PREGUNTAS.length - 1) { 
        indice++; pintarPregunta(); 
      } else { 
        pintarResultados(); mostrar("resultados"); 
      }
    }

    function pintarResultados() {
      const partidosAUsar = window.partidosActivos || PARTIDOS;
      const res = partidosAUsar.map((p) => ({ p: p, r: calcularAfinidad(p, respuestas, PREGUNTAS) })).filter((x) => x.r.total !== null).sort((a, b) => b.r.total - a.r.total);
      const cont = $("lista-resultados");
      if (!cont) return;
      cont.innerHTML = "";
      
      if (!res.length) { cont.textContent = "No hay datos para calcular."; return; }
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
        
        x.r.detalle.forEach((d) => {
          const f = document.createElement("div"); f.className = "detalle-preg";
          f.innerHTML = `
            <div style="margin-bottom: 6px; font-size: 15px; color: ${d.vetado ? '#d1495b' : 'var(--acento)'};">
              <strong>${d.pregunta.tema} ${d.vetado ? '🚫 (Línea roja penalizada)' : ''}</strong>
            </div>
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

    // LISTA DE EVENTOS GENÉRICOS
    if ($("btn-whatsapp")) {
      $("btn-whatsapp").onclick = () => {
        if (!window._resultado || window._resultado.length === 0) return;
        const ganador = window._resultado[0];
        const texto = `He sacado un ${ganador.r.total}% de afinidad con ${ganador.p.nombre} en el Test Electoral 2026 🗳️.\n\n¡Hazlo tú a ver qué te sale!\n${location.href}`;
        const url = `https://api.whatsapp.com/send?text=${encodeURIComponent(texto)}`;
        window.open(url, '_blank');
      };
    }

    // NUEVO: Botón nativo para compartir en otras Apps
    if ($("btn-compartir")) {
      $("btn-compartir").addEventListener("click", () => {
        if (!window._resultado || window._resultado.length === 0) return;
        const ganador = window._resultado[0];
        const texto = `He sacado un ${ganador.r.total}% de afinidad con ${ganador.p.nombre} en el Test Electoral 2026 🗳️.\n\n¡Hazlo tú a ver qué te sale!`;
        
        if (navigator.share) {
          navigator.share({
            title: 'Test Electoral 2026',
            text: texto,
            url: location.href
          }).catch((error) => console.log('Error al compartir', error));
        } else {
          alert("Tu navegador actual no soporta esta función. ¡Copia el enlace de arriba para pasarlo!");
        }
      });
    }
    
    if ($("btn-empezar")) $("btn-empezar").onclick = () => { indice = 0; respuestas = {}; pintarPregunta(); mostrar("pregunta"); };
    if ($("btn-siguiente")) $("btn-siguiente").onclick = avanzar;
    if ($("btn-saltar")) $("btn-saltar").onclick = () => { delete respuestas[PREGUNTAS[indice].id]; avanzar(); };
    if ($("btn-atras")) $("btn-atras").onclick = () => { if (indice > 0) { indice--; pintarPregunta(); } };
    if ($("btn-repetir")) $("btn-repetir").onclick = () => { respuestas = {}; indice = 0; mostrar("mapa"); }; // Volver a elegir provincia
    
    // El nuevo botón para volver atrás
    if ($("btn-cambiar-prov")) $("btn-cambiar-prov").addEventListener("click", (e) => {
      e.preventDefault();
      window.scrollTo(0, 0); 
      mostrar("mapa"); 
    });

    if ($("btn-metodologia")) $("btn-metodologia").onclick = () => { const visible = vistas.find((v) => $("vista-" + v) && !$("vista-" + v).hidden); if (visible !== "metodologia") vistaAnterior = visible; mostrar("metodologia"); };
    if ($("btn-volver")) $("btn-volver").onclick = () => mostrar(vistaAnterior);

    // EVENTOS PARA LA GUÍA
    if ($("btn-guia")) $("btn-guia").onclick = () => { const visible = vistas.find((v) => $("vista-" + v) && !$("vista-" + v).hidden); if (visible !== "guia") vistaAnterior = visible; mostrar("guia"); };
    if ($("btn-volver-guia")) $("btn-volver-guia").onclick = () => mostrar(vistaAnterior);

    // EVENTOS SELECCIÓN DE PROVINCIA (DESPLEGABLES)
    document.querySelectorAll(".btn-provincia").forEach(btn => {
      btn.addEventListener("click", (e) => {
        window.provinciaSeleccionada = e.target.dataset.id;
        window.comunidadSeleccionada = e.target.dataset.ca;
        const nombreProvincia = e.target.textContent;
        
        document.querySelectorAll(".comunidad-desplegable").forEach(det => {
          det.removeAttribute("open");
        });
        
        if ($("sub-eleccion")) {
          $("sub-eleccion").innerHTML = `${ELECCIONES.nombre}<br><span style="display:inline-block; margin-top:6px; background:var(--acento-secundario); color:var(--acento-oscuro); padding:4px 12px; border-radius:99px; font-weight:700; font-size:14px;">📍 Circunscripción: ${nombreProvincia}</span>`;
        }
        mostrar("inicio");
      });
    });

    // INICIALIZACIÓN FINAL
    if (typeof ELECCIONES !== "undefined" && $("sub-eleccion")) {
      $("sub-eleccion").textContent = ELECCIONES.nombre + " · " + ELECCIONES.fecha;
    }
    if (typeof PREGUNTAS !== "undefined" && $("num-preguntas")) {
      $("num-preguntas").textContent = PREGUNTAS.length;
    }
    
    // Mostramos la selección de provincias al cargar
    mostrar("mapa"); 
  });
}
