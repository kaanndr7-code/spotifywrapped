const cards = document.querySelectorAll(".card");
let currentIndex = 0;

function nextCard() {
  cards[currentIndex].classList.remove("active");
  currentIndex++;

  if (currentIndex < cards.length) {
    cards[currentIndex].classList.add("active");
  }
}
