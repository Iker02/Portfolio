function showCoverLetter() {
    var aboutMeSection = document.querySelector('.about-me');
    aboutMeSection.innerHTML = `
        <h1>Carta de presentación</h1>
        <p>Espero que esta carta te encuentre bien. Mi nombre es Iker. A pesar de mi falta de experiencia laboral, estoy emocionado por la oportunidad de iniciar mi carrera en el mundo del desarrollo de software. Desde una edad temprana, desarrollé una pasión por la programación y la resolución de problemas a través del código. He invertido un tiempo significativo en aprender y perfeccionar mis habilidades en varios lenguajes de programación, incluyendo Java y Python, que son mis competencias principales. Mi formación incluye proyectos personales, cursos en línea y prácticas autodirigidas que me han permitido adquirir un sólido conocimiento técnico. Además de mi experiencia con Java y Python, tengo experiencia en HTML y CSS que me permite participar en proyectos de desarrollo frontend. Mi capacidad para aprender rápido, mi enfoque en la resolución de problemas y mi deseo de mejora continua me convierten en un candidato motivado y adaptable. A pesar de mi falta de experiencia profesional, estoy seguro de que mi determinación y ganas de aprender me permitirán hacer una contribución significativa a tu equipo. Estoy emocionado por la oportunidad de trabajar y aprender de profesionales experimentados en el campo. Gracias por tu tiempo y consideración. Atentamente, Iker Madariaga Moreno.</p>
        <h1>Mis habilidades</h1>
        <ul class="skills-list content-card">
            <li class="skills-item">
                <div class="title-wrapper">
                    <h5 class="h5">Diseño web</h5>
                    <data value="80">80%</data>
                </div>
                <div class="skill-progress-bg">
                    <div class="skill-progress-fill" style="width: 80%;"></div>
                </div>
            </li>
            <li class="skills-item">
                <div class="title-wrapper">
                    <h5 class="h5">Diseño gráfico</h5>
                    <data value="70">70%</data>
                </div>
                <div class="skill-progress-bg">
                    <div class="skill-progress-fill" style="width: 70%;"></div>
                </div>
            </li>
            <li class="skills-item">
                <div class="title-wrapper">
                    <h5 class="h5">Java</h5>
                    <data value="90">90%</data>
                </div>
                <div class="skill-progress-bg">
                    <div class="skill-progress-fill" style="width: 90%;"></div>
                </div>
            </li>
            <li class="skills-item">
                <div class="title-wrapper">
                    <h5 class="h5">Python</h5>
                    <data value="50">70%</data>
                </div>
                <div class="skill-progress-bg">
                    <div class="skill-progress-fill" style="width: 70%;"></div>
                </div>
            </li>
        </ul>
    `;
}


