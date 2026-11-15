import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import { JsonLd } from "@/components/JsonLd";
import { siteJsonLd } from "@/lib/seo/jsonld";
import { rootMetadata } from "@/lib/seo/metadata";
import { pageCopy } from "@/lib/seo/copy";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { BackToTop } from "@/components/layout/BackToTop";
import { FloatingActions } from "@/components/layout/FloatingActions";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata = rootMetadata({ title: pageCopy.home.title, description: pageCopy.home.description });

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col bg-cream text-ink">
        <JsonLd data={siteJsonLd()} />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <BackToTop />
        <FloatingActions />
      </body>
    </html>
  );
}
