// modal.js - Sistema de modal para proyectos
document.addEventListener('DOMContentLoaded', function() {
  const modal = document.getElementById('project-modal');
  const modalBody = document.getElementById('modal-body');
  const modalClose = document.getElementById('modal-close');
  const projectCards = document.querySelectorAll('.project-card');

  // Datos de los proyectos
  const projectsData = {
    1: {
      title: "Proyecto 1",
      subtitle: "Simulación de sistemas dinámicos complejos",
      description: `
        <h2>Simulación de sistemas dinámicos complejos</h2>
        <p>Este proyecto se centra en la simulación computacional de sistemas dinámicos no lineales, utilizando técnicas avanzadas de modelado matemático.</p>
        
        <img src="https://upload.wikimedia.org/wikipedia/commons/1/13/A_Trajectory_Through_Phase_Space_in_a_Lorenz_Attractor.gif" alt="Atractor de Lorenz" class="project-image">
        
        <h3>Características principales:</h3>
        <ul>
          <li>Simulación de atractores extraños (Lorenz, Rössler, Chua)</li>
          <li>Visualización en tiempo real de trayectorias 3D</li>
          <li>Análisis de estabilidad de puntos críticos</li>
          <li>Implementación de métodos numéricos de alta precisión (Runge-Kutta 4º orden)</li>
          <li>Cálculo de exponentes de Lyapunov para determinar caos</li>
        </ul>
        
        <h3>Tecnologías utilizadas:</h3>
        <p><strong>Python</strong>, <strong>NumPy</strong>, <strong>SciPy</strong>, <strong>Matplotlib</strong>, <strong>Jupyter</strong>, <strong>Plotly</strong></p>
        
        <h3>Resultados:</h3>
        <p>El sistema permite simular comportamientos caóticos complejos con visualizaciones interactivas que facilitan la comprensión de la teoría del caos. Implementado en más de 15 sistemas dinámicos diferentes.</p>
        
        <div class="inline-elements">
          <a href="https://github.com/usuario/sistemas-dinamicos" class="github-link" target="_blank">
            <svg class="github-icon" viewBox="0 0 24 24">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
            </svg>
            Ver en GitHub
          </a>
        </div>
      `
    },
    2: {
      title: "Proyecto 2",
      subtitle: "Visualización interactiva de datos matemáticos",
      description: `
        <h2>Visualización interactiva de datos matemáticos</h2>
        <p>Herramienta web interactiva para la visualización y exploración de conceptos matemáticos complejos mediante gráficos dinámicos.</p>
        
        <h3>Funcionalidades:</h3>
        <ul>
          <li>Gráficos 3D interactivos de funciones multivariables</li>
          <li>Visualización de transformaciones lineales en tiempo real</li>
          <li>Animaciones de series de Fourier con controles personalizables</li>
          <li>Explorador de fractales con zoom infinito (Mandelbrot, Julia)</li>
          <li>Calculadora gráfica avanzada con parsing de expresiones</li>
        </ul>
        
        <h3>Tecnologías utilizadas:</h3>
        <p><strong>JavaScript ES6+</strong>, <strong>D3.js</strong>, <strong>Three.js</strong>, <strong>WebGL</strong>, <strong>HTML5 Canvas</strong>, <strong>GLSL Shaders</strong></p>
        
        <h3>Impacto:</h3>
        <p>La herramienta ha sido utilizada como recurso educativo en universidades, mejorando la comprensión de conceptos abstractos mediante visualización interactiva. Más de 5,000 usuarios mensuales.</p>
        
        <div class="inline-elements">
          <a href="https://github.com/usuario/math-visualizer" class="github-link" target="_blank">
            <svg class="github-icon" viewBox="0 0 24 24">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
            </svg>
            Ver en GitHub
          </a>
        </div>
      `
    },
    3: {
      title: "Proyecto 3",
      subtitle: "Algoritmos de optimización y machine learning",
      description: `
        <h2>Algoritmos de optimización y machine learning</h2>
        <p>Implementación y comparación de algoritmos de optimización aplicados a problemas de machine learning y análisis de datos.</p>
        
        <img src="https://upload.wikimedia.org/wikipedia/commons/7/7e/Gradient_descent.gif" alt="Gradient Descent" class="project-image">
        
        <h3>Algoritmos implementados:</h3>
        <ul>
          <li>Algoritmos genéticos para optimización global multiobjetivo</li>
          <li>Gradient descent con variaciones adaptativas (Adam, RMSprop, AdaGrad)</li>
          <li>Particle Swarm Optimization (PSO) con topologías dinámicas</li>
          <li>Redes neuronales con backpropagation personalizado</li>
          <li>Optimización bayesiana para hyperparameter tuning</li>
        </ul>
        
        <h3>Tecnologías utilizadas:</h3>
        <p><strong>Python</strong>, <strong>TensorFlow 2.x</strong>, <strong>PyTorch</strong>, <strong>Scikit-learn</strong>, <strong>Pandas</strong>, <strong>CUDA</strong>, <strong>CuPy</strong></p>
        
        <h3>Resultados:</h3>
        <p>Desarrollo de un framework de optimización que mejora la convergencia en un 15-30% comparado con métodos tradicionales. Publicación en conferencia internacional IEEE.</p>
        
        <div class="inline-elements">
          <a href="https://github.com/usuario/ml-optimization" class="github-link" target="_blank">
            <svg class="github-icon" viewBox="0 0 24 24">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
            </svg>
            Ver en GitHub
          </a>
        </div>
      `
    },
    4: {
      title: "Proyecto 4",
      subtitle: "Desarrollo de app para resolución de ecuaciones",
      description: `
        <h2>App para resolución de ecuaciones</h2>
        <p>Aplicación móvil y web que resuelve ecuaciones matemáticas complejas usando técnicas de procesamiento simbólico y numérico.</p>
        
        <h3>Capacidades:</h3>
        <ul>
          <li>Resolución simbólica de ecuaciones algebraicas y trascendentes</li>
          <li>Solver numérico para ecuaciones diferenciales ordinarias y parciales</li>
          <li>Interfaz de reconocimiento de escritura matemática (OCR)</li>
          <li>Visualización paso a paso de la solución con explicaciones</li>
          <li>Graficador de funciones 2D/3D integrado</li>
        </ul>
        
        <h3>Tecnologías utilizadas:</h3>
        <p><strong>React Native</strong>, <strong>Expo</strong>, <strong>SymPy</strong>, <strong>FastAPI</strong>, <strong>TensorFlow.js</strong>, <strong>MathJax</strong>, <strong>LaTeX</strong></p>
        
        <h3>Logros:</h3>
        <p>App con más de 50,000 descargas, calificación promedio de 4.7 estrellas en App Store y Google Play. Featured en "Apps Educativas Destacadas".</p>
        
        <div class="inline-elements">
          <a href="https://github.com/usuario/equation-solver-app" class="github-link" target="_blank">
            <svg class="github-icon" viewBox="0 0 24 24">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
            </svg>
            Ver en GitHub
          </a>
        </div>
      `
    },
    5: {
      title: "Proyecto 5",
      subtitle: "Plataforma colaborativa para problemas de física",
      description: `
        <h2>Plataforma colaborativa para problemas de física</h2>
        <p>Sistema web colaborativo donde estudiantes y profesores pueden compartir, resolver y discutir problemas de física de manera interactiva.</p>
        
        <h3>Características:</h3>
        <ul>
          <li>Sistema de puntuación y gamificación con badges y rankings</li>
          <li>Simulaciones físicas interactivas con Matter.js y p5.js</li>
          <li>Foros de discusión organizados por temas y niveles</li>
          <li>Generador automático de problemas con IA</li>
          <li>Editor LaTeX integrado para fórmulas matemáticas</li>
          <li>Sistema de peer review para soluciones</li>
        </ul>
        
        <h3>Tecnologías utilizadas:</h3>
        <p><strong>Node.js</strong>, <strong>Express.js</strong>, <strong>MongoDB</strong>, <strong>React.js</strong>, <strong>Socket.io</strong>, <strong>Matter.js</strong>, <strong>Redis</strong></p>
        
        <h3>Comunidad:</h3>
        <p>Plataforma activa con más de 2,500 usuarios registrados, 15,000+ problemas resueltos colaborativamente y partnerships con 3 universidades.</p>
        
        <div class="inline-elements">
          <a href="https://github.com/usuario/physics-collaborative" class="github-link" target="_blank">
            <svg class="github-icon" viewBox="0 0 24 24">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
            </svg>
            Ver en GitHub
          </a>
        </div>
      `
    },
    6: {
      title: "Proyecto 6",
      subtitle: "Herramienta de análisis de grafos y redes",
      description: `
        <h2>Herramienta de análisis de grafos y redes</h2>
        <p>Suite de análisis para el estudio de redes complejas, incluyendo redes sociales, biológicas y de infraestructura.</p>
        
        <img src="https://upload.wikimedia.org/wikipedia/commons/9/9b/Social_Network_Analysis_Visualization.png" alt="Análisis de redes sociales" class="project-image">
        
        <h3>Análisis implementados:</h3>
        <ul>
          <li>Detección de comunidades con algoritmos Louvain y Leiden</li>
          <li>Análisis de centralidad (betweenness, closeness, eigenvector)</li>
          <li>Visualización de redes grandes (>500k nodos) con WebGL</li>
          <li>Predicción de enlaces mediante Graph Neural Networks</li>
          <li>Análisis temporal de redes dinámicas</li>
          <li>Exportación a formatos estándar (GraphML, GEXF, JSON)</li>
        </ul>
        
        <h3>Tecnologías utilizadas:</h3>
        <p><strong>Python</strong>, <strong>NetworkX</strong>, <strong>PyTorch Geometric</strong>, <strong>Plotly</strong>, <strong>Neo4j</strong>, <strong>Cytoscape.js</strong>, <strong>FastAPI</strong></p>
        
        <h3>Aplicaciones:</h3>
        <p>Utilizada en investigación académica para análisis de redes de citaciones y colaboración científica. Resultados publicados en 2 papers de conferencias internacionales (ACM, IEEE).</p>
        
        <div class="inline-elements">
          <a href="https://github.com/usuario/graph-network-analysis" class="github-link" target="_blank">
            <svg class="github-icon" viewBox="0 0 24 24">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
            </svg>
            Ver en GitHub
          </a>
        </div>
      `
    }
  };

  // Función para abrir el modal
  function openModal(projectId) {
    const project = projectsData[projectId];
    if (!project) return;

    modalBody.innerHTML = project.description;
    modal.classList.add('show');
    document.body.style.overflow = 'hidden'; // Prevenir scroll del body
  }

  // Función para cerrar el modal
  function closeModal() {
    modal.classList.remove('show');
    document.body.style.overflow = ''; // Restaurar scroll del body
    
    // Limpiar contenido después de la animación
    setTimeout(() => {
      if (!modal.classList.contains('show')) {
        modalBody.innerHTML = '';
      }
    }, 300);
  }

  // Event listeners para las tarjetas del proyecto
  projectCards.forEach(card => {
    card.addEventListener('click', function(e) {
      e.preventDefault();
      const projectId = this.getAttribute('data-project');
      openModal(projectId);
    });
  });

  // Event listener para cerrar el modal
  modalClose.addEventListener('click', closeModal);

  // Cerrar modal al hacer clic fuera del contenido
  modal.addEventListener('click', function(e) {
    if (e.target === modal) {
      closeModal();
    }
  });

  // Cerrar modal con la tecla Escape
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && modal.classList.contains('show')) {
      closeModal();
    }
  });

  console.log('Sistema de modal inicializado correctamente');
});
