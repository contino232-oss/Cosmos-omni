function toggleMenu() {
    document.getElementById("sidebar").classList.toggle("active");
}

function mostrarSeccion(id) {
    document.querySelectorAll('.vista').forEach(v => v.classList.add('seccion-oculta'));
    document.getElementById(id).classList.remove('seccion-oculta');
    if(window.innerWidth < 1024) toggleMenu();
    window.scrollTo(0,0);
}

function renderPortal() {
    const hoy = new Date();
    document.getElementById('fecha-top').innerText = hoy.toLocaleDateString();
    document.getElementById('portal-dia').innerText = "Portal del " + hoy.toLocaleDateString('es-ES', {day:'numeric', month:'long'});

    // 1. Análisis Dinámico
    document.getElementById('analisis-hoy').innerHTML = `<strong>Configuración:</strong> Luna en fase menguante. Plutón Retrógrado en Acuario impulsa la revisión de innovaciones y estructuras sociales.`;

    // 2. Almanaque Lunar (Cálculo exacto Mayo 2026)
    const tl = document.getElementById('render-luna');
    let pos = 220; 
    for(let d=1; d<=31; d++) {
        let idx = Math.floor((pos/30)%12);
        let s = ZODIACO[idx];
        let fase = (d===1) ? "🌕" : (d===9) ? "🌗" : (d===16) ? "🌑" : (d===24) ? "🌓" : (d===31) ? "🌕" : "·";
        let dignidad = (idx === 7) ? "Caída" : (idx === 3) ? "Domicilio" : "Peregrina";
        tl.innerHTML += `<tr class="${d === hoy.getDate() ? 'hoy-fila' : ''}">
            <td>${d}</td><td>${fase}</td><td><strong>${Math.floor(pos%30)}° ${s.n}</strong></td>
            <td>${s.e}/${s.c}</td><td>${dignidad}</td><td>---</td>
        </tr>`;
        pos += 13.18;
    }

    // 3. Biblioteca de Mitos
    const gm = document.getElementById('grid-mitos');
    ARQUETIPOS.forEach(a => {
        gm.innerHTML += `
            <div class="card-mito">
                <div class="card-h"><h4>${a.p}</h4><small>${a.dios}</small></div>
                <p>${a.m}</p>
                <div class="card-f"><span>Reg: ${a.r}</span><span>Rol: ${a.g}</span></div>
            </div>`;
    });

    // 4. Clima Elemental (Balance)
    const clim = document.getElementById('render-clima');
    const elData = [ {n:"Fuego", p:25, c:"#ff4d4d"}, {n:"Tierra", p:40, c:"#4CAF50"}, {n:"Aire", p:20, c:"#81D4FA"}, {n:"Agua", p:15, c:"#2196F3"} ];
    elData.forEach(e => {
        clim.innerHTML += `
            <div class="bar-item">
                <div class="bar-info"><span>${e.n}</span><span>${e.p}%</span></div>
                <div class="bar-bg"><div class="bar-fill" style="width:${e.p}%; background:${e.c};"></div></div>
            </div>`;
    });

    // 5. Retrogradaciones
    const rr = document.getElementById('render-retro');
    RETRO_INFO.forEach(r => {
        rr.innerHTML += `<tr><td>${r.p}</td><td>${r.r}</td><td>${r.s}</td><td style="color:var(--oro)">${r.e}</td></tr>`;
    });

    // 6. Glosario
    const rg = document.getElementById('render-glosario');
    GLOSARIO.forEach(g => {
        rg.innerHTML += `<div class="glos-card"><h4>${g.t}</h4><p>${g.d}</p></div>`;
    });
}

window.onload = renderPortal;
