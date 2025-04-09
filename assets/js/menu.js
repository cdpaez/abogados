const toggleBtn = document.getElementById('menu-toggle');
const navbar = document.getElementById('navbar');
const menuIcon = toggleBtn.querySelector('i');

toggleBtn.addEventListener('click', () => {
  if (navbar.classList.contains('show')) {
    // Ocultar con animación de salida
    navbar.classList.remove('show');
    navbar.classList.add('hide');

    // Cambiar icono a hamburguesa
    menuIcon.classList.remove('fa-xmark');
    menuIcon.classList.add('fa-bars');

    // Esperar a que termine la animación antes de limpiar clases
    setTimeout(() => {
      navbar.classList.remove('hide');
    }, 400); // Duración de la animación de salida
  } else {
    // Mostrar con animación de entrada
    navbar.classList.add('show');

    // Cambiar icono a "X"
    menuIcon.classList.remove('fa-bars');
    menuIcon.classList.add('fa-xmark');
  }
});
