"use client";

import { Star, Quote } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import GoogleLogo from "@/components/ui/GoogleLogo";
import Reveal, { RevealStagger, RevealItem } from "@/components/ui/Reveal";
import type { TestimonialDocument, TestimonialsSection } from "@/lib/sanity-types";

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

interface GoogleReviewsProps {
  data?: TestimonialsSection;
  testimonials?: TestimonialDocument[];
  featuredReview?: TestimonialDocument;
}

export default function GoogleReviews({
  data,
  testimonials = [],
  featuredReview,
}: GoogleReviewsProps) {
  if (!data?.heading || testimonials.length === 0) return null;

  const featured = featuredReview || testimonials.find((t) => t.featured) || testimonials[0];

  return (
    <section id="reviews" className="section-padding bg-[#f8f9fa]">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            badge={data.badge}
            title={data.heading}
            subtitle={data.subHeading}
          />
        </Reveal>

        {featured?.review && (
          <Reveal delay={0.08}>
            <article className="relative mb-8 overflow-hidden rounded-2xl border border-primary/20 bg-white p-6 shadow-lg md:p-8">
              <Quote className="absolute top-4 right-4 h-10 w-10 text-primary/10" />
              <div className="mb-4">
                <StarRating rating={featured.rating || 5} />
              </div>
              <blockquote className="text-base leading-relaxed text-secondary md:text-lg">
                &ldquo;{featured.review}&rdquo;
              </blockquote>
              <footer className="mt-4 font-display font-bold text-secondary">
                — {featured.name}
                {featured.location ? `, ${featured.location}` : ""}
              </footer>
            </article>
          </Reveal>
        )}

        <RevealStagger className="columns-1 gap-4 sm:columns-2 lg:columns-3">
          {testimonials.map((review) => (
            <RevealItem key={review._id} className="mb-4 break-inside-avoid">
              <ReviewCard
                name={review.name || "Anonymous"}
                rating={review.rating || 5}
                text={review.review || ""}
                date={review.date || ""}
              />
            </RevealItem>
          ))}
        </RevealStagger>
      </div>
    </section>
  );
}
