let pokemonOl = document.getElementById('pokemons');
let btnPoke = document.getElementById('btnPoke');
let offset = 0;
let limit = 5;


function convertPokemonTypes(pokemonTypes) {
    return pokemonTypes.map((typeSlot) => `<li class="type">${typeSlot.type.name}</li>`)
}

function convertPokemonHtml(pokemon) {
    return `
    <li class="pokemon ${pokemon.type}">
    <span class="number">#${pokemon.number}</span>
    <span class="name">${pokemon.name}</span>

    <div class="detail">
        <ol class="types">
            ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
        </ol>

        <img src="${pokemon.photo}"
             alt="${pokemon.name}">
    </div>
</li>`
}

function carregarBtn(offset, limit){
    pokeApi.getPokemons().then((pokemons = []) => {

        let newList = pokemons.map(convertPokemonHtml)
        
        let newHtml = newList.join('')
        pokemonOl.innerHTML += newHtml
    
        // for (let i = 0; i < pokemonList.length; i++) {
        //     const pokemon = pokemonList[i];
        //     pokemonOl.innerHTML += convertPokemonHtml(pokemon) ;
            
        // }
    })
}

carregarBtn(offset, limit);


btnPoke.addEventListener('click', () => {
    offset += limit; 
    carregarBtn()
})