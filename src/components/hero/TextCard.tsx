import { Sparkles, ArrowRight } from "lucide-react";

interface TextCardProps {
  eyebrow: string;
  title: React.ReactNode;
  description: string;
  buttonText: string;
}

export default function TextCard({
  eyebrow,
  title,
  description,
  buttonText,
}: TextCardProps) {
  return (
    <div
      className="
        h-full
        rounded-[28px]

     bg-[#E8DFD3]
        border border-white/70

        px-12
        py-10

        flex
        flex-col
        items-center
        justify-center

        text-center
      "
    >
      {/* sparkle */}
      <Sparkles
        size={16}
        className="
          mb-6
          text-[var(--primary)]
          opacity-70
        "
      />

      {/* eyebrow */}
      <p
        className="
          mb-5

          text-xs
          tracking-[0.28em]

          uppercase

          text-[var(--text-muted)]
        "
      >
        {eyebrow}
      </p>

      {/* heading */}
      <h2
        className="
          font-display
          font-bold

          text-[2rem]
          leading-[0.80]

          text-[var(--primary)]
        "
      >
        {title}
      </h2>

      {/* description */}
      <p
        className="
          mt-8
          max-w-[420px]

          text-base
          leading-relaxed

          text-[var(--text-muted)]
        "
      >
        {description}
      </p>

      {/* CTA */}
      <button
        className="
    group/button

    mt-10

    rounded-full

    bg-[var(--primary)]

    px-8
    py-2

    text-white
  "
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
