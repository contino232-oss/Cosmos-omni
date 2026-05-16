/* ==========================================================================
   COSMOS OMNI 2026 - MAIN CONTROL SCRIPT
   ========================================================================== */

// CONFIGURACIONES Y ENDPOINTS GLOBALES
const NASA_HORIZONS_API = "https://ssd-api.jpl.nasa.gov/horizons.api";
const GEONAMES_USERNAME = "tano232"; 

/* ==========================================================================
   1. SISTEMA DE NAVEGACIÓN Y MENÚS (CON AUTO-CIERRE)
   ========================================================================== */
function toggleMenu() { 
    const sidebar = document.getElementById("sidebar");
    if (sidebar) sidebar.classList.toggle("active"); 
}

function mostrarSeccion(id) {
    document.querySelectorAll('.vista').forEach(v => v.classList.add('seccion-oculta'));
    
    const seccionObjetivo = document.getElementById(id);
    if (seccionObjetivo) {
        seccionObjetivo.classList.remove('seccion-oculta');
    }
    
    // Auto-cierre del menú en móviles y tablets
    if (window.innerWidth < 1024) {
        const sidebar = document.getElementById("sidebar");
        if (sidebar) sidebar.classList.remove("active");
    }
    window.scrollTo(0, 0);
}

function toggleModoLectura() {
    const body = document.body;
    const btn = document.getElementById("btn-modo-lectura");
    
    if (body.classList.contains("theme-dark") || !body.classList.contains("theme-light")) {
        body.classList.remove("theme-dark");
        body.classList.add("theme-light");
        if (btn) btn.innerText = "👁️ Modo Cósmico";
    } else {
        body.classList.remove("theme-light");
        body.classList.add("theme-dark");
        if (btn) btn.innerText = "🌓 Modo Lectura";
    }
}

/* ==========================================================================
   2. BUSCADORES Y FILTROS EN TIEMPO REAL
   ========================================================================== */
function filtrarCards(tipo) {
    let input = document.getElementById(tipo === 'signo' ? 'buscar-signo' : 'buscar-casa');
    if (!input) return;
    
    let filtro = input.value.toLowerCase();
    let cards = document.querySelectorAll(tipo === 'signo' ? '#grid-signos details' : '#grid-casas .casa-card');

    cards.forEach(card => {
        let textoCompare = card.textContent.toLowerCase();
        card.style.display = textoCompare.includes(filtro) ? "" : "none";
    });
}

function filtrarTablaCielo(categoria) {
    const filas = document.querySelectorAll("#render-dashboard-astros tr");
    filas.forEach(fila => {
        const esAsteroide = fila.classList.contains("asteroide-row");
        if (categoria === 'todos') {
            fila.style.display = "";
        } else if (categoria === 'mayores') {
            fila.style.display = esAsteroide ? "none" : "";
        } else if (categoria === 'asteroides') {
            fila.style.display = esAsteroide ? "" : "none";
        }
    });
    
    // Actualizar estados visuales de los botones de filtro
    document.querySelectorAll(".filtro-dash-btn").forEach(btn => btn.classList.remove("active"));
    if (event && event.target) event.target.classList.add("active");
}

/* ==========================================================================
   3. VENTANAS EMERGENTES (MODALES)
   ========================================================================== */
function abrirModal(contenidoHTML) {
    const modal = document.getElementById("astro-modal");
    const body = document.getElementById("modal-dinamico-body");
    if (modal && body) {
        body.innerHTML = contenidoHTML;
        modal.classList.remove("seccion-oculta");
    }
}

function cerrarModal() {
    const modal = document.getElementById("astro-modal");
    if (modal) modal.classList.add("seccion-oculta");
}

/* ==========================================================================
   4. RENDERIZACIÓN DE MÓDULOS MÍSTICOS (TAROT PUBLIC URLS)
   ========================================================================== */
