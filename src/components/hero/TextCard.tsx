import { Sparkles, ArrowRight } from "lucide-react";

interface TextCardProps {
  eyebrow: string;
  title: React.ReactNode;
  description: string;
  buttonText: string;

  size?: "desktop" | "tablet" | "mobile";
}
export default function TextCard({
  eyebrow,
  title,
  description,
  buttonText,
  size = "desktop",
}: TextCardProps) {
  const isTablet = size === "tablet";

  const spacing = isTablet ? "px-6 py-6" : "px-12 py-10";

  const heading = isTablet ? "text-[1.5rem]" : "text-[2rem]";

  const descriptionSize = isTablet
    ? "text-[13px] leading-5"
    : "text-base leading-relaxed";

  const buttonSpacing = isTablet
    ? "mt-5 px-4 py-1.5 text-[9px]"
    : "mt-10 px-8 py-2";
  return (
    <div
      className={`
  h-full
  rounded-[28px]

  bg-[#E8DFD3]
  border border-white/70

  ${spacing}

  flex
  flex-col
  items-center
  justify-center

  text-center
`}
    >
      {/* sparkle */}
      <Sparkles
        size={isTablet ? 14 : 16}
        className="
          mb-6
          text-[var(--primary)]
          opacity-70
        "
      />

      {/* eyebrow */}
      <p
        className={`
          uppercase
          text-[11px]
          tracking-[0.22em]
          ${isTablet ? "mb-3" : "mb-5"}
          text-[var(--text-muted)]
        `}
      >
        {eyebrow}
      </p>

      {/* heading */}
      <h2
        className={`
          font-display
          font-bold

          ${heading}

          leading-[0.80]

          text-[var(--primary)]
        `}
      >
        {title}
      </h2>

      {/* description */}
      <p
        className={`
          ${isTablet ? "mt-5" : "mt-8"}
          max-w-[420px]
          ${descriptionSize}
          text-[var(--text-muted)]
        `}
      >
        {description}
      </p>

      {/* CTA */}
      <button
        className={`
          group/button

          ${buttonSpacing}

          rounded-full

          bg-[var(--primary)]

          text-white
        `}
      >
        <span className="flex items-center gap-2">
          {buttonText}

          <ArrowRight
            size={16}
            className="
        transition-transform
        duration-500
        ease-out

        group-hover/button:translate-x-1
      "
          />
        </span>
      </button>
    </div>
  );
}
