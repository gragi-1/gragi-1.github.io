window.onload = function() {
    document.getElementById('lastUpdated').textContent = new Date().toLocaleString();
    document.body.style.opacity = 0;
    window.setTimeout(function() {
        document.body.style.opacity = 1;
    }, 500);
}

document.addEventListener('DOMContentLoaded', function() {
    // Selecciona todos los enlaces que comiencen con '#'
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault(); // Previene el comportamiento predeterminado

            // Obtiene el elemento al que apunta el enlace
            var target = document.querySelector(this.getAttribute('href'));
            if (target) {
                // Calcula la posición deseada ajustando la altura de la navbar
                var navbarHeight = document.querySelector('.navbar').offsetHeight;
                var offsetPosition = target.offsetTop - navbarHeight - 10; // 10px adicionales para un poco de espacio

                // Anima el desplazamiento hasta el elemento, ajustado por la altura de la navbar
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
});

