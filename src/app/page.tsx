import { Hero } from "@/components/home/Hero";
import { pageMetadata } from "@/lib/seo/metadata";
import { pageCopy } from "@/lib/seo/copy";
import { Highlights } from "@/components/home/Highlights";
import { FeaturedMenu } from "@/components/home/FeaturedMenu";
import { AboutPreview } from "@/components/home/AboutPreview";
import { Testimonials } from "@/components/home/Testimonials";
import { GalleryPreview } from "@/components/home/GalleryPreview";
import { HoursLocation } from "@/components/home/HoursLocation";
import { CTASection } from "@/components/home/CTASection";

export const metadata = pageMetadata(pageCopy.home);

export default function Home() {
  return (
    <>
      <Hero />
      <Highlights />
      <FeaturedMenu />
      <AboutPreview />
      <Testimonials />
      <GalleryPreview />
      <HoursLocation />
      <CTASection />
    </>
  );
}
