const slides = document.querySelectorAll(".slide");
let index = 0;

/* RANDOM GRADIENT */
function generateGradient() {
  const h1 = Math.floor(Math.random() * 360);
  const h2 = (h1 + 80 + Math.random() * 120) % 360;

  return `linear-gradient(135deg,
    hsl(${h1}, 70%, 45%),
    hsl(${h2}, 70%, 35%)
  )`;
}

/* INITIAL COLOR */
slides[0].style.background = generateGradient();

function next() {
  slides[index].classList.remove("active");
  index++;

  if (index < slides.length) {
    slides[index].style.background = generateGradient(); // ← HER TIKLAMADA YENİ
    slides[index].classList.add("active");
  }
}
