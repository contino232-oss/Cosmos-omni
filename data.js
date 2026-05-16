/* ==========================================================================
   COSMOS OMNI 2026 - DATA CORE (Definitivo y Completo)
   ========================================================================== */

// 1. SIGNOS ZODIACALES (Con glifos, elementos, modalidades, regencias dobles y textos reales)
const ZODIACO = [
    { n: "Aries", e: "Fuego", m: "Cardinal", r: "Marte", rm: "Marte", g: "♈", d: "Fuerza de inicio, coraje, liderazgo e impulso primario. Representa el despertar de la consciencia y la primavera del ser." }, 
    { n: "Tauro", e: "Tierra", m: "Fijo", r: "Venus", rm: "Venus", g: "♉", d: "Consolidación material, paciencia, placer sensorial, enraizamiento y valor propio. Conexión orgánica con la Madre Tierra." }, 
    { n: "Géminis", e: "Aire", m: "Mutable", r: "Mercurio", rm: "Mercurio", g: "♊", d: "Dualidad, comunicación, aprendizaje constante, puentes lógicos y adaptabilidad mental. El mensajero entre mundos." }, 
    { n: "Cáncer", e: "Agua", m: "Cardinal", r: "Luna", g: "♋", d: "Protección, emotividad profunda, raíces familiares, matriz arquetípica y memoria celular. El refugio del alma." }, 
    { n: "Leo", e: "Fuego", m: "Fijo", r: "Sol", g: "♌", d: "Expresión del ser, soberanía, creatividad radiante, centro cardíaco y orgullo sano. El fuego que brilla por sí mismo." }, 
    { n: "Virgo", e: "Tierra", m: "Mutable", r: "Mercurio", g: "♍", d: "Análisis, purificación, servicio devocional, orden sistémico y optimización minuciosa del plano físico y la salud." },
    { n: "Libra", e: "Aire", m: "Cardinal", r: "Venus", g: "♎", d: "Armonía, justicia relacional, diplomacia, estética, el arte del encuentro y el equilibrio perfecto del espejo interno." }, 
    { n: "Escorpio", e: "Agua", m: "Fijo", r: "Marte", rm: "Plutón", g: "♏", d: "Transmutación de la sombra, poder alquímico, sexualidad sagrada, crisis evolutivas y muerte del ego para el renacimiento." }, 
    { n: "Sagitario", e: "Fuego", m: "Mutable", r: "Júpiter", rm: "Júpiter", g: "♐", d: "Búsqueda de la verdad, expansión filosófica, altos ideales, optimismo y fe cósmica. La flecha lanzada al infinito." }, 
    { n: "Capricornio", e: "Tierra", m: "Cardinal", r: "Saturno", rm: "Saturno", g: "♑", d: "Maestría personal, autosuficiencia, límites maduros, estructura arquitectónica, perseverancia y tiempo constructivo." }, 
    { n: "Acuario", e: "Aire", m: "Fijo", r: "Saturno", rm: "Urano", g: "♒", d: "Revolución de la consciencia, redes humanas, libertad individual, disrupción tecnológica y visión colectiva de futuro." }, 
    { n: "Piscis", e: "Agua", m: "Mutable", r: "Júpiter", rm: "Neptuno", g: "♓", d: "Disolución mística, amor incondicional, compasión universal, océano inconsciente, arte sagrado y retorno a la Fuente." }
];

