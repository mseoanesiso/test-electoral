// ============================================================
// DATOS DEL TEST - Escenario Elecciones Generales
// ============================================================

const ELECCIONES = {
  nombre: "Elecciones generales de España",
  fecha: "Escenario preelectoral 2026 (convocatoria oficial pendiente)",
  actualizacion: "14/10/2026",
  datosDeEjemplo: false
};

const PREGUNTAS = [
  {
    id: 1, tema: "Vivienda", pesoBase: 3,
    texto: "¿Qué política principal debería aplicarse para facilitar el acceso a la vivienda?",
    contexto: "Ante el encarecimiento de la vivienda y el alquiler, el debate político se divide entre regular los precios y restringir usos especulativos para proteger al inquilino, ampliar el parque público con incentivos fiscales o liberalizar suelo y reforzar la seguridad jurídica del propietario para aumentar la oferta.",
    opciones: [
      { id: "A", texto: "Fomentar la construcción privada, liberalizar suelo, reforzar la seguridad jurídica de propietarios y dar avales públicos para la compra." },
      { id: "B", texto: "Intervenir el mercado limitando por ley el precio de los alquileres y restringir la compra de vivienda a grandes tenedores y fondos de inversión." },
      { id: "C", texto: "Aumentar el parque público de alquiler asequible, ofrecer bonificaciones fiscales a propietarios que alquilen a precios tasados y aplicar la Ley de Vivienda." },
      { id: "D", texto: "Liberalizar el mercado inmobiliario, derogar la Ley de Vivienda estatal y reducir impuestos vinculados a la edificación y compra." }
    ]
  },
  {
    id: 2, tema: "Empleo", pesoBase: 3,
    texto: "¿Qué medida debería priorizarse respecto a la jornada laboral y los salarios?",
    contexto: "Se debate si la reducción de la jornada laboral máxima debe establecerse por ley manteniendo el salario, o si debe pactarse sector a sector en la negociación colectiva teniendo en cuenta la productividad de cada empresa.",
    opciones: [
      { id: "A", texto: "Que la duración de la jornada y los salarios se acuerden mediante negociación colectiva entre empresas y sindicatos, sin imponer una rebaja general por ley." },
      { id: "B", texto: "Reducir por ley la jornada laboral máxima (a 37,5 horas semanales o menos) sin reducción salarial y continuar incrementando el SMI." },
      { id: "C", texto: "Rebajar cotizaciones sociales e impuestos sobre el trabajo para incentivar la contratación y flexibilizar la regulación laboral." }
    ]
  },
  {
    id: 3, tema: "Sanidad", pesoBase: 3,
    texto: "¿Cómo debe gestionarse y financiarse el Sistema Nacional de Salud?",
    contexto: "Para afrontar las listas de espera y la sobrecarga asistencial, los partidos discrepan sobre el papel de los conciertos con la sanidad privada, el refuerzo presupuestario de la gestión directa y el reparto de competencias entre el Estado y las comunidades autónomas.",
    opciones: [
      { id: "A", texto: "Centralizar las competencias sanitarias en el Estado para unificar prestaciones y criterios en todo el territorio." },
      { id: "B", texto: "Reforzar la financiación autonómica manteniendo la colaboración público-privada (conciertos) para reducir las listas de espera." },
      { id: "C", texto: "Blindar por ley la gestión directa 100% pública y revertir progresivamente la externalización de servicios sanitarios." },
      { id: "D", texto: "Aumentar la inversión pública, priorizar la atención primaria y reducir listas de espera dentro del actual modelo autonómico." }
    ]
  },
  {
    id: 4, tema: "Inmigración", pesoBase: 3,
    texto: "¿Cuál debería ser el eje principal de la política migratoria?",
    contexto: "El debate aborda cómo gestionar los flujos migratorios combinando derechos humanos, necesidades demográficas y laborales del país, control fronterizo y capacidad de integración de los servicios públicos.",
    opciones: [
      { id: "A", texto: "Impulsar la regularización administrativa de personas migrantes que ya residen y trabajan en España y ampliar las vías legales y seguras." },
      { id: "B", texto: "Fomentar una migración regular y circular vinculada a la demanda laboral, reforzando la cooperación con los países de origen." },
      { id: "C", texto: "Endurecer el control fronterizo, vincular la entrada a contratos en origen y agilizar la expulsión en casos de estancia irregular o comisión de delitos graves." },
      { id: "D", texto: "Aplicar un bloqueo fronterizo con apoyo militar, ejecutar expulsiones inmediatas de inmigrantes en situación irregular y cerrar centros de menores extranjeros." }
    ]
  },
  {
    id: 5, tema: "Impuestos", pesoBase: 2,
    texto: "¿Qué orientación fiscal necesita España?",
    contexto: "Se discute si conviene reducir la carga impositiva para estimular el ahorro y la inversión privada, o aumentar la progresividad fiscal sobre rentas altas y grandes patrimonios para financiar el Estado del bienestar.",
    opciones: [
      { id: "A", texto: "Rebaja de impuestos en el IRPF (deflactación de tarifas) y supresión o bonificación total de los impuestos de Patrimonio, Sucesiones y Donaciones." },
      { id: "B", texto: "Reforma fiscal progresiva que grave más a las grandes fortunas, las rentas del capital y los beneficios extraordinarios de grandes corporaciones." },
      { id: "C", texto: "Reducción drástica de tipos impositivos implantando un IRPF de tipo reducido (con mínimo exento amplio) y eliminando impuestos patrimoniales." },
      { id: "D", texto: "Mantener el esquema fiscal actual con ajustes selectivos sobre rentas altas y grandes empresas para sostener el gasto público." }
    ]
  },
  {
    id: 6, tema: "Modelo Territorial", pesoBase: 2,
    texto: "¿Cómo debe organizarse territorial y financieramente el Estado?",
    contexto: "El modelo territorial enfrenta propuestas de reforma federal o plurinacional con singularidades bilaterales, el mantenimiento del Estado autonómico con reforma multilateral de la financiación, y la recentralización de competencias.",
    opciones: [
      { id: "A", texto: "Avanzar hacia un modelo plurinacional, confederal o de soberanía bilateral que reconozca singularidades y sistemas de financiación propios." },
      { id: "B", texto: "Suprimir el Estado de las autonomías hacia un Estado unitario y devolver al Gobierno central competencias como Educación, Sanidad y Seguridad." },
      { id: "C", texto: "Mantener el Estado autonómico reformando el sistema de financiación para garantizar recursos equitativos y corresponsabilidad fiscal." },
      { id: "D", texto: "Conservar el marco autonómico constitucional actual, rechazando conciertos bilaterales fuera de los fueros históricos y garantizando la igualdad entre españoles." }
    ]
  },
  {
    id: 7, tema: "Educación", pesoBase: 2,
    texto: "¿Qué relación debe existir entre la escuela pública y la enseñanza concertada?",
    contexto: "El sistema educativo español combina centros públicos y privados sostenidos con fondos públicos (concertados). El debate gira en torno a la planificación de plazas, la libre elección de centro por las familias y la equidad en la escolarización.",
    opciones: [
      { id: "A", texto: "Implantar el cheque escolar y la autorización expresa de los padres (pin parental) sobre actividades complementarias de contenido moral o afectivo-sexual." },
      { id: "B", texto: "Garantizar en igualdad de condiciones la red pública y la concertada conforme a la demanda de las familias y proteger la educación especial." },
      { id: "C", texto: "Mantener la coexistencia de ambas redes situando la escuela pública como eje vertebrador y prohibiendo la cesión de suelo público a centros privados." },
      { id: "D", texto: "Integrar progresivamente la red concertada en una red única de titularidad y gestión 100% pública y laica." }
    ]
  },
  {
    id: 8, tema: "Pensiones", pesoBase: 2,
    texto: "¿Cómo debe garantizarse la sostenibilidad del sistema de pensiones?",
    contexto: "El envejecimiento demográfico incrementa el gasto en pensiones. Las propuestas oscilan entre reforzar los ingresos del sistema público mediante cotizaciones e impuestos, incentivar planes complementarios e introducir ajustes paramétricos, o transitar a un modelo de capitalización.",
    opciones: [
      { id: "A", texto: "Garantizar por ley la revalorización de las pensiones conforme al IPC, reforzando la financiación con cotizaciones a salarios altos y aportaciones del Estado." },
      { id: "B", texto: "Vincular la sostenibilidad del sistema al crecimiento del empleo, incentivar el ahorro privado complementario y evaluar periódicamente el equilibrio financiero." },
      { id: "C", texto: "Transitar progresivamente hacia un sistema mixto de reparto y capitalización individual, reduciendo el gasto político e improductivo del Estado." }
    ]
  },
  {
    id: 9, tema: "Medio Ambiente y Energía", pesoBase: 1,
    texto: "¿Qué estrategia energética y climática debe priorizarse?",
    contexto: "El debate energético contrapone el calendario de cierre de las centrales nucleares y el impulso exclusivo a las renovables con el mantenimiento de la energía nuclear y la adaptación de los plazos ambientales para no restar competitividad industrial.",
    opciones: [
      { id: "A", texto: "Crear una empresa pública de energía, mantener el calendario de cierre nuclear y acelerar la transición hacia un sistema 100% renovable." },
      { id: "B", texto: "Desplegar energías renovables cumpliendo los objetivos climáticos europeos, acompañando con ayudas públicas la descarbonización industrial." },
      { id: "C", texto: "Prolongar la vida útil de las centrales nucleares existentes y aplicar una transición energética tecnológicamente neutra que preserve la competitividad industrial y agraria." },
      { id: "D", texto: "Derogar la Ley de Cambio Climático y desvincularse del Pacto Verde Europeo y la Agenda 2030, explotando todos los recursos energéticos nacionales." }
    ]
  },
  {
    id: 10, tema: "Ocupación Ilegal y Desahucios", pesoBase: 2,
    texto: "¿Cómo debe abordarse legalmente la ocupación ilegal de viviendas y la vulnerabilidad habitacional?",
    contexto: "Se contraponen las propuestas para agilizar el desalojo policial o judicial inmediato y endurecer el Código Penal con aquellas que priorizan garantizar una alternativa habitacional pública antes de ejecutar lanzamientos sobre hogares vulnerables.",
    opciones: [
      { id: "A", texto: "Aprobar desalojos cautelares en un plazo de 24 a 48 horas, endurecer las penas por usurpación e impedir el empadronamiento en viviendas ocupadas ilegalmente." },
      { id: "B", texto: "Agilizar los plazos judiciales de desalojo y reforzar la coordinación con los servicios sociales para atender situaciones acreditadas de vulnerabilidad." },
      { id: "C", texto: "Prohibir los desahucios de personas vulnerables sin alternativa habitacional previa y movilizar viviendas vacías de grandes tenedores." }
    ]
  },
  {
    id: 11, tema: "Modelo de Jefatura del Estado", pesoBase: 1,
    texto: "¿Qué modelo constitucional de Jefatura del Estado prefieres?",
    contexto: "La Constitución de 1978 establece como forma política del Estado la Monarquía parlamentaria. Algunas formaciones defienden su continuidad como garante de neutralidad institucional, mientras que otras proponen someter a referéndum el paso a una República.",
    opciones: [
      { id: "A", texto: "Mantener la Monarquía parlamentaria establecida en la Constitución de 1978." },
      { id: "B", texto: "Impulsar una reforma constitucional y un referéndum para establecer una República." }
    ]
  },
  {
    id: 12, tema: "Política Exterior y Defensa", pesoBase: 1,
    texto: "¿Cuál debería ser la línea prioritaria de España en política exterior y de seguridad?",
    contexto: "El escenario internacional plantea debates sobre el compromiso de gasto militar en la OTAN, el apoyo militar y financiero a Ucrania y la postura diplomática y comercial ante el conflicto en Oriente Medio.",
    opciones: [
      { id: "A", texto: "Reforzar el vínculo euroatlántico en la OTAN, cumplir los compromisos de inversión en defensa y mantener el apoyo firme a Ucrania." },
      { id: "B", texto: "Mantener el apoyo a Ucrania y la autonomía estratégica europea, defendiendo la solución de los dos Estados (Israel y Palestina) y el derecho internacional." },
      { id: "C", texto: "Detener el aumento del gasto militar y el envío de armamento a zonas en conflicto, suspender relaciones de compraventa de armas con Israel y priorizar vías diplomáticas." }
    ]
  },
  {
    id: 13, tema: "Conciliación y Natalidad", pesoBase: 2,
    texto: "¿Qué políticas deben priorizarse para apoyar a las familias y la natalidad?",
    contexto: "Para hacer frente al invierno demográfico y facilitar la conciliación, las propuestas ponen el acento bien en deducciones fiscales y ayudas directas por hijo, bien en la ampliación de permisos parentales y servicios públicos gratuitos de cuidado.",
    opciones: [
      { id: "A", texto: "Aumentar las deducciones fiscales y ayudas directas por maternidad e hijo a cargo, apoyando especialmente a las familias numerosas." },
      { id: "B", texto: "Universalizar la educación infantil pública gratuita de 0 a 3 años, ampliar los permisos remunerados de crianza y aprobar prestaciones universales por hijo." }
    ]
  },
  {
    id: 14, tema: "Poder Judicial", pesoBase: 1,
    texto: "¿Cómo deberían elegirse los vocales del Consejo General del Poder Judicial (CGPJ)?",
    contexto: "La Constitución prevé 20 vocales para el CGPJ: 8 juristas elegidos por el Congreso y el Senado y 12 entre jueces y magistrados. El debate radica en si esos 12 vocales judiciales deben ser votados directamente por los jueces o por las Cortes Generales.",
    opciones: [
      { id: "A", texto: "Que los 12 vocales de procedencia judicial sean elegidos directamente por los jueces y magistrados, conforme a las recomendaciones europeas." },
      { id: "B", texto: "Mantener la elección parlamentaria mediante mayorías cualificadas (3/5 de Congreso y Senado) o un modelo consensuado con participación de las Cortes." },
      { id: "C", texto: "Permitir la renovación parlamentaria por mayoría absoluta si se bloquea el acuerdo de 3/5 e impulsar becas públicas para el acceso a la carrera judicial." }
    ]
  },
  {
    id: 15, tema: "Interrupción Voluntaria del Embarazo", pesoBase: 3,
    texto: "¿Cómo debe regularse la interrupción voluntaria del embarazo?",
    contexto: "El debate legislativo se centra en el sistema de plazos, la garantía de prestación en centros públicos, la regulación de la objeción de conciencia médica y el requisito de consentimiento paterno para jóvenes de 16 y 17 años.",
    opciones: [
      { id: "A", texto: "Mantener la ley de plazos vigente, garantizando la prestación en la red sanitaria pública y la capacidad de decidir de las jóvenes de 16 y 17 años sin requisito de permiso paterno." },
      { id: "B", texto: "Mantener la regulación de plazos pero exigiendo el consentimiento de los titulares de la patria potestad para menores de edad y garantizando la objeción de conciencia médica." },
      { id: "C", texto: "Derogar la actual ley del aborto, promover políticas de protección a la maternidad desde la concepción y destinar ayudas asistenciales a mujeres embarazadas." }
    ]
  },
  {
    id: 16, tema: "Matrimonio y Parejas del Mismo Sexo", pesoBase: 2,
    texto: "¿Qué regulación civil debe aplicarse a las parejas del mismo sexo y a las políticas de diversidad?",
    contexto: "El matrimonio entre personas del mismo sexo es legal en España desde 2005. El debate actual distingue entre ampliar las políticas públicas contra la discriminación LGTBI, mantener el marco civil actual sin determinados programas escolares o sustituir la figura matrimonial por una unión civil.",
    opciones: [
      { id: "A", texto: "Mantener el matrimonio igualitario con plenos derechos y desarrollar políticas públicas e institucionales contra la discriminación LGTBI+." },
      { id: "B", texto: "Mantener la ley vigente de matrimonio entre personas del mismo sexo y garantizar la neutralidad ideológica en el ámbito escolar." },
      { id: "C", texto: "Sustituir la denominación de matrimonio entre personas del mismo sexo por una ley de uniones civiles y derogar las leyes autonómicas y estatales LGTBI." }
    ]
  },
  {
    id: 17, tema: "Legislación Trans", pesoBase: 3,
    texto: "¿Cómo debe regularse registral y sanitariamente el cambio de sexo legal?",
    contexto: "La Ley 4/2023 reconoce la rectificación registral del sexo mediante declaración de voluntad a partir de los 16 años (y con requisitos entre 12 y 16). El debate gira en torno a mantener la libre determinación registral, exigir aval médico/judicial en menores y proteger las categorías deportivas femeninas, o derogar la norma.",
    opciones: [
      { id: "A", texto: "Mantener la libre determinación registral del género y la atención sanitaria integral dentro del sistema público conforme a la Ley 4/2023." },
      { id: "B", texto: "Reformar la ley para exigir informes médicos o psicológicos acreditados (especialmente en menores) y regular con criterios biológicos el deporte femenino y las pruebas físicas." },
      { id: "C", texto: "Derogar íntegramente la Ley Trans estatal y las leyes autonómicas análogas, vinculando los datos registrales al sexo biológico y prohibiendo tratamientos hormonales en menores." }
    ]
  },
  {
    id: 18, tema: "Violencia de Género e Intrafamiliar", pesoBase: 3,
    texto: "¿Qué marco legislativo y penal debe aplicarse frente a la violencia contra las mujeres y en el ámbito familiar?",
    contexto: "La Ley Orgánica 1/2004 establece medidas integrales y juzgados específicos contra la violencia ejercida sobre la mujer por su pareja o expareja. El debate contrapone la ampliación de este marco específico, el mantenimiento del consenso del Pacto de Estado con revisiones técnicas penales, o su sustitución por una ley de violencia intrafamiliar sin distinción de sexo.",
    opciones: [
      { id: "A", texto: "Reforzar y ampliar la legislación específica contra la violencia machista y sexual, incrementando los recursos públicos de prevención y asistencia." },
      { id: "B", texto: "Mantener la Ley contra la Violencia de Género y el Pacto de Estado, corrigiendo disfunciones técnicas en las penas y reforzando medios policiales y judiciales." },
      { id: "C", texto: "Derogar la Ley de Violencia de Género actual para sustituirla por una Ley de Violencia Intrafamiliar que establezca las mismas penas con independencia del sexo del agresor." }
    ]
  }
];

