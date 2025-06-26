// CURSOR ELEGANTE Y FLUIDO - SEGUIMIENTO INSTANTÁNEO
document.addEventListener('DOMContentLoaded', function() {
    // Ocultar cursor por defecto
    document.body.style.cursor = 'none';
    document.documentElement.style.cursor = 'none';
    
    // Crear cursor principal - Diseño elegante mejorado
    const cursor = document.createElement('div');
    cursor.style.cssText = `
        position: fixed;
        width: 8px;
        height: 8px;
        background: linear-gradient(45deg, #007AFF, #0056D3);
        border-radius: 50%;
        pointer-events: none;
        z-index: 99999;
        transform: translate(-50%, -50%);
        box-shadow: 0 0 12px rgba(0, 122, 255, 0.4), 0 0 24px rgba(0, 122, 255, 0.15);
        border: 1px solid rgba(255, 255, 255, 0.3);
        will-change: transform;
        transition: transform 0.15s ease-out, background 0.15s ease-out, box-shadow 0.15s ease-out;
    `;
    document.body.appendChild(cursor);

    // Crear anillo exterior para hover - Diseño más sutil
    const cursorRing = document.createElement('div');
    cursorRing.style.cssText = `
        position: fixed;
        width: 22px;
        height: 22px;
        border: 1px solid rgba(0, 122, 255, 0.25);
        border-radius: 50%;
        pointer-events: none;
        z-index: 99998;
        transform: translate(-50%, -50%) scale(0);
        transition: transform 0.2s ease-out, border 0.2s ease-out, background 0.2s ease-out;
        background: rgba(0, 122, 255, 0.03);
        will-change: transform;
    `;
    document.body.appendChild(cursorRing);

    // Seguimiento instantáneo del mouse - SIN DELAY
    document.addEventListener('mousemove', function(e) {
        // Cursor principal sigue instantáneamente
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
        
        // Anillo también sigue instantáneamente
        cursorRing.style.left = e.clientX + 'px';
        cursorRing.style.top = e.clientY + 'px';
    });

    // Variable para controlar estados
    let isHovering = false;

    // Función para añadir eventos de cursor a los elementos
    function addCursorEvents(element) {
        element.addEventListener('mouseenter', () => {
            isHovering = true;
            
            // Cursor principal - verde mucho más suave y elegante (sin fosforescente)
            cursor.style.background = 'linear-gradient(45deg, #22C55E, #16A34A)';
            cursor.style.transform = 'translate(-50%, -50%) scale(1.1)';
            cursor.style.boxShadow = '0 0 12px rgba(34, 197, 94, 0.3), 0 0 20px rgba(34, 197, 94, 0.1)';
            cursor.style.border = '1px solid rgba(255, 255, 255, 0.4)';
            
            // Anillo se expande de forma más sutil
            cursorRing.style.transform = 'translate(-50%, -50%) scale(1)';
            cursorRing.style.border = '1px solid rgba(34, 197, 94, 0.25)';
            cursorRing.style.background = 'rgba(34, 197, 94, 0.04)';
        });
        
        element.addEventListener('mouseleave', () => {
            isHovering = false;
            
            // Volver al estado normal con transición suave
            cursor.style.background = 'linear-gradient(45deg, #007AFF, #0056D3)';
            cursor.style.transform = 'translate(-50%, -50%) scale(1)';
            cursor.style.boxShadow = '0 0 12px rgba(0, 122, 255, 0.4), 0 0 24px rgba(0, 122, 255, 0.15)';
            cursor.style.border = '1px solid rgba(255, 255, 255, 0.3)';
            
            cursorRing.style.transform = 'translate(-50%, -50%) scale(0)';
            cursorRing.style.border = '1px solid rgba(0, 122, 255, 0.25)';
            cursorRing.style.background = 'rgba(0, 122, 255, 0.03)';
        });
    }

    // Función para escanear elementos interactivos
    function scanInteractiveElements() {
        const elements = 'a, button, .project-card, .contact-card, .about-card, .education-card, h2, .clickable-course, .interest-tag, .tech-tag, .soft-skill-item, .objective-item, .github-link, .contact-btn, .modal-close';
        
        document.querySelectorAll(elements).forEach(el => {
            // Evitar duplicar eventos
            if (!el.hasAttribute('data-cursor-added')) {
                addCursorEvents(el);
                el.setAttribute('data-cursor-added', 'true');
            }
        });
    }

    // Escanear elementos iniciales
    scanInteractiveElements();

    // Re-escanear cuando se modifica el DOM (para elementos del modal)
    const observer = new MutationObserver(() => {
        scanInteractiveElements();
    });
    
    observer.observe(document.body, {
        childList: true,
        subtree: true
    });



    // Prevenir parpadeo al cambiar entre elementos
    let fadeTimeout;
    document.addEventListener('mouseleave', () => {
        fadeTimeout = setTimeout(() => {
            cursor.style.opacity = '0';
            cursorRing.style.opacity = '0';
        }, 100);
    });

    document.addEventListener('mouseenter', () => {
        clearTimeout(fadeTimeout);
        cursor.style.opacity = '1';
        cursorRing.style.opacity = '1';
    });

    // Optimización para dispositivos táctiles
    if ('ontouchstart' in window) {
        cursor.style.display = 'none';
        cursorRing.style.display = 'none';
        document.body.style.cursor = 'default';
        document.documentElement.style.cursor = 'default';
    }
});
