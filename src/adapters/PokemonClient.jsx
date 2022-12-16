const axios = require('axios')

const PokemonClient = axios.create({
    baseURL: process.env.REACT_APP_POKEMON_API_BASE_URL,
    timeout: 10000,
});

/*
    @author: Arshdeep Singh
    @params: Id or name of pokemon
    @output: Pokemon
    @description: Get Pokemon by name or id
*/
export const getAPokemon = async (id) => {
    return await PokemonClient.get(`pokemon/${id}/`);
}

/*
    @author: Arshdeep Singh
    @params: Start and end ids of pokemon to fetch
    @output: Pokemons
    @description: Get Pokemon by name or id
*/
export const getPokemonInRange = async (start, end) => {
    const pokemons = []
    for(let id = start; id<=end; id++){
        try{
            const pokemon = await PokemonClient.get(`pokemon/${id}/`);
            console.log(pokemon)
            pokemons.push(pokemon);
        }catch(err){
            console.log(err, `Cannot fetch pokemon with id ${id}`)
        }
    }
    return pokemons; 
}

/*
    @author: Arshdeep Singh
    @params: Number of pokemons to fetch
    @output: Pokemons
    @description: Get Pokemon by name or id
*/
export const getNRandomPokemons = async (count) => {
    const pokemonReqs = []
    for(let itr = 0; itr<count; itr++){
        const id = Math.floor(Math.random() * 100)+1
        try{
            pokemonReqs.push(PokemonClient.get(`pokemon/${id}/`))
        }catch(err){
            console.log(err, `Cannot fetch pokemon with id ${id}`)
        }
    }
    return Promise.all(pokemonReqs); 
}