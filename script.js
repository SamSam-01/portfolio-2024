// Variables globales
const navbar = document.querySelector('nav');
const sections = document.querySelectorAll('.section');
const navLinks = document.querySelectorAll('nav a');
const arrowDown = document.querySelector('.arrow-down');

// Fonction de mise à jour de la navbar
function updateNavbar() {
  const currentSection = [...sections].find(
    section => window.pageYOffset >= section.offsetTop - navbar.offsetHeight
  );
  const currentLink = [...navLinks].find(
    link => link.getAttribute('href').slice(1) === currentSection.getAttribute('id')
  );

  navbar.classList.toggle('navbar-visible', currentSection != null);
  navLinks.forEach(link => link.classList.toggle('navlink-active', link === currentLink));
}

// Fonction de gestion du clic sur un lien de navigation
function clickHandler(e) {
  e.preventDefault();
  const href = this.getAttribute('href');
  const targetSection = document.querySelector(href);

  scroll({
    top: targetSection.offsetTop - navbar.offsetHeight + 1,
    behavior: 'smooth'
  });
}

// Fonction d'ajustement de la position de la flèche de défilement
function updateArrowDown() {
  arrowDown.style.transform = `translateY(${window.pageYOffset * 0.5}px)`;
}

// Ajout des écouteurs d'événements
window.addEventListener('scroll', () => {
  updateNavbar();
  updateArrowDown();
});

navLinks.forEach(link => link.addEventListener('click', clickHandler));

$(document).ready(function () {
  $(".arrow-down").click(function () {
    var currentSection = $(this).closest(".section");
    var nextSection = currentSection.next(".section");

    $("html, body").animate(
      {
        scrollTop: nextSection.offset().top,
      },
      1000
    );
  });

  AOS.init();
});

document.addEventListener("DOMContentLoaded", function () {
  const navbar = document.getElementById("scroll-navbar");
  const navbarPlaceholder = document.getElementById("navbar-placeholder");
  const aboutSection = document.getElementById("about");

  function showNavbarOnScroll() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > aboutSection.offsetHeight) {
      navbar.classList.add("navbar-visible");
      navbarPlaceholder.style.height = navbar.offsetHeight + "px";
    } else {
      navbar.classList.remove("navbar-visible");
      navbarPlaceholder.style.height = 0;
    }
  }

  window.addEventListener("scroll", showNavbarOnScroll);
});

document.addEventListener("DOMContentLoaded", function () {
  const cards = document.querySelectorAll(".card");

  function flipCard(event) {
    event.currentTarget.classList.toggle("card-flipped");
  }

  cards.forEach((card) => {
    card.addEventListener("click", flipCard);
  });
});