import { cn } from "@/lib/utils";

export function Badge({
  children,
  variant = "brick",
  className,
}: {
  children: React.ReactNode;
  variant?: "brick" | "sage" | "outline";
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-wide",
        variant === "brick" && "bg-brick text-ivory",
        variant === "sage" && "bg-sage text-ivory",
        variant === "outline" && "border border-ink/15 bg-ivory/80 text-ink-light",
        className,
      )}
    >
      {children}
    </span>
  );
}
