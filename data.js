/* ==========================================================================
   COSMOS OMNI 2026 - DATA CORE (Unificado, Expandido y Blindado)
   ========================================================================== */

// 1. EL CÍRCULO ZODIACAL (Matriz base para cálculos de posición y dignidades)
const ZODIACO = [
    { n: "Aries", e: "Fuego", m: "Cardinal", r: "Marte" }, 
    { n: "Tauro", e: "Tierra", m: "Fijo", r: "Venus" }, 
    { n: "Géminis", e: "Aire", m: "Mutable", r: "Mercurio" }, 
    { n: "Cáncer", e: "Agua", m: "Cardinal", r: "Luna" }, 
    { n: "Leo", e: "Fuego", m: "Fijo", r: "Sol" }, 
    { n: "Virgo", e: "Tierra", m: "Mutable", r: "Mercurio" },
    { n: "Libra", e: "Aire", m: "Cardinal", r: "Venus" }, 
    { n: "Escorpio", e: "Agua", m: "Fijo", r: "Plutón / Marte" }, 
    { n: "Sagitario", e: "Fuego", m: "Mutable", r: "Júpiter" }, 
    { n: "Capricornio", e: "Tierra", m: "Cardinal", r: "Saturno" }, 
    { n: "Acuario", e: "Aire", m: "Fijo", r: "Urano / Saturno" }, 
    { n: "Piscis", e: "Agua", m: "Mutable", r: "Neptuno / Júpiter" }
];

// 2. INTERPRETACIÓN MANUAL DE ASTROS Y ARQUETIPOS DIVINOS
const ARQUETIPOS = [
    { p: "Sol", d: "Apolo", t: "Luminar", m: "Consciencia, identidad radiante y propósito vital.", r: "Leo" },
    { p: "Luna", d: "Artemisa / Selene", t: "Luminar", m: "Mundo emocional, memoria, refugio y subconsciente.", r: "Cáncer" },
    { p: "Mercurio", d: "Hermes", t: "Personal", m: "Comunicación, procesos mentales, lógica y traslados.", r: "Géminis/Virgo" },
    { p: "Venus", d: "Afrodita", t: "Personal", m: "Amor, vínculos, estética, valores y placer.", r: "Tauro/Libra" },
    { p: "Marte", d: "Ares", t: "Personal", m: "Deseo, acción, asertividad y fuerza de voluntad.", r: "Aries" },
    { p: "Júpiter", d: "Zeus", t: "Social", m: "Expansión, fe, abundancia, filosofía y crecimiento.", r: "Sagitario" },
    { p: "Saturno", d: "Cronos", t: "Social", m: "Tiempo, estructura, límites, responsabilidad y maestría.", r: "Capricornio" },
    { p: "Urano", d: "Urano (Cielo)", t: "Transpersonal", m: "Chispa de genio, liberación, revolución e intuición.", r: "Acuario" },
    { p: "Neptuno", d: "Poseidón", t: "Transpersonal", m: "Espiritualidad, sueños, disolución de límites y arte.", r: "Piscis" },
    { p: "Plutón", d: "Hades", t: "Transpersonal", m: "Transformación radical, muerte, renacimiento y poder profundo.", r: "Escorpio" },
    { p: "Quirón", d: "El Centauro", t: "Centauro", m: "La herida que se convierte en medicina para otros.", r: "Sagitario" },
    { p: "Lilith", d: "Luna Negra", t: "Punto", m: "Sombra, rebelión, instinto primario y poder indómito.", r: "Escorpio" },
    { p: "Ceres", d: "Deméter", t: "Asteroide", m: "Nutrición, maternidad, productividad y ciclos de cosecha.", r: "Virgo" },
    { p: "Palas Atenea", d: "Atenea", t: "Asteroide", m: "Sabiduría estratégica, justicia y creatividad intelectual.", r: "Acuario" },
    { p: "Vesta", d: "Hestia", t: "Asteroide", m: "Foco sagrado, devoción interna y preservación del fuego propio.", r: "Virgo/Escorpio" },
    { p: "Juno", d: "Hera", t: "Asteroide", m: "Compromiso, pareja, equidad y lealtad en vínculos.", r: "Libra" },
    { p: "Nodo Norte", d: "Dharma", t: "Punto", m: "Hacia donde evoluciona el alma. El propósito futuro.", r: "Eje del Destino" },
    { p: "Nodo Sur", d: "Karma", t: "Punto", m: "Lo que traemos del pasado, talentos natos y patrones a soltar.", r: "Eje del Destino" },
    { p: "Rueda Fortuna", d: "Tique", t: "Punto Árabe", m: "Lugar de mayor armonía, éxito natural y alegría.", r: "Puntos Sensibles" },
    { p: "Pto. Infortunio", d: "Némesis", t: "Punto Árabe", m: "Punto de fricción, desafíos kármicos y pulido del alma.", r: "Puntos Sensibles" }
];

