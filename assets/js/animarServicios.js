// document.addEventListener("DOMContentLoaded", () => {
//   const cards = document.querySelectorAll(".card");
//   const textoSecciones = [
//     document.querySelector(".platon__texto"),
//     document.querySelector(".dr__jaramillo__texto"),
//     document.querySelector(".profesionales__texto"),
//     document.querySelector(".justicia__texto")
//   ];

//   cards.forEach((card, index) => {
//     card.addEventListener("mouseenter", () => {
//       const parrafos = textoSecciones[index]?.querySelectorAll(".p1");
//       parrafos?.forEach(p => p.classList.add("texto-animado"));
//     });

//     card.addEventListener("mouseleave", () => {
//       const parrafos = textoSecciones[index]?.querySelectorAll(".p1");
//       parrafos?.forEach(p => p.classList.remove("texto-animado"));
//     });
//   });
// });

document.addEventListener("DOMContentLoaded", () => {
  const textoSecciones = [
    document.querySelector(".platon__texto"),
    document.querySelector(".dr__jaramillo__texto"),
    document.querySelector(".profesionales__texto"),
    document.querySelector(".justicia__texto")
  ];

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const parrafos = entry.target.querySelectorAll(".p1");

        parrafos.forEach(p => {
          if (p.classList.contains("primeroA")) {
            p.classList.add("texto-animado1");
          } else if (p.classList.contains("segundoA")) {
            p.classList.add("texto-animado2");
          }else if (p.classList.contains("primeroB")) {
            p.classList.add("texto-animado1");
          }else if (p.classList.contains("segundoB")) {
            p.classList.add("texto-animado2");
          }else if (p.classList.contains("primeroC")) {
            p.classList.add("texto-animado1");
          }else if (p.classList.contains("segundoC")) {
            p.classList.add("texto-animado2");
          }else if (p.classList.contains("primeroD")) {
            p.classList.add("texto-animado1");
          }else if (p.classList.contains("segundoD")) {
            p.classList.add("texto-animado2");
          }
        });

        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.3
  });

  textoSecciones.forEach(seccion => {
    if (seccion) observer.observe(seccion);
  });
});

