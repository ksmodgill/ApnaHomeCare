"use client";

import { Star, Quote } from "lucide-react";
import { REVIEWS, FEATURED_REVIEW } from "@/lib/constants";
import SectionHeading from "@/components/ui/SectionHeading";
import GoogleLogo from "@/components/ui/GoogleLogo";
import Reveal, { RevealStagger, RevealItem } from "@/components/ui/Reveal";

function getInitials(name: string) {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);
}

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`h-3.5 w-3.5 ${
            i < rating ? "fill-[#fabb05] text-[#fabb05]" : "fill-[#dadce0] text-[#dadce0]"
          }`}
        />
      ))}
    </div>
  );
}

function ReviewCard({
  name,
  rating,
  text,
  date,
}: {
  name: string;
  rating: number;
  text: string;
  date: string;
}) {
  return (
    <article className="google-review-card h-full p-4 md:p-5">
      <div className="mb-3 flex items-start justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="google-avatar flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-sm">
            {getInitials(name)}
          </div>
          <div>
            <p className="text-sm font-medium text-[#202124]">{name}</p>
            <p className="text-xs text-[#5f6368]">{date}</p>
          </div>
        </div>
        <GoogleLogo className="h-4 w-4 shrink-0 opacity-80" />
      </div>
      <StarRating rating={rating} />
      <p className="mt-2 text-sm leading-relaxed text-[#3c4043]">{text}</p>
    </article>
  );
}

export default function GoogleReviews() {
  return (
    <section id="reviews" className="section-padding bg-[#f8f9fa]">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            badge="Reviews"
            title="What Muzaffarpur Families Say About Us"
            subtitle="Real feedback from families who trusted Apna Home Care with their loved ones."
          />
        </Reveal>

        <Reveal delay={0.08}>
          <article className="relative mb-8 overflow-hidden rounded-2xl border border-primary/20 bg-white p-6 shadow-lg md:p-8">
            <Quote className="absolute top-4 right-4 h-10 w-10 text-primary/10" />
            <div className="mb-4">
              <StarRating rating={FEATURED_REVIEW.rating} />
            </div>
            <blockquote className="text-base leading-relaxed text-secondary md:text-lg">
              &ldquo;{FEATURED_REVIEW.text}&rdquo;
            </blockquote>
            <footer className="mt-4 font-display font-bold text-secondary">
              — {FEATURED_REVIEW.name}, {FEATURED_REVIEW.location}
            </footer>
          </article>
        </Reveal>

        <RevealStagger className="columns-1 gap-4 sm:columns-2 lg:columns-3">
          {REVIEWS.map((review) => (
            <RevealItem key={review.name + review.date} className="mb-4 break-inside-avoid">
              <ReviewCard {...review} />
            </RevealItem>
          ))}
        </RevealStagger>
      </div>
    </section>
  );
}