// 3. MAPA DE LAS 12 CASAS ASTROLÓGICAS (Requerido por inicializarEnciclopedias)
const CASAS_DATA = [
    { titulo: "Casa I", palabra_clave: "El Yo, la Identidad", regencia: "Aries / Marte", clasificacion: "Angular", significado: "Gobierna la personalidad externa, la primera impresión, el cuerpo físico y la forma en que iniciamos los proyectos en la vida." },
    { titulo: "Casa II", palabra_clave: "Recursos y Valores", regencia: "Tauro / Venus", clasificacion: "Sucedánea", significado: "Administra el dinero autogenerado, los bienes materiales, la seguridad financiera, la autoestima y los valores personales." },
    { titulo: "Casa III", palabra_clave: "Entorno Cercano", regencia: "Géminis / Mercurio", clasificacion: "Cadente", significado: "Rige la mente concreta, la comunicación diaria, los hermanos, los viajes cortos, los estudios primarios y el intelecto práctico." },
    { titulo: "Casa IV", palabra_clave: "El Hogar y las Raíces", regencia: "Cáncer / Luna", clasificacion: "Angular", significado: "Representa el núcleo familiar, el hogar físico, los ancestros, la estabilidad emocional profunda y el final de la vida." },
    { titulo: "Casa V", palabra_clave: "Creatividad y Gozo", regencia: "Leo / Sol", clasificacion: "Sucedánea", significado: "Espacio de la autoexpresión, los romances, los hijos, el arte, los juegos de azar y el desarrollo de los proyectos creativos natos." },
    { titulo: "Casa VI", palabra_clave: "Salud y Servicio", regencia: "Virgo / Mercurio", clasificacion: "Cadente", significado: "Determina las rutinas diarias, el trabajo técnico o de subordinación, el cuidado del cuerpo físico, las enfermedades menores y las mascotas." },
    { titulo: "Casa VII", palabra_clave: "Los Vínculos (El Otro)", regencia: "Libra / Venus", clasificacion: "Angular", significado: "Rige el matrimonio, las asociaciones comerciales estables, los contratos legales y los enemigos declarados. El espejo relacional." },
    { titulo: "Casa VIII", palabra_clave: "Transmutación y Bienes Compartidos", regencia: "Escorpio / Plutón", clasificacion: "Sucedánea", significado: "Zona de crisis profundas, herencias, finanzas compartidas, la sexualidad tántrica, la psicología oculta, la muerte y la resurrección." },
    { titulo: "Casa IX", palabra_clave: "Filosofía y Expansión", regencia: "Sagitario / Júpiter", clasificacion: "Cadente", significado: "Gobierna los estudios superiores, los viajes largos al extranjero, la espiritualidad dogmática, las leyes y la búsqueda de sentido vital." },
    { titulo: "Casa X", palabra_clave: "Profesión y Estatus", regencia: "Capricornio / Saturno", clasificacion: "Angular", significado: "El Medio Cielo. Representa el éxito público, la carrera profesional, la reputación, la autoridad, el destino social y la figura paterna/materna guía." },
    { titulo: "Casa XI", palabra_clave: "Grupos y Colectivos", regencia: "Acuario / Urano", clasificacion: "Sucedánea", significado: "Rige las amistades, los proyectos comunitarios, los ideales humanitarios, el trabajo en redes sociales y las esperanzas a largo plazo." },
    { titulo: "Casa XII", palabra_clave: "El Inconsciente Colectivo", regencia: "Piscis / Neptuno", clasificacion: "Cadente", significado: "Espacio de reclusión voluntaria o forzosa, karma acumulado, enemigos ocultos, sueños, desolación del ego y fusión con la Fuente Divina." }
];

