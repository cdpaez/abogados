const animables = document.querySelectorAll('.animacion');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // Reinicia la animación
      entry.target.classList.remove('fade-in');
      void entry.target.offsetWidth; // Fuerza reflow
      entry.target.classList.add('fade-in');
    }
  });
}, {
  threshold: 0.5
});

animables.forEach(el => observer.observe(el));
