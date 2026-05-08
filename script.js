function toggleMenu() {
    document.getElementById("sidebar").classList.toggle("active");
}

function renderSistema() {
    // 1. Análisis del Día (Interpretación recuperada)
    const portalHoy = document.getElementById('analisis-hoy');
    if (portalHoy) {
        portalHoy.innerHTML = `
            <strong>Configuración del 8 de Mayo:</strong> La Luna en Escorpio en oposición al Sol en Tauro marca una jornada de alta intensidad emocional. 
            Es un portal para profundizar en lo que valoramos y soltar lo que ya no nutre nuestra evolución. 
            Júpiter exaltado en Cáncer ofrece una protección especial en temas familiares y de raíces.
        `;
    }

    // 2. Efemérides y Configuración Planetaria
    const te = document.getElementById('tabla-efemerides');
    const pc = document.getElementById('grid-planetas');
    EFEMERIDES_MAYO_2026.forEach(i => {
        te.innerHTML += `<tr><td><strong>${i.p}</strong></td><td>${i.g}</td><td>${i.s}</td><td>${i.e}</td></tr>`;
        pc.innerHTML += `<div class="card"><small>${i.p}</small><br><strong>${i.g} ${i.s}</strong></div>`;
    });

    // 3. Calendario Lunar Dinámico
    const lc = document.getElementById('render-luna');
    let posTotal = 232; 
    for(let d = 1; d <= 31; d++) {
        let idx = Math.floor((posTotal / 30) % 12);
        let grado = Math.floor(posTotal % 30);
        let s = ZODIACO[idx];
        let fase = (d===1 || d===31) ? "🌕" : (d===16) ? "🌑" : (d===9) ? "🌗" : (d===24) ? "🌓" : "·";
        
        let vacio = { 2: "22:15-23:40", 7: "12:00-14:50", 15: "00:30-02:45", 22: "11:50-13:30", 30: "00:10-02:00" }[d] || "---";
        
        lc.innerHTML += `
            <tr>
                <td>${d}</td><td>${fase}</td><td><strong>${grado}° ${s.n}</strong></td>
                <td>${s.e}</td><td>${s.d}</td><td style="color: #d4af37;">${vacio}</td>
            </tr>`;
        posTotal += 13.18;
    }

    // 4. Arquetipos Completos
    const mc = document.getElementById('grid-mitos');
    ARQUETIPOS.forEach(b => {
        mc.innerHTML += `
            <div class="mito-card">
                <h4>${b.p}</h4>
                <p>${b.m}</p>
                <small style="opacity: 0.7;">Clave: ${b.k} | Arquetipo: ${b.a}</small>
            </div>`;
    });
}

window.onload = renderSistema;
