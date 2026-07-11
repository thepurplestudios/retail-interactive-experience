"use client";

import { ArrowRight } from "lucide-react";

import { HeroCard } from "./HeroCard";

interface VideoCardProps {
  src: string;
  className?: string;

  title?: string;
  linkText?: string;

  size?: "desktop" | "tablet" | "mobile";
}

const videoCardStyles = {
  desktop: {
    textPos: "bottom-6 left-6",
    title: "text-[22px]",
    linkMt: "mt-3",
    link: "text-sm",
    arrowSize: 16,
    gap: "gap-2",
  },

  tablet: {
    textPos: "bottom-5 left-5",
    title: "text-[18px]",
    linkMt: "mt-2",
    link: "text-[13px]",
    arrowSize: 14,
    gap: "gap-1.5",
  },

  mobile: {
    textPos: "bottom-3 left-3",
    title: "text-[13px] line-clamp-2",
    linkMt: "mt-1",
    link: "text-[10px]",
    arrowSize: 10,
    gap: "gap-1",
  },
} as const;

export function VideoCard({
  src,
  className,
  title,
  linkText,
  size = "desktop",
}: VideoCardProps) {
  const ui = videoCardStyles[size];

  return (
    <HeroCard className={className}>
      <div className="group relative h-full w-full overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="
      h-full
      w-full
      object-cover
    "
        >
          <source src={src} />
        </video>
        {/* LIGHT SWEEP */}
        <div
          className="
    pointer-events-none
    absolute
    inset-0

    opacity-0

    transition-opacity
    duration-300

    group-hover:opacity-100
  "
        >
          <div
            className="
      absolute
      inset-y-0

      -left-[40%]
      w-[18%]

      rotate-[14deg]

      bg-white/4
      blur-sm

      group-hover:left-[130%]

      transition-all
      duration-[1800ms]
      ease-out
    "
          />
        </div>

        {/* overlay */}
        <div
          className="
      absolute
      inset-0

      bg-gradient-to-t
      from-black/70
      via-black/20
      to-transparent
    "
        />

        {/* text */}
        <div className={`absolute ${ui.textPos} right-3 text-white`}>
          <h3
            className={`
        font-display
        leading-tight

        ${ui.title}
      `}
          >
            {title}
          </h3>

          <button
            className={`
    group/video-link

    ${ui.linkMt}

    pb-1

    max-w-full

    ${ui.link}
  `}
          >
            <span className={`flex items-center ${ui.gap}`}>
              <span className="truncate">{linkText}</span>

              <ArrowRight
                size={ui.arrowSize}
                className="
        shrink-0
        transition-transform
        duration-500
        ease-out

        group-hover/video-link:translate-x-1
      "
              />
            </span>
          </button>
        </div>
      </div>
    </HeroCard>
  );
}
