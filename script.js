document.addEventListener("DOMContentLoaded", () => {
    // 1. Iniciar reloj y fechas
    setInterval(actualizarRelojes, 1000);
    actualizarRelojes();
    actualizarFecha();
    obtenerGeolocalizacion();

    // 2. Renderizar contenido (Aseguramos que no falte nada)
    renderizarAstros();
    renderizarRetrogradaciones();
    renderizarArquetipos(); // Nuevo
    dibujarRuedaAstrologica();
});

// --- RENDERIZADO DE DATOS ---

function renderizarAstros() {
    const tabla = document.getElementById("render-dashboard-astros");
    if (!tabla || typeof ASTRO_DATA === 'undefined') return;
    
    // Asumiendo que ASTRO_DATA tiene un array 'astros'
    const datos = ASTRO_DATA.astros || [];
    tabla.innerHTML = `<thead><tr><th>Astro</th><th>Rol</th></tr></thead>` +
        `<tbody>${datos.map(a => `<tr><td>${a.nombre}</td><td>${a.rol || a.desc}</td></tr>`).join("")}</tbody>`;
}

function renderizarRetrogradaciones() {
    const tabla = document.getElementById("render-retrogradaciones");
    if (!tabla || typeof ASTRO_DATA === 'undefined') return;

    const retro = ASTRO_DATA.retrogradaciones2026 || [];
    tabla.innerHTML = `<thead><tr><th>Planeta</th><th>Periodo</th><th>Nota</th></tr></thead>` +
        `<tbody>${retro.map(r => `<tr><td>${r.planeta}</td><td>${r.periodo}</td><td>${r.advertencia || r.nota}</td></tr>`).join("")}</tbody>`;
}

function renderizarArquetipos() {
    const contenedor = document.getElementById("render-zodiaco");
    if (!contenedor || typeof ASTRO_DATA === 'undefined') return;

    // Aquí renderizamos los arquetipos presentes en ASTRO_DATA.astros (o la lista que tengas)
    const lista = ASTRO_DATA.astros || [];
    contenedor.innerHTML = lista.map(a => `
        <div class="card-arquetipo">
            <h3>${a.nombre}</h3>
            <p><strong>${a.rol || ""}</strong></p>
            <small>${a.desc || ""}</small>
        </div>
    `).join("");
}

// --- UTILIDADES ---

function dibujarRuedaAstrologica() {
    const canvas = document.getElementById("wheel-canvas");
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    ctx.fillStyle = "#d4af37";
    ctx.beginPath();
    ctx.arc(150, 150, 50, 0, 2 * Math.PI);
    ctx.stroke();
    // Aquí iría tu lógica de dibujo real
}

function toggleMenu() {
    const drawer = document.getElementById("menu-drawer");
    if (drawer) drawer.classList.toggle("active");
}

function mostrarSeccion(idSeccion) {
    document.querySelectorAll(".vista").forEach(s => s.classList.add("seccion-oculta"));
    const activa = document.getElementById(idSeccion);
    if (activa) activa.classList.remove("seccion-oculta");
    const drawer = document.getElementById("menu-drawer");
    if (drawer) drawer.classList.remove("active");
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

function actualizarFecha() {
    const el = document.getElementById("fecha-top");
    if (el) el.innerText = `📅 ${new Date().toLocaleDateString('es-ES')}`;
}

function obtenerGeolocalizacion() {
    const geo = document.getElementById("geo-location");
    if (geo && navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            (pos) => geo.innerText = `📍 ${pos.coords.latitude.toFixed(1)}, ${pos.coords.longitude.toFixed(1)}`,
            () => geo.innerText = "📍 Quilmes"
        );
    }
}
