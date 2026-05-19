// ==========================================================================
// COSMOS OMNI 2026 - BASE DE DATOS MÍSTICA Y ASTRAL (data.js)
// ==========================================================================

const COSMOS_DATA = {
    // El Cielo en Vivo (Dashboard)
    cieloVivo: [
        { id: "sol", nombre: "Sol", signo: "Tauro", posicion: "28° 34'", estado: "Directo", cat: "mayores", isAsteroide: false },
        { id: "luna", nombre: "Luna", signo: "Géminis", posicion: "14° 12'", estado: "Rápida", cat: "mayores", isAsteroide: false },
        { id: "mercurio", nombre: "Mercurio", signo: "Tauro", posicion: "05° 11'", estado: "Directo (Sombra Post)", cat: "mayores", isAsteroide: false },
        { id: "venus", nombre: "Venus", signo: "Géminis", posicion: "11° 45'", estado: "Directo", cat: "mayores", isAsteroide: false },
        { id: "marte", nombre: "Marte", signo: "Aries", posicion: "22° 19'", estado: "Directo", cat: "mayores", isAsteroide: false },
        { id: "jupiter", nombre: "Júpiter", signo: "Géminis", posicion: "29° 02'", estado: "Directo", cat: "mayores", isAsteroide: false },
        { id: "saturno", nombre: "Saturno", signo: "Aries", posicion: "02° 55'", estado: "Directo (Sombra Pre)", cat: "mayores", isAsteroide: false },
        { id: "urano", nombre: "Urano", signo: "Tauro", posicion: "28° 10'", estado: "Directo", cat: "mayores", isAsteroide: false },
        { id: "neptuno", nombre: "Neptuno", signo: "Aries", posicion: "02° 14'", estado: "Directo", cat: "mayores", isAsteroide: false },
        { id: "pluton", nombre: "Plutón", signo: "Acuario", posicion: "03° 44'", estado: "Retrógrado 🔴", cat: "mayores", isAsteroide: false },
        { id: "quiron", nombre: "Quirón", signo: "Aries", posicion: "26° 50'", estado: "Directo", cat: "asteroides", isAsteroide: true, badge: "Sanador" },
        { id: "lilit", nombre: "Lilith", signo: "Libra", posicion: "18° 05'", estado: "Media", cat: "asteroides", isAsteroide: true, badge: "Sombra" },
        { id: "nodo_norte", nombre: "Nodo Norte", signo: "Piscis", posicion: "26° 14'", estado: "Retrógrado 🔴", cat: "asteroides", isAsteroide: true, badge: "Kármico" },
        { id: "palas", nombre: "Palas Atenea", signo: "Sagitario", posicion: "08° 30'", estado: "Retrógrado 🔴", cat: "asteroides", isAsteroide: true, badge: "Asteroide" },
        { id: "vesta", nombre: "Vesta", signo: "Cáncer", posicion: "12° 40'", estado: "Directo", cat: "asteroides", isAsteroide: true, badge: "Asteroide" }
    ],

    // Almanaque Lunar de Mayo 2026
    almanaqueLunar: [
        { dia: "01/05", fase: "🌕 Luna Llena", grado: "11° Escorpio", vacio: "04:12 a 09:30" },
        { dia: "05/05", fase: "🌗 Menguante", grado: "15° Acuario", vacio: "No registra" },
        { dia: "09/05", fase: "🌗 Menguante", grado: "28° Piscis", vacio: "18:22 a 22:15" },
        { dia: "16/05", fase: "🌑 Luna Nueva", grado: "25° Tauro", vacio: "01:05 a 03:40" },
        { dia: "19/05", fase: "🌒 Creciente", grado: "14° Géminis", vacio: "En curso" },
        { dia: "24/05", fase: "🌓 Cuarto Creciente", grado: "03° Virgo", vacio: "12:00 a 15:45" },
        { dia: "31/05", fase: "🌕 Luna Llena", grado: "09° Sagitario", vacio: "21:10 a 01:20" }
    ],

    // Eclipses 2026
    eclipses: [
        { nombre: "Eclipse Lunar Total en Virgo", fecha: "03 de Marzo 2026", detalle: "Visible en América. Cierre kármico de procesos de ordenamiento, salud y purificación sistémica." },
        { nombre: "Eclipse Solar Anular en Piscis", fecha: "17 de Marzo 2026", detalle: "Disolución de viejas estructuras espirituales e inicio de un ciclo de profunda entrega intuitiva." },
        { nombre: "Eclipse Solar Parcial en Leo", fecha: "12 de Agosto 2026", detalle: "Reseteo de la expresión de la identidad individual, el liderazgo y los proyectos creativos del corazón." },
        { nombre: "Eclipse Lunar Parcial en Acuario", fecha: "28 de Agosto 2026", detalle: "Evaluación y balance en dinámicas colectivas, redes humanas y proyectos de corte social." }
    ],

    // Línea de Tiempo (Cronograma)
    timeline: [
        { fecha: "20 May", evento: "Ingreso Solar", desc: "El Sol ingresa a Géminis, encendiendo las redes de comunicación." },
        { fecha: "22 May", evento: "Trígono Marte-Lilit", desc: "Acción asertiva alineada con deseos profundos relegados." },
        { fecha: "24 May", evento: "Luna Cuarto Creciente", desc: "Momento de dar dirección concreta a lo sembrado en la Luna Nueva." },
        { fecha: "29 May", evento: "Mercurio ingresa a Géminis", desc: "Mentalidad ágil, comercio activo y flujos de información veloces." },
        { fecha: "01 Jun", evento: "Luna Llena en Sagitario", desc: "Clímax de verdades y revelaciones sobre nuestras búsquedas de sentido." }
    ],

    // Retrogradaciones 2026
    retrogradaciones: [
        { planeta: "Mercurio", periodo: "28 Mar - 20 Abr", sombra: "12 Mar / 08 May", critico: "23° Piscis a 08° Piscis", estado: "Directo", clase: "estado-directo" },
        { planeta: "Plutón", periodo: "27 Abr - 02 Oct", sombra: "09 Ene / 20 Nov", critico: "04° Acuario a 01° Acuario", estado: "Retrógrado 🔴", clase: "retro-active" },
        { planeta: "Saturno", periodo: "13 Jul - 28 Nov", sombra: "22 Abr / 19 Dic", critico: "05° Aries a 00° Aries", estado: "Sombra Pre 🟡", clase: "shadow-pre" },
        { planeta: "Neptuno", periodo: "04 Jul - 10 Dic", sombra: "15 Mar / 30 Dic", critico: "04° Aries a 01° Aries", estado: "Sombra Pre 🟡", clase: "shadow-pre" }
    ],

    // El Círculo Zodiacal
    signos: [
        { nombre: "Aries", glifo: "♈", elemento: "Fuego", keyword: "Iniciación", desc: "Primer signo del zodíaco. Representa el impulso vital, el coraje, la acción pura, el inicio de ciclos y la capacidad de conquista.", regente: "Marte" },
        { nombre: "Tauro", glifo: "♉", elemento: "Tierra", keyword: "Consolidación", desc: "Representa la estabilidad material, los recursos, los placeres sensoriales, el enraizamiento, la paciencia y el valor propio.", regente: "Venus" },
        { nombre: "Géminis", glifo: "♊", elemento: "Aire", keyword: "Dualidad", desc: "El puente de la comunicación, la curiosidad intelectual, el aprendizaje constante, el juego de polaridades y el intercambio de ideas.", regente: "Mercurio" },
        { nombre: "Cáncer", glifo: "♋", elemento: "Agua", keyword: "Nutrición", desc: "Representa el hogar emocional, las raíces, la memoria familiar, la protección del espacio íntimo y la matriz del sentir.", regente: "Luna" },
        { nombre: "Leo", glifo: "♌", elemento: "Fuego", keyword: "Expresión", desc: "Centro irradiante de identidad. Representa la creatividad, el niño interno, la soberanía personal y la capacidad de brillar con luz propia.", regente: "Sol" },
        { nombre: "Virgo", glifo: "♍", elemento: "Tierra", keyword: "Análisis", desc: "El don del servicio, el discernimiento, la optimización, el cuidado de la salud corporal, el análisis meticuloso y el orden sistémico.", regente: "Mercurio" },
        { nombre: "Libra", glifo: "♎", elemento: "Aire", keyword: "Vínculos", desc: "La búsqueda del equilibrio armónico, la justicia, la alteridad (el encuentro con el Otro), el arte, la diplomacia y los acuerdos.", regente: "Venus" },
        { nombre: "Escorpio", glifo: "♏", elemento: "Agua", keyword: "Alquimia", desc: "Signo de transmutación profunda. Gobierna las crisis evolutivas, la sexualidad sagrada, los recursos compartidos y el inconsciente.", regente: "Plutón / Marte" },
        { nombre: "Sagitario", glifo: "♐", elemento: "Fuego", keyword: "Expansión", desc: "Buscador de la verdad. Representa la filosofía de vida, el sentido de trascendencia, los viajes largos, los ideales y el optimismo.", regente: "Júpiter" },
        { nombre: "Capricornio", glifo: "♑", elemento: "Tierra", keyword: "Estructura", desc: "La consolidación del logro social. Rige la ley de la materia, la autosuficiencia, el tiempo cronológico, el deber y la maestría.", regente: "Saturno" },
        { nombre: "Acuario", glifo: "♒", elemento: "Aire", keyword: "Redes", desc: "Visión vanguardista y comunitaria. Rige los saltos cuánticos, la libertad individual dentro de colectivos, la tecnología y la innovación.", regente: "Urano / Saturno" },
        { nombre: "Piscis", glifo: "♓", elemento: "Agua", keyword: "Absoluto", desc: "Disolución del ego en el todo. El océano de la empatía universal, el inconsciente colectivo, el arte místico y el amor incondicional.", regente: "Neptuno / Júpiter" }
    ],

    // Las 12 Casas
    casas: [
        { numero: "Casa 1", glifo: "🏠", clasificacion: "Angular (Ascendente)", desc: "La personalidad externa, la corporalidad, cómo iniciamos las cosas y la primera impresión que proyectamos al mundo." },
        { numero: "Casa 2", glifo: "🏠", clasificacion: "Sucedánea", desc: "Los valores personales, los bienes materiales, el sustento económico, los talentos innatos y la seguridad de supervivencia." },
        { numero: "Casa 3", glifo: "🏠", clasificacion: "Cadente", desc: "El entorno cercano, los hermanos, los procesos de aprendizaje mental primario, los viajes cortos y el estilo comunicativo." },
        { numero: "Casa 4", glifo: "🏠", clasificacion: "Angular (Fondo del Cielo)", desc: "El hogar, la base familiar de origen, el inconsciente privado, las raíces, la patria y el espacio de máxima intimidad." },
        { numero: "Casa 5", glifo: "🏠", clasificacion: "Sucedánea", desc: "Los romances, la autoexpresión creativa, los hijos, los juegos de azar, los proyectos del corazón y el goce lúdico." },
        { numero: "Casa 6", glifo: "🏠", clasificacion: "Cadente", desc: "Las rutinas diarias, el trabajo subordinado, la salud física, los hábitos alimenticios y los animales domésticos de compañía." },
        { numero: "Casa 7", glifo: "🏠", clasificacion: "Angular (Descendente)", desc: "Los espejos vinculares: el matrimonio, las sociedades comerciales, los enemigos declarados y lo que buscamos integrar a través de otros." },
        { numero: "Casa 8", glifo: "🏠", clasificacion: "Sucedánea", desc: "Los procesos de muerte y resurrección, los tabúes, el dinero de terceros, las herencias, las crisis compartidas y la fusión oculta." },
        { numero: "Casa 9", glifo: "🏠", clasificacion: "Cadente", desc: "La educación superior, las cosmovisiones espirituales, el sentido existencial, las travesías al extranjero y las leyes universales." },
        { numero: "Casa 10", glifo: "🏠", clasificacion: "Angular (Medio Cielo)", desc: "La vocación pública, el estatus profesional, el éxito social, la autoridad madura y el legado concreto que dejamos." },
        { numero: "Casa 11", glifo: "🏠", clasificacion: "Sucedánea", desc: "Los grupos de pertenencia, las redes de amigos, las utopías colectivas, las esperanzas futuras y los protectores astrales." },
        { numero: "Casa 12", glifo: "🏠", clasificacion: "Cadente", desc: "El útero cósmico y el aislamiento terapéutico. Espacio del inconsciente colectivo, los karmas ancestrales y la disolución mística." }
    ],

    // Manual de Astros (Arquetipos)
    astros: [
        { nombre: "El Sol", glifo: "☀️", palabra: "Identidad Esencial", desc: "El centro del self, el pulso creativo de la voluntad, la vitalidad y la consciencia despierta que organiza la carta." },
        { nombre: "La Luna", glifo: "🌙", palabra: "Mundo Emocional", desc: "La necesidad de amparo y seguridad, los mecanismos automáticos de defense, la memoria celular y los ciclos de nutrición interna." },
        { nombre: "Mercurio", glifo: "☿", palabra: "Procesamiento Mental", desc: "La percepción cognitiva, la articulación de la palabra, el comercio, los puentes asociativos y la flexibilidad lógica." },
        { nombre: "Venus", glifo: "♀", palabra: "Función de Atracción", desc: "La capacidad de valorar, el magnetismo amoroso, la estética armónica, la autoestima y los códigos de disfrute compartido." },
        { nombre: "Marte", glifo: "♂", palabra: "Fuerza de Conquista", desc: "El deseo en acción, la capacidad de corte y demarcación de límites, la energía guerrera, la libido y el coraje asertivo." },
        { nombre: "Júpiter", glifo: "♃", palabra: "Principio de Sentido", desc: "La búsqueda de expansión, la confianza ciega en la vida, las filosofías sintéticas, la abundancia y la guía espiritual." },
        { nombre: "Saturno", glifo: "♄", palabra: "Principio de Realidad", desc: "El constructor de fronteras, la maduración a través del tiempo, la ley de causa y efecto, la estructura y los límites del plano físico." }
    ],

    // Tarot Rider-Waite (Arcanos Mayores + Ases)
    tarot: [
        { nombre: "El Loco (0)", tipo: "mayores", glifo: "🃏", arcano: "Principio Absoluto", desc: "El salto cuántico al vacío. Confianza ciega en el universo, desapego total de las estructuras materiales y libertad absoluta." },
        { nombre: "El Mago (I)", tipo: "mayores", glifo: "🧙‍♂️", arcano: "Voluntad Consciente", desc: "El canalizador de los elementos. Capacidad de manifestación en el plano material usando los recursos del éter." },
        { nombre: "La Sacerdotisa (II)", tipo: "mayores", glifo: "🧕", arcano: "Memoria Intuitiva", desc: "La guardiana de los misterios velados. Gestación en silencio, intuición pura, registros profundos y quietud reflexiva." },
        { nombre: "La Emperatriz (III)", tipo: "mayores", glifo: "👑", arcano: "Naturaleza Abundante", desc: "Irradiación creativa y sensorialidad pura. La Madre Tierra pariendo formas, la fertilidad, el disfrute y el florecimiento orgánico." },
        { nombre: "El Emperador (IV)", tipo: "mayores", glifo: "🛡️", arcano: "Estabilidad Territorial", desc: "La imposición de orden, estructuras y leyes lógicas. Capacidad de proteger, concretar realidades y sentar bases sólidas." },
        { nombre: "El Sumo Sacerdote (V)", tipo: "mayores", glifo: "🏛️", arcano: "Puente Espiritual", desc: "La transmisión de las leyes sagradas y tradicionales. El maestro que reveals códigos morales y ordenamientos cósmicos." },
        { nombre: "Los Enamorados (VI)", tipo: "mayores", glifo: "💞", arcano: "Elección del Corazón", desc: "La encrucijada de los senderos y el espejo vincular. Reconocimiento de la afinidad electiva y la apertura a la complementariedad." },
        { nombre: "El Carro (VII)", tipo: "mayores", glifo: "🛒", arcano: "Conquista Dirigida", desc: "La síntesis de los opuestos en movimiento. Determinación mental orientada a la victoria del espíritu sobre el plano físico." },
        { nombre: "As de Bastos", tipo: "menores", glifo: "🔥", arcano: "Chispa Vital", desc: "El despertar de la pasión, la energía sexual creativa y el inicio explosivo de un proyecto con alta fuerza e inspiración de fuego." },
        { nombre: "As de Copas", tipo: "menores", glifo: "💧", arcano: "Manantial Sagrado", desc: "Apertura emocional absoluta. El nacimiento de un sentimiento puro, intuición desbordante, sanación cordial y comunión espiritual." },
        { nombre: "As de Espadas", tipo: "menores", glifo: "⚔️", arcano: "Claridad Cortante", desc: "Victoria intelectual. Un pensamiento relámpago que corta la confusión, revelando una verdad objetiva con gran determinación." },
        { nombre: "As de Oros", tipo: "menores", glifo: "🪙", arcano: "Semilla de Concreción", desc: "Oportunidad material tangible. El inicio de un negocio, salud corporal óptima, arraigo físico y la manifestación de una ganancia real." }
    ],

    // Herbolario Místico
    herbolario: [
        { nombre: "Jazmín", glifo: "🌿", regencia: "Luna / Agua", uso: "Apertura psíquica, sueños proféticos, calma del sistema nervioso y limpiezas áuricas cordiales." },
        { nombre: "Orégano", glifo: "🌿", regencia: "Mercurio / Aire", uso: "Activación del flujo energético estancado, protección del espacio doméstico y claridad mental." },
        { nombre: "Romero", glifo: "🌱", regencia: "Sol / Fuego", uso: "Fijación de la memoria, purificación de ambientes pesados por fuego protector e incremento del vigor vital." },
        { nombre: "Lavanda", glifo: "🪻", regencia: "Mercurio / Aire", uso: "Armonización de pensamientos distorsionados, pacificación de tensiones astrales y consagración de herramientas místicas." },
        { nombre: "Ruda", glifo: "🌿", regencia: "Marte / Fuego", uso: "Corte drástico de larvas astrales, transmutación de energías densas ambientales y escudo energético asertivo." }
    ],

    // Efemérides Históricas (Simulación Matemática Avanzada)
    calcularCieloHistorico: function(anio) {
        const signosList = ["Aries", "Tauro", "Géminis", "Cáncer", "Leo", "Virgo", "Libra", "Escorpio", "Sagitario", "Capricornio", "Acuario", "Piscis"];
        const astrosList = ["Sol", "Luna", "Mercurio", "Venus", "Marte", "Júpiter", "Saturno", "Urano", "Neptuno", "Plutón"];
        
        return astrosList.map((astro, index) => {
            let hash = (parseInt(anio) * (index + 7) + 13) % 12;
            let gradoHash = (parseInt(anio) * (index + 3)) % 30;
            let estado = (parseInt(anio) + index) % 5 === 0 ? "Retrógrado 🔴" : "Directo";
            return {
                astro: astro,
                signo: signosList[hash],
                posicion: `${gradoHash}° ${Math.floor(gradoHash * 1.8)}'`,
                estado: estado
            };
        });
    }
};
