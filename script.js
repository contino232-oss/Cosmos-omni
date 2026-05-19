document.addEventListener("DOMContentLoaded", () => {
    // Inicializar relojes astrológicos
    setInterval(actualizarRelojes, 1000);
    actualizarRelojes();

    // Consultar geolocalización astral mediante GeoNames (con respaldo local)
    obtenerGeolocalizacion();

    // Renders Automáticos con Matrices Locales
    renderizarDashboard();
    renderizarEnciclopedias();
    renderizarTarot("mayores"); 
    renderizarHerbolario();
    renderizarAlmanaqueLunar();

    // Dibujar las Ruedas Zodiacales en el Canvas
    dibujarRuedaAstrologica();
});

// --- CONTROL DE NAVEGACIÓN Y MENÚ LATERAL ---
function toggleMenu() {
    const sidebar = document.getElementById("sidebar");
    const overlay = document.querySelector(".sidebar-overlay");
    
    if (sidebar) {
        sidebar.classList.toggle("open");
        sidebar.classList.toggle("active");
    }
    if (overlay) {
        overlay.classList.toggle("open");
        overlay.classList.toggle("active");
    }
}

function mostrarSeccion(idSeccion) {
    document.querySelectorAll(".vista").forEach(seccion => {
        seccion.classList.add("seccion-oculta");
    });
    
    const seccionActiva = document.getElementById(idSeccion);
    if (seccionActiva) {
        seccionActiva.classList.remove("seccion-oculta");
    }
    
    // Cerrar el menú lateral de forma segura al navegar
    const sidebar = document.getElementById("sidebar");
    const overlay = document.querySelector(".sidebar-overlay");
    if (sidebar) {
        sidebar.classList.remove("open", "active");
    }
    if (overlay) {
        overlay.classList.remove("open", "active");
    }
}

function irAlInicio(e) {
    e.preventDefault();
    mostrarSeccion("dashboard");
}

function toggleModoLectura() {
    document.body.classList.toggle("theme-dark");
    document.body.classList.toggle("theme-light");
    const btn = document.getElementById("btn-modo-lectura");
    if (btn) {
        btn.innerText = document.body.classList.contains("theme-light") ? "🌙 Modo Oscuro" : "🌓 Modo Lectura";
    }
}

// --- RELOJES EN TIEMPO REAL (Formato Estricto 24 Horas) ---
function actualizarRelojes() {
    const ahora = new Date();
    
    // Forzar visualización de 24 horas local sin AM/PM
    const Opciones24h = { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false };
    
    const localStr = ahora.toLocaleTimeString('es-AR', Opciones24h);
    const utcStr = ahora.toISOString().substr(11, 8) + " UTC";
    
    // Cálculo estimado de hora sidérea en formato 24 horas
    const hrs = ahora.getUTCHours();
    const mins = ahora.getUTCMinutes();
    const secs = ahora.getUTCSeconds();
    const sideralHrs = String((hrs + 2) % 24).padStart(2, "0");
    const sideralMins = String(mins).padStart(2, "0");
    const sideralSecs = String(secs).padStart(2, "0");
    const sideralStr = `${sideralHrs}:${sideralMins}:${sideralSecs} SID`;

    const elLocal = document.getElementById("time-local");
    const elUtc = document.getElementById("time-utc");
    const elSideral = document.getElementById("time-sideral");

    if (elLocal) elLocal.innerText = localStr;
    if (elUtc) elUtc.innerText = utcStr;
    if (elSideral) elSideral.innerText = sideralStr;
}

