const BASE_URL = "https://pokeapi.co/api/v2/pokemon";
const body = document.querySelector("body");
body.innerHTML = ``;

// Function to fetch data based on the provided id
function fetchData(id) {
  return fetch(`${BASE_URL}/${id}`).then((res) => res.json());
  // Your code to fetch data goes here
}

// Function to render the fetched data
function renderData(data) {
  //create the elements
  body.innerHTML = `<div class="card">
  <header>
    <div class="arrow-back">
      <img src="./assetsv2/arrowBack.svg" alt="back-arrow" />
    </div>
    <div id="pokemon-name">
    </div>
    <div id="pokemon-id">
    </div>
  </header>

  <main>
    <div id="pokemon-display">
      <div id="previous-pokemon">
        <img src="./assetsv2/arowPrevious.svg" alt="" />
      </div>
      <div id="pokemon-image">
        <img
          src="https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/other/dream-world/1.svg"
          alt=""
        />
      </div>
      <div id="next-pokemon">
        <img src="./assetsv2/arrowNext.svg" alt="" />
      </div>
    </div>
    <div id="pokemon-type">
    </div>
    <div id="pokemon-about">
      <p>About</p>
    </div>
    <div id="pokemon-info">
      <div id="pokemon-dimensions">
        <div class="pokemon-stat">
          <div id="weight" class="img-stat">
            <div class="img-container">
              <img src="./assetsv2/pokemonWeight.svg" alt="" />
            </div>
            <p>9.9kg</p>
          </div>
          <p class="measurement">Weight</p>
        </div>
        <div class="pokemon-stat">
          <div id="height" class="img-stat">
            <div id="ruler" class="img-container">
              <img src="./assetsv2/pokemonHeight.svg" alt="" />
            </div>
            <p>9.9m</p>
          </div>
          <p class="measurement">Height</p>
        </div>
        <div id="pokemon-abilties">
          <div class="ability">
            <p>Ability 1</p>
            <p>Ability 2</p>
          </div>
          <p class="measurement">Moves</p>
        </div>
      </div>
    </div>
    <div id="pokemon-description">
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed
        nostrum minima in quis quisquam incidunt labore enim ut laboriosam
        tenetur ipsa explicabo, excepturi cum esse qui totam minus nam
        laudantium.
      </p>
    </div>
    <div id="pokemon-stats">
      <div id="stats-title">
        <p>Base Stats</p>
      </div>
      <div id="hp-stat" class="stat-cell">
        <div class="stat-name">
          <p>HP</p>
        </div>
        <div class="stat-bar">
          <div class="stat-value">
            <p>999</p>
          </div>
          <div class="container">
            <div class="progress2 progress-moved">
              <div class="progress-bar2"></div>
            </div>
          </div>
        </div>
      </div>
      <div id="atk-stat" class="stat-cell">
        <div class="stat-name">
          <p>ATK</p>
        </div>
        <div class="stat-bar">
          <div class="stat-value">
            <p>999</p>
          </div>
          <div class="container">
            <div class="progress2 progress-moved">
              <div class="progress-bar2"></div>
            </div>
          </div>
        </div>
      </div>
      <div id="def-stat" class="stat-cell">
        <div class="stat-name">
          <p>DEF</p>
        </div>
        <div class="stat-bar">
          <div class="stat-value">
            <p>999</p>
          </div>
          <div class="container">
            <div class="progress2 progress-moved">
              <div class="progress-bar2"></div>
            </div>
          </div>
        </div>
      </div>
      <div id="satk-stat" class="stat-cell">
        <div class="stat-name">
          <p>SATK</p>
        </div>
        <div class="stat-bar">
          <div class="stat-value">
            <p>999</p>
          </div>
          <div class="container">
            <div class="progress2 progress-moved">
              <div class="progress-bar2"></div>
            </div>
          </div>
        </div>
      </div>
      <div id="sdef-stat" class="stat-cell">
        <div class="stat-name">
          <p>SDEF</p>
        </div>
        <div class="stat-bar">
          <div class="stat-value">
            <p>999</p>
          </div>
          <div class="container">
            <div class="progress2 progress-moved">
              <div class="progress-bar2"></div>
            </div>
          </div>
        </div>
      </div>
      <div id="spd-stat" class="stat-cell">
        <div class="stat-name">
          <p>SPD</p>
        </div>
        <div class="stat-bar">
          <div class="stat-value">
            <p>999</p>
          </div>
          <div class="container">
            <div class="progress2 progress-moved">
              <div class="progress-bar2"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</div>`;

  //render the data into the details.html page
  const pokemonName = document.querySelector("#pokemon-name");
  const pokemonId = document.querySelector("#pokemon-id");
  const pokemonPrevious = document.querySelector("#previous-pokemon");
  const pokemonNext = document.querySelector("#next-pokemon");
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
  const pPokemonName = document.createElement("p");
  pPokemonName.textContent = capitalizeFirstLetter(data.name);
  pokemonName.appendChild(pPokemonName);

  const pPokemonId = document.createElement("p");
  pPokemonId.textContent = `#${padWithLeadingZeros(data.id, 3)}`;
  pokemonId.appendChild(pPokemonId);
  pokemonPrevious.addEventListener("click", () => {
    window.location.href = `details.html?id=${data.id - 1}`;
  });
  pokemonNext.addEventListener("click", () => {
    window.location.href = `details.html?id=${data.id + 1}`;
  });
  pokemonImg.src = data.sprites.other.dream_world.front_default;

  for (let index = 0; index < data.types.length; index++) {
    const currTypeName = data.types[index].type.name;

    const currTypeElement = document.createElement("p");
    currTypeElement.textContent = capitalizeFirstLetter(currTypeName);
    pokemonTypeContainer.appendChild(currTypeElement);
  }

  pokemonWeight.textContent = `Weight: ${data.weight} kg`;
  pokemonHeight.textContent = `Height: ${data.height} m`;

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
