"use client";

import { useState } from "react";
import { Send, CheckCircle, AlertCircle } from "lucide-react";
import {
  handleHomeVisitSubmit,
  validateHomeVisitFormData,
} from "@/lib/handleHomeVisitSubmit";

interface InquiryFormProps {
  variant?: "default" | "compact" | "hero";
  className?: string;
}

const SUCCESS_MESSAGE =
  "Thank you. Your Home Visit request has been received. Our team will contact you shortly.";

export default function InquiryForm({
  variant = "default",
  className = "",
}: InquiryFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");

    const form = e.currentTarget;
    const formData = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      phone: (form.elements.namedItem("phone") as HTMLInputElement).value,
      location: (form.elements.namedItem("location") as HTMLInputElement | null)?.value ?? "",
      requirement: (form.elements.namedItem("requirement") as HTMLSelectElement | null)?.value ?? "",
    };

    const validationError = validateHomeVisitFormData(formData);

    if (validationError) {
      setError(validationError);
      return;
    }

    setLoading(true);

    try {
      await handleHomeVisitSubmit(formData);
      form.reset();
      setSubmitted(true);
    } catch (err) {
      const message =
        err instanceof Error && err.message.includes("public key")
          ? "Form is temporarily unavailable. Please call us directly."
          : "Unable to send your request. Please try again or call us directly.";

      setError(message);
    } finally {
      setLoading(false);
    }
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
        <p className="mt-2 text-muted">{SUCCESS_MESSAGE}</p>
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
      noValidate
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
            disabled={loading}
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
            disabled={loading}
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
              <select
                id="requirement"
                name="requirement"
                required
                className={inputClass}
                disabled={loading}
                defaultValue=""
              >
                <option value="" disabled>
                  Select service needed
                </option>
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
                disabled={loading}
              />
            </div>
          </>
        )}
      </div>

      {error && (
        <div
          role="alert"
          className="flex items-start gap-2 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700"
        >
          <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
          <span>{error}</span>
        </div>
      )}

      <button
        type="submit"
        disabled={loading}
        className="flex w-full items-center justify-center gap-2 rounded-xl gradient-primary px-6 py-3.5 font-semibold text-white shadow-lg shadow-primary/25 transition-all hover:shadow-xl hover:shadow-primary/30 disabled:cursor-not-allowed disabled:opacity-70"
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
