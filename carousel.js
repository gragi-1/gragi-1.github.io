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
    
    // Crear la animación CSS dinámicamente
    const style = document.createElement('style');
    style.textContent = `
      @keyframes continuousScroll {
        0% { transform: translateX(0); }
        100% { transform: translateX(-${originalWidth}px); }
      }
      
      .carousel-track {
        animation: continuousScroll 15s linear infinite;
      }
      
      .carousel-track:hover {
        animation-play-state: paused;
      }
    `;
    document.head.appendChild(style);
    
    console.log('Animación continua iniciada');
  }
  
  // Esperar un momento para que todo se renderice
  setTimeout(() => {
    startContinuousAnimation();
  }, 100);
  
  console.log('Carrusel continuo configurado correctamente');
}); 