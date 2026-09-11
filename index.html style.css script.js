<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Gihut — Mr Black Mamba</title>
  <meta name="description" content="Gihut — site personnel de Mr Black Mamba. Gaming, web et créations.">
  <link rel="stylesheet" href="style.css">
</head>

<body>

  <header class="nav">
    <a class="logo" href="#accueil">Gihut<span>.</span></a>

    <button class="menu-btn" id="menuBtn">☰</button>

    <nav id="navLinks">
      <a href="#accueil">Accueil</a>
      <a href="#apropos">À propos</a>
      <a href="#projets">Projets</a>
      <a href="#contact">Contact</a>
    </nav>
  </header>

  <main>

    <section id="accueil" class="hero">
      <div class="hero-card">

        <p class="tag">● DEV MODE</p>

        <h1>Mr Black Mamba</h1>

        <p class="subtitle">
          Bienvenue sur <strong>Gihut</strong>.
        </p>

        <p class="intro">
          Un espace personnel pour présenter mes créations,
          mes projets web et mes délires autour du gaming et du numérique.
        </p>

        <div class="buttons">
          <a class="btn primary" href="#projets">Voir mes projets</a>
          <a class="btn" href="#contact">Me contacter</a>
        </div>

      </div>
    </section>


    <section id="apropos" class="section">

      <p class="eyebrow">01 — À PROPOS</p>

      <h2>Qui suis-je ?</h2>

      <p class="section-text">
        Je suis Mr Black Mamba, passionné par le gaming,
        le web et la création. Gihut rassemble mes idées
        et mes projets dans une interface simple et moderne.
      </p>

      <div class="stats">

        <div class="stat">
          <strong>01</strong>
          <span>Créateur</span>
        </div>

        <div class="stat">
          <strong>WEB</strong>
          <span>Création</span>
        </div>

        <div class="stat">
          <strong>∞</strong>
          <span>Idées</span>
        </div>

      </div>

    </section>


    <section id="projets" class="section">

      <p class="eyebrow">02 — PROJETS</p>

      <h2>Mes projets</h2>

      <div class="projects">

        <article class="project">

          <div class="number">01</div>

          <h3>Gihut</h3>

          <p>
            Mon espace web personnel pour présenter
            mes créations et mes projets.
          </p>

          <button class="project-btn" data-project="Gihut">
            Voir le projet →
          </button>

        </article>


        <article class="project">

          <div class="number">02</div>

          <h3>Gaming</h3>

          <p>
            Projets et créations autour du gaming,
            des jeux vidéo et du contenu.
          </p>

          <button class="project-btn" data-project="Gaming">
            Voir le projet →
          </button>

        </article>


        <article class="project">

          <div class="number">03</div>

          <h3>À venir</h3>

          <p>
            De nouvelles créations sont en préparation.
            La suite arrive bientôt.
          </p>

          <button class="project-btn" data-project="À venir">
            Bientôt →
          </button>

        </article>

      </div>

    </section>


    <section id="contact" class="section contact">

      <p class="eyebrow">03 — CONTACT</p>

      <h2>On construit quelque chose ?</h2>

      <p class="section-text">
        Envoie un message directement depuis Gihut.
      </p>

      <form id="contactForm">

        <label>
          Nom
          <input
            id="name"
            type="text"
            placeholder="Ton nom"
            required
          >
        </label>

        <label>
          Message
          <textarea
            id="message"
            rows="5"
            placeholder="Ton message..."
            required
          ></textarea>
        </label>

        <button class="btn primary" type="submit">
          Envoyer
        </button>

      </form>

    </section>

  </main>


  <footer>
    <p>
      © <span id="year"></span> Gihut — Mr Black Mamba.
    </p>
  </footer>


  <script src="script.js"></script>

</body>
</html>* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  scroll-behavior: smooth;
}

body {
  font-family: Arial, Helvetica, sans-serif;
  background: #070707;
  color: #f5f5f5;
  line-height: 1.6;
}

a {
  text-decoration: none;
  color: inherit;
}


/* NAVIGATION */

.nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 20;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 18px 7%;

  background: rgba(7, 7, 7, 0.8);
  backdrop-filter: blur(14px);

  border-bottom: 1px solid #242424;
}

.logo {
  font-size: 1.45rem;
  font-weight: 800;
}

.logo span {
  color: #888;
}

nav {
  display: flex;
  gap: 28px;
}

nav a {
  color: #aaa;
  font-size: 0.95rem;
  transition: 0.2s;
}

nav a:hover {
  color: #fff;
}

.menu-btn {
  display: none;
  background: none;
  border: 0;
  color: #fff;
  font-size: 1.5rem;
}


/* HERO */

.hero {
  min-height: 100vh;

  display: grid;
  place-items: center;

  padding: 110px 7% 70px;

  background:
    radial-gradient(
      circle at 50% 20%,
      #202020 0,
      #070707 42%,
      #050505 100%
    );
}

