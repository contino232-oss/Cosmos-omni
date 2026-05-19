// ==========================================================================
// COSMOS OMNI 2026 - BASE DE DATOS MÍSTICA Y ASTRAL COMPLETA (data.js)
// ==========================================================================

const COSMOS_DATA = {
    // El Cielo en Vivo (Datos base por defecto antes de la llamada a la API)
    cieloVivo: [
        { id: "sol", nombre: "Sol", signo: "Tauro", posicion: "28° 34'", estado: "Directo", cat: "mayores", isAsteroide: false },
        { id: "luna", nombre: "Luna", signo: "Géminis", posicion: "14° 12'", estado: "Rápida", cat: "mayores", isAsteroide: false },
        { id: "mercurio", nombre: "Mercurio", signo: "Tauro", posicion: "05° 11'", estado: "Directo (Sombra Post)", cat: "mayores", isAsteroide: false },
        { id: "venus", nombre: "Venus", signo: "Géminis", posicion: "11° 45'", estado: "Directo", cat: "mayores", isAsteroide: false },
        { id: "marte", nombre: "Marte", signo: "Aries", posicion: "22° 19'", estado: "Directo", cat: "mayores", isAsteroide: false },
        { id: "jupiter", nombre: "Júpiter", signo: "Géminis", posicion: "29° 02'", estado: "Directo", cat: "mayores", isAsteroide: false },
        { id: "saturno", nombre: "Saturno", signo: "Aries", posicion: "02° 55'", estado: "Directo", cat: "mayores", isAsteroide: false },
        { id: "urano", nombre: "Urano", signo: "Tauro", posicion: "28° 10'", estado: "Directo", cat: "mayores", isAsteroide: false },
        { id: "neptuno", nombre: "Neptuno", signo: "Aries", posicion: "02° 14'", estado: "Directo", cat: "mayores", isAsteroide: false },
        { id: "pluton", nombre: "Plutón", signo: "Acuario", posicion: "03° 44'", estado: "Retrógrado 🔴", cat: "mayores", isAsteroide: false },
        { id: "quiron", nombre: "Quirón", signo: "Aries", posicion: "26° 50'", estado: "Directo", cat: "asteroides", isAsteroide: true, badge: "Sanador" },
        { id: "lilit", nombre: "Lilith", signo: "Libra", posicion: "18° 05'", estado: "Media", cat: "asteroides", isAsteroide: true, badge: "Sombra" },
        { id: "nodo_norte", nombre: "Nodo Norte", signo: "Piscis", posicion: "26° 14'", estado: "Retrógrado 🔴", cat: "asteroides", isAsteroide: true, badge: "Kármico" },
        { id: "palas", nombre: "Palas Atenea", signo: "Sagitario", posicion: "08° 30'", estado: "Retrógrado 🔴", cat: "asteroides", isAsteroide: true, badge: "Asteroide" },
        { id: "vesta", nombre: "Vesta", signo: "Cáncer", posicion: "12° 40'", estado: "Directo", cat: "asteroides", isAsteroide: true, badge: "Asteroide" },
        { id: "ceres", nombre: "Ceres", signo: "Capricornio", posicion: "19° 11'", estado: "Directo", cat: "asteroides", isAsteroide: true, badge: "Nutrición" },
        { id: "juno", nombre: "Juno", signo: "Escorpio", posicion: "02° 45'", estado: "Retrógrado 🔴", cat: "asteroides", isAsteroide: true, badge: "Compromiso" }
    ],

    // Almanaque Lunar de Mayo 2026 (Monitoreo dinámico)
    almanaqueLunar: [
        { dia: "01/05", fase: "🌕 Luna Llena", grado: "11° Escorpio", vacio: "04:12 a 09:30" },
        { dia: "05/05", fase: "🌗 Menguante", grado: "15° Acuario", vacio: "No registra" },
        { dia: "09/05", fase: "🌗 Menguante", grado: "28° Piscis", vacio: "18:22 a 22:15" },
        { dia: "16/05", fase: "🌑 Luna Nueva", grado: "25° Tauro", vacio: "01:05 a 03:40" },
        { dia: "19/05", fase: "🌒 Creciente", grado: "14° Géminis", vacio: "En curso" },
        { dia: "24/05", fase: "🌓 Cuarto Creciente", grado: "03° Virgo", vacio: "12:00 a 15:45" },
        { dia: "31/05", fase: "🌕 Luna Llena", grado: "09° Sagitario", vacio: "21:10 a 01:20" }
    ],

    eclipses: [
        { nombre: "Eclipse Lunar Total en Virgo", fecha: "03 de Marzo 2026", detalle: "Cierre kármico de procesos de ordenamiento, salud y purificación sistémica." },
        { nombre: "Eclipse Solar Anular en Piscis", fecha: "17 de Marzo 2026", detalle: "Disolución de viejas estructuras espirituales e inicio de profunda entrega intuitiva." },
        { nombre: "Eclipse Solar Parcial en Leo", fecha: "12 de Agosto 2026", detalle: "Reseteo de la expresión de la identidad individual y el liderazgo del corazón." },
        { nombre: "Eclipse Lunar Parcial en Acuario", fecha: "28 de Agosto 2026", detalle: "Evaluación en dinámicas colectivas, redes humanas y proyectos sociales." }
    ],

    timeline: [
        { fecha: "20 May", evento: "Ingreso Solar", desc: "El Sol ingresa a Géminis, encendiendo las redes de comunicación." },
        { fecha: "22 May", evento: "Trígono Marte-Lilit", desc: "Acción asertiva alineada con deseos profundos relegados." },
        { fecha: "24 May", evento: "Luna Cuarto Creciente", desc: "Momento de dar dirección concreta a lo sembrado." },
        { fecha: "29 May", evento: "Mercurio ingresa a Géminis", desc: "Mentalidad ágil y flujos de información veloces." },
        { fecha: "01 Jun", evento: "Luna Llena en Sagitario", desc: "Clímax de verdades y revelaciones sobre nuestras búsquedas." }
    ],

    retrogradaciones: [
        { planeta: "Mercurio", periodo: "28 Mar - 20 Abr", sombra: "12 Mar / 08 May", critico: "23° Piscis a 08° Piscis", estado: "Directo", clase: "estado-directo" },
        { planeta: "Plutón", periodo: "27 Abr - 02 Oct", sombra: "09 Ene / 20 Nov", critico: "04° Acuario a 01° Acuario", estado: "Retrógrado 🔴", clase: "retro-active" },
        { planeta: "Saturno", periodo: "13 Jul - 28 Nov", sombra: "22 Abr / 19 Dic", critico: "05° Aries a 00° Aries", estado: "Sombra Pre 🟡", clase: "shadow-pre" },
        { planeta: "Neptuno", periodo: "04 Jul - 10 Dic", sombra: "15 Mar / 30 Dic", critico: "04° Aries a 01° Aries", estado: "Sombra Pre 🟡", clase: "shadow-pre" }
    ],

    // El Círculo Zodiacal Multi-Capa (Claves, Regencias Planetarias, Deidades y Regencias Físicas)
    signos: [
        { nombre: "Aries", glifo: "♈", elemento: "Fuego", keyword: "Yo Soy", regente: "Marte", deidad: "Ares / Atenea (Guerra Justa)", fisica: "Cabeza, cerebro, ojos y cráneo", desc: "Impulso vital primario, coraje y liderazgo directo." },
        { nombre: "Tauro", glifo: "♉", elemento: "Tierra", keyword: "Yo Tengo", regente: "Venus", deidad: "Afrodita / Hera (Abundancia)", fisica: "Cuello, garganta, cuerdas vocales y tiroides", desc: "Consolidación material, paciencia, placer sensorial y enraizamiento." },
        { nombre: "Géminis", glifo: "♊", elemento: "Aire", keyword: "Yo Comunico", regente: "Mercurio", deidad: "Hermes (El Mensajero de los Dioses)", fisica: "Hombros, brazos, manos y sistema pulmonar", desc: "Curiosidad intelectual, puentes comunicacionales y dualidad activa." },
        { nombre: "Cáncer", glifo: "♋", elemento: "Agua", keyword: "Yo Siento", regente: "Luna", deidad: "Artemisa / Selene (Protección Lunar)", fisica: "Estómago, senos, matriz y fluidos digestivos", desc: "Nutrición emocional, raíces ancestrales y resguardo del espacio íntimo." },
        { nombre: "Leo", glifo: "♌", elemento: "Fuego", keyword: "Yo Irradio", regente: "Sol", deidad: "Apolo (Dios del Sol y de las Artes)", fisica: "Corazón, columna vertebral superior y arterias", desc: "Soberanía de la identidad, niño interno creativo y magnetismo." },
        { nombre: "Virgo", glifo: "♍", elemento: "Tierra", keyword: "Yo Analizo", regente: "Mercurio", deidad: "Deméter / Astrea (Justicia y Cosecha)", fisica: "Sistema intestinal, bazo y asimilación de nutrientes", desc: "Meticulosidad, purificación, discernimiento y servicio sistémico." },
        { nombre: "Libra", glifo: "♎", elemento: "Aire", keyword: "Yo Balanceo", regente: "Venus", deidad: "Temis (Diosa de la Justicia) / Afrodita", fisica: "Riñones, región lumbar y equilibrio hídrico", desc: "Búsqueda de la armonía, dinámicas vinculares y acuerdos estéticos." },
        { nombre: "Escorpio", glifo: "♏", elemento: "Agua", keyword: "Yo Transmuto", regente: "Plutón / Marte", deidad: "Hades (Inframundo) / Hécate", fisica: "Órganos reproductores, sistema excretor y próstata", desc: "Alquimia emocional profunda, crisis evolutivas y poder oculto." },
        { nombre: "Sagitario", glifo: "♐", elemento: "Fuego", keyword: "Yo Comprendo", regente: "Júpiter", deidad: "Zeus (Padre del Olimpo y de los Dioses)", fisica: "Hígados, caderas, muslos y nervio ciático", desc: "Búsqueda de sentido, expansión filosófica y travesías de trascendencia." },
        { nombre: "Capricornio", glifo: "♑", elemento: "Tierra", keyword: "Yo Estructuro", regente: "Saturno", deidad: "Cronos (El Dios del Tiempo y la Cosecha)", fisica: "Sistema óseo, esqueleto, rodillas, dientes y piel", desc: "Maestría temporal, límites en la materia y responsabilidad civil." },
        { nombre: "Acuario", glifo: "♒", elemento: "Aire", keyword: "Yo Sé", regente: "Urano / Saturno", deidad: "Prometeo (Portador del Fuego Divino)", fisica: "Pantorrillas, tobillos y sistema circulatorio general", desc: "Vanguardia comunitaria, saltos cuánticos de consciencia y redes." },
        { nombre: "Piscis", glifo: "♓", elemento: "Agua", keyword: "Yo Me Disuelvo", regente: "Neptuno / Júpiter", deidad: "Poseidón (Señor de los Océanos Absolutos)", fisica: "Pies, sistema linfático y receptores inmunitarios", desc: "Amor universal, disolución del ego y empatía mística total." }
    ],

    // Las 12 Casas Astrológicas
    casas: [
        { numero: "Casa 1", glifo: "🏠", clasificacion: "Angular (Ascendente)", desc: "La personalidad externa, corporalidad, el inicio de los ciclos y la máscara de proyección biológica." },
        { numero: "Casa 2", glifo: "🏠", clasificacion: "Sucedánea", desc: "Escala de valores, recursos financieros propios, talentos orgánicos y sustento de supervivencia." },
        { numero: "Casa 3", glifo: "🏠", clasificacion: "Cadente", desc: "Mente concreta, hermanos, entorno próximo, comunicación diaria y pequeños traslados." },
        { numero: "Casa 4", glifo: "🏠", clasificacion: "Angular (Fondo del Cielo)", desc: "El hogar raíz, el linaje familiar privado, el inconsciente doméstico y la base terminal." },
        { numero: "Casa 5", glifo: "🏠", clasificacion: "Sucedánea", desc: "Autoexpresión lúdica, romances creativos, proyectos del corazón, hijos y magnetismo gozoso." },
        { numero: "Casa 6", glifo: "🏠", clasificacion: "Cadente", desc: "Rutinas laborales, salud física diaria, somatizaciones, hábitos de servicio y mascotas pequeñas." },
        { numero: "Casa 7", glifo: "🏠", clasificacion: "Angular (Descendente)", desc: "El encuentro con el Otro. Matrimonios, sociedades legales, espejos vinculares directos." },
        { numero: "Casa 8", glifo: "🏠", clasificacion: "Sucedánea", desc: "Procesos de transmutación, tabúes, psicología profunda, finanzas compartidas y herencias kármicas." },
        { numero: "Casa 9", glifo: "🏠", clasificacion: "Cadente", desc: "Estudios superiores, cosmovisiones místicas, viajes transoceánicos y el sentido de la verdad." },
        { numero: "Casa 10", glifo: "🏠", clasificacion: "Angular (Medio Cielo)", desc: "Estatus profesional público, vocación mayor, la figura de autoridad y el legado social manifiesto." },
        { numero: "Casa 11", glifo: "🏠", clasificacion: "Sucedánea", desc: "Grupos de afinidad ideológica, redes de contención, ideales comunitarios y protectores." },
        { numero: "Casa 12", glifo: "🏠", clasificacion: "Cadente", desc: "Inconsciente colectivo, disolución monástica, encierros, karmas transpersonales y el útero astral." }
    ],
