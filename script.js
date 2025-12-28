const screens = document.querySelectorAll(".screen");
let index = 1;

/* GRADIENT GENERATOR */
function randomGradient() {
  const h1 = Math.floor(Math.random() * 360);
  const h2 = (h1 + 90 + Math.random() * 120) % 360;

  return `linear-gradient(135deg,
    hsl(${h1}, 70%, 45%),
    hsl(${h2}, 70%, 35%)
  )`;
}

/* START */
function startWrapped() {
  screens[0].classList.remove("active");
  screens[1].style.background = randomGradient();
  screens[1].classList.add("active");
}

/* NEXT */
function next() {
  screens[index].classList.remove("active");
  index++;

  if (index < screens.length) {
    screens[index].style.background = randomGradient();
    screens[index].classList.add("active");
  }
}
