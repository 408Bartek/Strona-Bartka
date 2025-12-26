document.addEventListener("DOMContentLoaded", () => {

  /* FOOTER TEXT */
  const texts = [
    "Witam na mojej stronie!",
    "Czysty HTML, CSS i JavaScript!",
    "Retro klimat, nowoczesny kod",
    "Strona bez frameworków"
  ];

  const footer = document.getElementById("footer-text");
  if (footer) {
    footer.textContent =
      `2026 Bartosz Szabelski – ${
        texts[Math.floor(Math.random() * texts.length)]
      }`;
  }

  /* TILT EFFECT */
  document.querySelectorAll(".tilt").forEach(img => {
    let rect;

    img.addEventListener("mouseenter", () => {
      rect = img.getBoundingClientRect();
      img.style.transition = "transform 0.25s ease-out";
    });

    img.addEventListener("mousemove", e => {
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = ((y - centerY) / centerY) * -6;
      const rotateY = ((x - centerX) / centerX) * 6;

      img.style.transform = `
        scale(1.03)
        rotateX(${rotateX}deg)
        rotateY(${rotateY}deg)
      `;
    });

    img.addEventListener("mouseleave", () => {
      img.style.transition = "transform 0.6s ease";
      img.style.transform = "scale(1) rotateX(0) rotateY(0)";
    });
  });

});
