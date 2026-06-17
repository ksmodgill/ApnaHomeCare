import { Stethoscope, FileText, Users, Phone } from "lucide-react";
import { SITE } from "@/lib/constants";
import SectionHeading from "@/components/ui/SectionHeading";

const steps = [
  {
    icon: Stethoscope,
    title: "Share Doctor's Prescription",
    description:
      "Provide your treating doctor's care instructions, discharge summary, or medical prescription to help us understand clinical requirements.",
  },
  {
    icon: FileText,
    title: "We Create a Care Plan",
    description:
      "Our nursing team prepares a detailed home care plan aligned with your doctor's recommendations and the patient's daily needs.",
  },
  {
    icon: Users,
    title: "Coordinated Nursing Care",
    description:
      "Assigned nurses follow the care plan, maintain health logs, and communicate patient progress that families can share with their doctor.",
  },
  {
    icon: Phone,
    title: "Doctor Updates on Request",
    description:
      "Upon request, we provide structured health reports and vitals data to support your doctor's ongoing treatment decisions.",
  },
];

export default function DoctorReferral() {
  return (
    <section className="section-padding">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <SectionHeading
          badge="Doctor Coordination"
          title="Coordinate Care With Your Doctor"
          subtitle="Apna Home Care works alongside your family's treating physician to ensure seamless, doctor-guided home nursing support."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className="relative rounded-2xl border border-border bg-surface p-6 shadow-sm"
            >
              <span className="absolute -top-3 -left-3 flex h-8 w-8 items-center justify-center rounded-full gradient-primary text-sm font-bold text-white">
                {index + 1}
              </span>
              <step.icon className="mb-4 h-10 w-10 text-primary" />
              <h3 className="font-display font-bold text-secondary">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-2xl border border-primary/20 bg-primary/5 p-6 text-center md:p-8">
          <p className="text-muted">
            Have a doctor&apos;s referral or discharge summary? Call us at{" "}
            <a href={`tel:${SITE.phone}`} className="font-semibold text-primary hover:underline">
              {SITE.phoneDisplay}
            </a>{" "}
            and we&apos;ll set up coordinated home nursing care within hours.
          </p>
        </div>
      </div>
    </section>
  );
}
