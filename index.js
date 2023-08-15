import createCharacterCard from "./components/card/card.js";

const cardContainer = document.querySelector('[data-js="card-container"]');
const searchBarContainer = document.querySelector(
  '[data-js="search-bar-container"]'
);
const searchBar = document.querySelector('[data-js="search-bar"]');
const navigation = document.querySelector('[data-js="navigation"]');
const prevButton = document.querySelector('[data-js="button-prev"]');
const nextButton = document.querySelector('[data-js="button-next"]');
const pagination = document.querySelector('[data-js="pagination"]');

// States
let maxPage = 1;
let page = 1;
const searchQuery = "";

//Fetch Data
async function fetchCharacters() {
  const response = await fetch(
    `https://rickandmortyapi.com/api/character/?page=${page}`
  );
  const data = await response.json();
  const characters = data.results;
  maxPage = data.info.pages;
  cardContainer.innerHTML = "";
  characters.forEach((character) => {
    const newCard = createCharacterCard(character);
    cardContainer.append(newCard);
  });
}
fetchCharacters();

prevButton.addEventListener("click", () => {
  if (page > 1) {
    page--;
  }
  // else if (page === 1) {
  //   prevButton.getAttribute("disabled");
  // }
  // prevButtone.disabled = true;
});

nextButton.addEventListener("click", () => {
  if (page < maxPage) {
    page++;
  }
});
