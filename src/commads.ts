import { commandHelp } from "./command_help.js";
import { commandExit } from "./command_exit.js";
import { commandExplore } from "./command_explore.js";

import type { CLICommand } from "./state.js";
import { commandMapForward, commandMapBack } from "./command_map.js";

export function getCommands(): Record<string, CLICommand> {
  return {
    help: {
      name: "help",
      description: "Displays a help message",
      callback: commandHelp,
    },
    exit: {
      name: "exit",
      description: "Exit the Pokedex",
      callback: commandExit,
    },
    map: {
      name: "map",
      description: "Displays the name of the next 20 location",
      callback: commandMapForward,
    },
    mapb: {
      name: "mapb",
      description: "Displays the name of the previous 20 location",
      callback: commandMapBack,
    },
    explore: {
      name: "explore <location_name>",
      description: "Explore location",
      callback: commandExplore,
    },
  };
}