// 2. BIBLIOTECA DIVINA / MANUAL DE ASTROS Y ARQUETIPOS
const ARQUETIPOS = [
    { p: "Sol", d: "Apolo", t: "Luminar", m: "Consciencia pura, identidad radiante, vitalidad y el propósito central del héroe natal.", r: "Leo" },
    { p: "Luna", d: "Selene / Artemisa", t: "Luminar", m: "Mundo emocional, memoria uterina, mecanismos de defensa y el subconsciente.", r: "Cáncer" },
    { p: "Mercurio", d: "Hermes", t: "Personal", m: "Procesos cognitivos, comunicación, enlaces lógicos, comercio y traslados escritos.", r: "Géminis y Virgo" },
    { p: "Venus", d: "Afrodita", t: "Personal", m: "Magnetismo, sistema de valores, relaciones, estética, erotismo y disfrute terrenal.", r: "Tauro y Libra" },
    { p: "Marte", d: "Ares", t: "Personal", m: "Fuerza de eyección, deseo motor, asertividad, corte y capacidad de conquista.", r: "Aries" },
    { p: "Júpiter", d: "Zeus", t: "Social", m: "Expansión de consciencia, búsqueda de sentido, abundancia, buena fortuna y cosmovisión.", r: "Sagitario" },
    { p: "Saturno", d: "Cronos", t: "Social", m: "El guardián del umbral. Leyes de la materia, contracción, madurez, karma y tiempo cíclico.", r: "Capricornio" },
    { p: "Urano", d: "Urano", t: "Transpersonal", m: "La mente superior. Despertar abrupto, discontinuidad, saltos cuánticos y liberación.", r: "Acuario" },
    { p: "Neptuno", d: "Poseidón", t: "Transpersonal", m: "Amor universal, canalización mediúmnica, ilusión, engaño y el plano de los sueños.", r: "Piscis" },
    { p: "Plutón", d: "Hades", t: "Transpersonal", m: "Poder de demolición oculta, tabúes, control de masas, fosas de regeneración y verdad cruda.", r: "Escorpio" },
    { p: "Quirón", d: "El Centauro Herido", t: "Centauro", m: "Punto de dolor crónico intransferible que encierra las llaves de la maestría sanadora.", r: "Sagitario" },
    { p: "Lilith", d: "Luna Negra", t: "Punto Vacío", m: "La sombra reprimida, el instinto indomable, la castración y el poder salvaje femenino.", r: "Escorpio" },
    { p: "Ceres", d: "Deméter", t: "Asteroide", m: "Sustento nutricional, procesos de duelo, productividad y ecología personal.", r: "Virgo" },
    { p: "Palas Atenea", d: "Atenea", t: "Asteroide", m: "Sabiduría estratégica, patrones geométricos, defensa justa e intelecto político.", r: "Acuario" },
    { p: "Vesta", d: "Hestia", t: "Asteroide", m: "Preservación del fuego interno, consagración, pureza focalizada y auto-contención.", r: "Virgo y Escorpio" },
    { p: "Juno", d: "Hera", t: "Asteroide", m: "Psicología del compromiso relacional, pactos de lealtad, equidad y codependencia.", r: "Libra" },
    { p: "Nodo Norte", d: "Dharma", t: "Eje Geométrico", m: "La brújula evolutiva. Zona de incomodidad que alberga el desarrollo futuro del alma.", r: "Eje del Destino" },
    { p: "Nodo Sur", d: "Karma", t: "Eje Geométrico", m: "Zona de confort automatizada, talentos innatos y vicios de vidas pasadas a refinar.", r: "Eje del Destino" },
    { p: "Rueda Fortuna", d: "Tique", t: "Punto Árabe", m: "Punto de máxima fluidez donde el Sol, la Luna y el Ascendente convergen en dicha.", r: "Puntos Sensibles" },
    { p: "Pto. Infortunio", d: "Némesis", t: "Punto Árabe", m: "El nodo de fricción kármica donde el alma es pulida mediante pruebas severas.", r: "Puntos Sensibles" }
];

