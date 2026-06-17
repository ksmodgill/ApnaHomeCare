"use client";

import { useState } from "react";
import { ChevronDown, Phone } from "lucide-react";
import { FAQS, SITE } from "@/lib/constants";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="section-padding bg-surface">
      <div className="mx-auto max-w-4xl px-4 md:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            badge="Questions?"
            title="Straight Answers Before You Decide"
            subtitle="The things families in Muzaffarpur ask us most — about cost, urgency, areas, and what a nurse actually does at home."
          />
        </Reveal>

        <Reveal delay={0.05}>
          <div className="space-y-2.5">
            {FAQS.map((faq, index) => (
              <div
                key={faq.question}
                className="overflow-hidden rounded-xl border border-border bg-background"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="flex w-full items-center justify-between gap-4 px-4 py-3.5 text-left md:px-5 md:py-4"
                  aria-expanded={openIndex === index}
                >
                  <span className="font-display text-sm font-semibold text-secondary md:text-base">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-primary transition-transform ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openIndex === index && (
                  <div className="border-t border-border px-4 py-3.5 md:px-5">
                    <p className="text-sm leading-relaxed text-muted">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="mt-6 text-center text-sm text-muted">
            Still have questions?{" "}
            <a
              href={`tel:${SITE.phone}`}
              className="inline-flex items-center gap-1 font-bold text-primary hover:underline"
            >
              <Phone className="h-4 w-4" />
              Call {SITE.phoneDisplay}
            </a>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
