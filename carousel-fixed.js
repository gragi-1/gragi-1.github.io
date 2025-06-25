// carousel-fixed.js - Versión simplificada que funciona garantizado
document.addEventListener('DOMContentLoaded', function() {
  const track = document.querySelector('.carousel-track');
  const cards = document.querySelectorAll('.project-card');
  
  if (!track || !cards.length) {
    console.error('No se encontraron elementos del carrusel');
    return;
  }
  
  console.log('Carrusel iniciado con', cards.length, 'tarjetas');
  
  // Duplicar las tarjetas para efecto infinito
  cards.forEach(card => {
    const clone = card.cloneNode(true);
    clone.classList.add('carousel-clone');
    track.appendChild(clone);
  });
  
  let currentSlide = 0;
  const totalSlides = cards.length;
  let isMoving = false;
  
  function getSlideWidth() {
    return cards[0].offsetWidth + 32; // width + gap
  }
  
  function goToSlide(slideIndex, animate = true) {
    const slideWidth = getSlideWidth();
    const translateX = -slideIndex * slideWidth;
    
    track.style.transition = animate ? 'transform 0.5s ease-in-out' : 'none';
    track.style.transform = `translateX(${translateX}px)`;
  }
  
  function nextSlide() {
    if (isMoving) return;
    
    isMoving = true;
    currentSlide++;
    
    goToSlide(currentSlide);
    
    // Si llegamos al final, resetear
    if (currentSlide >= totalSlides) {
      setTimeout(() => {
        currentSlide = 0;
        goToSlide(0, false);
        isMoving = false;
      }, 500);
    } else {
      setTimeout(() => {
        isMoving = false;
      }, 500);
    }
  }
  
  // Inicializar posición
  goToSlide(0, false);
  
  // Auto-play
  let interval = setInterval(nextSlide, 3000);
  
  // Pausar en hover
  track.addEventListener('mouseenter', () => {
    clearInterval(interval);
  });
  
  track.addEventListener('mouseleave', () => {
    interval = setInterval(nextSlide, 3000);
  });
  
  console.log('Carrusel configurado correctamente');
});
