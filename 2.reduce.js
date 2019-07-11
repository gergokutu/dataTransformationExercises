const calculateTotalPokemonWeight = (pokemons) => {
    return pokemons.reduce((totalWeight, currentPokemon) => {
        return totalWeight + parseFloat(currentPokemon.weight)
    }, 0)
}

const calculateAverageSpawnChance = (pokemons) => {
    // console.log('POKEMONS:', pokemons)
    // 1. add up all the spawn_chances of the pokemon
    const totalSpawnChance = pokemons.reduce((accumulator, currentValue) => {
        // console.log('inside totalSpawnChances')
        // console.log('accumulator:', accumulator)
        // console.log('currentValue:', currentValue.spawn_chance)
        return accumulator + currentValue.spawn_chance
    }, 0)
    // 2. divide by the number of pokemon
    const averageSpawnChance = totalSpawnChance / pokemons.length 
    // 3. return the value from the screen
    // console.log(averageSpawnChance)
    return averageSpawnChance
}

module.exports = {
    calculateTotalPokemonWeight,
    calculateAverageSpawnChance
}