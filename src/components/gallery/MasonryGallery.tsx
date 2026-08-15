"use client";

import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { SmartImage } from "@/components/ui/SmartImage";
import { galleryImages } from "@/data/gallery";

const ratios = ["aspect-[3/4]", "aspect-square", "aspect-[4/5]", "aspect-[3/4]"];

export function MasonryGallery() {
  const [index, setIndex] = useState(-1);
  const readyImages = galleryImages.filter((g) => g.ready);

  return (
    <>
      <div className="columns-2 gap-4 sm:columns-3 lg:columns-4 [&>*]:mb-4">
        {galleryImages.map((img, i) => {
          const readyIndex = readyImages.findIndex((g) => g.id === img.id);
          return (
            <button
              key={img.id}
              onClick={() => img.ready && setIndex(readyIndex)}
              disabled={!img.ready}
              className={`group relative block w-full overflow-hidden rounded-2xl ${ratios[i % ratios.length]} ${img.ready ? "cursor-zoom-in" : "cursor-default"}`}
            >
              <SmartImage
                src={img.src}
                alt={img.alt}
                ready={img.ready}
                sizes="(min-width: 1024px) 300px, 45vw"
                className="transition-transform duration-700 group-hover:scale-105"
              />
            </button>
          );
        })}
      </div>

      <Lightbox
        open={index >= 0}
        close={() => setIndex(-1)}
        index={index}
        slides={readyImages.map((g) => ({ src: g.src, alt: g.alt }))}
      />
    </>
  );
}
