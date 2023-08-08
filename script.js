const cards = document.querySelectorAll(".card");
const observer = new IntersectionObserver(
  (enteries) => {
    enteries.forEach((entery) => {
      entery.target.classList.toggle("show", entery.isIntersecting);
      //   if (entery.isIntersecting) observer.unobserve(entery.target);
    });
    //   console.log(enteries);
  },
  {
    threshold: 1,
    // rootMargin: "100px",
    // root:
  }
);
const lastCardObserver = new IntersectionObserver(
  (enteries) => {
    const lastCard = enteries[0];
    if (!lastCard.isIntersecting) return;
    loadNewCards();
    lastCardObserver.unobserve(lastCard.target);
    lastCardObserver.observe(document.querySelector(".card:last-child"));
  },
  {
    rootMargin: "100px",
  }
);
lastCardObserver.observe(document.querySelector(".card:last-child"));
cards.forEach((card) => {
  observer.observe(card);
});
const cardContainer = document.querySelector(".card-container ");
function loadNewCards() {
  for (let i = 0; i < 10; i++) {
    const card = document.createElement("div");
    card.textContent = "New Card";
    card.classList.add("card");
    observer.observe(card);
    cardContainer.append(card);
  }
}
