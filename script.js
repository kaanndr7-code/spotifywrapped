const backgrounds = [
  "radial-gradient(circle at top, #1db95433, #000)",
  "radial-gradient(circle at top, #8e44ad33, #000)",
  "radial-gradient(circle at top, #f39c1233, #000)",
  "radial-gradient(circle at top, #3498db33, #000)",
  "radial-gradient(circle at top, #e8439333, #000)"
];

let bgIndex = 0;

function go(id) {
  document.querySelectorAll('.section')
    .forEach(s => s.classList.remove('active'));

  const section = document.getElementById(id);
  section.classList.add('active');

  document.body.style.background = backgrounds[bgIndex % backgrounds.length];
  bgIndex++;

  animateText(section);
}

function animateText(section) {
  const elements = section.querySelectorAll('.reveal');
  elements.forEach(el => {
    const text = el.innerHTML;
    el.innerHTML = "";
    [...text].forEach((char, i) => {
      const span = document.createElement("span");
      span.innerHTML = char === " " ? "&nbsp;" : char;
      span.style.animationDelay = `${i * 0.03}s`;
      el.appendChild(span);
    });
  });
}

function startWrapped() {
  const music = document.getElementById("bgMusic");
  const play = document.getElementById("playBtn");

  play.classList.add("heart");
  music.volume = 0.35;
  music.play();

  setTimeout(() => {
    go("traits");
  }, 600);
}

// Sayfa ilk açıldığında hero yazılarını göster
document.addEventListener("DOMContentLoaded", () => {
  animateText(document.getElementById("hero"));
});
