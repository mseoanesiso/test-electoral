// Lógica del test (Cálculo de Afinidad, SVG y Progressive Disclosure)
const MAX_IMP = 3;
const MAX_VETOS = 2;

function tieneSeleccionEfectiva(r) {
  return Boolean(r && (r.principal || r.secundaria || r.inaceptable));
}

function calcularAfinidad(partido, respuestas, preguntas) {
  let sumaPuntos = 0, sumaPesosMax = 0, coincidenciasPrincipales = 0, coincidenciasSecundarias = 0, vetosActivados = 0;
  let preguntasEvaluadas = 0, preguntasSinPosicion = 0;
  const porTema = {}, detalle = [];
  const totalRespondidasUsuario = preguntas.filter(q => tieneSeleccionEfectiva(respuestas[q.id])).length;

  for (const q of preguntas) {
    const r = respuestas[q.id];
    if (!tieneSeleccionEfectiva(r)) continue;

    const pos = partido.posiciones ? partido.posiciones[q.id] : null;
    const txtTuya = r.principal ? (q.opciones.find(o => o.id === r.principal)?.texto || "Ninguna") : "Sin preferencia principal";
    const txtSec = r.secundaria ? (q.opciones.find(o => o.id === r.secundaria)?.texto || null) : null;
    const txtVeto = r.inaceptable ? (q.opciones.find(o => o.id === r.inaceptable)?.texto || null) : null;

    if (!pos || !pos.opcion) {
      preguntasSinPosicion++;
      detalle.push({ pregunta: q, sinPosicion: true, textoTuya: txtTuya, textoSecundaria: txtSec, textoVeto: txtVeto, textoPartido: "Evidencia insuficiente", puntosObtenidos: 0, pesoMaximo: 0, fuente: "N/A", verificada: false, vetado: false, importante: Boolean(r.importante) });
      continue;
    }

    const pesoTotal = (q.pesoBase || 1) * (r.importante ? 2 : 1);
    let puntos = 0, pesoDenom = 0;
    const esVetado = Boolean(r.inaceptable && r.inaceptable === pos.opcion);

    if (esVetado) {
      puntos = -pesoTotal * 1.5; pesoDenom = pesoTotal; vetosActivados++;
    } else if (r.principal || r.secundaria) {
      pesoDenom = pesoTotal;
      if (r.principal === pos.opcion) { puntos = pesoTotal; coincidenciasPrincipales++; }
      else if (r.secundaria === pos.opcion) { puntos = pesoTotal * 0.5; coincidenciasSecundarias++; }
    }

    sumaPuntos += puntos; sumaPesosMax += pesoDenom; preguntasEvaluadas++;
    if (pesoDenom > 0) {
      if (!porTema[q.tema]) porTema[q.tema] = { suma: 0, max: 0 };
      porTema[q.tema].suma += puntos; porTema[q.tema].max += pesoDenom;
    }

    const txtPart = q.opciones.find(o => o.id === pos.opcion)?.texto || "Sin definir";
    detalle.push({ pregunta: q, sinPosicion: false, textoTuya: txtTuya, textoSecundaria: txtSec, textoVeto: txtVeto, textoPartido: txtPart, puntosObtenidos: puntos, pesoMaximo: pesoDenom, fuente: `${pos.fuente || "S/F"}`, urlFuente: pos.url || null, tipoEvidencia: pos.tipoEvidencia || "Síntesis", verificada: pos.verificada !== false, vetado: esVetado, importante: Boolean(r.importante) });
  }

  let total = sumaPesosMax > 0 ? Math.max(0, Math.min(100, Math.round((sumaPuntos / sumaPesosMax) * 100))) : null;
  const temas = Object.entries(porTema).map(([tema, t]) => ({ tema, pct: t.max > 0 ? Math.max(0, Math.round((t.suma / t.max) * 100)) : 0 }));
  const cobertura = totalRespondidasUsuario > 0 ? Math.round((preguntasEvaluadas / totalRespondidasUsuario) * 100) : 0;

  return { total, temas, detalle, respondidas: totalRespondidasUsuario, evaluadas: preguntasEvaluadas, sinPosicion: preguntasSinPosicion, coberturaDatos: cobertura, coincidenciasPrincipales, coincidenciasSecundarias, vetosActivados };
}

if (typeof module !== "undefined" && module.exports) module.exports = { calcularAfinidad, tieneSeleccionEfectiva };