// 4. MAZO DE TAROT RIDER-WAITE CON IMÁGENES PÚBLICAS REOPTIMIZADAS
const TAROT_DATA = [
    // Arcanos Mayores
    { id: "loco", tipo: "mayores", numero: "0", nombre: "El Loco", url_publica: "https://upload.wikimedia.org/wikipedia/commons/0/0b/RWS_Tarot_0_Fool.jpg", descripcion: "Representa los comienzos, saltos de fe, libertad absoluta, inocencia y el inicio del viaje arquetípico sin ataduras materiales.", consejo: "Atrévete a dar ese paso sin calcular tanto los riesgos. Confía en el proceso del universo." },
    { id: "mago", tipo: "mayores", numero: "I", nombre: "El Mago", url_publica: "https://upload.wikimedia.org/wikipedia/commons/d/de/RWS_Tarot_01_Magician.jpg", descripcion: "Fuerza de voluntad, dominio de los elementos, canalización de la energía cósmica hacia la Tierra y manifestación consciente.", consejo: "Tienes todas las herramientas disponibles sobre tu mesa. Es momento de enfocar tu intención y actuar." },
    { id: "sacerdotisa", tipo: "mayores", numero: "II", nombre: "La Sacerdotisa", url_publica: "https://upload.wikimedia.org/wikipedia/commons/8/88/RWS_Tarot_02_High_Priestess.jpg", descripcion: "Intuición profunda, misterios ocultos, subconsciente, pasividad sagrada y acumulación de sabiduría en silencio.", consejo: "No busques respuestas afuera. Quédate en quietud y escucha la voz sutil de tu intuición." },
    { id: "emperatriz", tipo: "mayores", numero: "III", nombre: "La Emperatriz", url_publica: "https://upload.wikimedia.org/wikipedia/commons/d/d2/RWS_Tarot_03_Empress.jpg", descripcion: "Abundancia, fertilidad, creatividad desbordante, conexión con la Madre Tierra, gestación y placer sensorial.", consejo: "Permítete nutrir tus ideas y disfrutar de la belleza material. Es tiempo de cosechar y florecer." },
    { id: "emperador", tipo: "mayores", numero: "IV", nombre: "El Emperador", url_publica: "https://upload.wikimedia.org/wikipedia/commons/c/c3/RWS_Tarot_04_Emperor.jpg", descripcion: "Estructura, autoridad, orden, estabilidad territorial, enfoque racional y establecimiento de límites infranqueables.", consejo: "Pon orden en tu vida, define tus reglas y asume el liderazgo de la situación con firmeza." },
    { id: "hierofante", tipo: "mayores", numero: "V", nombre: "El Hierofante", url_publica: "https://upload.wikimedia.org/wikipedia/commons/8/8d/RWS_Tarot_05_Hierophant.jpg", descripcion: "Tradición, conocimiento sagrado, dogmas, mentoría espiritual y búsqueda de alineación comunitaria.", consejo: "Busca guía en los saberes antiguos o apóyate en estructuras de aprendizaje con trayectoria." },
    { id: "enamorados", tipo: "mayores", numero: "VI", nombre: "Los Enamorados", url_publica: "https://upload.wikimedia.org/wikipedia/commons/3/3a/RWS_Tarot_06_Lovers.jpg", descripcion: "Elecciones del corazón, alineación de valores, uniones sagradas y dualidades que buscan armonía.", consejo: "Toma decisiones basándote en lo que dicta tu verdad interna, no por complacer mandatos ajenos." },
    { id: "carro", tipo: "mayores", numero: "VII", nombre: "El Carro", url_publica: "https://upload.wikimedia.org/wikipedia/commons/9/9b/RWS_Tarot_07_Chariot.jpg", descripcion: "Determinación, victoria, control de fuerzas opuestas, avance acelerado y enfoque inquebrantable.", consejo: "Toma las riendas con voluntad firme. La victoria llegará si dominas tus impulsos emocionales." },
    
    // Arcanos Menores (Muestras clave para la carga modular)
    { id: "as-espadas", tipo: "menores", numero: "As", nombre: "As de Espadas", url_publica: "https://upload.wikimedia.org/wikipedia/commons/1/1a/Swords01.jpg", descripcion: "Claridad mental absoluta, verdades reveladas, cortes definitivos de lazos insanos y golpes de brillantez cognitiva.", consejo: "Usa la espada de la verdad para cortar con la confusión. Di las cosas como son." },
    { id: "as-bastos", tipo: "menores", numero: "As", nombre: "As de Bastos", url_publica: "https://upload.wikimedia.org/wikipedia/commons/1/11/Wands01.jpg", descripcion: "Chispa inicial de pasión, inspiración creativa pura, energía vital renovada y ganas de emprender un camino salvaje.", consejo: "Sigue ese fuego interno que te quema el pecho. El momento de iniciar ese proyecto pasional es ahora." },
    { id: "as-copas", tipo: "menores", numero: "As", nombre: "As de Copas", url_publica: "https://upload.wikimedia.org/wikipedia/commons/3/36/Cups01.jpg", descripcion: "Desbordamiento emocional positivo, nacimiento de un amor puro, despertar espiritual y apertura intuitiva del corazón.", consejo: "Abre tus canales emocionales sin miedo a ser vulnerable. Permítete sentir el amor." },
    { id: "as-oros", tipo: "menores", numero: "As", nombre: "As de Oros", url_publica: "https://upload.wikimedia.org/wikipedia/commons/f/fd/Pentalces01.jpg", descripcion: "Semilla de abundancia material, nuevas ofertas económicas sólidas, salud física óptima e inicios en la tierra.", consejo: "Aprovecha la oportunidad material concreta que golpea tu puerta. Es suelo fértil para sembrar futuro." }
];

