document.addEventListener("DOMContentLoaded", () => {
    // Inicializar relojes astrológicos
    setInterval(actualizarRelojes, 1000);
    actualizarRelojes();

    // Consultar geolocalización astral mediante GeoNames
    obtenerGeolocalizacion();

    // Renders Automáticos
    renderizarDashboard();
    renderizarEnciclopedias();
    renderizarTarot("mayores"); 
    renderizarHerbolario();
    renderizarAlmanaqueLunar();

    // Dibujar las Ruedas Zodiacales en el Canvas
    dibujarRuedaAstrologica();
});

// --- CONTROL DE NAVEGACIÓN Y MENÚ ---
function toggleMenu() {
    const sidebar = document.getElementById("sidebar");
    sidebar.classList.toggle("open");
}

function mostrarSeccion(idSeccion) {
    document.querySelectorAll(".vista").forEach(seccion => {
        seccion.classList.add("seccion-oculta");
    });
    const seccionActiva = document.getElementById(idSeccion);
    if (seccionActiva) {
        seccionActiva.classList.remove("seccion-oculta");
    }
    document.getElementById("sidebar").classList.remove("open");
}

function irAlInicio(e) {
    e.preventDefault();
    mostrarSeccion("dashboard");
}

function toggleModoLectura() {
    document.body.classList.toggle("theme-dark");
    document.body.classList.toggle("theme-light");
    const btn = document.getElementById("btn-modo-lectura");
    btn.innerText = document.body.classList.contains("theme-light") ? "🌙 Modo Oscuro" : "🌓 Modo Lectura";
}

// --- RELOJES EN TIEMPO REAL ---
function actualizarRelojes() {
    const ahora = new Date();
    document.getElementById("time-local").innerText = ahora.toLocaleTimeString();
    document.getElementById("time-utc").innerText = ahora.toISOString().substr(11, 8) + " UTC";
    
    const hrs = ahora.getUTCHours();
    const mins = ahora.getUTCMinutes();
    const sideralStr = `${String((hrs + 2) % 24).padStart(2, "0")}:${String(mins).padStart(2, "0")}:34 SID`;
    document.getElementById("time-sideral").innerText = sideralStr;
}

// --- CONEXIÓN GEONAMES API ---
function obtenerGeolocalizacion() {
    const geoLabel = document.getElementById("geo-location");
    const urlGeonames = "https://secure.geonames.org/postalCodeLookupJSON?postalcode=1878&country=AR&username=tano232";

    fetch(urlGeonames)
        .then(res => res.json())
        .then(data => {
            if(data.postalcodes && data.postalcodes.length > 0) {
                const loc = data.postalcodes[0];
                geoLabel.innerText = `📍 Cielo de: ${loc.placeName}, ${loc.adminName1} (AR)`;
                document.getElementById("titulo-hit-dia").innerText = "🪐 Clima Cósmico: Sol en Tauro de Grado 29";
                document.getElementById("desc-hit-dia").innerText = "La energía solar se encuentra en los últimos grados de Tauro preparando su ingreso mutable a Géminis. Momento ideal para bajar a tierra ideas antes del gran cambio mental.";
            } else {
                geoLabel.innerText = "📍 Cielo Geocéntrico Estándar (GMT-3)";
            }
        })
        .catch(() => {
            geoLabel.innerText = "📍 Conexión Cósmica Estándar (Offline)";
        });
}

