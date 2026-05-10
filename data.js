const ZODIACO = [
    { n: "Aries", e: "Fuego", c: "Cardinal" }, { n: "Tauro", e: "Tierra", c: "Fijo" },
    { n: "Géminis", e: "Aire", c: "Mutable" }, { n: "Cáncer", e: "Agua", c: "Cardinal" },
    { n: "Leo", e: "Fuego", c: "Fijo" }, { n: "Virgo", e: "Tierra", c: "Mutable" },
    { n: "Libra", e: "Aire", c: "Cardinal" }, { n: "Escorpio", e: "Agua", c: "Fijo" },
    { n: "Sagitario", e: "Fuego", c: "Mutable" }, { n: "Capricornio", e: "Tierra", c: "Cardinal" },
    { n: "Acuario", e: "Aire", c: "Fijo" }, { n: "Piscis", e: "Agua", c: "Mutable" }
];

const ARQUETIPOS = [
    { p: "Sol", dios: "Helios / Apolo", m: "Consciencia y voluntad heroica.", r: "Leo", k: "Identidad", g: "El Rey" },
    { p: "Luna", dios: "Selene / Artemisa", m: "Inconsciente y refugio emocional.", r: "Cáncer", k: "Nutrición", g: "La Madre" },
    { p: "Mercurio", dios: "Hermes", m: "El mensajero, lógica y palabra.", r: "Géminis/Virgo", k: "Mente", g: "El Guía" },
    { p: "Venus", dios: "Afrodita", m: "Armonía, belleza y deseo.", r: "Tauro/Libra", k: "Atracción", g: "La Amante" },
    { p: "Marte", dios: "Ares", m: "Fuerza de acción e instinto.", r: "Aries", k: "Conquista", g: "El Guerrero" },
    { p: "Júpiter", dios: "Zeus", m: "Expansión y búsqueda de la verdad.", r: "Sagitario", k: "Propósito", g: "El Sabio" },
    { p: "Saturno", dios: "Cronos", m: "El tiempo, límites y maestría.", r: "Capricornio", k: "Estructura", g: "El Maestro" },
    { p: "Urano", dios: "Ouranos", m: "Revolución y genio creativo.", r: "Acuario", k: "Libertad", g: "El Rebelde" },
    { p: "Neptuno", dios: "Poseidón", m: "Inspiración y disolución del ego.", r: "Piscis", k: "Sueño", g: "El Místico" },
    { p: "Plutón", dios: "Hades", m: "Muerte, renacimiento y poder oculto.", r: "Escorpio", k: "Alquimia", g: "El Soberano" }
];

const GLOSARIO = [
    { t: "Retrogradación", d: "Periodo de revisión donde la energía se vuelve hacia adentro." },
    { t: "Vacío de Curso", d: "Pausa lunar ideal para meditar, no para actuar." },
    { t: "Dignidad", d: "Estado de comodidad o tensión de un planeta en un signo." },
    { t: "Sombra", d: "Grados que recorre un planeta antes de su giro retrógrado." }
];

const RETRO_INFO = [
    { p: "Plutón", r: "30 Abr - 13 Oct", s: "Acuario", e: "Retrógrado" },
    { p: "Mercurio", r: "29 Jun - 23 Jul", s: "Cáncer", e: "Directo" },
    { p: "Saturno", r: "13 Jul - 28 Nov", s: "Aries", e: "Sombra" }
];
