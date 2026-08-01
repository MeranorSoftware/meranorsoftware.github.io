document.documentElement.classList.add("js");

const assetPolishPages = new Set([
  "home",
  "autonotrek",
  "unosolu",
  "company",
  "contact",
  "founder",
]);
const currentPage = document.body?.dataset.page;

if (assetPolishPages.has(currentPage)) {
  const assetPolishStylesheet = document.createElement("link");
  assetPolishStylesheet.rel = "stylesheet";
  assetPolishStylesheet.href = currentPage === "home"
    ? "asset-polish.css"
    : "../asset-polish.css";
  document.head.appendChild(assetPolishStylesheet);
}

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
