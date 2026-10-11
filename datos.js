// ============================================================
// DATOS DEL TEST - Elecciones Generales 2026
// ============================================================

const ELECCIONES = {
  nombre: "Elecciones generales de España",
  fecha: "29 de noviembre de 2026",
  actualizacion: "11/10/2026",
  datosDeEjemplo: false
};

// pesosBase: 3 (Problema principal CIS/Estructural), 2 (Muy importante), 1 (Importante)
const PREGUNTAS = [
  {
    id: 1, tema: "Vivienda", pesoBase: 3,
    texto: "¿Qué política principal debería aplicarse para solucionar el problema del acceso a la vivienda?",
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
    opciones: [
      { id: "A", texto: "Que la jornada y salarios se decidan en negociación colectiva entre empresas y trabajadores, sin imposiciones por ley." },
      { id: "B", texto: "Reducir la jornada laboral por ley a 37,5 horas semanales sin pérdida salarial y seguir subiendo el SMI." },
      { id: "C", texto: "Bajar cotizaciones e impuestos al trabajo para fomentar la contratación y flexibilizar el mercado laboral." }
    ]
  },
  {
    id: 3, tema: "Sanidad", pesoBase: 3,
    texto: "¿Cómo debe gestionarse y financiarse la Sanidad Pública?",
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
    opciones: [
      { id: "A", texto: "Promover la regularización de inmigrantes que ya trabajan aquí y facilitar vías legales y seguras." },
      { id: "B", texto: "Fomentar una inmigración circular vinculada estrictamente al mercado laboral y a las necesidades de las empresas." },
      { id: "C", texto: "Control estricto de fronteras, deportación de quienes cometan delitos y vincular inmigración a un contrato de origen." },
      { id: "D", texto: "Bloqueo naval militar, deportaciones masivas de irregulares y cierre de centros de menas." }
    ]
  },
  {
    id: 5, tema: "Impuestos", pesoBase: 2,
    texto: "¿Qué reforma fiscal necesita España?",
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
    opciones: [
      { id: "A", texto: "Avanzar hacia un modelo plurinacional o federal que reconozca singularidades y permita mayor autogobierno." },
      { id: "B", texto: "Eliminar las comunidades autónomas y devolver todas las competencias (educación, sanidad, seguridad) al Estado." },
      { id: "C", texto: "Mantener el sistema autonómico pero garantizando una estricta igualdad multilateral en la financiación." },
      { id: "D", texto: "Mantener el actual modelo constitucional, combatiendo los privilegios separatistas pero respetando el autogobierno." }
    ]
  },
  {
    id: 7, tema: "Educación", pesoBase: 2,
    texto: "¿Qué peso deben tener la escuela pública y la concertada?",
    opciones: [
      { id: "A", texto: "Defender la libertad de elección total, implantando el pin parental y el cheque escolar." },
      { id: "B", texto: "Defender la educación concertada al mismo nivel que la pública, asegurando la libertad de elección de los padres." },
      { id: "C", texto: "Mantener la coexistencia de redes, pero garantizando que la educación pública sea el eje vertebrador del sistema." },
      { id: "D", texto: "Convertir la escuela pública en la única financiada por el Estado, retirando paulatinamente los conciertos." }
    ]
  },
  {
    id: 8, tema: "Pensiones", pesoBase: 2,
    texto: "¿Cómo garantizar la sostenibilidad de las pensiones?",
    opciones: [
      { id: "A", texto: "Mantener la revalorización por ley según el IPC e inyectar fondos públicos si es necesario." },
      { id: "B", texto: "Fomentar sistemas privados de capitalización y plantear ajustes futuros para evitar la quiebra del sistema." },
      { id: "C", texto: "Transitar hacia un modelo mixto de capitalización privada y recortar el gasto público en pensiones." }
    ]
  },
  {
    id: 9, tema: "Medio Ambiente y Energía", pesoBase: 1,
    texto: "¿Qué medidas energéticas deben priorizarse?",
    opciones: [
      { id: "A", texto: "Crear una empresa pública de energía y acelerar al máximo la transición 100% renovable." },
      { id: "B", texto: "Avanzar hacia las energías renovables de forma ordenada, apoyando económicamente a la industria para adaptarse." },
      { id: "C", texto: "Alargar la vida útil de las centrales nucleares y ralentizar la transición verde si perjudica a la industria." },
      { id: "D", texto: "Abandonar la Agenda 2030 y el Acuerdo de París, priorizando la soberanía energética sin importar la fuente." }
    ]
  },
  {
    id: 10, tema: "Feminismo e Igualdad", pesoBase: 2,
    texto: "¿Cuál debe ser el enfoque de las políticas de igualdad y violencia de género?",
    opciones: [
      { id: "A", texto: "Derogar la ley de violencia de género (hablando de 'violencia intrafamiliar') y suprimir el Ministerio de Igualdad." },
      { id: "B", texto: "Mantener el pacto de Estado contra la violencia de género pero retocando leyes recientes (como la Ley Trans)." },
      { id: "C", texto: "Profundizar las políticas y leyes feministas actuales, garantizando todos los derechos LGTBI y reproductivos." }
    ]
  },
  {
    id: 11, tema: "Okupación y Seguridad", pesoBase: 2,
    texto: "¿Cómo debe tratarse el problema de la okupación de viviendas?",
    opciones: [
      { id: "A", texto: "Garantizar desalojos exprés en menos de 24 horas y endurecer las penas de cárcel por usurpación." },
      { id: "B", texto: "Agilizar los procesos judiciales de desalojo respetando las garantías legales de personas vulnerables." },
      { id: "C", texto: "Tratarlo como un problema de exclusión social: paralizar desahucios sin alternativa habitacional pública." }
    ]
  },
  {
    id: 12, tema: "Modelo de Jefatura del Estado", pesoBase: 1,
    texto: "¿Qué modelo de Jefatura del Estado prefieres?",
    opciones: [
      { id: "A", texto: "Mantener la Monarquía Parlamentaria, figura clave de estabilidad institucional." },
      { id: "B", texto: "Avanzar hacia una República mediante referéndum." }
    ]
  },
  {
    id: 13, tema: "Política Exterior", pesoBase: 1,
    texto: "¿Cuál debería ser la posición internacional de España en conflictos globales?",
    opciones: [
      { id: "A", texto: "Alineamiento total con la OTAN y apoyo incondicional a Ucrania y aliados occidentales." },
      { id: "B", texto: "Apoyo a Ucrania, compromiso europeísta firme y reconocimiento activo del Estado de Palestina." },
      { id: "C", texto: "Ruptura de relaciones con Israel y fin del envío de armas a Ucrania, apostando por vías diplomáticas puras." }
    ]
  },
  {
    id: 14, tema: "Conciliación y Natalidad", pesoBase: 2,
    texto: "¿Cómo debería apoyarse a las familias y la natalidad?",
    opciones: [
      { id: "A", texto: "Ayudas económicas directas por hijo, apoyo a familias numerosas y fomentar la perspectiva de familia." },
      { id: "B", texto: "Universalizar la educación pública 0-3 años gratuita y seguir ampliando permisos de paternidad/maternidad." }
    ]
  },
  {
    id: 15, tema: "Poder Judicial", pesoBase: 1,
    texto: "¿Cómo deberían elegirse los vocales del Consejo General del Poder Judicial (CGPJ)?",
    opciones: [
      { id: "A", texto: "Que la mayoría de los vocales sean elegidos directamente por los propios jueces, sin intervención política." },
      { id: "B", texto: "Mantener el sistema de elección parlamentaria que requiere consensos amplios (3/5 partes de las cámaras)." },
      { id: "C", texto: "Modificar las mayorías para renovarlo sin bloqueos o democratizar el acceso a la carrera judicial." }
    ]
  }
];

