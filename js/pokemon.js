const MAX_POKEMON = 151;
const pokemonWrapperDiv = document.querySelector(".pokemon-wrapper");
const baseUrl = `https://pokeapi.co/api/v2/pokemon?limit=${MAX_POKEMON}&offset=0`;
const imgUrl = `https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/other/dream-world/`;
const searchBar = document.querySelector("#searchBar");
let pokemon = [];

searchBar.addEventListener("keyup", (e) => {
  const searchString = e.target.value.toLowerCase();
  const filteredPokemon = pokemon.filter((pokemon) => {
    return pokemon.name.toLowerCase().startsWith(searchString);
  });
  displayPokemon(filteredPokemon);
});

fetch(baseUrl)
  .then((res) => res.json())
  .then((data) => {
    pokemon = data.results;
    displayPokemon(data.results);
  });

function pokemonIdExtractor(pokemonUrl) {
  const id = pokemonUrl.split(`/`)[6];
  return id;
}

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function padWithLeadingZeros(num, totalLength) {
  return String(num).padStart(totalLength, "0");
}

function displayPokemon(pokemon) {
  const pokemonWrapperDiv = document.querySelector(".pokemon-wrapper");
  pokemonWrapperDiv.innerHTML = "";
  for (const currPokemon of pokemon) {
    const cardPokemon = document.createElement("div");
    cardPokemon.classList.add("pokemon-card");

    const pokemonNameContainer = document.createElement("div");
    pokemonNameContainer.classList.add("pokemon-name-container");

    const pPokemonName = document.createElement("p");
    pPokemonName.classList.add("pokemon-name");

    const pPokemonId = document.createElement("p");
    pPokemonId.classList.add("pokemon-id");

    const imgPokemonContainer = document.createElement("div");
    imgPokemonContainer.classList.add("pokemon-img");

    const imgPokemon = document.createElement("img");

    pPokemonName.textContent = capitalizeFirstLetter(currPokemon.name);
    const pokemonId = pokemonIdExtractor(currPokemon.url);
    pPokemonId.textContent = `#${padWithLeadingZeros(pokemonId, 3)}`; //! Add leading 0s

    imgPokemon.src = `${imgUrl}${pokemonId}.svg`;
    imgPokemonContainer.appendChild(imgPokemon);
    pokemonNameContainer.appendChild(pPokemonName);

    cardPokemon.id = pokemonId;

    cardPokemon.appendChild(pPokemonId);
    cardPokemon.appendChild(imgPokemonContainer);
    cardPokemon.appendChild(pokemonNameContainer);
    cardPokemon.addEventListener("click", () => {
      window.location.href = `./details.html?id=${pokemonId}`;
    });

    pokemonWrapperDiv.appendChild(cardPokemon);
  }
}