function renderizarTarot(filtroFase = 'mayores') {
    const galeria = document.getElementById("galeria-tarot");
    if (!galeria || typeof TAROT_DATA === 'undefined') return;

    galeria.innerHTML = ""; 
    const cartasFiltradas = TAROT_DATA.filter(carta => carta.tipo === filtroFase);

    cartasFiltradas.forEach(carta => {
        galeria.innerHTML += `
            <div class="card" onclick="verDetalleCarta('${carta.id}')" style="cursor:pointer; text-align:center;">
                <div style="width:100%; height:250px; overflow:hidden; border-radius:6px; margin-bottom:12px; background:#000;">
                    <img src="${carta.url_publica}" alt="${carta.nombre}" style="width:100%; height:100%; object-fit:cover;" loading="lazy">
                </div>
                <h4 style="margin:5px 0; color:var(--oro); font-family:'Cinzel';">${carta.nombre}</h4>
                <small style="color:var(--texto-secundario)">Arcano ${carta.numero}</small>
            </div>
        `;
    });
}

function filtrarTarot(tipo) {
    document.querySelectorAll('.tarot-nav .tab-btn').forEach(btn => btn.classList.remove('active'));
    if (event && event.target) event.target.classList.add('active');
    renderizarTarot(tipo);
}

function verDetalleCarta(id) {
    if (typeof TAROT_DATA === 'undefined') return;
    const carta = TAROT_DATA.find(c => c.id === id);
    if (!carta) return;

    const html = `
        <div style="text-align:center; font-family:'Montserrat';">
            <h2 style="font-family:'Cinzel'; color:var(--oro); margin-bottom:15px;">${carta.nombre} (Arcano ${carta.numero})</h2>
            <img src="${carta.url_publica}" style="max-width:180px; border-radius:8px; margin-bottom:15px; box-shadow:0 4px 10px rgba(0,0,0,0.4);">
            <p style="font-size:0.95rem; line-height:1.6; text-align:left;"><strong>Significado Arquetípico:</strong> ${carta.descripcion}</p>
            <p style="font-size:0.95rem; line-height:1.6; text-align:left; color:var(--oro);"><strong>Consejo Evolutivo:</strong> ${carta.consejo}</p>
        </div>
    `;
    abrirModal(html);
}

/* ==========================================================================
   5. AUTOMATIZACIÓN DE HERRAMIENTAS Y UBICACIÓN
   ========================================================================== */
async function automatizarUbicacion() {
    const geoSpan = document.getElementById("geo-location");
    if (!geoSpan) return;

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(async (position) => {
            const lat = position.coords.latitude;
            const lon = position.coords.longitude;
            try {
                const url = `https://secure.geonames.org/findNearbyPlaceNameJSON?lat=${lat}&lng=${lon}&username=${GEONAMES_USERNAME}`;
                const response = await fetch(url);
                const data = await response.json();
                if (data.geonames && data.geonames.length > 0) {
                    geoSpan.innerHTML = `📍 ${data.geonames[0].name}, ${data.geonames[0].countryName}`;
                } else {
                    geoSpan.innerHTML = `📍 Lat: ${lat.toFixed(2)}°, Lon: ${lon.toFixed(2)}°`;
                }
            } catch (e) {
                geoSpan.innerHTML = "📍 Quilmes Oeste, Argentina";
            }
        }, () => {
            geoSpan.innerHTML = "📍 Quilmes Oeste, Argentina";
        });
    }
}

function actualizarRelojes() {
    const localSpan = document.getElementById("time-local");
    const sideralSpan = document.getElementById("time-sideral");
    if (!localSpan || !sideralSpan) return;

    setInterval(() => {
        const ahora = new Date();
        localSpan.innerText = ahora.toLocaleTimeString("es-AR");

        let UTC_horas = ahora.getUTCHours() + ahora.getUTCMinutes()/60 + ahora.getUTCSeconds()/3600;
        let dias_J2000 = (ahora.getTime() / 86400000) - 10957.5; 
        let GMST = (18.697374558 + 24.06570982441908 * dias_J2000) % 24;
        if (GMST < 0) GMST += 24;
        let LST = (GMST - 3.9) % 24; 
        if (LST < 0) LST += 24;

        let h = Math.floor(LST).toString().padStart(2, '0');
        let m = Math.floor((LST % 1) * 60).toString().padStart(2, '0');
        let s = Math.floor(((LST % 1) * 60 % 1) * 60).toString().padStart(2, '0');
        sideralSpan.innerText = `${h}:${m}:${s}`;
    }, 1000);
}

