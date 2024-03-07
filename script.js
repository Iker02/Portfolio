function showCoverLetter() {
    var aboutMeSection = document.querySelector('.about-me');
    aboutMeSection.innerHTML = `
        <h1>Cover letter</h1>
        <p>I hope this letter finds you well. My name is Iker. Despite my lack of work experience, I am excited about the opportunity 
        to kickstart my career in the world of software development. From a young age, I developed a passion for programming and 
        problem-solving through code. I have invested significant time in learning and honing my skills in various programming languages, 
        including Java and Python, which are my primary competencies. My training includes personal projects, online courses, and 
        self-directed practices that have allowed me to acquire a strong technical knowledge. In addition to my experience with Java and Python, 
        I have expertise in HTML and CSS enabling me to participate in front-end development projects. My ability to learn quickly, 
        my problem-solving focus, and my desire for continuous improvement make me a motivated and adaptable candidate. Despite my lack of professional 
        experience, I am confident that my determination and eagerness to learn will enable me to make a significant contribution to your team. 
        I am excited about the opportunity to work and learn from experienced professionals in the field. Thank you for your time and consideration. 
        Sincerely, Iker Madariaga Moreno.</p>
        <h1>My Skills</h1>
        <ul class="skills-list content-card">
            <li class="skills-item">
                <div class="title-wrapper">
                    <h5 class="h5">Web design</h5>
                    <data value="80">80%</data>
                </div>
                <div class="skill-progress-bg">
                    <div class="skill-progress-fill" style="width: 80%;"></div>
                </div>
            </li>
            <li class="skills-item">
                <div class="title-wrapper">
                    <h5 class="h5">Graphic design</h5>
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
    <h2 class="main-heading">Personal Information</h2>
    <p class="introduction">
        My name is Iker Madariaga Moreno. I am a junior developer with a strong proficiency in Java and Python. I am passionate
        about coding and have experience working on a variety of projects, ranging from command-line applications to web development. 
        I am skilled in HTML and CSS, which allows me to contribute to front-end development. I am committed to continuously learning 
        and staying up-to-date with the latest technologies and frameworks in order to become a versatile developer in the tech industry.
    </p>

    <section id="experience">
        <h2>Work Experience</h2>
        <div class="projects">
            <ul class="project-list">
                <li>Iberia - Handling</li>
                <li>Delivery man - Florist shop</li>
                <li>Lifeguard</li>
            </ul>
        </div>
    </section>

    <section id="education">
        <h2>Education</h2>
        <div class="educaciones">
            <ul class="educaciones-list">
                <li>Bachillerato</li>
                <li>First english certificate </li>
                <li>TSEAS - Sports degree</li>
            </ul>
            </div>
    </section>

    <section id="skills">
        <h2>Skills</h2>
        <ul>
            <li>Time Management: Proven ability to prioritize tasks, set achievable goals, and efficiently manage time to meet deadlines in fast-paced environments.</li>
            <li>Adaptability: Demonstrated flexibility in adapting to new situations and effectively navigating changes, ensuring seamless transitions and maintaining productivity.</li>
            <li>Leadership: Strong leadership skills with experience in guiding and motivating teams toward common objectives, fostering collaboration, and achieving exceptional results.</li>
            <li>Attention to Detail: Meticulous attention to detail in tasks and projects, ensuring accuracy and precision in all deliverables to meet high-quality standards.</li>
            <li>Teamwork: Excellent collaboration and communication skills, adept at working harmoniously with diverse teams to achieve shared goals and drive collective success.</li>
            <li>Critical Thinking: Analytical thinker with the ability to assess complex issues, analyze data, and formulate strategic solutions to solve problems and drive innovation.</li>
        </ul>
    </section>
    `;
}
function showAboutMe() {
    var aboutMeSection = document.querySelector('.about-me');
    aboutMeSection.innerHTML = `
    <h1>About Me</h1>
                <p class="textito">My name is Iker Madariaga Moreno. I am a junior developer with a strong proficiency in 
                Java and Python. I am passionate about coding and have experience working on a variety of 
                projects, ranging from command-line applications to web development. I am skilled in HTML and CSS, 
                which allows me to contribute to front-end development. I am committed to continuously learning 
                and staying up-to-date with the latest technologies and frameworks in order to become a versatile 
                developer in the tech industry.</p>
                <div class="fieldset1">
                    <div class="legend"> <legend>My projects</legend></div>
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
                        <div class="legend"> <legend>What am I doing</legend></div>
                        <section class="ronaldinhos">
                            <div class="ronaldinho-section">
                                <div class="ronaldinho">
                                    <img src="./assets/software-development.png" class="imagen" alt="Monitor Image">
                                    <h4 class="ronaldinho-text-tittle">Web design</h4>
                                    <p class="ronaldinho-text">The most modern and high-quality design made at a professional level.</p>
                                </div>
                                
                            </div>
                            <div class="ronaldinho-section">
                                <div class="ronaldinho">
                                    <img src="./assets/movil.png" class="imagen" alt="Monitor Image">
                                    <h4 class="ronaldinho-text-tittle">Mobile apps</h4>
                                    <p class="ronaldinho-text">The most modern and high-quality design made at a professional level.</p>
                                </div>
                                
                            </div>
                            <div class="ronaldinho-section">
                                <div class="ronaldinho">
                                    <img src="./assets/html.png" class="imagen" alt="Monitor Image">
                                    <h4 class="ronaldinho-text-tittle">Web development</h4>
                                    <p class="ronaldinho-text">The most modern and high-quality design made at a professional level.</p>
                                </div>
                                
                            </div>
                            <div class="ronaldinho-section">
                                <div class="ronaldinho">
                                    <img src="./assets/disposicion.png" class="imagen" alt="Monitor Image">
                                    <h4 class="ronaldinho-text-tittle">Hardware technician</h4>
                                    <p class="ronaldinho-text">The most modern and high-quality design made at a professional level.</p>
                                </div>
                                
                            </div>
                        </section>
                    </div>
                    </section>
                </div>
            </section>
        </main>
    </div>
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
    contactTitle.textContent = 'Contact';
    mapContainer.appendChild(contactTitle);

    mapContainer.appendChild(mapDiv);

    mapDiv.innerHTML = '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3039.272551443811!2d-3.6958!3d40.3471!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x7f7e7d59348e7a76!2sTu%20ubicaci%C3%B3n%20en%20Madrid!5e0!3m2!1ses!2ses!4v1646061696209!5m2!1ses!2ses" width="100%" height="100%" style="border:0; border-radius: 20px; filter: brightness(80%) saturate(0%);" allowfullscreen="" loading="lazy"></iframe>';

    var sectionContacto = document.createElement('section');
    sectionContacto.setAttribute('id', 'contacto');
    sectionContacto.innerHTML = `
            <form action="">
                <h2 class="titulo-seccion"> <br> <span class="resaltado subir"> Contact me</span></h2>
                <input type="text" placeholder="Name">
                <input type="text" placeholder="Email">
                <textarea name="" id="" cols="30" rows="10" placeholder="Message"></textarea>
                <button class="btn-primary">Send</button>
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


