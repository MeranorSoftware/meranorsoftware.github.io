document.documentElement.classList.add("js");

const nav = document.getElementById("site-nav");
const toggle = document.querySelector(".site-header__toggle");
const year = document.querySelector("[data-current-year]");

if (year) {
  year.textContent = String(new Date().getFullYear());
}

if (nav && toggle) {
  const closeNav = () => {
    nav.classList.remove("is-open");
    toggle.setAttribute("aria-expanded", "false");
  };

  toggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(isOpen));
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeNav);
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 780) {
      closeNav();
    }
  });
}
