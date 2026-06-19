"use client";

import { Check, ArrowRight, Clock, Calendar, CalendarDays, CalendarRange } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal, { RevealStagger, RevealItem } from "@/components/ui/Reveal";
import type { PricingSection } from "@/lib/sanity-types";

const packageIcons = [Clock, Calendar, CalendarDays, CalendarRange];

interface CarePackagesProps {
  data?: PricingSection;
}

export default function CarePackages({ data }: CarePackagesProps) {
  if (!data?.heading || !data.plans?.length) return null;

  return (
    <section id="packages" className="section-padding bg-surface">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            badge={data.badge}
            title={data.heading}
            subtitle={data.subHeading}
          />
        </Reveal>

        <RevealStagger className="grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4 lg:gap-6">
          {data.plans.map((pkg, index) => {
            const Icon = packageIcons[index % packageIcons.length];
            const isFeatured = pkg.featured;
            return (
              <RevealItem key={pkg.title}>
                <article
                  className={`card-hover flex h-full flex-col rounded-2xl border p-5 md:p-6 ${
                    isFeatured
                      ? "border-primary bg-primary/5 shadow-xl shadow-primary/10 ring-2 ring-primary/20"
                      : "border-border bg-background shadow-sm"
                  }`}
                >
                  {isFeatured && (
                    <span className="mb-3 inline-block w-fit rounded-full gradient-primary px-3 py-1 text-xs font-bold text-white">
                      Most Popular
                    </span>
                  )}
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-display text-lg font-bold text-secondary">{pkg.title}</h3>
                  {pkg.description && (
                    <p className="mt-2 text-sm leading-relaxed text-muted">{pkg.description}</p>
                  )}

                  {pkg.features && pkg.features.length > 0 && (
                    <ul className="mt-4 flex-1 space-y-2.5">
                      {pkg.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-start gap-2 text-sm text-secondary"
                        >
                          <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  )}

                  {pkg.buttonText && (
                    <a
                      href={pkg.buttonLink || "#contact"}
                      className={`mt-6 flex items-center justify-center gap-2 rounded-xl py-3.5 text-sm font-bold transition-all ${
                        isFeatured
                          ? "gradient-primary text-white shadow-md"
                          : "bg-secondary text-white hover:bg-secondary-light"
                      }`}
                    >
                      {pkg.buttonText}
                      <ArrowRight className="h-4 w-4" />
                    </a>
                  )}
                </article>
              </RevealItem>
            );
          })}
        </RevealStagger>

        {(data.footerNote || data.footerLinkText) && (
          <Reveal delay={0.1}>
            <p className="mt-6 text-center text-sm text-muted md:mt-8">
              {data.footerNote}{" "}
              {data.footerLinkText && (
                <a
                  href={data.footerLink || "#contact"}
                  className="font-semibold text-primary hover:underline"
                >
                  {data.footerLinkText}
                </a>
              )}
            </p>
          </Reveal>
        )}
      </div>
    </section>
  );
}