function calcularRegente() {
    const select = document.getElementById("select-regencia-signo");
    const resBox = document.getElementById("resultado-regente");
    if (!select || !resBox) return;

    const signo = select.value;
    if (!signo) { resBox.innerHTML = ""; return; }

    // Validación cruzada con la base de datos de ZODIACO
    if (typeof ZODIACO !== 'undefined') {
        const item = ZODIACO.find(z => z.n.toLowerCase() === signo);
        if (item) {
            resBox.innerHTML = `
                <p style="margin:5px 0;">✨ Regente Tradicional: <strong>${item.r}</strong></p>
                <p style="margin:5px 0; color:var(--texto-secundario); font-size:0.85rem;">Es el administrador energético principal de tu energía natal.</p>
            `;
            return;
        }
    }
    resBox.innerHTML = "Cargando regencias desde base de datos...";
}

/* ==========================================================================
   6. RENDERIZACIÓN DE ENCICLOPEDIAS DINÁMICAS DESDE DATA.JS
   ========================================================================== */
function inicializarEnciclopedias() {
    // 1. Render de Signos con detalles nativos plegables
    const gridSignos = document.getElementById("grid-signos");
    if (gridSignos && typeof ZODIACO !== 'undefined') {
        gridSignos.innerHTML = "";
        ZODIACO.forEach(z => {
            gridSignos.innerHTML += `
                <details class="signo-card">
                    <summary class="signo-header">
                        <span class="signo-glifo">♈</span>
                        <h3>${z.n}</h3>
                        <span class="signo-keyword">${z.e} / ${z.m || 'Fijo'}</span>
                    </summary>
                    <div class="signo-content">
                        <p><strong>Regente:</strong> ${z.r}</p>
                        <p>Ficha técnica expandida y arquetipos de transformación asociados al signo natal en el plano evolutivo.</p>
                    </div>
                </details>
            `;
        });
    }

    // 2. Render de Casas Astrológicas
    const gridCasas = document.getElementById("grid-casas");
    if (gridCasas && typeof CASAS_DATA !== 'undefined') {
        gridCasas.innerHTML = "";
        CASAS_DATA.forEach(c => {
            gridCasas.innerHTML += `
                <div class="casa-card angular">
                    <div class="casa-header">
                        <h3 style="font-family:'Cinzel'; color:var(--oro); margin:0;">${c.titulo}</h3>
                        <span class="casa-keyword">"${c.palabra_clave}"</span>
                    </div>
                    <div class="casa-body" style="margin-top:10px;">
                        <p style="font-size:0.85rem; margin:5px 0;"><strong>Regencia Natural:</strong> ${c.regencia}</p>
                        <p style="font-size:0.85rem; line-height:1.5; color:var(--texto-secundario);">${c.significado}</p>
                        <span class="clasificacion-badge">${c.clasificacion}</span>
                    </div>
                </div>
            `;
        });
    }
}

/* ==========================================================================
   7. INICIALIZADOR MAESTRO DE DATOS (MANTENIENDO TU BASE MATEMÁTICA)
   ========================================================================== */