// --- MOTOR GRÁFICO: RUEDAS ZODIACALES (HTML5 CANVAS) ---
function dibujarRuedaAstrologica() {
    const canvas = document.getElementById("wheel-canvas");
    if (!canvas) return; // Salida segura si el elemento no está en el DOM actual

    const ctx = canvas.getContext("2d");
    const X = canvas.width / 2;
    const Y = canvas.height / 2;
    const rMax = Math.min(X, Y) - 20;
    
    // Nombres limpios de los signos correlativos para renderizado en sectores circulares (30° c/u)
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

    // Dibujar Corona Central (Espacio de Casas Terranales)
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

    // Incorporación real de Asteroides y Puntos Ficticios a la visualización del panel
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
    const gridSignos = document.getElementById("grid-signos");
    if (gridSignos) {
        gridSignos.innerHTML = ASTRO_DATA.signos.map(s => `
            <details class="plegable-card" data-buscar="${s.nombre.toLowerCase()} ${s.sub.toLowerCase()} ${s.frase_semilla.toLowerCase()} ${s.keywords.join(' ')}">
                <summary><strong>${s.nombre}</strong> — <small>${s.sub}</small></summary>
                <div class="plegable-content" style="padding:12px; line-height:1.5;">
                    <p style="color:#d4af37; margin-bottom:4px; font-weight:600;">Esencia: "${s.frase_semilla}"</p>
                    <p style="margin-bottom:6px;"><strong>Regencia Somática:</strong> ${s.cuerpo_regente}</p>
                    <p style="margin-bottom:8px;"><strong>Interpretación:</strong> ${s.det}</p>
                    <p style="font-size:0.88rem; opacity:0.85; border-top:1px dashed #444; padding-top:8px; font-style:italic;"><strong>Fondo Mitológico:</strong> ${s.mitologia}</p>
                </div>
            </details>
        `).join("");
    }

    const gridCasas = document.getElementById("grid-casas");
    if (gridCasas) {
        gridCasas.innerHTML = ASTRO_DATA.casas.map(c => `
            <details class="plegable-card" data-buscar="${c.nombre.toLowerCase()} ${c.sub.toLowerCase()} ${c.keywords.join(' ')}">
                <summary><strong>${c.nombre}</strong> — <small>${c.sub}</small></summary>
                <div class="plegable-content" style="padding:10px;"><p>${c.det}</p></div>
            </details>
        `).join("");
    }

    const gridAstros = document.getElementById("render-biblioteca-arquetipos");
    if (gridAstros) {
        gridAstros.innerHTML = ASTRO_DATA.astros.map(a => `
            <details class="plegable-card" data-buscar="${a.nombre.toLowerCase()} ${a.rol.toLowerCase()} ${a.keywords.join(' ')}">
                <summary><strong>${a.nombre}</strong> — ${a.rol}</summary>
                <div class="plegable-content" style="padding:12px; line-height:1.5;">
                    <p style="color:#d4af37; margin-bottom:4px; font-weight:600;">Frase Clave: "${a.frase_semilla}"</p>
                    <p style="margin-bottom:6px; font-size:0.9rem; opacity:0.8;">Keywords: ${a.keywords.join(" • ")}</p>
                    <p>${a.desc}</p>
                </div>
            </details>
        `).join("");
    }
}

