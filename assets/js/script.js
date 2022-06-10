const menuMobile = document.querySelector('.menu-mobile');
const body = document.querySelector('body');

menuMobile.addEventListener("click", () => {
    menuMobile.classList.contains("bi-list")
    ? menuMobile.classList.replace("bi-list", "bi-x")
    : menuMobile.classList.replace("bi-x", "bi-list");
    body.classList.toggle("menu-nav-active")
});

/*
const nav = document.querySelector('.nav-link');

nav.addEventListener("click", () => {
    nav.classList.contains("active")
    ? nav.classList.add("active")
    : nav.classList.remove("active");
});
*/
