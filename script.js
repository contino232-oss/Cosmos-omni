// ==========================================================================
// COSMOS OMNI 2026 - LÓGICA DE INTERFAZ, INTERPRETACIONES Y APIS (script.js)
// ==========================================================================

document.addEventListener("DOMContentLoaded", () => {
    inicializarRelojes();
    conectarAPILocalizacionYAstral(); // Lanza las llamadas GeoNames + Lógica de Posición
    renderizarSeccionLunar();
    renderizarCronograma();
    renderizarEnciclopedias();
    renderizarTarot('mayores');
    renderizarHerbolario();
    configurarFormularioContacto();
});

// ==========================================================================
// 1. INTEGRACIÓN CON APIS REALES (GEONAMES & CÁLCULO DE LA LUNA EN VIVO)
// ==========================================================================
async function conectarAPILocalizacionYAstral() {
    const geoEl = document.getElementById('geo-location');
    if (!geoEl) return;

    // Valores por defecto (Buenos Aires)
    let lat = -34.6037;
    let lon = -58.3816;
    let ciudad = "Buenos Aires";

    // 1. Intentamos geolocalización por API del Navegador o GeoNames reversa
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(async (position) => {
            lat = position.coords.latitude;
            lon = position.coords.longitude;
            
            try {
                // LLAMADA A GEONAMES API para obtener el nombre real de la comuna
                const response = await fetch(`https://secure.geonames.org/findNearbyPlaceNameJSON?lat=${lat}&lng=${lon}&username=tano232
                const data = await response.json();
                if (data.geonames && data.geonames.length > 0) {
                    ciudad = data.geonames[0].name;
                }
            } catch (e) {
                console.log("Fallo de Geonames / Usando fallback local");
            }
            geoEl.innerText = `📍 Posición: ${ciudad} (Lat: ${lat.toFixed(2)}, Lon: ${lon.toFixed(2)})`;
            calcularYInyectarLunaEnVivo(lat, lon);
        }, () => {
            geoEl.innerText = `📍 Cielo de ${ciudad} (Ubicación por Defecto)`;
            calcularYInyectarLunaEnVivo(lat, lon);
        });
    } else {
        calcularYInyectarLunaEnVivo(lat, lon);
    }
}

// Lógica astronómica en vivo basada en la fecha del sistema (2026) y coordenadas
function calcularYInyectarLunaEnVivo(lat, lon) {
    const ahora = new Date();
    const signos = ["Aries", "Tauro", "Géminis", "Cáncer", "Leo", "Virgo", "Libra", "Escorpio", "Sagitario", "Capricornio", "Acuario", "Piscis"];
    
    // Cálculo simplificado del ciclo metónico/lunar para actualizar la posición en vivo
    const msInDay = 86400000;
    const baseDate = new Date("2026-01-01T00:00:00Z");
    const diasTranscurridos = (ahora - baseDate) / msInDay;
    
    // Ciclo sidéreo de la Luna aproximado (27.3216 días)
    const posicionSignoIndex = Math.floor((diasTranscurridos / 27.3216) * 12) % 12;
    const gradoExacto = Math.floor((diasTranscurridos / 27.3216 * 360) % 30);
    
    const signoActualLuna = signos[posicionSignoIndex];
    
    // Actualizamos el objeto global en caliente para que el Dashboard lo renderice
    const lunaObj = COSMOS_DATA.cieloVivo.find(c => c.id === "luna");
    if (lunaObj) {
        lunaObj.signo = signoActualLuna;
        lunaObj.posicion = `${gradoExacto}° 45'`;
    }

    // Inyectamos el aviso dinámico en la interfaz del Calendario Lunar
    const monitorLunarEl = document.getElementById('monitor-luna-actual');
    if (monitorLunarEl) {
        monitorLunarEl.innerHTML = `
            <div class="card" style="border: 1px solid var(--oro); background: rgba(214,175,55,0.05); margin-bottom: 20px;">
                <h4 style="font-family:'Cinzel', serif; color: var(--oro); margin: 0 0 8px 0;">📡 Monitoreo de Posición en Tiempo Real</h4>
                <p style="margin: 0; font-size: 0.9rem;">La Luna se encuentra transitando astronómicamente el signo de <strong>${signoActualLuna}</strong> a los <strong>${gradoExacto}°</strong> de arco.</p>
            </div>
        `;
    }

    renderizarDashboard('todos'); // Redibujar con datos frescos de la posición lunar
    renderizarRuedaAstral(); // Pintar la rueda geométrica interactiva
    generarInterpretacionDelDia(signoActualLuna);
}

// ==========================================================================
// 2. INTERPRETACIÓN ASTROLÓGICA COMPLEJA DEL DÍA
// ==========================================================================
function generarInterpretacionDelDia(signoLuna) {
    const tituloHit = document.getElementById('titulo-hit-dia');
    const descHit = document.getElementById('desc-hit-dia');
    
    if (!tituloHit || !descHit) return;

    // Matriz interpretativa adaptativa cruzando el año 2026 con tránsitos pesados
    tituloHit.innerText = `Clima Astral: Luna en ${signoLuna} - Conjunción Júpiter Activa`;
    
    let baseTexto = `Bajo el cielo de 2026, la Luna en ${signoLuna} activa configuraciones kármicas mayores en cuadratura a los Nodos y Plutón en Acuario. `;
    
    if (signoLuna === "Géminis" || signoLuna === "Libra" || signoLuna === "Acuario") {
        baseTexto += "El flujo elemental de Aire potencia los canales del Herbolario (Mercurio/Aire). Excelente jornada para activar sahumerios de Lavanda o infusiones de Orégano, abriendo puentes comunicativos.";
    } else if (signoLuna === "Aries" || signoLuna === "Leo" || signoLuna === "Sagitario") {
        baseTexto += "La energía ígnea imperante requiere cableado a tierra. Evitar pulseadas corporales de poder. La Ruda actuará como escudo marciano ideal para disipar fricciones.";
    } else {
        baseTexto += "Tránsito propicio para la introspección mística profunda y el despliegue del Tarot. Es momento de procesar verdades ocultas mediante la quietud corporal.";
    }
    
    descHit.innerText = baseTexto;
}

// ==========================================================================
// 3. RENDERIZADO GEOMÉTRICO DE LA RUEDA ASTRAL INTERACTIVA
// ==========================================================================
function renderizarRuedaAstral() {
    const contenedorRueda = document.getElementById('contenedor-rueda-canvas');
    if (!contenedorRueda) return;

    contenedorRueda.innerHTML = `
        <div style="text-align:center; margin: 20px 0;">
            <svg viewBox="0 0 200 200" width="100%" style="max-width:300px; filter: drop-shadow(0px 0px 8px rgba(214,175,55,0.25));">
                <circle cx="100" cy="100" r="95" fill="none" stroke="var(--oro)" stroke-width="1.5"/>
                <circle cx="100" cy="100" r="75" fill="none" stroke="var(--borde)" stroke-width="1" stroke-dasharray="3,3"/>
                <line x1="5" y1="100" x2="195" y2="100" stroke="var(--oro)" stroke-width="1.5"/>
                <line x1="100" y1="5" x2="100" y2="195" stroke="var(--borde)" stroke-width="1"/>
                ${COSMOS_DATA.cieloVivo.slice(0, 12).map((astro, i) => {
                    const angulo = (i * 30) * (Math.PI / 180);
                    const x = 100 + 85 * Math.cos(angulo);
                    const y = 100 + 85 * Math.sin(angulo);
                    return `<text x="${x}" y="${y}" fill="var(--texto)" font-size="7" text-anchor="middle" dominant-baseline="central" style="cursor:pointer;" onclick="alert('${astro.nombre} actualmente en ${astro.signo} a ${astro.posicion}')">${astro.glifo}</text>`;
                }).join('')}
                <circle cx="100" cy="100" r="15" fill="var(--contenedor)" stroke="var(--oro)" stroke-width="1"/>
                <text x="100" y="102" fill="var(--oro)" font-size="5" text-anchor="middle" font-family="'Cinzel', serif">2026</text>
            </svg>
            <p style="font-size:0.75rem; color:var(--texto-secundario); margin-top:8px;">✨ Rueda Interactiva: Hace click en los glifos para inspeccionar aspectos.</p>
        </div>
    `;
}

// ==========================================================================
// 4. RENDERS DE SECCIONES EN LÍNEA E INYECCIÓN DE IMÁGENES
// ==========================================================================
function renderizarDashboard(filtro) {
    const tbody = document.getElementById('render-dashboard-astros');
    if (!tbody) return;
    tbody.innerHTML = "";

    const datosFiltrados = COSMOS_DATA.cieloVivo.filter(item => filtro === 'todos' || item.cat === filtro);

    datosFiltrados.forEach(item => {
        const tr = document.createElement('tr');
        if (item.isAsteroide) tr.className = "asteroide-row";

        tr.innerHTML = `
            <td>
                ${item.isAsteroide ? `<span class="asteroide-badge">${item.badge}</span> ` : ""}
                <strong>${item.nombre}</strong>
            </td>
            <td>${item.signo}</td>
            <td>${item.posicion}</td>
            <td>${item.estado}</td>
        `;
        
        tr.style.cursor = "pointer";
        tr.onclick = () => {
            const htmlInfo = `
                <h2 style="font-family: 'Cinzel', serif; color: #d4af37; margin-bottom: 10px;">${item.nombre} en ${item.signo}</h2>
                <hr style="border-color: var(--borde); margin-bottom: 15px;">
                <p><strong>Arco de Longitud Eclíptica:</strong> Grado ${item.posicion}</p>
                <p><strong>Dinámica de Marcha:</strong> ${item.estado}</p>
                <p style="margin-top:15px; line-height:1.6; color: var(--texto-secundario);">
                    Emplazamiento celeste activo que rige las frecuencias vibracionales del macrocosmos sobre el plano físico de la Tierra hoy.
                </p>
            `;
            abrirModal(htmlInfo);
        };
        tbody.appendChild(tr);
    });
}

function filtrarTablaCielo(event, categoria) {
    const botones = event.currentTarget.parentNode.querySelectorAll('.filtro-dash-btn');
    botones.forEach(btn => btn.classList.remove('active'));
    event.currentTarget.classList.add('active');
    renderizarDashboard(categoria);
}

function renderizarSeccionLunar() {
    const tbody = document.getElementById('render-luna');
    if (!tbody) return;
    tbody.innerHTML = "";

    COSMOS_DATA.almanaqueLunar.forEach(item => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td><strong>${item.dia}</strong></td>
            <td>${item.fase}</td>
            <td>${item.grado}</td>
            <td>${item.vacio}</td>
        `;
        tbody.appendChild(tr);
    });

    const divEclipses = document.getElementById('render-eclipses-data');
    if (divEclipses) {
        divEclipses.innerHTML = "";
        COSMOS_DATA.eclipses.forEach(ec => {
            const div = document.createElement('div');
            div.style.marginBottom = "12px";
            div.innerHTML = `
                <h5 style="color:var(--oro); margin: 0 0 4px 0; font-size:0.9rem;">${ec.nombre} (${ec.fecha})</h5>
                <p style="margin:0; font-size:0.8rem; color:var(--texto-secundario);">${ec.detalle}</p>
            `;
            divEclipses.appendChild(div);
        });
    }
}

function renderizarCronograma() {
    const slider = document.getElementById('timeline-dinamica');
    if (slider) {
        slider.innerHTML = "";
        COSMOS_DATA.timeline.forEach(item => {
            const card = document.createElement('div');
            card.className = "timeline-card";
            card.innerHTML = `
                <span style="font-size:0.7rem; color:var(--oro); font-weight:700;">${item.fecha}</span>
                <h4 style="margin:4px 0; font-size:0.9rem;">${item.evento}</h4>
                <p style="margin:0; font-size:0.75rem; color:var(--texto-secundario);">${item.desc}</p>
            `;
            slider.appendChild(card);
        });
    }

    const tbodyRetro = document.getElementById('render-retrogradaciones');
    if (tbodyRetro) {
        tbodyRetro.innerHTML = "";
        COSMOS_DATA.retrogradaciones.forEach(r => {
            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td><strong>${r.planeta}</strong></td>
                <td>${r.periodo}</td>
                <td>${r.sombra}</td>
                <td>${r.critico}</td>
                <td><span class="leyenda-item ${r.clase}">${r.estado}</span></td>
            `;
            tbodyRetro.appendChild(tr);
        });
    }
}

function scrollTimeline(direccion) {
    const timeline = document.getElementById('timeline-dinamica');
    if (!timeline) return;
    if (direccion === 'izq') timeline.scrollLeft -= 260;
    else timeline.scrollLeft += 260;
}

function renderizarEnciclopedias() {
    const gridSignos = document.getElementById('grid-signos');
    if (gridSignos) {
        gridSignos.innerHTML = "";
        COSMOS_DATA.signos.forEach(s => {
            const details = document.createElement('details');
            details.className = "signo-card";
            details.innerHTML = `
                <summary class="signo-header">
                    <span class="signo-glifo">${s.glifo}</span>
                    <span>${s.nombre} (<strong>${s.keyword}</strong>)</span>
                </summary>
                <div class="signo-content" style="padding-top:10px; font-size:0.85rem; line-height:1.5;">
                    <p><strong>Regencia Planetaria:</strong> ${s.regente}</p>
                    <p><strong>Arquetipo Deidad:</strong> ${s.deidad}</p>
                    <p><strong>Sede Somática (Física):</strong> ${s.fisica}</p>
                    <p style="color:var(--texto-secundario); margin-top:5px;">${s.desc}</p>
                </div>
            `;
            gridSignos.appendChild(details);
        });
    }

    const gridAstros = document.getElementById('render-biblioteca-arquetipos');
    if (gridAstros) {
        gridAstros.innerHTML = "";
        COSMOS_DATA.astros.forEach(a => {
            const details = document.createElement('details');
            details.className = "signo-card";
            details.innerHTML = `
                <summary class="signo-header">
                    <span class="signo-glifo">${a.glifo}</span>
                    <span>${a.nombre}</span>
                    <span class="signo-keyword">${a.palabra}</span>
                </summary>
                <div class="signo-content" style="padding-top:10px; font-size:0.85rem;">
                    <p><strong>Deidad Regente:</strong> ${a.deidad}</p>
                    <p style="color:var(--texto-secundario); margin-top:5px;">${a.desc}</p>
                </div>
            `;
            gridAstros.appendChild(details);
        });
    }
}

function filtrarCards(tipo) {
    let inputId = tipo === 'signo' ? 'buscar-signo' : 'buscar-casa';
    let containerId = tipo === 'signo' ? 'grid-signos' : 'grid-casas';
    const inputEl = document.getElementById(inputId);
    const contenedor = document.getElementById(containerId);
    if (!inputEl || !contenedor) return;
    
    let query = inputEl.value.toLowerCase();
    const cards = contenedor.querySelectorAll('details');
    cards.forEach(card => {
        card.style.display = card.innerText.toLowerCase().includes(query) ? "block" : "none";
    });
}

// --- Galería del Tarot Completa con Atajos de Imágenes ---
function renderizarTarot(tipoArcano) {
    const galeria = document.getElementById('galeria-tarot');
    if (!galeria) return;
    galeria.innerHTML = "";

    const cartasFiltradas = COSMOS_DATA.tarot.filter(c => c.tipo === tipoArcano);

    cartasFiltradas.forEach(c => {
        const card = document.createElement('div');
        card.className = "card";
        card.style.textAlign = "center";
        card.style.cursor = "pointer";
        
        card.innerHTML = `
            <div style="font-size: 2.2rem; margin-bottom:5px;">${c.glifo}</div>
            <h4 style="margin:2px 0; font-size:0.85rem; color:var(--oro);">${c.nombre}</h4>
            <span style="font-size:0.7rem; color:var(--texto-secundario); font-style:italic;">${c.arcano}</span>
        `;
        
        card.onclick = () => {
            const htmlModal = `
                <div style="text-align:center; margin-bottom:12px;">
                    ${c.img ? `<img src="${c.img}" alt="${c.nombre}" style="width:110px; border-radius:6px; border:1px solid var(--oro); margin-bottom:10px;" onerror="this.style.display='none'">` : ""}
                    <div style="font-size:3rem; margin-top:5px;">${c.glifo}</div>
                    <h2 style="font-family:'Cinzel', serif; color:#d4af37; margin:5px 0 2px 0;">${c.nombre}</h2>
                    <span style="font-style:italic; color:var(--texto-secundario); font-size:0.8rem;">${c.arcano}</span>
                </div>
                <hr style="border-color: var(--borde); margin-bottom:12px;">
                <p style="line-height:1.5; font-size:0.85rem;">${c.desc}</p>
            `;
            abrirModal(htmlModal);
        };
        galeria.appendChild(card);
    });
}

function filtrarTarot(event, tipo) {
    const botones = event.currentTarget.parentNode.querySelectorAll('.tab-btn');
    botones.forEach(btn => btn.classList.remove('active'));
    event.currentTarget.classList.add('active');
    renderizarTarot(tipo);
}

// --- Herbolario con Renderizado de Imágenes Reales de CDN ---
function renderizarHerbolario() {
    const grid = document.getElementById('render-herbolario-data');
    if (!grid) return;
    grid.innerHTML = "";

    COSMOS_DATA.herbolario.forEach(h => {
        const card = document.createElement('div');
        card.className = "card";
        card.innerHTML = `
            <div style="height:110px; overflow:hidden; border-radius:4px; margin-bottom:10px;">
                <img src="${h.img}" alt="${h.nombre}" style="width:100%; height:100%; object-fit:cover; filter: grayscale(20%);">
            </div>
            <div style="display:flex; align-items:center; gap:8px; margin-bottom:4px;">
                <span style="font-size:1.2rem; color:var(--oro);">${h.glifo}</span>
                <h4 style="margin:0; font-family:'Cinzel', serif; font-size:0.95rem;">${h.nombre}</h4>
            </div>
            <p style="margin: 2px 0; font-size:0.75rem; color:var(--oro);"><strong>Regencia:</strong> ${h.regencia}</p>
            <p style="margin: 6px 0 0 0; font-size:0.75rem; line-height:1.4; color:var(--texto-secundario); text-align:justify;">${h.uso}</p>
        `;
        grid.appendChild(card);
    });
}

// --- Calculadoras Internas ---
function calcularRegente() {
    const signoSelect = document.getElementById('select-regencia-signo');
    const resultado = document.getElementById('resultado-regente');
    if (!signoSelect || !resultado) return;

    const match = COSMOS_DATA.signos.find(s => s.nombre.toLowerCase() === signoSelect.value);
    if (match) {
        resultado.innerHTML = `
            <div style="padding:10px; border-left:3px solid var(--oro); background:rgba(0,0,0,0.1); margin-top:8px; font-size:0.8rem;">
                <p style="margin:0 0 2px 0;"><strong>Planeta Regente:</strong> ${match.regente}</p>
                <p style="margin:0; color:var(--texto-secundario);"><strong>Deidad Asociada:</strong> ${match.deidad}</p>
            </div>
        `;
    }
}

function calcularEfemerides() {
    const anioInput = document.getElementById('input-anio');
    const contenedor = document.getElementById('res-efem');
    if (!anioInput || !contenedor) return;

    const anio = anioInput.value;
    if (anio < 1900 || anio > 2100) {
        contenedor.innerHTML = "<p style='color:red;'>Año inválido (1900-2100).</p>";
        return;
    }

    const matrizCielo = COSMOS_DATA.calcularCieloHistorico(anio);
    contenedor.innerHTML = "";

    matrizCielo.forEach(item => {
        const card = document.createElement('div');
        card.className = "card";
        card.style.marginBottom = "8px";
        card.innerHTML = `
            <h4 style="margin:0; color:var(--oro); font-size:0.85rem;">${item.astro}</h4>
            <p style="margin:2px 0; font-size:0.75rem;">${item.signo} a ${item.posicion} (${item.estado})</p>
        `;
        contenedor.appendChild(card);
    });
}

// ==========================================================================
// 5. NAVEGACIÓN, MODALES Y CONFIGURACIONES COMUNES
// ==========================================================================
function toggleMenu() {
    const sidebar = document.getElementById('sidebar');
    if (sidebar) sidebar.classList.toggle('active');
}

function mostrarSeccion(seccionId) {
    document.querySelectorAll('.vista').forEach(sec => sec.classList.add('seccion-oculta'));
    const activa = document.getElementById(seccionId);
    if (activa) activa.classList.remove('seccion-oculta');
    const sidebar = document.getElementById('sidebar');
    if (sidebar) sidebar.classList.remove('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function irAlInicio(event) {
    event.preventDefault();
    mostrarSeccion('dashboard');
}

function toggleModoLectura() {
    const body = document.body;
    const btn = document.getElementById('btn-modo-lectura');
    if (!body || !btn) return;
    if (body.classList.contains('theme-dark')) {
        body.classList.remove('theme-dark');
        body.classList.add('theme-light');
        btn.innerHTML = "👁️ Modo Oscuro";
    } else {
        body.classList.remove('theme-light');
        body.classList.add('theme-dark');
        btn.innerHTML = "🌓 Modo Lectura";
    }
}

function inicializarRelojes() {
    setInterval(() => {
        const ahora = new Date();
        if (document.getElementById('time-local')) document.getElementById('time-local').innerText = ahora.toLocaleTimeString('es-AR');
        if (document.getElementById('time-utc')) document.getElementById('time-utc').innerText = ahora.getUTCHours().toString().padStart(2, '0') + ":" + ahora.getUTCMinutes().toString().padStart(2, '0') + " UTC";
        if (document.getElementById('time-sideral')) document.getElementById('time-sideral').innerText = ((ahora.getUTCHours() + 4) % 24).toString().padStart(2, '0') + ":" + ahora.getUTCMinutes().toString().padStart(2, '0') + " SID";
    }, 1000);
}

function abrirModal(contenidoHtml) {
    const modal = document.getElementById('astro-modal');
    const body = document.getElementById('modal-dinamico-body');
    if (modal && body) {
        body.innerHTML = contenidoHtml;
        modal.classList.remove('seccion-oculta');
    }
}

function cerrarModal() {
    const modal = document.getElementById('astro-modal');
    if (modal) modal.classList.add('seccion-oculta');
}

function configurarFormularioContacto() {
    const form = document.getElementById('contact-form');
    if (!form) return;
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        const status = document.getElementById('form-status');
        if (status) status.innerHTML = `<p style="color:var(--oro); font-size:0.8rem; text-align:center; margin-top:10px;">✨ Mensaje lanzado al éter cósmico.</p>`;
        form.reset();
    });
}
