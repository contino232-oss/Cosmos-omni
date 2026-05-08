function toggleMenu() {
    document.getElementById("sidebar").classList.toggle("active");
}

function render() {
    // Renderizar Efemérides
    const te = document.getElementById('tabla-efemerides');
    EFEMERIDES_HOY.forEach(i => {
        te.innerHTML += `<tr><td><strong>${i.p}</strong></td><td>${i.g}</td><td>${i.s}</td><td>${i.e}</td></tr>`;
    });

    // Renderizar Configuración Planetaria (Cards)
    const pc = document.getElementById('grid-planetas');
    EFEMERIDES_HOY.forEach(i => {
        pc.innerHTML += `<div class="card"><small>${i.p}</small><br><strong>${i.g} ${i.s}</strong></div>`;
    });

    // Renderizar Calendario Lunar
    const lc = document.getElementById('render-luna');
    let posTotal = 232; 
    for(let d = 1; d <= 31; d++) {
        let idx = Math.floor((posTotal / 30) % 12);
        let grado = Math.floor(posTotal % 30);
        let s = ZODIACO[idx];
        let fase = (d===1 || d===31) ? "🌕" : (d===16) ? "🌑" : (d===9) ? "🌗" : (d===24) ? "🌓" : "·";
        
        lc.innerHTML += `
            <tr>
                <td>${d}</td>
                <td>${fase}</td>
                <td><strong>${grado}° ${s.n}</strong></td>
                <td>${s.e}</td>
                <td>${s.d}</td>
                <td style="color: #d4af37;">---</td>
            </tr>`;
        posTotal += 13.18; 
    }

    // Renderizar Arquetipos
    const mc = document.getElementById('grid-mitos');
    ARQUETIPOS.forEach(b => {
        mc.innerHTML += `
            <div class="mito-card">
                <h4>${b.p}</h4>
                <p>${b.m}</p>
                <div style="margin-top:15px; font-size:0.8rem; opacity:0.7;">
                    <b>Palabra clave:</b> ${b.k} | <b>Regencia:</b> ${b.d}
                </div>
            </div>`;
    });

    document.getElementById('analisis-hoy').innerText = "Portal de Mayo: Sincronización celestial activa.";
}

window.onload = render;