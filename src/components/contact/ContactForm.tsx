"use client";

import { useState } from "react";
import { Send } from "lucide-react";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="rounded-3xl bg-sage/10 p-8 text-center">
        <h3 className="font-display text-xl font-semibold text-sage-dark">Thanks — message received!</h3>
        <p className="mt-2 text-sm text-ink-light">We'll get back to you as soon as we can.</p>
      </div>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
      }}
      className="space-y-5 rounded-3xl bg-ivory p-8 shadow-sm shadow-ink/5"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className="mb-1.5 block text-sm font-medium text-ink">Name</label>
          <input required type="text" className="w-full rounded-xl border border-ink/15 bg-cream px-4 py-2.5 text-sm outline-none focus:border-brick" />
        </div>
        <div>
          <label className="mb-1.5 block text-sm font-medium text-ink">Email</label>
          <input required type="email" className="w-full rounded-xl border border-ink/15 bg-cream px-4 py-2.5 text-sm outline-none focus:border-brick" />
        </div>
      </div>
      <div>
        <label className="mb-1.5 block text-sm font-medium text-ink">Subject</label>
        <input type="text" className="w-full rounded-xl border border-ink/15 bg-cream px-4 py-2.5 text-sm outline-none focus:border-brick" />
      </div>
      <div>
        <label className="mb-1.5 block text-sm font-medium text-ink">Message</label>
        <textarea required rows={5} className="w-full rounded-xl border border-ink/15 bg-cream px-4 py-2.5 text-sm outline-none focus:border-brick" />
      </div>
      <button
        type="submit"
        className="flex w-full items-center justify-center gap-2 rounded-full bg-brick px-6 py-3.5 text-sm font-semibold text-ivory transition-colors hover:bg-brick-dark sm:w-auto"
      >
        <Send className="h-4 w-4" />
        Send Message
      </button>
    </form>
  );
}