const PARTIDOS = [
  {
    id: "psoe", nombre: "PSOE", color: "#E01021",
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
      10: { opcion: "C", fuente: "Programa 2023", fecha: "2023" },
      11: { opcion: "B", fuente: "Ley de Enjuiciamiento Civil", fecha: "2023" },
      12: { opcion: "A", fuente: "Posición histórica", fecha: "2026" },
      13: { opcion: "B", fuente: "Declaraciones de presidencia", fecha: "2026" },
      14: { opcion: "B", fuente: "Programa 2023", fecha: "2023" },
      15: { opcion: "B", fuente: "Acuerdo renovación CGPJ", fecha: "2024" }
    }
  },
  {
    id: "pp", nombre: "PP", color: "#0155A4",
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
      10: { opcion: "B", fuente: "Declaraciones públicas", fecha: "2026" },
      11: { opcion: "A", fuente: "Propuesta Ley Antiokupas", fecha: "2024" },
      12: { opcion: "A", fuente: "Posición histórica", fecha: "2026" },
      13: { opcion: "A", fuente: "Votaciones Congreso", fecha: "2026" },
      14: { opcion: "A", fuente: "Programa 2023", fecha: "2023" },
      15: { opcion: "A", fuente: "Programa 2023 / Reclamaciones", fecha: "2023" }
    }
  },
  {
    id: "vox", nombre: "Vox", color: "#63BE21",
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
      11: { opcion: "A", fuente: "Agenda España", fecha: "2023" },
      12: { opcion: "A", fuente: "Posición pública", fecha: "2026" },
      13: { opcion: "A", fuente: "Declaraciones líderes", fecha: "2026" },
      14: { opcion: "A", fuente: "Agenda España", fecha: "2023" },
      15: { opcion: "A", fuente: "Votaciones Congreso", fecha: "2024" }
    }
  },
  {
    id: "frenteamplio", nombre: "Frente Amplio (Sumar, IU, Comuns)", color: "#E51C55",
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
      10: { opcion: "C", fuente: "Programa Sumar 2023", fecha: "2023" },
      11: { opcion: "C", fuente: "Declaraciones públicas", fecha: "2024" },
      12: { opcion: "B", fuente: "Posición histórica", fecha: "2026" },
      13: { opcion: "C", fuente: "Votaciones y declaraciones", fecha: "2026" },
      14: { opcion: "B", fuente: "Ministerio de Derechos Sociales", fecha: "2023" },
      15: { opcion: "C", fuente: "Propuestas de reforma", fecha: "2023" }
    }
  },
  {
    id: "podemos", nombre: "Podemos", color: "#6A2E68",
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
      10: { opcion: "C", fuente: "Programa 2023", fecha: "2023" },
      11: { opcion: "C", fuente: "Declaraciones líderes", fecha: "2024" },
      12: { opcion: "B", fuente: "Posición histórica", fecha: "2026" },
      13: { opcion: "C", fuente: "Posición pública", fecha: "2026" },
      14: { opcion: "B", fuente: "Programa 2023", fecha: "2023" },
      15: { opcion: "C", fuente: "Declaraciones públicas", fecha: "2023" }
    }
  }
];