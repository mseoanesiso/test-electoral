// Lógica del test (opciones, límites, navegación, contexto, WhatsApp, guía y registro de cambios)
const MAX_IMP = 3;
const MAX_VETOS = 2;
const PENALIZACION_VETO = 1.5; // la línea roja resta 1,5 veces el peso de la pregunta

function esc(s) {
  return String(s == null ? "" : s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
}

// Una pregunta cuenta como respondida solo si hay opción principal o línea roja.
// (Marcar únicamente "tema clave" no cuenta.)
function tieneRespuesta(r) {
  return !!(r && (r.principal || r.inaceptable));
}

// La fuente puede ser un texto (formato antiguo) o un objeto { texto, url, tipo, fecha }.
function normalizarFuente(pos) {
  const f = pos.fuente;
  if (f && typeof f === "object") {
    return { texto: f.texto || "", url: f.url || pos.url || "", tipo: f.tipo || "", fecha: f.fecha || pos.fecha || "" };
  }
  return { texto: f || "", url: pos.url || "", tipo: pos.tipo || "", fecha: pos.fecha || "" };
}

function calcularAfinidad(partido, respuestas, preguntas) {
  let sumaPuntos = 0, sumaPesosMax = 0;
  const porTema = {};
  const detalle = [];

  for (const q of preguntas) {
    const r = respuestas[q.id];
    if (!tieneRespuesta(r)) continue;

    const pos = partido.posiciones[q.id];
    if (!pos || !pos.opcion) continue; // sin posición: esa pregunta no cuenta para este partido

    const multiplicador = r.importante ? 2 : 1;
    const pesoTotalPregunta = (q.pesoBase || 1) * multiplicador;

    let puntos = 0;
    if (r.inaceptable && r.inaceptable === pos.opcion) {
      puntos = -pesoTotalPregunta * PENALIZACION_VETO;
    } else if (r.principal && r.principal === pos.opcion) {
      puntos = pesoTotalPregunta;
    } else if (r.secundaria && r.secundaria === pos.opcion) {
      puntos = 0.5 * pesoTotalPregunta;
    }

    sumaPuntos += puntos;
    sumaPesosMax += pesoTotalPregunta;

    if (!porTema[q.tema]) porTema[q.tema] = { suma: 0, max: 0 };
    porTema[q.tema].suma += puntos;
    porTema[q.tema].max += pesoTotalPregunta;

    const op = (id) => { const o = q.opciones.find((x) => x.id === id); return o ? o.texto : null; };
    let textoTuya = r.principal ? esc(op(r.principal)) : "Ninguna (solo marcaste una línea roja)";
    if (r.inaceptable) textoTuya += " <br><span style='color:#d1495b'>🚫 Vetaste: " + esc(op(r.inaceptable)) + "</span>";
    const textoPartido = esc(op(pos.opcion) || "Sin definir");

    detalle.push({
      pregunta: q, textoTuya, textoPartido,
      puntosObtenidos: Math.round(puntos * 10) / 10, pesoMaximo: pesoTotalPregunta,
      fuente: normalizarFuente(pos), vetado: !!r.inaceptable && r.inaceptable === pos.opcion
    });
  }

  let total = sumaPesosMax ? Math.round((sumaPuntos / sumaPesosMax) * 100) : null;
  if (total !== null && total < 0) total = 0;

  const temas = Object.entries(porTema).map(([tema, t]) => {
    let pct = Math.round((t.suma / t.max) * 100);
    if (pct < 0) pct = 0;
    return { tema, pct };
  });

  return { total, temas, detalle, usadas: detalle.length };
}

function fuenteHTML(f) {
  let t = esc(f.texto || "Sin fuente indicada");
  if (/^https?:\/\//i.test(f.url)) {
    t = '<a href="' + esc(f.url) + '" target="_blank" rel="noopener noreferrer">' + t + "</a>";
  } else {
    t += " <em>(enlace pendiente de verificar)</em>";
  }
  if (f.tipo) t = esc(f.tipo) + ": " + t;
  if (f.fecha) t += " · " + esc(f.fecha);
  return t;
}

if (typeof module !== "undefined" && module.exports) {
  module.exports = { calcularAfinidad, tieneRespuesta, normalizarFuente };
}

if (typeof document !== "undefined") {
  document.addEventListener("DOMContentLoaded", () => {
    const $ = (id) => document.getElementById(id);

    const vistas = ["mapa", "inicio", "pregunta", "resultados", "metodologia", "guia", "cambios"];
    let indice = 0, respuestas = {}, vistaAnterior = "inicio";

    function contarLimites() {
      let imp = 0, vetos = 0;
      Object.values(respuestas).forEach((r) => {
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

    function vistaActual() {
      return vistas.find((v) => $("vista-" + v) && !$("vista-" + v).hidden);
    }

    function irA(nombre) {
      const visible = vistaActual();
      if (visible && visible !== nombre) vistaAnterior = visible;
      mostrar(nombre);
    }

    function pintarNavegacion() {
      const nav = $("nav-numeros");
      if (!nav) return;
      nav.innerHTML = "";
      PREGUNTAS.forEach((q, i) => {
        const btn = document.createElement("button");
        btn.className = "btn-num";
        if (i === indice) btn.classList.add("actual");
        else if (tieneRespuesta(respuestas[q.id])) btn.classList.add("respondida");
        btn.textContent = i + 1;
        btn.setAttribute("aria-label", "Ir a la pregunta " + (i + 1));
        btn.onclick = () => { indice = i; pintarPregunta(); };
        nav.append(btn);
      });
    }

    function pintarPregunta() {
      if (!PREGUNTAS || !PREGUNTAS[indice]) return;
      const q = PREGUNTAS[indice];
      actualizarContadoresUI();
      pintarNavegacion();

      if ($("progreso")) $("progreso").style.width = (indice / PREGUNTAS.length) * 100 + "%";
      if ($("contador")) $("contador").textContent = "Pregunta " + (indice + 1) + " de " + PREGUNTAS.length;
      if ($("tema")) $("tema").textContent = q.tema;
      if ($("texto-pregunta")) $("texto-pregunta").textContent = q.texto;

      if ($("caja-contexto")) {
        const caja = $("caja-contexto");
        caja.innerHTML = "";
        if (q.contexto) {
          const det = document.createElement("details"); det.className = "detalles-contexto";
          const sum = document.createElement("summary"); sum.textContent = "ℹ️ ¿De qué va este debate?";
          const p = document.createElement("p"); p.textContent = q.contexto;
          det.append(sum, p); caja.append(det);
          caja.style.display = "block";
        } else {
          caja.style.display = "none";
        }
      }

      const contenedorOpts = $("opciones-dinamicas");
      if (contenedorOpts) {
        contenedorOpts.innerHTML = "";
        const previa = respuestas[q.id] || {};

        q.opciones.forEach((opt) => {
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
          btnPrin.onclick = () => marcarOpcion(q.id, opt.id, "principal");

          const btnSec = document.createElement("button");
          btnSec.className = "btn-sec" + (previa.secundaria === opt.id ? " activo" : "");
          btnSec.textContent = previa.secundaria === opt.id ? "Tu 2ª opción" : "Aceptable";
          if (!previa.principal || previa.principal === opt.id) btnSec.style.display = "none";
          btnSec.onclick = () => marcarOpcion(q.id, opt.id, "secundaria");

          const btnVeto = document.createElement("button");
          btnVeto.className = "btn-veto" + (previa.inaceptable === opt.id ? " activo" : "");
          btnVeto.textContent = previa.inaceptable === opt.id ? "Línea roja" : "Inaceptable 🚫";
          btnVeto.onclick = () => marcarOpcion(q.id, opt.id, "inaceptable");

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
      if ($("btn-siguiente")) $("btn-siguiente").disabled = !tieneRespuesta(respuestas[q.id]);
    }

    function marcarOpcion(idPregunta, idOpcion, tipo) {
      if (!respuestas[idPregunta]) respuestas[idPregunta] = { importante: $("chk-importante") ? $("chk-importante").checked : false };

      if (tipo === "principal") {
        if (respuestas[idPregunta].principal === idOpcion) {
          respuestas[idPregunta].principal = null; respuestas[idPregunta].secundaria = null;
        } else {
          respuestas[idPregunta].principal = idOpcion;
          if (respuestas[idPregunta].secundaria === idOpcion) respuestas[idPregunta].secundaria = null;
          if (respuestas[idPregunta].inaceptable === idOpcion) respuestas[idPregunta].inaceptable = null;
        }
      } else if (tipo === "secundaria") {
        respuestas[idPregunta].secundaria = respuestas[idPregunta].secundaria === idOpcion ? null : idOpcion;
        if (respuestas[idPregunta].inaceptable === idOpcion) respuestas[idPregunta].inaceptable = null;
      } else if (tipo === "inaceptable") {
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

    function numRespondidas() {
      return PREGUNTAS.filter((q) => tieneRespuesta(respuestas[q.id])).length;
    }

    function pintarResultados() {
      const res = PARTIDOS.map((p) => ({ p: p, r: calcularAfinidad(p, respuestas, PREGUNTAS) }))
        .filter((x) => x.r.total !== null)
        .sort((a, b) => b.r.total - a.r.total);
      const cont = $("lista-resultados");
      if (!cont) return;
      cont.innerHTML = "";

      const n = numRespondidas();
      if ($("nota-resultados")) {
        $("nota-resultados").textContent = n
          ? `Calculado con las ${n} preguntas que respondiste (de ${PREGUNTAS.length}).`
          : "";
      }

      if (!res.length) { cont.textContent = "Responde al menos una pregunta para ver resultados."; window._resultado = []; return; }
      window._resultado = res;

      res.forEach((x) => {
        const div = document.createElement("div"); div.className = "partido";
        div.innerHTML = `<div class="partido-cab"><span class="partido-nombre">${esc(x.p.nombre)}</span><span class="partido-pct">${x.r.total} %</span></div>
                         <div class="barra"><div style="width: ${x.r.total}%; background: ${esc(x.p.color)}"></div></div>
                         <p class="nota base-preguntas">Basado en ${x.r.usadas} de ${n} preguntas respondidas${x.r.usadas < n ? " (en las demás este partido no tiene propuesta registrada)" : ""}.</p>`;

        const det = document.createElement("details");
        const sum = document.createElement("summary"); sum.textContent = "Ver desglose por tema y fuentes"; det.append(sum);

        x.r.temas.forEach((t) => {
          const f = document.createElement("div"); f.className = "tema-fila";
          f.innerHTML = `<span>${esc(t.tema)}</span><strong>${t.pct} %</strong>`; det.append(f);
        });

        x.r.detalle.forEach((d) => {
          const f = document.createElement("div"); f.className = "detalle-preg";
          f.innerHTML = `
            <div style="margin-bottom: 6px; font-size: 15px; color: ${d.vetado ? "#d1495b" : "var(--acento)"};">
              <strong>${esc(d.pregunta.tema)} ${d.vetado ? "🚫 (Línea roja penalizada)" : ""}</strong>
            </div>
            <div style="margin-bottom: 4px; padding-left: 8px; border-left: 2px solid var(--borde);">
              <div style="margin-bottom: 4px;">👤 <strong>Tú:</strong> ${d.textoTuya}</div>
              <div style="margin-bottom: 6px;">🏛️ <strong>Partido:</strong> ${d.textoPartido}</div>
            </div>
            <div class="nota" style="font-size: 12.5px; background: var(--fondo); padding: 4px 8px; border-radius: 4px; display: inline-block;">
              ⚖️ Puntos: <strong>${d.puntosObtenidos}/${d.pesoMaximo}</strong> &nbsp;·&nbsp; 🔗 Fuente: ${fuenteHTML(d.fuente)}
            </div>
          `;
          det.append(f);
        });
        div.append(det); cont.append(div);
      });
    }

    function pintarCambios() {
      const cont = $("lista-cambios");
      if (!cont) return;
      cont.innerHTML = "";
      const lista = (typeof CAMBIOS !== "undefined" && CAMBIOS) || [];
      if (!lista.length) { cont.textContent = "Todavía no hay cambios registrados."; return; }
      lista.forEach((c) => {
        const d = document.createElement("div"); d.className = "cambio";
        const f = document.createElement("strong"); f.textContent = c.fecha;
        const t = document.createElement("span"); t.textContent = " · " + c.texto;
        d.append(f, t); cont.append(d);
      });
    }

    function textoCompartir() {
      const g = window._resultado && window._resultado[0];
      if (!g) return null;
      return `He sacado un ${g.r.total}% de afinidad con ${g.p.nombre} en el Test Electoral 2026 🗳️.\n\n¡Hazlo tú a ver qué te sale!\n${location.href}`;
    }

    function textoCopiar() {
      const res = window._resultado || [];
      if (!res.length) return null;
      return "Mi resultado en el Test Electoral 2026:\n" +
        res.map((x) => `${x.p.nombre}: ${x.r.total} %`).join("\n") +
        `\n\nHazlo tú: ${location.href}`;
    }

    function copiarTexto(txt, boton) {
      const ok = () => { boton.textContent = "¡Copiado!"; setTimeout(() => { boton.textContent = "Copiar mi resultado"; }, 2000); };
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(txt).then(ok, () => copiaAlternativa(txt, ok));
      } else {
        copiaAlternativa(txt, ok);
      }
    }
    function copiaAlternativa(txt, ok) {
      const ta = document.createElement("textarea");
      ta.value = txt; ta.style.position = "fixed"; ta.style.opacity = "0";
      document.body.append(ta); ta.select();
      try { document.execCommand("copy"); ok(); } catch (e) { alert("No se ha podido copiar. Selecciona y copia el resultado manualmente."); }
      ta.remove();
    }

    // ---------- EVENTOS ----------
    if ($("btn-whatsapp")) {
      $("btn-whatsapp").onclick = () => {
        const texto = textoCompartir();
        if (!texto) return;
        window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(texto)}`, "_blank");
      };
    }
    if ($("btn-copiar")) {
      $("btn-copiar").onclick = () => { const t = textoCopiar(); if (t) copiarTexto(t, $("btn-copiar")); };
    }

    if ($("btn-empezar")) $("btn-empezar").onclick = () => { indice = 0; respuestas = {}; pintarPregunta(); mostrar("pregunta"); };
    if ($("btn-siguiente")) $("btn-siguiente").onclick = avanzar;
    if ($("btn-saltar")) $("btn-saltar").onclick = () => { delete respuestas[PREGUNTAS[indice].id]; avanzar(); };
    if ($("btn-atras")) $("btn-atras").onclick = () => { if (indice > 0) { indice--; pintarPregunta(); } };
    if ($("btn-repetir")) $("btn-repetir").onclick = () => { respuestas = {}; indice = 0; mostrar("inicio"); };
    if ($("logo")) $("logo").onclick = (e) => { e.preventDefault(); mostrar("inicio"); };

    if ($("btn-metodologia")) $("btn-metodologia").onclick = () => irA("metodologia");
    if ($("btn-volver")) $("btn-volver").onclick = () => mostrar(vistaAnterior);
    if ($("btn-guia")) $("btn-guia").onclick = () => irA("guia");
    if ($("btn-volver-guia")) $("btn-volver-guia").onclick = () => mostrar(vistaAnterior);
    if ($("btn-cambios")) $("btn-cambios").onclick = () => { pintarCambios(); irA("cambios"); };
    if ($("btn-volver-cambios")) $("btn-volver-cambios").onclick = () => mostrar(vistaAnterior);

// --------- EVENTOS DEL MAPA ---------
    document.querySelectorAll(".baldosa").forEach(btn => {
      btn.onclick = (e) => {
        window.comunidadSeleccionada = e.target.dataset.id; // Guardamos la CA
        const nombreCA = e.target.textContent;
        
        // Personalizamos la pantalla de inicio con la comunidad elegida
        if ($("sub-eleccion")) {
          $("sub-eleccion").innerHTML = `${ELECCIONES.nombre}<br><strong style="color:var(--acento)">📍 Test adaptado para ${nombreCA}</strong>`;
        }
        mostrar("inicio");
      };
    });

    // --------- INICIALIZACIÓN ---------
    if (typeof ELECCIONES !== "undefined") {
      if ($("sub-eleccion")) $("sub-eleccion").textContent = ELECCIONES.nombre + " · " + ELECCIONES.fecha;
      if ($("fecha-act") && ELECCIONES.actualizacion) $("fecha-act").textContent = ELECCIONES.actualizacion;
      if ($("aviso-beta") && (ELECCIONES.datosVerificados === false \vert{}\vert{} ELECCIONES.datosDeEjemplo)) $("aviso-beta").hidden = false;
    }
    if (typeof PREGUNTAS !== "undefined" && $("num-preguntas")) $("num-preguntas").textContent = PREGUNTAS.length;
    
    // Mostramos el mapa al cargar la web
    mostrar("mapa");
  });
}
