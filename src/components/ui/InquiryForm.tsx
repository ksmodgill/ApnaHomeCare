"use client";

import { useState } from "react";
import { Send, CheckCircle } from "lucide-react";

interface InquiryFormProps {
  variant?: "default" | "compact" | "hero";
  className?: string;
}

export default function InquiryForm({
  variant = "default",
  className = "",
}: InquiryFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 800));
    setLoading(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div
        className={`flex flex-col items-center justify-center rounded-2xl bg-green-50 p-8 text-center ${className}`}
      >
        <CheckCircle className="mb-3 h-12 w-12 text-green-500" />
        <h3 className="font-display text-xl font-bold text-secondary">
          Inquiry Received!
        </h3>
        <p className="mt-2 text-muted">
          Our care coordinator will contact you within 30 minutes.
        </p>
      </div>
    );
  }

  const inputClass =
    "w-full rounded-xl border border-border bg-surface px-4 py-3 text-secondary placeholder:text-muted/60 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all";

  return (
    <form
      onSubmit={handleSubmit}
      className={`space-y-4 ${className}`}
      aria-label="Home nursing inquiry form"
    >
      <div
        className={
          variant === "hero"
            ? "grid gap-4 sm:grid-cols-2"
            : variant === "compact"
              ? "grid gap-3 sm:grid-cols-2"
              : "space-y-4"
        }
      >
        <div>
          <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-secondary">
            Your Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            placeholder="Enter your name"
            className={inputClass}
            autoComplete="name"
          />
        </div>
        <div>
          <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-secondary">
            Phone Number
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            placeholder="+91 XXXXX XXXXX"
            className={inputClass}
            autoComplete="tel"
            pattern="[0-9+\s-]{10,15}"
          />
        </div>
        {variant !== "compact" && (
          <>
            <div>
              <label
                htmlFor="requirement"
                className="mb-1.5 block text-sm font-medium text-secondary"
              >
                Patient Requirement
              </label>
              <select id="requirement" name="requirement" required className={inputClass}>
                <option value="">Select service needed</option>
                <option value="home-nursing">Home Nursing Care</option>
                <option value="elder-care">Elder Care</option>
                <option value="bedridden">Bedridden Patient Care</option>
                <option value="post-surgery">Post Surgery Care</option>
                <option value="stroke">Stroke Patient Care</option>
                <option value="icu">ICU Setup Assistance</option>
                <option value="injection">Injection & Dressing</option>
                <option value="caregiver">Caregiver Services</option>
                <option value="emergency">Emergency Nursing</option>
              </select>
            </div>
            <div>
              <label htmlFor="location" className="mb-1.5 block text-sm font-medium text-secondary">
                Location
              </label>
              <input
                id="location"
                name="location"
                type="text"
                required
                placeholder="Your area in Muzaffarpur"
                className={inputClass}
              />
            </div>
          </>
        )}
      </div>
      <button
        type="submit"
        disabled={loading}
        className="flex w-full items-center justify-center gap-2 rounded-xl gradient-primary px-6 py-3.5 font-semibold text-white shadow-lg shadow-primary/25 transition-all hover:shadow-xl hover:shadow-primary/30 disabled:opacity-70"
      >
        {loading ? (
          "Submitting..."
        ) : (
          <>
            <Send className="h-4 w-4" />
            Book Home Visit
          </>
        )}
      </button>
    </form>
  );
}
