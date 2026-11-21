"use client";

import { useState, type ReactNode } from "react";
import { categories, type Category } from "@/lib/content";

type Item = { id: string; category: Category; card: ReactNode };

export function ThemeCatalog({ items }: { items: Item[] }) {
  const [selected, setSelected] = useState<Category | "Todos">("Todos");
  const available = categories.filter((category) => items.some((item) => item.category === category));
  const filters = ["Todos", ...available] as const;
  const showFilters = items.length >= 3 && available.length > 1;
  const visibleItems = selected === "Todos" ? items : items.filter((item) => item.category === selected);

  return (
    <>
      {showFilters && (
        <div className="filters" role="group" aria-label="Filtrar temas por categoria">
          {filters.map((filter) => (
            <button className="filter" key={filter} type="button" aria-pressed={selected === filter}
              aria-controls="theme-results" onClick={() => setSelected(filter)}>{filter}</button>
          ))}
        </div>
      )}
      <p className="sr-only" role="status">
        {visibleItems.length === 1 ? "1 tema exibido" : `${visibleItems.length} temas exibidos`}
      </p>
      <ul className="theme-grid" id="theme-results" data-reveal-group>
        {visibleItems.map(({ id, card }) => <li key={id} data-group-item>{card}</li>)}
      </ul>
    </>
  );
}
