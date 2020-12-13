/**main show */
const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId);
  nav = document.getElementById(navId);

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      nav.classList.toggle("show");
    });
  }
};
showMenu("nav-toggle", "nav-menu");

/**active and remove menu */
const navLink = document.querySelectorAll(".nav__link");

function linkAction() {
  //active link
  navLink.forEach((n) => n.classList.remove("active"));
  this.classList.add("active");

  //remove menu mobile
  const navMenu = document.getElementById("nav-menu");
  navMenu.classList.remove("show");
}

navLink.forEach((n) => n.addEventListener("click", linkAction));

/**scroll reveal animation */
const sr = ScrollReveal({
  origin: "top",
  distance: "80px",
  duration: "2000",
  reset: true,
});

/**scroll home */
sr.reveal(".home__title", {});
sr.reveal(".button", { delay: 100 });
sr.reveal(".home__img", { delay: 200 });
sr.reveal(".home__social-icon", { interval: 100 });

/**scrol about */
sr.reveal(".about__img", {});
sr.reveal(".about__subtitle", { delay: 100 });
sr.reveal(".about__text", { delay: 200 });

/**scroll skills */
sr.reveal(".skills__subtitle", {});
sr.reveal(".skills__text", { delay: 100 });
sr.reveal(".skills__data", { interval: 100 });
sr.reveal(".skills__img", { delay: 200 });

/**scroll work */
sr.reveal(".work__img", { delay: 100 });

/**scroll contact */
sr.reveal(".contact__input", { delay: 100 });
