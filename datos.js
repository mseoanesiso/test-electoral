// ============================================================
// DATOS DEL TEST - Elecciones Generales 2026
// ============================================================

const ELECCIONES = {
  nombre: "Elecciones generales de España",
  fecha: "29 de noviembre de 2026",
  actualizacion: "14/10/2026",
  datosDeEjemplo: false
};

const PREGUNTAS = [
  {
    id: 1, tema: "Vivienda", pesoBase: 3,
    texto: "¿Qué política principal debería aplicarse para solucionar el problema del acceso a la vivienda?",
    contexto: "El alquiler ha subido drásticamente. El debate está entre intervenir el mercado (forzando topes a los precios para proteger al inquilino) o liberalizarlo (construir más y desregular para que aumente la oferta y bajen los precios de forma natural).",
    opciones: [
      { id: "A", texto: "Fomentar la construcción privada, liberalizar suelo y dar avales públicos a los jóvenes para la compra." },
      { id: "B", texto: "Intervenir el mercado limitando por ley el precio de los alquileres y prohibir la compra a fondos especulativos." },
      { id: "C", texto: "Aumentar el parque público de alquiler, dar bonificaciones fiscales a propietarios y aplicar la actual Ley de Vivienda." },
      { id: "D", texto: "Desregular completamente el mercado, derogar la Ley de Vivienda y proteger la propiedad frente a okupas." }
    ]
  },
  {
    id: 2, tema: "Empleo", pesoBase: 3,
    texto: "¿Qué medida tomarías respecto a la jornada laboral y los salarios?",
    contexto: "Se debate si el Estado debe obligar por ley a trabajar menos horas cobrando lo mismo para mejorar la calidad de vida, o si eso hundiría a las empresas y es mejor que cada sector lo negocie libremente.",
    opciones: [
      { id: "A", texto: "Que la jornada y salarios se decidan en negociación colectiva entre empresas y trabajadores, sin imposiciones por ley." },
      { id: "B", texto: "Reducir la jornada laboral por ley a 37,5 horas semanales sin pérdida salarial y seguir subiendo el SMI." },
      { id: "C", texto: "Bajar cotizaciones e impuestos al trabajo para fomentar la contratación y flexibilizar el mercado laboral." }
    ]
  },
  {
    id: 3, tema: "Sanidad", pesoBase: 3,
    texto: "¿Cómo debe gestionarse y financiarse la Sanidad Pública?",
    contexto: "Ante las listas de espera, algunos proponen blindar la sanidad para que sea 100% pública y sin ánimo de lucro, mientras otros defienden derivar pacientes a la sanidad privada mediante conciertos para agilizar la atención.",
    opciones: [
      { id: "A", texto: "Centralizar las competencias sanitarias en el Estado para que sea igual en todo el país." },
      { id: "B", texto: "Aumentar la financiación autonómica pero manteniendo la posibilidad de colaboración público-privada (conciertos)." },
      { id: "C", texto: "Blindar la gestión 100% pública por ley y prohibir la externalización de servicios a empresas privadas." },
      { id: "D", texto: "Aumentar fondos, reforzar la atención primaria y reducir listas de espera dentro del actual modelo autonómico." }
    ]
  },
  {
    id: 4, tema: "Inmigración", pesoBase: 3,
    texto: "¿Cuál debería ser la principal política migratoria del país?",
    contexto: "Con el aumento de llegadas, el debate oscila entre facilitar la integración de quienes ya trabajan aquí por humanidad y necesidad económica, frente a endurecer las fronteras y expulsiones por motivos de seguridad.",
    opciones: [
      { id: "A", texto: "Promover la regularización de inmigrantes que ya trabajan aquí y facilitar vías legales y seguras." },
      { id: "B", texto: "Fomentar una inmigración circular vinculada estrictamente al mercado laboral y a las necesidades de las empresas." },
      { id: "C", texto: "Control estricto de fronteras, deportación de quienes cometan delitos y vincular inmigración a un contrato de origen." },
      { id: "D", texto: "Bloqueo naval militar, deportaciones masivas de irregulares y cierre de centros de menores extranjeros." }
    ]
  },
  {
    id: 5, tema: "Impuestos", pesoBase: 2,
    texto: "¿Qué reforma fiscal necesita España?",
    contexto: "Se discute si hay que bajar los impuestos en general para que la gente tenga más dinero en el bolsillo, o subirlos a las grandes fortunas para poder financiar mejores servicios públicos (sanidad, educación).",
    opciones: [
      { id: "A", texto: "Bajada generalizada, bonificando al máximo el IRPF y eliminando Patrimonio y Sucesiones en todo el país." },
      { id: "B", texto: "Reforma integral para gravar mucho más a las grandes fortunas, rentas del capital y beneficios extraordinarios." },
      { id: "C", texto: "Rebaja drástica de impuestos con la creación de un IRPF único para todas las rentas." },
      { id: "D", texto: "Mantener la presión fiscal actual, con ajustes selectivos a rentas altas y grandes empresas para sostener lo público." }
    ]
  },
  {
    id: 6, tema: "Modelo Territorial", pesoBase: 2,
    texto: "¿Cómo debe organizarse el Estado autonómico?",
    contexto: "El grado de autogobierno de regiones como Cataluña o País Vasco divide la política entre quienes piden un modelo federal plurinacional, los que defienden el modelo actual y quienes quieren recentralizar el Estado.",
    opciones: [
      { id: "A", texto: "Avanzar hacia un modelo plurinacional o federal que reconozca singularidades y permita mayor autogobierno." },
      { id: "B", texto: "Eliminar las comunidades autónomas y devolver todas las competencias (educación, sanidad, seguridad) al Estado." },
      { id: "C", texto: "Mantener el sistema autonómico pero garantizando una estricta igualdad multilateral en la financiación." },
      { id: "D", texto: "Mantener el actual modelo, combatiendo los privilegios separatistas pero respetando el autogobierno." }
    ]
  },
  {
    id: 7, tema: "Educación", pesoBase: 2,
    texto: "¿Qué peso deben tener la escuela pública y la concertada?",
    contexto: "La escuela concertada (privada pero pagada con fondos públicos) genera división: unos creen que garantiza la libertad de elección de los padres, y otros creen que segrega y quita recursos a la escuela 100% pública.",
    opciones: [
      { id: "A", texto: "Defender la libertad de elección total, implantando el pin parental y el cheque escolar." },
      { id: "B", texto: "Defender la educación concertada al mismo nivel que la pública, asegurando la libertad de elección de los padres." },
      { id: "C", texto: "Mantener la coexistencia, pero garantizando que la educación pública sea el eje vertebrador del sistema." },
      { id: "D", texto: "Convertir la escuela pública en la única financiada por el Estado, retirando paulatinamente los conciertos." }
    ]
  },
  {
    id: 8, tema: "Pensiones", pesoBase: 2,
    texto: "¿Cómo garantizar la sostenibilidad de las pensiones?",
    contexto: "Con una población envejecida, pagar las pensiones es cada vez más caro. Las soluciones varían entre recortar gastos o fomentar planes privados, frente a blindar su subida inyectando más dinero de los impuestos.",
    opciones: [
      { id: "A", texto: "Mantener la revalorización por ley según el IPC e inyectar fondos públicos si es necesario." },
      { id: "B", texto: "Fomentar sistemas privados de capitalización y plantear ajustes futuros para evitar la quiebra del sistema." },
      { id: "C", texto: "Transitar hacia un modelo mixto de capitalización privada y recortar drásticamente el gasto público." }
    ]
  },
  {
    id: 9, tema: "Medio Ambiente y Energía", pesoBase: 1,
    texto: "¿Qué medidas energéticas deben priorizarse?",
    contexto: "La crisis climática choca con la economía. Unos piden acelerar el cierre de las nucleares e ir al 100% renovable ya, mientras otros piden frenar porque las políticas verdes encarecen la industria.",
    opciones: [
      { id: "A", texto: "Crear una empresa pública de energía y acelerar al máximo la transición 100% renovable." },
      { id: "B", texto: "Avanzar hacia las energías renovables de forma ordenada, apoyando económicamente a la industria para adaptarse." },
      { id: "C", texto: "Alargar la vida útil de las centrales nucleares y ralentizar la transición verde si perjudica a la industria." },
      { id: "D", texto: "Abandonar la Agenda 2030, priorizando la soberanía energética sin importar la fuente." }
    ]
  },
  {
    id: 10, tema: "Okupación y Seguridad", pesoBase: 2,
    texto: "¿Cómo debe tratarse el problema de la okupación de viviendas?",
    contexto: "El enfoque varía entre quienes lo ven principalmente como un problema grave de seguridad (exigiendo penas de cárcel y desalojos inmediatos) y quienes lo enmarcan en la crisis habitacional y la pobreza.",
    opciones: [
      { id: "A", texto: "Garantizar desalojos exprés en menos de 24 horas y endurecer las penas de cárcel por usurpación." },
      { id: "B", texto: "Agilizar los procesos judiciales de desalojo respetando las garantías legales de personas vulnerables." },
      { id: "C", texto: "Tratarlo como un problema de exclusión social: paralizar desahucios sin alternativa habitacional pública." }
    ]
  },
  {
    id: 11, tema: "Modelo de Jefatura del Estado", pesoBase: 1,
    texto: "¿Qué modelo de Jefatura del Estado prefieres?",
    contexto: "El histórico debate sobre si el Jefe del Estado debe ser el Rey (cargo hereditario) o un Presidente de la República (elegido democráticamente).",
    opciones: [
      { id: "A", texto: "Mantener la Monarquía Parlamentaria, figura clave de estabilidad institucional." },
      { id: "B", texto: "Avanzar hacia una República mediante referéndum." }
    ]
  },
  {
    id: 12, tema: "Política Exterior", pesoBase: 1,
    texto: "¿Cuál debería ser la posición internacional de España en conflictos globales?",
    contexto: "La postura internacional varía entre el alineamiento estricto con la OTAN y EEUU, o posiciones más independientes centradas en vías diplomáticas, derechos humanos y freno a la venta de armas.",
    opciones: [
      { id: "A", texto: "Alineamiento prioritario con la OTAN y apoyo firme a Ucrania y los aliados occidentales." },
      { id: "B", texto: "Apoyo a Ucrania, compromiso europeísta firme y reconocimiento activo del Estado de Palestina." },
      { id: "C", texto: "Ruptura de relaciones con Israel y fin del envío de armas a Ucrania, apostando por vías diplomáticas puras." }
    ]
  },
  {
    id: 13, tema: "Conciliación y Natalidad", pesoBase: 2,
    texto: "¿Cómo debería apoyarse a las familias y la natalidad?",
    contexto: "Ante la baja natalidad, las soluciones oscilan entre dar cheques de dinero directo a las familias numerosas o crear servicios públicos universales (como guarderías gratuitas) para facilitar tener hijos.",
    opciones: [
      { id: "A", texto: "Ayudas económicas directas por hijo, apoyo a familias numerosas y fomentar la perspectiva de familia." },
      { id: "B", texto: "Universalizar la educación pública 0-3 años gratuita y seguir ampliando permisos de paternidad/maternidad." }
    ]
  },
  {
    id: 14, tema: "Poder Judicial", pesoBase: 1,
    texto: "¿Cómo deberían elegirse los vocales del Consejo General del Poder Judicial (CGPJ)?",
    contexto: "El órgano que gobierna a los jueces lo elige actualmente el Congreso y el Senado. Algunos partidos piden que lo elijan los propios jueces para evitar control político, otros prefieren mantener la elección democrática.",
    opciones: [
      { id: "A", texto: "Que la mayoría de los vocales sean elegidos directamente por los propios jueces, sin intervención política." },
      { id: "B", texto: "Mantener el sistema de elección parlamentaria que requiere consensos amplios (3/5 partes de las cámaras)." },
      { id: "C", texto: "Modificar las mayorías para renovarlo sin bloqueos o democratizar el acceso a la carrera judicial." }
    ]
  },
  {
    id: 15, tema: "Aborto", pesoBase: 3,
    texto: "¿Cómo debe regularse la interrupción voluntaria del embarazo?",
    contexto: "El debate gira en torno a los plazos, el acceso en hospitales públicos, la objeción de conciencia de los médicos y si las menores de 16 y 17 años necesitan permiso paterno para decidir.",
    opciones: [
      { id: "A", texto: "Garantizar el aborto en la sanidad pública y permitir que las menores decidan sin permiso paterno." },
      { id: "B", texto: "Mantener el derecho al aborto, pero exigiendo consentimiento paterno para menores y protegiendo la objeción médica." },
      { id: "C", texto: "Defender la vida desde la concepción, derogar la ley actual y ofrecer alternativas y ayudas a las mujeres embarazadas." }
    ]
  },
  {
    id: 16, tema: "Matrimonio Igualitario", pesoBase: 2,
    texto: "¿Qué estatus legal deben tener las parejas del mismo sexo?",
    contexto: "Aunque el matrimonio igualitario se aprobó en 2005, el debate persiste sobre si debe mantenerse con esa denominación (y derechos de adopción) o sustituirse por uniones civiles.",
    opciones: [
      { id: "A", texto: "Apoyo total al matrimonio igualitario, promoviendo activamente la diversidad en la educación y las instituciones." },
      { id: "B", texto: "Respetar la ley actual de matrimonio igualitario, pero evitando el adoctrinamiento ideológico en los colegios." },
      { id: "C", texto: "Sustituir el término matrimonio por uniones civiles para parejas del mismo sexo y proteger la familia tradicional." }
    ]
  },
  {
    id: 17, tema: "Ley Trans", pesoBase: 3,
    texto: "¿Cómo debe enfocarse legalmente la transexualidad y el cambio de género?",
    contexto: "La actual ley permite la 'autodeterminación de género' (cambiar el sexo en el DNI sin informes médicos). El debate está en si esto es un avance en derechos o si desprotege a mujeres y menores.",
    opciones: [
      { id: "A", texto: "Mantener la autodeterminación de género y garantizar el acceso a tratamientos afirmativos desde la sanidad pública." },
      { id: "B", texto: "Reformar la ley para exigir informes médicos o psicológicos, especialmente para proteger a los menores de edad." },
      { id: "C", texto: "Derogar la Ley Trans, eliminar la autodeterminación de género y prohibir intervenciones médicas de transición en menores." }
    ]
  },
  {
    id: 18, tema: "Violencia de Género", pesoBase: 3,
    texto: "¿Qué enfoque penal requiere la violencia contra las mujeres?",
    contexto: "Se discute si la violencia machista requiere leyes y juzgados específicos (por ser un problema estructural) o si las leyes actuales son asimétricas y deberían tratar toda violencia doméstica por igual.",
    opciones: [
      { id: "A", texto: "Ampliar la Ley de Violencia de Género y aumentar los recursos públicos para proteger a las víctimas." },
      { id: "B", texto: "Mantener el Pacto de Estado y la ley actual, centrándose en la protección penal sin polarización ideológica." },
      { id: "C", texto: "Derogar la ley actual (por ser asimétrica) y sustituirla por una Ley de Violencia Intrafamiliar que trate a todos igual." }
    ]
  }
];

