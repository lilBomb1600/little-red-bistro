"use client";

import { menu } from "@/data/menu";

export function CategoryNav() {
  return (
    <div className="sticky top-20 z-30 -mx-5 overflow-x-auto border-b border-ink/10 bg-cream/95 px-5 py-3 backdrop-blur sm:mx-0 sm:rounded-full sm:border sm:px-2 sm:py-2">
      <div className="flex w-max gap-1.5 sm:w-auto sm:flex-wrap sm:justify-center">
        {menu.map((c) => (
          <a
            key={c.id}
            href={`#${c.id}`}
            className="whitespace-nowrap rounded-full px-4 py-2 text-sm font-medium text-ink-light transition-colors hover:bg-brick/10 hover:text-brick"
          >
            {c.title}
          </a>
        ))}
      </div>
    </div>
  );
}
