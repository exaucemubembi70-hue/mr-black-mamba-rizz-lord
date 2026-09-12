const menuBtn = document.getElementById("menuBtn");
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
