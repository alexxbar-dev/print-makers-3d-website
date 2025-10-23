
// Modulo: modal de imagenes seccion portfolio

document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".portfolio__card-wrapper");
  const modal = document.querySelector(".modal");
  const modalImg = document.querySelector(".modal__img");
  const modalClose = document.querySelector(".modal__close");

  cards.forEach((card) => { 
    card.addEventListener("click", () => {
      const imgSrc = card.querySelector(".portfolio__card-image").src;
      const imgAlt = card.querySelector(".portfolio__card-image").alt;
      modalImg.src = imgSrc;
      modalImg.alt = imgAlt || "Imagen ampliada";
      modal.classList.remove("hidden");
      document.body.style.overflow = 'hidden';
    });
  });

  function resetZoom() {
    modal.classList.remove("zoom-activo");
    modalImg.style.transform = `scale(1)`;
  }

  modalImg.addEventListener("dblclick", (evento) => {
    modal.classList.toggle("zoom-activo");
    if (modal.classList.contains("zoom-activo")) {
      const bounds = modalImg.getBoundingClientRect();

      const xClick = evento.clientX - bounds.left;
      const yClick = evento.clientY - bounds.top;

      const xPercent = (xClick / bounds.width) * 100;
      const yPercent = (yClick / bounds.height) * 100;

      modalImg.style.transformOrigin = `${xPercent}% ${yPercent}%`;
      modalImg.style.transform = `scale(2)`;
    } else {
      resetZoom();
    }

  });

  modalClose.addEventListener("click", () => {
    modal.classList.add("hidden")
    document.body.style.overflow = '';
    resetZoom();
  });

  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.classList.add("hidden");
      document.body.style.overflow = '';
      resetZoom();
    }
  });

});