"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, Phone, X } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/layout/Logo";
import { business } from "@/data/business";
import { cn } from "@/lib/utils";

const links = [
  { href: "/", label: "Home" },
  { href: "/menu", label: "Menu" },
  { href: "/gallery", label: "Gallery" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled ? "bg-cream/90 shadow-sm shadow-ink/5 backdrop-blur-lg" : "bg-transparent",
      )}
    >
      <Container className="flex h-20 items-center justify-between">
        <Logo />

        <nav className="hidden items-center gap-8 lg:flex">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="text-sm font-medium text-ink-light transition-colors hover:text-brick">
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-5 lg:flex">
          <a href={business.phoneHref} className="flex items-center gap-2 text-sm font-medium text-ink-light hover:text-brick">
            <Phone className="h-4 w-4" />
            {business.phone}
          </a>
          <Link
            href="/menu"
            className="rounded-full bg-brick px-6 py-3 text-sm font-semibold text-ivory shadow-md shadow-brick/25 transition-all hover:-translate-y-0.5 hover:bg-brick-dark"
          >
            View Menu
          </Link>
        </div>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((o) => !o)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-ink/10 text-ink lg:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </Container>

      {open && (
        <div className="border-t border-ink/10 bg-cream lg:hidden">
          <Container className="flex flex-col gap-1 py-4">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-base font-medium text-ink hover:bg-brick/5"
              >
                {l.label}
              </Link>
            ))}
            <a href={business.phoneHref} className="mt-2 flex items-center gap-2 rounded-lg px-3 py-3 text-base font-medium text-brick">
              <Phone className="h-4 w-4" />
              {business.phone}
            </a>
          </Container>
        </div>
      )}
    </header>
  );
}