// --- CONEXIÓN GEONAMES API (Respaldo Robusto Offline) ---
function obtenerGeolocalizacion() {
    const geoLabel = document.getElementById("geo-location");
    const urlGeonames = "https://secure.geonames.org/postalCodeLookupJSON?postalcode=1878&country=AR&username=tano232";

    // Carga de datos base por defecto en caso de fallo de red
    const cargarClimaAstralPorDefecto = (mensajeUbicacion) => {
        if (geoLabel) geoLabel.innerText = mensajeUbicacion;
        
        const tituloHit = document.getElementById("titulo-hit-dia");
        const descHit = document.getElementById("desc-hit-dia");
        
        if (tituloHit) tituloHit.innerText = "🪐 Clima Cósmico: Sol en Tauro de Grado 29";
        if (descHit) descHit.innerText = "La energía solar se encuentra en los últimos grados de Tauro preparando su ingreso mutable a Géminis. Momento ideal para bajar a tierra ideas antes del gran cambio mental.";
    };

    fetch(urlGeonames)
        .then(res => {
            if (!res.ok) throw new Error("Fallo en la respuesta de red");
            return res.json();
        })
        .then(data => {
            if (data.postalcodes && data.postalcodes.length > 0) {
                const loc = data.postalcodes[0];
                cargarClimaAstralPorDefecto(`📍 Cielo de: ${loc.placeName}, ${loc.adminName1} (AR)`);
            } else {
                cargarClimaAstralPorDefecto("📍 Cielo Geocéntrico: Quilmes, Buenos Aires (GMT-3)");
            }
        })
        .catch(() => {
            // Manejo silencioso y seguro del estado Offline/Error de Credenciales
            cargarClimaAstralPorDefecto("📍 Conexión Cósmica Estándar (Quilmes, AR)");
        });
}

// --- MOTOR GRÁFICO: RUEDAS ZODIACALES (HTML5 CANVAS) ---
function dibujarRuedaAstrologica() {
    const canvas = document.getElementById("wheel-canvas");
    if (!canvas) return; 

    const ctx = canvas.getContext("2d");
    const X = canvas.width / 2;
    const Y = canvas.height / 2;
    const rMax = Math.min(X, Y) - 20;
    
    const signosEje = ["Aries", "Tauro", "Géminis", "Cáncer", "Leo", "Virgo", "Libra", "Escorpio", "Sagitario", "Capricornio", "Acuario", "Piscis"];
    const coloresEje = ["#ff4d4d", "#ffb366", "#ffff66", "#66b3ff", "#ff9933", "#99e699", "#ff99cc", "#b366ff", "#ff66cc", "#c0c0c0", "#66ffff", "#9999ff"];

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Dibujar Anillo Exterior Zodiacal
    for (let i = 0; i < 12; i++) {
        let anguloInicio = (i * 30 * Math.PI) / 180;
        let anguloFin = ((i + 1) * 30 * Math.PI) / 180;

        ctx.beginPath();
        ctx.moveTo(X, Y);
        ctx.arc(X, Y, rMax, anguloInicio, anguloFin);
        ctx.fillStyle = "rgba(15, 15, 25, 0.6)";
        ctx.fill();
        ctx.strokeStyle = "#d4af37";
        ctx.lineWidth = 1.5;
        ctx.stroke();

        // Rotación de Tipografía para centrar nombres de Signos
        ctx.save();
        ctx.translate(X, Y);
        let anguloMedio = anguloInicio + (15 * Math.PI) / 180;
        ctx.rotate(anguloMedio);
        ctx.fillStyle = coloresEje[i];
        ctx.font = "bold 11px sans-serif";
        ctx.textAlign = "right";
        ctx.fillText(signosEje[i], rMax - 15, 4);
        ctx.restore();
    }

    // Dibujar Corona Central (Espacio de Casas Terrenales)
    ctx.beginPath();
    ctx.arc(X, Y, rMax - 70, 0, 2 * Math.PI);
    ctx.fillStyle = "rgba(5, 5, 10, 0.85)";
    ctx.fill();
    ctx.strokeStyle = "#d4af37";
    ctx.lineWidth = 2;
    ctx.stroke();

    // Núcleo Central de Aspectos Planetarios
    ctx.beginPath();
    ctx.arc(X, Y, 40, 0, 2 * Math.PI);
    ctx.strokeStyle = "rgba(212, 175, 55, 0.4)";
    ctx.stroke();
}

