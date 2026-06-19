"use client";

import { Stethoscope, Phone, MessageSquare, ClipboardList, UserCheck, HeartPulse } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal, { RevealStagger, RevealItem } from "@/components/ui/Reveal";
import type { ProcessSection } from "@/lib/sanity-types";

const stepIcons = [Phone, MessageSquare, ClipboardList, UserCheck, HeartPulse];

interface ProcessProps {
  data?: ProcessSection;
}

export default function Process({ data }: ProcessProps) {
  if (!data?.heading || !data.steps?.length) return null;

  return (
    <section id="process" className="section-padding bg-surface">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            badge={data.badge}
            title={data.heading}
            subtitle={data.subHeading}
          />
        </Reveal>

        <Reveal delay={0.05}>
          <div className="relative hidden lg:block">
            <div
              className="absolute top-7 right-[8%] left-[8%] h-0.5 bg-gradient-to-r from-primary/15 via-primary/40 to-primary/15"
              aria-hidden="true"
            />
            <div className="relative grid grid-cols-5 gap-4">
              {data.steps.map((step, index) => {
                const Icon = stepIcons[index % stepIcons.length];
                return (
                  <div key={step.title} className="flex flex-col items-center text-center">
                    <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-2xl gradient-primary shadow-lg shadow-primary/25">
                      <Icon className="h-6 w-6 text-white" />
                      <span className="absolute -top-2 -right-2 flex h-6 w-6 items-center justify-center rounded-full bg-secondary text-xs font-bold text-white ring-2 ring-surface">
                        {step.stepNumber || index + 1}
                      </span>
                    </div>
                    <h3 className="mt-4 font-display text-sm font-bold leading-snug text-secondary">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-xs leading-relaxed text-muted">{step.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </Reveal>

        <RevealStagger className="lg:hidden">
          <div className="relative">
            <div
              className="absolute top-5 bottom-5 left-5 w-0.5 -translate-x-1/2 bg-primary/20"
              aria-hidden="true"
            />
            <div>
              {data.steps.map((step, index) => {
                const Icon = stepIcons[index % stepIcons.length];
                return (
                  <RevealItem key={step.title}>
                    <div
                      className={`flex items-start gap-4 ${
                        index < data.steps!.length - 1 ? "pb-8" : ""
                      }`}
                    >
                      <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl gradient-primary shadow-md">
                        <Icon className="h-4 w-4 text-white" />
                      </div>
                      <div className="min-w-0 flex-1 pt-0.5">
                        <span className="mb-1 inline-block rounded-full bg-primary/10 px-2 py-0.5 text-[10px] font-bold text-primary">
                          Step {step.stepNumber || index + 1}
                        </span>
                        <h3 className="font-display text-sm font-bold text-secondary">
                          {step.title}
                        </h3>
                        <p className="mt-1 text-xs leading-relaxed text-muted">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </RevealItem>
                );
              })}
            </div>
          </div>
        </RevealStagger>

        {(data.calloutTitle || data.calloutDescription) && (
          <Reveal delay={0.1}>
            <div className="mt-8 flex items-start gap-4 rounded-2xl border border-primary/20 bg-gradient-to-r from-primary/5 to-transparent p-5 md:p-6">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                <Stethoscope className="h-5 w-5 text-primary" />
              </div>
              <div>
                {data.calloutTitle && (
                  <p className="font-display font-bold text-secondary">{data.calloutTitle}</p>
                )}
                {data.calloutDescription && (
                  <p className="mt-1 text-sm leading-relaxed text-muted">
                    {data.calloutDescription}
                  </p>
                )}
              </div>
            </div>
          </Reveal>
        )}
      </div>
    </section>
  );
}
