import Link from "next/link";

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link href="/" className="flex flex-col leading-none">
      <span className={`font-display text-2xl font-bold ${light ? "text-cream" : "text-ink"}`}>
        Little <span className="text-brick">Red</span> Bistro
      </span>
      <span className={`mt-0.5 text-[10px] font-medium uppercase tracking-[0.25em] ${light ? "text-cream/60" : "text-ink-light/70"}`}>
        Your Neighborhood Fix
      </span>
    </Link>
  );
}