const PARTIDOS = [
  {
    id: "psoe", nombre: "PSOE", color: "#E01021", comunidades: ["todas"],
    posiciones: {
      1: { opcion: "C", fuente: "Ley 12/2023 por el derecho a la vivienda y Programa Electoral", fecha: "2023", verificada: true },
      2: { opcion: "B", fuente: "Acuerdo de gobierno de coalición PSOE-Sumar", fecha: "2023", verificada: true },
      3: { opcion: "D", fuente: "Programa Electoral Generales 2023", fecha: "2023", verificada: true },
      4: { opcion: "B", fuente: "Reforma del Reglamento de Extranjería (RD 1155/2024)", fecha: "2024", verificada: true },
      5: { opcion: "D", fuente: "Programa Electoral 2023 y medidas fiscales aprobadas", fecha: "2023-2024", verificada: true },
      6: { opcion: "C", fuente: "Resoluciones del 41.º Congreso Federal del PSOE", fecha: "2024", verificada: true },
      7: { opcion: "C", fuente: "Ley Orgánica 3/2020 de Educación (LOMLOE)", fecha: "2020", verificada: true },
      8: { opcion: "A", fuente: "Ley 21/2021 y RDL 2/2023 de reforma de pensiones", fecha: "2021-2023", verificada: true },
      9: { opcion: "B", fuente: "Ley 7/2021 de Cambio Climático y PNIEC", fecha: "2021-2024", verificada: true },
      10: { opcion: "B", fuente: "Posición parlamentaria en Ley de Eficiencia del Servicio Público de Justicia", fecha: "2024", verificada: true },
      11: { opcion: "A", fuente: "Posición estatutaria y parlamentaria en defensa de la Constitución de 1978", fecha: "2023-2024", verificada: true },
      12: { opcion: "B", fuente: "Acuerdo de Consejo de Ministros (reconocimiento de Palestina) y apoyo a Ucrania", fecha: "2024", verificada: true },
      13: { opcion: "B", fuente: "Ley de Familias (Proyecto legislativo) y Programa 2023", fecha: "2023-2024", verificada: true },
      14: { opcion: "B", fuente: "Ley Orgánica 3/2024 de reforma del Poder Judicial y acuerdo CGPJ", fecha: "2024", verificada: true },
      15: { opcion: "A", fuente: "Ley Orgánica 1/2023 de salud sexual y reproductiva", fecha: "2023", verificada: true },
      16: { opcion: "A", fuente: "Ley 13/2005 y Ley 4/2023 para la igualdad real y efectiva", fecha: "2005-2023", verificada: true },
      17: { opcion: "A", fuente: "Ley 4/2023 para la igualdad real y efectiva de las personas trans", fecha: "2023", verificada: true },
      18: { opcion: "A", fuente: "Renovación del Pacto de Estado contra la Violencia de Género", fecha: "2023-2025", verificada: true }
    }
  },
  {
    id: "pp", nombre: "PP", color: "#0155A4", comunidades: ["todas"],
    posiciones: {
      1: { opcion: "A", fuente: "Programa Electoral Generales 2023 y Plan de Vivienda PP", fecha: "2023-2024", verificada: true },
      2: { opcion: "A", fuente: "Posición parlamentaria sobre negociación colectiva y productividad", fecha: "2024", verificada: false },
      3: { opcion: "B", fuente: "Programa Electoral 2023 y modelos sanitarios autonómicos", fecha: "2023", verificada: true },
      4: { opcion: "C", fuente: "Acuerdos de política migratoria y proposiciones en el Congreso", fecha: "2024", verificada: false },
      5: { opcion: "A", fuente: "Programa Electoral 2023 y rebajas fiscales autonómicas", fecha: "2023", verificada: true },
      6: { opcion: "D", fuente: "Declaración de Córdoba / Madrid de presidentes autonómicos del PP", fecha: "2024", verificada: true },
      7: { opcion: "B", fuente: "Programa Electoral Generales 2023", fecha: "2023", verificada: true },
      8: { opcion: "B", fuente: "Programa Electoral 2023 y votaciones sobre el RDL 2/2023", fecha: "2023", verificada: true },
      9: { opcion: "C", fuente: "Programa Electoral Generales 2023 (medida sobre parque nuclear)", fecha: "2023", verificada: true },
      10: { opcion: "A", fuente: "Proposición de Ley Orgánica contra la ocupación ilegal (Senado/Congreso)", fecha: "2024", verificada: true },
      11: { opcion: "A", fuente: "Programa Electoral 2023 (defensa de la Monarquía parlamentaria)", fecha: "2023", verificada: true },
      12: { opcion: "A", fuente: "Programa Electoral 2023 y votaciones en el Congreso", fecha: "2023-2024", verificada: true },
      13: { opcion: "A", fuente: "Programa Electoral 2023 y propuestas de conciliación", fecha: "2023-2024", verificada: true },
      14: { opcion: "A", fuente: "Programa Electoral 2023 y propuesta de reforma de la LOPJ", fecha: "2023-2024", verificada: true },
      15: { opcion: "B", fuente: "Posicionamiento tras sentencia del TC y Programa 2023", fecha: "2023", verificada: true },
      16: { opcion: "B", fuente: "Posición oficial tras sentencia del TC sobre la Ley 13/2005", fecha: "2023", verificada: false },
      17: { opcion: "B", fuente: "Programa Electoral Generales 2023 (reforma de la Ley 4/2023)", fecha: "2023", verificada: true },
      18: { opcion: "B", fuente: "Pacto de Estado contra la Violencia de Género y reforma LO 4/2023", fecha: "2023-2025", verificada: true }
    }
  },
  {
    id: "vox", nombre: "Vox", color: "#52A319", comunidades: ["todas"],
    posiciones: {
      1: { opcion: "D", fuente: "Programa Electoral 2023 y Agenda España", fecha: "2023", verificada: true },
      2: { opcion: "C", fuente: "Programa Electoral Generales 2023", fecha: "2023", verificada: true },
      3: { opcion: "A", fuente: "Agenda España y Programa Electoral 2023", fecha: "2023", verificada: true },
      4: { opcion: "D", fuente: "Programa Electoral 2023 e iniciativas parlamentarias sobre inmigración", fecha: "2023-2024", verificada: true },
      5: { opcion: "C", fuente: "Programa Económico y Electoral 2023 (doble tramo de IRPF)", fecha: "2023", verificada: true },
      6: { opcion: "B", fuente: "Agenda España y Programa Electoral 2023", fecha: "2023", verificada: true },
      7: { opcion: "A", fuente: "Programa Electoral 2023 (cheque escolar y pin parental)", fecha: "2023", verificada: true },
      8: { opcion: "C", fuente: "Programa Económico de Vox", fecha: "2023", verificada: true },
      9: { opcion: "D", fuente: "Agenda España y Programa Electoral 2023", fecha: "2023", verificada: true },
      10: { opcion: "A", fuente: "Programa Electoral 2023 y proposiciones de ley antiocupación", fecha: "2023-2024", verificada: true },
      11: { opcion: "A", fuente: "Estatutos y Programa Electoral 2023 (defensa de la Corona)", fecha: "2023", verificada: true },
      12: { opcion: "A", fuente: "Programa Electoral 2023 y votaciones en el Parlamento Europeo", fecha: "2023-2024", verificada: false },
      13: { opcion: "A", fuente: "Agenda España (perspectiva de familia y natalidad)", fecha: "2023", verificada: true },
      14: { opcion: "A", fuente: "Programa Electoral 2023 y voto contra el pacto CGPJ de 2024", fecha: "2023-2024", verificada: true },
      15: { opcion: "C", fuente: "Agenda España y Programa Electoral 2023", fecha: "2023", verificada: true },
      16: { opcion: "C", fuente: "Programa Electoral 2023", fecha: "2023", verificada: true },
      17: { opcion: "C", fuente: "Programa Electoral 2023 y recurso de inconstitucionalidad contra la Ley 4/2023", fecha: "2023", verificada: true },
      18: { opcion: "C", fuente: "Programa Electoral 2023 (propuesta de Ley de Violencia Intrafamiliar)", fecha: "2023", verificada: true }
    }
  },
  {
    id: "frenteamplio", nombre: "Sumar / Izquierda Unida", color: "#E51C55", comunidades: ["todas"],
    posiciones: {
      1: { opcion: "B", fuente: "Programa Electoral Sumar 2023 y propuestas sobre alquileres", fecha: "2023-2024", verificada: true },
      2: { opcion: "B", fuente: "Programa Sumar 2023 y anteproyecto del Ministerio de Trabajo", fecha: "2023-2024", verificada: true },
      3: { opcion: "C", fuente: "Programa Electoral Sumar 2023", fecha: "2023", verificada: true },
      4: { opcion: "A", fuente: "Voto favorable a la toma en consideración de la ILP de Regularización", fecha: "2024", verificada: true },
      5: { opcion: "B", fuente: "Programa Electoral Sumar 2023", fecha: "2023", verificada: true },
      6: { opcion: "A", fuente: "Programa Electoral Sumar 2023 (modelo plurinacional)", fecha: "2023", verificada: true },
      7: { opcion: "D", fuente: "Programa Electoral Sumar 2023", fecha: "2023", verificada: true },
      8: { opcion: "A", fuente: "Programa Electoral Sumar 2023", fecha: "2023", verificada: true },
      9: { opcion: "A", fuente: "Programa Electoral Sumar 2023", fecha: "2023", verificada: true },
      10: { opcion: "C", fuente: "Programa Electoral Sumar 2023 y enmiendas parlamentarias", fecha: "2023-2024", verificada: true },
      11: { opcion: "B", fuente: "resoluciones políticas de IU y espacio confederal Sumar", fecha: "2023-2024", verificada: false },
      12: { opcion: "B", fuente: "Acuerdo de coalición y reconocimiento del Estado de Palestina", fecha: "2023-2024", verificada: false },
      13: { opcion: "B", fuente: "Programa Electoral Sumar 2023 (prestación universal por crianza y 0-3 años)", fecha: "2023", verificada: true },
      14: { opcion: "B", fuente: "Votación de la Ley Orgánica 3/2024 de renovación del CGPJ", fecha: "2024", verificada: true },
      15: { opcion: "A", fuente: "Programa Electoral Sumar 2023", fecha: "2023", verificada: true },
      16: { opcion: "A", fuente: "Programa Electoral Sumar 2023", fecha: "2023", verificada: true },
      17: { opcion: "A", fuente: "Programa Electoral Sumar 2023 y defensa de la Ley 4/2023", fecha: "2023", verificada: true },
      18: { opcion: "A", fuente: "Programa Electoral Sumar 2023", fecha: "2023", verificada: true }
    }
  },
  {
    id: "podemos", nombre: "Podemos", color: "#6A2E68", comunidades: ["todas"],
    posiciones: {
      1: { opcion: "B", fuente: "Programa Electoral Podemos y exigencias presupuestarias sobre alquiler", fecha: "2023-2024", verificada: true },
      2: { opcion: "B", fuente: "Programa Electoral y votaciones en el Congreso", fecha: "2023-2024", verificada: true },
      3: { opcion: "C", fuente: "Proposición de ley contra la privatización sanitaria y Programa", fecha: "2023", verificada: true },
      4: { opcion: "A", fuente: "Impulso parlamentario a la ILP de Regularización extraordinaria", fecha: "2024", verificada: true },
      5: { opcion: "B", fuente: "Propuestas fiscales sobre banca, energéticas y grandes fortunas", fecha: "2023-2024", verificada: true },
      6: { opcion: "A", fuente: "Documentos políticos de Podemos (Estado plurinacional)", fecha: "2023", verificada: true },
      7: { opcion: "D", fuente: "Programa marco de Podemos", fecha: "2023", verificada: true },
      8: { opcion: "A", fuente: "Votaciones parlamentarias sobre revalorización de pensiones", fecha: "2023", verificada: true },
      9: { opcion: "A", fuente: "Propuesta de empresa pública de energía", fecha: "2023", verificada: true },
      10: { opcion: "C", fuente: "Posición parlamentaria sobre suspensión de desahucios vulnerables", fecha: "2024", verificada: true },
      11: { opcion: "B", fuente: "Documentos políticos de Podemos (horizonte republicano)", fecha: "2023-2024", verificada: true },
      12: { opcion: "C", fuente: "Iniciativas parlamentarias en el Congreso y Parlamento Europeo", fecha: "2024", verificada: true },
      13: { opcion: "B", fuente: "Impulso a la Ley de Familias y educación 0-3 gratuita", fecha: "2023", verificada: true },
      14: { opcion: "C", fuente: "Voto en contra de la LO 3/2024 (pacto PP-PSOE del CGPJ)", fecha: "2024", verificada: true },
      15: { opcion: "A", fuente: "Impulso de la Ley Orgánica 1/2023 desde el Ministerio de Igualdad", fecha: "2023", verificada: true },
      16: { opcion: "A", fuente: "Impulso de la Ley 4/2023", fecha: "2023", verificada: true },
      17: { opcion: "A", fuente: "Impulso de la Ley 4/2023 desde el Ministerio de Igualdad", fecha: "2023", verificada: true },
      18: { opcion: "A", fuente: "Impulso de la Ley Orgánica 10/2022 y ampliación de recursos", fecha: "2022-2024", verificada: true }
    }
  },
  {
    id: "erc", nombre: "ERC", color: "#D99200", comunidades: ["cataluna"],
    posiciones: {
      1: { opcion: "B", fuente: "Apoyo a la Ley 12/2023 y regulación de alquileres en Cataluña", fecha: "2023-2024", verificada: true },
      2: { opcion: "B", fuente: "Programa Electoral Generales 2023", fecha: "2023", verificada: true },
      3: { opcion: "D", fuente: "Programa Electoral y gestión del Departament de Salut", fecha: "2023-2024", verificada: false },
      4: { opcion: "A", fuente: "Voto a favor de la ILP de Regularización en el Congreso", fecha: "2024", verificada: true },
      5: { opcion: "B", fuente: "Programa Electoral 2023 e impuestos propios en Cataluña", fecha: "2023", verificada: true },
      6: { opcion: "A", fuente: "Programa Electoral 2023 y acuerdo sobre financiación singular", fecha: "2023-2024", verificada: true },
      7: { opcion: "C", fuente: "Política educativa en Cataluña y voto a la LOMLOE", fecha: "2020-2024", verificada: true },
      8: { opcion: "A", fuente: "Voto favorable a la revalorización de las pensiones conforme al IPC", fecha: "2023", verificada: true },
      9: { opcion: "A", fuente: "Creación de la energética pública catalana (L'Energètica)", fecha: "2023", verificada: true },
      10: { opcion: "C", fuente: "Legislación catalana de emergencia habitacional", fecha: "2023-2024", verificada: true },
      11: { opcion: "B", fuente: "Estatutos y programa republicano de ERC", fecha: "2023", verificada: true },
      12: { opcion: "C", fuente: "Iniciativas y votaciones en el Congreso sobre gasto militar y Oriente Medio", fecha: "2024", verificada: true },
      13: { opcion: "B", fuente: "Implantación de la gratuidad de I2 (infantil 2 años) en Cataluña", fecha: "2023", verificada: true },
      14: { opcion: "C", fuente: "Posición parlamentaria ante la renovación del CGPJ", fecha: "2024", verificada: true },
      15: { opcion: "A", fuente: "Voto a favor de la Ley Orgánica 1/2023", fecha: "2023", verificada: true },
      16: { opcion: "A", fuente: "Programa Electoral 2023", fecha: "2023", verificada: true },
      17: { opcion: "A", fuente: "Voto a favor de la Ley 4/2023", fecha: "2023", verificada: true },
      18: { opcion: "A", fuente: "Programa Electoral 2023", fecha: "2023", verificada: true }
    }
  },
  {
    id: "junts", nombre: "Junts per Catalunya", color: "#00A396", comunidades: ["cataluna"],
    posiciones: {
      1: { opcion: "A", fuente: "Voto en contra de la Ley 12/2023 estatal y propuestas sobre vivienda", fecha: "2023-2024", verificada: true },
      2: { opcion: "A", fuente: "Enmiendas y defensa de la negociación colectiva y las pymes", fecha: "2024", verificada: true },
      3: { opcion: "B", fuente: "Defensa del modelo sanitario catalán de red de utilización pública (SISCAT)", fecha: "2024", verificada: true },
      4: { opcion: "C", fuente: "Acuerdo para la delegación integral de competencias en inmigración", fecha: "2024", verificada: false },
      5: { opcion: "D", fuente: "Programa Electoral 2024 al Parlament (rebajas selectivas en Sucesiones e IRPF)", fecha: "2024", verificada: false },
      6: { opcion: "A", fuente: "Programa Electoral 2023 (soberanía y concierto económico)", fecha: "2023-2024", verificada: true },
      7: { opcion: "B", fuente: "Programa Electoral (sostenimiento del modelo educativo catalán y escuela concertada)", fecha: "2023-2024", verificada: true },
      8: { opcion: "A", fuente: "Voto favorable a la revalorización de pensiones según el IPC", fecha: "2023", verificada: true },
      9: { opcion: "B", fuente: "Programa Electoral sobre transición energética e industria", fecha: "2023-2024", verificada: false },
      10: { opcion: "A", fuente: "Proposición de Ley en el Congreso para el desalojo en 48 horas", fecha: "2024", verificada: true },
      11: { opcion: "B", fuente: "Ponencia política y programa republicano de Junts", fecha: "2023", verificada: true },
      12: { opcion: "B", fuente: "Posicionamiento proeuropeo y apoyo a Ucrania en el Congreso", fecha: "2023-2024", verificada: false },
      13: { opcion: "A", fuente: "Propuestas de deducciones fiscales por nacimiento y familia", fecha: "2024", verificada: false },
      14: { opcion: "C", fuente: "Voto en contra de la LO 3/2024 y críticas al CGPJ", fecha: "2024", verificada: true },
      15: { opcion: "A", fuente: "Voto favorable a la Ley Orgánica 1/2023", fecha: "2023", verificada: true },
      16: { opcion: "A", fuente: "Apoyo a la legislación catalana y estatal de igualdad LGTBI", fecha: "2023", verificada: true },
      17: { opcion: "A", fuente: "Voto a favor de la Ley 4/2023 en el Congreso", fecha: "2023", verificada: true },
      18: { opcion: "A", fuente: "Apoyo a la legislación catalana y estatal contra la violencia machista", fecha: "2023", verificada: true }
    }
  },
  {
    id: "bng", nombre: "BNG", color: "#007BC4", comunidades: ["galicia"],
    posiciones: {
      1: { opcion: "B", fuente: "Programa Electoral BNG (tope a los alquileres y parque público)", fecha: "2023-2024", verificada: true },
      2: { opcion: "B", fuente: "Programa Electoral BNG (reducción de jornada hacia las 35h y subida SMI)", fecha: "2023-2024", verificada: true },
      3: { opcion: "C", fuente: "Programa Electoral BNG (blindaje de la sanidad 100% pública)", fecha: "2024", verificada: true },
      4: { opcion: "A", fuente: "Voto a favor de la ILP de Regularización en el Congreso", fecha: "2024", verificada: true },
      5: { opcion: "B", fuente: "Programa Electoral BNG (progresividad fiscal y grandes fortunas)", fecha: "2023-2024", verificada: true },
      6: { opcion: "A", fuente: "Programa Electoral BNG (soberanía y concierto económico gallego)", fecha: "2023-2024", verificada: true },
      7: { opcion: "D", fuente: "Programa Electoral BNG (prioridad exclusiva a la enseñanza pública)", fecha: "2024", verificada: true },
      8: { opcion: "A", fuente: "Acuerdo de investidura y voto favorable a revalorización según IPC", fecha: "2023", verificada: true },
      9: { opcion: "A", fuente: "Programa Electoral BNG (empresa pública gallega de energía)", fecha: "2024", verificada: true },
      10: { opcion: "C", fuente: "Votaciones en el Congreso sobre alternativa habitacional", fecha: "2023-2024", verificada: true },
      11: { opcion: "B", fuente: "Principios programáticos republicanos del BNG", fecha: "2023", verificada: true },
      12: { opcion: "C", fuente: "Posición histórica anti-OTAN e iniciativas en el Congreso", fecha: "2023-2024", verificada: true },
      13: { opcion: "B", fuente: "Programa Electoral BNG (red pública gratuita de escuelas infantiles)", fecha: "2024", verificada: true },
      14: { opcion: "C", fuente: "Posición parlamentaria ante la reforma del CGPJ", fecha: "2024", verificada: true },
      15: { opcion: "A", fuente: "Voto a favor de la Ley Orgánica 1/2023", fecha: "2023", verificada: true },
      16: { opcion: "A", fuente: "Programa Electoral BNG", fecha: "2023-2024", verificada: true },
      17: { opcion: "A", fuente: "Voto a favor de la Ley 4/2023", fecha: "2023", verificada: true },
      18: { opcion: "A", fuente: "Programa Electoral BNG", fecha: "2023-2024", verificada: true }
    }
  },
  {
    id: "pnv", nombre: "EAJ-PNV", color: "#008000", comunidades: ["paisvasco", "navarra"],
    posiciones: {
      1: { opcion: "C", fuente: "Programa Electoral EAJ-PNV y políticas de alquiler público en Euskadi", fecha: "2023-2024", verificada: true },
      2: { opcion: "A", fuente: "Defensa del marco vasco de relaciones laborales y negociación colectiva", fecha: "2024", verificada: true },
      3: { opcion: "D", fuente: "Programa Electoral 2024 (Pacto de Salud y refuerzo de Osakidetza)", fecha: "2024", verificada: true },
      4: { opcion: "B", fuente: "Pacto Social Vasco para la Migración y traspaso competencial", fecha: "2023-2024", verificada: true },
      5: { opcion: "D", fuente: "Regulación tributaria de las Haciendas Forales vascas", fecha: "2023-2024", verificada: true },
      6: { opcion: "A", fuente: "Programa Electoral 2023-2024 (nuevo estatus de autogobierno bilateral)", fecha: "2023-2024", verificada: true },
      7: { opcion: "B", fuente: "Ley 17/2023 de Educación de la Comunidad Autónoma del País Vasco", fecha: "2023", verificada: true },
      8: { opcion: "A", fuente: "Voto a favor del RDL 2/2023 de revalorización de pensiones según IPC", fecha: "2023", verificada: true },
      9: { opcion: "B", fuente: "Ley 4/2024 de Transición Energética y Cambio Climático de Euskadi", fecha: "2024", verificada: true },
      10: { opcion: "B", fuente: "Enmiendas parlamentarias en el Congreso para agilizar desalojos con garantías", fecha: "2024", verificada: true },
      11: { opcion: "B", fuente: "Tradición política no monárquica e iniciativas sobre inviolabilidad", fecha: "2023-2024", verificada: false },
      12: { opcion: "B", fuente: "Programa Electoral (compromiso europeísta, apoyo a Ucrania y dos Estados)", fecha: "2023-2024", verificada: true },
      13: { opcion: "A", fuente: "Estrategia Vasca 2030 para el reto demográfico (ayudas mensuales por hijo y consorcio Haurreskolak)", fecha: "2023-2024", verificada: false },
      14: { opcion: "B", fuente: "Voto a favor de la Ley Orgánica 3/2024 de reforma del CGPJ", fecha: "2024", verificada: true },
      15: { opcion: "A", fuente: "Voto a favor de la Ley Orgánica 1/2023", fecha: "2023", verificada: true },
      16: { opcion: "A", fuente: "Apoyo a la legislación vasca y estatal de igualdad LGTBI", fecha: "2023-2024", verificada: true },
      17: { opcion: "A", fuente: "Ley 4/2024 trans vasca y voto favorable a la Ley 4/2023 estatal", fecha: "2023-2024", verificada: true },
      18: { opcion: "A", fuente: "Ley 1/2022 para la Igualdad de Mujeres y Hombres en Euskadi", fecha: "2022-2024", verificada: true }
    }
  },
  {
    id: "bildu", nombre: "EH Bildu", color: "#8BA300", comunidades: ["paisvasco", "navarra"],
    posiciones: {
      1: { opcion: "B", fuente: "Acuerdo y voto favorable a la Ley 12/2023 por el derecho a la vivienda", fecha: "2023", verificada: true },
      2: { opcion: "B", fuente: "Programa Electoral EH Bildu (reducción de jornada y subida SMI)", fecha: "2023-2024", verificada: true },
      3: { opcion: "C", fuente: "Programa Electoral 2024 (reversión de privatizaciones en Osakidetza)", fecha: "2024", verificada: true },
      4: { opcion: "A", fuente: "Voto a favor de la ILP de Regularización en el Congreso", fecha: "2024", verificada: true },
      5: { opcion: "B", fuente: "Propuestas de reforma fiscal en las Juntas Generales y Parlamento de Navarra", fecha: "2023-2024", verificada: true },
      6: { opcion: "A", fuente: "Programa Electoral (modelo soberanista y plurinacional)", fecha: "2023-2024", verificada: true },
      7: { opcion: "D", fuente: "Posicionamiento ante la Ley de Educación Vasca (prioridad escuela pública)", fecha: "2023", verificada: false },
      8: { opcion: "A", fuente: "Voto favorable a la revalorización de pensiones y complemento de mínimas", fecha: "2023", verificada: true },
      9: { opcion: "A", fuente: "Programa Electoral (control público del sector energético y transición renovable)", fecha: "2023-2024", verificada: true },
      10: { opcion: "C", fuente: "Acuerdos para la prórroga de la suspensión de desahucios vulnerables", fecha: "2023-2024", verificada: true },
      11: { opcion: "B", fuente: "Ideario independentista y republicano de EH Bildu", fecha: "2023", verificada: true },
      12: { opcion: "C", fuente: "Posición anti-OTAN e iniciativas sobre Palestina en el Congreso", fecha: "2023-2024", verificada: true },
      13: { opcion: "B", fuente: "Programa Electoral (sistema público universal de cuidados y gratuidad 0-3)", fecha: "2023-2024", verificada: true },
      14: { opcion: "C", fuente: "Posición parlamentaria ante la renovación del CGPJ", fecha: "2024", verificada: true },
      15: { opcion: "A", fuente: "Voto a favor de la Ley Orgánica 1/2023", fecha: "2023", verificada: true },
      16: { opcion: "A", fuente: "Programa Electoral EH Bildu", fecha: "2023-2024", verificada: true },
      17: { opcion: "A", fuente: "Voto a favor de la Ley 4/2023 estatal y ley vasca", fecha: "2023-2024", verificada: true },
      18: { opcion: "A", fuente: "Programa Electoral EH Bildu", fecha: "2023-2024", verificada: true }
    }
  },
  {
    id: "upn", nombre: "UPN", color: "#00599C", comunidades: ["navarra"],
    posiciones: {
      1: { opcion: "A", fuente: "Programa Electoral UPN 2023", fecha: "2023", verificada: true },
      2: { opcion: "A", fuente: "Posición en el Congreso sobre diálogo social y negociación colectiva", fecha: "2024", verificada: false },
      3: { opcion: "B", fuente: "Programa Electoral UPN (plan de choque contra listas de espera en Navarra)", fecha: "2023", verificada: true },
      4: { opcion: "C", fuente: "Votaciones e iniciativas parlamentarias en el Congreso", fecha: "2023-2024", verificada: false },
      5: { opcion: "A", fuente: "Propuestas de reforma fiscal de UPN en el Parlamento de Navarra", fecha: "2023-2024", verificada: true },
      6: { opcion: "D", fuente: "Estatutos y Programa UPN (defensa del Régimen Foral en la Constitución)", fecha: "2023", verificada: true },
      7: { opcion: "B", fuente: "Programa Electoral UPN (libertad de elección de centro y red concertada)", fecha: "2023", verificada: true },
      8: { opcion: "B", fuente: "Posicionamiento en debates de sostenibilidad de las pensiones", fecha: "2023", verificada: false },
      9: { opcion: "C", fuente: "Programa Electoral UPN (energía competitiva para la industria)", fecha: "2023", verificada: false },
      10: { opcion: "A", fuente: "Voto favorable a proposiciones de ley de desalojo rápido en el Congreso", fecha: "2024", verificada: true },
      11: { opcion: "A", fuente: "Defensa estatutaria del marco constitucional y la Corona", fecha: "2023", verificada: true },
      12: { opcion: "A", fuente: "Votaciones en el Congreso en política exterior y defensa", fecha: "2023-2024", verificada: true },
      13: { opcion: "A", fuente: "Programa Electoral UPN (deducciones fiscales de apoyo a la natalidad)", fecha: "2023", verificada: true },
      14: { opcion: "A", fuente: "Defensa de la elección de vocales judiciales por los jueces", fecha: "2023-2024", verificada: true },
      15: { opcion: "B", fuente: "Voto en contra de la reforma LO 1/2023 (defensa del consentimiento paterno)", fecha: "2023", verificada: true },
      16: { opcion: "B", fuente: "Respeto al marco legal vigente de matrimonio civil", fecha: "2023", verificada: false },
      17: { opcion: "B", fuente: "Voto en contra de la Ley 4/2023 en el Congreso", fecha: "2023", verificada: true },
      18: { opcion: "B", fuente: "Apoyo al Pacto de Estado contra la Violencia de Género", fecha: "2023", verificada: true }
    }
  },
  {
    id: "cc", nombre: "Coalición Canaria", color: "#D99B00", comunidades: ["canarias"],
    posiciones: {
      1: { opcion: "C", fuente: "Decreto-ley 1/2024 de medidas urgentes en materia de vivienda en Canarias", fecha: "2024", verificada: true },
      2: { opcion: "A", fuente: "Posicionamiento sobre concertación social y tejido de pymes canario", fecha: "2024", verificada: false },
      3: { opcion: "B", fuente: "Acuerdo de gobierno en Canarias (gestión del Servicio Canario de la Salud)", fecha: "2023-2024", verificada: true },
      4: { opcion: "B", fuente: "Pacto Canario por la Inmigración y reforma del art. 35 de la Ley de Extranjería", fecha: "2024", verificada: true },
      5: { opcion: "A", fuente: "Bonificación del 99,9% del Impuesto de Sucesiones en Canarias y defensa del REF", fecha: "2023", verificada: true },
      6: { opcion: "A", fuente: "Agenda Canaria y defensa del Régimen Económico y Fiscal (REF) y fuero canario", fecha: "2023-2024", verificada: true },
      7: { opcion: "C", fuente: "Programa Electoral de Coalición Canaria en materia educativa", fecha: "2023", verificada: false },
      8: { opcion: "A", fuente: "Voto a favor de la revalorización de las pensiones conforme al IPC", fecha: "2023", verificada: true },
      9: { opcion: "B", fuente: "Ley 6/2022 de Cambio Climático y Transición Energética de Canarias", fecha: "2022-2024", verificada: true },
      10: { opcion: "B", fuente: "Apoyo parlamentario a medidas de agilización judicial con garantías", fecha: "2024", verificada: false },
      11: { opcion: "A", fuente: "Respeto al marco constitucional de 1978", fecha: "2023", verificada: true },
      12: { opcion: "B", fuente: "Posicionamiento europeísta y multilateral en el Congreso", fecha: "2024", verificada: false },
      13: { opcion: "B", fuente: "Plan de impulso de plazas públicas de educación de 0 a 3 años en Canarias", fecha: "2023-2024", verificada: true },
      14: { opcion: "B", fuente: "Voto a favor de la Ley Orgánica 3/2024 de renovación del CGPJ", fecha: "2024", verificada: true },
      15: { opcion: "A", fuente: "Respeto a la legislación estatal vigente", fecha: "2023", verificada: false },
      16: { opcion: "A", fuente: "Apoyo a las leyes canarias de igualdad y no discriminación", fecha: "2023", verificada: true },
      17: { opcion: "A", fuente: "Ley 2/2021 de igualdad social y no discriminación por razón de identidad de género en Canarias", fecha: "2021-2023", verificada: true },
      18: { opcion: "A", fuente: "Acuerdos del Parlamento de Canarias contra la violencia de género", fecha: "2023-2024", verificada: true }
    }
  }
];
