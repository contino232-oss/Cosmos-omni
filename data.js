const ZODIACO = [
    { n: "Aries", e: "Fuego", r: "Marte" }, { n: "Tauro", e: "Tierra", r: "Venus" }, 
    { n: "Géminis", e: "Aire", r: "Mercurio" }, { n: "Cáncer", e: "Agua", r: "Luna" }, 
    { n: "Leo", e: "Fuego", r: "Sol" }, { n: "Virgo", e: "Tierra", r: "Mercurio" },
    { n: "Libra", e: "Aire", r: "Venus" }, { n: "Escorpio", e: "Agua", r: "Plutón" }, 
    { n: "Sagitario", e: "Fuego", r: "Júpiter" }, { n: "Capricornio", e: "Tierra", r: "Saturno" }, 
    { n: "Acuario", e: "Aire", r: "Urano" }, { n: "Piscis", e: "Agua", r: "Neptuno" }
];

const ARQUETIPOS = [
    { p: "Sol", d: "Apolo", t: "Luminar", m: "Identidad, vitalidad y el núcleo del Ser.", r: "Leo" },
    { p: "Luna", d: "Artemisa / Selene", t: "Luminar", m: "Emociones, instinto y mundo interno.", r: "Cáncer" },
    { p: "Mercurio", d: "Hermes", t: "Personal", m: "Mente, comunicación y procesos lógicos.", r: "Géminis/Virgo" },
    { p: "Venus", d: "Afrodita", t: "Personal", m: "Vínculos, valor personal y belleza.", r: "Tauro/Libra" },
    { p: "Marte", d: "Ares", t: "Personal", m: "Acción, asertividad y fuerza de voluntad.", r: "Aries" },
    { p: "Quirón", d: "El Centauro", t: "Centauro", m: "La herida que se convierte en don sanador.", r: "Sagitario" },
    { p: "Lilith", d: "Luna Negra", t: "Punto", m: "Sombra, rebelión y poder indómito.", r: "Escorpio" },
    { p: "Ceres", d: "Deméter", t: "Asteroide", m: "Nutrición, productividad y ciclos vitales.", r: "Virgo" },
    { p: "Palas Atenea", d: "Atenea", t: "Asteroide", m: "Estrategia, sabiduría y creatividad intelectual.", r: "Acuario" },
    { p: "Vesta", d: "Hestia", t: "Asteroide", m: "Devoción, foco interno y fuego sagrado.", r: "Escorpio" },
    { p: "Juno", d: "Hera", t: "Asteroide", m: "Compromiso, pareja y equidad relacional.", r: "Libra" },
    { p: "Nodo Norte", d: "Dharma", t: "Punto", m: "Propósito evolutivo del alma.", r: "Eje del Destino" },
    { p: "Nodo Sur", d: "Karma", t: "Punto", m: "Patrones a soltar y talentos natos.", r: "Eje del Destino" },
    { p: "Rueda Fortuna", d: "Tique", t: "Árabe", m: "Lugar de armonía y éxito natural.", r: "Puntos Sensibles" },
    { p: "Pto. Infortunio", d: "Némesis", t: "Árabe", m: "Desafíos, karma y puntos de pulido.", r: "Puntos Sensibles" },
    { p: "Júpiter", d: "Zeus", t: "Social", m: "Expansión, fe y abundancia.", r: "Sagitario" },
    { p: "Saturno", d: "Cronos", t: "Social", m: "Límites, tiempo y maestría estructural.", r: "Capricornio" },
    { p: "Plutón", d: "Hades", t: "Transpersonal", m: "Transformación radical y renacimiento.", r: "Escorpio" }
];

const VACIOS_2026 = {
    10: "Inicia 22:10 - Entra Piscis 08:30 (Día 11)",
    18: "Inicia 11:00 - Entra Cáncer 15:45",
    25: "Inicia 04:20 - Entra Libra 09:12"
};

const RETROGRADACIONES_2026 = [
    { p: "Mercurio", r: "29 Jun - 23 Jul", s: "Sombras: 12 Jun / 14 Ago", e: "Post-Sombra", c: "#81D4FA" },
    { p: "Plutón", r: "30 Abr - 13 Oct", s: "---", e: "RETRÓGRADO", c: "#ba68c8" },
    { p: "Saturno", r: "13 Jul - 28 Nov", s: "Inicia Sombra: 28 Mar", e: "En Sombra", c: "#9e9e9e" },
    { p: "Quirón", r: "18 Jul - 15 Dic", s: "Inicia Sombra: 26 Mar", e: "En Sombra", c: "#a1887f" }
];

const TRANSITOS_MAYO = [
    { p: "Sol", s: "Tauro", g: "21°", e: "D", id: 0 },
    { p: "Mercurio", s: "Aries", g: "25°", e: "Sombra", id: 2 },
    { p: "Lilith", s: "Virgo", g: "08°", e: "D", id: 6 },
    { p: "Ceres", s: "Sagitario", g: "12°", e: "D", id: 7 },
    { p: "Palas", s: "Acuario", g: "05°", e: "D", id: 8 },
    { p: "Nodo Norte", s: "Piscis", g: "15°", e: "R", id: 11 },
    { p: "Nodo Sur", s: "Virgo", g: "15°", e: "R", id: 12 },
    { p: "Pto. Infortunio", s: "Tauro", g: "18°", e: "D", id: 14 }
];
