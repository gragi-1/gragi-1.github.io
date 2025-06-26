// carousel.js - Carrusel con movimiento continuo perpetuo
document.addEventListener('DOMContentLoaded', function() {
  const track = document.querySelector('.carousel-track');
  const cards = document.querySelectorAll('.project-card');
  
  if (!track || !cards.length) {
    console.error('No se encontraron elementos del carrusel');
    return;
  }
  
  console.log('Carrusel iniciado con', cards.length, 'tarjetas');
  
  // Duplicar las tarjetas múltiples veces para movimiento continuo
  const clonesNeeded = 3; // Crear 3 copias para movimiento fluido
  
  for (let i = 0; i < clonesNeeded; i++) {
    cards.forEach(card => {
      const clone = card.cloneNode(true);
      clone.classList.add('carousel-clone');
      // Asegurar que los clones no interfieren con scroll reveal
      clone.classList.remove('stagger-item', 'fade-in', 'fade-in-left', 'fade-in-right', 'fade-in-scale');
      track.appendChild(clone);
    });
  }
  
  // Calcular el ancho total de las tarjetas originales
  function calculateOriginalWidth() {
    let totalWidth = 0;
    cards.forEach(card => {
      totalWidth += card.offsetWidth + 32; // width + gap
    });
    return totalWidth;
  }
  
  function startContinuousAnimation() {
    const originalWidth = calculateOriginalWidth();
    
    // Actualizar la animación CSS con el ancho calculado
    const style = document.createElement('style');
    style.id = 'carousel-dynamic-width';
    style.textContent = `
      @keyframes continuousScroll {
        0% { transform: translateX(0); }
        100% { transform: translateX(-${originalWidth}px); }
      }
      
      .carousel-track.animated {
        animation: continuousScroll 20s linear infinite;
      }
      
      .carousel-track.animated:hover {
        animation-play-state: paused;
      }
    `;
    
    // Remover estilo previo si existe
    const existingStyle = document.getElementById('carousel-dynamic-width');
    if (existingStyle) {
      existingStyle.remove();
    }
    
    document.head.appendChild(style);
    
    // Activar la animación
    track.classList.add('animated');
    
    console.log('Animación continua iniciada con ancho:', originalWidth);
  }
  
  // Esperar un momento para que todo se renderice
  setTimeout(() => {
    startContinuousAnimation();
  }, 300);
  
  console.log('Carrusel continuo configurado correctamente');
});