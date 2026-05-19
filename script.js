// ==========================================================================
// COSMOS OMNI 2026 - LÓGICA DE INTERFAZ & RENDERS DINÁMICOS (script.js)
// ==========================================================================

document.addEventListener("DOMContentLoaded", () => {
    // Inicializaciones obligatorias del sistema cósmico
    inicializarRelojes();
    renderizarDashboard('todos');
    renderizarSeccionLunar();
    renderizarCronograma();
    renderizarEnciclopedias();
    renderizarTarot('mayores');
    renderizarHerbolario();
    configurarFormularioContacto();
});

// ==========================================================================
// 1. CONTROL DE NAVEGACIÓN Y MENÚ SIDEBAR
// ==========================================================================
function toggleMenu() {
    const sidebar = document.getElementById('sidebar');
    if (sidebar) sidebar.classList.toggle('active');
}

function mostrarSeccion(seccionId) {
    const secciones = document.querySelectorAll('.vista');
    secciones.forEach(sec => sec.classList.add('seccion-oculta'));

    const seccionActiva = document.getElementById(seccionId);
    if (seccionActiva) {
        seccionActiva.classList.remove('seccion-oculta');
    }

    const sidebar = document.getElementById('sidebar');
    if (sidebar && sidebar.classList.contains('active')) {
        toggleMenu();
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function irAlInicio(event) {
    event.preventDefault();
    mostrarSeccion('dashboard');
}

// ==========================================================================
// 2. CAMBIO DE INTERFAZ (MODO LECTURA)
// ==========================================================================
function toggleModoLectura() {
    const body = document.body;
    const btn = document.getElementById('btn-modo-lectura');
    if (!body || !btn) return;
    
    // Intercambio de clases explícito según el esquema de variables de tu CSS
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

// ==========================================================================
// 3. RELOJES CÓSMICOS (LOCAL, UTC, SIDERAL)
// ==========================================================================
function inicializarRelojes() {
    function actualizarClocks() {
        const ahora = new Date();
        
        const localEl = document.getElementById('time-local');
        const utcEl = document.getElementById('time-utc');
        const sideralEl = document.getElementById('time-sideral');

        // 1. Hora Local
        if (localEl) localEl.innerText = ahora.toLocaleTimeString('es-AR');
        
        // 2. Hora UTC
        if (utcEl) {
            utcEl.innerText = ahora.getUTCHours().toString().padStart(2, '0') + ":" + 
                             ahora.getUTCMinutes().toString().padStart(2, '0') + ":" + 
                             ahora.getUTCSeconds().toString().padStart(2, '0') + " UTC";
        }
        
        // 3. Hora Sideral aproximada para coordenadas rioplatenses (Longitud -58.3)
        if (sideralEl) sideralEl.innerText = calcularHoraSideral(ahora);
    }
    
    setInterval(actualizarClocks, 1000);
    actualizarClocks();
}

function calcularHoraSideral(fecha) {
    const horas = fecha.getUTCHours();
    const minutos = fecha.getUTCMinutes();
    const segundos = fecha.getUTCSeconds();
    let siderea = (horas + 4) % 24; 
    return `${siderea.toString().padStart(2, '0')}:${minutos.toString().padStart(2, '0')}:${segundos.toString().padStart(2, '0')}`;
}

// ==========================================================================
// 4. RENDERS DE SECCIONES DINÁMICAS
// ==========================================================================

// --- Dashboard (El Cielo en Vivo) ---
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
                <p><strong>Posición actual:</strong> Grado ${item.posicion}</p>
                <p><strong>Dinámica de marcha:</strong> ${item.estado}</p>
                <p style="margin-top:15px; line-height:1.6; color: var(--texto-secundario);">
                    Este emplazamiento en tránsito marca la tónica vibratoria del clima planetario sobre los asuntos de la Casa o Planeta natales que entren en contacto aspectual partil durante el día.
                </p>
            `;
            abrirModal(htmlInfo);
        };
        
        tbody.appendChild(tr);
    });

    const tituloHit = document.getElementById('titulo-hit-dia');
    const descHit = document.getElementById('desc-hit-dia');
    const geoLoc = document.getElementById('geo-location');

    if (tituloHit) tituloHit.innerText = "Oposición Sol - Plutón Partil";
    if (descHit) descHit.innerText = "Tensión estructural entre la consciencia despierta y los procesos de transformación profunda del inconsciente. Evitar pulseadas de poder.";
    if (geoLoc) geoLoc.innerText = "📍 Cielo de Buenos Aires (Calculado)";
}

function filtrarTablaCielo(event, categoria) {
    const contenedores = event.currentTarget.parentNode.querySelectorAll('.filtro-dash-btn');
    contenedores.forEach(btn => btn.classList.remove('active'));
    event.currentTarget.classList.add('active');
    renderizarDashboard(categoria);
}

// --- Calendario Lunar ---
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

// --- Cronograma e Hitos ---
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
    const distancia = 260;
    if (direccion === 'izq') {
        timeline.scrollLeft -= distancia;
    } else {
        timeline.scrollLeft += distancia;
    }
}

// --- Enciclopedias (Zodíaco, Casas y Arquetipos) ---
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
                    <span>${s.nombre}</span>
                    <span class="signo-keyword">${s.keyword}</span>
                </summary>
                <div class="signo-content">
                    <p><strong>Elemento Coexistente:</strong> ${s.elemento}</p>
                    <p><strong>Regencia Arquetípica:</strong> ${s.regente}</p>
                    <p>${s.desc}</p>
                </div>
            `;
            gridSignos.appendChild(details);
        });
    }

    const gridCasas = document.getElementById('grid-casas');
    if (gridCasas) {
        gridCasas.innerHTML = "";
        COSMOS_DATA.casas.forEach(c => {
            const details = document.createElement('details');
            details.className = "casa-card-fold";
            details.innerHTML = `
                <summary class="signo-header">
                    <span class="signo-glifo">${c.glifo}</span>
                    <span>${c.numero}</span>
                    <span class="signo-keyword">${c.clasificacion}</span>
                </summary>
                <div class="signo-content">
                    <p>${c.desc}</p>
                </div>
            `;
            gridCasas.appendChild(details);
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
                <div class="signo-content">
                    <p>${a.desc}</p>
                </div>
            `;
            gridAstros.appendChild(details);
        });
    }
}

// --- Buscador en Tiempo Real de Enciclopedias ---
function filtrarCards(tipo) {
    let inputId = tipo === 'signo' ? 'buscar-signo' : 'buscar-casa';
    let containerId = tipo === 'signo' ? 'grid-signos' : 'grid-casas';
    
    const inputEl = document.getElementById(inputId);
    const contenedor = document.getElementById(containerId);
    if (!inputEl || !contenedor) return;
    
    let query = inputEl.value.toLowerCase();
    const cards = contenedor.querySelectorAll('details');
    
    cards.forEach(card => {
        let textoAFiltrar = card.innerText.toLowerCase();
        if (textoAFiltrar.includes(query)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
}

// --- Tarot Rider-Waite ---
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
        card.style.transition = "transform 0.2s";
        
        card.innerHTML = `
            <div style="font-size: 2.5rem; margin-bottom:8px;">${c.glifo}</div>
            <h4 style="margin:4px 0; font-size:0.9rem; color:var(--oro);">${c.nombre}</h4>
            <span style="font-size:0.7rem; color:var(--texto-secundario); font-style:italic;">${c.arcano}</span>
        `;

        card.onmouseover = () => card.style.transform = "scale(1.03)";
        card.onmouseout = () => card.style.transform = "scale(1)";
        
        card.onclick = () => {
            const htmlModal = `
                <div style="text-align:center; margin-bottom:15px;">
                    <div style="font-size:4rem;">${c.glifo}</div>
                    <h2 style="font-family:'Cinzel', serif; color:#d4af37; margin:10px 0 2px 0;">${c.nombre}</h2>
                    <span style="font-style:italic; color:var(--texto-secundario); font-size:0.85rem;">${c.arcano}</span>
                </div>
                <hr style="border-color: var(--borde); margin-bottom:15px;">
                <p style="line-height:1.6; font-size:0.9rem;">${c.desc}</p>
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

// --- Herbolario Místico ---
function renderizarHerbolario() {
    const grid = document.getElementById('render-herbolario-data');
    if (!grid) return;
    grid.innerHTML = "";

    COSMOS_DATA.herbolario.forEach(h => {
        const card = document.createElement('div');
        card.className = "card";
        card.innerHTML = `
            <div style="display:flex; align-items:center; gap:10px; margin-bottom:8px;">
                <span style="font-size:1.5rem; color:var(--oro);">${h.glifo}</span>
                <h4 style="margin:0; font-family:'Cinzel', serif;">${h.nombre}</h4>
            </div>
            <p style="margin: 4px 0; font-size:0.75rem; color:var(--oro);"><strong>Regencia:</strong> ${h.regencia}</p>
            <p style="margin: 8px 0 0 0; font-size:0.8rem; line-height:1.4; color:var(--texto-secundario);">${h.uso}</p>
        `;
        grid.appendChild(card);
    });
}

// --- Calculadora de Regencias ---
function calcularRegente() {
    const signoSelect = document.getElementById('select-regencia-signo');
    const resultado = document.getElementById('resultado-regente');
    if (!signoSelect || !resultado) return;

    const signo = signoSelect.value;
    if (!signo) {
        resultado.innerHTML = "";
        return;
    }

    const match = COSMOS_DATA.signos.find(s => s.nombre.toLowerCase() === signo);
    
    if (match) {
        resultado.innerHTML = `
            <div style="padding:10px; border-left:3px solid var(--oro); background:rgba(0,0,0,0.1); margin-top:10px;">
                <p style="margin:0 0 4px 0; font-size:0.85rem;"><strong>Planeta Regente:</strong> ${match.regente}</p>
                <p style="margin:0; font-size:0.8rem; color:var(--texto-secundario);">Ejerce la soberanía arquetípica y dispositora de los planetas emplazados allí.</p>
            </div>
        `;
    }
}

// ==========================================================================
// 5. EFEMÉRIDES HISTÓRICAS & MODALES INTERNOS
// ==========================================================================
function calcularEfemerides() {
    const anioInput = document.getElementById('input-anio');
    const contenedor = document.getElementById('res-efem');
    if (!anioInput || !contenedor) return;

    const anio = anioInput.value;
    if (anio < 1900 || anio > 2100) {
        contenedor.innerHTML = "<p style='color:red;'>Por favor introduce un año válido entre 1900 y 2100.</p>";
        return;
    }

    const matrizCielo = COSMOS_DATA.calcularCieloHistorico(anio);
    contenedor.innerHTML = "";

    matrizCielo.forEach(item => {
        const card = document.createElement('div');
        card.className = "card";
        card.style.marginBottom = "10px";
        card.innerHTML = `
            <h4 style="margin:0 0 4px 0; color:var(--oro); font-family:'Cinzel', serif;">${item.astro}</h4>
            <p style="margin:2px 0; font-size:0.85rem;"><strong>Signo:</strong> ${item.signo}</p>
            <p style="margin:2px 0; font-size:0.85rem;"><strong>Posición:</strong> Grado ${item.posicion}</p>
            <p style="margin:2px 0; font-size:0.8rem; color:var(--texto-secundario);"><strong>Estado:</strong> ${item.estado}</p>
        `;
        contenedor.appendChild(card);
    });
}

function abrirModal(contenidoHtml) {
    const modal = document.getElementById('astro-modal');
    const body = document.getElementById('modal-dinamico-body');
    if (!modal || !body) return;

    body.innerHTML = contenidoHtml;
    modal.classList.remove('seccion-oculta');
}

function cerrarModal() {
    const modal = document.getElementById('astro-modal');
    if (modal) modal.classList.add('seccion-oculta');
}

// ==========================================================================
// 6. CONTROL Y CAPTURA DEL FORMULARIO DE CONTACTO
// ==========================================================================
function configurarFormularioContacto() {
    const form = document.getElementById('contact-form');
    if (!form) return;

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const status = document.getElementById('form-status');
        if (status) {
            status.innerHTML = `
                <div style="padding:12px; background:rgba(214,175,55,0.1); border:1px solid var(--oro); border-radius:6px; margin-top:15px; text-align:center;">
                    <p style="color:var(--oro); margin:0; font-size:0.85rem; font-weight:600;">✨ Mensaje lanzado con éxito al éter cósmico.</p>
                </div>
            `;
        }
        form.reset();
    });
}
