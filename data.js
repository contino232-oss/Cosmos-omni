const ZODIACO = [
    { n: "Aries", e: "Fuego" }, { n: "Tauro", e: "Tierra" }, { n: "Géminis", e: "Aire" }, 
    { n: "Cáncer", e: "Agua" }, { n: "Leo", e: "Fuego" }, { n: "Virgo", e: "Tierra" },
    { n: "Libra", e: "Aire" }, { n: "Escorpio", e: "Agua" }, { n: "Sagitario", e: "Fuego" }, 
    { n: "Capricornio", e: "Tierra" }, { n: "Acuario", e: "Aire" }, { n: "Piscis", e: "Agua" }
];

const ARQUETIPOS = [
    { p: "Sol", d: "Apolo", t: "Luminar", m: "Centro de identidad y brillo personal.", r: "Leo" },
    { p: "Luna", d: "Artemisa / Selene", t: "Luminar", m: "Mundo emocional, refugio y subconsciente.", r: "Cáncer" },
    { p: "Mercurio", d: "Hermes", t: "Personal", m: "Comunicación, intelecto y traslados.", r: "Géminis/Virgo" },
    { p: "Venus", d: "Afrodita", t: "Personal", m: "Deseo, belleza y vínculos afectivos.", r: "Tauro/Libra" },
    { p: "Marte", d: "Ares", t: "Personal", m: "Acción, voluntad y fuerza de conquista.", r: "Aries" },
    { p: "Quirón", d: "El Centauro", t: "Centauro", m: "La herida que se vuelve medicina para otros.", r: "Sagitario" },
    { p: "Lilith", d: "Luna Negra", t: "Punto Matemático", m: "La sombra indómita y el poder reprimido.", r: "Escorpio" },
    { p: "Nodo Norte", d: "Dharma", t: "Matemático", m: "Propósito evolutivo y aprendizaje futuro.", r: "Eje del Destino" },
    { p: "Nodo Sur", d: "Karma", t: "Matemático", m: "Patrones del pasado y talentos heredados.", r: "Eje del Destino" },
    { p: "Rueda Fortuna", d: "Tique", t: "Punto Árabe", m: "Armonía, prosperidad y éxito natural.", r: "Puntos Sensibles" },
    { p: "Pto. Infortunio", d: "Némesis", t: "Punto Árabe", m: "Karma reactivo y desafíos estructurales.", r: "Puntos Sensibles" },
    { p: "Júpiter", d: "Zeus", t: "Social", m: "Expansión, fe y abundancia.", r: "Sagitario" },
    { p: "Saturno", d: "Cronos", t: "Social", m: "Tiempo, responsabilidad y maestría.", r: "Capricornio" },
    { p: "Plutón", d: "Hades", t: "Transpersonal", m: "Transformación radical y renacimiento.", r: "Escorpio" }
];

const VACIOS_2026 = {
    10: "Inicia 22:10 - Entra Piscis 08:30 (Día 11)",
    18: "Inicia 11:00 - Entra Cáncer 15:45"
};

// Efemérides estáticas para 2026 (Planetas lentos)
const TRANSITOS_BASE = [
    { p: "Sol", s: "Tauro", g: "21°", e: "D", id: 0 },
    { p: "Nodo Norte", s: "Piscis", g: "15°", e: "R", id: 7 },
    { p: "Nodo Sur", s: "Virgo", g: "15°", e: "R", id: 8 },
    { p: "Lilith", s: "Virgo", g: "08°", e: "D", id: 6 },
    { p: "Plutón", s: "Acuario", g: "03°", e: "R", id: 13 }
];