function showResume() {
    var aboutMeSection = document.querySelector('.about-me');
    aboutMeSection.innerHTML = `
    <h2 class="main-heading">Información personal</h2>
    <p class="introduction">
        Mi nombre es Iker Madariaga Moreno. Soy un desarrollador junior con una sólida competencia en Java y Python. Me apasiona la codificación y tengo experiencia trabajando en una variedad de proyectos, desde aplicaciones de línea de comandos hasta desarrollo web. Tengo habilidades en HTML y CSS, lo que me permite contribuir al desarrollo frontend. Estoy comprometido a aprender continuamente y mantenerme actualizado con las últimas tecnologías y marcos de trabajo para convertirme en un desarrollador versátil en la industria tecnológica.
    </p>

    <section id="experience">
        <h2>Experiencia laboral</h2>
        <div class="projects">
            <ul class="project-list">
                <li>Iberia - Handling</li>
                <li>Repartidor - Floristería</li>
                <li>Socorrista</li>
            </ul>
        </div>
    </section>

    <section id="education">
        <h2>Educación</h2>
        <div class="educaciones">
            <ul class="educaciones-list">
                <li>Bachillerato</li>
                <li>First english certificate</li>
                <li>TSEAS - Grado en Deporte</li>
            </ul>
            </div>
    </section>

    <section id="skills">
        <h2>Habilidades</h2>
        <ul>
            <li>Manejo del tiempo: Habilidad demostrada para priorizar tareas, establecer objetivos alcanzables y gestionar eficientemente el tiempo para cumplir con los plazos en entornos de ritmo rápido.</li>
            <li>Adaptabilidad: Flexibilidad demostrada para adaptarse a nuevas situaciones y navegar efectivamente por los cambios, asegurando transiciones sin problemas y manteniendo la productividad.</li>
            <li>Liderazgo: Fuertes habilidades de liderazgo con experiencia en guiar y motivar equipos hacia objetivos comunes, fomentando la colaboración y logrando resultados excepcionales.</li>
            <li>Atención al detalle: Atención meticulosa al detalle en tareas y proyectos, garantizando precisión y precisión en todos los entregables para cumplir con altos estándares de calidad.</li>
            <li>Trabajo en equipo: Excelentes habilidades de colaboración y comunicación, hábil para trabajar armónicamente con equipos diversos para alcanzar objetivos compartidos y impulsar el éxito colectivo.</li>
            <li>Pensamiento crítico: Pensador analítico con la capacidad de evaluar problemas complejos, analizar datos y formular soluciones estratégicas para resolver problemas e impulsar la innovación.</li>
        </ul>
    </section>
    `;
}
function showAboutMe() {
    var aboutMeSection = document.querySelector('.about-me');
    aboutMeSection.innerHTML = `
    <h1>Sobre Mí</h1>
                <p class="textito">Mi nombre es Iker Madariaga Moreno. Soy un desarrollador junior con una sólida competencia en 
                Java y Python. Me apasiona la codificación y tengo experiencia trabajando en una variedad de 
                proyectos, desde aplicaciones de línea de comandos hasta desarrollo web. Tengo habilidades en HTML y CSS, 
                lo que me permite contribuir al desarrollo frontend. Estoy comprometido a aprender continuamente 
                y mantenerme actualizado con las últimas tecnologías y marcos de trabajo para convertirme en un desarrollador 
                versátil en la industria tecnológica.</p>
                <div class="fieldset1">
                    <div class="legend"> <legend>Mis proyectos</legend></div>
                    <section class="skills">
                        <div class="skill">
                            <div>
                                <a href="./components/bingo.html" target="_blank">
                                    <img src="./assets/bingo-image.png">
                                </a>
                            </div>
                        </div>
                        <div class="skill">
                            <div>
                                <img src="./assets/agenda-image.png">
                            </div>
                        </div>
                        <div class="skill">
                            <div>
                                <img src="./assets/image-login.jpg">
                            </div>
                        </div>
                        <div class="skill">
                            <div>
                                <a href="./components/Web toy R us final/Web toy/index.html" target="_blank">
                                    <img src="./assets/web-page-image.png" alt="Descripción de la imagen">
                                </a>                                
                            </div>
                        </div>
                    </section>
                </div>
                <div class="fieldset1">
                    <div class="fieldset1">
                        <div class="legend"> <legend>Lo que estoy haciendo</legend></div>
                        <section class="ronaldinhos">
                            <div class="ronaldinho-section">
                                <div class="ronaldinho">
                                    <img src="./assets/software-development.png" class="imagen" alt="Imagen de Monitor">
                                    <h4 class="ronaldinho-text-tittle">Diseño web</h4>
                                    <p class="ronaldinho-text">El diseño más moderno y de alta calidad realizado a nivel profesional.</p>
                                </div>
                                
                            </div>
                            <div class="ronaldinho-section">
                                <div class="ronaldinho">
                                    <img src="./assets/movil.png" class="imagen" alt="Imagen de Monitor">
                                    <h4 class="ronaldinho-text-tittle">Aplicaciones móviles</h4>
                                    <p class="ronaldinho-text">Desarrollo profesional de aplicaciones para iOS y Android.</p>
                                </div>
                                
                            </div>
                            <div class="ronaldinho-section">
                                <div class="ronaldinho">
                                    <img src="./assets/html.png" class="imagen" alt="Imagen de Monitor">
                                    <h4 class="ronaldinho-text-tittle">Desarrollo web</h4>
                                    <p class="ronaldinho-text">Desarrollo de sitios de alta calidad a nivel profesional.</p>
                                </div>
                                
                            </div>
                            <div class="ronaldinho-section">
                                <div class="ronaldinho">
                                    <img src="./assets/disposicion.png" class="imagen" alt="Imagen de Monitor">
                                    <h4 class="ronaldinho-text-tittle">Técnico de hardware</h4>
                                    <p class="ronaldinho-text">Alto conocimiento sobre reparación de hardware.</p>
                                </div>
                                
                            </div>
                        </section>
                    </div>
                    </section>
                </div>
            </section>
        </main>
    </div>
    <div id="map"></div> 
    `;
}

function showMap() {
    var mapDiv = document.createElement('div'); 
    mapDiv.setAttribute('id', 'map'); 
    mapDiv.style.width = '100%'; 
    mapDiv.style.height = '450px'; 
    mapDiv.style.borderRadius = '20px';
    mapDiv.style.overflow = 'hidden'; 

    var mapContainer = document.querySelector('.about-me');
    mapContainer.innerHTML = ''; 
    mapContainer.style.width = '1100px';
    mapContainer.style.height = 'auto';
    
    var contactTitle = document.createElement('h1');
    contactTitle.textContent = 'Contacto';
    mapContainer.appendChild(contactTitle);

    mapContainer.appendChild(mapDiv);

    mapDiv.innerHTML = '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3039.272551443811!2d-3.6958!3d40.3471!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x7f7e7d59348e7a76!2sTu%20ubicaci%C3%B3n%20en%20Madrid!5e0!3m2!1ses!2ses!4v1646061696209!5m2!1ses!2ses" width="100%" height="100%" style="border:0; border-radius: 20px; filter: brightness(80%) saturate(0%);" allowfullscreen="" loading="lazy"></iframe>';

    var sectionContacto = document.createElement('section');
    sectionContacto.setAttribute('id', 'contacto');
    sectionContacto.innerHTML = `
            <form action="">
                <h2 class="titulo-seccion"> <br> <span class="resaltado subir"> Contáctame</span></h2>
                <input type="text" placeholder="Nombre">
                <input type="text" placeholder="Correo electrónico">
                <textarea name="" id="" cols="30" rows="10" placeholder="Mensaje"></textarea>
                <button class="btn-primary">Enviar</button>
            </form>
    `;
    mapContainer.appendChild(sectionContacto);
}

function setActiveNavItem(clickedItem) {
    // Elimina la clase 'active' de todos los elementos de la barra de navegación
    var navbarItems = document.querySelectorAll('.navbar-item');
    navbarItems.forEach(item => {
        item.classList.remove('active');
    });
    // Agrega la clase 'active' al elemento clicado
    clickedItem.classList.add('active');
}
