import { Pokemon } from "./pokeapi.js";
import { State } from "./state.js";

export async function commandCatch(state: State, ...args: string[]): Promise<void> {
    if (args.length !== 1) {
        throw new Error("you must provide pokemon name");
    };

    const name = args[0];
    const pokemon: Pokemon = await state.pokeApi.fetchPokemon(name);

    console.log(`Throwing a Pokeball at ${name}...`);

    const res = Math.floor(Math.random() * pokemon.base_experience);
    if (res > 40) {
      console.log(`${pokemon.name} escaped!`);
      return;
    }

    console.log(`${pokemon.name} was caught!`);
    console.log("You may now inspect it with the inspect command.");
    state.caughtPokemon[pokemon.name] = pokemon;
}