// --- RENDERS DE COMPONENTES ---
function renderizarDashboard() {
    const tbody = document.getElementById("render-dashboard-astros");
    if (!tbody) return;

    // Datos locales maestros del Dashboard
    const astrosFicticios = [
        { nombre: "Sol ☀️", signo: "Tauro ♉", pos: "29° 12'", tipo: "mayores", din: "Directo 🟢" },
        { nombre: "Luna 🌙", signo: "Cáncer ♋", pos: "11° 04'", tipo: "mayores", din: "Rápida 🟢" },
        { nombre: "Mercurio ☿", signo: "Tauro ♉", pos: "14° 50'", tipo: "mayores", din: "Sombra Post 🔵" },
        { nombre: "Quirón ⚷", signo: "Aries ♈", pos: "24° 19'", tipo: "asteroides", din: "Estacionario 🟡" },
        { nombre: "Lilith ⚸", signo: "Leo ♌", pos: "05° 11'", tipo: "asteroides", din: "Directo 🟢" },
        { nombre: "Nodo Norte ☊", signo: "Piscis ♓", pos: "19° 42'", tipo: "asteroides", din: "Retrógrado 🔴" }
    ];

    window.astrosCache = astrosFicticios;
    inyectarFilasCielo(astrosFicticios);
}

function inyectarFilasCielo(lista) {
    const tbody = document.getElementById("render-dashboard-astros");
    if (!tbody) return;
    
    tbody.innerHTML = lista.map(a => `
        <tr onclick="abrirModalAstro('${a.nombre}', '${a.signo}', '${a.pos}', '${a.din}')" style="cursor:pointer;">
            <td><strong>${a.nombre}</strong></td>
            <td>${a.signo}</td>
            <td>${a.pos}</td>
            <td>${a.din}</td>
        </tr>
    `).join("");
}

function filtrarTablaCielo(evento, filtro) {
    document.querySelectorAll(".filtro-dash-btn").forEach(b => b.classList.remove("active"));
    evento.currentTarget.classList.add("active");

    if (filtro === "todos") {
        inyectarFilasCielo(window.astrosCache);
    } else {
        const filtrados = window.astrosCache.filter(a => a.tipo === filtro);
        inyectarFilasCielo(filtrados);
    }
}

function renderizarEnciclopedias() {
    // Validación de seguridad para la existencia global del objeto de datos local ASTRO_DATA
    if (typeof ASTRO_DATA === 'undefined') return;

    const gridSignos = document.getElementById("grid-signos");
    if (gridSignos && ASTRO_DATA.signos) {
        gridSignos.innerHTML = ASTRO_DATA.signos.map(s => `
            <details class="signo-card" data-buscar="${s.nombre.toLowerCase()} ${s.sub.toLowerCase()} ${s.frase_semilla.toLowerCase()} ${s.keywords.join(' ')}">
                <summary class="signo-header">
                    <span class="signo-glifo">🌟</span>
                    <strong>${s.nombre}</strong> — <small>${s.sub}</small>
                    <span class="signo-keyword">${s.keywords[0] || ''}</span>
                </summary>
                <div class="signo-content">
                    <p style="color:#d4af37; margin-bottom:4px; font-weight:600;">Esencia: "${s.frase_semilla}"</p>
                    <p style="margin-bottom:6px;"><strong>Regencia Somática:</strong> ${s.cuerpo_regente || 'N/A'}</p>
                    <p style="margin-bottom:8px;"><strong>Interpretación:</strong> ${s.det}</p>
                    <p style="font-size:0.88rem; opacity:0.85; border-top:1px dashed #444; padding-top:8px; font-style:italic;"><strong>Fondo Mitológico:</strong> ${s.mitologia}</p>
                </div>
            </details>
        `).join("");
    }

    const gridCasas = document.getElementById("grid-casas");
    if (gridCasas && ASTRO_DATA.casas) {
        gridCasas.innerHTML = ASTRO_DATA.casas.map(c => `
            <details class="casa-card-fold" data-buscar="${c.nombre.toLowerCase()} ${c.sub.toLowerCase()} ${c.keywords.join(' ')}">
                <summary class="signo-header">
                    <span class="signo-glifo">🏛️</span>
                    <strong>${c.nombre}</strong> — <small>${c.sub}</small>
                </summary>
                <div class="signo-content"><p>${c.det}</p></div>
            </details>
        `).join("");
    }

    const gridAstros = document.getElementById("render-biblioteca-arquetipos");
    if (gridAstros && ASTRO_DATA.astros) {
        gridAstros.innerHTML = ASTRO_DATA.astros.map(a => `
            <details class="casa-card-fold" data-buscar="${a.nombre.toLowerCase()} ${a.rol.toLowerCase()} ${a.keywords.join(' ')}">
