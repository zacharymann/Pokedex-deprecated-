const pokeContainer = document.querySelector(`#container`);
const numOfPokemon = 150;

// The createPokeCard function creates a new card/div and adds the new card webpage/document inside of the the "container" div
function createPokeCard(pokemon){
  const pokeCard = document.createElement(`div`);
  pokeCard.classList.add(`pokemon`);
  pokeContainer.append(pokeCard);
  // Setting the innerHTML for new card using the data/object that is passed into the "pokemon" parameter. Also using the toUpperCase method on the pokemon name so it wil display in UPPERCASE text.
  pokeCard.innerHTML = `
  <div class="img-container">
    <img src="${pokemon.data.sprites.front_shiny}" alt"${pokemon.data.name}"/>
  </div>
  <h3 class="name">${pokemon.data.name.toUpperCase()}</h3>
  `;
}

// The getPokemonData function makes an Axios get request to the pokeAPI using the specific pokemon ID/Number then takes the returned data and passes it into the createPokemonCard function
async function getPokemonData(id) {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    const pokemonData = await axios.get(url);
    console.log(pokemonData);
    console.log(pokemonData.data.name);
    console.log(pokemonData.data.sprites.front_shiny);
    createPokeCard(pokemonData);
}

// The GetPokemon function loops through all the pokemon ID's and runs/executes the getPokemonData function for each ID
async function getPokemon(){
    for (i = 1; i <= numOfPokemon; i++){
        await getPokemonData(i);
    }
}
getPokemon();