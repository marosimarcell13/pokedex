import { State } from "./state.js";

export async function commandPokedex(state: State): Promise<void> {
    const pokedex = state.caughtPokemon;
    
    console.log("Your pokedex:");
    for (const pokemon of Object.values(pokedex)) {
        console.log(` - ${pokemon.name}`);
    };
};