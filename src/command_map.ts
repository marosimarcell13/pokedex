import { State } from "./state.js";

export async function commandMapForward(state: State) {
    const locations = await state.pokeApi.fetchLocations(state.nextLocationURL);
    state.nextLocationURL = locations.next;
    state.prevLocationURL = locations.previous;

    for (const loc of locations.results) {
        console.log(loc.name);
    }
}

export async function commandMapBack(state: State) {
    const locations = await state.pokeApi.fetchLocations(state.prevLocationURL);
    state.nextLocationURL = (locations.next);
    state.prevLocationURL = (locations.previous);
  
    for (const loc of locations.results) {
        console.log(loc.name);
    }
} 