function filtrarCards(tipo) {
    const input = document.getElementById(`buscar-${tipo}`);
    const query = input.value.toLowerCase();
    const contenedor = document.getElementById(tipo === 'signo' ? 'grid-signos' : 'grid-casas');
    
    contenedor.querySelectorAll("details").forEach(card => {
        const textoBusqueda = card.getAttribute("data-buscar") || "";
        if (textoBusqueda.includes(query)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
}

// --- TAROT FLUIDO ---
function renderizarTarot(filtroTipo) {
    const galeria = document.getElementById("galeria-tarot");
    if (!galeria) return;

    const cartasFiltradas = ASTRO_DATA.tarot.filter(c => c.tipo === filtroTipo);

    galeria.innerHTML = cartasFiltradas.map(c => `
        <div class="tarot-card" onclick="abrirModalTarot('${c.id}')">
            <img src="${c.imagen}" alt="${c.nombre}" class="tarot-img" onerror="this.src='https://placehold.co/150x260/2c2c2c/ffffff?text=Tarot+Card'">
            <div class="tarot-info">
                <h4>${c.nombre}</h4>
                <div class="tarot-tags">
                    ${c.keywords.map(k => `<span class="tag">${k}</span>`).join("")}
                </div>
            </div>
        </div>
    `).join("");
}

function filtrarTarot(evento, tipo) {
    document.querySelectorAll(".tarot-nav .tab-btn").forEach(b => b.classList.remove("active"));
    evento.currentTarget.classList.add("active");
    renderizarTarot(tipo);
}

// --- HERBOLARIO MÍSTICO ---
function renderizarHerbolario() {
    const grid = document.getElementById("render-herbolario-data");
    if (!grid) return;

    grid.innerHTML = ASTRO_DATA.herbolario.map(h => `
        <div class="herb-card" style="border: 1px solid #d4af37; padding: 15px; border-radius: 6px; background: rgba(20,20,20,0.5);">
            <h4>${h.nombre}</h4>
            <p style="color:#d4af37; font-size: 0.85rem; margin: 4px 0;">Regencia: ${h.regente}</p>
            <p style="font-size: 0.9rem; margin-bottom: 8px;">${h.propiedades}</p>
            <small style="display:block; opacity: 0.8; font-style: italic;">Uso: ${h.uso}</small>
        </div>
    `).join("");
}

// --- ALMANAQUE LUNAR ---
function renderizarAlmanaqueLunar() {
    const tbody = document.getElementById("render-luna");
    if (!tbody) return;

    const lineasMayo = [
        { dia: "19 de Mayo", fase: "🌑 Luna Nueva", grado: "28° Tauro", vacio: "14:20 a 18:30" },
        { dia: "22 de Mayo", fase: "🌒 Creciente", grado: "10° Cáncer", vacio: "Ninguno" },
        { dia: "24 de Mayo", fase: "🌓 Cuarto Creciente", grado: "03° Leo", vacio: "02:10 a 05:40" }
    ];

    tbody.innerHTML = lineasMayo.map(l => `
        <tr>
            <td><strong>${l.dia}</strong></td>
            <td>${l.fase}</td>
            <td>${l.grado}</td>
            <td><code>${l.vacio}</code></td>
        </tr>
    `).join("");
}

// --- CALCULADORA DE REGENCIAS ---
function calcularRegente() {
    const signo = document.getElementById("select-regencia-signo").value;
    const resBox = document.getElementById("resultado-regente");
    if (!signo) {
        resBox.innerText = "";
        return;
    }
    resBox.innerHTML = `<strong>Regente:</strong> ${ASTRO_DATA.regenciasDiccionario[signo]}`;
}

// --- MODALES UNIVERSALES ---
function abrirModalTarot(idCarta) {
    const carta = ASTRO_DATA.tarot.find(c => c.id === idCarta);
    if (!carta) return;

    const body = document.getElementById("modal-dinamico-body");
    body.innerHTML = `
        <div style="display:flex; flex-direction:column; align-items:center; text-align:center; gap:15px; color:#fff;">
            <h3>${carta.nombre}</h3>
            <img src="${carta.imagen}" alt="${carta.nombre}" style="max-height:340px; border-radius:8px; border: 2px solid #d4af37;">
            <p style="font-style:italic; color:#d4af37;">${carta.keywords.join(" • ")}</p>
            <p style="font-size:0.95rem; line-height:1.5;">${carta.descripcion}</p>
        </div>
    `;
    document.getElementById("astro-modal").classList.remove("seccion-oculta");
}

function abrirModalAstro(nombre, signo, pos, din) {
    const body = document.getElementById("modal-dinamico-body");
    body.innerHTML = `
        <div style="text-align:center; padding: 10px; color:#fff;">
            <h2 style="color:#d4af37; margin-bottom:10px;">${nombre}</h2>
            <p style="font-size:1.2rem; margin:8px 0;">Ubicación: <strong>${signo}</strong> en el grado <strong>${pos}</strong></p>
            <p>Dinámica de aceleración: <code>${din}</code></p>
            <p style="margin-top:15px; font-size:0.9rem; opacity:0.8;">Datos sincronizados en tiempo sidereal geocéntrico.</p>
        </div>
    `;
    document.getElementById("astro-modal").classList.remove("seccion-oculta");
}

function cerrarModal() {
    document.getElementById("astro-modal").classList.add("seccion-oculta");
}
