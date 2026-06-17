"use client";

import { useEffect } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { MapPin, Phone, X, CheckCircle } from "lucide-react";
import { LOCATIONS, SERVICES, SITE } from "@/lib/constants";

type Location = (typeof LOCATIONS)[number];

const HIGHLIGHTS = [
  "Trained & verified nursing staff",
  "24/7 emergency response",
  "Affordable care packages",
  "Doctor-coordinated care plans",
] as const;

interface LocationModalProps {
  location: Location | null;
  onClose: () => void;
  onSelectLocation: (slug: string) => void;
}

export default function LocationModal({
  location,
  onClose,
  onSelectLocation,
}: LocationModalProps) {
  useEffect(() => {
    if (!location) return;

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleEscape);
    };
  }, [location, onClose]);

  return (
    <AnimatePresence>
      {location && (
        <div className="fixed inset-0 z-50 flex items-end justify-center p-0 sm:items-center sm:p-4">
          <motion.button
            type="button"
            aria-label="Close location details"
            className="absolute inset-0 bg-secondary/60 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="location-modal-title"
            className="relative z-10 flex max-h-[92vh] w-full max-w-3xl flex-col overflow-hidden rounded-t-3xl border border-border bg-surface shadow-2xl sm:rounded-3xl"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 24 }}
            transition={{ duration: 0.2 }}
          >
            <div className="flex items-start justify-between gap-4 border-b border-border px-5 py-4 md:px-6">
              <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1.5 text-sm font-semibold text-primary">
                <MapPin className="h-4 w-4" />
                {location.name}, Bihar
              </div>
              <button
                type="button"
                onClick={onClose}
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-border text-secondary transition-colors hover:bg-background"
                aria-label="Close"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <div className="overflow-y-auto px-5 py-5 md:px-6 md:py-6">
              <h2
                id="location-modal-title"
                className="font-display text-2xl font-bold text-secondary md:text-3xl"
              >
                Home Nursing Services in{" "}
                <span className="text-gradient">{location.name}</span>
              </h2>

              <p className="mt-4 text-base leading-relaxed text-muted">
                {location.description}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted md:text-base">
                Apna Home Care provides qualified nurses, trained caregivers, and
                comprehensive patient care services in {location.name} and nearby
                areas. Whether you need elder care, post-surgery recovery support,
                or emergency nursing assistance, our team is available 24/7.
              </p>

              <ul className="mt-5 space-y-2.5">
                {HIGHLIGHTS.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-secondary md:text-base">
                    <CheckCircle className="h-4 w-4 shrink-0 text-primary" />
                    {item}
                  </li>
                ))}
              </ul>

              <div className="mt-6">
                <h3 className="font-display text-lg font-bold text-secondary">
                  Our Services in {location.name}
                </h3>
                <div className="mt-3 grid gap-3 sm:grid-cols-2">
                  {SERVICES.map((service) => (
                    <div
                      key={service.id}
                      className="rounded-xl border border-border bg-background p-4"
                    >
                      <p className="font-display text-sm font-bold text-secondary">
                        {service.title}
                      </p>
                      <p className="mt-1 text-xs leading-relaxed text-muted">
                        {service.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6">
                <p className="mb-3 text-sm font-semibold text-secondary">
                  Other areas we serve
                </p>
                <div className="flex flex-wrap gap-2">
                  {LOCATIONS.filter((loc) => loc.slug !== location.slug).map((loc) => (
                    <button
                      key={loc.slug}
                      type="button"
                      onClick={() => onSelectLocation(loc.slug)}
                      className="rounded-full border border-border bg-background px-4 py-2 text-sm font-medium text-secondary transition-colors hover:border-primary hover:text-primary"
                    >
                      {loc.name}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-3 border-t border-border bg-background/80 px-5 py-4 sm:flex-row md:px-6">
              <a
                href={`tel:${SITE.phone}`}
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl gradient-primary px-6 py-3.5 font-semibold text-white shadow-lg"
              >
                <Phone className="h-4 w-4" />
                Call {SITE.phoneDisplay}
              </a>
              <Link
                href="/#contact"
                onClick={onClose}
                className="inline-flex flex-1 items-center justify-center rounded-xl border-2 border-secondary/15 bg-surface px-6 py-3.5 font-semibold text-secondary transition-colors hover:border-primary hover:text-primary"
              >
                Book Home Visit
              </Link>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
