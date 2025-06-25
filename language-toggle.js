// Sistema de cambio de idioma ES/EN
class LanguageToggle {
  constructor() {
    this.currentLanguage = localStorage.getItem('language') || 'es';
    this.translations = null;
    this.init();
  }

  async init() {
    await this.loadTranslations();
    this.applyLanguage(this.currentLanguage);
    this.attachEventListener();
    this.updateToggleButton();
  }

  async loadTranslations() {
    try {
      const response = await fetch('./translations.json');
      const data = await response.json();
      this.translations = data.translations;
    } catch (error) {
      console.warn('No se pudieron cargar las traducciones, usando atributos data-*');
      this.translations = null;
    }
  }

  attachEventListener() {
    const toggleButton = document.getElementById('toggle-language');
    if (toggleButton) {
      toggleButton.addEventListener('click', () => {
        this.toggle();
      });
    }
  }

  toggle() {
    this.currentLanguage = this.currentLanguage === 'es' ? 'en' : 'es';
    this.applyLanguage(this.currentLanguage);
    this.updateToggleButton();
    localStorage.setItem('language', this.currentLanguage);
  }

  applyLanguage(language) {
    // Si tenemos traducciones del JSON, usarlas primero
    if (this.translations) {
      this.applyJsonTranslations(language);
    }
    
    // Aplicar traducciones de atributos data-* como fallback
    this.applyDataAttributes(language);
    
    // Actualizar aria-labels y otros atributos
    this.updateAttributes(language);
  }

  applyJsonTranslations(language) {
    const trans = this.translations[language];
    if (!trans) return;

    // Mapeo de elementos por selector o ID específico
    const elementMappings = {
      '[data-es="Sobre mí"]': trans.about,
      '[data-es="Proyectos Destacados"]': trans.featuredProjects,
      '[data-es="Formación e Intereses"]': trans.educationInterests,
      // Agregar más mappings según sea necesario
    };

    Object.entries(elementMappings).forEach(([selector, text]) => {
      const element = document.querySelector(selector);
      if (element) {
        element.textContent = text;
      }
    });
  }

  applyDataAttributes(language) {
    // Buscar todos los elementos con atributos data-es y data-en
    const elements = document.querySelectorAll('[data-es][data-en]');
    
    elements.forEach(element => {
      const text = element.getAttribute(`data-${language}`);
      if (text) {
        element.textContent = text;
      }
    });
  }

  updateAttributes(language) {
    const toggleTheme = document.getElementById('toggle-theme');
    const toggleLanguage = document.getElementById('toggle-language');
    
    if (toggleTheme) {
      toggleTheme.setAttribute('aria-label', 
        language === 'es' ? 'Cambiar modo claro/oscuro' : 'Toggle light/dark mode'
      );
    }
    
    if (toggleLanguage) {
      toggleLanguage.setAttribute('aria-label', 
        language === 'es' ? 'Cambiar idioma' : 'Change language'
      );
    }

    // Actualizar el tooltip de los cursos clickeables
    this.updateClickableCourseTooltips(language);
  }

  updateClickableCourseTooltips(language) {
    const style = document.createElement('style');
    const tooltipText = language === 'es' ? 
      'Haz clic para ver certificado' : 
      'Click to view certificate';
    
    style.textContent = `
      .clickable-course::after {
        content: "${tooltipText}" !important;
      }
    `;
    
    // Remover el style anterior si existe
    const oldStyle = document.getElementById('language-tooltip-style');
    if (oldStyle) {
      oldStyle.remove();
    }
    
    style.id = 'language-tooltip-style';
    document.head.appendChild(style);
  }

  updateToggleButton() {
    const toggleButton = document.getElementById('toggle-language');
    if (toggleButton) {
      // Cambiar el icono del botón según el idioma actual
      toggleButton.textContent = this.currentLanguage === 'es' ? '🇬🇧' : '🇪🇸';
      toggleButton.title = this.currentLanguage === 'es' ? 
        'Switch to English' : 
        'Cambiar a Español';
    }
  }
}

// Inicializar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
  window.languageToggle = new LanguageToggle();
});
