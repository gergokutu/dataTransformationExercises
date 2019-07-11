const getPokeNames = (pokemons) => {
    return pokemons.map(pokemon => pokemon.name)
}

const getPokemonById = (pokemons, id) => {

    // FIRST STEP
    // check things:
    // 1. is this function getting called
    // console.log('hi')
    // 2. do I have the correct data
    // console.log('POKEMONS', pokemons.length)
    // console.log('ID', id)

    // STEP TWO
    // choose your approach
    // we have [{}, {}, {}]
    // we use find

    // STEP THREE
    // write a iterator function that console logs your pokemons one by one
    // 1. pokemons.iterator
    // 2. write an empty arrow function, check synthax » console.log('Hello')
    // 3. put in a paramater, use a singular version (pokemon)

    // STEP FOUR
    // write the logic
    // console.log the data you want to use (pokemon.id, id)
    // write the logic using if / other methods
    // CHECK YOURSELF (console.log)
    // return the correct results from the function
    // CHECK YOURSELF (console.log) » the result of the function, the right pokemon

    // GREEN (test)

    // STEP FIVE
    // return result from the function
    // CHECK YOURSELF

    // REFACTOR

    // STEP FIVE
    // clean up (now just comment out)
    // CHECK YOURSELF 

    // const pokemon = pokemons.find((pokemon) => {
    //     // should return true if ...
    //     // if pokemon.id matches id (param of the function)
    //     // console.log(pokemon.id, id)
    //     if (pokemon.id === id) {
    //         return true
    //     } else {
    //         return false
    //     }
    // })
    // // console.log(pokemon)

    // return pokemon

    // cleaned up version
    return pokemons.find(pokemon => id === pokemon.id)
}


const getRarePokemons = (pokemons) => {
    // we have to export everything we would like to use »
    // put getRarePokemons inside modulo.exports to have it called
    // do this before the console.log('hi')...
    // console.log('hi')
    // console.log('POKEMONS', pokemons.length)

    // const rarePokemons = pokemons.filter((rarepokemon) => {
    //     console.log('empty arrow')
    //     console.log(rarepokemon.spawn_chance)
    //     if (rarepokemon.spawn_chance < 0.1) {
    //         return true
    //     } else {
    //         return false
    //     }
    // })
    // console.log(rarePokemons)
    // return rarePokemons
    return pokemons.filter(rarepokemon => rarepokemon.spawn_chance < 0.1)
}

// pokemon.weight.slice(' ')[0] » takes the number as a string e.g. '38'
// the [1] is the 'kg'...
// it should be still parsed to a number...
// parseFloat(pokemon.weight) does it in one step...
const getMidSizedPokemon = pokemons => pokemons.find(pokemon => parseFloat(pokemon.weight) === 38)
// 7. extra: apply simplier arrow function synthax
// 6.a extra: if you apply pokemon.weight === '38.0 kg' insted of
// 6.b parseFloat(pokemon.weight) === 38 » it's a bit more shorter
// 4. get rid of the midSizedPokemon and return directly the pokemons.find... 
// 3. apply simplier arrow function synthax
// 2.a you can get rid of the plus variable » pokemonWeight »
// 2.b and put it directly into the return statement
// const pokemonWeight = parseFloat(pokemon.weight)
// 1. you can rid of the if statement if you put the condition into the return statement
// if (pokemonWeight === 38) {
//     return true
// }

const getAdultPokemons = (pokemons) => {
    return pokemons.filter(pokemon => pokemon.egg === "Not in Eggs")
}

const getPokemonImages = (pokemons) => {
    return pokemons.map(pokemon => pokemon.map)
}

module.exports = {
    getPokeNames,
    getPokemonById,
    getRarePokemons,
    getMidSizedPokemon,
    getAdultPokemons,
    getPokemonImages
}