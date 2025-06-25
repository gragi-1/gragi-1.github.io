// Manejo de clicks en cursos para abrir certificados
document.addEventListener('DOMContentLoaded', function() {
    const clickableCourses = document.querySelectorAll('.clickable-course');
    
    clickableCourses.forEach(course => {
        course.addEventListener('click', function() {
            const certificateName = this.getAttribute('data-certificate');
            
            if (certificateName) {
                // Crear la ruta al certificado (asumiendo que están en una carpeta 'certificates')
                const certificatePath = `certificates/${certificateName}`;
                
                // Verificar si el archivo existe antes de abrirlo
                fetch(certificatePath, { method: 'HEAD' })
                    .then(response => {
                        if (response.ok) {
                            // Abrir el PDF en una nueva pestaña
                            window.open(certificatePath, '_blank');
                        } else {
                            // Si el archivo no existe, mostrar un mensaje
                            showNotification(`Certificado en proceso de subida: ${certificateName}`, 'info');
                        }
                    })
                    .catch(error => {
                        // Si hay un error de red, intentar abrir de todas formas
                        window.open(certificatePath, '_blank');
                    });
            }
        });
        
        // Añadir efecto de clic visual
        course.addEventListener('mousedown', function() {
            this.style.transform = 'translateX(8px) scale(0.98)';
        });
        
        course.addEventListener('mouseup', function() {
            this.style.transform = 'translateX(8px) scale(1)';
        });
        
        course.addEventListener('mouseleave', function() {
            this.style.transform = '';
        });
    });
});

// Función para mostrar notificaciones
function showNotification(message, type = 'info') {
    // Crear elemento de notificación
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    
    // Estilos inline para la notificación
    notification.style.cssText = `
        position: fixed;
        top: 2rem;
        right: 2rem;
        background: var(--color-card-bg);
        color: var(--color-text);
        padding: 1rem 1.5rem;
        border-radius: 0.5rem;
        box-shadow: 0 8px 32px rgba(0,0,0,0.2);
        border: 1px solid var(--color-border);
        z-index: 10000;
        opacity: 0;
        transform: translateX(100%);
        transition: all 0.3s ease;
        max-width: 300px;
        font-size: 0.9rem;
        line-height: 1.4;
    `;
    
    // Añadir al DOM
    document.body.appendChild(notification);
    
    // Mostrar con animación
    setTimeout(() => {
        notification.style.opacity = '1';
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Ocultar después de 4 segundos
    setTimeout(() => {
        notification.style.opacity = '0';
        notification.style.transform = 'translateX(100%)';
        
        // Eliminar del DOM después de la animación
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 4000);
}
