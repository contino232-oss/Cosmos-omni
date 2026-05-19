const ASTRO_DATA = {
    // --- LOS 22 ARCANOS MAYORES COMPLETOS (RIDER-WAITE) + 4 ASES ---
    tarot: [
        {
            id: "loco",
            nombre: "El Loco (0)",
            tipo: "mayores",
            imagen: "https://upload.wikimedia.org/wikipedia/commons/0/0b/RWS_Tarot_02_The_Fool.jpg",
            keywords: ["Inicios", "Espontaneidad", "Fe ciega", "Libertad"],
            descripcion: "El alma pura que inicia su viaje evolutivo sin ataduras materiales ni miedos al vacío."
        },
        {
            id: "mago",
            nombre: "El Mago (I)",
            tipo: "mayores",
            imagen: "https://upload.wikimedia.org/wikipedia/commons/d/de/RWS_Tarot_01_The_Magician.jpg",
            keywords: ["Manifestación", "Poder interior", "Habilidad", "Determinación"],
            descripcion: "Posee todas las herramientas de los elementos sobre la mesa para canalizar la voluntad divina en la Tierra."
        },
        {
            id: "sacerdotisa",
            nombre: "La Sacerdotisa (II)",
            tipo: "mayores",
            imagen: "https://upload.wikimedia.org/wikipedia/commons/8/88/RWS_Tarot_02_The_High_Priestess.jpg",
            keywords: ["Intuición", "Misterio", "Inconsciente", "Sabiduría pasiva"],
            descripcion: "La guardiana del velo y de los secretos profundos. Invita al retiro y a escuchar la voz interior."
        },
        {
            id: "emperatriz",
            nombre: "La Emperatriz (III)",
            tipo: "mayores",
            imagen: "https://upload.wikimedia.org/wikipedia/commons/d/d2/RWS_Tarot_03_The_Emperor.jpg",
            keywords: ["Abundancia", "Naturaleza", "Creatividad", "Fertilidad"],
            descripcion: "La Madre Tierra en pleno esplendor. Rige la gestación, la belleza sensual y la creación de vida."
        },
        {
            id: "emperador",
            nombre: "El Emperador (IV)",
            tipo: "mayores",
            imagen: "https://upload.wikimedia.org/wikipedia/commons/c/c3/RWS_Tarot_04_The_Emperor.jpg",
            keywords: ["Estructura", "Autoridad", "Estabilidad", "Límites firmes"],
            descripcion: "Establece las bases sólidas, las leyes y el orden social a través del poder de la disciplina."
        },
        {
            id: "hierofante",
            nombre: "El Hierofante (V)",
            tipo: "mayores",
            imagen: "https://upload.wikimedia.org/wikipedia/commons/8/8d/RWS_Tarot_05_The_Hierophant.jpg",
            keywords: ["Tradición", "Guía espiritual", "Educación", "Ortodoxia"],
            descripcion: "El maestro espiritual que transmite el conocimiento sagrado y los dogmas que unen a las comunidades."
        },
        {
            id: "enamorados",
            nombre: "Los Enamorados (VI)",
            tipo: "mayores",
            imagen: "https://upload.wikimedia.org/wikipedia/commons/3/3a/RWS_Tarot_06_The_Lovers.jpg",
            keywords: ["Elecciones", "Vínculos", "Alineación", "Valores duales"],
            descripcion: "Representa encrucijadas de vida que deben resolverse desde el corazón, uniendo opuestos complementarios."
        },
        {
            id: "carro",
            nombre: "El Carro (VII)",
            tipo: "mayores",
            imagen: "https://upload.wikimedia.org/wikipedia/commons/9/9b/RWS_Tarot_07_The_Chariot.jpg",
            keywords: ["Victoria", "Fuerza de voluntad", "Dirección", "Control"],
            descripcion: "Avance decidido hacia el éxito superando las tormentas emocionales mediante el enfoque mental."
        },
        {
            id: "fuerza",
            nombre: "La Fuerza (VIII)",
            tipo: "mayores",
            imagen: "https://upload.wikimedia.org/wikipedia/commons/f/f5/RWS_Tarot_08_Strength.jpg",
            keywords: ["Coraje", "Compasión", "Fortaleza interna", "Autocontrol"],
            descripcion: "Domar las pasiones animales internas con amor, suavidad y resistencia espiritual en lugar de violencia bruta."
        },
        {
            id: "ermitano",
            nombre: "El Ermitaño (IX)",
            tipo: "mayores",
            imagen: "https://upload.wikimedia.org/wikipedia/commons/4/4d/RWS_Tarot_09_The_Hermit.jpg",
            keywords: ["Introspección", "Aislamiento", "Búsqueda interior", "Prudencia"],
            descripcion: "Retirarse del ruido externo para encender la linterna de la propia verdad y asimilar las lecciones vividas."
        },
        {
            id: "rueda",
            nombre: "La Rueda de la Fortuna (X)",
            tipo: "mayores",
            imagen: "https://upload.wikimedia.org/wikipedia/commons/3/3c/RWS_Tarot_10_Wheel_of_Fortune.jpg",
            keywords: ["Destino", "Ciclos", "Cambio inevitable", "Sincronicidad"],
            descripcion: "El movimiento perpetuo del cosmos. Recuerda que las situaciones terrenales son transitorias: todo sube y baja."
        },
        {
            id: "justicia",
            nombre: "La Justicia (XI)",
            tipo: "mayores",
            imagen: "https://upload.wikimedia.org/wikipedia/commons/e/e0/RWS_Tarot_11_Justice.jpg",
            keywords: ["Karma", "Causa y efecto", "Verdad", "Equilibrio"],
            descripcion: "Corta los engaños con la espada de la objetividad y pesa los actos con honestidad brutal y equilibrio."
        },
        {
            id: "colgado",
            nombre: "El Colgado (XII)",
            tipo: "mayores",
            imagen: "https://upload.wikimedia.org/wikipedia/commons/2/2b/RWS_Tarot_12_The_Hanged_Man.jpg",
            keywords: ["Sacrificio", "Perspectiva", "Pausa", "Rendición"],
            descripcion: "Un momento de estancamiento voluntario que nos obliga a mirar el mundo desde otro ángulo para ganar sabiduría."
        },
        {
            id: "muerte",
            nombre: "La Muerte (XIII)",
            tipo: "mayores",
            imagen: "https://upload.wikimedia.org/wikipedia/commons/d/d7/RWS_Tarot_13_Death.jpg",
            keywords: ["Transmutación", "Finales", "Renacimiento", "Transición"],
            descripcion: "El desapego absoluto de lo que ya no sirve. No es un fin físico, sino la muerte del ego para dar paso a lo nuevo."
        },
        {
            id: "templanza",
            nombre: "La Templanza (XIV)",
            tipo: "mayores",
            imagen: "https://upload.wikimedia.org/wikipedia/commons/f/f8/RWS_Tarot_14_Temperance.jpg",
            keywords: ["Alquimia", "Paciencia", "Moderación", "Fluidez"],
            descripcion: "Mezcla de opuestos con calma divina. Sanación emocional y equilibrio a través del ritmo natural del alma."
        },
        {
            id: "diablo",
            nombre: "El Diablo (XV)",
            tipo: "mayores",
            imagen: "https://upload.wikimedia.org/wikipedia/commons/5/55/RWS_Tarot_15_The_Devil.jpg",
            keywords: ["Ataduras", "Materialismo", "Sombra", "Ilusión de control"],
            descripcion: "Enfrentar los deseos ocultos, las adicciones o los apegos materiales que nos mantienen encadenados por miedo."
        },
        {
            id: "torre",
            nombre: "La Torre (XVI)",
            tipo: "mayores",
            imagen: "https://upload.wikimedia.org/wikipedia/commons/5/53/RWS_Tarot_16_The_Tower.jpg",
            keywords: ["Ruptura abrupta", "Revelación", "Caída del ego", "Liberación"],
            descripcion: "El rayo de la verdad destruye las estructuras falsas y obsoletas construidas sobre bases débiles. Duele, pero libera."
        },
        {
            id: "estrella",
            nombre: "La Estrella (XVII)",
            tipo: "mayores",
            imagen: "https://upload.wikimedia.org/wikipedia/commons/d/db/RWS_Tarot_17_The_Star.jpg",
            keywords: ["Esperanza", "Sanación", "Frecuencia cósmica", "Renovación"],
            descripcion: "El bálsamo de paz que llega tras la tormenta. Conexión espiritual directa y fe ciega en el curso de tu destino."
        },
        {
            id: "luna-tarot",
            nombre: "La Luna (XVIII)",
            tipo: "mayores",
            imagen: "https://upload.wikimedia.org/wikipedia/commons/7/7f/RWS_Tarot_18_The_Moon.jpg",
            keywords: ["Ilusión", "Miedo atávico", "Fantasía", "Instinto profundo"],
            descripcion: "Caminar de noche por senderos difusos. Rige el inconsciente salvaje, los engaños visuales y el miedo a lo desconocido."
        },
        {
            id: "sol-tarot",
            nombre: "El Sol (XIX)",
            tipo: "mayores",
            imagen: "https://upload.wikimedia.org/wikipedia/commons/1/17/RWS_Tarot_19_The_Sun.jpg",
            keywords: ["Éxito", "Vitalidad", "Claridad", "Verdad expuesta"],
            descripcion: "Luz absoluta que todo lo aclara. Alegría infantil, vitalidad física desbordante y éxito radiante en todo nivel."
        },
        {
            id: "juicio",
            nombre: "El Juicio (XX)",
            tipo: "mayores",
            imagen: "https://upload.wikimedia.org/wikipedia/commons/d/dd/RWS_Tarot_20_The_Judgement.jpg",
            keywords: ["Despertar", "Llamado del alma", "Absolución", "Redención"],
            descripcion: "Escuchar la trompeta cósmica que te invita a levantarte del pasado, sanar el karma y asumir una nueva piel evolutiva."
        },
        {
            id: "mundo",
            nombre: "El Mundo (XXI)",
            tipo: "mayores",
            imagen: "https://upload.wikimedia.org/wikipedia/commons/f/ff/RWS_Tarot_21_The_World.jpg",
            keywords: ["Realización", "Cierre de ciclos", "Plenitud", "Integración"],
            descripcion: "La culminación de la travesía del Loco. Integración total de los cuatro elementos y armonía cósmica alcanzada."
        },
        {
            id: "as-bastos",
            nombre: "As de Bastos",
            tipo: "menores",
            imagen: "https://upload.wikimedia.org/wikipedia/commons/1/11/Wands01.jpg",
            keywords: ["Chispa creativa", "Pasión", "Iniciativa", "Fuego"],
            descripcion: "El inicio energético absoluto del elemento Fuego. Impulso vital para arrancar proyectos arriesgados."
        },
        {
            id: "as-copas",
            nombre: "As de Copas",
            tipo: "menores",
            imagen: "https://upload.wikimedia.org/wikipedia/commons/3/36/Cups01.jpg",
            keywords: ["Amor puro", "Intuición", "Afecto", "Agua"],
            descripcion: "El cáliz que rebosa amor incondicional y sanación espiritual. Apertura completa del centro cardíaco."
        },
        {
            id: "as-espadas",
            nombre: "As de Espadas",
            tipo: "menores",
            imagen: "https://upload.wikimedia.org/wikipedia/commons/1/1a/Swords01.jpg",
            keywords: ["Claridad mental", "Corte drástico", "Verdad", "Aire"],
            descripcion: "La fuerza del intelecto que corta las dudas de raíz. Una gran idea o revelación objetiva irrefutable."
        },
        {
            id: "as-oros",
            nombre: "As de Oros",
            tipo: "menores",
            imagen: "https://upload.wikimedia.org/wikipedia/commons/f/fd/Pentalcles01.jpg",
            keywords: ["Manifestación", "Prosperidad", "Salud", "Tierra"],
            descripcion: "La semilla materializada del elemento Tierra. Oportunidades de dinero sólido, contratos duraderos o sanación física."
        }
    ],

    // --- HERBOLARIO SAGRADO EXPANDIDO ---
    herbolario: [
        {
            nombre: "Jazmín (Jasminum officinale)",
            regente: "Luna 🌙 / Agua",
            keywords: ["Calma", "Sueños", "Psiquismo", "Sanación"],
            propiedades: "Propicia estados de relajación nerviosa profunda, esencias de calma, estimula los sueños proféticos y equilibra mareas psíquicas.",
            uso: "Infusiones rituales nocturnas o sahúmo de descarga áurica delicada."
        },
        {
            nombre: "Orégano (Origanum vulgare)",
            regente: "Venus ♀️ / Tierra",
            keywords: ["Protección", "Alegría", "Limpieza", "Arraigo"],
            propiedades: "Crea muros energéticos protectores en el hogar, repele bajas frecuencias y transmuta la melancolía estancada.",
            uso: "Infusión alcohólica para consagrar herramientas mágicas o esparcido perimetral."
        },
        {
            nombre: "Romero (Salvia rosmarinus)",
            regente: "Sol ☀️ / Fuego",
            keywords: ["Foco mental", "Claridad", "Purificación", "Vigor"],
            propiedades: "Estimulante intelectual inmediato. Destruye larvas astrales y devuelve el magnetismo vital a cuerpos debilitados.",
            uso: "Sahumerio directo en áreas de estudio o baños rituales al amanecer."
        },
        {
            nombre: "Lavanda (Lavandula angustifolia)",
            regente: "Mercurio ☿ / Aire",
            keywords: ["Paz", "Armonía", "Comunicación", "Ansiedad"],
            propiedades: "Neutraliza las frecuencias de fricción mental o discusiones familiares, induciendo armonía de palabra.",
            uso: "Aceite esencial en sienes o almohadas, e infusión relajante."
        },
        {
            nombre: "Ruda (Ruta graveolens)",
            regente: "Marte ♂️ / Fuego",
            keywords: ["Corte radical", "Exorcismo", "Defensa", "Envidia"],
            propiedades: "Planta guerrera por excelencia. Quiebra maleficios, envidias y bloqueos pesados externos de forma contundente.",
            uso: "Ramillete para limpieza áurica en seco o sahúmo pesado de esquinas corporales."
        },
        {
            nombre: "Menta (Mentha piperita)",
            regente: "Júpiter ♃ / Aire",
            keywords: ["Abundancia", "Frescura", "Prosperidad", "Apertura"],
            propiedades: "Limpia los caminos de la mente para atraer abundancia, frescura en las ideas comerciales y renovación áurica.",
            uso: "Baños de descarga del cuello hacia abajo para apertura de caminos económicos."
        }
    ],

    // --- LOS 12 SIGNOS CON FRASES SEMILLA, ANATOMÍA Y MITO ---
    signos: [
        { 
            id: "aries", 
            nombre: "Aries ♈", 
            sub: "Fuego Cardinal", 
            frase_semilla: "Yo Actúo / Yo Soy",
            cuerpo_regente: "Cabeza, cerebro, ojos y cráneo.",
            keywords: ["marte", "iniciación", "coraje", "impulso", "líder", "acción", "pionero", "deseo"],
            mitologia: "Asociado al Carnero del vellocino de oro que salvó a Frixo y Hele. En la mitología griega encarna a Ares, dios de la guerra indómita, la fuerza bruta y el impulso instintivo de supervivencia.",
            det: "Regente: Marte. Fuerza pura de arranque, valentía competitiva, impaciencia innata y liderazgo audaz." 
        },
        { 
            id: "tauro", 
            nombre: "Tauro ♉", 
            sub: "Tierra Fijo", 
            frase_semilla: "Yo Tengo / Yo Consolido",
            cuerpo_regente: "Cuello, garganta, cuerdas vocales, tiroides y cervicales.",
            keywords: ["venus", "estabilidad", "placer", "materia", "cuerpo", "paciencia", "perseverancia", "acumulación"],
            mitologia: "Representa a Zeus transformado en el majestuoso Toro Blanco de Creta para seducir y raptar a la princesa Europa, simbolizando el deseo de posesión, la fertilidad de la tierra y los placeres terrenales.",
            det: "Regente: Venus. Procesamiento lento, acumulación orgánica, disfrute de los sentidos, perseverancia y enraizamiento." 
        },
        { 
            id: "geminis", 
            nombre: "Géminis ♊", 
            sub: "Aire Mutable", 
            frase_semilla: "Yo Pienso / Yo Comunico",
            cuerpo_regente: "Brazos, manos, hombros, pulmones y sistema nervioso.",
            keywords: ["mercurio", "curiosidad", "redes", "mente", "comunicación", "dualidad", "gemelos", "versatilidad"],
            mitologia: "Encarna a los Dioscuros, Cástor (mortal) and Pólux (inmortal). Al morir Cástor, Pólux comparte su inmortalidad, alternando un día en el Olimpo y otro en el Hades. El mito de la dualidad alma-cuerpo y el puente mental.",
            det: "Regente: Mercurio. Vinculación de ideas disímiles, juego de polaridades, agilidad verbal e intercambio constante." 
        },
        { 
            id: "cancer", 
            nombre: "Cáncer ♋", 
            sub: "Agua Cardinal", 
            frase_semilla: "Yo Siento / Yo Protejo",
            cuerpo_regente: "Estómago, senos, matriz, pecho y fluidos digestivos.",
            keywords: ["luna", "nutrición", "hogar", "raíces", "familia", "emoción", "inconsciente", "memoria"],
            mitologia: "Asociado a Carcinos, el cangrejo gigante enviado por la diosa Hera para distraer y atacar a Heracles mientras luchaba contra la Hidra de Lerna. Un símbolo del instinto feroz de proteger lo que se ama hasta la muerte.",
            det: "Regente: Luna. Construcción de caparazones defensivos, memoria del linaje, sensibilidad oceánica y cuidado mutuo." 
        },
        { 
            id: "leo", 
            nombre: "Leo ♌", 
            sub: "Fuego Fijo", 
            frase_semilla: "Yo Quiero / Yo Irradio",
            cuerpo_regente: "Corazón, columna vertebral, aorta y espalda superior.",
            keywords: ["sol", "expresión", "soberanía", "corazón", "orgullo", "brillo", "creatividad", "ego"],
            mitologia: "Inspirado en el León de Nemea, una bestia mitológica con piel impenetrable estrangulada por Heracles en su primer trabajo. Al ser colocado en el firmamento, representa la nobleza, el fuego interno incorruptible y el ego purificado.",
            det: "Regente: Sol. Centro de gravedad creativo, irradiación de identidad pura, magnetismo personal y dignidad regia." 
        },
        { 
            id: "virgo", 
            nombre: "Virgo ♍", 
            sub: "Tierra Mutable", 
            frase_semilla: "Yo Analizo / Yo Sirvo",
            cuerpo_regente: "Intestinos, abdomen, sistema digestivo bajo y bazo.",
            keywords: ["mercurio", "análisis", "salud", "servicio", "detalle", "orden", "purificación", "crítica"],
            mitologia: "Encarna a Astrea, diosa de la justicia cósmica y la pureza, la última inmortal que abandonó la Tierra al terminar la Edad de Oro humana. Simboliza la búsqueda de la perfección perdida y el discernimiento sagrado.",
            det: "Regente: Mercurio (analítico). Fragmentación de la realidad para su cura, purificación de procesos, humildad y técnica." 
        },
        { 
            id: "libra", 
            nombre: "Libra ♎", 
            sub: "Aire Cardinal", 
            frase_semilla: "Yo Equilibro / Yo Me Vinculo",
            cuerpo_regente: "Riñones, región lumbar, sistema urinario y glándulas suprarrenales.",
            keywords: ["venus", "armonía", "vínculos", "espejo", "justicia", "estética", "diplomacia", "balanza"],
            mitologia: "Representa la Balanza de Temis (o de su hija Dice), sostenedora de la justicia y el orden cósmico. Es el único signo del zodíaco que no está representado por un animal o ser vivo, enfatizando la búsqueda racional del equilibrio y la equidad relacional.",
            det: "Regente: Venus (social). Búsqueda de equilibrio estético y relacional, mediación ecuánime y el arte de la alteridad." 
        },
        { 
            id: "escorpio", 
            nombre: "Escorpio ♏", 
            sub: "Agua Fijo", 
            frase_semilla: "Yo Deseo / Yo Transmuto",
            cuerpo_regente: "Órganos genitales, sistema reproductor, próstata y colon.",
            keywords: ["plutón", "marte", "sombras", "crisis", "regeneración", "inteligencia", "poder", "secreto"],
            mitologia: "El escorpión gigante enviado por Gaia para castigar la soberbia del gigante cazador Orión, logrando matarlo con su aguijón. Refleja las fuerzas primordiales del inconsciente, las crisis profundas necesarias para la mutación celular y el poder de renacer.",
            det: "Regente: Plutón / Marte. Fusión alquímica en las profundidades de la psique, poder de resiliencia y transmutación radical." 
        },
        { 
            id: "sagitario", 
            nombre: "Sagitario ♐", 
            sub: "Fuego Mutable", 
            frase_semilla: "Yo Veo / Yo Comprendo",
            cuerpo_regente: "Caderas, muslos, nervio ciático e hígado.",
            keywords: ["júpiter", "filosofía", "verdad", "expansión", "viajes", "fe", "maestro", "búsqueda"],
            mitologia: "Representa al centauro Quirón (o a Croto), sabio médico, astrónomo y arquero. Al ser herido accidentalmente por una flecha con veneno de la Hidra, renuncia a su inmortalidad para salvar a Prometeo, fundando el arquetipo del sanador herido y la búsqueda de sentido superior.",
            det: "Regente: Júpiter. Dirección de la flecha hacia el sentido de la existence, optimismo incorruptible y maestría docente." 
        },
        { 
            id: "capricornio", 
            nombre: "Capricornio ♑", 
            sub: "Tierra Cardinal", 
            frase_semilla: "Yo Uso / Yo Estructuro",
            cuerpo_regente: "Huesos, articulaciones, rodillas, dientes y la piel.",
            keywords: ["saturno", "estructura", "tiempo", "límites", "maestría", "deber", "ambición", "ley"],
            mitologia: "Ligado a la cabra Amaltea, que amamantó a Zeus en la isla de Creta, o a Pricus, el dios original del mar con cola de pez y torso de cabra que podía controlar el tiempo. Encarna la paciencia kármica para escalar desde el abismo húmedo hasta la cumbre de la montaña.",
            det: "Regente: Saturno. Ascenso a la cumbre de la montaña mediante esfuerzo, maduración kármica y consolidación institucional." 
        },
        { 
            id: "acuario", 
            nombre: "Acuario ♒", 
            sub: "Aire Fijo", 
            frase_semilla: "Yo Sé / Yo Colectivizo",
            cuerpo_regente: "Pantorrillas, tobillos, sistema circulatorio y tendón de Aquiles.",
            keywords: ["urano", "saturno", "comunidad", "disrupción", "libertad", "redes", "futuro", "humanidad"],
            mitologia: "Representa a Ganimedes, el hermoso príncipe troyano raptado por Zeus en forma de águila para convertirse en el copero de los dioses del Olimpo, el encargado de verter el néctar del conocimiento cósmico y la sabiduría líquida sobre la humanidad.",
            det: "Regente: Urano / Saturno. Visión de vanguardia colectiva, desapego intelectual, saltos cuánticos y rebeldía arquetípica." 
        },
        { 
            id: "piscis", 
            nombre: "Piscis ♓", 
            sub: "Agua Mutable", 
            frase_semilla: "Yo Creo / Yo Me Disuelvo",
            cuerpo_regente: "Pies, sistema linfático y sistema inmunológico.",
            keywords: ["neptuno", "júpiter", "misticismo", "océano", "compasión", "disolución", "empatía", "sacrificio"],
            mitologia: "Representa a Afrodita y a su hijo Eros huyendo del monstruo Tifón. Para escapar, se transformaron en dos peces atados por un cordón de plata inextinguible para no perderse en la inmensidad del océano primordial del alma.",
            det: "Regente: Neptuno / Júpiter. Disolución total del Yo en la matriz colectiva, empatía ilimitada, arte místico y amor universal." 
        }
    ],

    // --- LAS 12 CASAS COMPLETAS ---
    casas: [
        { id: "casa1", nombre: "Casa I (Ascendente)", sub: "Angular / Fuego", keywords: ["yo", "cuerpo", "inicio", "personalidad"], det: "La puerta de encarnación, temperamento nativo, físico y cómo irrumpe el individuo ante el entorno." },
        { id: "casa2", nombre: "Casa II", sub: "Sucedánea / Tierra", keywords: ["recursos", "dinero", "autoestima", "valores"], det: "Plano material propio, talentos innatos comercializables, seguridad financiera y autovaloración." },
        { id: "casa3", nombre: "Casa III", sub: "Cadente / Aire", keywords: ["mente", "hermanos", "comunicación", "viajes"], det: "Pensamiento lógico concreto, entorno vecinal, lenguaje cotidiano y vínculos de paridad (hermanos)." },
        { id: "casa4", nombre: "Casa IV (Fondo Cielo)", sub: "Angular / Agua", keywords: ["raíces", "hogar", "familia", "intimidad"], det: "La base de la carta. Intimidad doméstica, linaje familiar, condicionamientos de la infancia temprana." },
        { id: "casa5", nombre: "Casa V", sub: "Sucedánea / Fuego", keywords: ["creatividad", "hijos", "romances", "gozo"], det: "Autoexpresión lúdica, pasiones del corazón, hijos físicos o artísticos, y el arte de brillar sin juicios." },
        { id: "casa6", nombre: "Casa VI", sub: "Cadente / Tierra", keywords: ["salud", "rutina", "trabajo", "servicio"], det: "Cuidado del templo físico (cuerpo), dinámicas laborales diarias, servicio metódico y mascotas." },
        { id: "casa7", nombre: "Casa VII (Descendiente)", sub: "Angular / Aire", keywords: ["pareja", "socios", "espejo", "otros"], det: "El encuentro formal de a dos: matrimonios, contratos legales, enemigos declarados y proyecciones del espejo." },
        { id: "casa8", nombre: "Casa VIII", sub: "Sucedánea / Agua", keywords: ["tabú", "transformación", "herencias", "crisis"], det: "Bienes compartidos con otros, finanzas mutuas, sexualidad sagrada, crisis psicológicas y muertes/renacimientos." },
        { id: "casa9", nombre: "Casa IX", sub: "Cadente / Fuego", keywords: ["viajes largos", "estudios", "religión", "creencia"], det: "Estudios superiores, dogmas filosóficos o espirituales, cosmovisión de vida y cruce de fronteras físicas lejanas." },
        { id: "casa10", nombre: "Casa X (Medio Cielo)", sub: "Angular / Tierra", keywords: ["profesión", "estatus", "vocación", "público"], det: "El punto más alto visible del cielo. Destino profesional, estatus civil, reputación y realización pública." },
        { id: "casa11", nombre: "Casa XI", sub: "Sucedánea / Aire", keywords: ["amigos", "grupos", "proyectos", "colectivo"], det: "Asociaciones de ideales comunes, amistades intelectuales, planes hacia el futuro y redes de contención comunitaria." },
        { id: "casa12", nombre: "Casa XII", sub: "Cadente / Agua", keywords: ["karma", "aislamiento", "inconsciente colectivo", "útero"], det: "El gran océano invisible. Memoria intrauterina, encierros crónicos, karma pendiente y disolución en la totalidad divinal." }
    ],

    // --- MANUAL DE ASTROS EXTENDIDO (PLANETAS + ASTEROIDES + PUNTOS EVOLUTIVOS) ---
    astros: [
        { 
            nombre: "El Sol ☀️", 
            rol: "El Núcleo Identitario", 
            frase_semilla: "Yo Soy",
            keywords: ["conciencia", "propósito", "vitalidad", "soberanía", "esencia", "ego", "centro"], 
            desc: "Eje de gravedad individual. Representa el centro de la conciencia despierta, la energía de recarga del cuerpo físico y el camino evolutivo del Yo real hacia su propia iluminación." 
        },
        { 
            nombre: "La Luna 🌙", 
            rol: "El Refugio Reactivo", 
            frase_semilla: "Yo Siento",
            keywords: ["emoción", "inconsciente", "madre", "somático", "memoria", "raíces", "miedo"], 
            desc: "Rige las necesidades emocionales básicas, los mecanismos automáticos de autodefensa, la intuición innata y la manera en que el niño interno busca nutrición y cobijo." 
        },
        { 
            nombre: "Mercurio ☿", 
            rol: "El Enlace de Datos", 
            frase_semilla: "Yo Comunico / Yo Vinculo",
            keywords: ["intelecto", "comunicación", "lógica", "comercio", "enlace", "palabra", "aprendizaje"], 
            desc: "La red de comunicación neuronal. Rige la capacidad de procesar señales lógicas, el habla, los idiomas escritos, la mente racional operativa y el comercio diario." 
        },
        { 
            nombre: "Venus ♀️", 
            rol: "La Frecuencia de Atracción", 
            frase_semilla: "Yo Deseo / Yo Valoro",
            keywords: ["deseo", "armonía", "amor", "dinero", "valoración", "estética", "placer"], 
            desc: "Rige el deseo de vinculación complementaria con el Otro, los patrones estéticos de seducción, la autoestima personal y el magnetismo para atraer recursos económicos." 
        },
        { 
            nombre: "Marte ♂️", 
            rol: "El Impulso de Conquista", 
            frase_semilla: "Yo Conquisto / Yo Ejecuto",
            keywords: ["acción", "deseo", "fuerza", "coraje", "corte", "guerra", "libido"], 
            desc: "La espada del guerrero cósmico. Gobierna la capacidad de asertividad frente al peligro, la energía competitiva pura, la libido activa y la fuerza bruta necesaria para romper la inercia del plano material." 
        },
        { 
            nombre: "Júpiter ♃", 
            rol: "El Expansor de Horizontes", 
            frase_semilla: "Yo Expando / Yo Confío",
            keywords: ["abundancia", "suerte", "sabiduría", "fe", "crecimiento", "filosofía", "viaje"], 
            desc: "El gran arquetipo protector y mentor. Rige los saltos al vacío desde la confianza plena, el optimismo existencial incorruptible, la búsqueda filosófica de la verdad y la riqueza material y espiritual." 
        },
        { 
            nombre: "Saturno ♄", 
            rol: "El Arquitecto del Karma", 
            frase_semilla: "Yo Estructuro / Yo Limito",
            keywords: ["límite", "estructura", "tiempo", "madurez", "ley", "karma", "disciplina"], 
            desc: "El señor del tiempo crudo y las formas sólidas. Trae el principio de realidad, la necesidad de establecer límites sanos, la cristalización de proyectos y la recolección de las siembras pasadas (karma)." 
        },
        { 
            nombre: "Urano ♅", 
            rol: "El Despertador Disruptivo", 
            frase_semilla: "Yo Libero / Yo Innovo",
            keywords: ["rayo", "libertad", "mutación", "tecnología", "redes", "disrupción", "genio"], 
            desc: "Frecuencia eléctrica transpersonal. Produce quiebres violentos de estructuras vetustas, revelaciones intuitivas inmediatas, revoluciones ideológicas de corte humanitario y conexión con el futuro." 
        },
        { 
            nombre: "Neptuno ♆", 
            rol: "El Océano Alquímico", 
            frase_semilla: "Yo Transciendo / Yo Sueño",
            keywords: ["ilusión", "misticismo", "empatía", "arte", "disolución", "sacrificio", "engaño"], 
            desc: "Rige la disolución absoluta de las fronteras defensivas del ego. Conexión psíquica telepática, misticismo devocional, inspiración artística infinita e hipersensibilidad al dolor colectivo." 
        },
        { 
            nombre: "Plutón ♇", 
            rol: "El Transmutador Atómico", 
            frase_semilla: "Yo Destruyo para Renacer",
            keywords: ["poder", "sombras", "tabú", "muerte", "renacimiento", "control", "alquimia"], 
            desc: "El pulso del inframundo psíquico. Saca a la luz de la conciencia el material reprimido (los tabúes y miedos), destruyendo de raíz las formas psicológicas corruptas para liberar el verdadero poder chamánico interno." 
        },
        // --- LOS NUEVOS ELEMENTOS REQUERIDOS ---
        {
            nombre: "Quirón ⚷",
            rol: "El Sanador Herido",
            frase_semilla: "Yo Sano a través de mi Fractura",
            keywords: ["vulnerabilidad", "maestría", "herida kármica", "compasión", "resiliencia", "puente"],
            desc: "Asteroide centauro que representa nuestra fractura original incorregible. Allí donde fuimos heridos injustamente reside el don transpersonal para sanar a los demás y transformarnos en maestros de la resiliencia."
        },
        {
            nombre: "Lilith ⚸ (Luna Negra)",
            rol: "La Sombra Reprimida",
            frase_semilla: "Yo Despierto mi Poder Salvaje",
            keywords: ["tabú", "rebeldía", "instinto", "exilio", "liberación", "magnetismo", "autonomía"],
            desc: "El apogeo lunar. Representa la energía instintiva visceral exiliada, los deseos profundos censurados por la sociedad, el poder de emancipación absoluta y el magnetismo crudo de la Sombra."
        },
        {
            nombre: "Ceres 🌾",
            rol: "La Madre Nutricia",
            frase_semilla: "Yo Cultivo y Sustento",
            keywords: ["nutrición", "apego", "pérdida", "duelo", "productividad", "agricultura", "cuidado"],
            desc: "Planeta enano que rige los procesos de pérdida, transiciones cíclicas de duelo y las formas orgánicas en las que alimentamos nuestra autoestima y cuidamos del cuerpo físico."
        },
        {
            nombre: "Palas Atenea ⚳",
            rol: "La Guerrera Estratégica",
            frase_semilla: "Yo Planifico con Claridad",
            keywords: ["estrategia", "justicia", "inteligencia", "patrones", "defensa", "mente artística"],
            desc: "Representa la sabiduría aplicada a la resolución de conflictos complejos, la visión geopolítica y de patrones lógicos, y el intelecto desapegado al servicio de causas nobles."
        },
        {
            nombre: "Juno ⚵",
            rol: "El Compromiso Sagrado",
            frase_semilla: "Yo Consagro mi Vínculo",
            keywords: ["matrimonio", "lealtad", "equidad", "celos", "sociedad", "pacto"],
            desc: "Rige la dinámica de los compromisos a largo plazo, los pactos de lealtad, los reclamos de equidad dentro de las relaciones formales y la transmutación de los celos corporativos."
        },
        {
            nombre: "Vesta ⚴",
            rol: "El Fuego Interno Sacro",
            frase_semilla: "Yo Preservo mi Foco Sagrado",
            keywords: ["devoción", "purificación", "foco", "soledad voluntaria", "sacrificio", "fuego sagrado"],
            desc: "El asteroide del hogar interno. Gobierna la capacidad de enfoque unidireccional, el fuego sagrado de la espiritualidad solitaria, los rituales de purificación personal y la abstinencia enfocada en metas superiores."
        },
        {
            nombre: "Nodo Norte ☊",
            rol: "La Brújula del Destino",
            frase_semilla: "Yo Evoluciono hacia lo Desconocido",
            keywords: ["futuro", "misión", "incomodidad", "aprendizaje", "propósito kármico"],
            desc: "Punto astronómico matemático de intersección orbital. Representa la dirección evolutiva desconocida de la carta, la zona de máximo aprendizaje y el propósito kármico que incomoda pero expande el alma."
        },
        {
            nombre: "Nodo Sur ☋",
            rol: "El Talento Heredado",
            frase_semilla: "Yo Descomprimo el Pasado",
            keywords: ["pasado", "zona de confort", "talento innato", "inercia", "karma antiguo"],
            desc: "El polo opuesto al Nodo Norte. Encarna las inercias conductuales del pasado, las vidas anteriores o herencias genéticas donde el nativo tiene talentos innatos pero corre riesgo de estancamiento confortable."
        }
    ],

    regenciasDiccionario: {
        aries: "Marte (Tradicional y Moderno)",
        tauro: "Venus (Tradicional y Moderno)",
        geminis: "Mercurio (Tradicional y Moderno)",
        cancer: "Luna (Tradicional y Moderna)",
        leo: "Sol (Tradicional y Moderno)",
        virgo: "Mercurio (Tradicional y Moderno)",
        libra: "Venus (Tradicional y Moderno)",
        escorpio: "Tradicional: Marte | Moderno: Plutón 🔥 Transmutación interna profunda.",
        sagitario: "Júpiter (Tradicional y Moderno)",
        capricornio: "Saturno (Tradicional y Moderno)",
        acuario: "Tradicional: Saturno | Moderno: Urano ⚡ Conciencia de red colectiva.",
        piscis: "Tradicional: Júpiter | Moderno: Neptuno 🌊 Disolución infinita."
    }
};
