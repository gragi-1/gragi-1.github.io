// modal.js - Sistema de modal para proyectos con soporte bilingüe
document.addEventListener('DOMContentLoaded', function() {
	const modal = document.getElementById('project-modal');
	const modalBody = document.getElementById('modal-body');
	const modalClose = document.getElementById('modal-close');
	const projectCards = document.querySelectorAll('.project-card');

	// Función para obtener el idioma actual
	function getCurrentLanguage() {
		return localStorage.getItem('language') || 'es';
	}

	// Datos de los proyectos con soporte bilingüe
	const projectsData = {
		1: {
			title: {
				es: "Render in C",
				en: "Render in C"
			},
			subtitle: {
				es: "Motor de renderizado 3D en software puro implementado en C",
				en: "Pure software 3D rendering engine implemented in C"
			},
			description: {
				es: `
					<h2>Motor de renderizado 3D en software puro</h2>
					<p>Este proyecto es un <strong>motor de renderizado 3D completamente implementado en C</strong>, diseñado para ser ligero, educativo y una base sólida para aprender gráficos por computadora desde cero. Explora técnicas fundamentales de renderizado como <strong>rasterización</strong>, <strong>sombreado</strong>, primitivas geométricas y efectos de iluminación básicos—todo en C puro.</p>
					
					<video src="images/Render3D.mp4" alt="Cubo 3D rotando" class="project-video" autoplay muted loop controls>
						Tu navegador no soporta el elemento video.
					</video>
					
					<h3>Características principales:</h3>
					<ul>
						<li>Renderizado por software sin OpenGL/DirectX—implementado desde cero</li>
						<li>Rasterización de triángulos y primitivas geométricas básicas</li>
						<li>Transformaciones 3D completas: matrices de mundo, vista y proyección</li>
						<li>Múltiples modos de renderizado: wireframe, color sólido y texturizado</li>
						<li>Gestión manual de framebuffer y z-buffer</li>
						<li>Interfaz gráfica Windows usando GDI para visualización</li>
						<li>Pipeline de renderizado 3D completo: transformación, proyección, clipping y rasterización</li>
						<li>Sistema de texturas 256x256 con interpolación</li>
					</ul>
					
					<h3>Tecnologías utilizadas:</h3>
					<p><strong>C</strong>, <strong>Windows GDI</strong>, <strong>MinGW/GCC</strong>, <strong>Álgebra lineal custom</strong>, <strong>Win32 API</strong></p>
					
					<h3>Controles implementados:</h3>
					<ul>
						<li>ESC: Salir de la aplicación</li>
						<li>Flechas izquierda/derecha: Rotar el cubo</li>
						<li>Flechas arriba/abajo: Mover cámara adelante/atrás</li>
						<li>Espacio: Cambiar modo de renderizado</li>
					</ul>
					
					<h3>Arquitectura modular:</h3>
					<p>El proyecto está organizado en módulos especializados: operaciones geométricas, álgebra lineal, pipeline de renderizado, gestión de dispositivo, transformaciones 3D y manejo de ventanas Win32. Código completamente educativo y perfecto para aprender o experimentar.</p>
					
					<h3>Resultados:</h3>
					<p>Un motor de renderizado 3D funcional que demuestra los fundamentos de los gráficos por computadora. Permite visualizar y comprender cómo funcionan internamente las APIs gráficas modernas, sin la "magia" de bibliotecas externas. Ideal para estudiantes y entusiastas de los gráficos por computadora.</p>
					
					<div class="inline-elements">
						<a href="https://github.com/gragi-1/Render_in_C" class="github-link" target="_blank">
							<svg class="github-icon" viewBox="0 0 24 24">
								<path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
							</svg>
							Ver en GitHub
						</a>
					</div>
				`,
				en: `
					<h2>Pure Software 3D Rendering Engine</h2>
					<p>This project is a <strong>3D rendering engine completely implemented in C</strong>, designed to be lightweight, educational and a solid foundation for learning computer graphics from scratch. Explores fundamental rendering techniques like <strong>rasterization</strong>, <strong>shading</strong>, geometric primitives and basic lighting effects—all in pure C.</p>
					
					<video src="images/Render3D.mp4" alt="Rotating 3D cube" class="project-video" autoplay muted loop controls>
						Your browser does not support the video element.
					</video>
					
					<h3>Key Features:</h3>
					<ul>
						<li>Software rendering without OpenGL/DirectX—implemented from scratch</li>
						<li>Triangle rasterization and basic geometric primitives</li>
						<li>Complete 3D transformations: world, view and projection matrices</li>
						<li>Multiple rendering modes: wireframe, solid color and textured</li>
						<li>Manual framebuffer and z-buffer management</li>
						<li>Windows graphics interface using GDI for visualization</li>
						<li>Complete 3D rendering pipeline: transformation, projection, clipping and rasterization</li>
						<li>256x256 texture system with interpolation</li>
					</ul>
					
					<h3>Technologies used:</h3>
					<p><strong>C</strong>, <strong>Windows GDI</strong>, <strong>MinGW/GCC</strong>, <strong>Custom linear algebra</strong>, <strong>Win32 API</strong></p>
					
					<h3>Implemented controls:</h3>
					<ul>
						<li>ESC: Exit application</li>
						<li>Left/Right arrows: Rotate cube</li>
						<li>Up/Down arrows: Move camera forward/backward</li>
						<li>Space: Change rendering mode</li>
					</ul>
					
					<h3>Modular architecture:</h3>
					<p>The project is organized in specialized modules: geometric operations, linear algebra, rendering pipeline, device management, 3D transformations and Win32 window handling. Completely educational code perfect for learning or experimenting.</p>
					
					<h3>Results:</h3>
					<p>A functional 3D rendering engine that demonstrates computer graphics fundamentals. Allows visualizing and understanding how modern graphics APIs work internally, without the "magic" of external libraries. Ideal for students and computer graphics enthusiasts.</p>
					
					<div class="inline-elements">
						<a href="https://github.com/gragi-1/Render_in_C" class="github-link" target="_blank">
							<svg class="github-icon" viewBox="0 0 24 24">
								<path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
							</svg>
							View on GitHub
						</a>
					</div>
				`
			}
		},
		2: {
			title: {
				es: "CS2 Kernel Driver",
				en: "CS2 Kernel Driver"
			},
			subtitle: {
				es: "Sistema de comunicación kernel-user para investigación de seguridad",
				en: "Kernel-user communication system for security research"
			},
			description: {
				es: `
					<h2>CS2 Kernel Driver - Sistema de comunicación kernel-user para investigación de seguridad</h2>
					<p>Proyecto educativo que demuestra la implementación de un driver de kernel de Windows y una aplicación en modo usuario trabajando conjuntamente para manipular memoria de procesos. Diseñado específicamente para investigación en seguridad informática y desarrollo de drivers.</p>
					
					<h3>Funcionalidades:</h3>
					<ul>
						<li>Driver de kernel con comunicación IOCTL para acceso seguro a memoria</li>
						<li>Aplicación en modo usuario con resolución automática de offsets de memoria</li>
						<li>Sistema de automatización de entrada (bunnyhop) como caso de estudio</li>
						<li>Arquitectura modular separando componentes kernel y usermode</li>
						<li>Manejo seguro de procesos mediante APIs oficiales de Windows</li>
						<li>Integración con herramientas de debugging (WinDbg, VMware)</li>
					</ul>
					
					<h3>Tecnologías utilizadas:</h3>
					<p><strong>C/C++</strong>, <strong>Windows Driver Kit (WDK)</strong>, <strong>Windows Kernel APIs</strong>, <strong>IOCTL Communication</strong>, <strong>Memory Management</strong>, <strong>Process Manipulation</strong></p>
					
					<h3>Arquitectura técnica:</h3>
					<ul>
						<li><strong>Kernel Driver (km/):</strong> Expone interfaz de dispositivo para operaciones de memoria</li>
						<li><strong>User Application (um/):</strong> Interactúa con el driver mediante DeviceIoControl</li>
						<li><strong>Offsets dinámicos:</strong> Sistema actualizable de direcciones de memoria</li>
						<li><strong>Comunicación segura:</strong> Protocolo de request/response entre capas</li>
					</ul>
					
					<h3>Impacto educativo:</h3>
					<p>Recurso valioso para estudiantes de ciberseguridad e investigadores que buscan comprender los internals de Windows, desarrollo de drivers, y técnicas de análisis de memoria. Código limpio y bien documentado con arquitectura modular para facilitar el aprendizaje.</p>
					
					<div class="inline-elements">
						<a href="https://github.com/gragi-1/Kernel_driver_cs2" class="github-link" target="_blank">
							<svg class="github-icon" viewBox="0 0 24 24">
								<path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
							</svg>
							Ver en GitHub
						</a>
					</div>
				`,
				en: `
					<h2>CS2 Kernel Driver - Kernel-user communication system for security research</h2>
					<p>Educational project demonstrating the implementation of a Windows kernel driver and user-mode application working together to manipulate process memory. Specifically designed for cybersecurity research and driver development.</p>
					
					<h3>Features:</h3>
					<ul>
						<li>Kernel driver with IOCTL communication for secure memory access</li>
						<li>User-mode application with automatic memory offset resolution</li>
						<li>Input automation system (bunnyhop) as case study</li>
						<li>Modular architecture separating kernel and usermode components</li>
						<li>Secure process handling through official Windows APIs</li>
						<li>Integration with debugging tools (WinDbg, VMware)</li>
					</ul>
					
					<h3>Technologies used:</h3>
					<p><strong>C/C++</strong>, <strong>Windows Driver Kit (WDK)</strong>, <strong>Windows Kernel APIs</strong>, <strong>IOCTL Communication</strong>, <strong>Memory Management</strong>, <strong>Process Manipulation</strong></p>
					
					<h3>Technical architecture:</h3>
					<ul>
						<li><strong>Kernel Driver (km/):</strong> Exposes device interface for memory operations</li>
						<li><strong>User Application (um/):</strong> Interacts with driver through DeviceIoControl</li>
						<li><strong>Dynamic offsets:</strong> Updateable memory address system</li>
						<li><strong>Secure communication:</strong> Request/response protocol between layers</li>
					</ul>
					
					<h3>Educational impact:</h3>
					<p>Valuable resource for cybersecurity students and researchers seeking to understand Windows internals, driver development, and memory analysis techniques. Clean, well-documented code with modular architecture to facilitate learning.</p>
					
					<div class="inline-elements">
						<a href="https://github.com/gragi-1/Kernel_driver_cs2" class="github-link" target="_blank">
							<svg class="github-icon" viewBox="0 0 24 24">
								<path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
							</svg>
							View on GitHub
						</a>
					</div>
				`
			}
		},
		3: {
			title: {
				es: "Get Next Line",
				en: "Get Next Line"
			},
			subtitle: {
				es: "Función de lectura de archivos línea por línea en C",
				en: "Line-by-line file reading function in C"
			},
			description: {
				es: `
					<h2>Función de lectura de archivos línea por línea en C</h2>
					<p>Implementación de una función robusta y eficiente para leer archivos de texto línea por línea desde cualquier descriptor de archivo, optimizada para el manejo dinámico de memoria y múltiples fuentes de entrada simultáneas.</p>
					
					<div class="tech-logos">
						<div class="tech-item">
							<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/C_Programming_Language.svg/100px-C_Programming_Language.svg.png" alt="C" class="tech-logo">
							<span>C</span>
						</div>
						<div class="tech-item">
							<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Bash_Logo_Colored.svg/100px-Bash_Logo_Colored.svg.png" alt="Bash" class="tech-logo">
							<span>Bash</span>
						</div>
						<div class="tech-item">
							<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Vimlogo.svg/100px-Vimlogo.svg.png" alt="Vim" class="tech-logo">
							<span>Vim</span>
						</div>
						<div class="tech-item">
							<div class="makefile-icon tech-logo">
								<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
									<rect width="48" height="48" rx="8" fill="#2E3440"/>
									<rect x="8" y="8" width="32" height="32" rx="4" fill="#3B4252"/>
									<text x="24" y="20" font-family="monospace" font-size="8" fill="#88C0D0" text-anchor="middle">Make</text>
									<text x="24" y="30" font-family="monospace" font-size="6" fill="#ECEFF4" text-anchor="middle">file</text>
									<rect x="12" y="32" width="24" height="1" fill="#5E81AC"/>
									<rect x="12" y="34" width="16" height="1" fill="#5E81AC"/>
									<rect x="12" y="36" width="20" height="1" fill="#5E81AC"/>
								</svg>
							</div>
							<span>Makefile</span>
						</div>
					</div>
					
					<h3>Características implementadas:</h3>
					<ul>
						<li>Lectura línea por línea desde cualquier descriptor de archivo (archivos, stdin, pipes)</li>
						<li>Manejo dinámico de memoria con gestión automática de buffers</li>
						<li>Soporte para líneas de longitud arbitraria (no limitado por buffer size)</li>
						<li>Variables estáticas para mantener estado persistente entre llamadas</li>
						<li>Versión bonus: gestión simultánea de múltiples descriptores de archivo</li>
						<li>Buffer size configurable via macro BUFFER_SIZE</li>
						<li>Gestión de memoria libre de memory leaks (valgrind-clean)</li>
					</ul>
					
					<h3>Tecnologías utilizadas:</h3>
					<p><strong>C</strong>, <strong>Sistema de archivos UNIX</strong>, <strong>File descriptors</strong>, <strong>Makefile</strong>, <strong>Memory management</strong>, <strong>Static variables</strong></p>
					
					<h3>Arquitectura del proyecto:</h3>
					<p>Implementación modular con funciones auxiliares personalizadas (ft_strlen, ft_strchr, ft_strjoin, ft_memcpy) y algoritmo eficiente de lectura que minimiza las llamadas al sistema mientras mantiene la integridad de los datos.</p>
					
					<h3>Logros técnicos:</h3>
					<p>Función completamente compatible con el estándar 42 School, optimizada para lectura eficiente con manejo robusto de casos edge (EOF, errores de lectura, descriptores inválidos). La versión bonus permite leer simultáneamente de múltiples archivos manteniendo el contexto independiente.</p>
					
					<div class="inline-elements">
						<a href="https://github.com/gragi-1/get_next_line" class="github-link" target="_blank">
							<svg class="github-icon" viewBox="0 0 24 24">
								<path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
							</svg>
							Ver en GitHub
						</a>
					</div>
				`,
				en: `
					<h2>Line-by-line file reading function in C</h2>
					<p>Implementation of a robust and efficient function to read text files line by line from any file descriptor, optimized for dynamic memory management and multiple simultaneous input sources.</p>
					
					<div class="tech-logos">
						<div class="tech-item">
							<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/C_Programming_Language.svg/100px-C_Programming_Language.svg.png" alt="C" class="tech-logo">
							<span>C</span>
						</div>
						<div class="tech-item">
							<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Bash_Logo_Colored.svg/100px-Bash_Logo_Colored.svg.png" alt="Bash" class="tech-logo">
							<span>Bash</span>
						</div>
						<div class="tech-item">
							<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Vimlogo.svg/100px-Vimlogo.svg.png" alt="Vim" class="tech-logo">
							<span>Vim</span>
						</div>
						<div class="tech-item">
							<div class="makefile-icon tech-logo">
								<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
									<rect width="48" height="48" rx="8" fill="#2E3440"/>
									<rect x="8" y="8" width="32" height="32" rx="4" fill="#3B4252"/>
									<text x="24" y="20" font-family="monospace" font-size="8" fill="#88C0D0" text-anchor="middle">Make</text>
									<text x="24" y="30" font-family="monospace" font-size="6" fill="#ECEFF4" text-anchor="middle">file</text>
									<rect x="12" y="32" width="24" height="1" fill="#5E81AC"/>
									<rect x="12" y="34" width="16" height="1" fill="#5E81AC"/>
									<rect x="12" y="36" width="20" height="1" fill="#5E81AC"/>
								</svg>
							</div>
							<span>Makefile</span>
						</div>
					</div>
					
					<h3>Implemented features:</h3>
					<ul>
						<li>Line-by-line reading from any file descriptor (files, stdin, pipes)</li>
						<li>Dynamic memory management with automatic buffer handling</li>
						<li>Support for arbitrary line length (not limited by buffer size)</li>
						<li>Static variables to maintain persistent state between calls</li>
						<li>Bonus version: simultaneous management of multiple file descriptors</li>
						<li>Configurable buffer size via BUFFER_SIZE macro</li>
						<li>Memory leak-free memory management (valgrind-clean)</li>
					</ul>
					
					<h3>Technologies used:</h3>
					<p><strong>C</strong>, <strong>UNIX file system</strong>, <strong>File descriptors</strong>, <strong>Makefile</strong>, <strong>Memory management</strong>, <strong>Static variables</strong></p>
					
					<h3>Project architecture:</h3>
					<p>Modular implementation with custom helper functions (ft_strlen, ft_strchr, ft_strjoin, ft_memcpy) and efficient reading algorithm that minimizes system calls while maintaining data integrity.</p>
					
					<h3>Technical achievements:</h3>
					<p>Function fully compatible with 42 School standard, optimized for efficient reading with robust handling of edge cases (EOF, read errors, invalid descriptors). The bonus version allows simultaneous reading from multiple files maintaining independent context.</p>
					
					<div class="inline-elements">
						<a href="https://github.com/gragi-1/get_next_line" class="github-link" target="_blank">
							<svg class="github-icon" viewBox="0 0 24 24">
								<path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
							</svg>
							Ver en GitHub
						</a>
					</div>
				`
			}
		},
		4: {
			title: {
				es: "Machine Learning en C",
				en: "Machine Learning in C"
			},
			subtitle: {
				es: "Implementación desde cero de algoritmos de ML en C puro",
				en: "From-scratch implementation of ML algorithms in pure C"
			},
			description: {
				es: `
					<h2>Machine Learning en C - Algoritmos desde cero</h2>
					<p>Colección educativa de implementaciones de algoritmos de Machine Learning fundamentales desarrollados completamente en C, sin dependencias externas. Proyecto diseñado para comprender los fundamentos matemáticos y computacionales de ML.</p>
					
					<h3>Algoritmos implementados:</h3>
					<ul>
						<li><strong>K-Nearest Neighbors (KNN)</strong> - Algoritmo de clasificación supervisada con dataset Iris</li>
						<li><strong>K-Means Clustering</strong> - Algoritmo de clustering no supervisado con inicialización inteligente</li>
						<li><strong>Q-Learning para Tic-Tac-Toe</strong> - Aprendizaje por refuerzo con tablas Q para juegos</li>
					</ul>
					
					<h3>Características técnicas:</h3>
					<ul>
						<li>Implementaciones en C99 puro sin bibliotecas externas de ML</li>
						<li>Algoritmos optimizados con estructuras de datos eficientes</li>
						<li>Preprocesamiento de datos con normalización y validación cruzada</li>
						<li>Exportación de resultados en formato CSV para análisis</li>
						<li>Documentación detallada y código comentado para aprendizaje</li>
					</ul>
					
					<h3>Tecnologías utilizadas:</h3>
					<p><strong>C99</strong>, <strong>GCC</strong>, <strong>Algoritmos matemáticos</strong>, <strong>Estructuras de datos</strong>, <strong>CSV processing</strong>, <strong>Memory management</strong></p>
					
					<h3>Logros educativos:</h3>
					<p>Proyecto de referencia para estudiantes de ciencias de la computación e ingeniería que buscan entender ML sin abstracciones de alto nivel. Implementaciones verificadas y probadas con datasets estándar.</p>
					
					<div class="inline-elements">
						<a href="https://github.com/gragi-1/ML_in_C" class="github-link" target="_blank">
							<svg class="github-icon" viewBox="0 0 24 24">
								<path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
							</svg>
							Ver en GitHub
						</a>
					</div>
				`,
				en: `
					<h2>Machine Learning in C - Algorithms from scratch</h2>
					<p>Educational collection of fundamental Machine Learning algorithm implementations developed entirely in C, without external dependencies. Project designed to understand the mathematical and computational foundations of ML.</p>
					
					<h3>Implemented algorithms:</h3>
					<ul>
						<li><strong>K-Nearest Neighbors (KNN)</strong> - Supervised classification algorithm with Iris dataset</li>
						<li><strong>K-Means Clustering</strong> - Unsupervised clustering algorithm with intelligent initialization</li>
						<li><strong>Q-Learning for Tic-Tac-Toe</strong> - Reinforcement learning with Q-tables for games</li>
					</ul>
					
					<h3>Technical features:</h3>
					<ul>
						<li>Pure C99 implementations without external ML libraries</li>
						<li>Optimized algorithms with efficient data structures</li>
						<li>Data preprocessing with normalization and cross-validation</li>
						<li>CSV format result export for analysis</li>
						<li>Detailed documentation and commented code for learning</li>
					</ul>
					
					<h3>Technologies used:</h3>
					<p><strong>C99</strong>, <strong>GCC</strong>, <strong>Mathematical algorithms</strong>, <strong>Data structures</strong>, <strong>CSV processing</strong>, <strong>Memory management</strong></p>
					
					<h3>Educational achievements:</h3>
					<p>Reference project for computer science and engineering students looking to understand ML without high-level abstractions. Verified implementations tested with standard datasets.</p>
					
					<div class="inline-elements">
						<a href="https://github.com/gragi-1/ML_in_C" class="github-link" target="_blank">
							<svg class="github-icon" viewBox="0 0 24 24">
								<path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
							</svg>
							View on GitHub
						</a>
					</div>
				`
			}
		},
		5: {
			title: {
				es: "Simulador de Schrödinger",
				en: "Schrödinger Simulator"
			},
			subtitle: {
				es: "Simulador cuántico interactivo de la ecuación de Schrödinger",
				en: "Interactive quantum simulator of Schrödinger equation"
			},
			description: {
				es: `
					<h2>Simulador cuántico interactivo de la ecuación de Schrödinger</h2>
					<p>Sistema de simulación avanzado que permite visualizar la evolución temporal de funciones de onda cuánticas en 1D y 2D mediante métodos numéricos de alta precisión.</p>
					
					<h3>Características:</h3>
					<ul>
						<li>Simulación 1D con controles interactivos de pausa/continuar/reset</li>
						<li>Simulación 2D con visualización en plano (vista superior)</li>
						<li>Simulación 2D con renderizado 3D de densidad de probabilidad</li>
						<li>Método Crank-Nicolson para estabilidad numérica óptima</li>
						<li>Interfaz de terminal colorida con selector de simulaciones</li>
						<li>Condiciones de contorno configurables (caja infinita)</li>
						<li>Paquetes gaussianos como condiciones iniciales</li>
					</ul>
					
					<h3>Tecnologías utilizadas:</h3>
					<p><strong>Python</strong>, <strong>NumPy</strong>, <strong>Matplotlib</strong>, <strong>SciPy</strong>, <strong>Colorama</strong></p>
					
					<h3>Métodos numéricos:</h3>
					<p>Implementación del esquema implícito Crank-Nicolson con factorización LU para resolver la ecuación de Schrödinger dependiente del tiempo con alta precisión y estabilidad.</p>
					
					<div class="inline-elements">
						<a href="https://github.com/gragi-1/Wave-equation-numerical-simulation" class="github-link" target="_blank">
							<svg class="github-icon" viewBox="0 0 24 24">
								<path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
							</svg>
							Ver en GitHub
						</a>
					</div>
				`,
				en: `
					<h2>Interactive quantum simulator of Schrödinger equation</h2>
					<p>Advanced simulation system that allows visualizing the temporal evolution of quantum wave functions in 1D and 2D through high-precision numerical methods.</p>
					
					<h3>Features:</h3>
					<ul>
						<li>1D simulation with interactive pause/continue/reset controls</li>
						<li>2D simulation with plane visualization (top view)</li>
						<li>2D simulation with 3D rendering of probability density</li>
						<li>Crank-Nicolson method for optimal numerical stability</li>
						<li>Colorful terminal interface with simulation selector</li>
						<li>Configurable boundary conditions (infinite box)</li>
						<li>Gaussian wave packets as initial conditions</li>
					</ul>
					
					<h3>Technologies used:</h3>
					<p><strong>Python</strong>, <strong>NumPy</strong>, <strong>Matplotlib</strong>, <strong>SciPy</strong>, <strong>Colorama</strong></p>
					
					<h3>Numerical methods:</h3>
					<p>Implementation of implicit Crank-Nicolson scheme with LU factorization to solve the time-dependent Schrödinger equation with high precision and stability.</p>
					
					<div class="inline-elements">
						<a href="https://github.com/gragi-1/Wave-equation-numerical-simulation" class="github-link" target="_blank">
							<svg class="github-icon" viewBox="0 0 24 24">
								<path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
							</svg>
							View on GitHub
						</a>
					</div>
				`
			}
		},
		6: {
			title: {
				es: "Simulaciones Físicas",
				en: "Physics Simulations"
			},
			subtitle: {
				es: "Suite Completa de Simulaciones Físicas Interactivas",
				en: "Complete Suite of Interactive Physics Simulations"
			},
			description: {
				es: `
					<h2>Suite Completa de Simulaciones Físicas Interactivas</h2>
					<p>Aplicación educativa que implementa múltiples simulaciones físicas avanzadas con interfaz gráfica interactiva, desarrollada para demostrar conceptos fundamentales de mecánica clásica y fenómenos ondulatorios mediante visualizaciones en tiempo real.</p>
					
					<div class="project-media-container">
						<img src="https://upload.wikimedia.org/wikipedia/commons/4/45/Double-compound-pendulum.gif" alt="Péndulo doble - comportamiento caótico" class="project-gif enhanced">
						<div class="media-caption">
							<strong>Péndulo Doble:</strong> Demostración del comportamiento caótico en sistemas deterministas
						</div>
					</div>
					
					<h3>Simulaciones implementadas:</h3>
					<ul>
						<li><strong>Sistema Masa-Resorte:</strong> Oscilaciones armónicas con control de masa, constante elástica y gravedad</li>
						<li><strong>Péndulo Simple:</strong> Movimiento pendular con análisis de trayectorias y control de parámetros físicos</li>
						<li><strong>Péndulo Doble:</strong> Sistema caótico con ecuaciones de Lagrange y comportamiento no lineal</li>
						<li><strong>Ondas 2D:</strong> Propagación de ondas bidimensionales con interacción por mouse y efectos de interferencia</li>
					</ul>
					
					<h3>Características técnicas avanzadas:</h3>
					<ul>
						<li>Integración numérica Verlet para estabilidad temporal en sistemas dinámicos</li>
						<li>Ecuaciones diferenciales de segundo orden resueltas analíticamente</li>
						<li>Manejo de singularidades y limitación de velocidades para evitar inestabilidades</li>
						<li>Visualización de trayectorias y campos de ondas en tiempo real</li>
						<li>Interfaz de usuario con controles deslizantes para parámetros físicos</li>
						<li>Sistema de menú principal modular para navegación entre simulaciones</li>
					</ul>
					
					<h3>Implementación física:</h3>
					<ul>
						<li><strong>Péndulo doble:</strong> Ecuaciones de movimiento derivadas del Lagrangiano del sistema</li>
						<li><strong>Ondas 2D:</strong> Ecuación de onda discreta con condiciones de frontera reflectantes</li>
						<li><strong>Amortiguamiento:</strong> Modelos de fricción viscosa y disipación energética</li>
						<li><strong>Normalización angular:</strong> Manejo correcto de discontinuidades en ángulos</li>
					</ul>
					
					<h3>Tecnologías utilizadas:</h3>
					<p><strong>Python</strong>, <strong>PyGame</strong>, <strong>PyGame GUI</strong>, <strong>NumPy</strong>, <strong>Matemáticas avanzadas</strong>, <strong>Física computacional</strong>, <strong>Métodos numéricos</strong></p>
					
					<h3>Controles interactivos:</h3>
					<ul>
						<li>Botones Start/Stop y Reset para control de simulación</li>
						<li>Sliders para ajuste dinámico de masas y parámetros físicos</li>
						<li>Interacción con mouse para crear perturbaciones en ondas</li>
						<li>Teclas de acceso rápido (Espacio para pausa, R para reset)</li>
					</ul>
					
					<h3>Aplicaciones educativas:</h3>
					<p>Herramienta completa para la enseñanza de mecánica clásica, teoría del caos, fenómenos ondulatorios y métodos numéricos. Perfecta para demostrar la transición de sistemas lineales a no lineales y la emergencia del comportamiento caótico en sistemas deterministas.</p>
					
					<div class="inline-elements">
						<a href="https://github.com/gragi-1/Physics_Simulations_in_Python" class="github-link" target="_blank">
							<svg class="github-icon" viewBox="0 0 24 24">
								<path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
							</svg>
							Ver en GitHub
						</a>
					</div>
				`,
				en: `
					<h2>Complete Suite of Interactive Physics Simulations</h2>
					<p>Educational application that implements multiple advanced physics simulations with interactive graphical interface, developed to demonstrate fundamental concepts of classical mechanics and wave phenomena through real-time visualizations.</p>
					
					<div class="project-media-container">
						<img src="https://upload.wikimedia.org/wikipedia/commons/4/45/Double-compound-pendulum.gif" alt="Double pendulum - chaotic behavior" class="project-gif enhanced">
						<div class="media-caption">
							<strong>Double Pendulum:</strong> Demonstration of chaotic behavior in deterministic systems
						</div>
					</div>
					
					<h3>Implemented simulations:</h3>
					<ul>
						<li><strong>Mass-Spring System:</strong> Harmonic oscillations with mass, spring constant and gravity control</li>
						<li><strong>Simple Pendulum:</strong> Pendular movement with trajectory analysis and physical parameter control</li>
						<li><strong>Double Pendulum:</strong> Chaotic system with Lagrange equations and nonlinear behavior</li>
						<li><strong>2D Waves:</strong> Two-dimensional wave propagation with mouse interaction and interference effects</li>
					</ul>
					
					<h3>Advanced technical features:</h3>
					<ul>
						<li>Verlet numerical integration for temporal stability in dynamic systems</li>
						<li>Second-order differential equations solved analytically</li>
						<li>Singularity handling and velocity limitation to avoid instabilities</li>
						<li>Real-time trajectory and wave field visualization</li>
						<li>User interface with sliders for physical parameters</li>
						<li>Modular main menu system for navigation between simulations</li>
					</ul>
					
					<h3>Physical implementation:</h3>
					<ul>
						<li><strong>Double pendulum:</strong> Equations of motion derived from system Lagrangian</li>
						<li><strong>2D waves:</strong> Discrete wave equation with reflective boundary conditions</li>
						<li><strong>Damping:</strong> Viscous friction and energy dissipation models</li>
						<li><strong>Angular normalization:</strong> Correct handling of angle discontinuities</li>
					</ul>
					
					<h3>Technologies used:</h3>
					<p><strong>Python</strong>, <strong>PyGame</strong>, <strong>PyGame GUI</strong>, <strong>NumPy</strong>, <strong>Advanced mathematics</strong>, <strong>Computational physics</strong>, <strong>Numerical methods</strong></p>
					
					<h3>Interactive controls:</h3>
					<ul>
						<li>Start/Stop and Reset buttons for simulation control</li>
						<li>Sliders for dynamic adjustment of masses and physical parameters</li>
						<li>Mouse interaction to create wave perturbations</li>
						<li>Quick access keys (Space for pause, R for reset)</li>
					</ul>
					
					<h3>Educational applications:</h3>
					<p>Complete tool for teaching classical mechanics, chaos theory, wave phenomena and numerical methods. Perfect for demonstrating the transition from linear to nonlinear systems and the emergence of chaotic behavior in deterministic systems.</p>
					
					<div class="inline-elements">
						<a href="https://github.com/gragi-1/Physics_Simulations_in_Python" class="github-link" target="_blank">
							<svg class="github-icon" viewBox="0 0 24 24">
								<path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
							</svg>
							View on GitHub
						</a>
					</div>
				`
			}
		}
	};

	// Función para abrir el modal
	function openModal(projectId) {
		const project = projectsData[projectId];
		if (!project) return;

		const currentLanguage = getCurrentLanguage();
		const content = project.description[currentLanguage] || project.description.es;
		
		modalBody.innerHTML = content;
		modal.classList.add('show');
		document.body.style.overflow = 'hidden'; // Prevenir scroll del body
		
		// Auto-reproducir videos cuando se abre el modal
		setTimeout(() => {
			const videos = modalBody.querySelectorAll('video');
			videos.forEach(video => {
				video.play().catch(error => {
					console.log('No se pudo reproducir el video automáticamente:', error);
				});
			});
		}, 100);
	}

	// Función para cerrar el modal
	function closeModal() {
		// Pausar videos antes de cerrar
		const videos = modalBody.querySelectorAll('video');
		videos.forEach(video => {
			video.pause();
			video.currentTime = 0; // Reiniciar al inicio
		});
		
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

	// Función para actualizar el modal cuando cambia el idioma
	window.updateModalLanguage = function() {
		// Si el modal está abierto, actualizarlo
		if (modal.classList.contains('show')) {
			const currentProjectId = modal.getAttribute('data-current-project');
			if (currentProjectId && projectsData[currentProjectId]) {
				const currentLanguage = getCurrentLanguage();
				const content = projectsData[currentProjectId].description[currentLanguage] || projectsData[currentProjectId].description.es;
				modalBody.innerHTML = content;
				
				// Re-inicializar videos si es necesario
				setTimeout(() => {
					const videos = modalBody.querySelectorAll('video');
					videos.forEach(video => {
						video.play().catch(error => {
							console.log('No se pudo reproducir el video automáticamente:', error);
						});
					});
				}, 100);
			}
		}
	};

	// Modificar la función openModal para recordar qué proyecto está abierto
	const originalOpenModal = openModal;
	openModal = function(projectId) {
		modal.setAttribute('data-current-project', projectId);
		originalOpenModal(projectId);
	};

	console.log('Sistema de modal bilingüe inicializado correctamente');
});
