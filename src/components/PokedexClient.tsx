"use client";

import { useState } from "react";
import { pokemonList, typeColors, type Pokemon } from "@/data/pokemon";
import { cn } from "@/lib/utils";

function formatPokemonId(id: number): string {
  return `#${String(id).padStart(3, "0")}`;
}

export default function PokedexClient() {
  const [selected, setSelected] = useState<Pokemon>(pokemonList[0]);

  return (
    <div className="flex h-screen">
      {/* Left Column – Pokémon List */}
      <aside className="w-64 shrink-0 border-r border-gray-200 overflow-y-auto bg-gray-50">
        <div className="p-4 border-b border-gray-200">
          <h1 className="text-xl font-bold tracking-tight">Pokédex</h1>
        </div>
        <ul className="py-2">
          {pokemonList.map((pokemon) => (
            <li key={pokemon.id}>
              <button
                onClick={() => setSelected(pokemon)}
                className={cn(
                  "w-full text-left px-4 py-3 flex items-center gap-3 transition-colors hover:bg-gray-100",
                  selected.id === pokemon.id &&
                    "bg-gray-900 text-white hover:bg-gray-900"
                )}
              >
                <span
                  className={cn(
                    "text-xs w-8 shrink-0",
                    selected.id === pokemon.id
                      ? "text-gray-400"
                      : "text-gray-400"
                  )}
                >
                  {formatPokemonId(pokemon.id)}
                </span>
                <span className="font-medium">{pokemon.name}</span>
              </button>
            </li>
          ))}
        </ul>
      </aside>

      {/* Right Column – Bio Section */}
      <main className="flex-1 overflow-y-auto p-8 bg-white">
        <div className="max-w-xl rounded-lg border border-gray-200 shadow-sm">
          <div className="p-6 pb-3 flex items-center gap-3">
            <span className="text-sm text-gray-400">
              {formatPokemonId(selected.id)}
            </span>
            <h2 className="text-3xl font-semibold tracking-tight">
              {selected.name}
            </h2>
          </div>
          <div className="p-6 pt-3 space-y-6">
            {/* Type */}
            <div className="flex flex-col gap-1">
              <span className="text-xs font-medium text-gray-400 uppercase tracking-wide">
                Type
              </span>
              <div className="flex gap-2 flex-wrap">
                {selected.type.map((t) => (
                  <span
                    key={t}
                    className={cn(
                      "inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold",
                      typeColors[t] ?? "bg-gray-300 text-black"
                    )}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Category */}
            <div className="flex flex-col gap-1">
              <span className="text-xs font-medium text-gray-400 uppercase tracking-wide">
                Category
              </span>
              <span className="text-base">{selected.category}</span>
            </div>

            {/* Height */}
            <div className="flex flex-col gap-1">
              <span className="text-xs font-medium text-gray-400 uppercase tracking-wide">
                Height
              </span>
              <span className="text-base">{selected.height}</span>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
