const BASE_URL = "https://pokeapi.co/api/v2/pokemon";
const MAX_POKEMON = 151;
const body = document.querySelector("body");
const pokemonTypes = {
  normal: "#AAA67F",
  fire: "#F57D31",
  water: "#6493EB",
  electric: "#F9CF30",
  grass: "#74CB48",
  ice: "#9AD6DF",
  fighting: "#C12239",
  poison: "#A43E9E",
  ground: "#DEC16B",
  flying: "#A891EC",
  psychic: "#FB5584",
  bug: "#A7B723",
  rock: "#B69E31",
  ghost: "#70559B",
  dragon: "#7037FF",
  dark: "#75574C",
  steel: "#B7B9D0",
  fairy: "#E69EAC",
};

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
          </div>
          <p class="measurement">Weight</p>
        </div>
        <div class="pokemon-stat">
          <div id="height" class="img-stat">
            <div id="ruler" class="img-container">
              <img src="./assetsv2/pokemonHeight.svg" alt="" />
            </div>
          </div>
          <p class="measurement">Height</p>
        </div>
        <div id="pokemon-abilties">
          <div class="ability">
          </div>
          <p class="measurement">Moves</p>
        </div>
      </div>
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
          <div class="stat-value"></div>
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
          <div class="stat-value"></div>
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
          <div class="stat-value"></div>
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
          <div class="stat-value"></div>
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
          <div class="stat-value"></div>
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
          <div class="stat-value"></div>
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
  const returnArrow = document.querySelector(".arrow-back");
  const pokemonName = document.querySelector("#pokemon-name");
  const pokemonId = document.querySelector("#pokemon-id");
  const pokemonPrevious = document.querySelector("#previous-pokemon");
  const pokemonNext = document.querySelector("#next-pokemon");
  const pokemonImg = document.querySelector("#pokemon-image img");
  const pokemonTypeContainer = document.querySelector("#pokemon-type");
  const pokemonWeight = document.querySelector("#weight");
  const pokemonHeight = document.querySelector("#height");
  const pokemonAbilities = document.querySelector(".ability");
  const pokemonDescription = document.querySelector("#pokemon-description");
  const pokemonHpElements = document.querySelectorAll(".stat-value");

  //set the values of the elements

  returnArrow.addEventListener("click", () => {
    window.location.href = `index.html`;
  });

  const pPokemonName = document.createElement("p");
  pPokemonName.textContent = capitalizeFirstLetter(data.name);
  pokemonName.appendChild(pPokemonName);

  const pPokemonId = document.createElement("p");
  pPokemonId.textContent = `#${padWithLeadingZeros(data.id, 3)}`;
  pokemonId.appendChild(pPokemonId);
  pokemonPrevious.addEventListener("click", () => {
    if (data.id - 1 === 0) {
      window.location.href = `details.html?id=${MAX_POKEMON}`;
    } else {
      window.location.href = `details.html?id=${data.id - 1}`;
    }
  });
  pokemonNext.addEventListener("click", () => {
    if (data.id + 1 > MAX_POKEMON) {
      window.location.href = `details.html?id=${data.id - MAX_POKEMON + 1}`;
    } else {
      window.location.href = `details.html?id=${data.id + 1}`;
    }
  });
  pokemonImg.src = data.sprites.other.dream_world.front_default;

  for (let index = 0; index < data.types.length; index++) {
    const currTypeName = data.types[index].type.name;

    const currTypeElement = document.createElement("p");
    currTypeElement.textContent = capitalizeFirstLetter(currTypeName);
    currTypeElement.style.backgroundColor = pokemonTypes[currTypeName];
    pokemonTypeContainer.appendChild(currTypeElement);
  }

  const pPokemonWeight = document.createElement("p");
  pPokemonWeight.textContent = `${(data.weight/10).toFixed(1)} kg`;
  pokemonWeight.appendChild(pPokemonWeight);

  const pPokemonHeight = document.createElement("p");
  pPokemonHeight.textContent = `${(data.height*10).toFixed(1)} cm`;
  pokemonHeight.appendChild(pPokemonHeight);
  // pokemonHeight.textContent = `${data.height} m`;

  //loop through the types array and add the types to the pokemonTypes element
  for (let index = 0; index < data.abilities.length; index++) {
    const currTypeName = data.abilities[index].ability.name;
    console.log(currTypeName);

    const currTypeElement = document.createElement("p");
    currTypeElement.textContent = capitalizeFirstLetter(currTypeName);
    pokemonAbilities.appendChild(currTypeElement);
  }

  // const pPokemonDescription = document.createElement("p");
  // pPokemonDescription.textContent = data.species.name;
  // pokemonDescription.appendChild(pPokemonDescription);

  debugger;
  for (let index = 0; index < pokemonHpElements.length; index++) {
    const pPokemonStat = document.createElement("p");
    pPokemonStat.textContent = data.stats[index].base_stat;
    pokemonHpElements[index].appendChild(pPokemonStat);

    // console.log(pokemonHpElements[index]);

    const pokemonBarContainerElement =
      pokemonHpElements[index].nextElementSibling.querySelector(
        `.progress-bar2`
      );

    console.log(pokemonBarContainerElement);

    pokemonBarContainerElement.style.width = `${
      data.stats[index].base_stat / 2.55
    }%`;

    const style = document.createElement("style");

    style.innerHTML = `
    @keyframes progressAnimation${index} {
      0% { width: 0%; }
      100% { width: ${
        data.stats[index].base_stat / 2.55
      }%; } /* Change this to the width you want */
    }
    `;

    document.head.appendChild(style);

    pokemonBarContainerElement.style.animationName = `progressAnimation${index}`;
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
