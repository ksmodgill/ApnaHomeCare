"use client";

import { Star, Quote } from "lucide-react";
import { FEATURED_REVIEW } from "@/lib/constants";
import Reveal from "@/components/ui/Reveal";

export default function FeaturedReview() {
  return (
    <Reveal delay={0.22}>
      <div className="mt-6 rounded-2xl border border-primary/15 bg-surface p-5 shadow-sm md:mt-8 md:p-6">
        <div className="mb-3 flex items-center gap-2">
          <div className="flex">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
            ))}
          </div>
          <span className="text-xs font-semibold text-muted">Family review · Muzaffarpur</span>
        </div>
        <Quote className="mb-2 h-5 w-5 text-primary/40" />
        <p className="text-sm leading-relaxed text-secondary md:text-base">
          &ldquo;{FEATURED_REVIEW.text}&rdquo;
        </p>
        <p className="mt-3 font-display text-sm font-bold text-secondary">
          — {FEATURED_REVIEW.name}, {FEATURED_REVIEW.location}
        </p>
        <a href="#reviews" className="mt-2 inline-block text-sm font-semibold text-primary hover:underline">
          Read all reviews →
        </a>
      </div>
    </Reveal>
  );
}
