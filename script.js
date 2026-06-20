document.addEventListener("DOMContentLoaded", () => {
    // 1. Verificación de seguridad
    if (typeof ASTRO_DATA === 'undefined') {
        console.error("ERROR: data.js no se ha cargado. Verifica el orden en el HTML.");
        return;
    }

    // 2. Ejecutar funciones
    renderizarDashboard();
    renderizarRetrogradaciones();
    actualizarRelojes();
    actualizarFecha();
    obtenerGeolocalizacion();
});

// Renderiza usando los datos reales de data.js
function renderizarDashboard() {
    const tabla = document.getElementById("render-dashboard-astros");
    if (!tabla) return;
    
    // Construcción de filas basada en ASTRO_DATA.astros
    const filas = ASTRO_DATA.astros.map(astro => `
        <tr>
            <td><strong>${astro.nombre}</strong></td>
            <td>${astro.desc}</td>
        </tr>
    `).join("");
    
    tabla.innerHTML = `<thead><tr><th>Astro</th><th>Esencia</th></tr></thead><tbody>${filas}</tbody>`;
}

// Renderiza las retrogradaciones de 2026
function renderizarRetrogradaciones() {
    const tabla = document.getElementById("render-retrogradaciones");
    if (!tabla) return;
    
    const filas = ASTRO_DATA.retrogradaciones2026.map(r => `
        <tr>
            <td>${r.planeta}</td>
            <td>${r.periodo}</td>
        </tr>
    `).join("");
    
    tabla.innerHTML = `<thead><tr><th>Planeta</th><th>Periodo</th></tr></thead><tbody>${filas}</tbody>`;
}

// Funciones de utilidad
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
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            (pos) => geo.innerText = `📍 Lat: ${pos.coords.latitude.toFixed(1)}`,
            () => geo.innerText = "📍 Quilmes"
        );
    }
}
