"use client";

import { ArrowRight } from "lucide-react";

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
      <div className="group relative h-full w-full">
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
    group/video-link

    mt-3

    pb-1

    text-sm
  "
          >
            <span
              className="
      flex
      items-center
      gap-2
    "
            >
              {linkText}

              <ArrowRight
                size={16}
                className="
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
