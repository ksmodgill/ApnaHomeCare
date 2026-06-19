"use client";

import {
  Stethoscope,
  HeartHandshake,
  BedDouble,
  Activity,
  Brain,
  Hospital,
  Syringe,
  Users,
  ArrowRight,
  type LucideIcon,
} from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal, { RevealStagger, RevealItem } from "@/components/ui/Reveal";
import type { ServicesSection } from "@/lib/sanity-types";

const iconMap: Record<string, LucideIcon> = {
  Stethoscope,
  HeartHandshake,
  BedDouble,
  Activity,
  Brain,
  Hospital,
  Syringe,
  Users,
};

interface ServicesProps {
  data?: ServicesSection;
}

export default function Services({ data }: ServicesProps) {
  if (!data?.heading || !data.services?.length) return null;

  return (
    <section id="services" className="section-padding">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            badge={data.badge}
            title={data.heading}
            subtitle={data.subHeading}
          />
        </Reveal>

        <RevealStagger className="grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4 lg:gap-6">
          {data.services.map((service) => {
            const Icon = iconMap[service.icon || "Stethoscope"] || Stethoscope;
            return (
              <RevealItem key={service.title}>
                <article className="card-hover group flex h-full flex-col rounded-2xl border border-border bg-surface p-5 shadow-sm">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 transition-colors group-hover:bg-primary">
                    <Icon className="h-6 w-6 text-primary transition-colors group-hover:text-white" />
                  </div>
                  <h3 className="font-display text-base font-bold text-secondary md:text-lg">
                    {service.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                    {service.description}
                  </p>
                  {service.buttonText && (
                    <a
                      href={service.link || "#contact"}
                      className="mt-4 inline-flex items-center gap-1 text-sm font-bold text-primary transition-colors hover:text-primary-dark"
                    >
                      {service.buttonText}
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </a>
                  )}
                </article>
              </RevealItem>
            );
          })}
        </RevealStagger>
      </div>
    </section>
  );
}
