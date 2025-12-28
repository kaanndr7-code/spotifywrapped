const cards = document.querySelectorAll(".card");
let index = 0;

function nextCard() {
  cards[index].classList.remove("active");
  index++;

  if (index < cards.length) {
    cards[index].classList.add("active");
  }
}
