const ZODIACO = [
    { n: "Aries", e: "Fuego" }, { n: "Tauro", e: "Tierra" }, { n: "Géminis", e: "Aire" }, 
    { n: "Cáncer", e: "Agua" }, { n: "Leo", e: "Fuego" }, { n: "Virgo", e: "Tierra" },
    { n: "Libra", e: "Aire" }, { n: "Escorpio", e: "Agua" }, { n: "Sagitario", e: "Fuego" }, 
    { n: "Capricornio", e: "Tierra" }, { n: "Acuario", e: "Aire" }, { n: "Piscis", e: "Agua" }
];

const ARQUETIPOS = [
    { p: "Sol", d: "Apolo", t: "Luminar", m: "Dios de la luz y la verdad. Representa el núcleo del ser y la vitalidad.", r: "Leo" },
    { p: "Luna", d: "Artemisa / Selene", t: "Luminar", m: "Diosa de la caza y la noche. Rige las emociones y el instinto protector.", r: "Cáncer" },
    { p: "Mercurio", d: "Hermes", t: "Personal", m: "Mensajero de los dioses. Rige el intelecto, el comercio y el lenguaje.", r: "Géminis/Virgo" },
    { p: "Venus", d: "Afrodita", t: "Personal", m: "Diosa del amor y el placer. Rige las relaciones y el valor personal.", r: "Tauro/Libra" },
    { p: "Marte", d: "Ares", t: "Personal", m: "Dios de la guerra. Representa el valor, la fuerza y la conquista.", r: "Aries" },
    { p: "Quirón", d: "El Centauro", t: "Centauro", m: "El mentor de héroes. La llave para sanar el dolor crónico.", r: "Sagitario" },
    { p: "Lilith", d: "Luna Negra", t: "Punto Matemático", m: "La fuerza femenina indómita, las sombras y el poder oculto.", r: "Escorpio" },
    { p: "Nodo Norte", d: "El Dragón", t: "Eclíptico", m: "El destino y el dharma. Hacia donde debemos evolucionar.", r: "Varios" },
    { p: "Rueda Fortuna", d: "Tique", t: "Punto Árabe", m: "Diosa de la prosperidad. Lugar de mayor bienestar y fluidez.", r: "Varios" },
    { p: "Punto Infortunio", d: "Némesis", t: "Punto Árabe", m: "Representa el karma, los bloqueos y los desafíos que nos pulen.", r: "Varios" },
    { p: "Ceres", d: "Deméter", t: "Asteroide", m: "Diosa de la agricultura. Rige la nutrición y la productividad.", r: "Virgo" },
    { p: "Palas Atenea", d: "Atenea", t: "Asteroide", m: "Diosa de la sabiduría y la estrategia guerrera.", r: "Acuario" },
    { p: "Vesta", d: "Hestia", t: "Asteroide", m: "Diosa del hogar y el fuego sagrado. Foco y devoción.", r: "Escorpio" },
    { p: "Juno", d: "Hera", t: "Asteroide", m: "Reina de los dioses. Rige el compromiso y el matrimonio.", r: "Libra" },
    { p: "Júpiter", d: "Zeus", t: "Social", m: "Rey del Olimpo. Rige la expansión, las leyes y la fe.", r: "Sagitario" },
    { p: "Saturno", d: "Cronos", t: "Social", m: "Dios del tiempo. Representa la disciplina y la responsabilidad.", r: "Capricornio" },
    { p: "Plutón", d: "Hades", t: "Transpersonal", m: "Señor del inframundo. Rige la muerte y la transmutación.", r: "Escorpio" }
];

const VACIOS_2026 = {
    10: "Inicia 22:10 - Entra Piscis 08:30 (Día 11)",
    18: "Inicia 11:00 - Entra Cáncer 15:45"
};

const TRANSITOS_HOY = [
    { p: "Sol", s: "Tauro", g: "20°", e: "D", id: 0 },
    { p: "Luna", s: "Acuario", g: "26°", e: "M", id: 1 },
    { p: "Mercurio", s: "Aries", g: "24°", e: "Post-Sombra", id: 2 },
    { p: "Lilith", s: "Virgo", g: "08°", e: "D", id: 6 },
    { p: "Quirón", s: "Aries", g: "19°", e: "S", id: 5 },
    { p: "Nodo Norte", s: "Piscis", g: "15°", e: "R", id: 7 },
    { p: "Rueda Fortuna", s: "Libra", g: "10°", e: "D", id: 8 },
    { p: "Pto. Infortunio", s: "Aries", g: "12°", e: "D", id: 9 },
    { p: "Plutón", s: "Acuario", g: "03°", e: "R", id: 16 }
];

const ESTADOS_RETRO = [
    { p: "Mercurio", r: "29 Jun - 23 Jul", s: "12 Jun / 14 Ago", e: "Post-Sombra" },
    { p: "Saturno", r: "13 Jul - 28 Nov", s: "Inicia Sombra: 28 Mar", e: "En Sombra" },
    { p: "Plutón", r: "30 Abr - 13 Oct", s: "Termina Sombra: 02 Feb", e: "RETRÓGRADO" }
];
