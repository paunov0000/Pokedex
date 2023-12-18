const MAX_POKEMON = 151;
const pokemonWrapperDiv = document.querySelector(".pokemon-wrapper");
const baseUrl = `https://pokeapi.co/api/v2/pokemon?limit=${MAX_POKEMON}&offset=0`;
const imgUrl = `https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/other/dream-world/`;
fetch(baseUrl)
  .then((res) => res.json())
  .then((data) => {
    // debugger;
    for (const currPokemon of data.results) {
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

      pPokemonName.textContent = currPokemon.name;
      const pokemonId = pokemonIdExtractor(currPokemon.url);
      pPokemonId.textContent = pokemonId;

      imgPokemon.src = `${imgUrl}${pokemonId}.svg`;
      imgPokemonContainer.appendChild(imgPokemon);
      pokemonNameContainer.appendChild(pPokemonName);

      cardPokemon.appendChild(pPokemonId);
      cardPokemon.appendChild(imgPokemonContainer);
      cardPokemon.appendChild(pokemonNameContainer);

      pokemonWrapperDiv.appendChild(cardPokemon);
    }
  });

function pokemonIdExtractor(pokemonUrl) {
  const id = pokemonUrl.split(`/`)[6];
  return id;
}
