"use client";

import Link from "next/link";
import { Phone, UtensilsCrossed } from "lucide-react";
import { business } from "@/data/business";

export function FloatingActions() {
  return (
    <>
      {/* Mobile call button */}
      <a
        href={business.phoneHref}
        className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-ink text-ivory shadow-lg sm:hidden"
        aria-label="Call Little Red Bistro"
      >
        <Phone className="h-5 w-5" />
      </a>

      {/* Desktop order-now pill */}
      <Link
        href="/menu"
        className="fixed bottom-6 right-6 z-40 hidden items-center gap-2 rounded-full bg-brick px-6 py-3.5 text-sm font-semibold text-ivory shadow-xl shadow-brick/30 transition-transform hover:-translate-y-0.5 sm:flex"
      >
        <UtensilsCrossed className="h-4 w-4" />
        View Menu
      </Link>
    </>
  );
}
