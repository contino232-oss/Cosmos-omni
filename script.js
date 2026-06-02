document.addEventListener("DOMContentLoaded", () => {
    setInterval(actualizarRelojes, 1000);
    actualizarRelojes();
    actualizarFecha();

    obtenerGeolocalizacion();

    // Renders Automáticos
    renderizarDashboard();
    renderizarRetrogradaciones();
    dibujarRuedaAstrologica();
});

function toggleMenu() {
    // Adaptado al ID del HTML (menu-drawer)
    const drawer = document.getElementById("menu-drawer");
    if (drawer) drawer.classList.toggle("active");
}

function mostrarSeccion(idSeccion) {
    // Oculta todas las vistas
    document.querySelectorAll(".vista").forEach(s => s.classList.add("seccion-oculta"));
    // Muestra la seleccionada
    const activa = document.getElementById(idSeccion);
    if (activa) activa.classList.remove("seccion-oculta");
    
    // Cierra menú en móvil
    const drawer = document.getElementById("menu-drawer");
    if (window.innerWidth <= 1150 && drawer) drawer.classList.remove("active");
}

function actualizarFecha() {
    const fechaElemento = document.getElementById("fecha-top");
    if (fechaElemento) {
        const hoy = new Date();
        const opciones = { day: '2-digit', month: '2-digit', year: 'numeric' };
        fechaElemento.innerText = `📅 ${hoy.toLocaleDateString('es-ES', opciones)}`;
    }
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

function renderizarDashboard() {
    const cuerpoTabla = document.getElementById("render-dashboard-astros");
    if (!cuerpoTabla) return;
    const astrosSimulados = ["Sol ☀️", "Luna 🌙", "Mercurio ☿"];
    cuerpoTabla.innerHTML = astrosSimulados.map(astro => `<tr><td>${astro}</td><td>Tauro</td></tr>`).join("");
}

function dibujarRuedaAstrologica() {
    const canvas = document.getElementById("wheel-canvas");
    if (!canvas) return;
    console.log("Rueda lista.");
}

function obtenerGeolocalizacion() {
    const geo = document.getElementById("geo-location");
    if (geo) geo.innerText = "📍 Quilmes";
}
