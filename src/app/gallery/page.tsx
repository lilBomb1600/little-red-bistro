import { pageMetadata } from "@/lib/seo/metadata";
import { pageCopy } from "@/lib/seo/copy";
import { Container } from "@/components/ui/Container";
import { MasonryGallery } from "@/components/gallery/MasonryGallery";

export const metadata = pageMetadata(pageCopy.gallery);

export default function GalleryPage() {
  return (
    <div className="bg-cream pb-24 pt-32 sm:pt-40">
      <Container>
        <span className="mb-3 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-brick">
          <span className="h-px w-6 bg-brick" />
          Gallery
        </span>
        <h1 className="font-display text-balance text-4xl font-bold text-ink sm:text-5xl">A look inside</h1>
        <p className="mt-4 max-w-xl text-balance text-lg leading-relaxed text-ink-light">
          Fresh crêpes, hand-pulled espresso, and a sunny patio — this is Little Red Bistro.
        </p>

        <div className="mt-12">
          <MasonryGallery />
        </div>
      </Container>
    </div>
  );
}
