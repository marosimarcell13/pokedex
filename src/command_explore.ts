import { State } from "./state";

export async function commandExplore(state: State, ...args: string[]) {
    if (args.length !== 0) {
        throw new Error("you must provide location name");
    };

    const name = args[0];
    const location = await state.pokeApi.fetchLocation(name);

    console.log("Found Pokemon:")
    for (const encounter of location.pokemon_encounters) {
        console.log(` - ${encounter.pokemon.name}`);
    };
}
