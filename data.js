// ==========================================================================
// COSMOS OMNI 2026 - BASE DE DATOS MÍSTICA Y ASTRAL TOTAL (data.js)
// ==========================================================================

const COSMOS_DATA = {
    // El Cielo en Vivo (Estructura base que luego sobreescriben las APIs)
    cieloVivo: [
        { id: "sol", nombre: "Sol", signo: "Tauro", posicion: "28° 34'", estado: "Directo", cat: "mayores", isAsteroide: false },
        { id: "luna", nombre: "Luna", signo: "Géminis", posicion: "14° 12'", estado: "Rápida", cat: "mayores", isAsteroide: false },
        { id: "mercurio", nombre: "Mercurio", signo: "Tauro", posicion: "05° 11'", estado: "Directo", cat: "mayores", isAsteroide: false },
        { id: "venus", nombre: "Venus", signo: "Géminis", posicion: "11° 45'", estado: "Directo", cat: "mayores", isAsteroide: false },
        { id: "marte", nombre: "Marte", signo: "Aries", posicion: "22° 19'", estado: "Directo", cat: "mayores", isAsteroide: false },
        { id: "jupiter", nombre: "Júpiter", signo: "Géminis", posicion: "29° 02'", estado: "Directo", cat: "mayores", isAsteroide: false },
        { id: "saturno", nombre: "Saturno", signo: "Aries", posicion: "02° 55'", estado: "Sombra Pre", cat: "mayores", isAsteroide: false },
        { id: "urano", nombre: "Urano", signo: "Tauro", posicion: "28° 10'", estado: "Directo", cat: "mayores", isAsteroide: false },
        { id: "neptuno", nombre: "Neptuno", signo: "Aries", posicion: "02° 14'", estado: "Directo", cat: "mayores", isAsteroide: false },
        { id: "pluton", nombre: "Plutón", signo: "Acuario", posicion: "03° 44'", estado: "Retrógrado 🔴", cat: "mayores", isAsteroide: false },
        { id: "quiron", nombre: "Quirón", signo: "Aries", posicion: "26° 50'", estado: "Directo", cat: "asteroides", isAsteroide: true, badge: "Sanador" },
        { id: "lilit", nombre: "Lilith", signo: "Libra", posicion: "18° 05'", estado: "Media", cat: "asteroides", isAsteroide: true, badge: "Sombra" },
        { id: "nodo_norte", nombre: "Nodo Norte", signo: "Piscis", posicion: "26° 14'", estado: "Retrógrado 🔴", cat: "asteroides", isAsteroide: true, badge: "Kármico" },
        { id: "nodo_sur", nombre: "Nodo Sur", signo: "Virgo", posicion: "26° 14'", estado: "Retrógrado 🔴", cat: "asteroides", isAsteroide: true, badge: "Kármico" },
        { id: "palas", nombre: "Palas Atenea", signo: "Sagitario", posicion: "08° 30'", estado: "Retrógrado", cat: "asteroides", isAsteroide: true, badge: "Estrategia" },
        { id: "vesta", nombre: "Vesta", signo: "Cáncer", posicion: "12° 40'", estado: "Directo", cat: "asteroides", isAsteroide: true, badge: "Fuego Sagrado" },
        { id: "ceres", nombre: "Ceres", signo: "Capricornio", posicion: "19° 11'", estado: "Directo", cat: "asteroides", isAsteroide: true, badge: "Nutrición" },
        { id: "juno", nombre: "Juno", signo: "Escorpio", posicion: "02° 45'", estado: "Retrógrado 🔴", cat: "asteroides", isAsteroide: true, badge: "Compromiso" }
    ],

    // Almanaque Lunar Extendido Completo 2026 (Para no tocar más códigos este año)
    almanaqueLunar: [
        // MAYO
        { dia: "01/05", fase: "🌕 Luna Llena", grado: "11° Escorpio", vacio: "04:12 a 09:30" },
        { dia: "09/05", fase: "🌗 Cuarto Menguante", grado: "28° Piscis", vacio: "18:22 a 22:15" },
        { dia: "16/05", fase: "🌑 Luna Nueva", grado: "25° Tauro", vacio: "01:05 a 03:40" },
        { dia: "24/05", fase: "🌓 Cuarto Creciente", grado: "03° Virgo", vacio: "12:00 a 15:45" },
        { dia: "31/05", fase: "🌕 Luna Llena", grado: "09° Sagitario", vacio: "21:10 a 01:20" },
        // JUNIO
        { dia: "07/06", fase: "🌗 Cuarto Menguante", grado: "16° Piscis", vacio: "05:10 a 09:40" },
        { dia: "14/06", fase: "🌑 Luna Nueva", grado: "23° Géminis", vacio: "11:15 a 14:00" },
        { dia: "22/06", fase: "🌓 Cuarto Creciente", grado: "00° Libra", vacio: "18:30 a 21:55" },
        { dia: "29/06", fase: "🌕 Luna Llena", grado: "07° Capricornio", vacio: "02:05 a 04:50" },
        // JULIO
        { dia: "07/07", fase: "🌗 Cuarto Menguante", grado: "15° Aries", vacio: "12:40 a 16:10" },
        { dia: "14/07", fase: "🌑 Luna Nueva", grado: "21° Cáncer", vacio: "22:00 a 01:15" },
        { dia: "21/07", fase: "🌓 Cuarto Creciente", grado: "28° Libra", vacio: "03:15 a 07:45" },
        { dia: "28/07", fase: "🌕 Luna Llena", grado: "05° Acuario", vacio: "09:50 a 13:20" },
        // AGOSTO
        { dia: "05/08", fase: "🌗 Cuarto Menguante", grado: "13° Tauro", vacio: "20:10 a 23:45" },
        { dia: "12/08", fase: "🌑 Luna Nueva (Eclipse)", grado: "20° Leo", vacio: "04:30 a 08:10" },
        { dia: "19/08", fase: "🌓 Cuarto Creciente", grado: "26° Escorpio", vacio: "11:15 a 15:00" },
        { dia: "28/08", fase: "🌕 Luna Llena (Eclipse)", grado: "04° Piscis", vacio: "17:40 a 20:30" },
        // SEPTIEMBRE
        { dia: "04/09", fase: "🌗 Cuarto Menguante", grado: "11° Géminis", vacio: "01:20 a 05:00" },
        { dia: "11/09", fase: "🌑 Luna Nueva", grado: "18° Virgo", vacio: "09:00 a 12:45" },
        { dia: "18/09", fase: "🌓 Cuarto Creciente", grado: "25° Sagitario", vacio: "16:10 a 19:30" },
        { dia: "26/09", fase: "🌕 Luna Llena", grado: "03° Aries", vacio: "22:50 a 02:15" },
        // OCTUBRE
        { dia: "03/10", fase: "🌗 Cuarto Menguante", grado: "10° Cáncer", vacio: "06:40 a 10:20" },
        { dia: "10/10", fase: "🌑 Luna Nueva", grado: "17° Libra", vacio: "14:15 a 18:00" },
        { dia: "18/10", fase: "🌓 Cuarto Creciente", grado: "24° Capricornio", vacio: "21:30 a 01:00" },
        { dia: "25/10", fase: "🌕 Luna Llena", grado: "02° Tauro", vacio: "04:10 a 07:45" },
        // NOVIEMBRE
        { dia: "01/11", fase: "🌗 Cuarto Menguante", grado: "09° Leo", vacio: "12:00 a 15:30" },
        { dia: "09/11", fase: "🌑 Luna Nueva", grado: "16° Escorpio", vacio: "20:20 a 23:55" },
        { dia: "17/11", fase: "🌓 Cuarto Creciente", grado: "24° Acuario", vacio: "03:40 a 07:15" },
        { dia: "24/11", fase: "🌕 Luna Llena", grado: "01° Géminis", vacio: "10:15 a 13:45" },
        // DICIEMBRE
        { dia: "01/12", fase: "🌗 Cuarto Menguante", grado: "09° Virgo", vacio: "18:00 a 21:20" },
        { dia: "09/12", fase: "🌑 Luna Nueva", grado: "17° Sagitario", vacio: "03:10 a 06:45" },
        { dia: "16/12", fase: "🌓 Cuarto Creciente", grado: "24° Piscis", vacio: "11:00 a 14:30" },
        { dia: "23/12", fase: "🌕 Luna Llena", grado: "01° Cáncer", vacio: "17:50 a 21:15" },
        { dia: "31/12", fase: "🌗 Cuarto Menguante", grado: "09° Libra", vacio: "01:05 a 04:30" }
    ],

    // El Círculo Zodiacal Multi-Capa Impermeable
    signos: [
        { nombre: "Aries", glifo: "♈", elemento: "Fuego", keyword: "Yo Soy", regente: "Marte", deidad: "Ares / Atenea (Guerra y Estrategia)", fisica: "Cabeza, cerebro, ojos, cráneo y rostro", desc: "Impulso vital primario, coraje inquebrantable, temperamento pionero y el chispazo inicial de toda existencia material." },
        { nombre: "Tauro", glifo: "♉", elemento: "Tierra", keyword: "Yo Tengo", regente: "Venus", deidad: "Afrodita / Hera (Abundancia y Materia)", fisica: "Cuello, garganta, cuerdas vocales, tiroides y cervicales", desc: "Estabilidad orgánica, perseverancia, acumulación inteligente de recursos y la maestría del goce y placer sensorial." },
        { nombre: "Géminis", glifo: "♊", elemento: "Aire", keyword: "Yo Comunico", regente: "Mercurio", deidad: "Hermes (El Mensajero Divino transgresor)", fisica: "Hombros, brazos, manos, sistema nervioso y pulmones", desc: "Curiosidad insaciable, puentes asociativos, pensamiento lógico bipolar e intercambio constante de flujos informativos." },
        { nombre: "Cáncer", glifo: "♋", elemento: "Agua", keyword: "Yo Siento", regente: "Luna", deidad: "Artemisa / Selene (Protección e Inconsciente)", fisica: "Estómago, senos, matriz, útero y fluidos corporales", desc: "Nutrición emocional profunda, memoria celular ancestral, resguardo familiar y la gestación en el espacio íntimo." },
        { nombre: "Leo", glifo: "♌", elemento: "Fuego", keyword: "Yo Irradio", regente: "Sol", deidad: "Apolo (Dios solar, de las artes y la profecía)", fisica: "Corazón, columna vertebral superior, espalda y arterias", desc: "Soberanía del Yo, irradiación de la identidad pura, orgullo creativo y el centro magnético del niño interno." },
        { nombre: "Virgo", glifo: "♍", elemento: "Tierra", keyword: "Yo Analizo", regente: "Mercurio", deidad: "Deméter / Astrea (Justicia, Orden y Cosecha)", fisica: "Sistema intestinal, bazo, abdomen y asimilación", desc: "Meticulosidad analítica, discernimiento crítico, optimización del entorno, purificación psicofísica y espíritu de servicio." },
        { nombre: "Libra", glifo: "♎", elemento: "Aire", keyword: "Yo Balanceo", regente: "Venus", deidad: "Temis (Diosa de la Justicia Cósmica y el Orden)", fisica: "Riñones, región lumbar, glándulas suprarrenales y piel", desc: "Búsqueda incansable de la armonía estética, diplomacia vinculante, el encuentro real con el Otro y balance simétrico." },
        { nombre: "Escorpio", glifo: "♏", elemento: "Agua", keyword: "Yo Transmuto", regente: "Plutón / Marte", deidad: "Hades (Señor del Inframundo) / Hécate", fisica: "Órganos reproductores, genitales, sistema excretor y colon", desc: "Alquimia psíquica radical, crisis evolutivas profundas, magnetismo oculto, manejo del poder colectivo y muerte mística." },
        { nombre: "Sagitario", glifo: "♐", elemento: "Fuego", keyword: "Yo Comprendo", regente: "Júpiter", deidad: "Zeus (Soberano del Olimpo, dador de leyes)", fisica: "Hígado, caderas, muslos, nalgas y nervio ciático", desc: "Expansión filosófica, dirección de la flecha mental hacia la verdad, optimismo cósmico, leyes universales y docencia." },
        { nombre: "Capricornio", glifo: "♑", elemento: "Tierra", keyword: "Yo Estructuro", regente: "Saturno", deidad: "Cronos (Señor del Tiempo, el Destino y la Ley)", fisica: "Esqueleto, sistema óseo, rodillas, articulaciones y dientes", desc: "Maduración a través del tiempo, límites realistas en la materia, autosuficiencia, rigor social y la cumbre del logro tangible." },
        { nombre: "Acuario", glifo: "♒", elemento: "Aire", keyword: "Yo Sé", regente: "Urano / Saturno", deidad: "Prometeo (Titán que robó el fuego de la sabiduría)", fisica: "Pantorrillas, tobillos, sistema circulatorio y tendones", desc: "Vanguardia comunitaria, revolución ideológica, saltos cuánticos, libertad individual y la red del conocimiento grupal." },
        { nombre: "Piscis", glifo: "♓", elemento: "Agua", keyword: "Yo Me Disuelvo", regente: "Neptuno / Júpiter", deidad: "Poseidón (Señor absoluto de los mares insondables)", fisica: "Pies, sistema linfático, mucosas y aparato inmune", desc: "Amor universal incondicional, disolución terminal del ego en el Todo, hipersensibilidad mediúmnica y arte místico." }
    ],

    // Biblioteca de Arquetipos de Astros y Asteroides Expandida con Deidades y Palabras Clave
    astros: [
        { nombre: "El Sol", glifo: "☀️", palabra: "Yo Existo / Consciencia", deidad: "Apolo", desc: "El centro radiante de la identidad, el pulso voluntario y vital que organiza toda la carta natal." },
        { nombre: "La Luna", glifo: "🌙", palabra: "Yo Protejo / Reacción", deidad: "Artemisa", desc: "El refugio emocional, los automatismos de defensa inconscientes y los ciclos de memoria biológica." },
        { nombre: "Mercurio", glifo: "☿", palabra: "Yo Comunico / Pensamiento", deidad: "Hermes", desc: "El procesamiento cognitivo, la transmisión de la palabra, los enlaces comerciales y la plasticidad mental." },
        { nombre: "Venus", glifo: "♀", palabra: "Yo Atraigo / Deseo", deidad: "Afrodita", desc: "La función de magnetismo vincular, el auto-esquema de valor, la estética, la armonía y la apertura al placer." },
        { nombre: "Marte", glifo: "♂", palabra: "Yo Conquisto / Acción", deidad: "Ares", desc: "La fuerza de penetración, el coraje asertivo, la demarcación de límites territoriales, el enojo y la libido activa." },
        { nombre: "Júpiter", glifo: "♃", palabra: "Yo Expando / Confianza", deidad: "Zeus", desc: "La síntesis filosófica, la confianza ciega en el devenir de la vida, la abundancia y los maestros guías." },
        { nombre: "Saturno", glifo: "♄", palabra: "Yo Consolido / Ley", deidad: "Cronos", desc: "El maestro del tiempo, la estructura limitante necesaria, el principio de realidad y la cristalización material." },
        { nombre: "Urano", glifo: "♅", palabra: "Yo Libero / Disrupción", deidad: "Prometeo", desc: "El rayo de la intuición directa, la fractura de estructuras obsoletas, la individuación radical y la tecnología." },
        { nombre: "Neptuno", glifo: "♆", palabra: "Yo Sueño / Disolución", deidad: "Poseidón", desc: "El océano de la fantasía, la sensibilidad artística mística, la empatía universal y las trampas de la ilusión." },
        { nombre: "Plutón", glifo: "♇", palabra: "Yo Transmuto / Poder", deidad: "Hades", desc: "Las pulsiones de muerte y resurrección, el control del inframundo psíquico, los recursos ocultos y la purga kármica." },
        { nombre: "Quirón", glifo: "⚷", palabra: "Yo Sano / La Herida", deidad: "Quirón (Centauro)", desc: "La grieta incurable del alma que, al ser integrada, se convierte en el don de sanación y maestría para el colectivo." },
        { nombre: "Lilith", glifo: "⚸", palabra: "Yo Desobedezco / Sombra", deidad: "Lilith (Primera mujer)", desc: "El punto de insurgencia salvaje, el deseo reprimido indomable y el poder oculto que no se somete a pactos patriarcales." },
        { nombre: "Nodo Norte", glifo: "☊", palabra: "Yo Evoluciono / Destino", deidad: "Las Moiras / El Dharma", desc: "La brújula evolutiva. El camino desconocido que el alma debe incorporar en esta encarnación para crecer." },
        { nombre: "Nodo Sur", glifo: "☋", palabra: "Yo Suelto / Pasado", deidad: "Las Moiras / El Karma", desc: "La zona de confort kármica. Talentos innatos automáticos que corren el riesgo de convertirse en vicios de estancamiento." }
    ],

    // Biblioteca del Tarot Rider-Waite (Los 22 Arcanos Mayores + Los 4 Ases completos)
    tarot: [
        { id: "0_loco", nombre: "El Loco (0)", tipo: "mayores", glifo: "🃏", arcano: "Principio Absoluto", img: "img/tarot/0_loco.jpg", desc: "Salto cuántico al vacío. Desapego estructural absoluto, libertad indomable, inocencia arquetípica e inicio de la gran travesía." },
        { id: "1_mago", nombre: "El Mago (I)", tipo: "mayores", glifo: "🧙‍♂️", arcano: "Voluntad Consciente", img: "img/tarot/1_mago.jpg", desc: "Canalización activa del éter. Capacidad de manifestar realidades físicas utilizando las herramientas divinas sobre la mesa." },
        { id: "2_sacerdotisa", nombre: "La Sacerdotisa (II)", tipo: "mayores", glifo: "🧕", arcano: "Memoria Intuitiva", img: "img/tarot/2_sacerdotisa.jpg", desc: "Guardiana del velo mistérico. Intuición pura, pasividad fértil, lectura de registros inconscientes y gestación silenciosa." },
        { id: "3_emperatriz", nombre: "La Emperatriz (III)", tipo: "mayores", glifo: "👑", arcano: "Naturaleza Abundante", img: "img/tarot/3_emperatriz.jpg", desc: "Irradiación creativa exponencial. Fertilidad de la Madre Tierra, disfrute sensorial desinhibido y plasmación de la belleza." },
        { id: "4_emperador", nombre: "El Emperador (IV)", tipo: "mayores", glifo: "🛡️", arcano: "Estabilidad Territorial", img: "img/tarot/4_emperador.jpg", desc: "Ordenamiento lógico, cimientos firmes, autoridad incorruptible, delimitación de fronteras y poder de concreción fáctico." },
        { id: "5_papa", nombre: "El Sumo Sacerdote (V)", tipo: "mayores", glifo: "🏛️", arcano: "Puente Espiritual", img: "img/tarot/5_papa.jpg", desc: "Transmisor de dogmas sagrados, ritos tradicionales y códigos morales. El maestro que tiende el puente entre lo divino y lo humano." },
        { id: "6_enamorados", nombre: "Los Enamorados (VI)", tipo: "mayores", glifo: "💞", arcano: "Elección del Corazón", img: "img/tarot/6_enamorados.jpg", desc: "La encrucijada de la polaridad. Reconocimiento del reflejo vincular en el espejo del Otro y la decisión consciente basada en el amor." },
        { id: "7_carro", nombre: "El Carro (VII)", tipo: "mayores", glifo: "🛒", arcano: "Conquista Dirigida", img: "img/tarot/7_carro.jpg", desc: "Triunfo del espíritu enfocado. Control magistral de las fuerzas opuestas en movimiento, determinación heroica y avance vectorial." },
        { id: "8_fuerza", nombre: "La Fuerza (VIII)", tipo: "mayores", glifo: "🦁", arcano: "Dominio Interior", img: "img/tarot/8_fuerza.jpg", desc: "Alquimia de las pulsiones animales. Coraje blando, control del ego mediante la compasión y soberanía interna sin violencia." },
        { id: "9_ermitano", nombre: "El Ermitaño (IX)", tipo: "mayores", glifo: "🏮", arcano: "Farol del Alma", img: "img/tarot/9_ermitano.jpg", desc: "Retiro estratégico en soledad fecunda. El sabio del tiempo que camina alumbrando sus propios pasos con prudencia extrema." },
        { id: "10_rueda", nombre: "La Rueda de la Fortuna (X)", tipo: "mayores", glifo: "☸️", arcano: "Giro del Destino", img: "img/tarot/10_rueda.jpg", desc: "Ciclos kármicos inevitables. Movimiento cósmico perpetuo, subidas y bajadas de la fortuna y el entendimiento del cambio permanente." },
        { id: "11_justicia", nombre: "La Justicia (XI)", tipo: "mayores", glifo: "⚖️", arcano: "Causa y Efecto", img: "img/tarot/11_justicia.jpg", desc: "Verdad fría y objetiva. Corte de la espada del discernimiento, balance kármico riguroso y honestidad radical con la realidad." },
        { id: "12_colgado", nombre: "El Colgado (XII)", tipo: "mayores", glifo: "🤸", arcano: "Inversión de Perspectiva", img: "img/tarot/12_colgado.jpg", desc: "Sacrificio iniciático del ego. Detención absoluta del movimiento externo, rendición espiritual y el don de ver el mundo al revés." },
        { id: "13_muerte", nombre: "La Muerte (XIII)", tipo: "mayores", glifo: "💀", arcano: "Poda Transmutadora", desc: "Corte radical de lo obsoleto. Muerte psicológica, fin de un ciclo estructural profundo y arado de la tierra para el renacimiento." },
        { id: "14_templanza", nombre: "La Templanza (XIV)", tipo: "mayores", glifo: "⚱️", arcano: "Alquimia de Fluidos", desc: "Mezcla armónica de polaridades. Sanación angelical, paciencia molecular, transmutación suave y balance de los cuerpos sutiles." },
        { id: "15_diablo", nombre: "El Diablo (XV)", tipo: "mayores", glifo: "😈", arcano: "Fuerza Sombría", desc: "Fascinación con la materia, cadenas inconscientes, magnetismo sexual denso, tabúes liberados y el oro del inframundo psíquico." },
        { id: "16_torre", nombre: "La Torre (XVI)", tipo: "mayores", glifo: "💥", arcano: "Rayo de Liberación", desc: "Fractura drástica de las cárceles mentales construidas por el ego. Caída de falsas estructuras y revelación de la verdad." },
        { id: "17_estrella", nombre: "La Estrella (XVII)", tipo: "mayores", glifo: "⭐", arcano: "Fuga de Esperanza", desc: "Conexión directa con los hilos invisibles del cosmos. Inspiración pura, sanación de heridas antiguas, entrega y guía estelar." },
        { id: "18_luna_t", nombre: "La Luna (XVIII)", tipo: "mayores", glifo: "🐺", arcano: "Océano Inconsciente", desc: "Noche oscura del alma. Espejismos, miedos ancestrales, potencial mediúmnico, distorsiones ilusorias y fantasías sagradas." },
        { id: "19_sol_t", nombre: "El Sol (XIX)", tipo: "mayores", glifo: "👶", arcano: "Claridad Manifiesta", desc: "Éxito absoluto, vitalidad recuperada, fraternidad transparente, disolución de sombras y la dicha del renacer radiante." },
        { id: "20_juicio", nombre: "El Juicio (XX)", tipo: "mayores", glifo: "🎺", arcano: "Despertar Vocacional", desc: "Llamado del éter. Resurrección de etapas muertas, balance terminal, absolución de culpas pasadas y elevación de consciencia." },
        { id: "21_mundo", nombre: "El Mundo (XXI)", tipo: "mayores", glifo: "🌍", arcano: "Danza Terminal", desc: "Integración holística perfecta del Mandala. Cierre de un ciclo macrocósmico con maestría absoluta y coronación del ser." },
        // ASES
        { id: "as_bastos", nombre: "As de Bastos", tipo: "menores", glifo: "🔥", arcano: "Chispa Primordial", desc: "Erupción de voluntad volcánica, deseo sexual, vigor creativo e inicio potente en el elemento Fuego." },
        { id: "as_copas", nombre: "As de Copas", tipo: "menores", glifo: "💧", arcano: "Manantial del Sentir", desc: "Apertura cordial absoluta, intuición desbordante, concepción, sanación emocional y comunión mística en Agua." },
        { id: "as_espadas", nombre: "As de Espadas", tipo: "menores", glifo: "⚔️", arcano: "Relámpago Mental", desc: "Verdad cortante indiscutible, agudeza cognitiva, quiebre de la confusión y victoria de la razón en Aire." },
        { id: "as_oros", nombre: "As de Oros", tipo: "menores", glifo: "🪙", arcano: "Semilla Material", desc: "Oportunidad financiera tangible, arraigo biológico óptimo, manifestación de recursos y riqueza en Tierra." }
    ],

    // Herbolario Místico Expandido (Imágenes en vivo de Unsplash estables)
    herbolario: [
        { nombre: "Jazmín", glifo: "🌿", regencia: "Luna / Agua", img: "https://images.unsplash.com/photo-1597848212624-a19eb35e2651?auto=format&fit=crop&w=400&q=80", uso: "Apertura psíquica radical, inducción a sueños proféticos clarificadores, pacificación del sistema nervioso central y despojo áurico." },
        { nombre: "Orégano", glifo: "🌿", regencia: "Mercurio / Aire", img: "https://images.unsplash.com/photo-1608797178974-15b35a61d121?auto=format&fit=crop&w=400&q=80", uso: "Activación inmediata del flujo pránico estancado, cortes de lazos parásitos en el plano astral inferior y blindaje del campo hogareño." },
        { nombre: "Romero", glifo: "🌱", regencia: "Sol / Fuego", img: "https://images.unsplash.com/photo-1515543904379-3d757afe72e2?auto=format&fit=crop&w=400&q=80", uso: "Fijación mental y concentración gnóstica, limpieza drástica de miasmas por fuego protector e incremento masivo de la fuerza áurica." },
        { nombre: "Lavanda", glifo: "🪻", regencia: "Mercurio / Aire", img: "https://images.unsplash.com/photo-1528826725849-df60a22e9c66?auto=format&fit=crop&w=400&q=80", uso: "Armonización de ondas mentales distorsionadas, sellado de fugas energéticas astrales y consagración ritual de altares místicos." },
        { nombre: "Ruda", glifo: "🌿", regencia: "Marte / Fuego", img: "https://images.unsplash.com/photo-1628155930542-3c7a64e2c833?auto=format&fit=crop&w=400&q=80", uso: "Destrucción fulminante de larvas y parásitos energéticos, inversión de corrientes densas ambientales y escudo marciano inquebrantable." },
        { nombre: "Menta", glifo: "🌱", regencia: "Venus / Aire", img: "https://images.unsplash.com/photo-1626804475315-9644b37a2fe4?auto=format&fit=crop&w=400&q=80", uso: "Atracción de prosperidad material y flujos de abundancia, purificación de canales perceptivos y frescura mental ante crisis." },
        { nombre: "Salvia", glifo: "🌿", regencia: "Júpiter / Tierra", img: "https://images.unsplash.com/photo-1601610491492-49f39000676d?auto=format&fit=crop&w=400&q=80", uso: "Sahumado ancestral de sabiduría, corte de contratos kármicos obsoletos, longevidad celular y limpieza de memorias de dolor." }
    ],

    // Algoritmo determinista de simulación de efemérides planetarias
    calcularCieloHistorico: function(anio) {
        const signosList = ["Aries", "Tauro", "Géminis", "Cáncer", "Leo", "Virgo", "Libra", "Escorpio", "Sagitario", "Capricornio", "Acuario", "Piscis"];
        const astrosList = ["Sol", "Luna", "Mercurio", "Venus", "Marte", "Júpiter", "Saturno", "Urano", "Neptuno", "Plutón", "Quirón", "Lilith", "Nodo Norte"];
        
        return astrosList.map((astro, index) => {
            let hash = (parseInt(anio) * (index + 9) + 23) % 12;
            let gradoHash = (parseInt(anio) * (index + 7)) % 30;
            let estado = (parseInt(anio) + index) % 6 === 0 ? "Retrógrado 🔴" : "Directo";
            return {
                astro: astro,
                signo: signosList[hash],
                posicion: `${gradoHash}° ${Math.floor(gradoHash * 1.5)}'`,
                estado: estado
            };
        });
    }
};
