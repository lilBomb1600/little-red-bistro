import { pageMetadata } from "@/lib/seo/metadata";
import { pageCopy } from "@/lib/seo/copy";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { ContactForm } from "@/components/contact/ContactForm";
import { business } from "@/data/business";

export const metadata = pageMetadata(pageCopy.contact);

export default function ContactPage() {
  return (
    <div className="bg-cream pb-24 pt-32 sm:pt-40">
      <Container>
        <span className="mb-3 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-brick">
          <span className="h-px w-6 bg-brick" />
          Contact
        </span>
        <h1 className="font-display text-balance text-4xl font-bold text-ink sm:text-5xl">Get in touch</h1>
        <p className="mt-4 max-w-xl text-balance text-lg leading-relaxed text-ink-light">
          Questions, catering requests, or just want to say hi? We'd love to hear from you.
        </p>

        <div className="mt-14 grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brick/10 text-brick">
                <MapPin className="h-5 w-5" />
              </span>
              <div>
                <h3 className="font-display font-semibold text-ink">Address</h3>
                <p className="mt-1 text-sm text-ink-light">{business.address.line1}</p>
                <p className="text-sm text-ink-light">{business.address.line2}</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brick/10 text-brick">
                <Phone className="h-5 w-5" />
              </span>
              <div>
                <h3 className="font-display font-semibold text-ink">Phone</h3>
                <a href={business.phoneHref} className="mt-1 block text-sm text-ink-light hover:text-brick">
                  {business.phone}
                </a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brick/10 text-brick">
                <Mail className="h-5 w-5" />
              </span>
              <div>
                <h3 className="font-display font-semibold text-ink">Email</h3>
                <a href={`mailto:${business.email}`} className="mt-1 block text-sm text-ink-light hover:text-brick">
                  {business.email}
                </a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brick/10 text-brick">
                <Clock className="h-5 w-5" />
              </span>
              <div>
                <h3 className="font-display font-semibold text-ink">Hours</h3>
                <ul className="mt-1 space-y-1 text-sm text-ink-light">
                  <li>Mon – Fri: 8am – 4pm</li>
                  <li>Sat – Sun: 9am – 4pm</li>
                </ul>
              </div>
            </div>

            <div className="overflow-hidden rounded-3xl border border-ink/10">
              <iframe src={business.mapsEmbedSrc} className="h-64 w-full" loading="lazy" title="Little Red Bistro location map" />
            </div>
          </div>

          <ContactForm />
        </div>
      </Container>
    </div>
  );
}
