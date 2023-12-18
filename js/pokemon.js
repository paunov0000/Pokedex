// const MAX_POKEMON = 151;
// const pokemonWrapperDiv = document.querySelector(".pokemon-wrapper");
// const url = `https://pokeapi.co/api/v2/pokemon?limit=${MAX_POKEMON}&offset=0`;
// fetch(url)
//   .then((res) => res.json())
//   .then((data) => {
//     // debugger;
//     for (const currPokemon of data.results) {
//       const cardPokemon = document.createElement("div");
//       const h3PokemonName = document.createElement("h3");
//       const h5PokemonId = document.createElement("h5");
//       const imgPokemonContainer = document.createElement("div");
//       const imgPokemon = document.createElement("img");

//       h3PokemonName.textContent = currPokemon.name;
//       pokemonIdExtractor(currPokemon).then(
//         (pokemonId) => (h5PokemonId.textContent = pokemonId)
//       );

//       cardPokemon.appendChild(h3PokemonName);
//       cardPokemon.appendChild(h5PokemonId);
//       pokemonWrapperDiv.appendChild(cardPokemon);
//     }
//   });

// function pokemonIdExtractor(pokemon) {
//   const url = `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`;
//   const pokemonId = fetch(url)
//     .then((res) => res.json())
//     .then((data) => data.id);

//   return pokemonId;
// }
