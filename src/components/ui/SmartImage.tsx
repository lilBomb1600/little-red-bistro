"use client";

import Image from "next/image";
import { Coffee, ImageIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export function SmartImage({
  src,
  alt,
  ready,
  icon = "photo",
  sizes,
  priority,
  className,
}: {
  src: string;
  alt: string;
  ready: boolean;
  icon?: "photo" | "cup";
  sizes?: string;
  priority?: boolean;
  className?: string;
}) {
  if (!ready) {
    const Icon = icon === "cup" ? Coffee : ImageIcon;
    return (
      <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-cream-dark to-brick/10">
        <Icon className="h-8 w-8 text-ink-light/30" strokeWidth={1.5} />
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill
      sizes={sizes ?? "100vw"}
      priority={priority}
      className={cn("object-cover", className)}
    />
  );
}
