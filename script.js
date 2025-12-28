const slides = document.querySelectorAll(".slide");
let current = 0;

/* DYNAMIC GRADIENT GENERATOR */
function randomGradient() {
  const hue1 = Math.floor(Math.random() * 360);
  const hue2 = (hue1 + 60 + Math.random() * 100) % 360;

  return `linear-gradient(135deg,
    hsl(${hue1}, 70%, 45%),
    hsl(${hue2}, 70%, 35%)
  )`;
}

slides.forEach(slide => {
  slide.style.background = randomGradient();
});

function next() {
  slides[current].classList.remove("active");
  current++;

  if (current < slides.length) {
    slides[current].classList.add("active");
  }
}