// 3. MAPA DE LAS 12 CASAS ASTROLÓGICAS
const CASAS_DATA = [
    { titulo: "Casa I", palabra_clave: "El Yo, el Ascendente", regencia: "Aries / Marte", clasificacion: "Angular", significado: "Gobierna la personalidad externa, la primera impresión, el cuerpo físico, la energía de destino que se viene a integrar y los comienzos de proyectos vitales." },
    { titulo: "Casa II", palabra_clave: "Recursos y Valores", regencia: "Tauro / Venus", clasificacion: "Sucedánea", significado: "Administra el sustento material, el dinero autogenerado, los talentos natos, la escala de valores personales y el nivel de merecimiento y autoestima." },
    { titulo: "Casa III", palabra_clave: "Entorno Cercano e Intelecto", regencia: "Géminis / Mercurio", clasificacion: "Cadente", significado: "Rige la mente lógica, el estilo de comunicación diaria, los hermanos, vecinos, los viajes cortos y los procesos de aprendizaje técnico." },
    { titulo: "Casa IV", palabra_clave: "El Fondo del Cielo (Raíces)", regencia: "Cáncer / Luna", clasificacion: "Angular", significado: "Representa la base emocional de la psique, la intimidad del hogar, los ancestros, la herencia familiar y las condiciones del final de la vida." },
    { titulo: "Casa V", palabra_clave: "Identidad Creativa y Gozo", regencia: "Leo / Sol", clasificacion: "Sucedánea", significado: "Zona de autoexpresión genuina, romances, procreación e hijos, obras de arte, pasatiempos, apuestas y el desarrollo del orgullo creativo." },
    { titulo: "Casa VI", palabra_clave: "Rutina, Salud y Servicio", regencia: "Virgo / Mercurio", clasificacion: "Cadente", significado: "Determina los hábitos cotidianos, el trabajo de subordinación, el cuidado del templo corporal, la somatización y el servicio práctico a otros." },
    { titulo: "Casa VII", palabra_clave: "El Descendente (Vínculos)", regencia: "Libra / Venus", clasificacion: "Angular", significado: "Espacio de los compromisos formales, matrimonios, contratos legales, socios y enemigos declarados. El espejo relacional del alma." },
    { titulo: "Casa VIII", palabra_clave: "Transmutación y Sombras", regencia: "Escorpio / Plutón", clasificacion: "Sucedánea", significado: "Crisis profundas de transformación, el manejo del dinero ajeno (herencias/impuestos), la sexualidad alquímica, tabúes y procesos de muerte-resurrección." },
    { titulo: "Casa IX", palabra_clave: "Pensamiento Elevado y Viajes", regencia: "Sagitario / Júpiter", clasificacion: "Cadente", significado: "Gobierna los estudios universitarios, la filosofía de vida, las cosmovisiones espirituales, el extranjero y las grandes travesías expansivas." },
    { titulo: "Casa X", palabra_clave: "El Medio Cielo (Profesión)", regencia: "Capricornio / Saturno", clasificacion: "Angular", significado: "El punto más alto del cielo. Estatus público, reputación profesional, vocación, realización social, jefes y la figura de autoridad interna." },
    { titulo: "Casa XI", palabra_clave: "Grupos e Ideales Colectivos", regencia: "Acuario / Urano", clasificacion: "Sucedánea", significado: "Rige las asambleas, amistades fraternas, redes sociales, utopías humanitarias y proyectos colectivos a mediano y largo plazo." },
    { titulo: "Casa XII", palabra_clave: "El Inconsciente Colectivo", regencia: "Piscis / Neptuno", clasificacion: "Cadente", significado: "Espacio de reclusión, disolución del ego, karma kármico acumulado, sacrificios, sueños premonitorios y fusión absoluta con la Totalidad cósmica." }
];

// 4. EL HERBOLARIO MÍSTICO / BOTÁNICA EN RA RESONANCIA ASTRAL
const HERBOLARIO_DATA = [
    { nombre: "Jazmín (Oficinale)", elemento: "Agua", planeta: "Luna", propiedades: "Apertura del tercer ojo, inducción al plano de los sueños lúcidos, alivio de tensiones lunares e incremento del magnetismo nocturno.", uso: "Infusión aromática de flores antes del descanso o sahumerio sobre el altar místico." },
    { nombre: "Oregano (Vulgare)", elemento: "Fuego", planeta: "Mercurio / Marte", propiedades: "Protección psíquica, limpieza áurica severa, corte de parásitos energéticos en el plexo solar e inyección de vigor físico.", uso: "Tintura madre en base alcohólica macerada durante un ciclo lunar completo o defumación." },
    { nombre: "Romero (Rosmarinus)", elemento: "Fuego", planeta: "Sol", propiedades: "Claridad mental absoluta, reactivación del enfoque, purificación de ambientes densos y anclaje de la energía del éxito.", uso: "Baño ritual de descarga o sahumerio directo de ramas secas en días de Luna Nueva." },
    { nombre: "Lavanda (Angustifolia)", elemento: "Aire", planeta: "Mercurio", propiedades: "Pacificación del sistema nervioso central, balance del chakra laríngeo y transmutación de ondas de ansiedad mental.", uso: "Aceite esencial puro aplicado en sienes o almohadones durante fases retrógradas." }
];

