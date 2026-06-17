interface SectionHeadingProps {
  badge?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  light?: boolean;
}

export default function SectionHeading({
  badge,
  title,
  subtitle,
  align = "center",
  light = false,
}: SectionHeadingProps) {
  return (
    <div
      className={`section-heading-gap ${align === "center" ? "text-center" : "text-left"}`}
    >
      {badge && (
        <span className="mb-3 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wide text-primary md:text-sm">
          {badge}
        </span>
      )}
      <h2
        className={`font-display text-[1.75rem] font-bold leading-[1.15] tracking-tight sm:text-4xl md:text-[2.75rem] lg:text-5xl ${
          light ? "text-white" : "text-secondary"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-3 max-w-2xl text-base leading-relaxed md:mt-4 md:text-lg ${
            align === "center" ? "mx-auto" : ""
          } ${light ? "text-white/85" : "text-muted"}`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
