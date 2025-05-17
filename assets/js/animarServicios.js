document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".card");
  const textoSecciones = [
    document.querySelector(".platon__texto"),
    document.querySelector(".dr__jaramillo__texto"),
    document.querySelector(".profesionales__texto"),
    document.querySelector(".justicia__texto")
  ];

  cards.forEach((card, index) => {
    card.addEventListener("mouseenter", () => {
      const parrafos = textoSecciones[index]?.querySelectorAll(".p1");
      parrafos?.forEach(p => p.classList.add("texto-animado"));
    });

    card.addEventListener("mouseleave", () => {
      const parrafos = textoSecciones[index]?.querySelectorAll(".p1");
      parrafos?.forEach(p => p.classList.remove("texto-animado"));
    });
  });
});