const navToggle = document.querySelector(".nav-toggle");
const siteNav = document.querySelector(".site-nav");

if (navToggle && siteNav) {
  navToggle.addEventListener("click", () => {
    const isOpen = siteNav.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
    navToggle.textContent = isOpen ? "×" : "☰";
  });
}

document.querySelectorAll(".preview-tile, .site-nav a").forEach((link) => {
  link.addEventListener("focus", () => link.classList.add("focus-visible"));
  link.addEventListener("blur", () => link.classList.remove("focus-visible"));
});
