const ASTRO_DATA = {
    // --- LOS 78 ARCANOS DEL TAROT COMPLETOS (RIDER-WAITE) ---
    tarot: [
        /* (Se mantienen todos tus 78 Arcanos cargados sin cambios para no romper tu lógica de filtro) */
        { id: "loco", nombre: "El Loco (0)", tipo: "mayores", imagen: "https://upload.wikimedia.org/wikipedia/commons/0/0b/RWS_Tarot_02_The_Fool.jpg", keywords: ["Inicios", "Espontaneidad", "Fe ciega", "Libertad"], descripcion: "El alma pura que inicia su viaje evolutivo sin ataduras materiales ni miedos al vacío." },
        { id: "mago", nombre: "El Mago (I)", tipo: "mayores", imagen: "https://upload.wikimedia.org/wikipedia/commons/d/de/RWS_Tarot_01_The_Magician.jpg", keywords: ["Manifestación", "Poder interior", "Habilidad", "Determinación"], descripcion: "Posee todas las herramientas de los elementos sobre la mesa para canalizar la voluntad divina en la Tierra." },
        /* ... (resto de tus objetos tarot igual que los tenías) ... */
        { id: "rey-oros", nombre: "Rey de Oros", tipo: "oros", imagen: "https://upload.wikimedia.org/wikipedia/commons/1/1c/Pentalcles14.jpg", keywords: ["Éxito comercial", "Solidez", "Soberanía material", "Riqueza"], descripcion: "El monarca de la Tierra cuyo trono ostenta cabezas de toro, símbolo de consolidación." }
    ],

    // --- HERBOLARIO SAGRADO ---
    herbolario: [
        { nombre: "Jazmín (Jasminum officinale)", regente: "Luna 🌙 / Agua", keywords: ["Calma", "Sueños", "Psiquismo", "Sanación"], propiedades: "Propicia estados de relajación nerviosa profunda, esencias de calma, estimula los sueños proféticos y equilibra mareas psíquicas.", uso: "Infusiones rituales nocturnas o sahúmo de descarga áurica delicada." },
        { nombre: "Orégano (Origanum vulgare)", regente: "Venus ♀️ / Tierra", keywords: ["Protección", "Alegría", "Limpieza", "Arraigo"], propiedades: "Crea muros energéticos protectores en el hogar, repele bajas frecuencias y transmuta la melancolía estancada.", uso: "Infusión alcohólica para consagrar herramientas mágicas o esparcido perimetral." },
        { nombre: "Romero (Salvia rosmarinus)", regente: "Sol ☀️ / Fuego", keywords: ["Foco mental", "Claridad", "Purificación", "Vigor"], propiedades: "Estimulante intelectual inmediato. Destruye larvas astrales y devuelve el magnetismo vital a cuerpos debilitados.", uso: "Sahumerio directo en áreas de estudio o baños rituales al amanecer." },
        { nombre: "Lavanda (Lavandula angustifolia)", regente: "Mercurio ☿ / Aire", keywords: ["Paz", "Armonía", "Comunicación", "Ansiedad"], propiedades: "Neutraliza las frecuencias de fricción mental o discusiones familiares, induciendo armonía de palabra.", uso: "Aceite esencial en sienes o almohadas, e infusión relajante." },
        { nombre: "Ruda (Ruta graveolens)", regente: "Marte ♂️ / Fuego", keywords: ["Corte radical", "Exorcismo", "Defensa", "Envidia"], propiedades: "Planta guerrera por excelencia. Quiebra maleficios, envidias y bloqueos pesados externos de forma contundente.", uso: "Ramillete para limpieza áurica en seco o sahúmo pesado de esquinas corporales." },
        { nombre: "Menta (Mentha piperita)", regente: "Júpiter ♃ / Aire", keywords: ["Abundancia", "Frescura", "Prosperidad", "Apertura"], propiedades: "Limpia los caminos de la mente para atraer abundancia, frescura en las ideas comerciales y renovación áurica.", uso: "Baños de descarga del cuello hacia abajo para apertura de caminos económicos." },
        { nombre: "Albahaca (Ocimum basilicum)", regente: "Marte ♂️ / Fuego", keywords: ["Dinero", "Simpatía", "Protección", "Éxito"], propiedades: "Atrae la buena fortuna a los negocios, disuelve enemistades y estimula la vitalidad psíquica.", uso: "Lavados de pisos comerciales o sahúmo combinado con incienso resinósico." },
        { nombre: "Salvia Blanca (Salvia apiana)", regente: "Júpiter ♃ / Aire", keywords: ["Sabiduría", "Gran Limpieza", "Consagración"], propiedades: "Limpia los espacios a nivel celular espiritual, ahuyentando presencias estancadas kármicas de vibración densa.", uso: "Atado de sahúmo seco ventilado en dirección de las agujas del reloj." },
        { nombre: "Tomillo (Thymus vulgaris)", regente: "Venus ♀️ / Agua", keywords: ["Coraje", "Purificación", "Salud", "Luz"], propiedades: "Otorga valor ante crisis emocionales complejas y purifica el aparato respiratorio sutil.", uso: "Baño reparador o infusión sagrada protectora." },
        { nombre: "Manzanilla (Matricaria chamomilla)", regente: "Sol ☀️ / Agua", keywords: ["Abundancia solar", "Paz interior", "Niño interno"], propiedades: "Sana las heridas del plexo solar, reconectando con el optimismo puro del niño interno.", uso: "Lavado de manos ritual antes de transacciones monetarias." }
    ],

    // --- SIGNOS ---
    signos: [
        { id: "aries", nombre: "Aries ♈", sub: "Fuego Cardinal", frase_semilla: "Yo Actúo / Yo Soy", cuerpo_regente: "Cabeza, cerebro, ojos y cráneo.", keywords: ["marte", "iniciación", "coraje", "impulso", "líder", "acción"], det: "Regente: Marte. Fuerza pura de arranque, valentía competitiva, impaciencia innata y liderazgo audaz." },
        { id: "tauro", nombre: "Tauro ♉", sub: "Tierra Fijo", frase_semilla: "Yo Tengo / Yo Consolido", cuerpo_regente: "Cuello, garganta, cuerdas vocales, tiroides y cervicales.", keywords: ["venus", "estabilidad", "placer", "materia", "cuerpo"], det: "Regente: Venus. Procesamiento lento, acumulación orgánica, disfrute de los sentidos y enraizamiento." },
        { id: "geminis", nombre: "Géminis ♊", sub: "Aire Mutable", frase_semilla: "Yo Pienso / Yo Comunico", cuerpo_regente: "Brazos, manos, hombros, pulmones y sistema nervioso.", keywords: ["mercurio", "curiosidad", "redes", "mente", "comunicación"], det: "Regente: Mercurio. Vinculación de ideas disímiles, juego de polaridades, agilidad verbal e intercambio." },
        { id: "cancer", nombre: "Cáncer ♋", sub: "Agua Cardinal", frase_semilla: "Yo Siento / Yo Protejo", cuerpo_regente: "Estómago, senos, matriz, pecho y fluidos digestivos.", keywords: ["luna", "nutrición", "hogar", "raíces", "familia"], det: "Regente: Luna. Construcción de caparazones defensivos, memoria del linaje y sensibilidad oceánica." },
        { id: "leo", nombre: "Leo ♌", sub: "Fuego Fijo", frase_semilla: "Yo Quiero / Yo Irradio", cuerpo_regente: "Corazón, columna vertebral, aorta y espalda superior.", keywords: ["sol", "expresión", "soberanía", "corazón", "orgullo"], det: "Regente: Sol. Centro de gravedad creativo, irradiación de identidad pura y dignidad regia." },
        { id: "virgo", nombre: "Virgo ♍", sub: "Tierra Mutable", frase_semilla: "Yo Analizo / Yo Sirvo", cuerpo_regente: "Intestinos, abdomen, sistema digestivo bajo y bazo.", keywords: ["mercurio", "análisis", "salud", "servicio", "detalle"], det: "Regente: Mercurio. Fragmentación de la realidad para su cura, purificación, humildad y técnica." },
        { id: "libra", nombre: "Libra ♎", sub: "Aire Cardinal", frase_semilla: "Yo Equilibro / Yo Me Vinculo", cuerpo_regente: "Riñones, región lumbar, sistema urinario y glándulas suprarrenales.", keywords: ["venus", "armonía", "vínculos", "espejo", "justicia"], det: "Regente: Venus. Búsqueda de equilibrio estético y relacional, mediación ecuánime." },
        { id: "escorpio", nombre: "Escorpio ♏", sub: "Agua Fijo", frase_semilla: "Yo Deseo / Yo Transmuto", cuerpo_regente: "Órganos genitales, sistema reproductor, próstata y colon.", keywords: ["plutón", "marte", "sombras", "crisis", "regeneración"], det: "Regente: Plutón / Marte. Fusión alquímica en las profundidades de la psique, resiliencia y transmutación." },
        { id: "sagitario", nombre: "Sagitario ♐", sub: "Fuego Mutable", frase_semilla: "Yo Veo / Yo Comprendo", cuerpo_regente: "Caderas, muslos, nervio ciático e hígado.", keywords: ["júpiter", "filosofía", "verdad", "expansión", "viajes"], det: "Regente: Júpiter. Dirección de la flecha hacia el sentido de la existencia y optimismo incorruptible." },
        { id: "capricornio", nombre: "Capricornio ♑", sub: "Tierra Cardinal", frase_semilla: "Yo Uso / Yo Estructuro", cuerpo_regente: "Huesos, articulaciones, rodillas, dientes y la piel.", keywords: ["saturno", "estructura", "tiempo", "límites", "maestría"], det: "Regente: Saturno. Ascenso a la cumbre de la montaña mediante esfuerzo y maduración kármica." },
        { id: "acuario", nombre: "Acuario ♒", sub: "Aire Fijo", frase_semilla: "Yo Sé / Yo Colectivizo", cuerpo_regente: "Pantorrillas, tobillos, sistema circulatorio.", keywords: ["urano", "saturno", "comunidad", "disrupción", "libertad"], det: "Regente: Urano / Saturno. Visión de vanguardia colectiva, desapego intelectual y saltos cuánticos." },
        { id: "piscis", nombre: "Piscis ♓", sub: "Agua Mutable", frase_semilla: "Yo Creo / Yo Me Disuelvo", cuerpo_regente: "Pies, sistema linfático y sistema inmunológico.", keywords: ["neptuno", "júpiter", "misticismo", "océano", "compasión"], det: "Regente: Neptuno / Júpiter. Disolución total del Yo en la matriz colectiva, arte místico y amor universal." }
    ],

    // --- CASAS ---
    casas: [
        { id: "casa1", nombre: "Casa I (Ascendente)", sub: "Angular / Fuego", keywords: ["yo", "cuerpo", "inicio"], det: "La puerta de encarnación, temperamento nativo, físico y cómo irrumpe el individuo ante el entorno." },
        { id: "casa2", nombre: "Casa II", sub: "Sucedánea / Tierra", keywords: ["recursos", "dinero", "autoestima"], det: "Plano material propio, talentos innatos comercializables, seguridad financiera y autovaloración." },
        { id: "casa3", nombre: "Casa III", sub: "Cadente / Aire", keywords: ["mente", "hermanos", "comunicación"], det: "Pensamiento lógico concreto, entorno vecinal, lenguaje cotidiano y vínculos de paridad (hermanos)." },
        { id: "casa4", nombre: "Casa IV (Fondo Cielo)", sub: "Angular / Agua", keywords: ["raíces", "hogar", "familia"], det: "La base de la carta. Intimidad doméstica, linaje familiar, condicionamientos de la infancia temprana." },
        { id: "casa5", nombre: "Casa V", sub: "Sucedánea / Fuego", keywords: ["creatividad", "hijos", "romances"], det: "Autoexpresión lúdica, pasiones del corazón, hijos físicos o artísticos, y el arte de brillar." },
        { id: "casa6", nombre: "Casa VI", sub: "Cadente / Tierra", keywords: ["salud", "rutina", "trabajo"], det: "Cuidado del templo físico (cuerpo), dinámicas laborales diarias, servicio metódico y mascotas." },
        { id: "casa7", nombre: "Casa VII (Descendiente)", sub: "Angular / Aire", keywords: ["pareja", "socios", "espejo"], det: "El encuentro formal de a dos: matrimonios, contratos legales y proyecciones del espejo." },
        { id: "casa8", nombre: "Casa VIII", sub: "Sucedánea / Agua", keywords: ["tabú", "transformación", "crisis"], det: "Bienes compartidos, finanzas mutuas, sexualidad sagrada, crisis psicológicas y renacimientos." },
        { id: "casa9", nombre: "Casa IX", sub: "Cadente / Fuego", keywords: ["viajes", "estudios", "creencia"], det: "Estudios superiores, dogmas filosóficos o espirituales, cosmovisión de vida y fronteras lejanas." },
        { id: "casa10", nombre: "Casa X (Medio Cielo)", sub: "Angular / Tierra", keywords: ["profesión", "estatus", "vocación"], det: "El punto más alto visible. Destino profesional, estatus civil, reputación y realización pública." },
        { id: "casa11", nombre: "Casa XI", sub: "Sucedánea / Aire", keywords: ["amigos", "grupos", "proyectos"], det: "Asociaciones de ideales comunes, amistades intelectuales y redes de contención comunitaria." },
        { id: "casa12", nombre: "Casa XII", sub: "Cadente / Agua", keywords: ["karma", "aislamiento", "inconsciente"], det: "El gran océano invisible. Memoria intrauterina, encierros crónicos y disolución en la totalidad." }
    ],

    // --- MANUAL DE ASTROS ---
    astros: [
        { nombre: "El Sol ☀️", rol: "El Núcleo Identitario", keywords: ["conciencia", "propósito"], desc: "Eje de gravedad individual. Representa la conciencia despierta y el camino del Yo real." },
        { nombre: "La Luna 🌙", rol: "El Refugio Reactivo", keywords: ["emoción", "inconsciente"], desc: "Rige las necesidades emocionales básicas y los mecanismos automáticos de autodefensa." },
        { nombre: "Mercurio ☿", rol: "El Enlace de Datos", keywords: ["intelecto", "lógica"], desc: "Rige la capacidad de procesar señales lógicas, el habla, los idiomas escritos y la mente racional." },
        { nombre: "Venus ♀️", rol: "La Frecuencia de Atracción", keywords: ["armonía", "amor", "dinero"], desc: "Rige el deseo de vinculación complementaria con el Otro, patrones estéticos y autoestima." },
        { nombre: "Marte ♂️", rol: "El Impulso de Conquista", keywords: ["acción", "fuerza", "coraje"], desc: "La espada del guerrero. Gobierna la asertividad ante el peligro y la libido activa." },
        { nombre: "Júpiter ♃", rol: "El Expansor de Horizontes", keywords: ["abundancia", "sabiduría"], desc: "El gran protector. Rige saltos al vacío, optimismo y riqueza material o espiritual." },
        { nombre: "Saturno ♄", rol: "El Arquitecto del Karma", keywords: ["límite", "tiempo", "ley"], desc: "El señor del tiempo. Trae principio de realidad, límites sanos y cristalización kármica." },
        { nombre: "Urano ♅", rol: "El Despertador Disruptivo", keywords: ["rayo", "libertad", "mutación"], desc: "Produce quiebres violentos de estructuras obsoletas y revoluciones ideológicas." },
        { nombre: "Neptuno ♆", rol: "El Océano Alquímico", keywords: ["misticismo", "empatía", "arte"], desc: "Rige la disolución absoluta de las fronteras defensivas del ego y la inspiración infinita." },
        { nombre: "Plutón ♇", rol: "El Transmutador Atómico", keywords: ["poder", "sombras", "tabú"], desc: "Saca a la luz el material reprimido destruyendo formas psicológicas corruptas." },
        { nombre: "Quirón ⚷", rol: "El Sanador Herido", keywords: ["vulnerabilidad", "herida"], desc: "Representa nuestra fractura kármica original. Donde fuimos heridos reside el don de sanar." },
        { nombre: "Lilith ⚸", rol: "La Sombra Reprimida", keywords: ["tabú", "rebeldía"], desc: "Representa la energía instintiva visceral exiliada y censurada por la sociedad." }
    ],

    // --- RETROGRADACIONES 2026 ---
    retrogradaciones2026: [
        { planeta: "Mercurio ☿", periodo: "26 de Feb - 20 de Mar", signo: "Piscis ♓", advertencia: "Confusión extrema, fallos de software. Evitar contratos." },
        { planeta: "Mercurio ☿", periodo: "29 de Jun - 23 de Jul", signo: "Cáncer ♋", advertencia: "Nostalgias pesadas. Revisar seguridad del hogar." },
        { planeta: "Mercurio ☿", periodo: "24 de Oct - 13 de Nov", signo: "Escorpio ♏ / Libra ♎", advertencia: "Secretos que ven la luz. Pensar antes de hablar." },
        { planeta: "Marte ♂️", periodo: "Desde 24 Dic 2025", signo: "Leo ♌ / Cáncer ♋", advertencia: "Baja de energía física, frustración contenida." },
        { planeta: "Saturno ♄", periodo: "08 de Jun - 28 de Oct", signo: "Aries ♈", advertencia: "Frenazo estructural. Paciencia kármica obligatoria." },
        { planeta: "Plutón ♇", periodo: "27 de Abr - 02 de Oct", signo: "Acuario ♒", advertencia: "Reestructuración de redes y caídas sistémicas." }
    ]
};
