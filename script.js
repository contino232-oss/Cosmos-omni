document.addEventListener("DOMContentLoaded", () => {
    // 1. Inicializar relojes y fecha en tiempo real
    setInterval(actualizarRelojes, 1000);
    actualizarRelojes();
    actualizarFecha(); // Corrección: Función que toma la fecha del sistema hoy (20)

    // 2. Consultar geolocalización astral
    obtenerGeolocalizacion();

    // 3. Renders Automáticos
    renderizarDashboard();
    renderizarEnciclopedias();
    renderizarTarot("mayores"); 
    renderizarHerbolario();
    renderizarAlmanaqueLunar();
    renderizarRetrogradaciones();

    // 4. Dibujar la Rueda
    dibujarRuedaAstrologica();
});

// --- CORRECCIÓN DE FECHA DINÁMICA ---
function actualizarFecha() {
    const fechaElemento = document.getElementById("fecha-top");
    if (fechaElemento) {
        const hoy = new Date();
        const opciones = { day: '2-digit', month: '2-digit', year: 'numeric' };
        fechaElemento.innerText = `📅 ${hoy.toLocaleDateString('es-ES', opciones)}`;
    }
}

// --- RELOJES ASTROLÓGICOS ---
function actualizarRelojes() {
    const ahora = new Date();
    
    // Hora Local
    document.getElementById("time-local").innerText = ahora.toLocaleTimeString('es-ES');
    
    // Hora UTC
    const utc = ahora.toUTCString().split(' ')[4];
    document.getElementById("time-utc").innerText = `${utc} UTC`;
    
    // Hora Sideral (Aproximación simplificada para interfaz)
    const sideral = (ahora.getUTCHours() + 4.9) % 24; 
    document.getElementById("time-sideral").innerText = sideral.toFixed(2).replace('.', ':');
}

// --- RENDERS DE TABLAS (SECCIÓN DASHBOARD) ---
function renderizarDashboard() {
    const cuerpoTabla = document.getElementById("render-dashboard-astros");
    if (!cuerpoTabla) return;
    
    // Ejemplo de inyección rápida basada en tu data.js
    const astrosSimulados = ["Sol ☀️", "Luna 🌙", "Mercurio ☿", "Venus ♀️", "Marte ♂️"];
    cuerpoTabla.innerHTML = astrosSimulados.map(astro => `
        <tr>
            <td>${astro}</td>
            <td>Tauro</td>
            <td>28°</td>
            <td>Directo</td>
        </tr>
    `).join("");
}

// --- AUTOMATIZACIÓN DE RETROGRADACIONES 2026 ---
function renderizarRetrogradaciones() {
    const contenedor = document.getElementById("render-retrogradaciones");
    if (!contenedor || !ASTRO_DATA.retrogradaciones2026) return;

    contenedor.innerHTML = ASTRO_DATA.retrogradaciones2026.map(r => `
        <tr>
            <td>${r.planeta}</td>
            <td>${r.periodo}</td>
            <td>${r.signo}</td>
            <td>${r.advertencia}</td>
        </tr>
    `).join("");
}

// --- NAVEGACIÓN Y MENÚ ---
function toggleMenu() {
    const sidebar = document.getElementById("sidebar");
    if (sidebar) sidebar.classList.toggle("active");
}

function mostrarSeccion(idSeccion) {
    document.querySelectorAll(".vista").forEach(s => s.classList.add("seccion-oculta"));
    const activa = document.getElementById(idSeccion);
    if (activa) activa.classList.remove("seccion-oculta");
    
    // Cierra el menú en móvil tras click
    const sidebar = document.getElementById("sidebar");
    if (window.innerWidth <= 1150 && sidebar) sidebar.classList.remove("active");
}

// --- CANVAS Y RUEDA ---
function dibujarRuedaAstrologica() {
    const canvas = document.getElementById("wheel-canvas");
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    // Aquí iría tu lógica de dibujo de tránsitos sobre el fondo rueda.jpg
    console.log("Rueda astrológica lista sobre fondo dinámico.");
}

// --- MODO LECTURA ---
function toggleModoLectura() {
    document.body.classList.toggle("theme-light");
}

function obtenerGeolocalizacion() {
    const geo = document.getElementById("geo-location");
    if (geo) geo.innerText = "📍 Quilmes, Argentina (Cielo Sincronizado)";
}
