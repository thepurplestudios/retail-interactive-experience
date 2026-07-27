import { Sparkles, ArrowRight } from "lucide-react";

interface TextCardProps {
  eyebrow: string;
  title: React.ReactNode;
  description: string;
  buttonText: string;

  size?: "desktop" | "tablet" | "mobile";
}

const textCardStyles = {
  desktop: {
    wrapper: "px-12 py-10",
    showSparkle: true,
    sparkleSize: 16,
    sparkleMb: "mb-6",
    eyebrowMb: "mb-5",
    heading: "text-[2rem]",
    descriptionMt: "mt-8",
    description: "text-base leading-relaxed",
    descriptionClamp: "",
    button: "mt-10 px-8 py-2 text-sm rounded-full",
    buttonGap: "gap-2",
    arrowSize: 16,
  },

  tablet: {
    wrapper: "px-6 py-6",
    showSparkle: true,
    sparkleSize: 14,
    sparkleMb: "mb-6",
    eyebrowMb: "mb-3",
    heading: "text-[1.5rem]",
    descriptionMt: "mt-5",
    description: "text-[13px] leading-5",
    descriptionClamp: "",
    button: "mt-5 px-4 py-1.5 text-[9px] rounded-full",
    buttonGap: "gap-1.5",
    arrowSize: 12,
  },

  mobile: {
    wrapper: "px-3 py-3",
    showSparkle: false,
    sparkleSize: 10,
    sparkleMb: "mb-1.5",
    eyebrowMb: "mb-2",
    heading: "text-[0.8rem]",
    descriptionMt: "mt-1.5",
    description: "text-[9px] leading-[13px]",
    descriptionClamp: "line-clamp-3",
    button: "mt-2 px-2.5 py-1 !text-[11px] rounded-md whitespace-nowrap",
    buttonGap: "gap-0.5",
    arrowSize: 9,
  },
} as const;

export default function TextCard({
  eyebrow,
  title,
  description,
  buttonText,
  size = "desktop",
}: TextCardProps) {
  const ui = textCardStyles[size];

  return (
    <div
      className={`
  h-full
  w-full
  overflow-hidden
  rounded-[28px]

  bg-[#d8c8f0ac]
  border border-white/70

  ${ui.wrapper}

  flex
  flex-col
  items-center
  justify-center

  text-center
`}
    >
      {/* sparkle */}
      {ui.showSparkle && (
        <Sparkles
          size={ui.sparkleSize}
          className={`
            ${ui.sparkleMb}
            text-[var(--primary)]
            opacity-70
          `}
        />
      )}

      {/* eyebrow */}
      <p
        className={`
          uppercase
          text-[11px]
          tracking-[0.22em]
          ${ui.eyebrowMb}
          text-[var(--text-muted)]

          ${size === "mobile" ? "text-[7px] tracking-[0.12em] line-clamp-1" : ""}
        `}
      >
        {eyebrow}
      </p>

      {/* heading */}
      <h2
        className={`
          font-display
          font-bold

          ${ui.heading}

          leading-[0.95]

          text-[var(--primary)]
        `}
      >
        {title}
      </h2>

      {/* description */}
      <p
        className={`
          ${ui.descriptionMt}
          max-w-[420px]
          ${ui.description}
          ${ui.descriptionClamp}
          text-[var(--text-muted)]
        `}
      >
        {description}
      </p>

      {/* CTA */}
      <button
        className={`
          group/button
          max-w-full

          ${ui.button}

          bg-[var(--primary)]

          text-white
        `}
      >
        <span className={`flex items-center justify-center ${ui.buttonGap}`}>
          <span className={size === "mobile" ? "truncate" : ""}>
            {buttonText}
          </span>

          <ArrowRight
            size={ui.arrowSize}
            className="
        shrink-0
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
