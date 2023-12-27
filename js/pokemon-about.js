const BASE_URL = "https://pokeapi.co/api/v2/pokemon";

// Function to fetch data based on the provided id
function fetchData(id) {
  return fetch(`${BASE_URL}/${id}`).then((res) => res.json());
  // Your code to fetch data goes here
}

// Function to render the fetched data
function renderData(data) {
  //render the data into the details.html page
  const pokemonName = document.querySelector("#pokemon-name p");
  const pokemonId = document.querySelector("#pokemon-id p");
  const pokemonImg = document.querySelector("#pokemon-image img");
  const pokemonTypeContainer = document.querySelector("#pokemon-type");
  const pokemonWeight = document.querySelector("#weight p");
  const pokemonHeight = document.querySelector("#height p");
  const pokemonAbilities = document.querySelector("#pokemon-abilities p");
  const pokemonDescription = document.querySelector("#pokemon-description p");
  const pokemonHp = document.querySelector("#hp-stat p:nth-child(2)");
  const pokemonAtk = document.querySelector("#atk-stat p:nth-child(2)");
  const pokemonDef = document.querySelector("#def-stat p:nth-child(2)");
  const pokemonSatk = document.querySelector("#satk-stat p:nth-child(2)");
  const pokemonSdef = document.querySelector("#sdef-stat p:nth-child(2)");
  const pokemonSpd = document.querySelector("#spd-stat p:nth-child(2)");

  //set the values of the elements
  pokemonName.textContent = capitalizeFirstLetter(data.name);
  pokemonId.textContent = `#${padWithLeadingZeros(data.id, 3)}`;
  pokemonImg.src = data.sprites.other.dream_world.front_default;
  pokemonWeight.textContent = `Weight: ${data.weight}`;
  pokemonHeight.textContent = `Height: ${data.height}`;

  //loop through the types array and add the types to the pokemonTypes element
  for (const currType of data.types) {
    const currTypeElement = document.createElement("p");
    currTypeElement.classList.add("pokemon-type");
    currTypeElement.textContent = currType.type.name;
    pokemonTypes.appendChild(currTypeElement);
  }

  //loop through the abilities array and add the abilities to the pokemonAbilities element
  for (const currAbility of data.abilities) {
    const currAbilityElement = document.createElement("p");
    currAbilityElement.classList.add("pokemon-ability");
    currAbilityElement.textContent = currAbility.ability.name;
    pokemonAbilities.appendChild(currAbilityElement);
  }

  //loop through the moves array and add the moves to the pokemonMoves element
  for (const currMove of data.moves) {
    const currMoveElement = document.createElement("p");
    currMoveElement.classList.add("pokemon-move");
    currMoveElement.textContent = currMove.move.name;
    pokemon;
    // Your code to render the data goes here
  }
}

// Function to handle the page load
async function onPageLoad() {
  // Get the id parameter from the URL
  const urlParams = new URLSearchParams(window.location.search);
  const id = urlParams.get("id");

  // Fetch data based on the id
  fetchData(id)
    .then((data) => {
      console.log(data);
      // Render the fetched data
      renderData(data);
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
}

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function padWithLeadingZeros(num, totalLength) {
  return String(num).padStart(totalLength, "0");
}

// Call the onPageLoad function when the page loads
// window.addEventListener("load", onPageLoad);
onPageLoad();