// 5. MAZO DE TAROT RIDER-WAITE (Mayores y Menores con URLs públicas ultraestables de Wikimedia y descripciones enriquecidas)
const TAROT_DATA = [
    { id: "loco", tipo: "mayores", numero: "0", nombre: "El Loco", url_publica: "https://upload.wikimedia.org/wikipedia/commons/0/0b/RWS_Tarot_0_Fool.jpg", descripcion: "Representa los comienzos puros, el salto de fe al vacío, la libertad absoluta de ataduras terrenales, la espontaneidad ingenua y el inicio del viaje espiritual.", consejo: "Es momento de confiar en el Universo y dar ese paso sin calcular tanto. Despójate del miedo al ridículo y lánzate." },
    { id: "mago", tipo: "mayores", numero: "I", nombre: "El Mago", url_publica: "https://upload.wikimedia.org/wikipedia/commons/d/de/RWS_Tarot_01_Magician.jpg", descripcion: "Manifestación consciente, canalización de la luz celestial hacia la materia, fuerza de voluntad inquebrantable y maestría técnica de los elementos.", consejo: "Tenés todas las herramientas necesarias sobre tu mesa de trabajo. Enfoca tu intención y actúa ya; sos el alquimista de tu realidad." },
    { id: "sacerdotisa", tipo: "mayores", numero: "II", nombre: "La Sacerdotisa", url_publica: "https://upload.wikimedia.org/wikipedia/commons/8/88/RWS_Tarot_02_High_Priestess.jpg", descripcion: "Intuición mística profunda, misterios ocultos detrás del velo del templo, acumulación silenciosa de sabiduría y pasividad receptiva divina.", consejo: "No busques respuestas en el plano exterior. Entra en meditación silenciosa y escucha el susurro sutil de tu intuición subconsciente." },
    { id: "emperatriz", tipo: "mayores", numero: "III", nombre: "La Emperatriz", url_publica: "https://upload.wikimedia.org/wikipedia/commons/d/d2/RWS_Tarot_03_Empress.jpg", descripcion: "Abundancia desbordante, fertilidad material, creatividad orgánica, conexión profunda con la naturaleza, gestación y placeres sensoriales.", consejo: "Permítete disfrutar de la belleza del plano físico y nutre tus proyectos con amor. Es una fase excelente para sembrar y parir ideas." },
    { id: "emperador", tipo: "mayores", numero: "IV", nombre: "El Emperador", url_publica: "https://upload.wikimedia.org/wikipedia/commons/c/c3/RWS_Tarot_04_Emperor.jpg", descripcion: "Estructura firme, leyes estables, autoridad justa, protección del territorio, enfoque analítico y establecimiento de límites claros e inamovibles.", consejo: "Asume el control y liderazgo de tu situación con templanza. Pon orden, crea un plan de acción riguroso y protege tus fronteras." },
    { id: "hierofante", tipo: "mayores", numero: "V", nombre: "El Hierofante", url_publica: "https://upload.wikimedia.org/wikipedia/commons/8/8d/RWS_Tarot_05_Hierophant.jpg", descripcion: "Saber tradicional ortodoxo, puentes espirituales institucionales, mentoría, códigos morales compartidos y ritos sagrados de pasaje.", consejo: "Busca el consejo de personas con mayor experiencia o apóyate en estructuras académicas y filosóficas consagradas." },
    { id: "enamorados", tipo: "mayores", numero: "VI", nombre: "Los Enamorados", url_publica: "https://upload.wikimedia.org/wikipedia/commons/3/3a/RWS_Tarot_06_Lovers.jpg", descripcion: "Encrucijadas existenciales, alineación sagrada de valores internos, el espejo del alma a través de las relaciones y elecciones del corazón.", consejo: "Toma decisiones basadas en la verdad de tu corazón. No busques complacer mandatos ajenos; alinea tu deseo con tus principios." },
    { id: "carro", tipo: "mayores", numero: "VII", nombre: "El Carro", url_publica: "https://upload.wikimedia.org/wikipedia/commons/9/9b/RWS_Tarot_07_Chariot.jpg", descripcion: "Movimiento acelerado hacia el éxito, victoria obtenida por la fuerza de voluntad, control consciente de las emociones opuestas en conflicto.", consejo: "Empuja con determinación sin desviar la mirada de la meta. Agarra con fuerza las riendas de tu vida y avanza sobre los obstáculos." },
    // Arcanos Menores
    { id: "as-espadas", tipo: "menores", numero: "As", nombre: "As de Espadas", url_publica: "https://upload.wikimedia.org/wikipedia/commons/1/1a/Swords01.jpg", descripcion: "Gran avance intelectual, revelación de la verdad oculta, cortes quirúrgicos de lazos viciados y máxima lucidez objetiva.", consejo: "Usa la espada del intelecto para diseccionar el problema. Di la verdad cruda aunque duela; la claridad te liberará." },
    { id: "as-bastos", tipo: "menores", numero: "As", nombre: "As de Bastos", url_publica: "https://upload.wikimedia.org/wikipedia/commons/1/11/Wands01.jpg", descripcion: "Chispa inicial de pasión, dinamismo sexual y emprendedor, inspiración volcánica y coraje puro para empezar de cero.", consejo: "Sigue el pulso que enciende tus vísceras. Es el momento perfecto para iniciar un proyecto de alta demanda energética." },
    { id: "as-copas", tipo: "menores", numero: "As", nombre: "As de Copas", url_publica: "https://upload.wikimedia.org/wikipedia/commons/3/36/Cups01.jpg", descripcion: "Despertar místico y emocional, surgimiento de amores puros, renovación de la energía psíquica y sanación del corazón ancestral.", consejo: "Abre tus canales afectivos y permítete la vulnerabilidad. Recibe el amor y el perdón con los brazos abiertos." },
    { id: "as-oros", tipo: "menores", numero: "As", nombre: "As de Oros", url_publica: "https://upload.wikimedia.org/wikipedia/commons/f/fd/Pentalces01.jpg", descripcion: "Anclaje de prosperidad material, oportunidades de inversión sumamente fértiles, salud física fortalecida y herencias sólidas.", consejo: "Acepta los regalos del plano terrenal. Pon las manos en la tierra y construye algo duradero; el suelo está listo para producir." }
];

