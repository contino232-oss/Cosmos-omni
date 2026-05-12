/* ==========================================
   COSMO OMNI 2026 - DATA CORE (Definitivo)
   ========================================== */

const ZODIACO = [
    { n: "Aries", e: "Fuego", r: "Marte" }, 
    { n: "Tauro", e: "Tierra", r: "Venus" }, 
    { n: "Géminis", e: "Aire", r: "Mercurio" }, 
    { n: "Cáncer", e: "Agua", r: "Luna" }, 
    { n: "Leo", e: "Fuego", r: "Sol" }, 
    { n: "Virgo", e: "Tierra", r: "Mercurio" },
    { n: "Libra", e: "Aire", r: "Venus" }, 
    { n: "Escorpio", e: "Agua", r: "Plutón" }, 
    { n: "Sagitario", e: "Fuego", r: "Júpiter" }, 
    { n: "Capricornio", e: "Tierra", r: "Saturno" }, 
    { n: "Acuario", e: "Aire", r: "Urano" }, 
    { n: "Piscis", e: "Agua", r: "Neptuno" }
];

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

const RETROGRADACIONES_2026 = [
    { p: "Mercurio", r: "29 Jun - 23 Jul", s: "Sombras: 12 Jun / 14 Ago", e: "Post-Sombra", c: "#81D4FA" },
    { p: "Plutón", r: "30 Abr - 13 Oct", s: "---", e: "RETRÓGRADO", c: "#ba68c8" },
    { p: "Saturno", r: "13 Jul - 28 Nov", s: "Sombra desde 28 Mar", e: "En Sombra", c: "#9e9e9e" },
    { p: "Quirón", r: "18 Jul - 15 Dic", s: "Sombra desde 26 Mar", e: "En Sombra", c: "#a1887f" },
    { p: "Urano", r: "01 Sep - 30 Ene (2027)", s: "---", e: "Directo", c: "#4db6ac" }
];

const VACIOS_2026 = {
    10: "Inicia 22:10 - Entra Piscis 08:30 (Día 11)",
    11: "Luna en Piscis - Flujo emocional profundo",
    18: "Inicia 11:00 - Entra Cáncer 15:45",
    25: "Inicia 04:20 - Entra Libra 09:12"
};

// Tránsitos base Mayo 2026 (Planetas lentos y puntos fijos para el mes)
const TRANSITOS_BASE = [
    { p: "Sol", s: "Tauro", g: "21°", e: "D", id: 0 },
    { p: "Mercurio", s: "Aries", g: "25°", e: "Sombra", id: 2 },
    { p: "Venus", s: "Aries", g: "12°", e: "D", id: 3 },
    { p: "Marte", s: "Géminis", g: "04°", e: "D", id: 4 },
    { p: "Júpiter", s: "Cáncer", g: "18°", e: "D", id: 5 },
    { p: "Saturno", s: "Aries", g: "02°", e: "Sombra", id: 6 },
    { p: "Urano", s: "Géminis", g: "01°", e: "D", id: 7 },
    { p: "Neptuno", s: "Aries", g: "01°", e: "D", id: 8 },
    { p: "Plutón", s: "Acuario", g: "03°", e: "R", id: 9 },
    { p: "Lilith", s: "Virgo", g: "08°", e: "D", id: 11 },
    { p: "Ceres", s: "Sagitario", g: "12°", e: "D", id: 12 },
    { p: "Nodo Norte", s: "Piscis", g: "15°", e: "R", id: 16 },
    { p: "Nodo Sur", s: "Virgo", g: "15°", e: "R", id: 17 },
    { p: "Pto. Infortunio", s: "Tauro", g: "18°", e: "D", id: 19 }
];
