"use client";

import Image from "next/image";
import {
  ShieldCheck,
  Stethoscope,
  IndianRupee,
  Zap,
  Heart,
  Phone,
} from "lucide-react";
import { WHY_CHOOSE_US } from "@/lib/constants";
import { IMAGES } from "@/lib/images";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal, { RevealStagger, RevealItem } from "@/components/ui/Reveal";

const icons = [ShieldCheck, Stethoscope, IndianRupee, Zap, Heart, Phone];

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="section-padding bg-surface">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            badge="Why Families Choose Us"
            title="When Your Parent Needs Care, You Shouldn't Have to Guess"
            subtitle="Verified nurses, doctor-aligned plans, and round-the-clock support — the basics every Muzaffarpur family deserves."
          />
        </Reveal>

        <div className="grid items-stretch gap-6 lg:grid-cols-12 lg:gap-8">
          <Reveal direction="right" className="lg:col-span-5">
            <div className="relative h-full min-h-[280px] overflow-hidden rounded-2xl shadow-lg lg:min-h-0">
              <Image
                src={IMAGES.about.family}
                alt="Nurse supporting Indian family with home patient care in Muzaffarpur"
                fill
                loading="lazy"
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 42vw"
              />
              <div className="image-overlay absolute inset-0" />
              <div className="absolute right-3 bottom-3 left-3 rounded-xl bg-white/95 p-3.5 shadow-lg md:p-4">
                <p className="text-[11px] font-bold uppercase tracking-wide text-primary">
                  Our Standard
                </p>
                <p className="mt-1 text-xs leading-snug text-secondary md:text-sm">
                  Background checks · Clinical training · Hygiene protocols · Doctor
                  coordination · 24/7 supervision
                </p>
              </div>
            </div>
          </Reveal>

          <RevealStagger className="grid content-start gap-2.5 sm:grid-cols-2 lg:col-span-7 lg:gap-3">
            {WHY_CHOOSE_US.map((item, index) => {
              const Icon = icons[index];
              return (
                <RevealItem key={item.title}>
                  <div className="flex h-full gap-3 rounded-xl border border-border bg-background p-3 md:p-3.5">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                      <Icon className="h-4 w-4 text-primary" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="font-display text-sm font-bold leading-snug text-secondary">
                        {item.title}
                      </h3>
                      <p className="mt-1 text-xs leading-relaxed text-muted">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </RevealItem>
              );
            })}
          </RevealStagger>
        </div>
      </div>
    </section>
  );
}
