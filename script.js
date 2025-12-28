const cards = document.querySelectorAll(".card");
let index = 0;
let musicStarted = false;

function showCard(i) {
  cards.forEach(c => c.classList.remove("active"));
  cards[i].classList.add("active");
}

function next() {
  if (index < cards.length - 1) {
    index++;
    showCard(index);
  }
}

function start() {
  const music = document.getElementById("bgMusic");

  if (!musicStarted) {
    music.volume = 0.35;
    music.play();
    musicStarted = true;
  }

  next();
}

// INIT
showCard(0);
