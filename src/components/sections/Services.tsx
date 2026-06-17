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
} from "lucide-react";
import { SERVICES } from "@/lib/constants";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal, { RevealStagger, RevealItem } from "@/components/ui/Reveal";

const iconMap = {
  Stethoscope,
  HeartHandshake,
  BedDouble,
  Activity,
  Brain,
  Hospital,
  Syringe,
  Users,
} as const;

export default function Services() {
  return (
    <section id="services" className="section-padding">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            badge="Services"
            title="Whatever Your Patient Needs, We Send the Right Nurse"
            subtitle="Eight types of home care across Muzaffarpur — from a 2-hour injection visit to round-the-clock elder support."
          />
        </Reveal>

        <RevealStagger className="grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4 lg:gap-6">
          {SERVICES.map((service) => {
            const Icon = iconMap[service.icon as keyof typeof iconMap];
            return (
              <RevealItem key={service.id}>
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
                  <a
                    href="#contact"
                    className="mt-4 inline-flex items-center gap-1 text-sm font-bold text-primary transition-colors hover:text-primary-dark"
                  >
                    Learn More
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </a>
                </article>
              </RevealItem>
            );
          })}
        </RevealStagger>
      </div>
    </section>
  );
}
