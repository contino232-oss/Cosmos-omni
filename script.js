document.addEventListener("DOMContentLoaded", () => {
    setInterval(actualizarRelojes, 1000);
    actualizarRelojes();
    actualizarFecha();
    obtenerGeolocalizacion();

    // Inyección de datos
    renderizarDashboard();
    renderizarRetrogradaciones();
    dibujarRuedaAstrologica();
});

// --- LÓGICA DE UI ---
function toggleMenu() {
    const drawer = document.getElementById("menu-drawer");
    if (drawer) drawer.classList.toggle("active");
}

function mostrarSeccion(idSeccion) {
    document.querySelectorAll(".vista").forEach(s => s.classList.add("seccion-oculta"));
    const activa = document.getElementById(idSeccion);
    if (activa) activa.classList.remove("seccion-oculta");
    const drawer = document.getElementById("menu-drawer");
    if (window.innerWidth <= 1150 && drawer) drawer.classList.remove("active");
}

// --- FUNCIONES DE DATOS ---
function renderizarDashboard() {
    const cuerpoTabla = document.getElementById("render-dashboard-astros");
    if (!cuerpoTabla) return;

    // Inyectamos los datos desde ASTRO_DATA
    cuerpoTabla.innerHTML = ASTRO_DATA.astros.map(astro => `
        <tr>
            <td><strong>${astro.nombre}</strong></td>
            <td>${astro.keywords.join(", ")}</td>
            <td>${astro.desc}</td>
        </tr>
    `).join("");
}

function renderizarRetrogradaciones() {
    const tablaRetro = document.getElementById("render-retrogradaciones");
    if (!tablaRetro) return;
    
    tablaRetro.innerHTML = `
        <thead><tr><th>Planeta</th><th>Periodo</th><th>Advertencia</th></tr></thead>
        <tbody>
            ${ASTRO_DATA.retrogradaciones2026.map(r => `
                <tr>
                    <td>${r.planeta}</td>
                    <td>${r.periodo}</td>
                    <td>${r.advertencia}</td>
                </tr>
            `).join("")}
        </tbody>
    `;
}

// --- RELOJES Y GEO ---
function actualizarFecha() {
    const el = document.getElementById("fecha-top");
    if (el) el.innerText = `📅 ${new Date().toLocaleDateString('es-ES')}`;
}

function actualizarRelojes() {
    const ahora = new Date();
    const loc = document.getElementById("time-local");
    const utc = document.getElementById("time-utc");
    const sid = document.getElementById("time-sideral");
    if(loc) loc.innerText = ahora.toLocaleTimeString('es-ES');
    if(utc) utc.innerText = `${ahora.toUTCString().split(' ')[4]} UTC`;
    if(sid) sid.innerText = ((ahora.getUTCHours() + 4.9) % 24).toFixed(2).replace('.', ':');
}

function obtenerGeolocalizacion() {
    const geo = document.getElementById("geo-location");
    if (geo) {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (pos) => geo.innerText = `📍 Lat: ${pos.coords.latitude.toFixed(2)}`,
                () => geo.innerText = "📍 Quilmes (Default)"
            );
        } else {
            geo.innerText = "📍 Quilmes";
        }
    }
}

function dibujarRuedaAstrologica() {
    console.log("Canvas listo para renderizar tránsitos reales.");
}
