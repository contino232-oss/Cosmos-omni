const ASTRO_DATA = {
    // --- 1. BIBLIOTECA ZODIACAL (ARQUETIPOS Y FRASES SEMILLA) ---
    zodiaco: [
        { nombre: "Aries", frase: "Yo Soy", arquetipo: "El Guerrero", desc: "Impulso, iniciativa y energía vital." },
        { nombre: "Tauro", frase: "Yo Tengo", arquetipo: "El Constructor", desc: "Estabilidad, recursos y valor." },
        { nombre: "Géminis", frase: "Yo Pienso", arquetipo: "El Comunicador", desc: "Adaptabilidad, intelecto y dualidad." },
        { nombre: "Cáncer", frase: "Yo Siento", arquetipo: "El Cuidador", desc: "Intuición, protección y mundo emocional." },
        { nombre: "Leo", frase: "Yo Quiero", arquetipo: "El Soberano", desc: "Creatividad, autoexpresión y vitalidad." },
        { nombre: "Virgo", frase: "Yo Analizo", arquetipo: "El Servidor", desc: "Orden, detalle y servicio eficiente." },
        { nombre: "Libra", frase: "Yo Equilibro", arquetipo: "El Diplomático", desc: "Armonía, relación y justicia." },
        { nombre: "Escorpio", frase: "Yo Transformo", arquetipo: "El Alquimista", desc: "Profundidad, regeneración y misterio." },
        { nombre: "Sagitario", frase: "Yo Veo", arquetipo: "El Filósofo", desc: "Expansión, verdad y propósito." },
        { nombre: "Capricornio", frase: "Yo Uso", arquetipo: "El Maestro", desc: "Estructura, maestría y ambición." },
        { nombre: "Acuario", frase: "Yo Sé", arquetipo: "El Visionario", desc: "Innovación, comunidad y libertad." },
        { nombre: "Piscis", frase: "Yo Creo", arquetipo: "El Místico", desc: "Trascendencia, empatía y espiritualidad." }
    ],

    // --- 2. ASTROS (PARA LA TABLA DEL DASHBOARD) ---
    astros: [
        { nombre: "Sol ☉", rol: "Identidad", desc: "El centro de la consciencia y la voluntad." },
        { nombre: "Luna ☽", rol: "Emoción", desc: "El mundo interior y los instintos básicos." },
        { nombre: "Mercurio ☿", rol: "Mente", desc: "El intercambio de información y la lógica." },
        { nombre: "Venus ♀", rol: "Deseo", desc: "Lo que valoramos y cómo nos relacionamos." },
        { nombre: "Marte ♂", rol: "Acción", desc: "La fuerza de voluntad y el impulso de lucha." }
    ],

    // --- 3. RETROGRADACIONES 2026 ---
    retrogradaciones2026: [
        { planeta: "Mercurio ☿", periodo: "26 Feb - 20 Mar", advertencia: "Confusión, fallos técnicos, revisar contratos." },
        { planeta: "Mercurio ☿", periodo: "29 Jun - 23 Jul", advertencia: "Nostalgias, revisar seguridad del hogar." },
        { planeta: "Mercurio ☿", periodo: "24 Oct - 13 Nov", advertencia: "Secretos que salen a la luz, pensar antes de hablar." },
        { planeta: "Marte ♂", periodo: "Desde 24 Dic 2025", advertencia: "Acción frenada, revisar la gestión de la ira." }
    ],

    // --- 4. TAROT (Estructura base) ---
    tarot: [
        { id: "loco", nombre: "El Loco (0)", keywords: ["Inicios", "Libertad"], descripcion: "El alma que inicia su viaje." },
        { id: "mago", nombre: "El Mago (I)", keywords: ["Manifestación", "Poder"], descripcion: "Canalizar la voluntad divina." }
        // (Aquí puedes agregar el resto de tus 78 cartas)
    ]
};
