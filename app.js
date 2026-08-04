document.documentElement.classList.add("js");

const assetPolishPages = new Set([
  "home",
  "autonotrek",
  "unosolu",
  "tiny-portfolio",
  "company",
  "contact",
  "founder",
]);
const currentPage = document.body?.dataset.page;

if (assetPolishPages.has(currentPage)) {
  const isHomePage = currentPage === "home";
  const relativePrefix = isHomePage ? "" : "../";
  const stylesheetPaths = [`${relativePrefix}asset-polish.css`];

  if (currentPage === "home" || currentPage === "autonotrek") {
    stylesheetPaths.push(`${relativePrefix}asset-media-autonotrek.css`);
    stylesheetPaths.push(`${relativePrefix}asset-media-neutral.css`);
    stylesheetPaths.push(`${relativePrefix}asset-media-autonotrek-device-only.css`);
  }

  if (currentPage === "home" || currentPage === "unosolu") {
    stylesheetPaths.push(`${relativePrefix}asset-media-unosolu.css`);
  }

  if (currentPage === "home" || currentPage === "tiny-portfolio") {
    stylesheetPaths.push(`${relativePrefix}tiny-portfolio.css`);
    stylesheetPaths.push(`${relativePrefix}tiny-portfolio-media-icon.css`);
  }

  stylesheetPaths.forEach((href) => {
    const stylesheet = document.createElement("link");
    stylesheet.rel = "stylesheet";
    stylesheet.href = href;
    document.head.appendChild(stylesheet);
  });
}

if (currentPage === "home") {
  const principlesSection = document.querySelector(".section--principles");

  if (principlesSection && !document.getElementById("labs")) {
    principlesSection.insertAdjacentHTML(
      "beforebegin",
      `
        <section class="section section--labs" id="labs">
          <div class="section-frame">
            <div class="section-heading">
              <p class="eyebrow eyebrow--cyan">Meranor Labs</p>
              <h2>Focused tools. Public experiments. Practical AI work.</h2>
              <p>
                Meranor Labs is where we build smaller products, exploratory systems,
                and AI-native tools in public—useful projects described with the same
                development-stage honesty as our larger platforms.
              </p>
            </div>

            <div class="labs-grid">
              <article class="labs-card labs-card--tiny-portfolio">
                <div class="labs-card__media">
                  <div
                    class="tp-home-icon"
                    role="img"
                    aria-label="Tiny Portfolio app icon"
                  ></div>
                </div>

                <div class="labs-card__content">
                  <p class="status-label status-label--cyan">Building in public</p>
                  <p class="platform-card__brand">Tiny Portfolio <span>by Meranor</span></p>
                  <h3>A calmer portfolio companion for ChatGPT.</h3>
                  <p>
                    Tiny Portfolio helps users run consistent portfolio check-ins,
                    organize screenshot-assisted updates, preserve portable records,
                    and make clearer long-term decisions without pretending to be a
                    trading bot.
                  </p>

                  <ul class="signal-list">
                    <li>Guided portfolio check-ins</li>
                    <li>Screenshot-assisted updates</li>
                    <li>HOLD / WAIT / REVIEW decision support</li>
                  </ul>

                  <div class="labs-card__actions">
                    <a class="text-link text-link--cyan" href="tiny-portfolio/">
                      Explore Tiny Portfolio <span>→</span>
                    </a>
                    <a
                      class="text-link text-link--cyan"
                      href="https://github.com/MeranorSystems/tiny-portfolio"
                      target="_blank"
                      rel="noreferrer"
                    >
                      View on GitHub <span>↗</span>
                    </a>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </section>
      `,
    );
  }
}

if (currentPage === "tiny-portfolio") {
  document.querySelectorAll(".tp-hero-media, .tp-showcase-media").forEach((container) => {
    if (!container.querySelector(".tp-page-icon")) {
      const icon = document.createElement("div");
      icon.className = "tp-home-icon tp-page-icon";
      icon.setAttribute("aria-hidden", "true");
      container.prepend(icon);
    }
  });
}

if (assetPolishPages.has(currentPage)) {
  const footerNav = document.querySelector(".site-footer nav");

  if (footerNav && !footerNav.querySelector("[data-tiny-portfolio-link]")) {
    const relativePrefix = currentPage === "home" ? "" : "../";
    const link = document.createElement("a");
    link.href = `${relativePrefix}tiny-portfolio/`;
    link.dataset.tinyPortfolioLink = "true";
    link.textContent = "Tiny Portfolio";
    footerNav.prepend(link);
  }
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
