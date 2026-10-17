// ============================================================
// DATOS DEL TEST - Escenario Elecciones Generales (20 preguntas)
// ============================================================

const ELECCIONES = { nombre: "Elecciones generales de España", fecha: "Escenario preelectoral 2026", actualizacion: "14/10/2026", datosDeEjemplo: false };

const PREGUNTAS = [
  {
    id: 1, tema: "Vivienda", pesoBase: 3,
    texto: "Si tuvieras que elegir una medida para bajar el precio de la vivienda, ¿cuál preferirías?",
    contexto: "Se debate entre intervenir los precios mediante leyes estatales o liberalizar el suelo para construir más y proteger legalmente al propietario para que alquile sin miedo.",
    opciones: [
      { id: "A", texto: "Intervenir el mercado limitando por ley los alquileres y prohibiendo que fondos buitre y grandes inversores compren viviendas." },
      { id: "B", texto: "Dar beneficios fiscales a los dueños que alquilen barato y usar suelo público para ampliar el alquiler social a precios tasados." },
      { id: "C", texto: "Eliminar topes al alquiler, facilitar la construcción libre de viviendas y garantizar desalojos rápidos ante impagos." }
    ]
  },
  {
    id: 2, tema: "Vivienda Turística", pesoBase: 3,
    texto: "¿Cómo se deberían regular los pisos turísticos tipo Airbnb?",
    contexto: "El turismo masivo ha generado problemas de convivencia y acceso a la vivienda en algunas ciudades. El debate es si el Estado debe intervenir duramente o si es mejor que cada zona decida sin coartar el motor turístico.",
    opciones: [
      { id: "A", texto: "Limitar licencias turísticas solo en zonas saturadas, cobrando tasas específicas pero sin frenar la principal industria del país." },
      { id: "B", texto: "Prohibir nuevos pisos turísticos en zonas de alta demanda, dar poder a las comunidades de vecinos para vetarlos e imponer altos impuestos." },
      { id: "C", texto: "Dejar que el mercado y los ayuntamientos se regulen solos, protegiendo el derecho a la propiedad privada y el modelo económico del turismo." }
    ]
  },
  {
    id: 3, tema: "Empleo", pesoBase: 3,
    texto: "¿Qué decisión tomarías sobre las horas de la jornada laboral?",
    contexto: "Se discute si el Gobierno debe bajar las horas por ley para todos, o si es mejor que cada sector acuerde sus horarios sin que el Estado imponga una regla única.",
    opciones: [
      { id: "A", texto: "Reducir por ley la jornada laboral máxima a 37,5 horas (o menos) sin que las empresas puedan rebajar el sueldo mensual." },
      { id: "B", texto: "Dejar que las empresas y los trabajadores negocien los horarios según cada sector, sin que el Gobierno imponga rebajas obligatorias." },
      { id: "C", texto: "Rebajar los impuestos y cotizaciones que pagan las empresas para que sea más barato contratar personal y flexibilizar el despido." }
    ]
  },
  {
    id: 4, tema: "Sanidad", pesoBase: 3,
    texto: "¿Cómo recortarías las listas de espera en los hospitales públicos?",
    contexto: "Para solucionar la saturación, algunos defienden pagar a clínicas privadas para derivar pacientes y desatascar la sanidad pública, mientras otros exigen prohibir esos contratos.",
    opciones: [
      { id: "A", texto: "Aumentar fuertemente el presupuesto de los hospitales públicos para contratar más personal y prohibir la derivación de pacientes a clínicas privadas." },
      { id: "B", texto: "Pagar conciertos con clínicas y hospitales privados para derivar pacientes rápido y reducir las listas de espera urgentes." },
      { id: "C", texto: "Devolver la gestión sanitaria de las autonomías al Gobierno central para que haya una tarjeta médica única e idéntica en toda España." }
    ]
  },
  {
    id: 5, tema: "Inmigración", pesoBase: 3,
    texto: "¿Cuál debería ser la principal norma para gestionar la inmigración?",
    contexto: "Ante la llegada de migrantes, las posturas van desde dar papeles a quienes ya trabajan en negro, hasta deportaciones inmediatas con el ejército en las fronteras.",
    opciones: [
      { id: "A", texto: "Dar papeles y regularizar masivamente a las personas inmigrantes que ya viven y trabajan en España, ampliando vías legales y seguras de entrada." },
      { id: "B", texto: "Vincular la entrada estrictamente a contratos de trabajo temporal, exigiendo requisitos y controlando quién entra según la demanda laboral." },
      { id: "C", texto: "Desplegar barcos militares en las fronteras, deportar inmediatamente a las personas sin papeles y cerrar los centros de menores extranjeros." }
    ]
  },
  {
    id: 6, tema: "Impuestos", pesoBase: 2,
    texto: "¿Quién debería pagar más o menos impuestos?",
    contexto: "El debate es si subir impuestos a los ricos permite mejorar los servicios de todos, o si bajar impuestos generales deja más dinero en el bolsillo para reactivar el consumo.",
    opciones: [
      { id: "A", texto: "Crear un impuesto fuerte y permanente a los bancos, las compañías de energía y los patrimonios millonarios para sostener la educación y sanidad." },
      { id: "B", texto: "Mantener los impuestos actuales con ajustes mínimos a las rentas más altas, para asegurar que el Estado no entra en déficit." },
      { id: "C", texto: "Bajar drásticamente el IRPF a todos y eliminar por completo impuestos polémicos como el de Sucesiones, Donaciones y Patrimonio." }
    ]
  },
  {
    id: 7, tema: "Modelo Territorial", pesoBase: 2,
    texto: "¿Cómo debe organizarse el dinero y el poder de las regiones en España?",
    contexto: "Discusión sobre si España debe ser un Estado centralista sin autonomías, mantener el sistema de comunidades iguales, o reconocer naciones que recauden sus propios impuestos (concierto).",
    opciones: [
      { id: "A", texto: "Permitir que las regiones históricas como Cataluña o País Vasco recauden el 100% de sus impuestos y reconozcan su identidad nacional." },
      { id: "B", texto: "Mantener a todas las comunidades autónomas con los mismos deberes y asegurar un fondo de dinero común igualitario para toda España." },
      { id: "C", texto: "Suprimir las autonomías, centralizar todo el poder en Madrid y tener unas leyes únicas de educación y sanidad para toda España." }
    ]
  },
  {
    id: 8, tema: "Educación", pesoBase: 2,
    texto: "¿A qué tipo de colegios se debe destinar más dinero público?",
    contexto: "España financia colegios públicos y también colegios concertados (privados pagados por el Estado). Hay visiones contrarias sobre si se debe garantizar la libre elección o primar solo lo público.",
    opciones: [
      { id: "A", texto: "Dar el dinero público solo a los colegios 100% públicos e integrar progresivamente a los concertados en esa red estatal." },
      { id: "B", texto: "Mantener el sistema actual asegurando que los colegios públicos sigan siendo la opción principal y mayoritaria, pero sin suprimir conciertos." },
      { id: "C", texto: "Defender la libertad total de los padres pagando colegios concertados (incluso los de educación separada por sexo) o usando cheques escolares." }
    ]
  },
  {
    id: 9, tema: "Pensiones", pesoBase: 2,
    texto: "¿Cómo asegurarías que haya dinero para pagar las pensiones en el futuro?",
    contexto: "Con cada vez más jubilados, algunos proponen subir las cuotas que pagan las empresas, otros recomiendan planes privados de capitalización, y otros ligarlo al coste de la vida.",
    opciones: [
      { id: "A", texto: "Garantizar siempre que las pensiones suban igual que la inflación (el IPC), pagándolo con más impuestos a los sueldos más altos." },
      { id: "B", texto: "Ligar las pensiones a la cantidad de gente trabajando y animar a la gente a hacerse planes de ahorro privados como complemento." },
      { id: "C", texto: "Mover el sistema hacia planes privados obligatorios (capitalización) y recortar el gasto político del Gobierno para poder pagar jubilaciones." }
    ]
  },
  {
    id: 10, tema: "Seguridad y Penas", pesoBase: 2,
    texto: "¿Cómo abordarías el aumento de la delincuencia y reincidencia?",
    contexto: "El enfoque se divide entre quienes creen que las penas duras disuaden del delito (prisión permanente) y quienes consideran que las cárceles deben enfocarse estrictamente en la reinserción social.",
    opciones: [
      { id: "A", texto: "Eliminar la prisión permanente revisable y destinar más presupuesto a programas de rehabilitación y reinserción social en las cárceles." },
      { id: "B", texto: "Mantener la prisión permanente revisable y reformar la ley para agilizar los desahucios de viviendas en 24 horas." },
      { id: "C", texto: "Endurecer fuertemente las penas y expulsar automáticamente a cualquier inmigrante sin papeles que cometa un delito leve." }
    ]
  },
  {
    id: 11, tema: "Monarquía o República", pesoBase: 1,
    texto: "¿Quién debería ser el Jefe del Estado español?",
    contexto: "El cargo de Rey es hereditario y neutral, mientras que un presidente de la República sería elegido por votación ciudadana.",
    opciones: [
      { id: "A", texto: "Mantener la Monarquía parlamentaria actual y la figura de la Corona tal como marca la Constitución." },
      { id: "B", texto: "Convocar un referéndum ciudadano para cambiar la Constitución y convertir España en una República." }
    ]
  },
  {
    id: 12, tema: "Política Exterior", pesoBase: 1,
    texto: "¿A qué debería dar prioridad el ejército y la política exterior española?",
    contexto: "España pertenece a la OTAN (lo que exige gasto militar). Además, hay posturas enfrentadas sobre el envío de armas a conflictos como Ucrania o las relaciones con Israel.",
    opciones: [
      { id: "A", texto: "Prohibir la venta de armas a Israel, exigir un alto el fuego inmediato en Gaza y dejar de aumentar el gasto militar de la OTAN." },
      { id: "B", texto: "Reconocer al Estado Palestino buscando soluciones diplomáticas, pero sin dejar de apoyar a Ucrania militarmente ni salir de la OTAN." },
      { id: "C", texto: "Ser un aliado militar fuerte de Estados Unidos y la OTAN, apoyar a Ucrania con armas y mantener las relaciones comerciales con Israel." }
    ]
  },
  {
    id: 13, tema: "Conciliación y Niños", pesoBase: 2,
    texto: "¿Qué medida es más útil para ayudar a las familias con hijos?",
    contexto: "Las familias tienen problemas para conciliar y el país tiene baja natalidad. Se duda entre dar guarderías públicas gratuitas o devolver dinero a los padres en sus impuestos.",
    opciones: [
      { id: "A", texto: "Crear una red 100% pública y gratuita de guarderías para niños de 0 a 3 años y dar permisos largos de paternidad." },
      { id: "B", texto: "Bajar los impuestos a las familias con hijos, dar un cheque en dinero para gastar en guarderías privadas y premiar a familias numerosas." }
    ]
  },
  {
    id: 14, tema: "Jueces y Poder Judicial", pesoBase: 1,
    texto: "¿Quién debería elegir a los máximos representantes de los jueces?",
    contexto: "El Consejo del Poder Judicial lo eligen los políticos en el Congreso tras pactos entre partidos. Se debate si esto politiza la justicia o si es democrático.",
    opciones: [
      { id: "A", texto: "Que sean los propios jueces, a través de votaciones entre ellos, quienes elijan directamente a sus jefes sin que intervengan los políticos." },
      { id: "B", texto: "Mantener que sean los partidos en el Congreso quienes los elijan buscando acuerdos amplios para asegurar representación democrática." }
    ]
  },
  {
    id: 15, tema: "Aborto", pesoBase: 3,
    texto: "¿Qué normas se deben aplicar sobre la interrupción del embarazo (aborto)?",
    contexto: "La ley actual permite abortar libremente en las primeras 14 semanas en centros públicos, e incluye a chicas de 16-17 años sin permiso de sus padres.",
    opciones: [
      { id: "A", texto: "Mantener la ley actual, garantizando que los hospitales públicos realicen la operación sin necesidad de permiso paterno a partir de los 16 años." },
      { id: "B", texto: "Mantener el derecho al aborto pero obligar a que las menores de 18 años tengan autorización de sus padres para poder hacerlo." },
      { id: "C", texto: "Prohibir el aborto considerándolo un ataque a la vida y dar ayudas económicas solo a las mujeres para que decidan seguir con el embarazo." }
    ]
  },
  {
    id: 16, tema: "Eutanasia", pesoBase: 3,
    texto: "¿Estás de acuerdo con la muerte médicamente asistida (Eutanasia)?",
    contexto: "España legalizó la eutanasia para personas con sufrimiento incurable. El debate moral enfrenta la autonomía del paciente frente al enfoque de ofrecer solo cuidados paliativos.",
    opciones: [
      { id: "A", texto: "Mantener la Ley de Eutanasia como un derecho garantizado y accesible dentro del sistema sanitario público para enfermos terminales." },
      { id: "B", texto: "Derogar la Ley de Eutanasia por atentar contra la vida, invirtiendo ese dinero exclusivamente en cuidados paliativos para el dolor crónico." }
    ]
  },
  {
    id: 17, tema: "Derechos LGTBI y Trans", pesoBase: 3,
    texto: "¿Cómo organizarías los derechos de género y matrimoniales?",
    contexto: "El debate engloba el matrimonio homosexual y la Ley Trans, que permite cambiar el género en el DNI solo declarándolo, sin informes psiquiátricos ni hormonación obligatoria.",
    opciones: [
      { id: "A", texto: "Proteger el matrimonio gay y mantener la Ley Trans, permitiendo cambiar el DNI sin necesidad de informes médicos ni jueces." },
      { id: "B", texto: "Mantener el matrimonio igualitario pero reformar la Ley Trans para exigir informes médicos a menores y proteger categorías deportivas femeninas." },
      { id: "C", texto: "Derogar la Ley Trans, prohibir tratamientos hormonales a menores y cambiar el 'matrimonio' gay por un simple registro de uniones civiles." }
    ]
  },
  {
    id: 18, tema: "Violencia Machista", pesoBase: 3,
    texto: "¿Qué leyes aplicarías sobre la violencia dentro de la pareja?",
    contexto: "Existe una ley específica con penas más duras si un hombre agrede a su mujer (violencia de género). Algunos creen que debe ampliarse y otros que discrimina penalmente a los hombres.",
    opciones: [
      { id: "A", texto: "Mantener y endurecer la ley específica de Violencia de Género, destinando más dinero a recursos para proteger a las mujeres maltratadas." },
      { id: "B", texto: "Eliminar la ley actual y crear una de 'Violencia Intrafamiliar' que castigue por igual a hombres y mujeres sin distinguir géneros." }
    ]
  },
  {
    id: 19, tema: "Cesta de la Compra y Energía", pesoBase: 3,
    texto: "¿Cómo debería actuar el Estado frente a la inflación y el encarecimiento de la vida?",
    contexto: "El debate es si el Gobierno debe fijar topes de precio a los alimentos y recibos de la luz, o si es mejor eliminar trabas y bajar el IVA para que los supermercados compitan.",
    opciones: [
      { id: "A", texto: "Intervenir directamente fijando precios máximos obligatorios en la luz y los supermercados, topando las hipotecas de los bancos." },
      { id: "B", texto: "Dar bonos de ayuda directos solo a las familias pobres y bajar un poco el IVA de alimentos, sin amenazar los beneficios empresariales." },
      { id: "C", texto: "Quitar trabas burocráticas a empresas y agricultores, reduciendo el gasto político para incentivar el libre mercado y la competencia." }
    ]
  },
  {
    id: 20, tema: "Energía y Clima", pesoBase: 1,
    texto: "¿Cuál debería ser el futuro energético y climático de España?",
    contexto: "Las normas contra el cambio climático imponen restricciones de contaminación (Pacto Verde) y el cierre de centrales nucleares. Algunos las rechazan por dañar la economía rural.",
    opciones: [
      { id: "A", texto: "Cerrar las centrales nucleares e invertir dinero público en energía eólica y solar para cumplir estrictamente los objetivos climáticos europeos." },
      { id: "B", texto: "Mantener abiertas las centrales nucleares actuales para no depender de otros países y asegurar electricidad barata para las fábricas." },
      { id: "C", texto: "Romper con la Agenda 2030, quitar límites ambientales a los agricultores y explotar sin complejos todos los recursos energéticos." }
    ]
  }
];

