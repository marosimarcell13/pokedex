import { createInterface, type Interface } from "readline";
import { getCommands } from "./commads.js";
import { PokeAPI, Pokemon } from "./pokeapi.js";

export type CLICommand = {
    name: string;
    description: string;
    callback: (state: State, ...args: string[]) => Promise<void>;
};

export type State = {
    readline: Interface;
    commands: Record<string, CLICommand>;
    pokeApi: PokeAPI,
    nextLocationURL: string,
    prevLocationURL: string,
    caughtPokemon: Record<string, Pokemon>
};

export function initState(cacheInterval: number) {
    const rl = createInterface({
        input: process.stdin,
        output: process.stdout,
        prompt: "Pokedex > ",
    });

    return {
        readline: rl,
        commands: getCommands(),
        pokeApi: new PokeAPI(cacheInterval),
        nextLocationURL: "",
        prevLocationURL: "",
        caughtPokemon: {}
    }
};
