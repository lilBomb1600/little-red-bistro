"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, MapPin, UtensilsCrossed } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { StarRating } from "@/components/ui/StarRating";
import { SmartImage } from "@/components/ui/SmartImage";
import { business } from "@/data/business";
import { galleryImages } from "@/data/gallery";

const heroImage = galleryImages.find((g) => g.id === "sweet-crepe")!;

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-cream pb-20 pt-32 sm:pb-28 sm:pt-40">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-brick/10 blur-3xl" />
        <div className="absolute -right-16 top-1/3 h-80 w-80 rounded-full bg-sage/10 blur-3xl" />
      </div>

      <Container className="grid items-center gap-16 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-ink/10 bg-ivory/70 px-4 py-2 text-xs font-medium text-ink-light"
          >
            <StarRating rating={business.rating} size={13} />
            <span>
              {business.rating.toFixed(1)} · {business.reviewCount} {business.reviewSource} reviews
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-balance text-5xl font-bold leading-[1.05] text-ink sm:text-6xl lg:text-[4.1rem]"
          >
            Your neighborhood
            <br />
            <span className="text-brick">fix, since day one.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 max-w-lg text-balance text-lg leading-relaxed text-ink-light"
          >
            Sweet & savory crêpes, panini, flatbreads, and organic single-estate coffee — made fresh, served warm, on
            a sunny patio in Pleasant Hill.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <Link
              href="/menu"
              className="group flex items-center gap-2 rounded-full bg-brick px-7 py-3.5 text-sm font-semibold text-ivory shadow-lg shadow-brick/25 transition-all hover:-translate-y-0.5 hover:bg-brick-dark"
            >
              View Full Menu
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
            <Link
              href="/about"
              className="flex items-center gap-2 rounded-full border border-ink/15 px-7 py-3.5 text-sm font-semibold text-ink transition-colors hover:border-brick hover:text-brick"
            >
              <UtensilsCrossed className="h-4 w-4" />
              Our Story
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-10 flex items-center gap-2 text-sm text-ink-light"
          >
            <MapPin className="h-4 w-4 text-brick" />
            <a href={business.mapsHref} target="_blank" rel="noreferrer" className="hover:text-brick">
              {business.address.full}
            </a>
          </motion.div>
        </div>

        <div className="relative hidden lg:block">
          <div className="relative aspect-square overflow-hidden rounded-[2rem] shadow-2xl shadow-ink/15">
            <SmartImage src={heroImage.src} alt={heroImage.alt} ready={heroImage.ready} icon="photo" sizes="560px" priority />
          </div>
          <div className="absolute -left-8 top-1/4 rounded-2xl bg-ivory/95 px-5 py-4 shadow-xl backdrop-blur">
            <p className="font-display text-2xl font-bold text-brick">{business.rating.toFixed(1)}★</p>
            <p className="text-xs uppercase tracking-widest text-ink-light">Pleasant Hill, CA</p>
          </div>
        </div>
      </Container>
    </section>
  );
}
