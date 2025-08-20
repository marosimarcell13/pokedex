import { State } from "./state.js";

export async function commandInspect(state: State, ...args: string[]): Promise<void> {
    if (args.length !== 1) {
        throw new Error("you must provide pokemon name");
    };

    const name = args[0];

    if (!(name in state.caughtPokemon)) {
        console.log("you have not caught that pokemon");
        return;
    };

    const pokemon = state.caughtPokemon[name];
    console.log(`Name: ${name}`);
    console.log(`Height: ${pokemon.height}`);
    console.log(`Weight: ${pokemon.weight}`);
    console.log("Stats:");
    for (const stat of pokemon.stats) {
      console.log(`  -${stat.stat.name}: ${stat.base_stat}`);
    };
    console.log("Types:");
    for (const typeInfo of pokemon.types) {
      console.log("  -", typeInfo.type.name);
    };
};