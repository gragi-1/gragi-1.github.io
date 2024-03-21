window.onload = function() {
    document.getElementById('lastUpdated').textContent = new Date().toLocaleString();
    document.body.style.opacity = 0;
    window.setTimeout(function() {
        document.body.style.opacity = 1;
    }, 500);
}

document.addEventListener('DOMContentLoaded', function() {
    // Manejo del clic para el despliegue de submenús
    document.querySelectorAll('nav > ul > li > a').forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault(); // Prevenir la navegación
            const parentLi = this.parentNode;
            const submenu = parentLi.querySelector('.submenu');
            const isOpen = parentLi.classList.contains('open');

            // Cierra todos los submenús abiertos excepto el actual
            document.querySelectorAll('nav > ul > li').forEach(li => {
                if (li !== parentLi) {
                    li.classList.remove('open');
                    li.querySelector('.submenu').style.display = 'none';
                }
            });

            // Alterna el estado del submenú actual
            if (!isOpen) {
                parentLi.classList.add('open');
                submenu.style.display = 'block';
            } else {
                parentLi.classList.remove('open');
                submenu.style.display = 'none';
            }
        });
    });

    // Escucha los clics en todo el documento para cerrar el submenú si se hace clic fuera
    document.addEventListener('click', function(e) {
        const isClickInsideMenu = document.querySelector('nav').contains(e.target);

        if (!isClickInsideMenu) {
            document.querySelectorAll('nav > ul > li').forEach(li => {
                li.classList.remove('open');
                li.querySelector('.submenu').style.display = 'none';
            });
        }
    });
});