function init() {
    const hoy = new Date();
    const dia = hoy.getDate();
    
    // Configuración estructural e interfaces en tiempo real
    if (document.getElementById('fecha-top')) document.getElementById('fecha-top').innerText = "📅 " + hoy.toLocaleDateString();
    
    // Invocaciones de Automatización y APIs externas
    automatizarUbicacion();
    actualizarRelojes();

    // LÓGICA DE TRÁNSITOS MATEMÁTICOS DIRECTOS DE TU BASE
    let posLunarHoy = 220 + (dia - 1) * 13.18;
    let idxS = Math.floor((posLunarHoy / 30) % 12);
    
    if (typeof ZODIACO !== 'undefined' && ZODIACO.length > 0) {
        let sLuna = ZODIACO[idxS];
        let faseActual = (dia < 9) ? "🌕" : (dia < 16) ? "🌗" : (dia < 24) ? "🌑" : "🌓";
        let dignidadLuna = (sLuna.r === "Luna") ? "Domicilio" : (sLuna.n === "Capricornio") ? "Exilio" : "Peregrino";

        const interpretacion = document.getElementById('interpretacion-resumen');
        if (interpretacion) {
            interpretacion.innerHTML = `<p>Luna en <strong>${sLuna.n}</strong>. Clima apto para transmutación interna.</p>`;
        }

        // Renderizado del Dashboard Astral
        const rda = document.getElementById('render-dashboard-astros');
        if (rda) {
            rda.innerHTML = `
                <tr>
                    <td><strong>Luna ${faseActual}</strong></td>
                    <td>${sLuna.n}</td>
                    <td>${Math.floor(posLunarHoy % 30)}°</td>
                    <td><span class="leyenda-item estado-directo">${dignidadLuna}</span></td>
                </tr>
            `;
            
            if (typeof TRANSITOS_BASE !== 'undefined') {
                TRANSITOS_BASE.forEach(t => {
                    let esAsteroide = ["Quirón", "Ceres", "Palas", "Vesta", "Infortunio"].includes(t.p);
                    let rowClass = esAsteroide ? 'class="asteroide-row"' : '';
                    let badge = esAsteroide ? ' <span class="asteroide-badge">Asteroide</span>' : '';

                    rda.innerHTML += `
                        <tr ${rowClass}>
                            <td><strong>${t.p}</strong>${badge}</td>
                            <td>${t.s}</td>
                            <td>${t.g}°</td>
                            <td><span class="leyenda-item estado-directo">Directo</span></td>
                        </tr>
                    `;
                });
            }
        }

        // Renderizado Almanaque Calendario Lunar
        const tl = document.getElementById('render-luna');
        if (tl && typeof VACIOS_2026 !== 'undefined') {
            let posCal = 220;
            tl.innerHTML = "";
            for (let d = 1; d <= 31; d++) {
                let idx = Math.floor((posCal / 30) % 12);
                let s = ZODIACO[idx];
                let f = (d === 1) ? "🌕" : (d === 9) ? "🌗" : (d === 16) ? "🌑" : (d === 24) ? "🌓" : "·";
                let vacio = VACIOS_2026[d] || "---";
                
                tl.innerHTML += `
                    <tr class="${d === dia ? 'hoy-fila' : ''}">
                        <td>${d}</td>
                        <td>${f}</td>
                        <td>${Math.floor(posCal % 30)}° ${s.n}</td>
                        <td><small>${vacio}</small></td>
                    </tr>
                `;
                posCal += 13.18;
            }
        }
    }

    // Render de la Tabla de Retrogradaciones
    const rr = document.getElementById('render-retrogradaciones');
    if (rr && typeof RETROGRADACIONES_2026 !== 'undefined') {
        rr.innerHTML = "";
        RETROGRADACIONES_2026.forEach(r => {
            rr.innerHTML += `
                <tr>
                    <td><strong style="color:${r.c || 'var(--oro)'}">${r.p}</strong></td>
                    <td><small>${r.r || '---'}</small></td>
                    <td><small>${r.s || 'Fuera de Sombra'}</small></td>
                    <td><small>Estacionario en Grado ${r.g || '0°'}</small></td>
                    <td><span class="leyenda-item estado-directo">🟢 Directo</span></td>
                </tr>
            `;
        });
    }

    // Inicializaciones modulares finales
    renderizarTarot('mayores');
    inicializarEnciclopedias();
}

function scrollTimeline(direccion) {
    const container = document.getElementById('timeline-dinamica');
    if (container) {
        const distancia = 260;
        container.scrollLeft += (direccion === 'izq') ? -distancia : distancia;
    }
}

window.onload = init;
