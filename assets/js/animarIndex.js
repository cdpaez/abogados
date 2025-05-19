const imagen = document.querySelector('.presentacion__img');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      imagen.classList.remove('fadeIn'); // reinicia
      void imagen.offsetWidth; // fuerza reflow
      imagen.classList.add('fadeIn');
    }
  });
}, {
  threshold: 0.5
});

observer.observe(imagen);

const titulo = document.querySelector('.presentacion__titulo');

const verTitulo = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      titulo.classList.remove('animate__swirl'); // reinicia
      void titulo.offsetWidth; // fuerza reflow
      titulo.classList.add('animate__swirl');
    }
  });
}, {
  threshold: 0
});

verTitulo.observe(titulo);

const quienesH2 = document.querySelector('.title__container--h2');

const verTitulo2 = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      quienesH2.classList.remove('fadeIn'); // reinicia
      void quienesH2.offsetWidth; // fuerza reflow
      quienesH2.classList.add('fadeIn');
    }
  });
}, {
  threshold: 0
});

verTitulo2.observe(quienesH2);

const variosEl = document.querySelectorAll('.presentacion__izq, .presentacion__der, .quienes__somos--pizq, .quienes__somos--pder');

const verVariosTags = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.remove('slideIn'); // reinicia
      void entry.target.offsetWidth; // fuerza reflow
      entry.target.classList.add('slideIn');
    }
  });
}, {
  threshold: 0
});

// Aplica el observer a cada elemento
variosEl.forEach(el => verVariosTags.observe(el));