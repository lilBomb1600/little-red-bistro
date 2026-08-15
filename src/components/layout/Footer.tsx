import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/layout/Logo";
import { business } from "@/data/business";

export function Footer() {
  return (
    <footer className="border-t border-ink/10 bg-ivory pb-10 pt-16">
      <Container className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <Logo />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-ink-light">
            Sweet & savory crêpes, panini, flatbreads, and organic single-estate coffee in Pleasant Hill, CA.
          </p>
        </div>

        <div>
          <h4 className="font-display text-sm font-semibold uppercase tracking-widest text-ink">Explore</h4>
          <ul className="mt-4 space-y-2.5 text-sm text-ink-light">
            <li><Link href="/menu" className="hover:text-brick">Menu</Link></li>
            <li><Link href="/gallery" className="hover:text-brick">Gallery</Link></li>
            <li><Link href="/about" className="hover:text-brick">About</Link></li>
            <li><Link href="/contact" className="hover:text-brick">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-sm font-semibold uppercase tracking-widest text-ink">Visit</h4>
          <ul className="mt-4 space-y-2.5 text-sm text-ink-light">
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brick" />
              {business.address.full}
            </li>
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4 shrink-0 text-brick" />
              <a href={business.phoneHref} className="hover:text-brick">{business.phone}</a>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4 shrink-0 text-brick" />
              <a href={`mailto:${business.email}`} className="hover:text-brick">{business.email}</a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-sm font-semibold uppercase tracking-widest text-ink">Hours</h4>
          <ul className="mt-4 space-y-1.5 text-sm text-ink-light">
            <li>Mon – Fri: 8am – 4pm</li>
            <li>Sat – Sun: 9am – 4pm</li>
          </ul>
        </div>
      </Container>

      <Container className="mt-12 border-t border-ink/10 pt-6 text-xs text-ink-light/70">
        © {new Date().getFullYear()} Little Red Bistro. All rights reserved.
      </Container>
    </footer>
  );
}
