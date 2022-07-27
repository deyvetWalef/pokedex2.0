const pokemonName = document.querySelector(".pokemon__name");
const pokemonNumber = document.querySelector(".pokemon__number");
const pokemonImage = document.querySelector(".pokemon__image");
const pokemonTypes = document.querySelector(".pokemon__type");
const pokemonDescription = document.querySelector(".pokemon_description");

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

    //Removendo o segundo type para usar css variados:
    s = pokemonTypes.innerHTML;
    console.log(s);

    s = s.split(" ")[0];

    if (s == "electric") {
      document.getElementById("pokemon__image").style.backgroundColor =
        "yellow";
      document.getElementById("btn-prev").style.backgroundColor = "yellow";
      document.getElementById("btn-next").style.backgroundColor = "yellow";
      document.getElementById("form").style.backgroundColor = "yellow";
      document.getElementById("search-btn").style.backgroundColor = "yellow";
    } else if (s == "grass") {
      document.getElementById("pokemon__image").style.backgroundColor =
        "MediumSeaGreen";
      document.getElementById("btn-prev").style.backgroundColor =
        "MediumSeaGreen";
      document.getElementById("btn-next").style.backgroundColor =
        "MediumSeaGreen";
      document.getElementById("form").style.backgroundColor = "MediumSeaGreen";
      document.getElementById("search-btn").style.backgroundColor =
        "MediumSeaGreen";
    } else if (s == "fire") {
      document.getElementById("pokemon__image").style.backgroundColor =
        "DarkOrange";
      document.getElementById("btn-prev").style.backgroundColor = "DarkOrange";
      document.getElementById("btn-next").style.backgroundColor = "DarkOrange";
      document.getElementById("form").style.backgroundColor = "DarkOrange";
      document.getElementById("search-btn").style.backgroundColor =
        "DarkOrange";
    } else if (s == "water" || s == "ice") {
      document.getElementById("pokemon__image").style.backgroundColor =
        "SkyBlue";
      document.getElementById("btn-prev").style.backgroundColor = "SkyBlue";
      document.getElementById("btn-next").style.backgroundColor = "SkyBlue";
      document.getElementById("form").style.backgroundColor = "SkyBlue";
      document.getElementById("search-btn").style.backgroundColor = "SkyBlue";
    } else if (s == "steel") {
      document.getElementById("pokemon__image").style.backgroundColor =
        "silver";
      document.getElementById("btn-prev").style.backgroundColor = "silver";
      document.getElementById("btn-next").style.backgroundColor = "silver";
      document.getElementById("form").style.backgroundColor = "silver";
      document.getElementById("search-btn").style.backgroundColor = "silver";
    } else if (s == "ground") {
      document.getElementById("pokemon__image").style.backgroundColor = "wheat";
      document.getElementById("btn-prev").style.backgroundColor = "wheat";
      document.getElementById("btn-next").style.backgroundColor = "wheat";
      document.getElementById("form").style.backgroundColor = "wheat";
      document.getElementById("search-btn").style.backgroundColor = "wheat";
    } else if (s == "rock") {
      document.getElementById("pokemon__image").style.backgroundColor =
        "DarkGray";
      document.getElementById("btn-prev").style.backgroundColor = "DarkGray";
      document.getElementById("btn-next").style.backgroundColor = "DarkGray";
      document.getElementById("form").style.backgroundColor = "DarkGray";
      document.getElementById("search-btn").style.backgroundColor = "DarkGray";
    } else if (s == "fairy") {
      document.getElementById("pokemon__image").style.backgroundColor =
        "Purple";
      document.getElementById("btn-prev").style.backgroundColor = "Purple";
      document.getElementById("btn-next").style.backgroundColor = "Purple";
      document.getElementById("form").style.backgroundColor = "Purple";
      document.getElementById("search-btn").style.backgroundColor = "Purple";
    } else if (s == "poison") {
      document.getElementById("pokemon__image").style.backgroundColor =
        "DarkMagenta";
      document.getElementById("btn-prev").style.backgroundColor = "DarkMagenta";
      document.getElementById("btn-next").style.backgroundColor = "DarkMagenta";
      document.getElementById("form").style.backgroundColor = "DarkMagenta";
      document.getElementById("search-btn").style.backgroundColor =
        "DarkMagenta";
    } else if (s == "bug") {
      document.getElementById("pokemon__image").style.backgroundColor = "Tan";
      document.getElementById("btn-prev").style.backgroundColor = "Tan";
      document.getElementById("btn-next").style.backgroundColor = "Tan";
      document.getElementById("form").style.backgroundColor = "Tan";
      document.getElementById("search-btn").style.backgroundColor = "Tan";
    } else if (s == "dragon") {
      document.getElementById("pokemon__image").style.backgroundColor =
        "MediumPurple";
      document.getElementById("btn-prev").style.backgroundColor =
        "MediumPurple";
      document.getElementById("btn-next").style.backgroundColor =
        "MediumPurple";
      document.getElementById("form").style.backgroundColor = "MediumPurple";
      document.getElementById("search-btn").style.backgroundColor =
        "MediumPurple";
    } else if (s == "psychic") {
      document.getElementById("pokemon__image").style.backgroundColor =
        "HotPink";
      document.getElementById("btn-prev").style.backgroundColor = "HotPink";
      document.getElementById("btn-next").style.backgroundColor = "HotPink";
      document.getElementById("form").style.backgroundColor = "HotPink";
      document.getElementById("search-btn").style.backgroundColor = "HotPink";
    } else if (s == "flying") {
      document.getElementById("pokemon__image").style.backgroundColor = "Plum";
      document.getElementById("btn-prev").style.backgroundColor = "Plum";
      document.getElementById("btn-next").style.backgroundColor = "Plum";
      document.getElementById("form").style.backgroundColor = "Plum";
      document.getElementById("search-btn").style.backgroundColor = "Plum";
    } else if (s == "fighting") {
      document.getElementById("pokemon__image").style.backgroundColor = "red";
      document.getElementById("btn-prev").style.backgroundColor = "red";
      document.getElementById("btn-next").style.backgroundColor = "red";
      document.getElementById("form").style.backgroundColor = "red";
      document.getElementById("search-btn").style.backgroundColor = "red";
    } else if (s == "normal") {
      document.getElementById("pokemon__image").style.backgroundColor =
        "OldLace";
      document.getElementById("btn-prev").style.backgroundColor = "NavajoWhite";
      document.getElementById("btn-next").style.backgroundColor = "NavajoWhite";
      document.getElementById("form").style.backgroundColor = "NavajoWhite";
      document.getElementById("search-btn").style.backgroundColor =
        "NavajoWhite";
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
    pokemonDescription.innerText = "";
  }
});

buttonNext.addEventListener("click", () => {
  searchPokemon += 1;
  pokemonDescription.innerText = "";
  renderPokemon(searchPokemon);
});

async function description() {
  if (pokemonDescription.innerText.length == 0) {
    pokemonImage.style.display = "none";
    const APIDes = await fetch(
      `https://pokeapi.co/api/v2/pokemon-species/${pokemonNumber.innerText}`
    );
    const dataDes = await APIDes.json();
    pokemonDescription.innerText = dataDes.flavor_text_entries[7].flavor_text;
  } else if (pokemonDescription.innerText.length > 0) {
    pokemonImage.style.display = "unset";
    pokemonDescription.innerText = "";
  }
}

renderPokemon(searchPokemon);
