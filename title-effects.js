// EFECTOS HOVER SIMPLES PARA TÍTULOS
document.addEventListener('DOMContentLoaded', function() {
    // Buscar títulos de sección (NO el nombre principal)
    const titles = document.querySelectorAll('.about-header h2, .projects h2, .education h2, .contact-header h2');
    
    titles.forEach(title => {
        title.addEventListener('mouseenter', function() {
            this.style.color = '#10B981'; // Verde
            this.style.transform = 'translateY(-5px)';
            this.style.transition = 'all 0.3s ease';
        });
        
        title.addEventListener('mouseleave', function() {
            this.style.color = '#2563EB'; // Azul original
            this.style.transform = 'translateY(0)';
        });
    });
});
