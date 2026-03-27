export interface Pokemon {
  id: number;
  name: string;
  type: string[];
  category: string;
  height: string;
}

export const pokemonList: Pokemon[] = [
  {
    id: 1,
    name: "Bulbasaur",
    type: ["Grass", "Poison"],
    category: "Seed Pokémon",
    height: "0.7 m",
  },
  {
    id: 2,
    name: "Ivysaur",
    type: ["Grass", "Poison"],
    category: "Seed Pokémon",
    height: "1.0 m",
  },
  {
    id: 3,
    name: "Venusaur",
    type: ["Grass", "Poison"],
    category: "Seed Pokémon",
    height: "2.0 m",
  },
  {
    id: 4,
    name: "Charmander",
    type: ["Fire"],
    category: "Lizard Pokémon",
    height: "0.6 m",
  },
  {
    id: 5,
    name: "Charmeleon",
    type: ["Fire"],
    category: "Flame Pokémon",
    height: "1.1 m",
  },
  {
    id: 6,
    name: "Charizard",
    type: ["Fire", "Flying"],
    category: "Flame Pokémon",
    height: "1.7 m",
  },
  {
    id: 7,
    name: "Squirtle",
    type: ["Water"],
    category: "Tiny Turtle Pokémon",
    height: "0.5 m",
  },
  {
    id: 8,
    name: "Wartortle",
    type: ["Water"],
    category: "Turtle Pokémon",
    height: "1.0 m",
  },
  {
    id: 9,
    name: "Blastoise",
    type: ["Water"],
    category: "Shellfish Pokémon",
    height: "1.6 m",
  },
  {
    id: 25,
    name: "Pikachu",
    type: ["Electric"],
    category: "Mouse Pokémon",
    height: "0.4 m",
  },
  {
    id: 39,
    name: "Jigglypuff",
    type: ["Normal", "Fairy"],
    category: "Balloon Pokémon",
    height: "0.5 m",
  },
  {
    id: 52,
    name: "Meowth",
    type: ["Normal"],
    category: "Scratch Cat Pokémon",
    height: "0.4 m",
  },
  {
    id: 94,
    name: "Gengar",
    type: ["Ghost", "Poison"],
    category: "Shadow Pokémon",
    height: "1.5 m",
  },
  {
    id: 131,
    name: "Lapras",
    type: ["Water", "Ice"],
    category: "Transport Pokémon",
    height: "2.5 m",
  },
  {
    id: 143,
    name: "Snorlax",
    type: ["Normal"],
    category: "Sleeping Pokémon",
    height: "2.1 m",
  },
];

export const typeColors: Record<string, string> = {
  Fire: "bg-orange-500 text-white",
  Water: "bg-blue-500 text-white",
  Grass: "bg-green-500 text-white",
  Poison: "bg-purple-500 text-white",
  Electric: "bg-yellow-400 text-black",
  Ice: "bg-cyan-300 text-black",
  Flying: "bg-sky-400 text-white",
  Normal: "bg-gray-400 text-white",
  Ghost: "bg-indigo-600 text-white",
  Fairy: "bg-pink-400 text-white",
};
