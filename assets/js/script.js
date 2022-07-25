async function getAllPokemons() {
  const resp = await fetch("https://pokeapi.co/api/v2/pokemon");
  const data = await resp.json();

  data.results.forEach(async function (item) {
    const respPoke = await fetch(item.url);
    const dataPoke = await respPoke.json();

    console.log(dataPoke);
  });
}

getAllPokemons();
