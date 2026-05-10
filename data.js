const ZODIACO = [
    { n: "Aries", e: "Fuego" }, { n: "Tauro", e: "Tierra" }, { n: "Géminis", e: "Aire" }, 
    { n: "Cáncer", e: "Agua" }, { n: "Leo", e: "Fuego" }, { n: "Virgo", e: "Tierra" },
    { n: "Libra", e: "Aire" }, { n: "Escorpio", e: "Agua" }, { n: "Sagitario", e: "Fuego" }, 
    { n: "Capricornio", e: "Tierra" }, { n: "Acuario", e: "Aire" }, { n: "Piscis", e: "Agua" }
];

const ARQUETIPOS = [
    { p: "Sol", d: "Apolo", t: "Luminar", m: "Centro de identidad y propósito heroico.", r: "Leo" },
    { p: "Luna", d: "Artemisa", t: "Luminar", m: "Subconsciente y refugio emocional.", r: "Cáncer" },
    { p: "Mercurio", d: "Hermes", t: "Personal", m: "Comunicación, lógica y mente analítica.", r: "Géminis/Virgo" },
    { p: "Venus", d: "Afrodita", t: "Personal", m: "Deseo, belleza y sistema de valores.", r: "Tauro/Libra" },
    { p: "Marte", d: "Ares", t: "Personal", m: "Acción, asertividad e impulso.", r: "Aries" },
    { p: "Quirón", d: "El Centauro", t: "Centauro", m: "La herida que se convierte en medicina; el maestro sanador.", r: "Sagitario" },
    { p: "Nodo Norte", d: "Dharma", t: "Matemático", m: "Dirección de evolución y aprendizaje futuro.", r: "Eje del Destino" },
    { p: "Nodo Sur", d: "Karma", t: "Matemático", m: "Patrones conocidos que debemos integrar o soltar.", r: "Eje del Destino" },
    { p: "Rueda Fortuna", d: "Pars Fortunae", t: "Árabe", m: "Punto de armonía, éxito y bienestar natural.", r: "Individual" },
    { p: "Júpiter", d: "Zeus", t: "Social", m: "Expansión, suerte y abundancia.", r: "Sagitario" },
    { p: "Saturno", d: "Cronos", t: "Social", m: "Límites, tiempo y maestría por esfuerzo.", r: "Capricornio" },
    { p: "Plutón", d: "Hades", t: "Transpersonal", m: "Muerte, renacimiento y poder profundo.", r: "Escorpio" }
];

const VACIOS_2026 = {
    10: "Inicia 22:10 - Entra Piscis 08:30 (Día 11)",
    18: "Inicia 11:00 - Entra Cáncer 15:45"
};

const TRANSITOS_HOY = [
    { p: "Sol", s: "Tauro", g: "20°", e: "D", id: 0 },
    { p: "Luna", s: "Acuario", g: "26°", e: "Menguante", id: 1 },
    { p: "Mercurio", s: "Aries", g: "24°", e: "Post-Sombra", id: 2 },
    { p: "Nodo Norte", s: "Piscis", g: "15°", e: "R", id: 6 },
    { p: "Rueda Fortuna", s: "Libra", g: "10°", e: "D", id: 8 },
    { p: "Quirón", s: "Aries", g: "19°", e: "En Sombra", id: 5 },
    { p: "Plutón", s: "Acuario", g: "03°", e: "Retrógrado", id: 11 }
];

const ESTADOS_RETRO = [
    { p: "Mercurio", r: "29 Jun - 23 Jul", s: "12 Jun / 14 Ago", e: "Post-Sombra" },
    { p: "Saturno", r: "13 Jul - 28 Nov", s: "Inicia Sombra: 28 Mar", e: "En Sombra" },
    { p: "Plutón", r: "30 Abr - 13 Oct", s: "Termina Sombra: 02 Feb", e: "RETRÓGRADO" }
];
