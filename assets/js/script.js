const pokemonName = document.querySelector(".pokemon__name");
const pokemonNumber = document.querySelector(".pokemon__number");
const pokemonImage = document.querySelector(".pokemon__image");
const pokemonTypes = document.querySelector(".pokemon__type");
const pokemonDescription = document.querySelector(".pokemon__description");
var s;

const form = document.querySelector(".form");
const input = document.querySelector(".input__search");
const buttonPrev = document.querySelector(".btn-prev");
const buttonNext = document.querySelector(".btn-next");

let searchPokemon = 1;

const fetchPokemon = async (pokemon) => {
  const APIResponse = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${pokemon}`
  );

  if (APIResponse.status === 200) {
    const data = await APIResponse.json();
    return data;
  }
};

const renderPokemon = async (pokemon) => {
  pokemonName.innerHTML = "Loading...";
  pokemonNumber.innerHTML = "";
  pokemonTypes.innerHTML = "";

  const data = await fetchPokemon(pokemon);

  if (data) {
    pokemonImage.style.display = "block";
    pokemonName.innerHTML = data.name;
    pokemonNumber.innerHTML = data.id;
    pokemonTypes.innerHTML = data.types
      .map((typeInfo) => typeInfo.type.name)
      .join(" | ");
    console.log(pokemonTypes);
    console.log(pokemon.Types);

    s = pokemonTypes.innerHTML;
    console.log(s);

    s = s.split(" ")[0];

    if (s == "electric") {
      document.getElementById("pokemon__image").style.backgroundColor =
        "yellow";
    } else if (s == "grass") {
      document.getElementById("pokemon__image").style.backgroundColor =
        "MediumSeaGreen";
    } else if (s == "fire") {
      document.getElementById("pokemon__image").style.backgroundColor =
        "DarkOrange";
    } else if (s == "water" || s == "ice") {
      document.getElementById("pokemon__image").style.backgroundColor =
        "SkyBlue";
    } else if (s == "steel") {
      document.getElementById("pokemon__image").style.backgroundColor =
        "silver";
    } else if (s == "ground") {
      document.getElementById("pokemon__image").style.backgroundColor = "wheat";
    } else if (s == "rock") {
      document.getElementById("pokemon__image").style.backgroundColor =
        "DarkGray";
    } else if (s == "fairy") {
      document.getElementById("pokemon__image").style.backgroundColor =
        "Purple";
    } else if (s == "poison") {
      document.getElementById("pokemon__image").style.backgroundColor =
        "DarkMagenta";
    } else if (s == "bug") {
      document.getElementById("pokemon__image").style.backgroundColor = "Tan";
    } else if (s == "dragon") {
      document.getElementById("pokemon__image").style.backgroundColor =
        "MediumPurple";
    } else if (s == "psychic") {
      document.getElementById("pokemon__image").style.backgroundColor =
        "HotPink";
    } else if (s == "flying") {
      document.getElementById("pokemon__image").style.backgroundColor = "Plum";
    } else if (s == "fighting") {
      document.getElementById("pokemon__image").style.backgroundColor = "red";
    } else if (s == "normal") {
      document.getElementById("pokemon__image").style.backgroundColor =
        "OldLace";
    }
    pokemonImage.src =
      data["sprites"]["other"]["official-artwork"]["front_default"];
    input.value = "";
    searchPokemon = data.id;
  } else {
    pokemonImage.style.display = "none";
    pokemonName.innerHTML = "Pokemon não existe";
    pokemonNumber.innerHTML = "";
    pokemonTypes.innerHTML = "";
  }
};

form.addEventListener("submit", (event) => {
  event.preventDefault();
  renderPokemon(input.value.toLowerCase());
});

buttonPrev.addEventListener("click", () => {
  if (searchPokemon > 1) {
    searchPokemon -= 1;
    renderPokemon(searchPokemon);
  }
});

buttonNext.addEventListener("click", () => {
  searchPokemon += 1;
  renderPokemon(searchPokemon);
});

renderPokemon(searchPokemon);
