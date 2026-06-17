"use client";

import { Check, ArrowRight, Clock, Calendar, CalendarDays, CalendarRange } from "lucide-react";
import { CARE_PACKAGES } from "@/lib/constants";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal, { RevealStagger, RevealItem } from "@/components/ui/Reveal";

const packageIcons = [Clock, Calendar, CalendarDays, CalendarRange];

export default function CarePackages() {
  return (
    <section id="packages" className="section-padding bg-surface">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            badge="Packages"
            title="Pay Only for the Care You Actually Need"
            subtitle="Hourly, daily, weekly, or long-term — we'll quote based on your patient's condition. No hidden charges."
          />
        </Reveal>

        <RevealStagger className="grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4 lg:gap-6">
          {CARE_PACKAGES.map((pkg, index) => {
            const Icon = packageIcons[index];
            return (
              <RevealItem key={pkg.title}>
                <article
                  className={`card-hover flex h-full flex-col rounded-2xl border p-5 md:p-6 ${
                    index === 2
                      ? "border-primary bg-primary/5 shadow-xl shadow-primary/10 ring-2 ring-primary/20"
                      : "border-border bg-background shadow-sm"
                  }`}
                >
                  {index === 2 && (
                    <span className="mb-3 inline-block w-fit rounded-full gradient-primary px-3 py-1 text-xs font-bold text-white">
                      Most Popular
                    </span>
                  )}
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-display text-lg font-bold text-secondary">{pkg.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{pkg.description}</p>

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

                  <a
                    href="#contact"
                    className={`mt-6 flex items-center justify-center gap-2 rounded-xl py-3.5 text-sm font-bold transition-all ${
                      index === 2
                        ? "gradient-primary text-white shadow-md"
                        : "bg-secondary text-white hover:bg-secondary-light"
                    }`}
                  >
                    {pkg.cta}
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </article>
              </RevealItem>
            );
          })}
        </RevealStagger>

        <Reveal delay={0.1}>
          <p className="mt-6 text-center text-sm text-muted md:mt-8">
            Pricing depends on patient condition and location.{" "}
            <a href="#contact" className="font-semibold text-primary hover:underline">
              Get a free personalized quote →
            </a>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
