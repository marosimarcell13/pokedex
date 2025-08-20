import { createInterface, type Interface } from "readline";
import { getCommands } from "./commads.js";
import { PokeAPI } from "./pokeapi.js";

export type CLICommand = {
    name: string;
    description: string;
    callback: (state: State) => Promise<void>;
};

export type State = {
    readline: Interface;
    commands: Record<string, CLICommand>;
    pokeApi: PokeAPI,
    nextLocationURL: string,
    prevLocationURL: string,
};

export function initState() {
    const rl = createInterface({
        input: process.stdin,
        output: process.stdout,
        prompt: "Pokedex > ",
    });

    const pokeApi = new PokeAPI();

    return {
        readline: rl,
        commands: getCommands(),
        pokeApi: pokeApi,
        nextLocationURL: "",
        prevLocationURL: ""
    }
};
