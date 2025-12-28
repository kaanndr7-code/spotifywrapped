const sections = Array.from(document.querySelectorAll(".section"));
const music = document.getElementById("music");
const startBtn = document.getElementById("startBtn");

let currentIndex = 0;

function showSection(index) {
  sections.forEach(sec => sec.classList.remove("active"));
  sections[index].classList.add("active");
  triggerReveal(sections[index]);
}

function triggerReveal(section) {
  section.querySelectorAll(".reveal").forEach(el => {
    el.classList.remove("show");
    void el.offsetWidth; // reflow hack
    el.classList.add("show");
  });
}

startBtn.addEventListener("click", () => {
  music.volume = 0.35;
  music.play();
  currentIndex = 1;
  showSection(currentIndex);
});

document.querySelectorAll("[data-next]").forEach(btn => {
  btn.addEventListener("click", () => {
    currentIndex++;
    showSection(currentIndex);

    if (sections[currentIndex].dataset.section === "end") {
      fadeOutMusic();
    }
  });
});

function fadeOutMusic() {
  const interval = setInterval(() => {
    if (music.volume > 0.05) {
      music.volume -= 0.05;
    } else {
      music.pause();
      clearInterval(interval);
    }
  }, 150);
}