.hero-card {
  width: min(850px, 100%);

  padding: 55px;

  border: 1px solid #292929;
  border-radius: 28px;

  background: rgba(16, 16, 16, 0.72);

  box-shadow: 0 25px 80px rgba(0, 0, 0, 0.45);
}

.tag,
.eyebrow {
  color: #999;

  font-size: 0.78rem;
  font-weight: 700;

  letter-spacing: 2px;
}

h1 {
  font-size: clamp(3rem, 9vw, 6.8rem);

  line-height: 0.95;

  margin: 20px 0 18px;

  letter-spacing: -4px;
}

.subtitle {
  font-size: 1.5rem;
  margin-bottom: 12px;
}

.intro,
.section-text {
  color: #aaa;
  max-width: 650px;
}


/* BUTTONS */

.buttons {
  display: flex;
  gap: 12px;

  margin-top: 28px;

  flex-wrap: wrap;
}

.btn {
  display: inline-block;

  border: 1px solid #383838;
  border-radius: 12px;

  padding: 12px 18px;

  color: #eee;
  background: #111;

  cursor: pointer;
}

.btn:hover {
  border-color: #777;
}

.btn.primary {
  background: #f5f5f5;
  color: #080808;

  border-color: #f5f5f5;
}


/* SECTIONS */

.section {
  padding: 110px 7%;

  max-width: 1150px;

  margin: auto;
}

h2 {
  font-size: clamp(2rem, 5vw, 3.4rem);

  margin: 10px 0 18px;

  letter-spacing: -1.5px;
}


/* STATS */

.stats {
  display: flex;

  gap: 14px;

  margin-top: 35px;

  flex-wrap: wrap;
}

.stat {
  min-width: 150px;

  padding: 22px;

  border: 1px solid #282828;
  border-radius: 16px;

  background: #0d0d0d;
}

.stat strong {
  display: block;

  font-size: 1.5rem;
}

.stat span {
  color: #888;

  font-size: 0.9rem;
}


/* PROJECTS */

.projects {
  display: grid;

  grid-template-columns: repeat(3, 1fr);

  gap: 16px;

  margin-top: 35px;
}

.project {
  padding: 28px;

  border: 1px solid #292929;
  border-radius: 20px;

  background: #0d0d0d;

  min-height: 245px;

  display: flex;
  flex-direction: column;
}

.number {
  color: #666;

  font-size: 0.8rem;

  margin-bottom: 22px;
}

.project h3 {
  font-size: 1.45rem;
}

.project p {
  color: #999;

  margin: 10px 0 22px;
}

.project-btn {
  margin-top: auto;

  background: none;

  border: 0;

  color: #eee;

  text-align: left;

  cursor: pointer;

  font-size: 0.95rem;
}


/* CONTACT */

.contact form {
  max-width: 650px;

  margin-top: 30px;

  display: grid;

  gap: 16px;
}

label {
  display: grid;

  gap: 8px;

  color: #aaa;

  font-size: 0.9rem;
}

input,
textarea {
  width: 100%;

  border: 1px solid #2c2c2c;
  border-radius: 12px;

  background: #0d0d0d;

  color: #fff;

  padding: 13px 14px;

  font: inherit;

  outline: none;
}

input:focus,
textarea:focus {
  border-color: #777;
}


/* FOOTER */

footer {
  padding: 35px 7%;

  border-top: 1px solid #222;

  color: #666;

  text-align: center;
}


/* MOBILE */

@media (max-width: 760px) {

  .menu-btn {
    display: block;
  }

  nav {
    display: none;

    position: absolute;

    top: 67px;
    left: 0;
    right: 0;

    padding: 18px 7%;

    background: #0a0a0a;

    border-bottom: 1px solid #242424;

    flex-direction: column;

    gap: 15px;
  }

  nav.open {
    display: flex;
  }

  .hero-card {
    padding: 32px 23px;
  }

  h1 {
    letter-spacing: -2px;
  }

  .projects {
    grid-template-columns: 1fr;
  }

  .section {
    padding: 85px 7%;
  }
}const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");


// MENU MOBILE

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});


// FERMER LE MENU APRÈS UN CLIC

document.querySelectorAll("nav a").forEach((link) => {

  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
  });

});


// BOUTONS DES PROJETS

document.querySelectorAll(".project-btn").forEach((button) => {

  button.addEventListener("click", () => {

    const project = button.dataset.project;

    if (project === "À venir") {

      alert("Ce projet arrive bientôt 👀");

    } else {

      alert(
        `Le projet « ${project} » est en préparation.`
      );

    }

  });

});


// FORMULAIRE

document
  .getElementById("contactForm")
  .addEventListener("submit", (event) => {

    event.preventDefault();

    const name = document
      .getElementById("name")
      .value
      .trim();

    alert(`Merci ${name} ! Ton message a bien été préparé.`);

    event.target.reset();

  });


// ANNÉE AUTOMATIQUE

document.getElementById("year").textContent =
  new Date().getFullYear();