if (typeof document !== "undefined") {
  document.addEventListener("DOMContentLoaded", () => {
    const $ = id => document.getElementById(id);
    const vistas = ["mapa", "inicio", "pregunta", "resultados", "metodologia", "guia"];
    let indice = 0, respuestas = {}, vistaAnterior = "mapa", temporizadorAviso = null;

    function mostrarAviso(id, msg, tipo="error") {
      const el = $(id); if (!el) return;
      el.textContent = msg; el.className = "aviso-interfaz" + (tipo === "info" ? " aviso-info" : ""); el.hidden = false;
      if (temporizadorAviso) clearTimeout(temporizadorAviso);
      temporizadorAviso = setTimeout(() => el.hidden = true, 5000);
    }
    function ocultarAvisos() { if($("aviso-interfaz")) $("aviso-interfaz").hidden = true; }

    function actualizarContadoresUI() {
      let imp = 0, vetos = 0;
      Object.values(respuestas).forEach(r => { if(r?.importante) imp++; if(r?.inaceptable) vetos++; });
      if($("cont-imp")) { $("cont-imp").textContent = `⭐️ Importantes: ${imp}/${MAX_IMP}`; $("cont-imp").className = imp === MAX_IMP ? "cont-max" : (imp > 0 ? "cont-activo" : ""); }
      if($("cont-veto")) { $("cont-veto").textContent = `🚫 Inaceptables: ${vetos}/${MAX_VETOS}`; $("cont-veto").className = vetos === MAX_VETOS ? "cont-max" : (vetos > 0 ? "cont-activo" : ""); }
    }

    function mostrar(nombre) {
      ocultarAvisos(); vistas.forEach(v => { if($("vista-"+v)) $("vista-"+v).hidden = v !== nombre; });
      window.scrollTo(0,0);
    }

    function pintarNavegacion() {
      const nav = $("nav-numeros"); if(!nav) return;
      nav.textContent = "";
      PREGUNTAS.forEach((q, i) => {
        const btn = document.createElement("button"); btn.className = "btn-num"; btn.textContent = i+1;
        if(i===indice) btn.classList.add("actual"); else if(tieneSeleccionEfectiva(respuestas[q.id])) btn.classList.add("respondida");
        btn.onclick = () => { indice = i; pintarPregunta(); };
        nav.append(btn);
      });
    }

    function pintarPregunta() {
      const q = PREGUNTAS[indice];
      ocultarAvisos(); actualizarContadoresUI(); pintarNavegacion();
      
      const respCount = PREGUNTAS.filter(p => tieneSeleccionEfectiva(respuestas[p.id])).length;
      if($("progreso")) $("progreso").style.width = Math.round(((indice+1)/PREGUNTAS.length)*100) + "%";
      if($("contador")) $("contador").textContent = `Pregunta ${indice+1} de ${PREGUNTAS.length} · Respondidas: ${respCount}`;
      if($("tema")) $("tema").textContent = q.tema;
      if($("texto-pregunta")) $("texto-pregunta").textContent = q.texto;

      const cc = $("caja-contexto");
      if(cc) {
        cc.innerHTML = q.contexto ? `<details><summary>ℹ️ ¿De qué va este debate?</summary><p>${q.contexto}</p></details>` : "";
      }

      const contOpts = $("opciones-dinamicas");
      if(contOpts) {
        contOpts.textContent = "";
        const prev = respuestas[q.id] || {};
        q.opciones.forEach(opt => {
          const div = document.createElement("div"); div.className = "opcion-tarjeta";
          if(prev.principal===opt.id) div.classList.add("sel-prin");
          if(prev.secundaria===opt.id) div.classList.add("sel-sec");
          if(prev.inaceptable===opt.id) div.classList.add("sel-veto");

          let bg = "";
          if(prev.principal===opt.id) bg = `<span class="opcion-cabecera-estado estado-prin">✓ Tu opción (100%)</span>`;
          else if(prev.secundaria===opt.id) bg = `<span class="opcion-cabecera-estado estado-sec">✓ 2.ª opción (50%)</span>`;
          else if(prev.inaceptable===opt.id) bg = `<span class="opcion-cabecera-estado estado-veto">🚫 Línea roja</span>`;
          
          div.innerHTML = `${bg}<p>${opt.texto}</p>`;
          
          const boxBtn = document.createElement("div"); boxBtn.className = "opcion-botones";
          
          const bp = document.createElement("button"); bp.className = "btn-prin" + (prev.principal===opt.id?" activo":""); bp.textContent = prev.principal===opt.id?"✓ Principal":"Elegir principal";
          bp.onclick = () => marcarOpcion(q.id, opt.id, "principal");
          
          const bs = document.createElement("button"); bs.className = "btn-sec" + (prev.secundaria===opt.id?" activo":""); bs.textContent = "2.ª opción";
          if(!prev.principal || prev.principal===opt.id) bs.hidden = true;
          bs.onclick = () => marcarOpcion(q.id, opt.id, "secundaria");
          
          const bv = document.createElement("button"); bv.className = "btn-veto" + (prev.inaceptable===opt.id?" activo":""); bv.textContent = prev.inaceptable===opt.id?"🚫 Vetado":"Inaceptable 🚫";
          bv.onclick = () => marcarOpcion(q.id, opt.id, "inaceptable");

          boxBtn.append(bp, bs, bv); div.append(boxBtn); contOpts.append(div);
        });
      }

      const ci = $("chk-importante");
      if(ci) {
        ci.checked = Boolean(respuestas[q.id]?.importante);
        ci.onchange = e => {
          let imps = Object.values(respuestas).filter(r=>r.importante).length;
          if(e.target.checked && imps>=MAX_IMP) { mostrarAviso("aviso-interfaz", "Límite de temas clave alcanzado."); e.target.checked=false; return; }
          if(!respuestas[q.id]) respuestas[q.id] = {}; respuestas[q.id].importante = e.target.checked;
          if(!tieneSeleccionEfectiva(respuestas[q.id]) && !respuestas[q.id].importante) delete respuestas[q.id];
          actualizarContadoresUI();
        };
      }
      if($("btn-siguiente")) { $("btn-siguiente").disabled = !tieneSeleccionEfectiva(respuestas[q.id]); $("btn-siguiente").textContent = indice===PREGUNTAS.length-1?"Ver resultados →":"Siguiente →"; }
      if($("btn-atras")) $("btn-atras").style.visibility = indice===0?"hidden":"visible";
    }

    function marcarOpcion(idQ, idO, tipo) {
      if(!respuestas[idQ]) respuestas[idQ] = { principal:null, secundaria:null, inaceptable:null, importante:$("chk-importante")?.checked||false };
      let act = respuestas[idQ];
      if(tipo==="principal") { act.principal = act.principal===idO ? null : idO; if(act.principal) { if(act.secundaria===idO)act.secundaria=null; if(act.inaceptable===idO)act.inaceptable=null; } }
      else if(tipo==="secundaria") { if(act.principal && act.principal!==idO) { act.secundaria = act.secundaria===idO?null:idO; if(act.inaceptable===idO)act.inaceptable=null; } }
      else if(tipo==="inaceptable") { 
        let v = Object.values(respuestas).filter(r=>r.inaceptable).length; 
        if(act.inaceptable===idO) act.inaceptable=null; 
        else { if(v>=MAX_VETOS && !act.inaceptable) { mostrarAviso("aviso-interfaz", "Límite de vetos alcanzado."); return; } act.inaceptable=idO; if(act.principal===idO)act.principal=null; if(act.secundaria===idO)act.secundaria=null; }
      }
      if(!tieneSeleccionEfectiva(act) && !act.importante) delete respuestas[idQ];
      pintarPregunta();
    }

    function pintarResultados() {
      const parts = window.partidosActivos || PARTIDOS;
      const evals = parts.map(p => ({ p, r: calcularAfinidad(p, respuestas, PREGUNTAS) })).filter(x => x.r.total !== null).sort((a,b) => b.r.total - a.r.total);
      
      const rp = $("resumen-podio"), rr = $("resumen-ranking"), mc = $("mapa-calor-contenedor"), dt = $("lista-resultados");
      if(!rp) return; rp.textContent=""; rr.textContent=""; mc.textContent=""; dt.textContent="";
      
      const tr = PREGUNTAS.filter(q=>tieneSeleccionEfectiva(respuestas[q.id])).length;
      if($("nota-resultados")) $("nota-resultados").textContent = tr>0 ? `Calculado sobre ${tr} temas respondidos.` : "Sin datos.";
      if(!evals.length) return;
      window._resultado = evals;

      // 1. Podio Top 3
      const top3 = evals.slice(0,3);
      top3.forEach((x, i) => {
        const div = document.createElement("div"); div.className = `podio-item puesto-${i+1}`; div.style.setProperty("--color-partido", x.p.color||"#333");
        const dash = 283 - (283 * x.r.total / 100);
        div.innerHTML = `
          <div class="podio-ring">
            <svg viewBox="0 0 100 100"><circle cx="50" cy="50" r="45" class="ring-bg"/><circle cx="50" cy="50" r="45" class="ring-fg" style="stroke-dashoffset:${dash}"/></svg>
            <div style="position:absolute; top:50%; left:50%; transform:translate(-50%,-50%); font-weight:800; font-size:16px;">${x.r.total}%</div>
          </div>
          <div class="podio-nombre">${x.p.nombre}</div>
          ${x.r.coberturaDatos<75 ? `<span class="icon-aviso" title="⚠️ Pocos datos. Evaluado en ${x.r.evaluadas}/${x.r.respondidas} temas.">⚠️</span>` : ""}
        `;
        rp.append(div);
      });

      // 2. Ranking Resto
      evals.slice(3).forEach(x => {
        const div = document.createElement("div"); div.className = "ranking-fila"; div.style.setProperty("--color-partido", x.p.color||"#333");
        div.innerHTML = `<div class="rank-nombre">${x.p.nombre} ${x.r.coberturaDatos<75?"<span class='icon-aviso' title='⚠️ Faltan datos'>⚠️</span>":""}</div><div class="rank-barra-bg"><div class="rank-barra-fg" style="width:${x.r.total}%"></div></div><div class="rank-pct">${x.r.total}%</div>`;
        rr.append(div);
      });

      // 3. Mapa de calor
      const pregResp = PREGUNTAS.filter(q => tieneSeleccionEfectiva(respuestas[q.id]));
      mc.style.gridTemplateColumns = `max-content repeat(${evals.length}, minmax(40px, 1fr))`;
      
      // Cabecera mapa
      mc.innerHTML = `<div class="mapa-tema" style="border:none">Tema</div>` + evals.map(x => `<div class="mapa-partido">${x.p.nombre}</div>`).join('');
      // Filas mapa
      pregResp.forEach(q => {
        let fila = `<div class="mapa-tema">${q.id}. ${q.tema.split(" ")[0]}</div>`;
        evals.forEach(x => {
          const d = x.r.detalle.find(det => det.pregunta.id === q.id);
          let clase = "calor-gris", ico = "–";
          if(d && !d.sinPosicion) {
            if(d.vetado) { clase = "calor-baja"; ico = "🚫"; }
            else if(d.puntosObtenidos === d.pesoMaximo) { clase = "calor-alta"; ico = "✓"; }
            else if(d.puntosObtenidos > 0) { clase = "calor-media"; ico = "½"; }
            else { clase = "calor-baja"; ico = "✗"; }
          }
          fila += `<div class="mapa-celda ${clase}" title="${x.p.nombre}: ${d?d.textoPartido:'Sin datos'}">${ico}</div>`;
        });
        mc.innerHTML += fila;
      });

      // 4. Detalle Acordeón
      evals.forEach(x => {
        const det = document.createElement("details"); det.className="partido";
        det.innerHTML = `<summary class="partido-cab" style="cursor:pointer; list-style:none;">
          <span class="partido-nombre" style="--color-partido:${x.p.color}">${x.p.nombre}</span><span class="partido-pct">${x.r.total}%</span>
        </summary>
        <div class="resumen-metricas-partido">
          <span class="metrica-tag">✓ Principales: ${x.r.coincidenciasPrincipales}</span>
          ${x.r.coincidenciasSecundarias>0 ? `<span class="metrica-tag">🤝 2.ª opción: ${x.r.coincidenciasSecundarias}</span>` : ""}
          ${x.r.vetosActivados>0 ? `<span class="metrica-tag tag-veto">🚫 Vetos: ${x.r.vetosActivados}</span>` : ""}
          ${x.r.sinPosicion>0 ? `<span class="metrica-tag ${x.r.coberturaDatos<75?'tag-aviso':''}">ℹ️ ${x.r.sinPosicion} sin posición</span>` : ""}
        </div>`;
        
        x.r.detalle.forEach(d => {
          const divP = document.createElement("div"); divP.className = "detalle-preg";
          divP.innerHTML = `<div class="detalle-preg-titulo ${d.vetado?'es-vetado':''} ${d.sinPosicion?'sin-posicion':''}">${d.pregunta.id}. ${d.pregunta.tema} ${d.importante?'⭐️':''} ${d.vetado?'🚫':''}</div>
          <div class="detalle-comparativa">
            <div><strong>👤 Tu elección:</strong> <span>${d.textoTuya}</span></div>
            ${d.textoSecundaria ? `<div><strong>🤝 2.ª opción:</strong> <span>${d.textoSecundaria}</span></div>` : ""}
            ${d.textoVeto ? `<div class="detalle-veto-usuario">🚫 Vetaste: ${d.textoVeto}</div>` : ""}
            <div><strong>🏛️ ${x.p.nombre}:</strong> <span>${d.textoPartido}</span></div>
          </div>
          <div class="detalle-meta"><div class="detalle-meta-fila">
            <span>⚖️ ${d.sinPosicion?"Excluida":`${d.puntosObtenidos}/${d.pesoMaximo} pts`}</span>
            <span>🔗 Fuente: ${d.urlFuente?`<a href="${d.urlFuente}" target="_blank" class="enlace-fuente">${d.fuente}</a>`:d.fuente}</span>
            <span class="badge-verificacion ${d.verificada?'badge-verificada':'badge-revision'}">${d.sinPosicion?'⚠️ Insuficiente':(d.verificada?'✓ Verificada':'⚠️ En revisión')}</span>
          </div></div>`;
          det.append(divP);
        });
        dt.append(det);
      });
    }

    // Eventos Globales
    $("btn-empezar")?.addEventListener("click", () => { indice=0; respuestas={}; window._resultado=null; pintarPregunta(); mostrar("pregunta"); });
    $("btn-siguiente")?.addEventListener("click", () => { if(indice<PREGUNTAS.length-1) { indice++; pintarPregunta(); window.scrollTo(0,0); } else { pintarResultados(); mostrar("resultados"); } });
    $("btn-saltar")?.addEventListener("click", () => { delete respuestas[PREGUNTAS[indice].id]; if(indice<PREGUNTAS.length-1) { indice++; pintarPregunta(); } else { pintarResultados(); mostrar("resultados"); } });
    $("btn-atras")?.addEventListener("click", () => { if(indice>0) { indice--; pintarPregunta(); } });
    $("btn-repetir")?.addEventListener("click", () => { indice=0; respuestas={}; mostrar("mapa"); });
    $("btn-cambiar-prov")?.addEventListener("click", () => { indice=0; respuestas={}; mostrar("mapa"); });
    $("logo")?.addEventListener("click", e => { e.preventDefault(); indice=0; respuestas={}; mostrar("mapa"); });
    $("btn-metodologia")?.addEventListener("click", () => mostrar("metodologia")); $("btn-volver")?.addEventListener("click", () => mostrar(vistaAnterior));
    $("btn-guia")?.addEventListener("click", () => mostrar("guia")); $("btn-volver-guia")?.addEventListener("click", () => mostrar(vistaAnterior));
    
    document.querySelectorAll(".btn-comunidad").forEach(b => b.addEventListener("click", () => {
      window.comunidadSeleccionada = b.dataset.id;
      window.partidosActivos = PARTIDOS.filter(p => !p.comunidades || p.comunidades.includes("todas") || p.comunidades.includes(window.comunidadSeleccionada));
      if($("lista-partidos-texto")) $("lista-partidos-texto").textContent = window.partidosActivos.map(p=>p.nombre).join(", ");
      if($("sub-eleccion")) $("sub-eleccion").innerHTML = `Elecciones Generales (2026)<br><span class="pildora-comunidad">📍 ${b.textContent}</span>`;
      vistaAnterior="inicio"; mostrar("inicio");
    }));

    // Compartir (URL Limpia sin enviar datos privados)
    const urlLimpia = location.origin + location.pathname;
    $("btn-whatsapp")?.addEventListener("click", () => { window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(`Test de Afinidad Electoral 2026 🗳️. Hazlo aquí: ${urlLimpia}`)}`, "_blank"); });
    $("btn-compartir")?.addEventListener("click", async () => {
      const txt = `Test de Afinidad Electoral 2026 🗳️. Hazlo aquí: ${urlLimpia}`;
      if(navigator.share) try { await navigator.share({ title:"Test Electoral", text:txt }); return; } catch(e){}
      if(navigator.clipboard) { await navigator.clipboard.writeText(txt); mostrarAviso("aviso-compartir", "✓ Enlace copiado.", "info"); }
    });

    if($("num-preguntas")) $("num-preguntas").textContent = PREGUNTAS.length;
    mostrar("mapa");
  });
}
