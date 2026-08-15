import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "left",
  light = false,
  className,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  light?: boolean;
  className?: string;
}) {
  return (
    <div className={cn(align === "center" && "mx-auto text-center", className)}>
      {eyebrow && (
        <span
          className={cn(
            "mb-3 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em]",
            light ? "text-gold" : "text-brick",
          )}
        >
          <span className={cn("h-px w-6", light ? "bg-gold" : "bg-brick")} />
          {eyebrow}
        </span>
      )}
      <h2
        className={cn(
          "font-display text-balance text-3xl font-semibold sm:text-4xl",
          light ? "text-cream" : "text-ink",
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p className={cn("mt-3 text-balance text-base leading-relaxed", light ? "text-cream/70" : "text-ink-light")}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