// 6. LÍNEA DE TIEMPO DEL AÑO (Eventos reales de 2026 para el slider)
const TIMELINE_DATA = [
    { fecha: "26 Ene 2026", evento: "Nodo Norte ingresa a Acuario", desc: "El foco del destino colectivo se desplaza hacia las redes humanas, la disrupción y las comunidades libres de control." },
    { fecha: "14 Feb 2026", evento: "Saturno ingresa a Aries", desc: "Inicia un ciclo de reestructuración radical de la voluntad individual y de la gestión de la asertividad global." },
    { fecha: "20 Mar 2026", evento: "Equinoccio / Sol en Aries", desc: "Inicio formal del Año Astrológico 2026. Pulso vital de renovación cósmica." },
    { attributes: "20 Abr 2026", fecha: "28 Abr 2026", evento: "Neptuno ingresa a Aries", desc: "Disolución de viejas identidades colectivas. Espiritualización del impulso y el guerrero interno." },
    { fecha: "16 May 2026", evento: "Portal del Clima Actual", desc: "Conjunción geométrica menor. Luna transitando el plano mensual de cálculos matemáticos precisos." },
    { fecha: "29 Jun 2026", evento: "Mercurio Retrógrado en Cáncer", desc: "Revisión profunda de los lazos familiares, memorias de la infancia y patrones de apego habitacional." }
];

