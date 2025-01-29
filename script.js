const menuHamburguer = document.querySelector('.menu-hamburguer');
const menuNav = document.querySelector('.menu-nav');

menuHamburguer.addEventListener('click', (event) => {
    menuNav.classList.toggle('active');
    event.stopPropagation();
});

document.addEventListener('click', (event) => {
    if (!menuNav.contains(event.target) && !menuHamburguer.contains(event.target)) {
        menuNav.classList.remove('active');
    }
});