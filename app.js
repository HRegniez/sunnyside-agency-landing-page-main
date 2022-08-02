const burger = document.querySelector('img.header_burger');
const navBar = document.querySelector('.header_ul');

burger.addEventListener('click', () => {
    navBar.classList.toggle("ul-active");
} );