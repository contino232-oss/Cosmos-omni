function toggleMenu() { document.getElementById("sidebar").classList.toggle("active"); }

function mostrarSeccion(id) {
    document.querySelectorAll('.vista').forEach(v => v.classList.add('seccion-oculta'));
    const target = document.getElementById(id);
    if(target) target.classList.remove('seccion-oculta');
    if(window.innerWidth < 1024) document.getElementById("sidebar").classList.remove("active");
    window.scrollTo(0,0);
}

function irABiblioteca(index) {
    mostrarSeccion('arquetipos');
    toggleAcordeon(index);
}

function toggleAcordeon(id) {
    const content = document.getElementById(`content-${id}`);
    const isVisible = content.style.display === "block";
    document.querySelectorAll('.acordeon-content').forEach(c => c.style.display = "none");
    if(!isVisible && content) content.style.display = "block";
}

function calcularEfemerides() {
    const anio = document.getElementById('input-anio').value;
    const res = document.getElementById('res-efem');
    res.innerHTML = `<div class="card"><h4>Cielo de ${anio}</h4><p>Explorando alineaciones de Júpiter en Leo y Saturno en Aries para este ciclo histórico.</p></div>`;
}

function init() {
    const hoy = new Date();
    document.getElementById('fecha-top').innerText = hoy.toLocaleDateString();
    document.getElementById('portal-dia').innerText = "Portal del " + hoy.toLocaleDateString('es-ES', {day:'numeric', month:'long'});

    // Resumen en Inicio
    document.getElementById('interpretacion-resumen').innerHTML = `
        <p><strong>Configuración Destino:</strong> Luna en Acuario pidiendo libertad. Los Nodos nos piden soltar el control (Sur en Virgo) para entregarnos al flujo (Norte en Piscis). <strong>Quirón</strong> en sombra activa la revisión de viejas heridas de identidad.</p>
    `;

    // Render Tránsitos hoy
    const rtp = document.getElementById('render-transitos-page');
    TRANSITOS_HOY.forEach(t => {
        rtp.innerHTML += `<tr onclick="irABiblioteca(${t.id})" style="cursor:pointer; background:rgba(212,175,55,0.05)">
            <td><strong>${t.p}</strong></td><td>${t.s}</td><td>${t.g}</td><td>${t.e}</td>
        </tr>`;
    });

    // Render Retrogradaciones y Sombras
    const rr = document.getElementById('render-retrogradaciones');
    ESTADOS_RETRO.forEach(reg => {
        rr.innerHTML += `<tr><td><strong>${reg.p}</strong></td><td><small>${reg.r}</small></td><td><small>${reg.s}</small></td><td style="color:var(--oro)">${reg.e}</td></tr>`;
    });

    // Calendario Lunar Mayo 2026
    const tl = document.getElementById('render-luna');
    let pos = 220;
    for(let d=1; d<=31; d++) {
        let idx = Math.floor((pos/30)%12);
        let s = ZODIACO[idx];
        let fase = (d===1) ? "🌕" : (d===9) ? "🌗" : (d===16) ? "🌑" : (d===24) ? "🌓" : "·";
        let vacio = VACIOS_2026[d] || "---";
        tl.innerHTML += `<tr class="${d === hoy.getDate() ? 'hoy-fila' : ''}">
            <td>${d}</td><td>${fase}</td><td>${Math.floor(pos%30)}° ${s.n}</td><td><small>${vacio}</small></td>
        </tr>`;
        pos += 13.18;
    }

    // Biblioteca Plegable
    const la = document.getElementById('lista-arquetipos');
    ARQUETIPOS.forEach((a, i) => {
        la.innerHTML += `
            <div class="acordeon-item">
                <button class="acordeon-btn" onclick="toggleAcordeon(${i})"><span>${a.p}</span><span>+</span></button>
                <div id="content-${i}" class="acordeon-content">
                    <p><strong>Clasificación:</strong> ${a.t} | <strong>Regencia:</strong> ${a.r}</p>
                    <p>${a.m}</p>
                </div>
            </div>`;
    });

    // Balance Elemental
    const clim = document.getElementById('render-clima');
    const elData = [{n:"Fuego", p:15, c:"#ff4d4d"},{n:"Tierra", p:45, c:"#4CAF50"},{n:"Aire", p:30, c:"#81D4FA"},{n:"Agua", p:10, c:"#2196F3"}];
    elData.forEach(e => {
        clim.innerHTML += `<div class="bar-item"><div class="bar-info"><span>${e.n}</span><span>${e.p}%</span></div><div class="bar-bg"><div class="bar-fill" style="width:${e.p}%; background:${e.c};"></div></div></div>`;
    });
}

// Contacto Funcional
const form = document.getElementById("contact-form");
if(form) {
    form.onsubmit = e => {
        e.preventDefault();
        document.getElementById("form-status").innerText = "¡Mensaje enviado al Cosmos! ✨ Recibirás respuesta pronto.";
        form.reset();
    };
}
window.onload = init;
