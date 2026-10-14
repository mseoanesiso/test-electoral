// ============================================================
// DATOS DEL TEST - Escenario Elecciones Generales (20 preguntas)
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
    contexto: "Se discute si conviene reducir la carga impositiva sobre rentas y patrimonio, o aumentar la progresividad fiscal sobre rentas altas y grandes fortunas para sostener los servicios públicos.",
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
    texto: "¿Cómo debe enfocarse legalmente el cambio registral de sexo y la atención sanitaria asociada?",
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
  },
  {
    id: 19, tema: "Economía y Coste de Vida", pesoBase: 3,
    texto: "¿Qué estrategia económica debería priorizar el Gobierno para contener el coste de la vida e impulsar la economía?",
    contexto: "Ante el encarecimiento de la cesta de la compra, la energía y las hipotecas, los partidos debaten qué palanca económica priorizar: desregular y eliminar trabas empresariales para aumentar la oferta, intervenir precios básicos y reforzar la inversión pública, combinar reformas de productividad con ayudas selectivas y control del déficit, o recortar drásticamente el gasto público.",
    opciones: [
      { id: "A", texto: "Eliminar trabas regulatorias y burocráticas a empresas y autónomos para estimular la inversión privada, la competencia y el aumento de la oferta." },
      { id: "B", texto: "Intervenir precios de suministros y alimentos básicos, reforzar las prestaciones sociales y aumentar la inversión pública en sectores estratégicos." },
      { id: "C", texto: "Combinar inversiones en modernización productiva con ayudas selectivas a hogares vulnerables y una senda gradual de reducción del déficit público." },
      { id: "D", texto: "Priorizar el recorte del gasto político y de las subvenciones públicas, reduciendo el tamaño de la administración y la deuda del Estado." }
    ]
  },
  {
    id: 20, tema: "Corrupción y Calidad Democrática", pesoBase: 2,
    texto: "¿Qué línea de actuación debería priorizarse para prevenir la corrupción y reforzar el control sobre el poder público?",
    contexto: "Aunque todas las formaciones declaran rechazar la corrupción, discrepan sobre qué reforma institucional debe ser prioritaria: reforzar los controles de contratación y la protección al denunciante, endurecer las penas eliminando aforamientos e indultos, suprimir subvenciones a partidos y entes políticos, o prohibir las 'puertas giratorias' y reformar la Ley de Secretos Oficiales.",
    opciones: [
      { id: "A", texto: "Reforzar los controles sobre contratación pública, garantizar la protección a denunciantes de irregularidades y exigir transparencia en la financiación de medios." },
      { id: "B", texto: "Endurecer las penas por malversación y corrupción, limitar los aforamientos políticos y prohibir por ley los indultos a condenados por corrupción." },
      { id: "C", texto: "Suprimir las subvenciones públicas a partidos políticos, sindicatos y patronales, reducir el número de cargos públicos y auditar el gasto administrativo." },
      { id: "D", texto: "Prohibir que ex altos cargos pasen a consejos de administración de empresas reguladas ('puertas giratorias'), regular los lobbies y derogar la Ley de Secretos Oficiales de 1968." }
    ]
  }
];

