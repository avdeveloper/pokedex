"use client";

import { useState } from "react";
import { pokemonList, typeColors, type Pokemon } from "@/data/pokemon";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

function formatPokemonId(id: number): string {
  return `#${String(id).padStart(3, "0")}`;
}

export default function PokedexClient() {
  const [selected, setSelected] = useState<Pokemon>(pokemonList[0]);

  return (
    <div className="flex h-screen">
      {/* Left Column – Pokémon List */}
      <aside className="w-64 shrink-0 border-r border-border overflow-y-auto bg-secondary">
        <div className="p-4 border-b border-border">
          <h1 className="text-xl font-bold tracking-tight">Pokédex</h1>
        </div>
        <ul className="py-2">
          {pokemonList.map((pokemon) => (
            <li key={pokemon.id}>
              <button
                onClick={() => setSelected(pokemon)}
                className={cn(
                  "w-full text-left px-4 py-3 flex items-center gap-3 transition-colors hover:bg-accent hover:text-accent-foreground",
                  selected.id === pokemon.id &&
                    "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground"
                )}
              >
                <span className="text-xs text-muted-foreground w-8 shrink-0">
                  {formatPokemonId(pokemon.id)}
                </span>
                <span className="font-medium">{pokemon.name}</span>
              </button>
            </li>
          ))}
        </ul>
      </aside>

      {/* Right Column – Bio Section */}
      <main className="flex-1 overflow-y-auto p-8 bg-background">
        <Card className="max-w-xl">
          <CardHeader>
            <div className="flex items-center gap-3">
              <span className="text-sm text-muted-foreground">
                {formatPokemonId(selected.id)}
              </span>
              <CardTitle className="text-3xl">{selected.name}</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Type */}
            <div className="flex flex-col gap-1">
              <span className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
                Type
              </span>
              <div className="flex gap-2 flex-wrap">
                {selected.type.map((t) => (
                  <Badge
                    key={t}
                    className={cn(
                      "text-sm px-3 py-1 rounded-full border-transparent",
                      typeColors[t] ?? "bg-gray-300 text-black"
                    )}
                  >
                    {t}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Category */}
            <div className="flex flex-col gap-1">
              <span className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
                Category
              </span>
              <span className="text-base">{selected.category}</span>
            </div>

            {/* Height */}
            <div className="flex flex-col gap-1">
              <span className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
                Height
              </span>
              <span className="text-base">{selected.height}</span>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
