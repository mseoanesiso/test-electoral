// Lógica del test (Cálculo de Afinidad, Límites, Navegación, Accesibilidad y Resultados)
const MAX_IMP = 3;
const MAX_VETOS = 2;

/**
 * Comprueba si una respuesta de usuario en una pregunta contiene una selección efectiva
 * (opción principal, secundaria o línea roja). Marcar solo "importante" sin elegir opción
 * no cuenta como pregunta respondida.
 */
function tieneSeleccionEfectiva(r) {
  return Boolean(r && (r.principal || r.secundaria || r.inaceptable));
}

/**
 * Calcula la afinidad entre las respuestas del usuario y un partido político.
 *
 * Criterios matemáticos y metodológicos:
 * 1. Solo intervienen las preguntas donde el usuario ha realizado una selección efectiva
 *    y donde el partido tiene una posición definida (los datos desconocidos no penalizan).
 * 2. Peso de la pregunta: W_i = (pesoBase || 1) * (importante ? 2 : 1).
 * 3. Si el usuario eligió opción principal (y/o secundaria):
 *    - Esa pregunta añade W_i al denominador máximo posible (sumaPesosMax) de todos los partidos con posición.
 *    - Si el partido coincide con 'inaceptable', recibe -1.5 * W_i.
 *    - Si coincide con 'principal', recibe +1.0 * W_i.
 *    - Si coincide con 'secundaria', recibe +0.5 * W_i.
 *    - Si no coincide con ninguna, recibe 0 puntos.
 * 4. Si el usuario SOLO marcó una línea roja ('inaceptable') sin elegir opción principal:
 *    - El usuario no ha expresado qué propuesta le gusta en ese tema, solo cuál rechaza.
 *    - Por tanto, no se infla sumaPesosMax para los partidos que NO proponen ese veto.
 *    - Si el partido SÍ propone la opción vetada, recibe la penalización (-1.5 * W_i) y suma W_i a su base evaluada.
 * 5. El porcentaje se acota en el intervalo [0, 100].
 */
function calcularAfinidad(partido, respuestas, preguntas) {
  let sumaPuntos = 0;
  let sumaPesosMax = 0;
  let coincidenciasPrincipales = 0;
  let coincidenciasSecundarias = 0;
  let vetosActivados = 0;
  let preguntasEvaluadasPartido = 0;
  let preguntasSinPosicionPartido = 0;

  const porTema = {};
  const detalle = [];

  const totalRespondidasUsuario = preguntas.filter(q => tieneSeleccionEfectiva(respuestas[q.id])).length;

  for (const q of preguntas) {
    const r = respuestas[q.id];
    if (!tieneSeleccionEfectiva(r)) continue;

    const pos = partido.posiciones ? partido.posiciones[q.id] : null;
    if (!pos || !pos.opcion) {
      preguntasSinPosicionPartido++;
      continue;
    }

    const tienePreferenciaPositiva = Boolean(r.principal || r.secundaria);
    const multiplicador = r.importante ? 2 : 1;
    const pesoTotalPregunta = (q.pesoBase || 1) * multiplicador;

    let puntos = 0;
    let pesoDenominadorPregunta = 0;
    const esVetado = Boolean(r.inaceptable && r.inaceptable === pos.opcion);

    if (esVetado) {
      puntos = -pesoTotalPregunta * 1.5;
      pesoDenominadorPregunta = pesoTotalPregunta;
      vetosActivados++;
    } else if (tienePreferenciaPositiva) {
      pesoDenominadorPregunta = pesoTotalPregunta;
      if (r.principal === pos.opcion) {
        puntos = 1 * pesoTotalPregunta;
        coincidenciasPrincipales++;
      } else if (r.secundaria === pos.opcion) {
        puntos = 0.5 * pesoTotalPregunta;
        coincidenciasSecundarias++;
      }
    } else {
      // Caso en que el usuario solo marcó línea roja en esta pregunta y el partido NO propone esa línea roja
      puntos = 0;
      pesoDenominadorPregunta = 0;
    }

    sumaPuntos += puntos;
    sumaPesosMax += pesoDenominadorPregunta;
    preguntasEvaluadasPartido++;

    if (pesoDenominadorPregunta > 0) {
      if (!porTema[q.tema]) porTema[q.tema] = { suma: 0, max: 0 };
      porTema[q.tema].suma += puntos;
      porTema[q.tema].max += pesoDenominadorPregunta;
    }

    const textoPrincipal = r.principal
      ? (q.opciones.find(o => o.id === r.principal)?.texto || "Ninguna")
      : "Sin preferencia principal";
    const textoSecundaria = r.secundaria
      ? (q.opciones.find(o => o.id === r.secundaria)?.texto || null)
      : null;
    const textoVeto = r.inaceptable
      ? (q.opciones.find(o => o.id === r.inaceptable)?.texto || null)
      : null;
    const textoPartido = q.opciones.find(o => o.id === pos.opcion)?.texto || "Sin definir";

    detalle.push({
      pregunta: q,
      textoTuya: textoPrincipal,
      textoSecundaria,
      textoVeto,
      textoPartido,
      puntosObtenidos: puntos,
      pesoMaximo: pesoDenominadorPregunta,
      fuente: `${pos.fuente || "Fuente no especificada"} (${pos.fecha || "s/f"})`,
      verificada: pos.verificada !== false,
      vetado: esVetado,
      importante: Boolean(r.importante)
    });
  }

  let total = null;
  if (sumaPesosMax > 0) {
    total = Math.round((sumaPuntos / sumaPesosMax) * 100);
    if (total < 0) total = 0;
    if (total > 100) total = 100;
  } else if (preguntasEvaluadasPartido > 0 && vetosActivados === 0) {
    // Si el usuario únicamente marcó líneas rojas en el test y este partido no incurrió en ninguna,
    // no hay base de preferencia positiva para otorgar un porcentaje de afinidad.
    total = null;
  }

  const temas = Object.entries(porTema).map(([tema, t]) => {
    let pct = t.max > 0 ? Math.round((t.suma / t.max) * 100) : 0;
    if (pct < 0) pct = 0;
    if (pct > 100) pct = 100;
    return { tema, pct };
  });

  return {
    total,
    temas,
    detalle,
    respondidas: totalRespondidasUsuario,
    evaluadas: preguntasEvaluadasPartido,
    sinPosicion: preguntasSinPosicionPartido,
    coincidenciasPrincipales,
    coincidenciasSecundarias,
    vetosActivados
  };
}