// 5. CRONOGRAMA DE RETROGRADACIONES 2026
const RETROGRADACIONES_2026 = [
    { p: "Mercurio", r: "29 Jun - 23 Jul", s: "Sombras: 12 Jun / 14 Ago", g: "15° Cáncer", e: "Post-Sombra", c: "#81D4FA" },
    { p: "Plutón", r: "30 Abr - 13 Oct", s: "Estacionario en Acuario", g: "04° Acuario", e: "RETRÓGRADO", c: "#ba68c8" },
    { p: "Saturno", r: "13 Jul - 28 Nov", s: "Sombra desde 28 Mar", g: "06° Aries", e: "En Sombra", c: "#9e9e9e" },
    { p: "Quirón", r: "18 Jul - 15 Dic", s: "Sombra desde 26 Mar", g: "28° Aries", e: "En Sombra", c: "#a1887f" },
    { p: "Urano", r: "01 Sep - 30 Ene (2027)", s: "Estacionario en Géminis", g: "02° Géminis", e: "Directo", c: "#4db6ac" }
];

// 6. ALMANAQUE DE VACÍOS DE CURSO LUNAR MAYO 2026
const VACIOS_2026 = {
    1: "Inicia 03:15 - Entra Escorpio 09:10",
    5: "Inicia 14:22 - Entra Sagitario 18:40",
    10: "Inicia 22:10 - Entra Piscis 08:30 (Día 11)",
    11: "Luna en Piscis - Flujo emocional profundo",
    18: "Inicia 11:00 - Entra Cáncer 15:45",
    25: "Inicia 04:20 - Entra Libra 09:12"
};

// 7. EFEMÉRIDES / TRÁNSITOS BASE (Cielo actual simulado)
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
    { p: "Lilith", s: "Virgo", g: "08", e: "D", id: 11 },
    { p: "Ceres", s: "Sagitario", g: "12", e: "D", id: 12 },
    { p: "Nodo Norte", s: "Piscis", g: "15", e: "R", id: 16 },
    { p: "Nodo Sur", s: "Virgo", g: "15", e: "R", id: 17 },
    { p: "Pto. Infortunio", s: "Tauro", g: "18", e: "D", id: 19 }
];
