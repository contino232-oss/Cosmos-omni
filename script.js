function toggleMenu() { document.getElementById("sidebar").classList.toggle("active"); }

function mostrarSeccion(id) {
    document.querySelectorAll('.vista').forEach(v => v.classList.add('seccion-oculta'));
    document.getElementById(id).classList.remove('seccion-oculta');
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

function init() {
    const hoy = new Date();
    const dia = hoy.getDate();
    document.getElementById('fecha-top').innerText = hoy.toLocaleDateString();
    document.getElementById('portal-dia').innerText = "Portal del " + hoy.toLocaleDateString('es-ES', {day:'numeric', month:'long'});

    // 1. CÁLCULO AUTOMÁTICO DE LA LUNA
    // Estimación matemática: Posición inicial (220°) + avance diario (13.18°)
    let posLunarHoy = 220 + (dia - 1) * 13.18;
    let signoIndex = Math.floor((posLunarHoy / 30) % 12);
    let gradoLunar = Math.floor(posLunarHoy % 30);
    let lunaSigno = ZODIACO[signoIndex].n;
    let lunaElemento = ZODIACO[signoIndex].e;

    // 2. GENERACIÓN DE INTERPRETACIÓN DINÁMICA
    let interpretacion = `Actualmente, la Luna transita por <strong>${lunaSigno}</strong> (${lunaElemento}). `;
    
    if (lunaSigno === "Piscis") {
        interpretacion += "Es un momento de alta sensibilidad y disolución del ego. Ideal para la meditación y el arte.";
    } else if (lunaElemento === "Fuego") {
        interpretacion += "La energía está activa e impulsiva. Momento de iniciar proyectos con pasión.";
    } else {
        interpretacion += "El clima astral sugiere introspección y enfoque en las bases estructurales.";
    }

    interpretacion += ` El <strong>Nodo Norte en Piscis</strong> sigue marcando el destino colectivo hacia la compasión, mientras que <strong>Lilith</strong> nos reta a soltar el juicio crítico.`;
    
    document.getElementById('interpretacion-resumen').innerHTML = interpretacion;

    // 3. RENDER TABLA DE TRÁNSITOS ACTUALIZADA
    const rtp = document.getElementById('render-transitos-page');
    rtp.innerHTML = "";
    
    // Añadir Luna Calculada
    rtp.innerHTML += `<tr onclick="irABiblioteca(1)" style="cursor:pointer; background:rgba(212,175,55,0.1)">
        <td><strong>Luna</strong></td><td>${lunaSigno}</td><td>${gradoLunar}°</td><td>Creciente</td>
    </tr>`;

    // Añadir el resto de planetas de data.js
    TRANSITOS_BASE.forEach(t => {
        rtp.innerHTML += `<tr onclick="irABiblioteca(${t.id})" style="cursor:pointer;">
            <td><strong>${t.p}</strong></td><td>${t.s}</td><td>${t.g}</td><td>${t.e}</td>
        </tr>`;
    });

    // 4. CALENDARIO LUNAR AUTOMÁTICO
    const tl = document.getElementById('render-luna');
    let posCal = 220;
    for(let d=1; d<=31; d++) {
        let idx = Math.floor((posCal/30)%12);
        let s = ZODIACO[idx];
        let vacio = VACIOS_2026[d] || "---";
        tl.innerHTML += `<tr class="${d === dia ? 'hoy-fila' : ''}">
            <td>${d}</td><td>${Math.floor(posCal%30)}° ${s.n}</td><td><small>${vacio}</small></td>
        </tr>`;
        posCal += 13.18;
    }

    // 5. BIBLIOTECA DIVINA
    const la = document.getElementById('lista-arquetipos');
    ARQUETIPOS.forEach((a, i) => {
        la.innerHTML += `
            <div class="acordeon-item">
                <button class="acordeon-btn" onclick="toggleAcordeon(${i})">
                    <span>${a.p} <small>(${a.d})</small></span><span>+</span>
                </button>
                <div id="content-${i}" class="acordeon-content">
                    <p><strong>Deidad:</strong> ${a.d} | <strong>Regencia:</strong> ${a.r}</p>
                    <p>${a.m}</p>
                </div>
            </div>`;
    });
}

window.onload = init;