// 7. ECLIPSES Y LUNACIONES CRÍTICAS (Para dotar de contenido real a la sección de Intensidad Astral)
const LUNACIONES_DATA = [
    { fecha: "17 Feb 2026", tipo: "Eclipse Solar Anular en Acuario", impacto: "Mutación drástica en la gestión de colectivos y redes tecnológicas globales." },
    { fecha: "03 Mar 2026", tipo: "Eclipse Lunar Total en Virgo", impacto: "Purificación masiva de dinámicas laborales, somatizaciones y rutinas obsoletas del cuerpo." },
    { fecha: "12 Ago 2026", tipo: "Eclipse Solar Total en Leo", impacto: "Caída de viejos liderazgos egocéntricos y renacimiento de la soberanía personal." },
    { fecha: "28 Ago 2026", tipo: "Eclipse Lunar Parcial en Piscis", impacto: "Culminación kármica y disolución de antiguos sacrificios espirituales innecesarios." }
];

// 8. CRONOGRAMA DE RETROGRADACIONES REALES 2026
const RETROGRADACIONES_2026 = [
    { p: "Mercurio", r: "29 Jun - 23 Jul", s: "Sombras: 12 Jun / 14 Ago", g: "15° Cáncer", e: "Post-Sombra", c: "#81D4FA" },
    { p: "Plutón", r: "30 Abr - 13 Oct", s: "Fase de Desmantelamiento Psíquico", g: "04° Acuario", e: "RETRÓGRADO", c: "#ba68c8" },
    { p: "Saturno", r: "13 Jul - 28 Nov", s: "Sombra desde 28 Mar", g: "06° Aries", e: "En Sombra", c: "#9e9e9e" },
    { p: "Quirón", r: "18 Jul - 15 Dic", s: "Sombra desde 26 Mar", g: "28° Aries", e: "En Sombra", c: "#a1887f" },
    { p: "Urano", r: "01 Sep - 30 Ene (2027)", s: "Estacionario en Géminis", g: "02° Géminis", e: "Directo", c: "#4db6ac" }
];

// 9. ALMANAQUE DE VACÍOS DE CURSO LUNAR MAYO 2026
const VACIOS_2026 = {
    1: "Inicia 03:15 - Entra Escorpio 09:10",
    5: "Inicia 14:22 - Entra Sagitario 18:40",
    10: "Inicia 22:10 - Entra Piscis 08:30 (Día 11)",
    11: "Luna en Piscis - Flujo emocional profundo",
    16: "Inicia 05:40 - Entra Géminis 12:15 (Hoy)",
    18: "Inicia 11:00 - Entra Cáncer 15:45",
    25: "Inicia 04:20 - Entra Libra 09:12"
};

// 10. TRÁNSITOS BASE CLAVE 2026 (Planetas lentos y asteroides)
const TRANSITOS_BASE = [
    { p: "Sol", s: "Tauro", g: "26", e: "D", id: 0 },
    { p: "Mercurio", s: "Aries", g: "25", e: "Sombra", id: 2 },
    { p: "Venus", s: "Aries", g: "12", e: "D", id: 3 },
    { p: "Marte", s: "Géminis", g: "04", e: "D", id: 4 },
    { p: "Júpiter", s: "Cáncer", g: "18", e: "D", id: 5 },
    { p: "Saturno", s: "Aries", g: "02", e: "Sombra", id: 6 },
    { p: "Urano", s: "Géminis", g: "01", e: "D", id: 7 },
    { p: "Neptuno", s: "Aries", g: "01", e: "D", id: 8 },
    { p: "Plutón", s: "Acuario", g: "03", e: "R", id: 9 },
    { p: "Quirón", s: "Aries", g: "24", e: "D", id: 10 },
    { p: "Lilith", s: "Virgo", g: "08", e: "D", id: 11 },
    { p: "Ceres", s: "Sagitario", g: "12", e: "D", id: 12 },
    { p: "Palas Atenea", s: "Acuario", g: "10", e: "D", id: 13 },
    { p: "Vesta", s: "Virgo", g: "14", e: "D", id: 14 },
    { p: "Juno", s: "Libra", g: "03", e: "D", id: 15 },
    { p: "Nodo Norte", s: "Piscis", g: "15", e: "R", id: 16 },
    { p: "Nodo Sur", s: "Virgo", g: "15", e: "R", id: 17 },
    { p: "Rueda Fortuna", s: "Cáncer", g: "22", e: "D", id: 18 },
    { p: "Pto. Infortunio", s: "Tauro", g: "18", e: "D", id: 19 }
];
