"use client";

import { useState } from "react";
import { ChevronDown, Phone } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { useSiteContent } from "@/context/SiteContext";
import type { FaqSection } from "@/lib/sanity-types";

interface FAQProps {
  data?: FaqSection;
}

export default function FAQ({ data }: FAQProps) {
  const { siteSettings } = useSiteContent();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  if (!data?.heading || !data.faqs?.length) return null;

  const ctaText =
    data.ctaText ||
    (siteSettings.phoneDisplay
      ? `Still have questions? Call ${siteSettings.phoneDisplay}`
      : "Still have questions? Call us");

  return (
    <section id="faq" className="section-padding bg-surface">
      <div className="mx-auto max-w-4xl px-4 md:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            badge={data.badge}
            title={data.heading}
            subtitle={data.subHeading}
          />
        </Reveal>

        <Reveal delay={0.05}>
          <div className="space-y-2.5">
            {data.faqs.map((faq, index) => (
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
            {ctaText.includes("Call") ? (
              <>
                Still have questions?{" "}
                <a
                  href={`tel:${siteSettings.phone}`}
                  className="inline-flex items-center gap-1 font-bold text-primary hover:underline"
                >
                  <Phone className="h-4 w-4" />
                  Call {siteSettings.phoneDisplay}
                </a>
              </>
            ) : (
              ctaText
            )}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
