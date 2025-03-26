document.addEventListener('DOMContentLoaded', function() {
const inicioSection = document.querySelector('#inicio');

    window.addEventListener('scroll', function() {
        const sectionPosition = inicioSection.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.2;

        if(sectionPosition < screenPosition) {
            inicioSection.classList.add('active');
        }
    });
});
document.addEventListener('DOMContentLoaded',function () {
    var header = document.querySelector('.header');

    window.addEventListener('scroll', function () {
        if (window.scrollY > 0) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
});
document.getElementById('icono__menu').addEventListener('click', function() {
    document.querySelector('.nav-list').classList.toggle('hidden');
});
const iconoMenu = document.getElementById('icono__menu');
const originalSrc = './imagenes/burger-menu.svg';
const nuevaSrc = './imagenes/close.svg';

let isOpen = false;

iconoMenu.addEventListener('click', function() {
    isOpen = !isOpen;

    if (isOpen) {
        iconoMenu.src = nuevaSrc;
    } else {
        iconoMenu.src = originalSrc;
    }

});
