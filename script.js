/* ==========================================================================
   COSMOS OMNI 2026 - MAIN CONTROL SCRIPT (Definitivo y Reparado)
   ========================================================================== */

const NASA_HORIZONS_API = "https://ssd-api.jpl.nasa.gov/horizons.api";
const GEONAMES_USERNAME = "demo"; 

/* ==========================================================================
   1. NAVEGACIÓN, MENÚS Y SOPORTE DE TEMAS
   ========================================================================== */
function toggleMenu() { 
    const sidebar = document.getElementById("sidebar");
    if (sidebar) sidebar.classList.toggle("active"); 
}

function mostrarSeccion(id) {
    document.querySelectorAll('.vista').forEach(v => v.classList.add('seccion-oculta'));
    const seccionObjetivo = document.getElementById(id);
    if (seccionObjetivo) seccionObjetivo.classList.remove('seccion-oculta');
    
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
   2. BUSCADORES Y FILTROS INTEGRALES DE TABLAS
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
   4. RENDERIZACIÓN DE TAROT CON RE-CHEQUEO DE IMÁGENES
   ========================================================================== */
function renderizarTarot(filtroFase = 'mayores') {
    const galeria = document.getElementById("galeria-tarot");
    if (!galeria || typeof TAROT_DATA === 'undefined') return;

    galeria.innerHTML = ""; 
    const cartasFiltradas = TAROT_DATA.filter(carta => carta.tipo === filtroFase);

    cartasFiltradas.forEach(carta => {
        galeria.innerHTML += `
            <div class="card" onclick="verDetalleCarta('${carta.id}')" style="cursor:pointer; text-align:center; transition:0.3s; padding:10px;">
                <div style="width:100%; height:260px; overflow:hidden; border-radius:6px; margin-bottom:12px; background:#121212; border:1px solid var(--borde-tabla);">
                    <img src="${carta.url_publica}" alt="${carta.nombre}" style="width:100%; height:100%; object-fit:contain;" loading="lazy" onerror="this.src='https://placehold.co/180x260/000000/ffffff?text=Tarot+Card'">
                </div>
                <h4 style="margin:5px 0; color:var(--oro); font-family:'Cinzel'; font-size:1.1rem;">${carta.nombre}</h4>
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
        <div style="text-align:center; font-family:'Montserrat'; padding:10px; max-width:450px; margin:auto;">
            <h2 style="font-family:'Cinzel'; color:var(--oro); margin-bottom:15px; font-size:1.6rem;">${carta.nombre}</h2>
            <p style="color:var(--texto-secundario); font-size:0.9rem; margin-top:-10px; margin-bottom:15px;">Arcano Máster ${carta.numero}</p>
            <img src="${carta.url_publica}" style="max-width:160px; border-radius:8px; margin-bottom:20px; box-shadow:0 6px 20px rgba(0,0,0,0.6);" onerror="this.src='https://placehold.co/150x230/000000/ffffff?text=Tarot'">
            <div style="text-align:left; background:rgba(255,255,255,0.03); padding:15px; border-radius:6px; border:1px solid var(--borde-tabla);">
                <p style="font-size:0.95rem; line-height:1.6; margin-bottom:12px;"><strong style="color:var(--oro);">Arquetipo Cósmico:</strong> ${carta.descripcion}</p>
                <p style="font-size:0.95rem; line-height:1.6; margin:0;"><strong style="color:#81D4FA;">Mensaje Evolutivo:</strong> ${carta.consejo}</p>
            </div>
        </div>
    `;
    abrirModal(html);
}

/* ==========================================================================
   5. RELOJES DIGITALES DE ALTA PRECISIÓN (24 HORAS + UTC + SIDERAL)
   ========================================================================== */
function actualizarRelojes() {
    const localSpan = document.getElementById("time-local");
    const utcSpan = document.getElementById("time-utc");
    const sideralSpan = document.getElementById("time-sideral");

    setInterval(() => {
        const ahora = new Date();
        
        // Formato estricto de 24 horas para hora Local
        if (localSpan) {
            localSpan.innerText = ahora.toLocaleTimeString("es-AR", { hour12: false });
        }
        
        // Reloj de Tiempo Universal Coordinado (UTC) integrado
        if (utcSpan) {
            utcSpan.innerText = ahora.getUTCHours().toString().padStart(2, '0') + ":" +
                               ahora.getUTCMinutes().toString().padStart(2, '0') + ":" +
                               ahora.getUTCSeconds().toString().padStart(2, '0') + " UTC";
        }

        // Reloj Sideral
        if (sideralSpan) {
            let UTC_horas = ahora.getUTCHours() + ahora.getUTCMinutes()/60 + ahora.getUTCSeconds()/3600;
            let dias_J2000 = (ahora.getTime() / 86400000) - 10957.5; 
            let GMST = (18.697374558 + 24.06570982441908 * dias_J2000) % 24;
            if (GMST < 0) GMST += 24;
            let LST = (GMST - 3.88) % 24; // Ajuste para longitud de Quilmes Oeste
            if (LST < 0) LST += 24;

            let h = Math.floor(LST).toString().padStart(2, '0');
            let m = Math.floor((LST % 1) * 60).toString().padStart(2, '0');
            let s = Math.floor(((LST % 1) * 60 % 1) * 60).toString().padStart(2, '0');
            sideralSpan.innerText = `${h}:${m}:${s}`;
        }
    }, 1000);
}

/* ==========================================================================
   6. AUTOMATIZACIÓN GEO-UBICACIÓN
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

/* ==========================================================================
   7. CALCULADORA DINÁMICA DE REGENCIAS DOBLES
   ========================================================================== */
function calcularRegente() {
    const select = document.getElementById("select-regencia-signo");
    const resBox = document.getElementById("resultado-regente");
    if (!select || !resBox) return;

    const signoInput = select.value.trim().toLowerCase();
    if (!signoInput) { resBox.innerHTML = ""; return; }

    if (typeof ZODIACO !== 'undefined') {
        const item = ZODIACO.find(z => z.n.toLowerCase() === signoInput);
        if (item) {
            resBox.innerHTML = `
                <div style="background:rgba(212,175,55,0.06); padding:12px; border-radius:6px; border:1px dashed var(--oro); margin-top:10px;">
                    <p style="margin:4px 0; font-size:1.05rem;">🏛️ Regente Tradicional: <strong style="color:var(--oro);">${item.r}</strong></p>
                    <p style="margin:4px 0; font-size:1.05rem;">🚀 Regente Moderno: <strong style="color:#81D4FA;">${item.rm}</strong></p>
                </div>
            `;
            return;
        }
    }
    resBox.innerHTML = "Error al leer la matriz del Zodíaco.";
}

/* ==========================================================================
   8. DESLIZADOR DE LÍNEA DE TIEMPO (SLIDER HORIZONTAL)
   ========================================================================== */
function scrollTimeline(direccion) {
    const container = document.getElementById('timeline-dinamica');
    if (container) {
        const distanciaScroll = 300; 
        if (direccion === 'izq') {
            container.scrollLeft -= distanciaScroll;
        } else {
            container.scrollLeft += distanciaScroll;
        }
    }
}

/* ==========================================================================
   9. GENERACIÓN DINÁMICA DE SECCIONES (HERBOLARIO, BIBLIOTECA, CALENDARIOS)
   ========================================================================== */
function inicializarEnciclopedias() {
    // 1. Inyección real en el Círculo Zodiacal (Tarjetas Desplegables completas)
    const gridSignos = document.getElementById("grid-signos");
    if (gridSignos && typeof ZODIACO !== 'undefined') {
        gridSignos.innerHTML = "";
        ZODIACO.forEach(z => {
            gridSignos.innerHTML += `
                <details class="signo-card" style="margin-bottom:10px; border:1px solid var(--borde-tabla); border-radius:6px;">
                    <summary class="signo-header" style="padding:12px; cursor:pointer; font-family:'Cinzel'; display:flex; justify-content:space-between; align-items:center;">
                        <div style="display:flex; align-items:center; gap:10px;">
                            <span style="color:var(--oro); font-size:1.4rem;">${z.g}</span>
                            <h3 style="margin:0; font-size:1.15rem; inline-block;">${z.n}</h3>
                        </div>
                        <span class="signo-keyword" style="font-size:0.85rem; background:rgba(255,255,255,0.05); padding:3px 8px; border-radius:4px;">${z.e} / ${z.m}</span>
                    </summary>
                    <div class="signo-content" style="padding:15px; border-top:1px solid var(--borde-tabla); background:rgba(0,0,0,0.15); font-family:'Montserrat';">
                        <p style="margin:0 0 10px 0; line-height:1.5;">${z.d}</p>
                        <p style="margin:0; font-size:0.9rem; color:var(--oro);"><strong>Administración Planetaria:</strong> Tradicional: ${z.r} | Moderno: ${z.rm}</p>
                    </div>
                </details>
            `;
        });
    }

    // 2. Inyección real en Casas Astrológicas
    const gridCasas = document.getElementById("grid-casas");
    if (gridCasas && typeof CASAS_DATA !== 'undefined') {
        gridCasas.innerHTML = "";
        CASAS_DATA.forEach(c => {
            gridCasas.innerHTML += `
                <div class="casa-card angular" style="padding:15px; border:1px solid var(--borde-tabla); border-radius:6px; background:rgba(255,255,255,0.02);">
                    <div class="casa-header" style="display:flex; justify-content:space-between; align-items:center; border-bottom:1px solid rgba(255,255,255,0.05); padding-bottom:8px;">
                        <h3 style="font-family:'Cinzel'; color:var(--oro); margin:0; font-size:1.15rem;">${c.titulo}</h3>
                        <span class="casa-keyword" style="font-size:0.85rem; font-style:italic; color:var(--texto-secundario);">${c.palabra_clave}</span>
                    </div>
                    <div class="casa-body" style="margin-top:10px; font-family:'Montserrat';">
                        <p style="font-size:0.85rem; line-height:1.5; margin-bottom:10px;">${c.significado}</p>
                        <div style="display:flex; justify-content:space-between; align-items:center; font-size:0.8rem;">
                            <span style="color:var(--oro);"><strong>Filiación:</strong> ${c.regencia}</span>
                            <span class="clasificacion-badge" style="background:rgba(129,212,250,0.1); color:#81D4FA; padding:2px 6px; border-radius:4px;">${c.clasificacion}</span>
                        </div>
                    </div>
                </div>
            `;
        });
    }

    // 3. Inyección real de la Biblioteca Divina (Manual de Astros / Arquetipos)
    const bibliotecaContenedor = document.getElementById("render-biblioteca-arquetipos");
    if (bibliotecaContenedor && typeof ARQUETIPOS !== 'undefined') {
        bibliotecaContenedor.innerHTML = "";
        ARQUETIPOS.forEach(a => {
            bibliotecaContenedor.innerHTML += `
                <div class="casa-card" style="padding:15px; border:1px solid var(--borde-tabla); border-radius:6px; background:rgba(255,255,255,0.02); margin-bottom:10px;">
                    <h4 style="font-family:'Cinzel'; color:var(--oro); margin:0 0 5px 0; font-size:1.2rem;">${a.p} <span style="font-size:0.85rem; color:var(--texto-secundario); font-family:'Montserrat';">(${a.d})</span></h4>
                    <small style="background:rgba(255,255,255,0.05); padding:2px 5px; border-radius:3px; font-size:0.75rem;">Filiación: ${a.t} | Regente de: ${a.r}</small>
                    <p style="font-family:'Montserrat'; font-size:0.88rem; line-height:1.5; margin:8px 0 0 0; color:var(--texto-principal);">${a.m}</p>
                </div>
            `;
        });
    }

    // 4. Inyección real en el Herbolario Sagrado
    const herbolarioContenedor = document.getElementById("render-herbolario-data");
    if (herbolarioContenedor && typeof HERBOLARIO_DATA !== 'undefined') {
        herbolarioContenedor.innerHTML = "";
        HERBOLARIO_DATA.forEach(h => {
            herbolarioContenedor.innerHTML += `
                <div class="casa-card" style="padding:15px; border:1px solid var(--borde-tabla); border-radius:6px; background:rgba(0,0,0,0.2); margin-bottom:12px; border-left:3px solid var(--oro);">
                    <h4 style="font-family:'Cinzel'; color:var(--oro); margin:0 0 5px 0; font-size:1.2rem;">${h.nombre}</h4>
                    <p style="margin:4px 0; font-size:0.82rem; color:var(--texto-secundario);">Elemento: <strong>${h.elemento}</strong> | Regencia Planetaria: <strong>${h.planeta}</strong></p>
                    <p style="font-family:'Montserrat'; font-size:0.88rem; margin:8px 0; line-height:1.4;"><strong>Propiedades Alquímicas:</strong> ${h.propiedades}</p>
                    <p style="font-family:'Montserrat'; font-size:0.85rem; margin:0; color:#81D4FA; font-style:italic;"><strong>Uso de Altar:</strong> ${h.uso}</p>
                </div>
            `;
        });
    }

    // 5. Inyección de la Línea de Tiempo Dinámica (Slider)
    const sliderContenedor = document.getElementById("timeline-dinamica");
    if (sliderContenedor && typeof TIMELINE_DATA !== 'undefined') {
        sliderContenedor.innerHTML = "";
        TIMELINE_DATA.forEach(t => {
            sliderContenedor.innerHTML += `
                <div class="timeline-item" style="flex:0 0 250px; background:rgba(255,255,255,0.02); padding:15px; border-radius:6px; border:1px solid var(--borde-tabla); box-sizing:border-box; scroll-snap-align:start;">
                    <span style="color:var(--oro); font-family:'Cinzel'; font-size:0.85rem; font-weight:bold; border-bottom:1px solid var(--oro); padding-bottom:3px; display:inline-block; margin-bottom:8px;">${t.fecha}</span>
                    <h5 style="margin:5px 0; font-family:'Montserrat'; font-size:1rem; color:#fff;">${t.evento}</h5>
                    <p style="margin:5px 0 0 0; font-size:0.8rem; line-height:1.4; color:var(--texto-secundario);">${t.desc}</p>
                </div>
            `;
        });
    }

    // 6. Inyección de Intensidad Astral (Eclipses)
    const eclipsesContenedor = document.getElementById("render-eclipses-data");
    if (eclipsesContenedor && typeof LUNACIONES_DATA !== 'undefined') {
        eclipsesContenedor.innerHTML = "";
        LUNACIONES_DATA.forEach(e => {
            eclipsesContenedor.innerHTML += `
                <div style="padding:12px; border-bottom:1px solid var(--borde-tabla); font-family:'Montserrat';">
                    <span style="color:var(--oro); font-size:0.85rem; font-weight:bold;">${e.fecha}</span>
                    <h5 style="margin:4px 0; font-size:1rem; color:#fff;">${e.tipo}</h5>
                    <p style="margin:2px 0 0 0; font-size:0.82rem; color:var(--texto-secundario);">${e.impacto}</p>
                </div>
            `;
        });
    }
}

/* ==========================================================================
   10. INICIALIZADOR MAESTRO DE DATOS Y CONEXIÓN CON NASA (EFEMÉRIDES)
   ========================================================================== */
function init() {
    const hoy = new Date();
    const dia = hoy.getDate();
    
    // Inyectar fecha de cabecera
    if (document.getElementById('fecha-top')) {
        document.getElementById('fecha-top').innerText = "📅 " + hoy.toLocaleDateString('es-AR');
    }

    // Encender Relojes y Geolocalización
    actualizarRelojes();
    automatizarUbicacion();

    // Cargar enciclopedias dinámicas e Inyecciones fijas
    inicializarEnciclopedias();

    // Quitar el cartel de "Cargando clima cósmico"
    const tcBox = document.getElementById("transito-clave-clima");
    if (tcBox) {
        tcBox.innerHTML = `
            <div style="background:rgba(255,255,255,0.02); padding:12px; border-radius:6px; border:1px solid var(--borde-tabla);">
                <p style="margin:0; font-family:'Montserrat'; font-size:0.92rem; line-height:1.5;">
                    🌌 <strong>Clima Cósmico Activado:</strong> El Sol avanza en el grado 26 de Tauro, estabilizando los procesos materiales terrenales mientras Mercurio en Aries acelera las decisiones mentales críticas antes de su fase de sombra.
                </p>
            </div>
        `;
    }

    // ALGORITMO LUNAR MATEMÁTICO INTEGRADO (Fórmula de 13.18° diarios)
    let posLunarHoy = 220 + (dia - 1) * 13.18;
    let idxS = Math.floor((posLunarHoy / 30) % 12);
    
    if (typeof ZODIACO !== 'undefined' && ZODIACO.length > 0) {
        let sLuna = ZODIACO[idxS];
        let faseActual = (dia < 9) ? "🌕" : (dia < 16) ? "🌗" : (dia < 24) ? "🌑" : "🌓";
        let dignidadLuna = (sLuna.r === "Luna") ? "Domicilio" : (sLuna.n === "Capricornio") ? "Exilio" : "Peregrino";

        const interpretacion = document.getElementById('interpretacion-resumen');
        if (interpretacion) {
            interpretacion.innerHTML = `
                <p>Luna transitando en el signo de <strong>${sLuna.n}</strong> (${sLuna.e}). Estado de dignidad: <strong>${dignidadLuna}</strong>. 
                El Nodo Norte en Piscis pide disolución y entrega espiritual, mientras el Nodo Sur en Virgo exige orden en los planos técnicos corporales.</p>
            `;
        }

        // Renderizado del Dashboard de Astros General (Soporte completo de filtrado de filas)
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
                    let esAsteroide = ["Quirón", "Ceres", "Palas Atenea", "Vesta", "Juno", "Rueda Fortuna", "Pto. Infortunio"].includes(t.p);
                    let rowClass = esAsteroide ? 'class="asteroide-row"' : '';
                    let badge = esAsteroide ? ' <span class="asteroide-badge" style="background:rgba(212,175,55,0.1); color:var(--oro); font-size:0.65rem; padding:1px 4px; border-radius:3px; margin-left:4px;">Punto</span>' : '';

                    rda.innerHTML += `
                        <tr ${rowClass}>
                            <td><strong>${t.p}</strong>${badge}</td>
                            <td>${t.s}</td>
                            <td>${t.g}°</td>
                            <td><span class="leyenda-item estado-directo">${t.e === 'D' ? 'Directo' : t.e === 'R' ? 'Retrógrado' : 'Sombra'}</span></td>
                        </tr>
                    `;
                });
            }
        }

        // Tabla Almanaque Calendario Mensual de la Luna
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
                    <tr class="${d === dia ? 'hoy-fila' : ''}" ${d === dia ? 'style="background:rgba(212,175,55,0.1); font-weight:bold;"' : ''}>
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

    // Tabla de Retrogradaciones Reales del Año 2026
    const rr = document.getElementById('render-retrogradaciones');
    if (rr && typeof RETROGRADACIONES_2026 !== 'undefined') {
        rr.innerHTML = "";
        RETROGRADACIONES_2026.forEach(r => {
            rr.innerHTML += `
                <tr>
                    <td><strong style="color:${r.c || 'var(--oro)'}">${r.p}</strong></td>
                    <td><small>${r.r || '---'}</small></td>
                    <td><small>${r.s || 'Fuera de Sombra'}</small></td>
                    <td><small>Grado ${r.g || '0°'}</small></td>
                    <td><span class="leyenda-item" style="color:${r.e === 'RETRÓGRADO' ? '#ba68c8' : '#4db6ac'}">${r.e}</span></td>
                </tr>
            `;
        });
    }

    // Cargar Tarot inicial (Mayores)
    renderizarTarot('mayores');
}

window.onload = init;
