/* ============= SHOW MENU =============== */

const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

if (navToggle) {
  navToggle.addEventListener("click", function () {
    navMenu.classList.add("show-menu");
  });
}
if (navClose) {
  navClose.addEventListener("click", function () {
    navMenu.classList.remove("show-menu");
  });
}

/* ============= CLOSE MENU BY CLICK MENU ITEM =============== */
const navLink = document.querySelectorAll(".nav-link");

const linkAction = () => {
  const navMenu = document.getElementById("nav-menu");
  //   when we click on each nav-link, we remove the show-menu class
  navMenu.classList.remove("show-menu");
};

navLink.forEach((n) => n.addEventListener("click", linkAction));

/* ============= LANG SELECT =============== */

const languages = document.querySelectorAll(".lang");

languages.forEach((l) =>
  l.addEventListener("click", () => {
    // Remove 'active' class from all languages elements
    languages.forEach((lang) => lang.classList.remove("active"));
    // Add 'active' class to the clicked element
    l.classList.add("active");
  })
);
