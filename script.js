/* ==========================================
   COSMO OMNI 2026 - LÓGICA DE CONTROL
   ========================================== */

function toggleMenu() { 
    document.getElementById("sidebar").classList.toggle("active"); 
}

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
    const isVisible = content && content.style.display === "block";
    document.querySelectorAll('.acordeon-content').forEach(c => c.style.display = "none");
    if(!isVisible && content) content.style.display = "block";
}

function init() {
    const hoy = new Date();
    const dia = hoy.getDate();
    
    // Sincronización de interfaz
    if(document.getElementById('fecha-top')) {
        document.getElementById('fecha-top').innerText = hoy.toLocaleDateString();
    }
    if(document.getElementById('portal-dia')) {
        document.getElementById('portal-dia').innerText = "Portal del " + hoy.toLocaleDateString('es-ES', {day:'numeric', month:'long'});
    }

    // 1. CÁLCULO DE LUNA, FASE Y DIGNIDAD
    let posLunarHoy = 220 + (dia - 1) * 13.18;
    let idxS = Math.floor((posLunarHoy / 30) % 12);
    let sLuna = ZODIACO[idxS];
    let faseActual = (dia < 9) ? "🌕" : (dia < 16) ? "🌗" : (dia < 24) ? "🌑" : "🌓";
    let dignidadLuna = (sLuna.r === "Luna") ? "Domicilio" : (sLuna.n === "Capricornio") ? "Exilio" : "Peregrino";

    // 2. INTERPRETACIÓN DINÁMICA
    const interpretacion = document.getElementById('interpretacion-resumen');
    if(interpretacion) {
        interpretacion.innerHTML = `
            <p>Luna en <strong>${sLuna.n}</strong> (${sLuna.e}). Estado: <strong>${dignidadLuna}</strong>. 
            Con el Nodo Norte en Piscis y el Sur en Virgo, el cielo pide equilibrio entre caos y orden. 
            <strong>Palas en Acuario</strong> activa ideas geniales, mientras que el <strong>Infortunio en Tauro</strong> señala precaución.</p>
        `;
    }

    // 3. RENDER TRÁNSITOS (CORREGIDO: Usando TRANSITOS_BASE)
    const rtp = document.getElementById('render-transitos-page');
    if(rtp) {
        rtp.innerHTML = `<tr><td><strong>Luna ${faseActual}</strong></td><td>${sLuna.n}</td><td>${Math.floor(posLunarHoy%30)}°</td><td>${dignidadLuna}</td></tr>`;
        
        // Cambio aquí: TRANSITOS_BASE
        TRANSITOS_BASE.forEach(t => {
            let sign = ZODIACO.find(z => z.n === t.s);
            let dig = (sign && sign.r === t.p) ? "Domicilio" : "D";
            rtp.innerHTML += `<tr onclick="irABiblioteca(${t.id})" style="cursor:pointer">
                <td><strong>${t.p}</strong></td><td>${t.s}</td><td>${t.g}</td><td>${t.e === 'D' ? dig : t.e}</td>
            </tr>`;
        });
    }

    // 4. TABLA DE RETROGRADACIONES
    const rr = document.getElementById('render-retrogradaciones');
    if(rr) {
        RETROGRADACIONES_2026.forEach(r => {
            rr.innerHTML += `<tr>
                <td><strong style="color:${r.c}">${r.p}</strong></td>
                <td><small>${r.r}</small></td>
                <td><small>${r.s}</small></td>
                <td style="color:${r.e === 'RETRÓGRADO' ? '#ff4d4d' : '#4CAF50'}">${r.e}</td>
            </tr>`;
        });
    }

    // 5. CALENDARIO LUNAR (RESTAURADO)
    const tl = document.getElementById('render-luna');
    if(tl) {
        let posCal = 220;
        for(let d=1; d<=31; d++) {
            let idx = Math.floor((posCal/30)%12);
            let s = ZODIACO[idx];
            let f = (d===1) ? "🌕" : (d===9) ? "🌗" : (d===16) ? "🌑" : (d===24) ? "🌓" : "·";
            let vacio = VACIOS_2026[d] || "---";
            tl.innerHTML += `<tr class="${d === dia ? 'hoy-fila' : ''}">
                <td>${d}</td><td>${f}</td><td>${Math.floor(posCal%30)}° ${s.n} (${s.e})</td><td><small>${vacio}</small></td>
            </tr>`;
            posCal += 13.18;
        }
    }

    // 6. BIBLIOTECA DIVINA (Incluye a Urano y Asteroides)
    const la = document.getElementById('lista-arquetipos');
    if(la) {
        la.innerHTML = ""; // Limpiar antes de renderizar
        ARQUETIPOS.forEach((a, i) => {
            la.innerHTML += `
                <div class="acordeon-item">
                    <button class="acordeon-btn" onclick="toggleAcordeon(${i})">
                        <span>${a.p} <small>(${a.d})</small></span><span>+</span>
                    </button>
                    <div id="content-${i}" class="acordeon-content" style="display:none">
                        <p><strong>Deidad:</strong> ${a.d} | <strong>Rige:</strong> ${a.r}</p>
                        <p>${a.m}</p>
                    </div>
                </div>`;
        });
    }
}

window.onload = init;