// Re-codificación basada ESTRICTAMENTE en las fuentes de datos.js original.
// Nota metodológica: Para mantener la confianza y neutralidad, no se han inventado
// fuentes nuevas. Se documenta con las URLs del prompt o se clasifica como evidencia "media".
const PARTIDOS = [
  {
    id: "psoe", nombre: "PSOE", color: "#E01021", comunidades: ["todas"],
    posiciones: {
      1: { opcion: "B", fuente: "Ley 12/2023 por el derecho a la vivienda", fecha: "2023", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2023-12203", tipoEvidencia: "Ley / Norma BOE", nivelConfianza: "alta", verificada: true },
      2: { opcion: "C", fuente: "Posición sobre regulación de viviendas de uso turístico (VUT)", fecha: "2024", url: null, nota: "Equilibrio entre regulación autonómica y fiscalidad estatal", tipoEvidencia: "Síntesis en revisión", nivelConfianza: "media", verificada: false },
      3: { opcion: "A", fuente: "Acuerdo coalición PSOE-Sumar", fecha: "2024", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2024-2285", tipoEvidencia: "Acuerdo Institucional", nivelConfianza: "alta", verificada: true },
      4: { opcion: "A", fuente: "Programa Electoral Generales 2023", fecha: "2023", url: null, tipoEvidencia: "Programa Electoral Oficial", nivelConfianza: "alta", verificada: true },
      5: { opcion: "B", fuente: "Reforma Reglamento Extranjería", fecha: "2024", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2024-24099", tipoEvidencia: "Ley / Norma BOE", nivelConfianza: "alta", verificada: true },
      6: { opcion: "B", fuente: "Ley 38/2022 y paquetes fiscales", fecha: "2022", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2022-22685", tipoEvidencia: "Ley / Norma BOE", nivelConfianza: "alta", verificada: true },
      7: { opcion: "B", fuente: "Resoluciones 41.º Congreso Federal", fecha: "2024", url: null, tipoEvidencia: "Programa Electoral Oficial", nivelConfianza: "alta", verificada: true },
      8: { opcion: "B", fuente: "Ley Orgánica 3/2020 (LOMLOE)", fecha: "2020", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2020-17264", tipoEvidencia: "Ley / Norma BOE", nivelConfianza: "alta", verificada: true },
      9: { opcion: "A", fuente: "RDL 2/2023 reforma pensiones", fecha: "2023", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2023-6967", tipoEvidencia: "Ley / Norma BOE", nivelConfianza: "alta", verificada: true },
      10: { opcion: "B", fuente: "Posicionamiento sobre seguridad ciudadana y desalojos rápidos", fecha: "2024", url: null, nota: "Combina rechazo a prisión permanente con ajustes procesales de desalojo en Ley de Eficiencia", tipoEvidencia: "Síntesis en revisión", nivelConfianza: "media", verificada: false },
      11: { opcion: "A", fuente: "Defensa parlamentaria Título II CE", fecha: "2024", url: "https://www.congreso.es", tipoEvidencia: "Votación Parlamentaria", nivelConfianza: "alta", verificada: true },
      12: { opcion: "B", fuente: "Reconocimiento Palestina y apoyo OTAN", fecha: "2024", url: "https://www.congreso.es", tipoEvidencia: "Votación Parlamentaria", nivelConfianza: "alta", verificada: true },
      13: { opcion: "A", fuente: "Proyecto Ley Familias", fecha: "2024", url: "https://www.congreso.es", tipoEvidencia: "Votación Parlamentaria", nivelConfianza: "alta", verificada: true },
      14: { opcion: "B", fuente: "LO 3/2024 reforma LOPJ", fecha: "2024", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2024-15938", tipoEvidencia: "Ley / Norma BOE", nivelConfianza: "alta", verificada: true },
      15: { opcion: "A", fuente: "LO 1/2023 salud reproductiva", fecha: "2023", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2023-5364", tipoEvidencia: "Ley / Norma BOE", nivelConfianza: "alta", verificada: true },
      16: { opcion: "A", fuente: "LO 3/2021 Eutanasia", fecha: "2021", url: null, nota: "Impulso gubernamental de la ley", tipoEvidencia: "Ley / Norma BOE", nivelConfianza: "alta", verificada: true },
      17: { opcion: "A", fuente: "Ley 4/2023 igualdad trans", fecha: "2023", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2023-5366", tipoEvidencia: "Ley / Norma BOE", nivelConfianza: "alta", verificada: true },
      18: { opcion: "A", fuente: "LO 1/2004 Violencia Género", fecha: "2004", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2004-21760", tipoEvidencia: "Ley / Norma BOE", nivelConfianza: "alta", verificada: true },
      19: { opcion: "B", fuente: "RDL 4/2024 medidas anticrisis", fecha: "2024", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2024-12944", tipoEvidencia: "Ley / Norma BOE", nivelConfianza: "alta", verificada: true },
      20: { opcion: "A", fuente: "Ley 7/2021 Cambio Climático", fecha: "2021", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2021-8447", tipoEvidencia: "Ley / Norma BOE", nivelConfianza: "alta", verificada: true }
    }
  },
  {
    id: "pp", nombre: "PP", color: "#0155A4", comunidades: ["todas"],
    posiciones: {
      1: { opcion: "C", fuente: "Programa Electoral 2023", fecha: "2023", url: null, tipoEvidencia: "Programa Electoral Oficial", nivelConfianza: "alta", verificada: true },
      2: { opcion: "C", fuente: "Posicionamiento municipal y autonómico sobre licencias VUT", fecha: "2024", url: null, tipoEvidencia: "Síntesis en revisión", nivelConfianza: "media", verificada: false },
      3: { opcion: "B", fuente: "Debates parlamentarios", fecha: "2024", url: "https://www.congreso.es", tipoEvidencia: "Síntesis en revisión", nivelConfianza: "media", verificada: false },
      4: { opcion: "B", fuente: "Programa Electoral 2023", fecha: "2023", url: null, tipoEvidencia: "Programa Electoral Oficial", nivelConfianza: "alta", verificada: true },
      5: { opcion: "B", fuente: "Iniciativas parlamentarias", fecha: "2024", url: "https://www.congreso.es", tipoEvidencia: "Síntesis en revisión", nivelConfianza: "media", verificada: false },
      6: { opcion: "C", fuente: "Programa Electoral 2023", fecha: "2023", url: null, tipoEvidencia: "Programa Electoral Oficial", nivelConfianza: "alta", verificada: true },
      7: { opcion: "B", fuente: "Declaración Córdoba PP", fecha: "2024", url: null, tipoEvidencia: "Acuerdo Institucional", nivelConfianza: "alta", verificada: true },
      8: { opcion: "C", fuente: "Programa Electoral 2023", fecha: "2023", url: null, tipoEvidencia: "Programa Electoral Oficial", nivelConfianza: "alta", verificada: true },
      9: { opcion: "B", fuente: "Voto convalidación RDL 2/2023", fecha: "2023", url: "https://www.congreso.es", tipoEvidencia: "Votación Parlamentaria", nivelConfianza: "alta", verificada: true },
      10: { opcion: "B", fuente: "Proposición Ley Antiocupación", fecha: "2024", url: "https://www.congreso.es", tipoEvidencia: "Votación Parlamentaria", nivelConfianza: "alta", verificada: true },
      11: { opcion: "A", fuente: "Programa Electoral 2023", fecha: "2023", url: null, tipoEvidencia: "Programa Electoral Oficial", nivelConfianza: "alta", verificada: true },
      12: { opcion: "C", fuente: "Programa Electoral 2023", fecha: "2023", url: "https://www.congreso.es", tipoEvidencia: "Programa Electoral Oficial", nivelConfianza: "alta", verificada: true },
      13: { opcion: "B", fuente: "Programa Electoral 2023", fecha: "2023", url: null, tipoEvidencia: "Programa Electoral Oficial", nivelConfianza: "alta", verificada: true },
      14: { opcion: "A", fuente: "Acuerdos renovación CGPJ LO 3/2024", fecha: "2024", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2024-15938", tipoEvidencia: "Programa Electoral Oficial", nivelConfianza: "alta", verificada: true },
      15: { opcion: "B", fuente: "Programa Electoral 2023", fecha: "2023", url: null, tipoEvidencia: "Programa Electoral Oficial", nivelConfianza: "alta", verificada: true },
      16: { opcion: "B", fuente: "Programa Electoral 2023", fecha: "2023", url: null, nota: "Posición sobre paliativos", tipoEvidencia: "Programa Electoral Oficial", nivelConfianza: "alta", verificada: true },
      17: { opcion: "B", fuente: "Programa Electoral 2023", fecha: "2023", url: null, tipoEvidencia: "Programa Electoral Oficial", nivelConfianza: "alta", verificada: true },
      18: { opcion: "A", fuente: "Pacto de Estado Violencia Género", fecha: "2024", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2023-10213", tipoEvidencia: "Ley / Norma BOE", nivelConfianza: "alta", verificada: true },
      19: { opcion: "C", fuente: "Programa Electoral 2023", fecha: "2023", url: null, tipoEvidencia: "Programa Electoral Oficial", nivelConfianza: "alta", verificada: true },
      20: { opcion: "B", fuente: "Programa Electoral 2023", fecha: "2023", url: null, tipoEvidencia: "Programa Electoral Oficial", nivelConfianza: "alta", verificada: true }
    }
  },
  {
    id: "vox", nombre: "Vox", color: "#52A319", comunidades: ["todas"],
    posiciones: {
      1: { opcion: "C", fuente: "Agenda España 2023", fecha: "2023", url: null, tipoEvidencia: "Programa Electoral Oficial", nivelConfianza: "alta", verificada: true },
      2: { opcion: "C", fuente: "Posicionamiento libre mercado turismo", fecha: "2024", url: null, tipoEvidencia: "Síntesis en revisión", nivelConfianza: "media", verificada: false },
      3: { opcion: "C", fuente: "Programa Generales 2023", fecha: "2023", url: null, tipoEvidencia: "Programa Electoral Oficial", nivelConfianza: "alta", verificada: true },
      4: { opcion: "C", fuente: "Agenda España", fecha: "2023", url: null, tipoEvidencia: "Programa Electoral Oficial", nivelConfianza: "alta", verificada: true },
      5: { opcion: "C", fuente: "Iniciativas en el Congreso", fecha: "2024", url: "https://www.congreso.es", tipoEvidencia: "Programa Electoral Oficial", nivelConfianza: "alta", verificada: true },
      6: { opcion: "C", fuente: "Programa Económico", fecha: "2023", url: null, tipoEvidencia: "Programa Electoral Oficial", nivelConfianza: "alta", verificada: true },
      7: { opcion: "C", fuente: "Agenda España", fecha: "2023", url: null, tipoEvidencia: "Programa Electoral Oficial", nivelConfianza: "alta", verificada: true },
      8: { opcion: "C", fuente: "Programa Electoral 2023", fecha: "2023", url: null, tipoEvidencia: "Programa Electoral Oficial", nivelConfianza: "alta", verificada: true },
      9: { opcion: "C", fuente: "Programa Económico", fecha: "2023", url: null, tipoEvidencia: "Programa Electoral Oficial", nivelConfianza: "alta", verificada: true },
      10: { opcion: "C", fuente: "Proposiciones antiocupación/Código Penal", fecha: "2024", url: "https://www.congreso.es", tipoEvidencia: "Votación Parlamentaria", nivelConfianza: "alta", verificada: true },
      11: { opcion: "A", fuente: "Estatutos Vox", fecha: "2023", url: null, tipoEvidencia: "Programa Electoral Oficial", nivelConfianza: "alta", verificada: true },
      12: { opcion: "C", fuente: "Votaciones defensa", fecha: "2024", url: "https://www.congreso.es", tipoEvidencia: "Síntesis en revisión", nivelConfianza: "media", verificada: false },
      13: { opcion: "B", fuente: "Agenda España", fecha: "2023", url: null, tipoEvidencia: "Programa Electoral Oficial", nivelConfianza: "alta", verificada: true },
      14: { opcion: "A", fuente: "Voto contra LO 3/2024", fecha: "2024", url: "https://www.congreso.es", tipoEvidencia: "Votación Parlamentaria", nivelConfianza: "alta", verificada: true },
      15: { opcion: "C", fuente: "Agenda España", fecha: "2023", url: null, tipoEvidencia: "Programa Electoral Oficial", nivelConfianza: "alta", verificada: true },
      16: { opcion: "B", fuente: "Recurso TC Eutanasia", fecha: "2021", url: null, tipoEvidencia: "Votación Parlamentaria", nivelConfianza: "alta", verificada: true },
      17: { opcion: "C", fuente: "Programa Electoral 2023", fecha: "2023", url: null, tipoEvidencia: "Programa Electoral Oficial", nivelConfianza: "alta", verificada: true },
      18: { opcion: "B", fuente: "Programa Electoral 2023", fecha: "2023", url: null, tipoEvidencia: "Programa Electoral Oficial", nivelConfianza: "alta", verificada: true },
      19: { opcion: "C", fuente: "Agenda España", fecha: "2023", url: null, tipoEvidencia: "Programa Electoral Oficial", nivelConfianza: "alta", verificada: true },
      20: { opcion: "C", fuente: "Agenda España", fecha: "2023", url: null, tipoEvidencia: "Programa Electoral Oficial", nivelConfianza: "alta", verificada: true }
    }
  },
  {
    id: "frenteamplio", nombre: "Sumar / IU", color: "#E51C55", comunidades: ["todas"],
    posiciones: {
      1: { opcion: "A", fuente: "Programa Sumar", fecha: "2023", url: null, tipoEvidencia: "Programa Electoral Oficial", nivelConfianza: "alta", verificada: true },
      2: { opcion: "B", fuente: "Acuerdos Ministerio Vivienda", fecha: "2024", url: null, tipoEvidencia: "Acuerdo Institucional", nivelConfianza: "alta", verificada: true },
      3: { opcion: "A", fuente: "Acuerdo reducción jornada", fecha: "2024", url: null, tipoEvidencia: "Acuerdo Institucional", nivelConfianza: "alta", verificada: true },
      4: { opcion: "A", fuente: "Programa Sumar", fecha: "2023", url: null, tipoEvidencia: "Programa Electoral Oficial", nivelConfianza: "alta", verificada: true },
      5: { opcion: "A", fuente: "ILP Regularización", fecha: "2024", url: "https://www.congreso.es", tipoEvidencia: "Votación Parlamentaria", nivelConfianza: "alta", verificada: true },
      6: { opcion: "A", fuente: "Programa Sumar", fecha: "2023", url: null, tipoEvidencia: "Programa Electoral Oficial", nivelConfianza: "alta", verificada: true },
      7: { opcion: "A", fuente: "Modelo Federal Sumar", fecha: "2023", url: null, tipoEvidencia: "Programa Electoral Oficial", nivelConfianza: "alta", verificada: true },
      8: { opcion: "A", fuente: "Programa Sumar", fecha: "2023", url: null, tipoEvidencia: "Programa Electoral Oficial", nivelConfianza: "alta", verificada: true },
      9: { opcion: "A", fuente: "RDL 2/2023", fecha: "2023", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2023-6967", tipoEvidencia: "Ley / Norma BOE", nivelConfianza: "alta", verificada: true },
      10: { opcion: "A", fuente: "Posicionamiento código penal", fecha: "2024", url: null, tipoEvidencia: "Síntesis en revisión", nivelConfianza: "media", verificada: false },
      11: { opcion: "B", fuente: "Documentos políticos IU/Sumar", fecha: "2023", url: null, tipoEvidencia: "Síntesis en revisión", nivelConfianza: "media", verificada: false },
      12: { opcion: "A", fuente: "Acuerdo reconocimiento Palestina", fecha: "2024", url: "https://www.congreso.es", tipoEvidencia: "Acuerdo Institucional", nivelConfianza: "alta", verificada: true },
      13: { opcion: "A", fuente: "Programa Sumar", fecha: "2023", url: null, tipoEvidencia: "Programa Electoral Oficial", nivelConfianza: "alta", verificada: true },
      14: { opcion: "B", fuente: "Voto a favor LO 3/2024", fecha: "2024", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2024-15938", tipoEvidencia: "Votación Parlamentaria", nivelConfianza: "alta", verificada: true },
      15: { opcion: "A", fuente: "LO 1/2023", fecha: "2023", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2023-5364", tipoEvidencia: "Ley / Norma BOE", nivelConfianza: "alta", verificada: true },
      16: { opcion: "A", fuente: "Defensa parlamentaria Ley Eutanasia", fecha: "2021", url: null, tipoEvidencia: "Votación Parlamentaria", nivelConfianza: "alta", verificada: true },
      17: { opcion: "A", fuente: "Ley 4/2023", fecha: "2023", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2023-5366", tipoEvidencia: "Ley / Norma BOE", nivelConfianza: "alta", verificada: true },
      18: { opcion: "A", fuente: "Programa Sumar", fecha: "2023", url: null, tipoEvidencia: "Programa Electoral Oficial", nivelConfianza: "alta", verificada: true },
      19: { opcion: "A", fuente: "Programa Sumar", fecha: "2023", url: null, tipoEvidencia: "Programa Electoral Oficial", nivelConfianza: "alta", verificada: true },
      20: { opcion: "A", fuente: "Programa Sumar Energía", fecha: "2023", url: null, tipoEvidencia: "Programa Electoral Oficial", nivelConfianza: "alta", verificada: true }
    }
  },
  {
    id: "podemos", nombre: "Podemos", color: "#6A2E68", comunidades: ["todas"],
    posiciones: {
      1: { opcion: "A", fuente: "Exigencias parlamentarias", fecha: "2024", url: "https://www.congreso.es", tipoEvidencia: "Votación Parlamentaria", nivelConfianza: "alta", verificada: true },
      2: { opcion: "B", fuente: "Proposición Ley Turismo", fecha: "2024", url: "https://www.congreso.es", tipoEvidencia: "Votación Parlamentaria", nivelConfianza: "alta", verificada: true },
      3: { opcion: "A", fuente: "Votaciones en el Congreso", fecha: "2024", url: "https://www.congreso.es", tipoEvidencia: "Votación Parlamentaria", nivelConfianza: "alta", verificada: true },
      4: { opcion: "A", fuente: "Proposición Ley Darias", fecha: "2023", url: "https://www.congreso.es", tipoEvidencia: "Votación Parlamentaria", nivelConfianza: "alta", verificada: true },
      5: { opcion: "A", fuente: "ILP Regularización", fecha: "2024", url: "https://www.congreso.es", tipoEvidencia: "Votación Parlamentaria", nivelConfianza: "alta", verificada: true },
      6: { opcion: "A", fuente: "Propuestas fiscales", fecha: "2024", url: "https://www.congreso.es", tipoEvidencia: "Votación Parlamentaria", nivelConfianza: "alta", verificada: true },
      7: { opcion: "A", fuente: "Documentos políticos", fecha: "2023", url: null, tipoEvidencia: "Programa Electoral Oficial", nivelConfianza: "alta", verificada: true },
      8: { opcion: "A", fuente: "Programa Marco", fecha: "2023", url: null, tipoEvidencia: "Programa Electoral Oficial", nivelConfianza: "alta", verificada: true },
      9: { opcion: "A", fuente: "Blindaje pensiones IPC", fecha: "2023", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2023-6967", tipoEvidencia: "Ley / Norma BOE", nivelConfianza: "alta", verificada: true },
      10: { opcion: "A", fuente: "Documentos marco", fecha: "2024", url: null, tipoEvidencia: "Síntesis en revisión", nivelConfianza: "media", verificada: false },
      11: { opcion: "B", fuente: "Documentos políticos", fecha: "2023", url: null, tipoEvidencia: "Programa Electoral Oficial", nivelConfianza: "alta", verificada: true },
      12: { opcion: "A", fuente: "Programa Europeas 2024", fecha: "2024", url: null, tipoEvidencia: "Programa Electoral Oficial", nivelConfianza: "alta", verificada: true },
      13: { opcion: "A", fuente: "Ley Familias Derechos Sociales", fecha: "2023", url: "https://www.congreso.es", tipoEvidencia: "Votación Parlamentaria", nivelConfianza: "alta", verificada: true },
      14: { opcion: null, fuente: "Rechazo LO 3/2024", fecha: "2024", url: "https://www.congreso.es", nota: "Propone rebajar mayorías a absoluta sin elección directa por jueces", tipoEvidencia: "Votación Parlamentaria", nivelConfianza: "alta", verificada: true },
      15: { opcion: "A", fuente: "LO 1/2023 Ministerio Igualdad", fecha: "2023", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2023-5364", tipoEvidencia: "Ley / Norma BOE", nivelConfianza: "alta", verificada: true },
      16: { opcion: "A", fuente: "LO 3/2021", fecha: "2021", url: null, tipoEvidencia: "Ley / Norma BOE", nivelConfianza: "alta", verificada: true },
      17: { opcion: "A", fuente: "Ley 4/2023 Ministerio Igualdad", fecha: "2023", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2023-5366", tipoEvidencia: "Ley / Norma BOE", nivelConfianza: "alta", verificada: true },
      18: { opcion: "A", fuente: "LO 10/2022 Libertad Sexual", fecha: "2022", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2022-14630", tipoEvidencia: "Ley / Norma BOE", nivelConfianza: "alta", verificada: true },
      19: { opcion: "A", fuente: "Iniciativas en el Congreso", fecha: "2024", url: "https://www.congreso.es", tipoEvidencia: "Votación Parlamentaria", nivelConfianza: "alta", verificada: true },
      20: { opcion: "A", fuente: "Programa Marco Energía", fecha: "2023", url: null, tipoEvidencia: "Programa Electoral Oficial", nivelConfianza: "alta", verificada: true }
    }
  },
  {
    id: "erc", nombre: "ERC", color: "#D99200", comunidades: ["cataluna"],
    posiciones: {
      1: { opcion: "A", fuente: "Regulación en Cataluña", fecha: "2024", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2023-12203", tipoEvidencia: "Ley / Norma BOE", nivelConfianza: "alta", verificada: true },
      2: { opcion: "B", fuente: "Regulación VUT Cataluña", fecha: "2024", url: null, tipoEvidencia: "Acuerdo Institucional", nivelConfianza: "alta", verificada: true },
      3: { opcion: "A", fuente: "Programa Electoral 2023", fecha: "2023", url: null, tipoEvidencia: "Programa Electoral Oficial", nivelConfianza: "alta", verificada: true },
      4: { opcion: "A", fuente: "Gestión Salut", fecha: "2024", url: null, tipoEvidencia: "Síntesis en revisión", nivelConfianza: "media", verificada: false },
      5: { opcion: "A", fuente: "ILP Regularización", fecha: "2024", url: "https://www.congreso.es", tipoEvidencia: "Votación Parlamentaria", nivelConfianza: "alta", verificada: true },
      6: { opcion: "A", fuente: "Impuestos en Cataluña", fecha: "2023", url: null, tipoEvidencia: "Programa Electoral Oficial", nivelConfianza: "alta", verificada: true },
      7: { opcion: "A", fuente: "Financiación Singular", fecha: "2024", url: null, tipoEvidencia: "Acuerdo Institucional", nivelConfianza: "alta", verificada: true },
      8: { opcion: "A", fuente: "Política educativa Cataluña", fecha: "2020", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2020-17264", tipoEvidencia: "Ley / Norma BOE", nivelConfianza: "alta", verificada: true },
      9: { opcion: "A", fuente: "RDL 2/2023", fecha: "2023", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2023-6967", tipoEvidencia: "Votación Parlamentaria", nivelConfianza: "alta", verificada: true },
      10: { opcion: "A", fuente: "Posición penal de Esquerra", fecha: "2024", url: null, tipoEvidencia: "Síntesis en revisión", nivelConfianza: "media", verificada: false },
      11: { opcion: "B", fuente: "Programa republicano", fecha: "2023", url: null, tipoEvidencia: "Programa Electoral Oficial", nivelConfianza: "alta", verificada: true },
      12: { opcion: "A", fuente: "Iniciativas Grupo Republicano", fecha: "2024", url: "https://www.congreso.es", tipoEvidencia: "Votación Parlamentaria", nivelConfianza: "alta", verificada: true },
      13: { opcion: "A", fuente: "Gratuidad I2 en Cataluña", fecha: "2023", url: null, tipoEvidencia: "Acuerdo Institucional", nivelConfianza: "alta", verificada: true },
      14: { opcion: null, fuente: "Voto contra LO 3/2024", fecha: "2024", url: "https://www.congreso.es", nota: "Propone reforma de mayorías, no elección por jueces", tipoEvidencia: "Votación Parlamentaria", nivelConfianza: "alta", verificada: true },
      15: { opcion: "A", fuente: "Voto a favor LO 1/2023", fecha: "2023", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2023-5364", tipoEvidencia: "Votación Parlamentaria", nivelConfianza: "alta", verificada: true },
      16: { opcion: "A", fuente: "Votaciones Eutanasia", fecha: "2021", url: null, tipoEvidencia: "Votación Parlamentaria", nivelConfianza: "alta", verificada: true },
      17: { opcion: "A", fuente: "Voto Ley 4/2023", fecha: "2023", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2023-5366", tipoEvidencia: "Votación Parlamentaria", nivelConfianza: "alta", verificada: true },
      18: { opcion: "A", fuente: "Legislación catalana", fecha: "2023", url: null, tipoEvidencia: "Programa Electoral Oficial", nivelConfianza: "alta", verificada: true },
      19: { opcion: "A", fuente: "Programa Electoral 2023", fecha: "2023", url: null, tipoEvidencia: "Programa Electoral Oficial", nivelConfianza: "alta", verificada: true },
      20: { opcion: "A", fuente: "L'Energètica catalana", fecha: "2023", url: null, tipoEvidencia: "Acuerdo Institucional", nivelConfianza: "alta", verificada: true }
    }
  },
  {
    id: "junts", nombre: "Junts per Catalunya", color: "#00A396", comunidades: ["cataluna"],
    posiciones: {
      1: { opcion: "B", fuente: "Voto en contra Ley Vivienda", fecha: "2023", url: "https://www.congreso.es", tipoEvidencia: "Votación Parlamentaria", nivelConfianza: "alta", verificada: true },
      2: { opcion: "C", fuente: "Posicionamiento Parlament VUT", fecha: "2024", url: null, tipoEvidencia: "Síntesis en revisión", nivelConfianza: "media", verificada: false },
      3: { opcion: "B", fuente: "Defensa Pymes Catalanas", fecha: "2024", url: "https://www.congreso.es", tipoEvidencia: "Votación Parlamentaria", nivelConfianza: "alta", verificada: true },
      4: { opcion: "B", fuente: "Defensa SISCAT", fecha: "2024", url: null, tipoEvidencia: "Programa Electoral Oficial", nivelConfianza: "alta", verificada: true },
      5: { opcion: "B", fuente: "Acuerdo inmigración multirreincidencia", fecha: "2024", url: "https://www.congreso.es", tipoEvidencia: "Síntesis en revisión", nivelConfianza: "media", verificada: false },
      6: { opcion: "C", fuente: "Programa Parlament 2024", fecha: "2024", url: null, nota: "Prioriza deflactaciones fiscales", tipoEvidencia: "Síntesis en revisión", nivelConfianza: "media", verificada: false },
      7: { opcion: "A", fuente: "Cesión 100% Tributos", fecha: "2024", url: null, tipoEvidencia: "Programa Electoral Oficial", nivelConfianza: "alta", verificada: true },
      8: { opcion: "B", fuente: "Defensa Servicio Educación Cataluña", fecha: "2024", url: null, tipoEvidencia: "Programa Electoral Oficial", nivelConfianza: "alta", verificada: true },
      9: { opcion: "A", fuente: "Votación pensiones IPC", fecha: "2023", url: "https://www.congreso.es", tipoEvidencia: "Votación Parlamentaria", nivelConfianza: "alta", verificada: true },
      10: { opcion: "B", fuente: "Proposición Ley Multirreincidencia/Desalojo", fecha: "2024", url: "https://www.congreso.es", tipoEvidencia: "Votación Parlamentaria", nivelConfianza: "alta", verificada: true },
      11: { opcion: "B", fuente: "Ponencia Republicana", fecha: "2023", url: null, tipoEvidencia: "Programa Electoral Oficial", nivelConfianza: "alta", verificada: true },
      12: { opcion: "B", fuente: "Posicionamiento OTAN/Europa", fecha: "2024", url: "https://www.congreso.es", tipoEvidencia: "Síntesis en revisión", nivelConfianza: "media", verificada: false },
      13: { opcion: "B", fuente: "Deducciones nacimiento Parlament", fecha: "2024", url: null, tipoEvidencia: "Síntesis en revisión", nivelConfianza: "media", verificada: false },
      14: { opcion: null, fuente: "Voto contra LO 3/2024", fecha: "2024", url: "https://www.congreso.es", nota: "Rechazo institucional al pacto bipartidista", tipoEvidencia: "Votación Parlamentaria", nivelConfianza: "alta", verificada: true },
      15: { opcion: "A", fuente: "Voto LO 1/2023", fecha: "2023", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2023-5364", tipoEvidencia: "Votación Parlamentaria", nivelConfianza: "alta", verificada: true },
      16: { opcion: "A", fuente: "Votación Ley Eutanasia", fecha: "2021", url: null, tipoEvidencia: "Votación Parlamentaria", nivelConfianza: "alta", verificada: true },
      17: { opcion: "A", fuente: "Voto Ley 4/2023", fecha: "2023", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2023-5366", tipoEvidencia: "Votación Parlamentaria", nivelConfianza: "alta", verificada: true },
      18: { opcion: "A", fuente: "Ley 17/2020 Cataluña", fecha: "2020", url: null, tipoEvidencia: "Programa Electoral Oficial", nivelConfianza: "alta", verificada: true },
      19: { opcion: "C", fuente: "Acuerdos decretos anticrisis", fecha: "2024", url: "https://www.congreso.es", tipoEvidencia: "Síntesis en revisión", nivelConfianza: "media", verificada: false },
      20: { opcion: "A", fuente: "Despliegue renovables industria", fecha: "2024", url: null, tipoEvidencia: "Síntesis en revisión", nivelConfianza: "media", verificada: false }
    }
  },
  {
    id: "bng", nombre: "BNG", color: "#007BC4", comunidades: ["galicia"],
    posiciones: {
      1: { opcion: "A", fuente: "Programa Electoral", fecha: "2024", url: null, tipoEvidencia: "Programa Electoral Oficial", nivelConfianza: "alta", verificada: true },
      2: { opcion: "B", fuente: "Regulación vivienda turística Galicia", fecha: "2024", url: null, tipoEvidencia: "Programa Electoral Oficial", nivelConfianza: "alta", verificada: true },
      3: { opcion: "A", fuente: "Programa Electoral", fecha: "2024", url: null, tipoEvidencia: "Programa Electoral Oficial", nivelConfianza: "alta", verificada: true },
      4: { opcion: "A", fuente: "Rescate SERGAS", fecha: "2024", url: null, tipoEvidencia: "Programa Electoral Oficial", nivelConfianza: "alta", verificada: true },
      5: { opcion: "A", fuente: "ILP Regularización", fecha: "2024", url: "https://www.congreso.es", tipoEvidencia: "Votación Parlamentaria", nivelConfianza: "alta", verificada: true },
      6: { opcion: "A", fuente: "Programa Electoral", fecha: "2024", url: null, tipoEvidencia: "Programa Electoral Oficial", nivelConfianza: "alta", verificada: true },
      7: { opcion: "A", fuente: "Concierto gallego", fecha: "2024", url: null, tipoEvidencia: "Programa Electoral Oficial", nivelConfianza: "alta", verificada: true },
      8: { opcion: "A", fuente: "Prioridad enseñanza pública", fecha: "2024", url: null, tipoEvidencia: "Programa Electoral Oficial", nivelConfianza: "alta", verificada: true },
      9: { opcion: "A", fuente: "Acuerdo RDL 2/2023", fecha: "2023", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2023-6967", tipoEvidencia: "Votación Parlamentaria", nivelConfianza: "alta", verificada: true },
      10: { opcion: "A", fuente: "Posición penal/reinserción", fecha: "2024", url: null, tipoEvidencia: "Síntesis en revisión", nivelConfianza: "media", verificada: false },
      11: { opcion: "B", fuente: "Principios BNG", fecha: "2023", url: null, tipoEvidencia: "Programa Electoral Oficial", nivelConfianza: "alta", verificada: true },
      12: { opcion: "A", fuente: "Iniciativas OTAN/Palestina", fecha: "2024", url: "https://www.congreso.es", tipoEvidencia: "Votación Parlamentaria", nivelConfianza: "alta", verificada: true },
      13: { opcion: "A", fuente: "Galiña Azul 0-3", fecha: "2024", url: null, tipoEvidencia: "Programa Electoral Oficial", nivelConfianza: "alta", verificada: true },
      14: { opcion: null, fuente: "Voto contra LO 3/2024", fecha: "2024", url: "https://www.congreso.es", nota: "Opuestos al pacto", tipoEvidencia: "Votación Parlamentaria", nivelConfianza: "alta", verificada: true },
      15: { opcion: "A", fuente: "Voto LO 1/2023", fecha: "2023", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2023-5364", tipoEvidencia: "Votación Parlamentaria", nivelConfianza: "alta", verificada: true },
      16: { opcion: "A", fuente: "Apoyo Ley Eutanasia", fecha: "2021", url: null, tipoEvidencia: "Votación Parlamentaria", nivelConfianza: "alta", verificada: true },
      17: { opcion: "A", fuente: "Voto Ley 4/2023", fecha: "2023", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2023-5366", tipoEvidencia: "Votación Parlamentaria", nivelConfianza: "alta", verificada: true },
      18: { opcion: "A", fuente: "Programa Electoral 2024", fecha: "2024", url: null, tipoEvidencia: "Programa Electoral Oficial", nivelConfianza: "alta", verificada: true },
      19: { opcion: "A", fuente: "Programa Electoral 2024", fecha: "2024", url: null, tipoEvidencia: "Programa Electoral Oficial", nivelConfianza: "alta", verificada: true },
      20: { opcion: "A", fuente: "Empresa pública energía", fecha: "2024", url: null, tipoEvidencia: "Programa Electoral Oficial", nivelConfianza: "alta", verificada: true }
    }
  },
  {
    id: "pnv", nombre: "EAJ-PNV", color: "#008000", comunidades: ["paisvasco", "navarra"],
    posiciones: {
      1: { opcion: "B", fuente: "Alokabide / Incentivos", fecha: "2024", url: null, tipoEvidencia: "Programa Electoral Oficial", nivelConfianza: "alta", verificada: true },
      2: { opcion: "A", fuente: "Regulación VUT Euskadi", fecha: "2024", url: null, nota: "Ley autonómica turismo regulando licencias", tipoEvidencia: "Síntesis en revisión", nivelConfianza: "media", verificada: false },
      3: { opcion: "B", fuente: "Marco relaciones laborales", fecha: "2024", url: "https://www.congreso.es", tipoEvidencia: "Votación Parlamentaria", nivelConfianza: "alta", verificada: true },
      4: { opcion: "A", fuente: "Osakidetza / Pacto Salud", fecha: "2024", url: null, tipoEvidencia: "Programa Electoral Oficial", nivelConfianza: "alta", verificada: true },
      5: { opcion: "B", fuente: "Pacto Vasco Migración", fecha: "2024", url: null, tipoEvidencia: "Acuerdo Institucional", nivelConfianza: "alta", verificada: true },
      6: { opcion: "B", fuente: "Haciendas Forales", fecha: "2024", url: null, tipoEvidencia: "Programa Electoral Oficial", nivelConfianza: "alta", verificada: true },
      7: { opcion: "A", fuente: "Autogobierno Bilateral", fecha: "2024", url: null, tipoEvidencia: "Programa Electoral Oficial", nivelConfianza: "alta", verificada: true },
      8: { opcion: "B", fuente: "Ley 17/2023 Educación", fecha: "2023", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2024-792", tipoEvidencia: "Ley / Norma BOE", nivelConfianza: "alta", verificada: true },
      9: { opcion: "A", fuente: "Apoyo RDL 2/2023", fecha: "2023", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2023-6967", tipoEvidencia: "Votación Parlamentaria", nivelConfianza: "alta", verificada: true },
      10: { opcion: "A", fuente: "Enmiendas Ley Eficiencia (reinserción y proporcionalidad)", fecha: "2024", url: "https://www.congreso.es", tipoEvidencia: "Votación Parlamentaria", nivelConfianza: "alta", verificada: true },
      11: { opcion: "B", fuente: "Tradición nacionalista vasca", fecha: "2024", url: "https://www.congreso.es", tipoEvidencia: "Síntesis en revisión", nivelConfianza: "media", verificada: false },
      12: { opcion: "B", fuente: "Programa Europeas", fecha: "2024", url: null, tipoEvidencia: "Programa Electoral Oficial", nivelConfianza: "alta", verificada: true },
      13: { opcion: "B", fuente: "Estrategia Vasca 2030 (Ayudas directas y consorcio)", fecha: "2024", url: null, tipoEvidencia: "Síntesis en revisión", nivelConfianza: "media", verificada: false },
      14: { opcion: "B", fuente: "LO 3/2024", fecha: "2024", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2024-15938", tipoEvidencia: "Votación Parlamentaria", nivelConfianza: "alta", verificada: true },
      15: { opcion: "A", fuente: "Voto LO 1/2023", fecha: "2023", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2023-5364", tipoEvidencia: "Votación Parlamentaria", nivelConfianza: "alta", verificada: true },
      16: { opcion: "A", fuente: "Votación Ley Eutanasia", fecha: "2021", url: null, tipoEvidencia: "Votación Parlamentaria", nivelConfianza: "alta", verificada: true },
      17: { opcion: "A", fuente: "Ley 4/2024 Trans Vasca", fecha: "2024", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2024-5222", tipoEvidencia: "Ley / Norma BOE", nivelConfianza: "alta", verificada: true },
      18: { opcion: "A", fuente: "Ley 1/2022 Igualdad", fecha: "2022", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2022-4982", tipoEvidencia: "Ley / Norma BOE", nivelConfianza: "alta", verificada: true },
      19: { opcion: "C", fuente: "Política industrial vasca", fecha: "2024", url: null, tipoEvidencia: "Programa Electoral Oficial", nivelConfianza: "alta", verificada: true },
      20: { opcion: "A", fuente: "Ley 4/2024 Clima Euskadi", fecha: "2024", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2024-4867", tipoEvidencia: "Ley / Norma BOE", nivelConfianza: "alta", verificada: true }
    }
  },
  {
    id: "bildu", nombre: "EH Bildu", color: "#8BA300", comunidades: ["paisvasco", "navarra"],
    posiciones: {
      1: { opcion: "A", fuente: "Ley 12/2023", fecha: "2023", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2023-12203", tipoEvidencia: "Ley / Norma BOE", nivelConfianza: "alta", verificada: true },
      2: { opcion: "B", fuente: "Proposición regulación VUT", fecha: "2024", url: null, tipoEvidencia: "Programa Electoral Oficial", nivelConfianza: "alta", verificada: true },
      3: { opcion: "A", fuente: "Programa Electoral", fecha: "2024", url: null, tipoEvidencia: "Programa Electoral Oficial", nivelConfianza: "alta", verificada: true },
      4: { opcion: "A", fuente: "Desprivatización Osakidetza", fecha: "2024", url: null, tipoEvidencia: "Programa Electoral Oficial", nivelConfianza: "alta", verificada: true },
      5: { opcion: "A", fuente: "ILP Regularización", fecha: "2024", url: "https://www.congreso.es", tipoEvidencia: "Votación Parlamentaria", nivelConfianza: "alta", verificada: true },
      6: { opcion: "A", fuente: "Propuestas fiscales EH Bildu", fecha: "2024", url: null, tipoEvidencia: "Programa Electoral Oficial", nivelConfianza: "alta", verificada: true },
      7: { opcion: "A", fuente: "Modelo soberanista", fecha: "2024", url: null, tipoEvidencia: "Programa Electoral Oficial", nivelConfianza: "alta", verificada: true },
      8: { opcion: "A", fuente: "Voto contra Ley Vasca (defensa 100% público)", fecha: "2023", url: null, tipoEvidencia: "Síntesis en revisión", nivelConfianza: "media", verificada: false },
      9: { opcion: "A", fuente: "RDL 2/2023", fecha: "2023", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2023-6967", tipoEvidencia: "Ley / Norma BOE", nivelConfianza: "alta", verificada: true },
      10: { opcion: "A", fuente: "Posición antipunitivista", fecha: "2024", url: null, tipoEvidencia: "Programa Electoral Oficial", nivelConfianza: "alta", verificada: true },
      11: { opcion: "B", fuente: "Programa independentista", fecha: "2024", url: null, tipoEvidencia: "Programa Electoral Oficial", nivelConfianza: "alta", verificada: true },
      12: { opcion: "A", fuente: "Iniciativas OTAN/Palestina", fecha: "2024", url: "https://www.congreso.es", tipoEvidencia: "Votación Parlamentaria", nivelConfianza: "alta", verificada: true },
      13: { opcion: "A", fuente: "Cuidados públicos", fecha: "2024", url: null, tipoEvidencia: "Programa Electoral Oficial", nivelConfianza: "alta", verificada: true },
      14: { opcion: null, fuente: "Rechazo LO 3/2024", fecha: "2024", url: "https://www.congreso.es", nota: "Propone reforma soberana", tipoEvidencia: "Votación Parlamentaria", nivelConfianza: "alta", verificada: true },
      15: { opcion: "A", fuente: "LO 1/2023", fecha: "2023", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2023-5364", tipoEvidencia: "Votación Parlamentaria", nivelConfianza: "alta", verificada: true },
      16: { opcion: "A", fuente: "Votación Ley Eutanasia", fecha: "2021", url: null, tipoEvidencia: "Votación Parlamentaria", nivelConfianza: "alta", verificada: true },
      17: { opcion: "A", fuente: "Leyes Trans", fecha: "2023", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2023-5366", tipoEvidencia: "Ley / Norma BOE", nivelConfianza: "alta", verificada: true },
      18: { opcion: "A", fuente: "Políticas feministas", fecha: "2024", url: null, tipoEvidencia: "Programa Electoral Oficial", nivelConfianza: "alta", verificada: true },
      19: { opcion: "A", fuente: "Tope precios básicos", fecha: "2024", url: null, tipoEvidencia: "Programa Electoral Oficial", nivelConfianza: "alta", verificada: true },
      20: { opcion: "A", fuente: "Transición ecológica EH Bildu", fecha: "2024", url: null, tipoEvidencia: "Programa Electoral Oficial", nivelConfianza: "alta", verificada: true }
    }
  },
  {
    id: "upn", nombre: "UPN", color: "#00599C", comunidades: ["navarra"],
    posiciones: {
      1: { opcion: "C", fuente: "Programa 2023", fecha: "2023", url: null, tipoEvidencia: "Programa Electoral Oficial", nivelConfianza: "alta", verificada: true },
      2: { opcion: "C", fuente: "Regulación municipal", fecha: "2024", url: null, tipoEvidencia: "Síntesis en revisión", nivelConfianza: "media", verificada: false },
      3: { opcion: "B", fuente: "Posición negociación", fecha: "2024", url: "https://www.congreso.es", tipoEvidencia: "Síntesis en revisión", nivelConfianza: "media", verificada: false },
      4: { opcion: "B", fuente: "Programa Sanidad Navarra", fecha: "2023", url: null, tipoEvidencia: "Programa Electoral Oficial", nivelConfianza: "alta", verificada: true },
      5: { opcion: "B", fuente: "Voto contra ILP", fecha: "2024", url: "https://www.congreso.es", tipoEvidencia: "Votación Parlamentaria", nivelConfianza: "alta", verificada: true },
      6: { opcion: "C", fuente: "Deflactación IRPF", fecha: "2024", url: null, tipoEvidencia: "Programa Electoral Oficial", nivelConfianza: "alta", verificada: true },
      7: { opcion: "B", fuente: "LORAFNA / Navarra", fecha: "2023", url: null, nota: "Foralidad dentro de la CE, equivalente al respeto institucional general", tipoEvidencia: "Programa Electoral Oficial", nivelConfianza: "alta", verificada: true },
      8: { opcion: "B", fuente: "Programa 2023", fecha: "2023", url: null, tipoEvidencia: "Programa Electoral Oficial", nivelConfianza: "alta", verificada: true },
      9: { opcion: "B", fuente: "Debates pensiones", fecha: "2023", url: "https://www.congreso.es", tipoEvidencia: "Síntesis en revisión", nivelConfianza: "media", verificada: false },
      10: { opcion: "B", fuente: "Voto desalojo rápido / penal", fecha: "2024", url: "https://www.congreso.es", tipoEvidencia: "Votación Parlamentaria", nivelConfianza: "alta", verificada: true },
      11: { opcion: "A", fuente: "Estatutos UPN", fecha: "2023", url: null, tipoEvidencia: "Programa Electoral Oficial", nivelConfianza: "alta", verificada: true },
      12: { opcion: "C", fuente: "Votaciones OTAN", fecha: "2024", url: "https://www.congreso.es", tipoEvidencia: "Votación Parlamentaria", nivelConfianza: "alta", verificada: true },
      13: { opcion: "B", fuente: "Deducciones hijos", fecha: "2023", url: null, tipoEvidencia: "Programa Electoral Oficial", nivelConfianza: "alta", verificada: true },
      14: { opcion: "A", fuente: "Votaciones CGPJ", fecha: "2024", url: "https://www.congreso.es", tipoEvidencia: "Votación Parlamentaria", nivelConfianza: "alta", verificada: true },
      15: { opcion: "B", fuente: "Voto contra LO 1/2023", fecha: "2023", url: "https://www.congreso.es", tipoEvidencia: "Votación Parlamentaria", nivelConfianza: "alta", verificada: true },
      16: { opcion: "B", fuente: "Votación Ley Eutanasia", fecha: "2021", url: null, tipoEvidencia: "Votación Parlamentaria", nivelConfianza: "alta", verificada: true },
      17: { opcion: "B", fuente: "Voto contra Ley 4/2023", fecha: "2023", url: "https://www.congreso.es", tipoEvidencia: "Votación Parlamentaria", nivelConfianza: "alta", verificada: true },
      18: { opcion: "A", fuente: "Pacto de Estado", fecha: "2024", url: "https://www.congreso.es", tipoEvidencia: "Votación Parlamentaria", nivelConfianza: "alta", verificada: true },
      19: { opcion: "C", fuente: "Programa 2023", fecha: "2023", url: null, tipoEvidencia: "Programa Electoral Oficial", nivelConfianza: "alta", verificada: true },
      20: { opcion: "A", fuente: "Transición competitiva", fecha: "2023", url: null, tipoEvidencia: "Síntesis en revisión", nivelConfianza: "media", verificada: false }
    }
  },
  {
    id: "cc", nombre: "Coalición Canaria", color: "#D99B00", comunidades: ["canarias"],
    posiciones: {
      1: { opcion: "B", fuente: "Decreto-ley 1/2024 Canarias", fecha: "2024", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2024-9142", tipoEvidencia: "Ley / Norma BOE", nivelConfianza: "alta", verificada: true },
      2: { opcion: "A", fuente: "Regulación VUT Canarias", fecha: "2024", url: null, tipoEvidencia: "Acuerdo Institucional", nivelConfianza: "alta", verificada: true },
      3: { opcion: "B", fuente: "Negociación colectiva Canarias", fecha: "2024", url: null, tipoEvidencia: "Síntesis en revisión", nivelConfianza: "media", verificada: false },
      4: { opcion: "B", fuente: "Gestión SCS", fecha: "2024", url: null, tipoEvidencia: "Acuerdo Institucional", nivelConfianza: "alta", verificada: true },
      5: { opcion: "B", fuente: "Pacto Canario Migración", fecha: "2024", url: "https://www.congreso.es", tipoEvidencia: "Acuerdo Institucional", nivelConfianza: "alta", verificada: true },
      6: { opcion: "C", fuente: "DL 5/2023 Canarias", fecha: "2023", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2023-22015", nota: "Bonificación 99% sucesiones", tipoEvidencia: "Ley / Norma BOE", nivelConfianza: "alta", verificada: true },
      7: { opcion: "A", fuente: "Agenda Canaria REF", fecha: "2024", url: null, nota: "Defensa REF equivalente", tipoEvidencia: "Acuerdo Institucional", nivelConfianza: "alta", verificada: true },
      8: { opcion: "B", fuente: "Educación CC", fecha: "2023", url: null, tipoEvidencia: "Síntesis en revisión", nivelConfianza: "media", verificada: false },
      9: { opcion: "A", fuente: "Voto revalorización pensiones", fecha: "2023", url: "https://www.congreso.es", tipoEvidencia: "Votación Parlamentaria", nivelConfianza: "alta", verificada: true },
      10: { opcion: "B", fuente: "Agilización judicial", fecha: "2024", url: "https://www.congreso.es", tipoEvidencia: "Síntesis en revisión", nivelConfianza: "media", verificada: false },
      11: { opcion: "A", fuente: "Respeto CE 1978", fecha: "2023", url: null, tipoEvidencia: "Programa Electoral Oficial", nivelConfianza: "alta", verificada: true },
      12: { opcion: "B", fuente: "Posicionamiento Congreso", fecha: "2024", url: "https://www.congreso.es", tipoEvidencia: "Síntesis en revisión", nivelConfianza: "media", verificada: false },
      13: { opcion: "A", fuente: "Aulas 0-3 Canarias", fecha: "2024", url: null, tipoEvidencia: "Acuerdo Institucional", nivelConfianza: "alta", verificada: true },
      14: { opcion: "B", fuente: "Voto a favor LO 3/2024", fecha: "2024", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2024-15938", tipoEvidencia: "Votación Parlamentaria", nivelConfianza: "alta", verificada: true },
      15: { opcion: "A", fuente: "Mantenimiento ley plazos", fecha: "2023", url: null, tipoEvidencia: "Síntesis en revisión", nivelConfianza: "media", verificada: false },
      16: { opcion: "A", fuente: "Posicionamiento Eutanasia", fecha: "2021", url: null, tipoEvidencia: "Votación Parlamentaria", nivelConfianza: "alta", verificada: true },
      17: { opcion: "A", fuente: "Ley 2/2021 Trans Canarias", fecha: "2021", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2021-10588", tipoEvidencia: "Ley / Norma BOE", nivelConfianza: "alta", verificada: true },
      18: { opcion: "A", fuente: "Instituto Canario Igualdad", fecha: "2024", url: null, tipoEvidencia: "Acuerdo Institucional", nivelConfianza: "alta", verificada: true },
      19: { opcion: "C", fuente: "Agenda Canaria (ayudas selectivas)", fecha: "2024", url: "https://www.congreso.es", tipoEvidencia: "Acuerdo Institucional", nivelConfianza: "alta", verificada: true },
      20: { opcion: "A", fuente: "Ley 6/2022 Renovables Canarias", fecha: "2022", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2023-1978", tipoEvidencia: "Ley / Norma BOE", nivelConfianza: "alta", verificada: true }
    }
  }
];
