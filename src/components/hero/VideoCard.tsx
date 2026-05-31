"use client";

import { HeroCard } from "./HeroCard";

interface VideoCardProps {
  src: string;
  className?: string;

  title?: string;
  linkText?: string;
}

export function VideoCard({ src, className, title, linkText }: VideoCardProps) {
  return (
    <HeroCard className={className}>
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
      <div
        className="
      absolute
      bottom-6
      left-6

      text-white
    "
      >
        <h3
          className="
        font-display
        text-[22px]
        leading-tight
      "
        >
          {title}
        </h3>

        <button
          className="
        mt-3
        border-b
        border-white/70

        pb-1
        text-sm
      "
        >
          {linkText}
        </button>
      </div>
    </HeroCard>
  );
}