const PARTIDOS = [
  {
    id: "psoe", nombre: "PSOE", color: "#E01021", comunidades: ["todas"],
    posiciones: {
      1: { opcion: "C", fuente: "Ley de Vivienda / Programa 2023", fecha: "2023" },
      2: { opcion: "B", fuente: "Acuerdo de coalición 2023", fecha: "2023" },
      3: { opcion: "D", fuente: "Programa electoral 2023", fecha: "2023" },
      4: { opcion: "B", fuente: "Políticas Migratorias recientes", fecha: "2026" },
      5: { opcion: "D", fuente: "Programa 2023", fecha: "2023" },
      6: { opcion: "C", fuente: "Declaraciones públicas", fecha: "2026" },
      7: { opcion: "C", fuente: "LOMLOE", fecha: "2020" },
      8: { opcion: "A", fuente: "Reforma de las Pensiones", fecha: "2023" },
      9: { opcion: "B", fuente: "Ley de Cambio Climático", fecha: "2021" },
      10: { opcion: "B", fuente: "Ley de Enjuiciamiento Civil", fecha: "2023" },
      11: { opcion: "A", fuente: "Posición histórica", fecha: "2026" },
      12: { opcion: "B", fuente: "Declaraciones de presidencia", fecha: "2026" },
      13: { opcion: "B", fuente: "Programa 2023", fecha: "2023" },
      14: { opcion: "B", fuente: "Acuerdo renovación CGPJ", fecha: "2024" },
      15: { opcion: "A", fuente: "Reforma Ley del Aborto", fecha: "2023" },
      16: { opcion: "A", fuente: "Posición histórica", fecha: "2005-2026" },
      17: { opcion: "A", fuente: "Aprobación Ley Trans", fecha: "2023" },
      18: { opcion: "A", fuente: "Pacto de Estado / Renovación", fecha: "2023" }
    }
  },
  {
    id: "pp", nombre: "PP", color: "#0155A4", comunidades: ["todas"],
    posiciones: {
      1: { opcion: "A", fuente: "Programa 2023", fecha: "2023" },
      2: { opcion: "A", fuente: "Declaraciones recientes", fecha: "2026" },
      3: { opcion: "B", fuente: "Gestión autonómica PP", fecha: "2026" },
      4: { opcion: "C", fuente: "Declaraciones líderes", fecha: "2026" },
      5: { opcion: "A", fuente: "Gestión autonómica PP", fecha: "2026" },
      6: { opcion: "D", fuente: "Programa 2023", fecha: "2023" },
      7: { opcion: "B", fuente: "Programa 2023", fecha: "2023" },
      8: { opcion: "B", fuente: "Votaciones Congreso", fecha: "2023" },
      9: { opcion: "C", fuente: "Programa 2023", fecha: "2023" },
      10: { opcion: "A", fuente: "Propuesta Ley Antiokupas", fecha: "2024" },
      11: { opcion: "A", fuente: "Posición histórica", fecha: "2026" },
      12: { opcion: "A", fuente: "Votaciones Congreso", fecha: "2026" },
      13: { opcion: "A", fuente: "Programa 2023", fecha: "2023" },
      14: { opcion: "A", fuente: "Programa 2023 / Reclamaciones", fecha: "2023" },
      15: { opcion: "B", fuente: "Votaciones y recursos TC", fecha: "2023" },
      16: { opcion: "B", fuente: "Declaraciones líderes", fecha: "2024" },
      17: { opcion: "B", fuente: "Programa Electoral", fecha: "2023" },
      18: { opcion: "B", fuente: "Pacto de Estado VDG", fecha: "2017-2024" }
    }
  },
  {
    id: "vox", nombre: "Vox", color: "#63BE21", comunidades: ["todas"],
    posiciones: {
      1: { opcion: "D", fuente: "Agenda España", fecha: "2023" },
      2: { opcion: "C", fuente: "Agenda España", fecha: "2023" },
      3: { opcion: "A", fuente: "Agenda España", fecha: "2023" },
      4: { opcion: "D", fuente: "Agenda España", fecha: "2023" },
      5: { opcion: "C", fuente: "Agenda España", fecha: "2023" },
      6: { opcion: "B", fuente: "Agenda España", fecha: "2023" },
      7: { opcion: "A", fuente: "Programa 100 Medidas", fecha: "2023" },
      8: { opcion: "C", fuente: "Programa Económico", fecha: "2023" },
      9: { opcion: "D", fuente: "Agenda España", fecha: "2023" },
      10: { opcion: "A", fuente: "Agenda España", fecha: "2023" },
      11: { opcion: "A", fuente: "Posición pública", fecha: "2026" },
      12: { opcion: "A", fuente: "Declaraciones líderes", fecha: "2026" },
      13: { opcion: "A", fuente: "Agenda España", fecha: "2023" },
      14: { opcion: "A", fuente: "Votaciones Congreso", fecha: "2024" },
      15: { opcion: "C", fuente: "Agenda España", fecha: "2023" },
      16: { opcion: "C", fuente: "Agenda España / Declaraciones", fecha: "2023" },
      17: { opcion: "C", fuente: "Agenda España", fecha: "2023" },
      18: { opcion: "C", fuente: "Agenda España", fecha: "2023" }
    }
  },
  {
    id: "frenteamplio", nombre: "Frente Amplio (Sumar, IU)", color: "#E51C55", comunidades: ["todas"],
    posiciones: {
      1: { opcion: "B", fuente: "Programa Sumar 2023", fecha: "2023" },
      2: { opcion: "B", fuente: "Ministerio de Trabajo", fecha: "2026" },
      3: { opcion: "C", fuente: "Programa Sumar 2023", fecha: "2023" },
      4: { opcion: "A", fuente: "Iniciativa Legislativa Popular", fecha: "2024" },
      5: { opcion: "B", fuente: "Programa Sumar 2023", fecha: "2023" },
      6: { opcion: "A", fuente: "Programa Sumar 2023", fecha: "2023" },
      7: { opcion: "D", fuente: "Programa Sumar 2023", fecha: "2023" },
      8: { opcion: "A", fuente: "Acuerdos de coalición", fecha: "2023" },
      9: { opcion: "A", fuente: "Programa Sumar 2023", fecha: "2023" },
      10: { opcion: "C", fuente: "Declaraciones públicas", fecha: "2024" },
      11: { opcion: "B", fuente: "Posición histórica", fecha: "2026" },
      12: { opcion: "B", fuente: "Acuerdo de coalición y reconocimiento Palestina", fecha: "2024-2026" },
      13: { opcion: "B", fuente: "Ministerio de Derechos Sociales", fecha: "2023" },
      14: { opcion: "B", fuente: "Apoyo al acuerdo de renovación CGPJ", fecha: "2024" },
      15: { opcion: "A", fuente: "Programa Sumar 2023", fecha: "2023" },
      16: { opcion: "A", fuente: "Programa Sumar 2023", fecha: "2023" },
      17: { opcion: "A", fuente: "Programa Sumar 2023", fecha: "2023" },
      18: { opcion: "A", fuente: "Programa Sumar 2023", fecha: "2023" }
    }
  },
  {
    id: "podemos", nombre: "Podemos", color: "#6A2E68", comunidades: ["todas"],
    posiciones: {
      1: { opcion: "B", fuente: "Programa 2023", fecha: "2023" },
      2: { opcion: "B", fuente: "Programa 2023", fecha: "2023" },
      3: { opcion: "C", fuente: "Programa 2023", fecha: "2023" },
      4: { opcion: "A", fuente: "Iniciativa Legislativa Popular", fecha: "2024" },
      5: { opcion: "B", fuente: "Programa 2023", fecha: "2023" },
      6: { opcion: "A", fuente: "Programa 2023", fecha: "2023" },
      7: { opcion: "D", fuente: "Programa 2023", fecha: "2023" },
      8: { opcion: "A", fuente: "Programa 2023", fecha: "2023" },
      9: { opcion: "A", fuente: "Programa 2023", fecha: "2023" },
      10: { opcion: "C", fuente: "Declaraciones líderes", fecha: "2024" },
      11: { opcion: "B", fuente: "Posición histórica", fecha: "2026" },
      12: { opcion: "C", fuente: "Posición pública y votaciones Congreso", fecha: "2026" },
      13: { opcion: "B", fuente: "Programa 2023", fecha: "2023" },
      14: { opcion: "C", fuente: "Rechazo al pacto CGPJ bipartidista", fecha: "2024" },
      15: { opcion: "A", fuente: "Programa 2023 / Ministerio Igualdad", fecha: "2023" },
      16: { opcion: "A", fuente: "Programa 2023", fecha: "2023" },
      17: { opcion: "A", fuente: "Impulso Ley Trans", fecha: "2023" },
      18: { opcion: "A", fuente: "Programa 2023 / Ley Solo Sí es Sí", fecha: "2023" }
    }
  },
  {
    id: "erc", nombre: "ERC", color: "#FFB232", comunidades: ["cataluna"],
    posiciones: {
      1: { opcion: "B", fuente: "Defensa Ley Vivienda y topes de alquiler", fecha: "2023-2026" },
      2: { opcion: "B", fuente: "Programa Electoral / Votaciones Congreso", fecha: "2024" },
      3: { opcion: "D", fuente: "Gestión Generalitat / Programa", fecha: "2024" },
      4: { opcion: "A", fuente: "Apoyo ILP Regularización", fecha: "2024" },
      5: { opcion: "B", fuente: "Impuesto Grandes Fortunas / Programa", fecha: "2023" },
      6: { opcion: "A", fuente: "Ponencia política (Financiación singular y soberanía)", fecha: "2024" },
      7: { opcion: "C", fuente: "Modelo educativo público catalán", fecha: "2024" },
      8: { opcion: "A", fuente: "Votaciones reforma pensiones", fecha: "2023" },
      9: { opcion: "A", fuente: "Creación energética pública (L'Energètica)", fecha: "2023" },
      10: { opcion: "C", fuente: "Ley catalana de emergencia habitacional", fecha: "2024" },
      11: { opcion: "B", fuente: "Republicanismo histórico", fecha: "2026" },
      12: { opcion: "C", fuente: "Posición en el Congreso", fecha: "2024" },
      13: { opcion: "B", fuente: "Gratuidad infantil I2 en Cataluña", fecha: "2023" },
      14: { opcion: "C", fuente: "Propuestas de reforma judicial", fecha: "2024" },
      15: { opcion: "A", fuente: "Votación Reforma Ley Aborto", fecha: "2023" },
      16: { opcion: "A", fuente: "Programa de Igualdad", fecha: "2023" },
      17: { opcion: "A", fuente: "Apoyo Ley Trans", fecha: "2023" },
      18: { opcion: "A", fuente: "Programa feminista ERC", fecha: "2023" }
    }
  },
  {
    id: "junts", nombre: "Junts per Catalunya", color: "#00C3B2", comunidades: ["cataluna"],
    posiciones: {
      1: { opcion: "A", fuente: "Crítica a topes estatales / Enmiendas", fecha: "2024" },
      2: { opcion: "A", fuente: "Defensa de pymes y negociación colectiva", fecha: "2024" },
      3: { opcion: "B", fuente: "Modelo sanitario concertado catalán", fecha: "2024" },
      4: { opcion: "C", fuente: "Exigencia traspaso integral de inmigración", fecha: "2024" },
      5: { opcion: "D", fuente: "Rebajas selectivas y bonificación Sucesiones", fecha: "2024" },
      6: { opcion: "A", fuente: "Autodeterminación / Concierto económico", fecha: "2024" },
      7: { opcion: "B", fuente: "Defensa escuela concertada y modelo propio", fecha: "2024" },
      8: { opcion: "A", fuente: "Apoyo revalorización pensiones", fecha: "2023" },
      9: { opcion: "B", fuente: "Transición energética con apoyo industrial", fecha: "2024" },
      10: { opcion: "A", fuente: "Proposición de ley contra okupación", fecha: "2024" },
      11: { opcion: "B", fuente: "Republicanismo independentista", fecha: "2026" },
      12: { opcion: "B", fuente: "Postura proeuropea y apoyo a Ucrania", fecha: "2024" },
      13: { opcion: "A", fuente: "Deducciones fiscales por nacimiento", fecha: "2024" },
      14: { opcion: "C", fuente: "Crítica al sistema actual del CGPJ", fecha: "2024" },
      15: { opcion: "A", fuente: "Posición favorable en Parlament y Congreso", fecha: "2023" },
      16: { opcion: "A", fuente: "Consenso derechos LGTBI", fecha: "2023" },
      17: { opcion: "A", fuente: "Voto a favor Ley Trans", fecha: "2023" },
      18: { opcion: "A", fuente: "Leyes catalanas de igualdad", fecha: "2023" }
    }
  },
  {
    id: "bng", nombre: "BNG", color: "#74C1ED", comunidades: ["galicia"],
    posiciones: {
      1: { opcion: "B", fuente: "Programa BNG", fecha: "2024" },
      2: { opcion: "B", fuente: "Programa BNG (Jornada 35h)", fecha: "2024" },
      3: { opcion: "C", fuente: "Defensa sanidad 100% pública gallega", fecha: "2024" },
      4: { opcion: "A", fuente: "Apoyo ILP Regularización", fecha: "2024" },
      5: { opcion: "B", fuente: "Programa fiscal BNG", fecha: "2024" },
      6: { opcion: "A", fuente: "Soberanismo y concierto económico gallego", fecha: "2024" },
      7: { opcion: "D", fuente: "Prioridad absoluta enseñanza pública", fecha: "2024" },
      8: { opcion: "A", fuente: "Incremento pensiones mínimas por ley", fecha: "2024" },
      9: { opcion: "A", fuente: "Tarifa eléctrica gallega y empresa pública", fecha: "2024" },
      10: { opcion: "C", fuente: "Garantía de alternativa habitacional", fecha: "2024" },
      11: { opcion: "B", fuente: "Posición histórica republicana", fecha: "2026" },
      12: { opcion: "C", fuente: "Posición anti-OTAN y pacifista", fecha: "2024" },
      13: { opcion: "B", fuente: "Red pública de escuelas infantiles gratis", fecha: "2024" },
      14: { opcion: "C", fuente: "Reforma del sistema judicial", fecha: "2024" },
      15: { opcion: "A", fuente: "Votación Ley del Aborto", fecha: "2023" },
      16: { opcion: "A", fuente: "Programa Igualdad BNG", fecha: "2024" },
      17: { opcion: "A", fuente: "Apoyo Ley Trans", fecha: "2023" },
      18: { opcion: "A", fuente: "Ampliación recursos contra violencia machista", fecha: "2024" }
    }
  },
  {
    id: "pnv", nombre: "EAJ-PNV", color: "#008000", comunidades: ["paisvasco", "navarra"],
    posiciones: {
      1: { opcion: "C", fuente: "Política de vivienda Gobierno Vasco", fecha: "2024" },
      2: { opcion: "A", fuente: "Defensa del diálogo social vasco", fecha: "2024" },
      3: { opcion: "D", fuente: "Refuerzo de Osakidetza", fecha: "2024" },
      4: { opcion: "B", fuente: "Modelo vasco de acogida e inserción laboral", fecha: "2024" },
      5: { opcion: "D", fuente: "Haciendas forales vascas", fecha: "2024" },
      6: { opcion: "A", fuente: "Nuevo estatus de autogobierno bilateral", fecha: "2024" },
      7: { opcion: "B", fuente: "Ley de Educación Vasca (pública y concertada/ikastolas)", fecha: "2023" },
      8: { opcion: "A", fuente: "Apoyo revalorización conforme al IPC", fecha: "2023" },
      9: { opcion: "B", fuente: "Transición energética competitiva para la industria", fecha: "2024" },
      10: { opcion: "B", fuente: "Iniciativas de agilización judicial", fecha: "2024" },
      11: { opcion: "B", fuente: "Tradición no monárquica", fecha: "2024" },
      12: { opcion: "B", fuente: "Europeísmo, apoyo a Ucrania y dos Estados en Oriente Medio", fecha: "2024" },
      13: { opcion: "A", fuente: "Ayudas directas mensuales por hijo en Euskadi", fecha: "2023" },
      14: { opcion: "B", fuente: "Defensa de consensos parlamentarios", fecha: "2024" },
      15: { opcion: "A", fuente: "Apoyo a la ley vigente", fecha: "2023" },
      16: { opcion: "A", fuente: "Posición consolidada", fecha: "2024" },
      17: { opcion: "A", fuente: "Ley Trans vasca y estatal", fecha: "2023" },
      18: { opcion: "A", fuente: "Ley vasca para la Igualdad", fecha: "2023" }
    }
  },
  {
    id: "bildu", nombre: "EH Bildu", color: "#B5CF18", comunidades: ["paisvasco", "navarra"],
    posiciones: {
      1: { opcion: "B", fuente: "Apoyo Ley de Vivienda y tope de alquileres", fecha: "2023" },
      2: { opcion: "B", fuente: "Reducción de jornada y subida SMI", fecha: "2024" },
      3: { opcion: "C", fuente: "Desprivatización de servicios en Osakidetza", fecha: "2024" },
      4: { opcion: "A", fuente: "Apoyo ILP Regularización", fecha: "2024" },
      5: { opcion: "B", fuente: "Reforma fiscal progresiva a rentas del capital", fecha: "2024" },
      6: { opcion: "A", fuente: "Soberanismo plurinacional", fecha: "2024" },
      7: { opcion: "D", fuente: "Sistema educativo público vasco", fecha: "2023" },
      8: { opcion: "A", fuente: "Blindaje de pensiones públicas", fecha: "2023" },
      9: { opcion: "A", fuente: "Control público del sector energético", fecha: "2024" },
      10: { opcion: "C", fuente: "Prohibición de desahucios sin alternativa", fecha: "2023" },
      11: { opcion: "B", fuente: "Republicanismo independentista", fecha: "2026" },
      12: { opcion: "C", fuente: "Posición anti-OTAN y apoyo a Palestina", fecha: "2024" },
      13: { opcion: "B", fuente: "Universalización de cuidados públicos", fecha: "2024" },
      14: { opcion: "C", fuente: "Reforma profunda de la judicatura", fecha: "2024" },
      15: { opcion: "A", fuente: "Voto favorable Ley del Aborto", fecha: "2023" },
      16: { opcion: "A", fuente: "Programa feminista y LGTBI+", fecha: "2024" },
      17: { opcion: "A", fuente: "Voto favorable Ley Trans", fecha: "2023" },
      18: { opcion: "A", fuente: "Ampliación de políticas contra violencia machista", fecha: "2024" }
    }
  },
  {
    id: "upn", nombre: "UPN", color: "#00599C", comunidades: ["navarra"],
    posiciones: {
      1: { opcion: "A", fuente: "Programa electoral UPN", fecha: "2023" },
      2: { opcion: "A", fuente: "Defensa de negociación colectiva", fecha: "2024" },
      3: { opcion: "B", fuente: "Propuestas sanitarias en Navarra", fecha: "2023" },
      4: { opcion: "C", fuente: "Votaciones en el Congreso", fecha: "2024" },
      5: { opcion: "A", fuente: "Propuesta de alivio fiscal en Navarra", fecha: "2024" },
      6: { opcion: "D", fuente: "Defensa del Régimen Foral dentro de la Constitución", fecha: "2024" },
      7: { opcion: "B", fuente: "Defensa de la libertad de elección educativa", fecha: "2023" },
      8: { opcion: "B", fuente: "Sostenibilidad del sistema de pensiones", fecha: "2023" },
      9: { opcion: "C", fuente: "Competitividad energética industrial", fecha: "2024" },
      10: { opcion: "A", fuente: "Apoyo al desalojo exprés", fecha: "2024" },
      11: { opcion: "A", fuente: "Defensa de la Monarquía Parlamentaria", fecha: "2026" },
      12: { opcion: "A", fuente: "Alineamiento europeo y atlántico", fecha: "2024" },
      13: { opcion: "A", fuente: "Apoyo fiscal a la natalidad y familias", fecha: "2023" },
      14: { opcion: "A", fuente: "Elección judicial de vocales del CGPJ", fecha: "2024" },
      15: { opcion: "B", fuente: "Consentimiento paterno y objeción médica", fecha: "2023" },
      16: { opcion: "B", fuente: "Respeto a la ley vigente", fecha: "2023" },
      17: { opcion: "B", fuente: "Exigencia de garantías médicas en menores", fecha: "2023" },
      18: { opcion: "B", fuente: "Apoyo al Pacto de Estado", fecha: "2023" }
    }
  },
  {
    id: "cc", nombre: "Coalición Canaria", color: "#FFD700", comunidades: ["canarias"],
    posiciones: {
      1: { opcion: "C", fuente: "Decreto de medidas urgentes de vivienda en Canarias", fecha: "2024" },
      2: { opcion: "A", fuente: "Acuerdos con agentes sociales canarios", fecha: "2024" },
      3: { opcion: "B", fuente: "Gestión del Servicio Canario de la Salud", fecha: "2024" },
      4: { opcion: "B", fuente: "Pacto migratorio y corresponsabilidad estatal/UE", fecha: "2024" },
      5: { opcion: "A", fuente: "Bonificación Sucesiones y defensa del REF canario", fecha: "2023" },
      6: { opcion: "A", fuente: "Defensa del fuero canario y singularidad ultraperiférica", fecha: "2024" },
      7: { opcion: "C", fuente: "Acuerdos educativos en Canarias", fecha: "2023" },
      8: { opcion: "A", fuente: "Voto a favor de la revalorización según IPC", fecha: "2023" },
      9: { opcion: "B", fuente: "Transición energética en las islas", fecha: "2024" },
      10: { opcion: "B", fuente: "Apoyo a agilización judicial con garantías", fecha: "2024" },
      11: { opcion: "A", fuente: "Respeto al marco constitucional actual", fecha: "2026" },
      12: { opcion: "B", fuente: "Posición europeísta y multilateral", fecha: "2024" },
      13: { opcion: "B", fuente: "Impulso a plazas de 0 a 3 años en Canarias", fecha: "2024" },
      14: { opcion: "B", fuente: "Apoyo al desbloqueo parlamentario del CGPJ", fecha: "2024" },
      15: { opcion: "A", fuente: "Respeto a la legislación estatal vigente", fecha: "2023" },
      16: { opcion: "A", fuente: "Apoyo a políticas de diversidad LGTBI", fecha: "2023" },
      17: { opcion: "A", fuente: "Ley Trans e Intersex canaria", fecha: "2021-2024" },
      18: { opcion: "A", fuente: "Refuerzo de recursos del Instituto Canario de Igualdad", fecha: "2024" }
    }
  }
];