// Exportación compatible con entornos de pruebas (Node/CommonJS) sin afectar al navegador
if (typeof module !== "undefined" && module.exports) {
  module.exports = { calcularAfinidad, tieneSeleccionEfectiva };
}

if (typeof document !== "undefined") {
  document.addEventListener("DOMContentLoaded", () => {
    const $ = (id) => document.getElementById(id);

    const vistas = ["mapa", "inicio", "pregunta", "resultados", "metodologia", "guia"];
    let indice = 0;
    let respuestas = {};
    let vistaAnterior = "mapa";
    let temporizadorAviso = null;

    function mostrarAvisoInterfaz(idElemento, mensaje, tipo = "error") {
      const el = $(idElemento);
      if (!el) return;
      el.textContent = mensaje;
      el.className = "aviso-interfaz" + (tipo === "info" ? " aviso-info" : "");
      el.hidden = false;

      if (temporizadorAviso) clearTimeout(temporizadorAviso);
      temporizadorAviso = setTimeout(() => {
        el.hidden = true;
      }, 5000);
    }

    function ocultarAvisos() {
      if ($("aviso-interfaz")) $("aviso-interfaz").hidden = true;
      if ($("aviso-compartir")) $("aviso-compartir").hidden = true;
    }

    function limpiarRespuestaVacia(idPregunta) {
      const r = respuestas[idPregunta];
      if (!r) return;
      if (!r.principal && !r.secundaria && !r.inaceptable && !r.importante) {
        delete respuestas[idPregunta];
      }
    }

    function contarLimites() {
      let imp = 0;
      let vetos = 0;
      Object.values(respuestas).forEach(r => {
        if (r && r.importante) imp++;
        if (r && r.inaceptable) vetos++;
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

    function reiniciarEstadoTest() {
      indice = 0;
      respuestas = {};
      window._resultado = null;
      ocultarAvisos();
    }

    function mostrar(nombre) {
      ocultarAvisos();
      vistas.forEach((v) => {
        if ($("vista-" + v)) $("vista-" + v).hidden = v !== nombre;
      });
      window.scrollTo(0, 0);
    }

    function pintarNavegacion() {
      const nav = $("nav-numeros");
      if (!nav) return;
      nav.textContent = "";

      PREGUNTAS.forEach((q, i) => {
        const btn = document.createElement("button");
        btn.type = "button";
        btn.className = "btn-num";
        const respondida = tieneSeleccionEfectiva(respuestas[q.id]);

        if (i === indice) {
          btn.classList.add("actual");
          btn.setAttribute("aria-current", "step");
        } else if (respondida) {
          btn.classList.add("respondida");
        }

        btn.textContent = String(i + 1);
        btn.setAttribute(
          "aria-label",
          `Pregunta ${i + 1}: ${q.tema}${respondida ? " (respondida)" : " (pendiente)"}`
        );
        btn.addEventListener("click", () => {
          indice = i;
          pintarPregunta();
        });
        nav.append(btn);
      });
    }

    function pintarPregunta() {
      if (typeof PREGUNTAS === "undefined" || !PREGUNTAS[indice]) return;
      const q = PREGUNTAS[indice];
      ocultarAvisos();
      actualizarContadoresUI();
      pintarNavegacion();

      const respondidasCount = PREGUNTAS.filter(p => tieneSeleccionEfectiva(respuestas[p.id])).length;
      if ($("progreso")) {
        const pctProgreso = Math.round(((indice + 1) / PREGUNTAS.length) * 100);
        $("progreso").style.width = pctProgreso + "%";
      }
      if ($("contador")) {
        $("contador").textContent = `Pregunta ${indice + 1} de ${PREGUNTAS.length} · Respondidas: ${respondidasCount}/${PREGUNTAS.length}`;
      }
      if ($("tema")) $("tema").textContent = q.tema;
      if ($("texto-pregunta")) $("texto-pregunta").textContent = q.texto;

      const cajaContexto = $("caja-contexto");
      if (cajaContexto) {
        cajaContexto.textContent = "";
        if (q.contexto) {
          const details = document.createElement("details");
          details.className = "detalles-contexto";
          const summary = document.createElement("summary");
          summary.textContent = "ℹ️ ¿De qué va este debate?";
          const p = document.createElement("p");
          p.textContent = q.contexto;
          details.append(summary, p);
          cajaContexto.append(details);
          cajaContexto.style.display = "block";
        } else {
          cajaContexto.style.display = "none";
        }
      }

      const contenedorOpts = $("opciones-dinamicas");
      if (contenedorOpts) {
        contenedorOpts.textContent = "";
        const previa = respuestas[q.id] || {};

        q.opciones.forEach(opt => {
          const div = document.createElement("div");
          div.className = "opcion-tarjeta";

          const esPrin = previa.principal === opt.id;
          const esSec = previa.secundaria === opt.id;
          const esVeto = previa.inaceptable === opt.id;

          if (esPrin) div.classList.add("sel-prin");
          if (esSec) div.classList.add("sel-sec");
          if (esVeto) div.classList.add("sel-veto");

          if (esPrin || esSec || esVeto) {
            const badge = document.createElement("span");
            badge.className = "opcion-cabecera-estado " + (esPrin ? "estado-prin" : esSec ? "estado-sec" : "estado-veto");
            badge.textContent = esPrin ? "✓ Tu opción principal (100%)" : esSec ? "✓ Tu 2.ª opción aceptable (50%)" : "🚫 Línea roja (Penaliza)";
            div.append(badge);
          }

          const txt = document.createElement("p");
          txt.textContent = opt.texto;

          const cajaBotones = document.createElement("div");
          cajaBotones.className = "opcion-botones";

          const btnPrin = document.createElement("button");
          btnPrin.type = "button";
          btnPrin.className = "btn-prin" + (esPrin ? " activo" : "");
          btnPrin.setAttribute("aria-pressed", String(esPrin));
          btnPrin.textContent = esPrin ? "✓ Principal elegida" : "Elegir principal";
          btnPrin.addEventListener("click", () => marcarOpcion(q.id, opt.id, "principal"));

          const btnSec = document.createElement("button");
          btnSec.type = "button";
          btnSec.className = "btn-sec" + (esSec ? " activo" : "");
          btnSec.setAttribute("aria-pressed", String(esSec));
          btnSec.textContent = esSec ? "✓ 2.ª opción" : "2.ª opción aceptable";
          if (!previa.principal || esPrin) {
            btnSec.hidden = true;
          }
          btnSec.addEventListener("click", () => marcarOpcion(q.id, opt.id, "secundaria"));

          const btnVeto = document.createElement("button");
          btnVeto.type = "button";
          btnVeto.className = "btn-veto" + (esVeto ? " activo" : "");
          btnVeto.setAttribute("aria-pressed", String(esVeto));
          btnVeto.textContent = esVeto ? "🚫 Línea roja activa" : "Inaceptable 🚫";
          btnVeto.addEventListener("click", () => marcarOpcion(q.id, opt.id, "inaceptable"));

          cajaBotones.append(btnPrin, btnSec, btnVeto);
          div.append(txt, cajaBotones);
          contenedorOpts.append(div);
        });
      }

      const chkImp = $("chk-importante");
      if (chkImp) {
        chkImp.checked = Boolean(respuestas[q.id] && respuestas[q.id].importante);
        chkImp.onchange = (e) => {
          const { imp } = contarLimites();
          const yaEraImportante = Boolean(respuestas[q.id] && respuestas[q.id].importante);
          if (e.target.checked && !yaEraImportante && imp >= MAX_IMP) {
            mostrarAvisoInterfaz(
              "aviso-interfaz",
              `Ya has alcanzado el límite de ${MAX_IMP} temas clave. Desmarca otro tema clave si prefieres priorizar este.`
            );
            e.target.checked = false;
            return;
          }
          if (!respuestas[q.id]) respuestas[q.id] = {};
          respuestas[q.id].importante = e.target.checked;
          limpiarRespuestaVacia(q.id);
          actualizarContadoresUI();
        };
      }

      if ($("btn-atras")) {
        $("btn-atras").style.visibility = indice === 0 ? "hidden" : "visible";
      }
      if ($("btn-siguiente")) {
        $("btn-siguiente").disabled = !tieneSeleccionEfectiva(respuestas[q.id]);
        $("btn-siguiente").textContent = indice === PREGUNTAS.length - 1 ? "Ver resultados →" : "Siguiente →";
      }
    }

    function marcarOpcion(idPregunta, idOpcion, tipo) {
      if (!respuestas[idPregunta]) {
        respuestas[idPregunta] = {
          principal: null,
          secundaria: null,
          inaceptable: null,
          importante: $("chk-importante") ? $("chk-importante").checked : false
        };
      }

      const actual = respuestas[idPregunta];

      if (tipo === "principal") {
        if (actual.principal === idOpcion) {
          actual.principal = null;
          actual.secundaria = null;
        } else {
          actual.principal = idOpcion;
          if (actual.secundaria === idOpcion) actual.secundaria = null;
          if (actual.inaceptable === idOpcion) actual.inaceptable = null;
        }
      } else if (tipo === "secundaria") {
        if (!actual.principal || actual.principal === idOpcion) return;
        actual.secundaria = actual.secundaria === idOpcion ? null : idOpcion;
        if (actual.inaceptable === idOpcion) actual.inaceptable = null;
      } else if (tipo === "inaceptable") {
        const { vetos } = contarLimites();
        if (actual.inaceptable === idOpcion) {
          actual.inaceptable = null;
        } else {
          if (!actual.inaceptable && vetos >= MAX_VETOS) {
            mostrarAvisoInterfaz(
              "aviso-interfaz",
              `Solo puedes marcar un máximo de ${MAX_VETOS} líneas rojas (opciones inaceptables) en todo el cuestionario.`
            );
            return;
          }
          actual.inaceptable = idOpcion;
          if (actual.principal === idOpcion) {
            actual.principal = null;
            actual.secundaria = null;
          }
          if (actual.secundaria === idOpcion) {
            actual.secundaria = null;
          }
        }
      }

      limpiarRespuestaVacia(idPregunta);
      pintarPregunta();
    }

    function avanzar() {
      if (indice < PREGUNTAS.length - 1) {
        indice++;
        pintarPregunta();
        window.scrollTo(0, 0);
      } else {
        pintarResultados();
        mostrar("resultados");
      }
    }

    function pintarResultados() {
      const partidosAUsar = window.partidosActivos || PARTIDOS;
      const evaluaciones = partidosAUsar
        .map((p) => ({ p, r: calcularAfinidad(p, respuestas, PREGUNTAS) }))
        .filter((x) => x.r.total !== null)
        .sort((a, b) => b.r.total - a.r.total);

      const cont = $("lista-resultados");
      const notaRes = $("nota-resultados");
      if (!cont) return;
      cont.textContent = "";

      const totalResp = PREGUNTAS.filter(q => tieneSeleccionEfectiva(respuestas[q.id])).length;

      if (notaRes) {
        notaRes.textContent = totalResp > 0
          ? `Calculado a partir de tus respuestas en ${totalResp} de ${PREGUNTAS.length} temas.`
          : "No has seleccionado opciones con preferencia positiva para calcular porcentajes de afinidad.";
      }

      if (!evaluaciones.length) {
        const msgVacio = document.createElement("p");
        msgVacio.textContent = "No hay datos suficientes para calcular porcentajes de coincidencia. Responde al menos a una pregunta eligiendo una opción principal.";
        cont.append(msgVacio);
        window._resultado = [];
        return;
      }

      window._resultado = evaluaciones;

      evaluaciones.forEach((x) => {
        const div = document.createElement("div");
        div.className = "partido";

        // Cabecera del partido
        const cab = document.createElement("div");
        cab.className = "partido-cab";

        const spanNombre = document.createElement("span");
        spanNombre.className = "partido-nombre";
        spanNombre.textContent = x.p.nombre;

        const spanPct = document.createElement("span");
        spanPct.className = "partido-pct";
        spanPct.textContent = `${x.r.total} %`;

        cab.append(spanNombre, spanPct);

        // Etiquetas de resumen (coincidencias y vetos)
        const resumenMetricas = document.createElement("div");
        resumenMetricas.className = "resumen-metricas-partido";

        const tagPrin = document.createElement("span");
        tagPrin.className = "metrica-tag";
        tagPrin.textContent = `✓ Coincidencias principales: ${x.r.coincidenciasPrincipales}`;
        resumenMetricas.append(tagPrin);

        if (x.r.coincidenciasSecundarias > 0) {
          const tagSec = document.createElement("span");
          tagSec.className = "metrica-tag";
          tagSec.textContent = `🤝 2.ª opción: ${x.r.coincidenciasSecundarias}`;
          resumenMetricas.append(tagSec);
        }

        if (x.r.vetosActivados > 0) {
          const tagVeto = document.createElement("span");
          tagVeto.className = "metrica-tag tag-veto";
          tagVeto.textContent = `🚫 Líneas rojas activadas: ${x.r.vetosActivados}`;
          resumenMetricas.append(tagVeto);
        }

        if (x.r.sinPosicion > 0) {
          const tagSinPos = document.createElement("span");
          tagSinPos.className = "metrica-tag";
          tagSinPos.textContent = `ℹ️ Sin datos en ${x.r.sinPosicion} pregunta(s)`;
          resumenMetricas.append(tagSinPos);
        }

        // Barra visual
        const barra = document.createElement("div");
        barra.className = "barra";
        barra.setAttribute("role", "progressbar");
        barra.setAttribute("aria-valuenow", String(x.r.total));
        barra.setAttribute("aria-valuemin", "0");
        barra.setAttribute("aria-valuemax", "100");
        barra.setAttribute("aria-label", `Coincidencia con ${x.p.nombre}: ${x.r.total}%`);

        const relleno = document.createElement("div");
        relleno.style.width = `${x.r.total}%`;
        relleno.style.backgroundColor = x.p.color || "var(--acento)";
        barra.append(relleno);

        // Desplegable de detalle
        const det = document.createElement("details");
        const sum = document.createElement("summary");
        sum.textContent = "Ver desglose por tema, comparativa de respuestas y fuentes";
        det.append(sum);

        if (x.r.temas.length > 0) {
          const bloqueTemas = document.createElement("div");
          bloqueTemas.className = "bloque-temas-resumen";
          x.r.temas.forEach((t) => {
            const f = document.createElement("div");
            f.className = "tema-fila";
            const sTema = document.createElement("span");
            sTema.textContent = t.tema;
            const sPct = document.createElement("strong");
            sPct.textContent = `${t.pct} %`;
            f.append(sTema, sPct);
            bloqueTemas.append(f);
          });
          det.append(bloqueTemas);
        }

        x.r.detalle.forEach((d) => {
          const f = document.createElement("div");
          f.className = "detalle-preg";

          const titulo = document.createElement("div");
          titulo.className = "detalle-preg-titulo" + (d.vetado ? " es-vetado" : "");
          let textoTitulo = `${d.pregunta.id}. ${d.pregunta.tema}`;
          if (d.importante) textoTitulo += " ⭐️ (Tema clave x2)";
          if (d.vetado) textoTitulo += " 🚫 (Línea roja penalizada)";
          titulo.textContent = textoTitulo;

          const comparativa = document.createElement("div");
          comparativa.className = "detalle-comparativa";

          const filaTuya = document.createElement("div");
          const strongTu = document.createElement("strong");
          strongTu.textContent = "👤 Tu elección: ";
          const spanTu = document.createElement("span");
          spanTu.textContent = d.textoTuya;
          filaTuya.append(strongTu, spanTu);
          comparativa.append(filaTuya);

          if (d.textoSecundaria) {
            const filaSec = document.createElement("div");
            const strongSec = document.createElement("strong");
            strongSec.textContent = "🤝 Tu 2.ª opción: ";
            const spanSec = document.createElement("span");
            spanSec.textContent = d.textoSecundaria;
            filaSec.append(strongSec, spanSec);
            comparativa.append(filaSec);
          }

          if (d.textoVeto) {
            const filaVeto = document.createElement("div");
            filaVeto.className = "detalle-veto-usuario";
            filaVeto.textContent = `🚫 Vetaste: ${d.textoVeto}`;
            comparativa.append(filaVeto);
          }

          const filaPartido = document.createElement("div");
          const strongPart = document.createElement("strong");
          strongPart.textContent = `🏛️ ${x.p.nombre}: `;
          const spanPart = document.createElement("span");
          spanPart.textContent = d.textoPartido;
          filaPartido.append(strongPart, spanPart);
          comparativa.append(filaPartido);

          const meta = document.createElement("div");
          meta.className = "detalle-meta";

          const spanPuntos = document.createElement("span");
          spanPuntos.textContent = `⚖️ Puntos: ${d.puntosObtenidos} / ${d.pesoMaximo}`;

          const spanFuente = document.createElement("span");
          spanFuente.textContent = `🔗 Fuente: ${d.fuente}`;

          const badgeVerif = document.createElement("span");
          badgeVerif.className = "badge-verificacion " + (d.verificada ? "badge-verificada" : "badge-revision");
          badgeVerif.textContent = d.verificada ? "✓ Fuente documental verificada" : "⚠️ Posición en revisión / síntesis";

          meta.append(spanPuntos, spanFuente, badgeVerif);

          f.append(titulo, comparativa, meta);
          det.append(f);
        });

        div.append(cab, resumenMetricas, barra, det);
        cont.append(div);
      });
    }

    function obtenerTextoCompartir() {
      if (!window._resultado || window._resultado.length === 0) return null;
      const top = window._resultado.slice(0, 2).map(x => `${x.p.nombre} (${x.r.total}%)`).join(" y ");
      return `He completado el Test de Afinidad Electoral 2026 🗳️. Mis mayores coincidencias de programa han sido con ${top}.\n\nCompruébalo de forma anónima aquí:`;
    }

    // Eventos de compartir
    if ($("btn-whatsapp")) {
      $("btn-whatsapp").addEventListener("click", () => {
        const base = obtenerTextoCompartir();
        if (!base) return;
        const texto = `${base}\n${location.href}`;
        const url = `https://api.whatsapp.com/send?text=${encodeURIComponent(texto)}`;
        window.open(url, "_blank", "noopener,noreferrer");
      });
    }

    if ($("btn-compartir")) {
      $("btn-compartir").addEventListener("click", async () => {
        const base = obtenerTextoCompartir();
        if (!base) return;

        if (navigator.share) {
          try {
            await navigator.share({
              title: "Test Electoral 2026",
              text: base,
              url: location.href
            });
            return;
          } catch (err) {
            if (err && err.name === "AbortError") return;
          }
        }

        const textoCompleto = `${base} ${location.href}`;
        if (navigator.clipboard && navigator.clipboard.writeText) {
          try {
            await navigator.clipboard.writeText(textoCompleto);
            mostrarAvisoInterfaz("aviso-compartir", "✓ Resumen y enlace copiados al portapapeles.", "info");
            return;
          } catch (_) {
            // Continúa al aviso alternativo
          }
        }
        mostrarAvisoInterfaz("aviso-compartir", `Copia este enlace para compartir el test: ${location.href}`, "info");
      });
    }

    // Navegación del cuestionario
    if ($("btn-empezar")) {
      $("btn-empezar").addEventListener("click", () => {
        reiniciarEstadoTest();
        pintarPregunta();
        mostrar("pregunta");
      });
    }

    if ($("btn-siguiente")) {
      $("btn-siguiente").addEventListener("click", avanzar);
    }

    if ($("btn-saltar")) {
      $("btn-saltar").addEventListener("click", () => {
        if (PREGUNTAS[indice]) {
          delete respuestas[PREGUNTAS[indice].id];
        }
        avanzar();
      });
    }

    if ($("btn-atras")) {
      $("btn-atras").addEventListener("click", () => {
        if (indice > 0) {
          indice--;
          pintarPregunta();
          window.scrollTo(0, 0);
        }
      });
    }

    if ($("btn-repetir")) {
      $("btn-repetir").addEventListener("click", () => {
        reiniciarEstadoTest();
        mostrar("mapa");
      });
    }

    if ($("btn-cambiar-prov")) {
      $("btn-cambiar-prov").addEventListener("click", (e) => {
        e.preventDefault();
        reiniciarEstadoTest();
        mostrar("mapa");
      });
    }

    if ($("logo")) {
      $("logo").addEventListener("click", (e) => {
        e.preventDefault();
        reiniciarEstadoTest();
        mostrar("mapa");
      });
    }

    if ($("btn-metodologia")) {
      $("btn-metodologia").addEventListener("click", () => {
        const visible = vistas.find((v) => $("vista-" + v) && !$("vista-" + v).hidden);
        if (visible && visible !== "metodologia" && visible !== "guia") vistaAnterior = visible;
        mostrar("metodologia");
      });
    }
    if ($("btn-volver")) {
      $("btn-volver").addEventListener("click", () => mostrar(vistaAnterior));
    }

    if ($("btn-guia")) {
      $("btn-guia").addEventListener("click", () => {
        const visible = vistas.find((v) => $("vista-" + v) && !$("vista-" + v).hidden);
        if (visible && visible !== "guia" && visible !== "metodologia") vistaAnterior = visible;
        mostrar("guia");
      });
    }
    if ($("btn-volver-guia")) {
      $("btn-volver-guia").addEventListener("click", () => mostrar(vistaAnterior));
    }

    // Selección de Comunidad Autónoma
    document.querySelectorAll(".btn-comunidad").forEach(btn => {
      btn.addEventListener("click", () => {
        reiniciarEstadoTest();
        window.comunidadSeleccionada = btn.dataset.id;
        const nombreCA = btn.textContent.trim();

        window.partidosActivos = PARTIDOS.filter(p =>
          !p.comunidades ||
          p.comunidades.includes("todas") ||
          p.comunidades.includes(window.comunidadSeleccionada)
        );

        if ($("lista-partidos-texto")) {
          $("lista-partidos-texto").textContent = window.partidosActivos.map(p => p.nombre).join(", ");
        }

        const subEl = $("sub-eleccion");
        if (subEl && typeof ELECCIONES !== "undefined") {
          subEl.textContent = "";
          const textoBase = document.createTextNode(`${ELECCIONES.nombre} (${ELECCIONES.fecha})`);
          const br = document.createElement("br");
          const badgeCA = document.createElement("span");
          badgeCA.className = "pildora-comunidad";
          badgeCA.textContent = `📍 Comunidad: ${nombreCA}`;
          subEl.append(textoBase, br, badgeCA);
        }

        mostrar("inicio");
      });
    });

    // Inicialización de datos estáticos
    if (typeof ELECCIONES !== "undefined") {
      if ($("fecha-act")) $("fecha-act").textContent = ELECCIONES.actualizacion;
      if ($("sub-eleccion")) $("sub-eleccion").textContent = `${ELECCIONES.nombre} · ${ELECCIONES.fecha}`;
    }
    if (typeof PREGUNTAS !== "undefined" && $("num-preguntas")) {
      $("num-preguntas").textContent = String(PREGUNTAS.length);
    }

    mostrar("mapa");
  });
}