const PARTIDOS = [
  {
    id: "psoe", nombre: "PSOE", color: "#E01021", comunidades: ["todas"],
    posiciones: {
      1: { opcion: "C", fuente: "Ley 12/2023 por el derecho a la vivienda", fecha: "2023", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2023-12203", referencia: "BOE-A-2023-12203 (Zonas tensionadas e incentivos fiscales)", tipoEvidencia: "Ley / Norma BOE", nivelConfianza: "alta", verificada: true },
      2: { opcion: "B", fuente: "Acuerdo de coalición PSOE-Sumar y subidas del SMI", fecha: "2023-2024", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2024-2285", referencia: "RD 145/2024 de subida del SMI y acuerdo programático de reducción a 37,5h", tipoEvidencia: "Acuerdo Institucional / Ejecutivo", nivelConfianza: "alta", verificada: true },
      3: { opcion: "D", fuente: "Programa Electoral Generales 2023", fecha: "2023", url: null, referencia: "Bloque de Sanidad Pública y refuerzo de Atención Primaria", tipoEvidencia: "Programa Electoral Oficial", nivelConfianza: "alta", verificada: true },
      4: { opcion: "B", fuente: "Reforma del Reglamento de Extranjería (RD 1155/2024)", fecha: "2024", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2024-24099", referencia: "BOE-A-2024-24099 (Arraigo socioformativo y migración laboral)", tipoEvidencia: "Ley / Norma BOE", nivelConfianza: "alta", verificada: true },
      5: { opcion: "D", fuente: "Ley 38/2022 y paquetes fiscales 2023-2024", fecha: "2022-2024", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2022-22685", referencia: "Gravámenes temporales e Impuesto de Solidaridad de Grandes Fortunas", tipoEvidencia: "Ley / Norma BOE", nivelConfianza: "alta", verificada: true },
      6: { opcion: "C", fuente: "Resoluciones del 41.º Congreso Federal del PSOE", fecha: "2024", url: null, referencia: "Ponencia marco sobre Estado autonómico y financiación", tipoEvidencia: "Programa Electoral Oficial", nivelConfianza: "alta", verificada: true },
      7: { opcion: "C", fuente: "Ley Orgánica 3/2020 de Educación (LOMLOE)", fecha: "2020", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2020-17264", referencia: "BOE-A-2020-17264 (Art. 108 y 109 sobre red pública y programación de plazas)", tipoEvidencia: "Ley / Norma BOE", nivelConfianza: "alta", verificada: true },
      8: { opcion: "A", fuente: "Ley 21/2021 y RDL 2/2023 de reforma de pensiones", fecha: "2021-2023", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2023-6967", referencia: "BOE-A-2023-6967 (Mecanismo de Equidad Intergeneracional y revalorización IPC)", tipoEvidencia: "Ley / Norma BOE", nivelConfianza: "alta", verificada: true },
      9: { opcion: "B", fuente: "Ley 7/2021 de Cambio Climático y PNIEC 2023-2030", fecha: "2021-2024", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2021-8447", referencia: "BOE-A-2021-8447 y actualización del Plan Nacional Integrado de Energía y Clima", tipoEvidencia: "Ley / Norma BOE", nivelConfianza: "alta", verificada: true },
      10: { opcion: "B", fuente: "Ley 12/2023 y posición parlamentaria en Ley de Eficiencia Procesal", fecha: "2023-2024", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2023-12203", referencia: "Disposición final quinta sobre procedimientos de desahucio y vulnerabilidad", tipoEvidencia: "Ley / Norma BOE", nivelConfianza: "alta", verificada: true },
      11: { opcion: "A", fuente: "Posición estatutaria y parlamentaria sobre el Título II de la CE", fecha: "2023-2024", url: "https://www.congreso.es", referencia: "Votaciones en la Mesa y Pleno del Congreso en defensa del marco constitucional", tipoEvidencia: "Iniciativa / Votación Parlamentaria", nivelConfianza: "alta", verificada: true },
      12: { opcion: "B", fuente: "Acuerdo de Consejo de Ministros (reconocimiento de Palestina) y apoyo a Ucrania", fecha: "2024", url: "https://www.congreso.es", referencia: "Comparecencias del Gobierno ante el Pleno del Congreso (mayo 2024)", tipoEvidencia: "Acuerdo Institucional / Ejecutivo", nivelConfianza: "alta", verificada: true },
      13: { opcion: "B", fuente: "Proyecto de Ley de Familias y RDL 6/2019 de permisos iguales", fecha: "2023-2024", url: "https://www.congreso.es", referencia: "Proyecto de Ley de Familias remitido a las Cortes Generales", tipoEvidencia: "Iniciativa / Votación Parlamentaria", nivelConfianza: "alta", verificada: true },
      14: { opcion: "B", fuente: "Ley Orgánica 3/2024 de reforma de la LOPJ", fecha: "2024", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2024-15938", referencia: "BOE-A-2024-15938 (Renovación parlamentaria del CGPJ)", tipoEvidencia: "Ley / Norma BOE", nivelConfianza: "alta", verificada: true },
      15: { opcion: "A", fuente: "Ley Orgánica 1/2023 de salud sexual y reproductiva", fecha: "2023", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2023-5364", referencia: "BOE-A-2023-5364 (Supresión del requisito paterno en 16-17 años y garantía pública)", tipoEvidencia: "Ley / Norma BOE", nivelConfianza: "alta", verificada: true },
      16: { opcion: "A", fuente: "Ley 13/2005 y Ley 4/2023 de igualdad LGTBI", fecha: "2005-2023", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2005-11364", referencia: "BOE-A-2005-11364 y BOE-A-2023-5366", tipoEvidencia: "Ley / Norma BOE", nivelConfianza: "alta", verificada: true },
      17: { opcion: "A", fuente: "Ley 4/2023 para la igualdad real y efectiva de las personas trans", fecha: "2023", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2023-5366", referencia: "BOE-A-2023-5366 (Arts. 43 y ss. sobre rectificación registral)", tipoEvidencia: "Ley / Norma BOE", nivelConfianza: "alta", verificada: true },
      18: { opcion: "A", fuente: "Ley Orgánica 1/2004 y renovación del Pacto de Estado", fecha: "2023-2025", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2004-21760", referencia: "BOE-A-2004-21760 y dictamen de renovación del Pacto de Estado en el Congreso", tipoEvidencia: "Ley / Norma BOE", nivelConfianza: "alta", verificada: true },
      19: { opcion: "C", fuente: "RDL 4/2024 de medidas anticrisis y Plan Fiscal Estructural 2025-2028", fecha: "2024", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2024-12944", referencia: "BOE-A-2024-12944 (Ayudas selectivas, fondos PRTR y senda de estabilidad)", tipoEvidencia: "Ley / Norma BOE", nivelConfianza: "alta", verificada: true },
      20: { opcion: "A", fuente: "Ley 2/2023 de protección del informante y Plan de Acción por la Democracia", fecha: "2023-2024", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2023-4513", referencia: "BOE-A-2023-4513 y acuerdo del Consejo de Ministros de 17/09/2024", tipoEvidencia: "Ley / Norma BOE", nivelConfianza: "alta", verificada: true }
    }
  },
  {
    id: "pp", nombre: "PP", color: "#0155A4", comunidades: ["todas"],
    posiciones: {
      1: { opcion: "A", fuente: "Programa Electoral PP 2023 y Plan de Vivienda", fecha: "2023-2024", url: null, referencia: "Propuestas de avales para jóvenes, suelo y seguridad jurídica frente a la Ley 12/2023", tipoEvidencia: "Programa Electoral Oficial", nivelConfianza: "alta", verificada: true },
      2: { opcion: "A", fuente: "Posición parlamentaria sobre jornada laboral y negociación colectiva", fecha: "2024", url: "https://www.congreso.es", referencia: "Debates parlamentarios sobre diálogo social y productividad por sectores", tipoEvidencia: "Síntesis en revisión", nivelConfianza: "media", verificada: false, nota: "Defiende que cualquier ajuste de jornada emane de los convenios colectivos sin imposición legal." },
      3: { opcion: "B", fuente: "Programa Electoral PP 2023 y gestión sanitaria autonómica", fecha: "2023", url: null, referencia: "Refuerzo presupuestario autonómico manteniendo conciertos para reducir espera", tipoEvidencia: "Programa Electoral Oficial", nivelConfianza: "alta", verificada: true },
      4: { opcion: "C", fuente: "Iniciativas parlamentarias del GP Popular sobre política migratoria", fecha: "2024", url: "https://www.congreso.es", referencia: "Proposiciones no de ley sobre control fronterizo y vinculación laboral", tipoEvidencia: "Síntesis en revisión", nivelConfianza: "media", verificada: false },
      5: { opcion: "A", fuente: "Programa Electoral PP 2023 y rebajas fiscales autonómicas", fecha: "2023", url: null, referencia: "Deflactación del IRPF y bonificación de Patrimonio y Sucesiones", tipoEvidencia: "Programa Electoral Oficial", nivelConfianza: "alta", verificada: true },
      6: { opcion: "D", fuente: "Declaración de Córdoba y Madrid de presidentes autonómicos del PP", fecha: "2024", url: null, referencia: "Defensa de la multilateralidad en el CPFF y rechazo al cupo singular", tipoEvidencia: "Acuerdo Institucional / Ejecutivo", nivelConfianza: "alta", verificada: true },
      7: { opcion: "B", fuente: "Programa Electoral Generales 2023", fecha: "2023", url: null, referencia: "Libertad de elección de centro y garantía de la red concertada y especial", tipoEvidencia: "Programa Electoral Oficial", nivelConfianza: "alta", verificada: true },
      8: { opcion: "B", fuente: "Programa Electoral 2023 y voto contra el RDL 2/2023", fecha: "2023", url: "https://www.congreso.es", referencia: "Votación de convalidación del RDL 2/2023 en el Congreso", tipoEvidencia: "Iniciativa / Votación Parlamentaria", nivelConfianza: "alta", verificada: true },
      9: { opcion: "C", fuente: "Programa Electoral Generales 2023", fecha: "2023", url: null, referencia: "Extensión de la vida útil de las centrales nucleares y neutralidad tecnológica", tipoEvidencia: "Programa Electoral Oficial", nivelConfianza: "alta", verificada: true },
      10: { opcion: "A", fuente: "Proposición de Ley Orgánica contra la ocupación ilegal", fecha: "2024", url: "https://www.congreso.es", referencia: "Proposición de Ley aprobada en el Senado y remitida al Congreso (desalojo 24-48h)", tipoEvidencia: "Iniciativa / Votación Parlamentaria", nivelConfianza: "alta", verificada: true },
      11: { opcion: "A", fuente: "Programa Electoral 2023 (defensa de la Monarquía parlamentaria)", fecha: "2023", url: null, referencia: "Bloque institucional de defensa de la Constitución de 1978 y la Corona", tipoEvidencia: "Programa Electoral Oficial", nivelConfianza: "alta", verificada: true },
      12: { opcion: "A", fuente: "Programa Electoral 2023 y votaciones en el Congreso", fecha: "2023-2024", url: "https://www.congreso.es", referencia: "Compromiso con la OTAN, la UE y el apoyo a Ucrania", tipoEvidencia: "Programa Electoral Oficial", nivelConfianza: "alta", verificada: true },
      13: { opcion: "A", fuente: "Programa Electoral 2023 y propuestas de conciliación y natalidad", fecha: "2023-2024", url: null, referencia: "Deducciones fiscales por maternidad, apoyo a familias numerosas y cofinanciación 0-3", tipoEvidencia: "Programa Electoral Oficial", nivelConfianza: "alta", verificada: true },
      14: { opcion: "A", fuente: "Programa Electoral 2023 y posición sobre elección judicial del CGPJ", fecha: "2023-2024", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2024-15938", referencia: "Disposición adicional de la LO 3/2024 y defensa de elección por los jueces", tipoEvidencia: "Programa Electoral Oficial", nivelConfianza: "alta", verificada: true },
      15: { opcion: "B", fuente: "Programa Electoral 2023 y posicionamiento tras la STC 44/2023", fecha: "2023", url: null, referencia: "Aceptación de la ley de plazos exigiendo consentimiento paterno para menores", tipoEvidencia: "Programa Electoral Oficial", nivelConfianza: "alta", verificada: true },
      16: { opcion: "B", fuente: "Posición oficial tras sentencia del TC sobre la Ley 13/2005", fecha: "2023", url: null, referencia: "Respeto al matrimonio civil igualitario vigente", tipoEvidencia: "Síntesis en revisión", nivelConfianza: "media", verificada: false },
      17: { opcion: "B", fuente: "Programa Electoral Generales 2023", fecha: "2023", url: null, referencia: "Propuesta de reforma de la Ley 4/2023 para exigir aval médico en menores y proteger deporte femenino", tipoEvidencia: "Programa Electoral Oficial", nivelConfianza: "alta", verificada: true },
      18: { opcion: "B", fuente: "Pacto de Estado contra la Violencia de Género y LO 4/2023", fecha: "2023-2025", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2023-10213", referencia: "BOE-A-2023-10213 (Reforma de la LO 10/2022) y renovación del Pacto de Estado", tipoEvidencia: "Ley / Norma BOE", nivelConfianza: "alta", verificada: true },
      19: { opcion: "A", fuente: "Programa Electoral PP 2023 (Bloque 1: Crecer de forma sostenible)", fecha: "2023", url: null, referencia: "Eliminación de trabas regulatorias, unidad de mercado y apoyo a empresas y autónomos", tipoEvidencia: "Programa Electoral Oficial", nivelConfianza: "alta", verificada: true },
      20: { opcion: "B", fuente: "Programa Electoral PP 2023 e iniciativas sobre malversación e indultos", fecha: "2023-2024", url: "https://www.congreso.es", referencia: "Proposiciones de ley para endurecer penas de malversación y prohibir indultos por corrupción", tipoEvidencia: "Iniciativa / Votación Parlamentaria", nivelConfianza: "alta", verificada: true }
    }
  },
  {
    id: "vox", nombre: "Vox", color: "#52A319", comunidades: ["todas"],
    posiciones: {
      1: { opcion: "D", fuente: "Programa Electoral 2023 y Agenda España", fecha: "2023", url: null, referencia: "Derogación de la Ley 12/2023, liberalización total de suelo y rebaja fiscal", tipoEvidencia: "Programa Electoral Oficial", nivelConfianza: "alta", verificada: true },
      2: { opcion: "C", fuente: "Programa Electoral Generales 2023", fecha: "2023", url: null, referencia: "Reducción de cotizaciones empresariales y flexibilización laboral", tipoEvidencia: "Programa Electoral Oficial", nivelConfianza: "alta", verificada: true },
      3: { opcion: "A", fuente: "Agenda España y Programa Electoral 2023", fecha: "2023", url: null, referencia: "Devolución al Estado de las competencias de Sanidad y tarjeta sanitaria única", tipoEvidencia: "Programa Electoral Oficial", nivelConfianza: "alta", verificada: true },
      4: { opcion: "D", fuente: "Programa Electoral 2023 e iniciativas en el Congreso", fecha: "2023-2024", url: "https://www.congreso.es", referencia: "Bloqueo naval, expulsión inmediata de irregulares y cierre de centros de MENAs", tipoEvidencia: "Programa Electoral Oficial", nivelConfianza: "alta", verificada: true },
      5: { opcion: "C", fuente: "Programa Económico y Electoral 2023", fecha: "2023", url: null, referencia: "IRPF de tipo reducido (15%/25%) y supresión de Patrimonio, Sucesiones y Plusvalía", tipoEvidencia: "Programa Electoral Oficial", nivelConfianza: "alta", verificada: true },
      6: { opcion: "B", fuente: "Agenda España y Programa Electoral 2023", fecha: "2023", url: null, referencia: "Transformación hacia un Estado unitario y supresión de parlamentos autonómicos", tipoEvidencia: "Programa Electoral Oficial", nivelConfianza: "alta", verificada: true },
      7: { opcion: "A", fuente: "Programa Electoral 2023", fecha: "2023", url: null, referencia: "Implantación del cheque escolar y del pin parental", tipoEvidencia: "Programa Electoral Oficial", nivelConfianza: "alta", verificada: true },
      8: { opcion: "C", fuente: "Programa Económico de Vox", fecha: "2023", url: null, referencia: "Transición hacia un sistema mixto de capitalización y reparto", tipoEvidencia: "Programa Electoral Oficial", nivelConfianza: "alta", verificada: true },
      9: { opcion: "D", fuente: "Agenda España y Programa Electoral 2023", fecha: "2023", url: null, referencia: "Derogación de la Ley 7/2021 de Cambio Climático y abandono del Pacto Verde Europeo", tipoEvidencia: "Programa Electoral Oficial", nivelConfianza: "alta", verificada: true },
      10: { opcion: "A", fuente: "Programa Electoral 2023 y proposiciones de ley antiocupación", fecha: "2023-2024", url: "https://www.congreso.es", referencia: "Desalojo policial en 24h y reforma del Código Penal", tipoEvidencia: "Iniciativa / Votación Parlamentaria", nivelConfianza: "alta", verificada: true },
      11: { opcion: "A", fuente: "Estatutos y Programa Electoral 2023", fecha: "2023", url: null, referencia: "Defensa de la Monarquía parlamentaria y la unidad nacional", tipoEvidencia: "Programa Electoral Oficial", nivelConfianza: "alta", verificada: true },
      12: { opcion: "A", fuente: "Programa Electoral 2023 y votaciones sobre defensa", fecha: "2023-2024", url: "https://www.congreso.es", referencia: "Incremento del presupuesto de defensa y alineamiento occidental", tipoEvidencia: "Síntesis en revisión", nivelConfianza: "media", verificada: false },
      13: { opcion: "A", fuente: "Agenda España (perspectiva de familia y natalidad)", fecha: "2023", url: null, referencia: "Bonificaciones fiscales por número de hijos y apoyo a familias numerosas", tipoEvidencia: "Programa Electoral Oficial", nivelConfianza: "alta", verificada: true },
      14: { opcion: "A", fuente: "Programa Electoral 2023 y voto contra la LO 3/2024", fecha: "2023-2024", url: "https://www.congreso.es", referencia: "Voto en contra del acuerdo PP-PSOE sobre el CGPJ y defensa de elección por jueces", tipoEvidencia: "Iniciativa / Votación Parlamentaria", nivelConfianza: "alta", verificada: true },
      15: { opcion: "C", fuente: "Agenda España y Programa Electoral 2023", fecha: "2023", url: null, referencia: "Derogación de la Ley Orgánica 1/2023 y defensa de la vida desde la concepción", tipoEvidencia: "Programa Electoral Oficial", nivelConfianza: "alta", verificada: true },
      16: { opcion: "C", fuente: "Programa Electoral 2023", fecha: "2023", url: null, referencia: "Sustitución por ley de uniones civiles y derogación de leyes LGTBI", tipoEvidencia: "Programa Electoral Oficial", nivelConfianza: "alta", verificada: true },
      17: { opcion: "C", fuente: "Programa Electoral 2023 y recurso de inconstitucionalidad", fecha: "2023", url: "https://www.congreso.es", referencia: "Recurso ante el TC y propuesta de derogación integral de la Ley 4/2023", tipoEvidencia: "Iniciativa / Votación Parlamentaria", nivelConfianza: "alta", verificada: true },
      18: { opcion: "C", fuente: "Programa Electoral 2023", fecha: "2023", url: null, referencia: "Derogación de la LO 1/2004 y aprobación de una Ley de Violencia Intrafamiliar", tipoEvidencia: "Programa Electoral Oficial", nivelConfianza: "alta", verificada: true },
      19: { opcion: "D", fuente: "Agenda España y Programa Electoral 2023", fecha: "2023", url: null, referencia: "Reducción drástica del gasto político, ministerios, organismos y subvenciones", tipoEvidencia: "Programa Electoral Oficial", nivelConfianza: "alta", verificada: true },
      20: { opcion: "C", fuente: "Programa Electoral 2023 e iniciativas en el Congreso", fecha: "2023-2024", url: "https://www.congreso.es", referencia: "Supresión de subvenciones públicas a partidos políticos, sindicatos y patronales", tipoEvidencia: "Programa Electoral Oficial", nivelConfianza: "alta", verificada: true }
    }
  },
  {
    id: "frenteamplio", nombre: "Sumar / Izquierda Unida", color: "#E51C55", comunidades: ["todas"],
    posiciones: {
      1: { opcion: "B", fuente: "Programa Electoral Sumar 2023", fecha: "2023", url: null, referencia: "Regulación de alquileres de temporada, topes de renta y restricción a fondos", tipoEvidencia: "Programa Electoral Oficial", nivelConfianza: "alta", verificada: true },
      2: { opcion: "B", fuente: "Programa Sumar 2023 y acuerdo del Ministerio de Trabajo", fecha: "2023-2024", url: null, referencia: "Reducción legal de la jornada a 37,5h (camino a 35h/32h) y subida del SMI", tipoEvidencia: "Acuerdo Institucional / Ejecutivo", nivelConfianza: "alta", verificada: true },
      3: { opcion: "C", fuente: "Programa Electoral Sumar 2023", fecha: "2023", url: null, referencia: "Blindaje de la gestión pública directa y reversión de privatizaciones sanitarias", tipoEvidencia: "Programa Electoral Oficial", nivelConfianza: "alta", verificada: true },
      4: { opcion: "A", fuente: "Voto favorable a la ILP de Regularización en el Congreso", fecha: "2024", url: "https://www.congreso.es", referencia: "Toma en consideración de la ILP de regularización extraordinaria (abril 2024)", tipoEvidencia: "Iniciativa / Votación Parlamentaria", nivelConfianza: "alta", verificada: true },
      5: { opcion: "B", fuente: "Programa Electoral Sumar 2023", fecha: "2023", url: null, referencia: "Impuesto permanente a grandes fortunas, banca, energéticas y rentas del capital", tipoEvidencia: "Programa Electoral Oficial", nivelConfianza: "alta", verificada: true },
      6: { opcion: "A", fuente: "Programa Electoral Sumar 2023", fecha: "2023", url: null, referencia: "Modelo federal plurinacional y reforma de la financiación territorial", tipoEvidencia: "Programa Electoral Oficial", nivelConfianza: "alta", verificada: true },
      7: { opcion: "D", fuente: "Programa Electoral Sumar 2023", fecha: "2023", url: null, referencia: "Integración progresiva de centros en una red única pública y laica", tipoEvidencia: "Programa Electoral Oficial", nivelConfianza: "alta", verificada: true },
      8: { opcion: "A", fuente: "Programa Electoral Sumar 2023 y voto al RDL 2/2023", fecha: "2023", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2023-6967", referencia: "Garantía del IPC por ley y destope de cotizaciones máximas", tipoEvidencia: "Ley / Norma BOE", nivelConfianza: "alta", verificada: true },
      9: { opcion: "A", fuente: "Programa Electoral Sumar 2023", fecha: "2023", url: null, referencia: "Creación de una empresa pública de energía y cierre nuclear según calendario", tipoEvidencia: "Programa Electoral Oficial", nivelConfianza: "alta", verificada: true },
      10: { opcion: "C", fuente: "Programa Electoral Sumar 2023 y enmiendas parlamentarias", fecha: "2023-2024", url: "https://www.congreso.es", referencia: "Suspensión estructural de desahucios sin alternativa habitacional", tipoEvidencia: "Programa Electoral Oficial", nivelConfianza: "alta", verificada: true },
      11: { opcion: "B", fuente: "Documentos políticos de IU y espacio confederal Sumar", fecha: "2023-2024", url: null, referencia: "Horizonte republicano de las organizaciones integradas en la coalición", tipoEvidencia: "Síntesis en revisión", nivelConfianza: "media", verificada: false },
      12: { opcion: "B", fuente: "Acuerdo de coalición y reconocimiento del Estado de Palestina", fecha: "2023-2024", url: "https://www.congreso.es", referencia: "Reconocimiento de Palestina y defensa de la paz y el derecho internacional", tipoEvidencia: "Síntesis en revisión", nivelConfianza: "media", verificada: false, nota: "Existen matices internos dentro de la coalición respecto al envío de armamento y la OTAN (entre las opciones B y C)." },
      13: { opcion: "B", fuente: "Programa Electoral Sumar 2023", fecha: "2023", url: null, referencia: "Prestación universal por crianza (200€/mes), permisos retribuidos y 0-3 gratuito", tipoEvidencia: "Programa Electoral Oficial", nivelConfianza: "alta", verificada: true },
      14: { opcion: "B", fuente: "Voto a favor de la Ley Orgánica 3/2024", fecha: "2024", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2024-15938", referencia: "Votación de la LO 3/2024 en el Pleno del Congreso", tipoEvidencia: "Iniciativa / Votación Parlamentaria", nivelConfianza: "alta", verificada: true },
      15: { opcion: "A", fuente: "Ley Orgánica 1/2023 y Programa Sumar 2023", fecha: "2023", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2023-5364", referencia: "Defensa de la reforma de 2023 en la red sanitaria pública", tipoEvidencia: "Ley / Norma BOE", nivelConfianza: "alta", verificada: true },
      16: { opcion: "A", fuente: "Ley 4/2023 y Programa Electoral Sumar 2023", fecha: "2023", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2023-5366", referencia: "Políticas públicas de igualdad LGTBI+", tipoEvidencia: "Ley / Norma BOE", nivelConfianza: "alta", verificada: true },
      17: { opcion: "A", fuente: "Ley 4/2023 y Programa Electoral Sumar 2023", fecha: "2023", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2023-5366", referencia: "Defensa íntegra de la libre determinación registral de género", tipoEvidencia: "Ley / Norma BOE", nivelConfianza: "alta", verificada: true },
      18: { opcion: "A", fuente: "Programa Electoral Sumar 2023", fecha: "2023", url: null, referencia: "Ampliación de recursos contra las violencias machistas", tipoEvidencia: "Programa Electoral Oficial", nivelConfianza: "alta", verificada: true },
      19: { opcion: "B", fuente: "Programa Electoral Sumar 2023 (bloque económico y coste de vida)", fecha: "2023", url: null, referencia: "Cesta básica de precios regulados, control de márgenes e inversión pública", tipoEvidencia: "Programa Electoral Oficial", nivelConfianza: "alta", verificada: true },
      20: { opcion: "D", fuente: "Proposición de Ley anticorrupción de Sumar e iniciativas sobre Secretos Oficiales", fecha: "2024", url: "https://www.congreso.es", referencia: "Iniciativas registradas en el Congreso sobre puertas giratorias, lobbies y Ley de 1968", tipoEvidencia: "Iniciativa / Votación Parlamentaria", nivelConfianza: "alta", verificada: true }
    }
  },
  {
    id: "podemos", nombre: "Podemos", color: "#6A2E68", comunidades: ["todas"],
    posiciones: {
      1: { opcion: "B", fuente: "Programa Podemos y exigencias parlamentarias sobre vivienda", fecha: "2023-2024", url: "https://www.congreso.es", referencia: "Bajada obligatoria de alquileres y prohibición de compra a fondos buitre", tipoEvidencia: "Iniciativa / Votación Parlamentaria", nivelConfianza: "alta", verificada: true },
      2: { opcion: "B", fuente: "Programa Podemos y votaciones en el Congreso", fecha: "2023-2024", url: "https://www.congreso.es", referencia: "Reducción legal de la jornada laboral y subida del SMI", tipoEvidencia: "Programa Electoral Oficial", nivelConfianza: "alta", verificada: true },
      3: { opcion: "C", fuente: "Proposición de Ley contra la privatización sanitaria (Ley Darias/Casado)", fecha: "2023", url: "https://www.congreso.es", referencia: "Blindaje de la gestión directa 100% pública del SNS", tipoEvidencia: "Iniciativa / Votación Parlamentaria", nivelConfianza: "alta", verificada: true },
      4: { opcion: "A", fuente: "Impulso parlamentario a la ILP de Regularización", fecha: "2024", url: "https://www.congreso.es", referencia: "Voto a favor y exigencia de tramitación urgente de la ILP de regularización", tipoEvidencia: "Iniciativa / Votación Parlamentaria", nivelConfianza: "alta", verificada: true },
      5: { opcion: "B", fuente: "Propuestas fiscales de Podemos en el Congreso", fecha: "2023-2024", url: "https://www.congreso.es", referencia: "Impuesto permanente a banca, energéticas y grandes fortunas", tipoEvidencia: "Iniciativa / Votación Parlamentaria", nivelConfianza: "alta", verificada: true },
      6: { opcion: "A", fuente: "Documentos políticos de Podemos", fecha: "2023", url: null, referencia: "Estado plurinacional y derecho a decidir", tipoEvidencia: "Programa Electoral Oficial", nivelConfianza: "alta", verificada: true },
      7: { opcion: "D", fuente: "Programa marco de Podemos", fecha: "2023", url: null, referencia: "Red única pública y supresión progresiva de conciertos educativos", tipoEvidencia: "Programa Electoral Oficial", nivelConfianza: "alta", verificada: true },
      8: { opcion: "A", fuente: "Votación del RDL 2/2023 y blindaje de pensiones con el IPC", fecha: "2023", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2023-6967", referencia: "Revalorización conforme al IPC y aumento de pensiones mínimas", tipoEvidencia: "Ley / Norma BOE", nivelConfianza: "alta", verificada: true },
      9: { opcion: "A", fuente: "Programa marco de Podemos", fecha: "2023", url: null, referencia: "Creación de una empresa pública de energía y transición 100% renovable", tipoEvidencia: "Programa Electoral Oficial", nivelConfianza: "alta", verificada: true },
      10: { opcion: "C", fuente: "Iniciativas parlamentarias sobre moratoria de desahucios", fecha: "2023-2024", url: "https://www.congreso.es", referencia: "Prohibición de desahucios sin alternativa habitacional", tipoEvidencia: "Iniciativa / Votación Parlamentaria", nivelConfianza: "alta", verificada: true },
      11: { opcion: "B", fuente: "Documentos políticos de Podemos", fecha: "2023-2024", url: null, referencia: "Defensa de un referéndum sobre Monarquía o República", tipoEvidencia: "Programa Electoral Oficial", nivelConfianza: "alta", verificada: true },
      12: { opcion: "C", fuente: "Iniciativas en el Congreso y Programa Elecciones Europeas 2024", fecha: "2024", url: "https://www.congreso.es", referencia: "Ruptura de relaciones y embargo de armas a Israel, no al aumento de gasto OTAN", tipoEvidencia: "Iniciativa / Votación Parlamentaria", nivelConfianza: "alta", verificada: true },
      13: { opcion: "B", fuente: "Impulso de la Ley de Familias desde el Ministerio de Derechos Sociales", fecha: "2023", url: "https://www.congreso.es", referencia: "Renta universal por crianza, educación 0-3 gratuita y permisos remunerados", tipoEvidencia: "Iniciativa / Votación Parlamentaria", nivelConfianza: "alta", verificada: true },
      14: { opcion: "C", fuente: "Voto en contra de la LO 3/2024 (pacto PP-PSOE del CGPJ)", fecha: "2024", url: "https://www.congreso.es", referencia: "Rechazo al acuerdo bipartidista del CGPJ y propuesta de reforma de mayorías", tipoEvidencia: "Iniciativa / Votación Parlamentaria", nivelConfianza: "alta", verificada: true },
      15: { opcion: "A", fuente: "Ley Orgánica 1/2023 impulsada por el Ministerio de Igualdad", fecha: "2023", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2023-5364", referencia: "BOE-A-2023-5364", tipoEvidencia: "Ley / Norma BOE", nivelConfianza: "alta", verificada: true },
      16: { opcion: "A", fuente: "Ley 4/2023 impulsada por el Ministerio de Igualdad", fecha: "2023", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2023-5366", referencia: "BOE-A-2023-5366", tipoEvidencia: "Ley / Norma BOE", nivelConfianza: "alta", verificada: true },
      17: { opcion: "A", fuente: "Ley 4/2023 para la igualdad real y efectiva de las personas trans", fecha: "2023", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2023-5366", referencia: "BOE-A-2023-5366", tipoEvidencia: "Ley / Norma BOE", nivelConfianza: "alta", verificada: true },
      18: { opcion: "A", fuente: "Ley Orgánica 10/2022 de garantía integral de la libertad sexual", fecha: "2022-2024", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2022-14630", referencia: "BOE-A-2022-14630 y ampliación de políticas contra la violencia machista", tipoEvidencia: "Ley / Norma BOE", nivelConfianza: "alta", verificada: true },
      19: { opcion: "B", fuente: "Iniciativas económicas de Podemos en el Congreso", fecha: "2023-2024", url: "https://www.congreso.es", referencia: "Tope a precios de alimentos básicos e hipotecas y refuerzo de inversión pública", tipoEvidencia: "Iniciativa / Votación Parlamentaria", nivelConfianza: "alta", verificada: true },
      20: { opcion: "D", fuente: "Iniciativas parlamentarias sobre puertas giratorias y Secretos Oficiales", fecha: "2023-2024", url: "https://www.congreso.es", referencia: "Prohibición de puertas giratorias en empresas estratégicas y derogación Ley 1968", tipoEvidencia: "Iniciativa / Votación Parlamentaria", nivelConfianza: "alta", verificada: true }
    }
  },
  {
    id: "erc", nombre: "ERC", color: "#D99200", comunidades: ["cataluna"],
    posiciones: {
      1: { opcion: "B", fuente: "Apoyo a la Ley 12/2023 y regulación de alquileres en Cataluña", fecha: "2023-2024", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2023-12203", referencia: "Acuerdo parlamentario sobre topes al alquiler en zonas tensionadas", tipoEvidencia: "Ley / Norma BOE", nivelConfianza: "alta", verificada: true },
      2: { opcion: "B", fuente: "Programa Electoral ERC Generales 2023", fecha: "2023", url: null, referencia: "Reducción de la jornada laboral hacia las 35h y aumento del SMI", tipoEvidencia: "Programa Electoral Oficial", nivelConfianza: "alta", verificada: true },
      3: { opcion: "D", fuente: "Programa Electoral ERC y gestión del Departament de Salut", fecha: "2023-2024", url: null, referencia: "Refuerzo de la atención primaria y financiación del sistema sanitario catalán", tipoEvidencia: "Síntesis en revisión", nivelConfianza: "media", verificada: false },
      4: { opcion: "A", fuente: "Voto a favor de la ILP de Regularización en el Congreso", fecha: "2024", url: "https://www.congreso.es", referencia: "Votación de toma en consideración de la ILP (abril 2024)", tipoEvidencia: "Iniciativa / Votación Parlamentaria", nivelConfianza: "alta", verificada: true },
      5: { opcion: "B", fuente: "Programa Electoral ERC 2023 e impuestos propios en Cataluña", fecha: "2023", url: null, referencia: "Progresividad fiscal e impuestos sobre grandes patrimonios y viviendas vacías", tipoEvidencia: "Programa Electoral Oficial", nivelConfianza: "alta", verificada: true },
      6: { opcion: "A", fuente: "Programa Electoral 2023 y acuerdo de financiación singular", fecha: "2023-2024", url: null, referencia: "Soberanía fiscal bilateral y autodeterminación", tipoEvidencia: "Programa Electoral Oficial", nivelConfianza: "alta", verificada: true },
      7: { opcion: "C", fuente: "Política educativa en Cataluña y voto a la LOMLOE", fecha: "2020-2024", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2020-17264", referencia: "Escuela pública como eje vertebrador y lucha contra la segregación escolar", tipoEvidencia: "Ley / Norma BOE", nivelConfianza: "alta", verificada: true },
      8: { opcion: "A", fuente: "Voto favorable al RDL 2/2023 de reforma de pensiones", fecha: "2023", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2023-6967", referencia: "Convalidación del RDL 2/2023 en el Congreso", tipoEvidencia: "Iniciativa / Votación Parlamentaria", nivelConfianza: "alta", verificada: true },
      9: { opcion: "A", fuente: "Creación de la energética pública catalana (L'Energètica)", fecha: "2023", url: null, referencia: "Puesta en marcha de la empresa pública de energía renovable en Cataluña", tipoEvidencia: "Acuerdo Institucional / Ejecutivo", nivelConfianza: "alta", verificada: true },
      10: { opcion: "C", fuente: "Legislación catalana de emergencia habitacional (Ley 24/2015 y Ley 1/2022)", fecha: "2022-2024", url: null, referencia: "Obligación de alquiler social previo por grandes tenedores", tipoEvidencia: "Ley / Norma BOE", nivelConfianza: "alta", verificada: true },
      11: { opcion: "B", fuente: "Estatutos y programa republicano de ERC", fecha: "2023", url: null, referencia: "Principios fundacionales republicanos", tipoEvidencia: "Programa Electoral Oficial", nivelConfianza: "alta", verificada: true },
      12: { opcion: "C", fuente: "Iniciativas del Grupo Republicano en el Congreso", fecha: "2024", url: "https://www.congreso.es", referencia: "Propuestas de embargo de compraventa de armas a Israel y freno al gasto militar", tipoEvidencia: "Iniciativa / Votación Parlamentaria", nivelConfianza: "alta", verificada: true },
      13: { opcion: "B", fuente: "Implantación de la gratuidad de Infantil 2 (I2) en Cataluña", fecha: "2023", url: null, referencia: "Universalización de la etapa 0-3 y permisos parentales", tipoEvidencia: "Acuerdo Institucional / Ejecutivo", nivelConfianza: "alta", verificada: true },
      14: { opcion: "C", fuente: "Voto contra la LO 3/2024 de renovación bipartidista del CGPJ", fecha: "2024", url: "https://www.congreso.es", referencia: "Votación de la LO 3/2024 en el Pleno del Congreso", tipoEvidencia: "Iniciativa / Votación Parlamentaria", nivelConfianza: "alta", verificada: true },
      15: { opcion: "A", fuente: "Voto a favor de la Ley Orgánica 1/2023", fecha: "2023", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2023-5364", referencia: "BOE-A-2023-5364", tipoEvidencia: "Iniciativa / Votación Parlamentaria", nivelConfianza: "alta", verificada: true },
      16: { opcion: "A", fuente: "Programa Electoral ERC 2023", fecha: "2023", url: null, referencia: "Defensa de los derechos LGTBI+", tipoEvidencia: "Programa Electoral Oficial", nivelConfianza: "alta", verificada: true },
      17: { opcion: "A", fuente: "Voto a favor de la Ley 4/2023", fecha: "2023", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2023-5366", referencia: "BOE-A-2023-5366", tipoEvidencia: "Iniciativa / Votación Parlamentaria", nivelConfianza: "alta", verificada: true },
      18: { opcion: "A", fuente: "Programa Electoral ERC 2023 y legislación catalana", fecha: "2023", url: null, referencia: "Ampliación de recursos contra la violencia machista", tipoEvidencia: "Programa Electoral Oficial", nivelConfianza: "alta", verificada: true },
      19: { opcion: "B", fuente: "Programa Electoral ERC (Generales 2023 y Parlament 2024)", fecha: "2023-2024", url: null, referencia: "Control de precios básicos, escudo social e inversión pública", tipoEvidencia: "Programa Electoral Oficial", nivelConfianza: "alta", verificada: true },
      20: { opcion: "D", fuente: "Iniciativas del Grupo Republicano sobre Secretos Oficiales y puertas giratorias", fecha: "2023-2024", url: "https://www.congreso.es", referencia: "Proposiciones de ley para derogar la Ley de Secretos Oficiales de 1968 y regular lobbies", tipoEvidencia: "Iniciativa / Votación Parlamentaria", nivelConfianza: "alta", verificada: true }
    }
  },
  {
    id: "junts", nombre: "Junts per Catalunya", color: "#00A396", comunidades: ["cataluna"],
    posiciones: {
      1: { opcion: "A", fuente: "Voto en contra de la Ley 12/2023 estatal y propuestas sobre vivienda", fecha: "2023-2024", url: "https://www.congreso.es", referencia: "Votación de la Ley 12/2023 y defensa de competencias autonómicas e incentivos", tipoEvidencia: "Iniciativa / Votación Parlamentaria", nivelConfianza: "alta", verificada: true },
      2: { opcion: "A", fuente: "Defensa de la negociación colectiva y de las pymes catalanas", fecha: "2024", url: "https://www.congreso.es", referencia: "Posición parlamentaria ante la reducción uniforme por ley de la jornada", tipoEvidencia: "Iniciativa / Votación Parlamentaria", nivelConfianza: "alta", verificada: true },
      3: { opcion: "B", fuente: "Defensa del modelo sanitario catalán (SISCAT)", fecha: "2024", url: null, referencia: "Programa al Parlament 2024 sobre colaboración concertada en el SISCAT", tipoEvidencia: "Programa Electoral Oficial", nivelConfianza: "alta", verificada: true },
      4: { opcion: "C", fuente: "Acuerdo para la delegación integral de competencias en inmigración", fecha: "2024", url: "https://www.congreso.es", referencia: "Acuerdo político de enero de 2024 e iniciativas sobre multirreincidencia", tipoEvidencia: "Síntesis en revisión", nivelConfianza: "media", verificada: false },
      5: { opcion: "D", fuente: "Programa Electoral al Parlament 2024", fecha: "2024", url: null, referencia: "Deflactación selectiva y bonificación del Impuesto de Sucesiones manteniendo servicios", tipoEvidencia: "Síntesis en revisión", nivelConfianza: "media", verificada: false },
      6: { opcion: "A", fuente: "Programa Electoral 2023-2024", fecha: "2023-2024", url: null, referencia: "Autodeterminación y cesión del 100% de los tributos (concierto bilateral)", tipoEvidencia: "Programa Electoral Oficial", nivelConfianza: "alta", verificada: true },
      7: { opcion: "B", fuente: "Programa Electoral 2023-2024", fecha: "2023-2024", url: null, referencia: "Defensa del Servicio de Educación de Cataluña (red pública y concertada)", tipoEvidencia: "Programa Electoral Oficial", nivelConfianza: "alta", verificada: true },
      8: { opcion: "A", fuente: "Voto favorable a la revalorización de pensiones según el IPC", fecha: "2023", url: "https://www.congreso.es", referencia: "Votaciones sobre revalorización de las pensiones conforme al coste de vida", tipoEvidencia: "Iniciativa / Votación Parlamentaria", nivelConfianza: "alta", verificada: true },
      9: { opcion: "B", fuente: "Programa Electoral sobre transición energética e industria", fecha: "2023-2024", url: null, referencia: "Despliegue de renovables preservando la competitividad industrial", tipoEvidencia: "Síntesis en revisión", nivelConfianza: "media", verificada: false },
      10: { opcion: "A", fuente: "Proposición de Ley en el Congreso para el desalojo en 48 horas", fecha: "2024", url: "https://www.congreso.es", referencia: "Toma en consideración de la Proposición de Ley de Junts sobre ocupación ilegal", tipoEvidencia: "Iniciativa / Votación Parlamentaria", nivelConfianza: "alta", verificada: true },
      11: { opcion: "B", fuente: "Ponencia política y programa republicano de Junts", fecha: "2023", url: null, referencia: "Ideario republicano e independentista", tipoEvidencia: "Programa Electoral Oficial", nivelConfianza: "alta", verificada: true },
      12: { opcion: "B", fuente: "Posicionamiento proeuropeo y apoyo a Ucrania en el Congreso", fecha: "2023-2024", url: "https://www.congreso.es", referencia: "Debates de política exterior en el Congreso", tipoEvidencia: "Síntesis en revisión", nivelConfianza: "media", verificada: false },
      13: { opcion: "A", fuente: "Propuestas de deducciones fiscales por nacimiento y familia", fecha: "2024", url: null, referencia: "Programa al Parlament 2024 en materia fiscal y de familia", tipoEvidencia: "Síntesis en revisión", nivelConfianza: "media", verificada: false },
      14: { opcion: "C", fuente: "Voto en contra de la LO 3/2024 del CGPJ", fecha: "2024", url: "https://www.congreso.es", referencia: "Votación de la LO 3/2024 en el Pleno del Congreso", tipoEvidencia: "Iniciativa / Votación Parlamentaria", nivelConfianza: "alta", verificada: true },
      15: { opcion: "A", fuente: "Voto favorable a la Ley Orgánica 1/2023", fecha: "2023", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2023-5364", referencia: "BOE-A-2023-5364", tipoEvidencia: "Iniciativa / Votación Parlamentaria", nivelConfianza: "alta", verificada: true },
      16: { opcion: "A", fuente: "Apoyo a la legislación catalana y estatal de igualdad LGTBI", fecha: "2023", url: null, referencia: "Defensa de la Ley 11/2014 catalana y marco de derechos civiles", tipoEvidencia: "Programa Electoral Oficial", nivelConfianza: "alta", verificada: true },
      17: { opcion: "A", fuente: "Voto a favor de la Ley 4/2023 en el Congreso", fecha: "2023", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2023-5366", referencia: "BOE-A-2023-5366", tipoEvidencia: "Iniciativa / Votación Parlamentaria", nivelConfianza: "alta", verificada: true },
      18: { opcion: "A", fuente: "Apoyo a la legislación catalana y estatal contra la violencia machista", fecha: "2023", url: null, referencia: "Ley 17/2020 de modificación de la Ley 5/2008 en Cataluña", tipoEvidencia: "Programa Electoral Oficial", nivelConfianza: "alta", verificada: true },
      19: { opcion: "C", fuente: "Acuerdos sobre decretos anticrisis (RDL 8/2023 y RDL 4/2024) y programa económico", fecha: "2024", url: "https://www.congreso.es", referencia: "Apoyo a rebajas selectivas de IVA, incentivos productivos y estabilidad presupuestaria", tipoEvidencia: "Síntesis en revisión", nivelConfianza: "media", verificada: false, nota: "Combina el apoyo a medidas anticrisis selectivas y fondos de modernización (opción C) con propuestas de desburocratización empresarial (opción A)." },
      20: { opcion: null, fuente: "Posicionamiento parlamentario heterogéneo (comisiones de investigación y reforma de Secretos Oficiales)", fecha: "2024", url: "https://www.congreso.es", referencia: "Sin asignación única para evitar distorsión metodológica", tipoEvidencia: "Síntesis en revisión", nivelConfianza: "baja", verificada: false, nota: "No se asigna una opción única porque sus prioridades combinan elementos de reforma de Secretos Oficiales (D), simplificación administrativa (A) y comisiones parlamentarias sobre 'lawfare' que no se corresponden unívocamente con una sola alternativa." }
    }
  },
  {
    id: "bng", nombre: "BNG", color: "#007BC4", comunidades: ["galicia"],
    posiciones: {
      1: { opcion: "B", fuente: "Programa Electoral BNG (Generales 2023 y Autonómicas 2024)", fecha: "2023-2024", url: null, referencia: "Tope al precio de los alquileres y ampliación del parque público gallego", tipoEvidencia: "Programa Electoral Oficial", nivelConfianza: "alta", verificada: true },
      2: { opcion: "B", fuente: "Programa Electoral BNG", fecha: "2023-2024", url: null, referencia: "Reducción de la jornada laboral hacia las 35h y subida del SMI", tipoEvidencia: "Programa Electoral Oficial", nivelConfianza: "alta", verificada: true },
      3: { opcion: "C", fuente: "Programa Electoral BNG 2024", fecha: "2024", url: null, referencia: "Rescate de concesiones y blindaje de la sanidad 100% pública en el SERGAS", tipoEvidencia: "Programa Electoral Oficial", nivelConfianza: "alta", verificada: true },
      4: { opcion: "A", fuente: "Voto a favor de la ILP de Regularización en el Congreso", fecha: "2024", url: "https://www.congreso.es", referencia: "Votación de toma en consideración de la ILP (abril 2024)", tipoEvidencia: "Iniciativa / Votación Parlamentaria", nivelConfianza: "alta", verificada: true },
      5: { opcion: "B", fuente: "Programa Electoral BNG", fecha: "2023-2024", url: null, referencia: "Reforma fiscal progresiva e impuesto a grandes patrimonios y energéticas", tipoEvidencia: "Programa Electoral Oficial", nivelConfianza: "alta", verificada: true },
      6: { opcion: "A", fuente: "Programa Electoral BNG", fecha: "2023-2024", url: null, referencia: "Reconocimiento del carácter plurinacional y concierto económico gallego", tipoEvidencia: "Programa Electoral Oficial", nivelConfianza: "alta", verificada: true },
      7: { opcion: "D", fuente: "Programa Electoral BNG 2024", fecha: "2024", url: null, referencia: "Prioridad exclusiva a la enseñanza pública gallega y supresión de conciertos", tipoEvidencia: "Programa Electoral Oficial", nivelConfianza: "alta", verificada: true },
      8: { opcion: "A", fuente: "Acuerdo de investidura y voto al RDL 2/2023", fecha: "2023", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2023-6967", referencia: "Revalorización conforme al IPC e incremento de las pensiones mínimas", tipoEvidencia: "Iniciativa / Votación Parlamentaria", nivelConfianza: "alta", verificada: true },
      9: { opcion: "A", fuente: "Programa Electoral BNG 2024", fecha: "2024", url: null, referencia: "Empresa pública gallega de energía y tarifa eléctrica propia", tipoEvidencia: "Programa Electoral Oficial", nivelConfianza: "alta", verificada: true },
      10: { opcion: "C", fuente: "Posición parlamentaria sobre desahucios y vivienda", fecha: "2023-2024", url: "https://www.congreso.es", referencia: "Garantía de alternativa habitacional previa a cualquier desahucio vulnerable", tipoEvidencia: "Iniciativa / Votación Parlamentaria", nivelConfianza: "alta", verificada: true },
      11: { opcion: "B", fuente: "Principios programáticos del BNG", fecha: "2023", url: null, referencia: "Posición histórica republicana y soberanista", tipoEvidencia: "Programa Electoral Oficial", nivelConfianza: "alta", verificada: true },
      12: { opcion: "C", fuente: "Iniciativas del BNG en el Congreso", fecha: "2023-2024", url: "https://www.congreso.es", referencia: "Posición anti-OTAN, freno al gasto militar y fin del comercio de armas con Israel", tipoEvidencia: "Iniciativa / Votación Parlamentaria", nivelConfianza: "alta", verificada: true },
      13: { opcion: "B", fuente: "Programa Electoral BNG 2024", fecha: "2024", url: null, referencia: "Red pública gratuita de escuelas infantiles (Galiña Azul) y permisos de crianza", tipoEvidencia: "Programa Electoral Oficial", nivelConfianza: "alta", verificada: true },
      14: { opcion: "C", fuente: "Voto contra la LO 3/2024 (pacto PP-PSOE del CGPJ)", fecha: "2024", url: "https://www.congreso.es", referencia: "Votación de la LO 3/2024 en el Congreso", tipoEvidencia: "Iniciativa / Votación Parlamentaria", nivelConfianza: "alta", verificada: true },
      15: { opcion: "A", fuente: "Voto a favor de la Ley Orgánica 1/2023", fecha: "2023", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2023-5364", referencia: "BOE-A-2023-5364", tipoEvidencia: "Iniciativa / Votación Parlamentaria", nivelConfianza: "alta", verificada: true },
      16: { opcion: "A", fuente: "Programa Electoral BNG", fecha: "2023-2024", url: null, referencia: "Políticas públicas de igualdad LGTBI+", tipoEvidencia: "Programa Electoral Oficial", nivelConfianza: "alta", verificada: true },
      17: { opcion: "A", fuente: "Voto a favor de la Ley 4/2023", fecha: "2023", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2023-5366", referencia: "BOE-A-2023-5366", tipoEvidencia: "Iniciativa / Votación Parlamentaria", nivelConfianza: "alta", verificada: true },
      18: { opcion: "A", fuente: "Programa Electoral BNG 2024", fecha: "2024", url: null, referencia: "Refuerzo de recursos y juzgados contra la violencia machista", tipoEvidencia: "Programa Electoral Oficial", nivelConfianza: "alta", verificada: true },
      19: { opcion: "B", fuente: "Programa Electoral BNG 2023-2024", fecha: "2023-2024", url: null, referencia: "Intervención pública en precios básicos (energía y alimentación) y refuerzo salarial", tipoEvidencia: "Programa Electoral Oficial", nivelConfianza: "alta", verificada: true },
      20: { opcion: "D", fuente: "Iniciativas parlamentarias del BNG en el Congreso", fecha: "2023-2024", url: "https://www.congreso.es", referencia: "Prohibición de puertas giratorias en empresas energéticas y derogación Ley de Secretos Oficiales", tipoEvidencia: "Iniciativa / Votación Parlamentaria", nivelConfianza: "alta", verificada: true }
    }
  },
  {
    id: "pnv", nombre: "EAJ-PNV", color: "#008000", comunidades: ["paisvasco", "navarra"],
    posiciones: {
      1: { opcion: "C", fuente: "Programa Electoral EAJ-PNV y políticas de vivienda en Euskadi", fecha: "2023-2024", url: null, referencia: "Ampliación del parque público de alquiler (Alokabide) e incentivos fiscales", tipoEvidencia: "Programa Electoral Oficial", nivelConfianza: "alta", verificada: true },
      2: { opcion: "A", fuente: "Defensa del marco vasco de relaciones laborales", fecha: "2024", url: "https://www.congreso.es", referencia: "Prevalencia de los convenios autonómicos y del diálogo social bilateral", tipoEvidencia: "Iniciativa / Votación Parlamentaria", nivelConfianza: "alta", verificada: true },
      3: { opcion: "D", fuente: "Programa Electoral EAJ-PNV 2024", fecha: "2024", url: null, referencia: "Pacto Vasco de Salud y refuerzo de la atención primaria en Osakidetza", tipoEvidencia: "Programa Electoral Oficial", nivelConfianza: "alta", verificada: true },
      4: { opcion: "B", fuente: "Pacto Social Vasco para la Migración", fecha: "2023-2024", url: null, referencia: "Acogida ordenada, formación e inserción laboral en Euskadi", tipoEvidencia: "Acuerdo Institucional / Ejecutivo", nivelConfianza: "alta", verificada: true },
      5: { opcion: "D", fuente: "Regulación tributaria de las Haciendas Forales vascas", fecha: "2023-2024", url: null, referencia: "Mantenimiento del esquema fiscal concertado con deducciones a la inversión", tipoEvidencia: "Programa Electoral Oficial", nivelConfianza: "alta", verificada: true },
      6: { opcion: "A", fuente: "Programa Electoral EAJ-PNV 2023-2024", fecha: "2023-2024", url: null, referencia: "Nuevo estatus de autogobierno bilateral y defensa del Concierto Económico", tipoEvidencia: "Programa Electoral Oficial", nivelConfianza: "alta", verificada: true },
      7: { opcion: "B", fuente: "Ley 17/2023 de Educación de la Comunidad Autónoma del País Vasco", fecha: "2023", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2024-792", referencia: "BOE-A-2024-792 (Servicio Público Vasco de Educación integrando centros públicos y concertados)", tipoEvidencia: "Ley / Norma BOE", nivelConfianza: "alta", verificada: true },
      8: { opcion: "A", fuente: "Voto a favor del RDL 2/2023 de revalorización de pensiones", fecha: "2023", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2023-6967", referencia: "Apoyo parlamentario a la revalorización según el IPC", tipoEvidencia: "Iniciativa / Votación Parlamentaria", nivelConfianza: "alta", verificada: true },
      9: { opcion: "B", fuente: "Ley 4/2024 de Transición Energética y Cambio Climático de Euskadi", fecha: "2024", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2024-4867", referencia: "BOE-A-2024-4867 (Descarbonización acompañando a la industria vasca)", tipoEvidencia: "Ley / Norma BOE", nivelConfianza: "alta", verificada: true },
      10: { opcion: "B", fuente: "Enmiendas del GP Vasco en la Ley de Eficiencia Procesal", fecha: "2024", url: "https://www.congreso.es", referencia: "Agilización de desalojos judiciales por allanamiento y usurpación con garantías para vulnerables", tipoEvidencia: "Iniciativa / Votación Parlamentaria", nivelConfianza: "alta", verificada: true },
      11: { opcion: "B", fuente: "Tradición política no monárquica e iniciativas sobre inviolabilidad", fecha: "2023-2024", url: "https://www.congreso.es", referencia: "Proposiciones de ley del GP Vasco para limitar la inviolabilidad del Rey", tipoEvidencia: "Síntesis en revisión", nivelConfianza: "media", verificada: false },
      12: { opcion: "B", fuente: "Programa Electoral EAJ-PNV (Europeas y Generales)", fecha: "2023-2024", url: null, referencia: "Federalismo europeo, apoyo a Ucrania y solución de dos Estados en Oriente Medio", tipoEvidencia: "Programa Electoral Oficial", nivelConfianza: "alta", verificada: true },
      13: { opcion: "A", fuente: "Estrategia Vasca 2030 para el reto demográfico", fecha: "2023-2024", url: null, referencia: "Ayudas directas mensuales de 200€ por hijo y deducciones fiscales familiares (junto con gratuidad Haurreskolak)", tipoEvidencia: "Síntesis en revisión", nivelConfianza: "media", verificada: false, nota: "El modelo vasco combina ayudas directas mensuales y deducciones fiscales por hijo (opción A) con la gratuidad del consorcio público Haurreskolak 0-2 años (opción B)." },
      14: { opcion: "B", fuente: "Voto a favor de la Ley Orgánica 3/2024 de renovación del CGPJ", fecha: "2024", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2024-15938", referencia: "Votación de la LO 3/2024 en el Congreso", tipoEvidencia: "Iniciativa / Votación Parlamentaria", nivelConfianza: "alta", verificada: true },
      15: { opcion: "A", fuente: "Voto a favor de la Ley Orgánica 1/2023", fecha: "2023", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2023-5364", referencia: "BOE-A-2023-5364", tipoEvidencia: "Iniciativa / Votación Parlamentaria", nivelConfianza: "alta", verificada: true },
      16: { opcion: "A", fuente: "Apoyo a la legislación vasca y estatal de igualdad LGTBI", fecha: "2023-2024", url: null, referencia: "Respaldo a los derechos civiles y políticas contra la discriminación", tipoEvidencia: "Programa Electoral Oficial", nivelConfianza: "alta", verificada: true },
      17: { opcion: "A", fuente: "Ley 4/2024 trans vasca y voto a favor de la Ley 4/2023 estatal", fecha: "2023-2024", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2024-5222", referencia: "BOE-A-2024-5222 (Ley 4/2024 de no discriminación por identidad de género en Euskadi)", tipoEvidencia: "Ley / Norma BOE", nivelConfianza: "alta", verificada: true },
      18: { opcion: "A", fuente: "Ley 1/2022 para la Igualdad de Mujeres y Hombres en Euskadi", fecha: "2022-2024", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2022-4982", referencia: "BOE-A-2022-4982", tipoEvidencia: "Ley / Norma BOE", nivelConfianza: "alta", verificada: true },
      19: { opcion: "C", fuente: "Programa Electoral EAJ-PNV 2023-2024", fecha: "2023-2024", url: null, referencia: "Política industrial, innovación, ayudas selectivas y estabilidad presupuestaria", tipoEvidencia: "Programa Electoral Oficial", nivelConfianza: "alta", verificada: true },
      20: { opcion: "D", fuente: "Proposición de Ley del GP Vasco para reformar la Ley de Secretos Oficiales de 1968", fecha: "2023-2024", url: "https://www.congreso.es", referencia: "Iniciativa legislativa insignia de EAJ-PNV en el Congreso sobre secretos oficiales y control del Ejecutivo", tipoEvidencia: "Iniciativa / Votación Parlamentaria", nivelConfianza: "alta", verificada: true }
    }
  },
  {
    id: "bildu", nombre: "EH Bildu", color: "#8BA300", comunidades: ["paisvasco", "navarra"],
    posiciones: {
      1: { opcion: "B", fuente: "Acuerdo y voto favorable a la Ley 12/2023 por el derecho a la vivienda", fecha: "2023", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2023-12203", referencia: "BOE-A-2023-12203 (Tope de actualización de rentas y zonas tensionadas)", tipoEvidencia: "Ley / Norma BOE", nivelConfianza: "alta", verificada: true },
      2: { opcion: "B", fuente: "Programa Electoral EH Bildu 2023-2024", fecha: "2023-2024", url: null, referencia: "Reducción legal de jornada hacia las 35h y subida del SMI", tipoEvidencia: "Programa Electoral Oficial", nivelConfianza: "alta", verificada: true },
      3: { opcion: "C", fuente: "Programa Electoral EH Bildu 2024", fecha: "2024", url: null, referencia: "Desprivatización y reversión de servicios externalizados en Osakidetza", tipoEvidencia: "Programa Electoral Oficial", nivelConfianza: "alta", verificada: true },
      4: { opcion: "A", fuente: "Voto a favor de la ILP de Regularización en el Congreso", fecha: "2024", url: "https://www.congreso.es", referencia: "Votación de toma en consideración de la ILP (abril 2024)", tipoEvidencia: "Iniciativa / Votación Parlamentaria", nivelConfianza: "alta", verificada: true },
      5: { opcion: "B", fuente: "Propuestas de reforma fiscal en Juntas Generales y Navarra", fecha: "2023-2024", url: null, referencia: "Incremento de tipos a rentas del capital, sociedades y grandes patrimonios", tipoEvidencia: "Programa Electoral Oficial", nivelConfianza: "alta", verificada: true },
      6: { opcion: "A", fuente: "Programa Electoral EH Bildu", fecha: "2023-2024", url: null, referencia: "Modelo soberanista, plurinacional y derecho de autodeterminación", tipoEvidencia: "Programa Electoral Oficial", nivelConfianza: "alta", verificada: true },
      7: { opcion: "D", fuente: "Voto contra la Ley 17/2023 Vasca de Educación", fecha: "2023", url: null, referencia: "Rechazo a la equiparación de conciertos sin publificación", tipoEvidencia: "Síntesis en revisión", nivelConfianza: "media", verificada: false, nota: "Defiende un sistema educativo público soberano proponiendo la confluencia/publificación progresiva de ikastolas y centros." },
      8: { opcion: "A", fuente: "Acuerdos presupuestarios y voto al RDL 2/2023", fecha: "2023", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2023-6967", referencia: "Incremento del 15% en pensiones no contributivas y revalorización IPC", tipoEvidencia: "Ley / Norma BOE", nivelConfianza: "alta", verificada: true },
      9: { opcion: "A", fuente: "Programa Electoral EH Bildu 2024", fecha: "2024", url: null, referencia: "Control público del sector energético y transición renovable planificada", tipoEvidencia: "Programa Electoral Oficial", nivelConfianza: "alta", verificada: true },
      10: { opcion: "C", fuente: "Acuerdos para la prórroga de la suspensión de desahucios vulnerables", fecha: "2023-2024", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2024-12944", referencia: "Prórroga del escudo social antidesahucios en los Reales Decretos-leyes anticrisis", tipoEvidencia: "Ley / Norma BOE", nivelConfianza: "alta", verificada: true },
      11: { opcion: "B", fuente: "Ideario independentista y republicano de EH Bildu", fecha: "2023", url: null, referencia: "Programa político republicano", tipoEvidencia: "Programa Electoral Oficial", nivelConfianza: "alta", verificada: true },
      12: { opcion: "C", fuente: "Iniciativas en el Congreso sobre la OTAN y Palestina", fecha: "2023-2024", url: "https://www.congreso.es", referencia: "Rechazo al aumento del gasto militar y exigencia de fin del comercio de armas con Israel", tipoEvidencia: "Iniciativa / Votación Parlamentaria", nivelConfianza: "alta", verificada: true },
      13: { opcion: "B", fuente: "Programa Electoral EH Bildu 2024", fecha: "2024", url: null, referencia: "Sistema público universal y gratuito de cuidados y escuelas 0-3", tipoEvidencia: "Programa Electoral Oficial", nivelConfianza: "alta", verificada: true },
      14: { opcion: "C", fuente: "Voto contra la LO 3/2024 de renovación del CGPJ", fecha: "2024", url: "https://www.congreso.es", referencia: "Votación de la LO 3/2024 en el Pleno del Congreso", tipoEvidencia: "Iniciativa / Votación Parlamentaria", nivelConfianza: "alta", verificada: true },
      15: { opcion: "A", fuente: "Voto a favor de la Ley Orgánica 1/2023", fecha: "2023", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2023-5364", referencia: "BOE-A-2023-5364", tipoEvidencia: "Iniciativa / Votación Parlamentaria", nivelConfianza: "alta", verificada: true },
      16: { opcion: "A", fuente: "Programa Electoral EH Bildu", fecha: "2023-2024", url: null, referencia: "Defensa de los derechos LGTBI+", tipoEvidencia: "Programa Electoral Oficial", nivelConfianza: "alta", verificada: true },
      17: { opcion: "A", fuente: "Voto a favor de la Ley 4/2023 estatal y Ley 4/2024 vasca", fecha: "2023-2024", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2023-5366", referencia: "BOE-A-2023-5366 y BOE-A-2024-5222", tipoEvidencia: "Ley / Norma BOE", nivelConfianza: "alta", verificada: true },
      18: { opcion: "A", fuente: "Programa Electoral EH Bildu", fecha: "2023-2024", url: null, referencia: "Refuerzo de políticas públicas feministas y contra la violencia machista", tipoEvidencia: "Programa Electoral Oficial", nivelConfianza: "alta", verificada: true },
      19: { opcion: "B", fuente: "Acuerdos del escudo social y Programa Electoral EH Bildu", fecha: "2023-2024", url: null, referencia: "Tope a precios básicos, refuerzo de pensiones y prestaciones e intervención pública", tipoEvidencia: "Programa Electoral Oficial", nivelConfianza: "alta", verificada: true },
      20: { opcion: "D", fuente: "Iniciativas en el Congreso sobre Secretos Oficiales y puertas giratorias", fecha: "2023-2024", url: "https://www.congreso.es", referencia: "Exigencia de derogación de la Ley de Secretos Oficiales de 1968 e incompatibilidades", tipoEvidencia: "Iniciativa / Votación Parlamentaria", nivelConfianza: "alta", verificada: true }
    }
  },
  {
    id: "upn", nombre: "UPN", color: "#00599C", comunidades: ["navarra"],
    posiciones: {
      1: { opcion: "A", fuente: "Programa Electoral UPN 2023", fecha: "2023", url: null, referencia: "Fomento de la construcción, avales para jóvenes y seguridad jurídica a propietarios", tipoEvidencia: "Programa Electoral Oficial", nivelConfianza: "alta", verificada: true },
      2: { opcion: "A", fuente: "Posición en el Congreso sobre negociación colectiva", fecha: "2024", url: "https://www.congreso.es", referencia: "Defensa del acuerdo entre patronal y sindicatos sin imposiciones legales", tipoEvidencia: "Síntesis en revisión", nivelConfianza: "media", verificada: false },
      3: { opcion: "B", fuente: "Programa Electoral UPN 2023 (Sanidad en Navarra)", fecha: "2023", url: null, referencia: "Plan de choque contra las listas de espera utilizando todos los recursos disponibles", tipoEvidencia: "Programa Electoral Oficial", nivelConfianza: "alta", verificada: true },
      4: { opcion: "C", fuente: "Votaciones de UPN en el Congreso sobre control migratorio", fecha: "2023-2024", url: "https://www.congreso.es", referencia: "Voto en contra de la ILP de regularización masiva y defensa de migración ordenada", tipoEvidencia: "Iniciativa / Votación Parlamentaria", nivelConfianza: "alta", verificada: true },
      5: { opcion: "A", fuente: "Propuestas de reforma fiscal de UPN en el Parlamento de Navarra", fecha: "2023-2024", url: null, referencia: "Deflactación del IRPF y alivio fiscal a familias y empresas en Navarra", tipoEvidencia: "Programa Electoral Oficial", nivelConfianza: "alta", verificada: true },
      6: { opcion: "D", fuente: "Estatutos y Programa Electoral UPN", fecha: "2023", url: null, referencia: "Defensa de la identidad foral de Navarra (LORAFNA) dentro de la Constitución", tipoEvidencia: "Programa Electoral Oficial", nivelConfianza: "alta", verificada: true },
      7: { opcion: "B", fuente: "Programa Electoral UPN 2023", fecha: "2023", url: null, referencia: "Libertad de elección de centro y apoyo a la red pública y concertada en Navarra", tipoEvidencia: "Programa Electoral Oficial", nivelConfianza: "alta", verificada: true },
      8: { opcion: "B", fuente: "Posicionamiento en debates sobre sostenibilidad de las pensiones", fecha: "2023", url: "https://www.congreso.es", referencia: "Sostenibilidad vinculada a la creación de empleo", tipoEvidencia: "Síntesis en revisión", nivelConfianza: "media", verificada: false },
      9: { opcion: "C", fuente: "Programa Electoral UPN 2023", fecha: "2023", url: null, referencia: "Transición energética compatible con la competitividad industrial y agraria", tipoEvidencia: "Síntesis en revisión", nivelConfianza: "media", verificada: false },
      10: { opcion: "A", fuente: "Voto favorable a proposiciones de ley de desalojo rápido", fecha: "2024", url: "https://www.congreso.es", referencia: "Respaldo parlamentario al desalojo exprés en 24-48 horas", tipoEvidencia: "Iniciativa / Votación Parlamentaria", nivelConfianza: "alta", verificada: true },
      11: { opcion: "A", fuente: "Defensa estatutaria del marco constitucional y la Corona", fecha: "2023", url: null, referencia: "Principios estatutarios de UPN", tipoEvidencia: "Programa Electoral Oficial", nivelConfianza: "alta", verificada: true },
      12: { opcion: "A", fuente: "Votaciones en el Congreso en política exterior y defensa", fecha: "2023-2024", url: "https://www.congreso.es", referencia: "Compromiso con la OTAN, la UE y Ucrania", tipoEvidencia: "Iniciativa / Votación Parlamentaria", nivelConfianza: "alta", verificada: true },
      13: { opcion: "A", fuente: "Programa Electoral UPN 2023", fecha: "2023", url: null, referencia: "Deducciones fiscales por hijo y apoyo a las familias en Navarra", tipoEvidencia: "Programa Electoral Oficial", nivelConfianza: "alta", verificada: true },
      14: { opcion: "A", fuente: "Defensa de la elección de vocales judiciales por los jueces", fecha: "2023-2024", url: "https://www.congreso.es", referencia: "Posicionamiento sobre independencia judicial en el Congreso", tipoEvidencia: "Iniciativa / Votación Parlamentaria", nivelConfianza: "alta", verificada: true },
      15: { opcion: "B", fuente: "Voto en contra de la Ley Orgánica 1/2023", fecha: "2023", url: "https://www.congreso.es", referencia: "Defensa del consentimiento paterno en menores y la objeción de conciencia médica", tipoEvidencia: "Iniciativa / Votación Parlamentaria", nivelConfianza: "alta", verificada: true },
      16: { opcion: "B", fuente: "Respeto al marco legal vigente de matrimonio civil", fecha: "2023", url: null, referencia: "Mantenimiento de la legislación civil actual", tipoEvidencia: "Síntesis en revisión", nivelConfianza: "media", verificada: false },
      17: { opcion: "B", fuente: "Voto en contra de la Ley 4/2023 en el Congreso", fecha: "2023", url: "https://www.congreso.es", referencia: "Rechazo a la autodeterminación registral sin informes en menores", tipoEvidencia: "Iniciativa / Votación Parlamentaria", nivelConfianza: "alta", verificada: true },
      18: { opcion: "B", fuente: "Apoyo al Pacto de Estado contra la Violencia de Género", fecha: "2023-2025", url: "https://www.congreso.es", referencia: "Respaldo al Pacto de Estado y a la reforma técnica de la LO 4/2023", tipoEvidencia: "Iniciativa / Votación Parlamentaria", nivelConfianza: "alta", verificada: true },
      19: { opcion: "A", fuente: "Programa Electoral UPN 2023", fecha: "2023", url: null, referencia: "Eliminación de trabas burocráticas, incentivo a la inversión privada y alivio a autónomos", tipoEvidencia: "Programa Electoral Oficial", nivelConfianza: "alta", verificada: true },
      20: { opcion: "B", fuente: "Posicionamiento parlamentario sobre malversación e indultos", fecha: "2023-2024", url: "https://www.congreso.es", referencia: "Apoyo al endurecimiento de penas por malversación y prohibición de indultos por corrupción", tipoEvidencia: "Síntesis en revisión", nivelConfianza: "media", verificada: false }
    }
  },
  {
    id: "cc", nombre: "Coalición Canaria", color: "#D99B00", comunidades: ["canarias"],
    posiciones: {
      1: { opcion: "C", fuente: "Decreto-ley 1/2024 de medidas urgentes en materia de vivienda en Canarias", fecha: "2024", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2024-9142", referencia: "BOE-A-2024-9142 (Incentivos a la vivienda protegida y parque público en Canarias)", tipoEvidencia: "Ley / Norma BOE", nivelConfianza: "alta", verificada: true },
      2: { opcion: "A", fuente: "Posicionamiento sobre concertación social y pymes en Canarias", fecha: "2024", url: null, referencia: "Defensa de la negociación colectiva atendiendo a las especificidades del tejido empresarial canario", tipoEvidencia: "Síntesis en revisión", nivelConfianza: "media", verificada: false },
      3: { opcion: "B", fuente: "Acuerdo de gobierno en Canarias (Servicio Canario de la Salud)", fecha: "2023-2024", url: null, referencia: "Refuerzo de recursos del SCS manteniendo conciertos para reducir listas de espera", tipoEvidencia: "Acuerdo Institucional / Ejecutivo", nivelConfianza: "alta", verificada: true },
      4: { opcion: "B", fuente: "Pacto Canario por la Inmigración y propuesta de reforma de la Ley de Extranjería", fecha: "2024", url: "https://www.congreso.es", referencia: "Corresponsabilidad estatal en la acogida de menores y cooperación con países de origen", tipoEvidencia: "Acuerdo Institucional / Ejecutivo", nivelConfianza: "alta", verificada: true },
      5: { opcion: "A", fuente: "Decreto-ley 5/2023 de bonificación del Impuesto de Sucesiones en Canarias y defensa del REF", fecha: "2023", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2023-22015", referencia: "BOE-A-2023-22015 (Bonificación del 99,9% en Sucesiones y Donaciones en Canarias)", tipoEvidencia: "Ley / Norma BOE", nivelConfianza: "alta", verificada: true },
      6: { opcion: "A", fuente: "Agenda Canaria y defensa del Régimen Económico y Fiscal (REF)", fecha: "2023-2024", url: null, referencia: "Defensa del fuero canario y estatuto de región ultraperiférica", tipoEvidencia: "Acuerdo Institucional / Ejecutivo", nivelConfianza: "alta", verificada: true },
      7: { opcion: "C", fuente: "Programa Electoral de Coalición Canaria en Educación", fecha: "2023", url: null, referencia: "Coexistencia de redes con refuerzo de la educación pública en las islas", tipoEvidencia: "Síntesis en revisión", nivelConfianza: "media", verificada: false },
      8: { opcion: "A", fuente: "Voto a favor de la revalorización de las pensiones conforme al IPC", fecha: "2023", url: "https://www.congreso.es", referencia: "Votaciones en el Congreso en defensa del poder adquisitivo de los pensionistas", tipoEvidencia: "Iniciativa / Votación Parlamentaria", nivelConfianza: "alta", verificada: true },
      9: { opcion: "B", fuente: "Ley 6/2022 de Cambio Climático y Transición Energética de Canarias", fecha: "2022-2024", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2023-1978", referencia: "BOE-A-2023-1978 (Despliegue de renovables en los sistemas eléctricos insulares)", tipoEvidencia: "Ley / Norma BOE", nivelConfianza: "alta", verificada: true },
      10: { opcion: "B", fuente: "Apoyo parlamentario a medidas de agilización judicial con garantías", fecha: "2024", url: "https://www.congreso.es", referencia: "Posición en el Congreso sobre agilización de desalojos protegiendo a familias vulnerables", tipoEvidencia: "Síntesis en revisión", nivelConfianza: "media", verificada: false },
      11: { opcion: "A", fuente: "Respeto al marco constitucional de 1978", fecha: "2023", url: null, referencia: "Posicionamiento institucional de Coalición Canaria", tipoEvidencia: "Programa Electoral Oficial", nivelConfianza: "alta", verificada: true },
      12: { opcion: "B", fuente: "Posicionamiento europeísta y multilateral en el Congreso", fecha: "2024", url: "https://www.congreso.es", referencia: "Debates de política exterior y europea en el Congreso", tipoEvidencia: "Síntesis en revisión", nivelConfianza: "media", verificada: false },
      13: { opcion: "B", fuente: "Plan de impulso de plazas públicas de educación de 0 a 3 años en Canarias", fecha: "2023-2024", url: null, referencia: "Ampliación de aulas de primer ciclo de educación infantil en Canarias", tipoEvidencia: "Acuerdo Institucional / Ejecutivo", nivelConfianza: "alta", verificada: true },
      14: { opcion: "B", fuente: "Voto a favor de la Ley Orgánica 3/2024 de renovación del CGPJ", fecha: "2024", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2024-15938", referencia: "Votación de la LO 3/2024 en el Pleno del Congreso", tipoEvidencia: "Iniciativa / Votación Parlamentaria", nivelConfianza: "alta", verificada: true },
      15: { opcion: "A", fuente: "Respeto a la legislación estatal vigente de plazos", fecha: "2023", url: null, referencia: "Mantenimiento del marco legal vigente", tipoEvidencia: "Síntesis en revisión", nivelConfianza: "media", verificada: false },
      16: { opcion: "A", fuente: "Apoyo a las leyes canarias de igualdad y no discriminación", fecha: "2023", url: null, referencia: "Legislación autonómica canaria de igualdad LGTBI", tipoEvidencia: "Programa Electoral Oficial", nivelConfianza: "alta", verificada: true },
      17: { opcion: "A", fuente: "Ley 2/2021 de igualdad social y no discriminación por razón de identidad de género en Canarias", fecha: "2021-2023", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2021-10588", referencia: "BOE-A-2021-10588 (Aprobada por unanimidad en el Parlamento de Canarias)", tipoEvidencia: "Ley / Norma BOE", nivelConfianza: "alta", verificada: true },
      18: { opcion: "A", fuente: "Acuerdos del Parlamento de Canarias y Pacto de Estado", fecha: "2023-2024", url: null, referencia: "Refuerzo del Instituto Canario de Igualdad", tipoEvidencia: "Acuerdo Institucional / Ejecutivo", nivelConfianza: "alta", verificada: true },
      19: { opcion: "C", fuente: "Agenda Canaria (acuerdo de investidura) y apoyo a decretos anticrisis", fecha: "2023-2024", url: "https://www.congreso.es", referencia: "Bonificaciones al transporte y coste de vida en Canarias, apoyo a sectores estratégicos y estabilidad presupuestaria", tipoEvidencia: "Acuerdo Institucional / Ejecutivo", nivelConfianza: "alta", verificada: true },
      20: { opcion: null, fuente: "Posición abierta entre medidas de transparencia administrativa (A) y control penal (B)", fecha: "2024", url: null, referencia: "Sin asignación única por evidencia insuficiente de prioridad entre las 4 opciones", tipoEvidencia: "Síntesis en revisión", nivelConfianza: "baja", verificada: false, nota: "No se asigna una opción única porque Coalición Canaria ha apoyado tanto reformas de transparencia en contratación (opción A) como medidas de control institucional (opción B) sin fijar una prioridad excluyente entre ellas." }
    }
  }
];
