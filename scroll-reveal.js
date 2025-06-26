// Scroll Reveal Animation System
class ScrollReveal {
    constructor() {
        this.observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };
        
        this.observer = new IntersectionObserver(this.handleIntersection.bind(this), this.observerOptions);
        this.init();
    }
    
    init() {
        // Wait for DOM to be ready
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => this.setupAnimations());
        } else {
            this.setupAnimations();
        }
    }
    
    setupAnimations() {
        // Add animation classes to elements
        this.addAnimationClasses();
        
        // Start observing elements
        this.observeElements();
    }
    
    addAnimationClasses() {
        // Main sections with fade-in (excluding carousel)
        const sections = document.querySelectorAll('section, .education-outer');
        sections.forEach((section, index) => {
            if (index % 2 === 0) {
                section.classList.add('fade-in');
            } else {
                section.classList.add('fade-in-scale');
            }
        });
        
        // Carousel section gets special treatment - only animate the container, not the track
        const carouselOuter = document.querySelector('.carousel-outer');
        if (carouselOuter) {
            carouselOuter.classList.add('fade-in');
        }
        
        // About cards with staggered animation
        const aboutCards = document.querySelectorAll('.about-card');
        aboutCards.forEach((card, index) => {
            card.classList.add('stagger-item');
            card.style.transitionDelay = `${index * 0.1}s`;
        });
        
        // Education cards with alternating animations
        const educationCards = document.querySelectorAll('.education-card');
        educationCards.forEach((card, index) => {
            if (index % 3 === 0) {
                card.classList.add('fade-in-left');
            } else if (index % 3 === 1) {
                card.classList.add('fade-in');
            } else {
                card.classList.add('fade-in-right');
            }
            card.style.transitionDelay = `${(index % 3) * 0.15}s`;
        });
        
        // Project cards - DO NOT animate, let carousel handle them
        // const projectCards = document.querySelectorAll('.project-card');
        
        // Contact cards with staggered animation
        const contactCards = document.querySelectorAll('.contact-card');
        contactCards.forEach((card, index) => {
            card.classList.add('stagger-item');
            card.style.transitionDelay = `${index * 0.2}s`;
        });
        
        // Headers with fade-in
        const headers = document.querySelectorAll('h1, h2');
        headers.forEach(header => {
            header.classList.add('fade-in');
        });
    }
    
    observeElements() {
        const animatedElements = document.querySelectorAll('.fade-in, .fade-in-left, .fade-in-right, .fade-in-scale, .stagger-item');
        animatedElements.forEach(element => {
            this.observer.observe(element);
        });
    }
    
    handleIntersection(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Optional: stop observing once animated
                this.observer.unobserve(entry.target);
            }
        });
    }
}

// Initialize scroll reveal
const scrollReveal = new ScrollReveal();

// Export for potential use by other scripts
window.ScrollReveal = ScrollReveal;
