"use client";

import Image from "next/image";
import { HeroCard } from "./HeroCard";

interface ImageCardProps {
  src: string;
  alt: string;

  title?: string;
  subtitle?: string;
  buttonText?: string;

  darkOverlay?: boolean;

  price?: string;

  variant?: "editorial" | "product";

  className?: string;
}

export function ImageCard({
  src,
  alt,
  title,
  subtitle,
  buttonText,
  darkOverlay = false,
  price,
  variant = "editorial",
  className,
}: ImageCardProps) {
  return (
    <HeroCard className={`h-full w-full ${className ?? ""}`}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes="100vw"
        className="
          object-cover
          transition-transform
          duration-700
          hover:scale-105
        "
      />

      {darkOverlay && (
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
      )}

      {variant === "editorial" && (title || subtitle) && (
        <div
          className="
      absolute
      bottom-0
      left-0
      right-0

      p-6

      text-white
    "
        >
          {subtitle && (
            <p
              className="
          mb-3
          text-xs
          uppercase
          tracking-[0.25em]
          text-white/80
        "
            >
              {subtitle}
            </p>
          )}

          {title && (
            <h3
              className="
          max-w-[220px]
          font-display
          text-4xl
          leading-[0.95]
        "
            >
              {title}
            </h3>
          )}

          {buttonText && (
            <button
              className="
          mt-6
          rounded-xl
          border
          border-white/40
          px-5
          py-3
          text-sm
          backdrop-blur-md
          transition-all
          hover:bg-white/10
        "
            >
              {buttonText}
            </button>
          )}
        </div>
      )}

      {variant === "product" && (
        <>
          <div
            className="
        absolute
        left-5
        bottom-5

        text-[#000000]
      "
          >
            <p className="text-sm text-black/60">{subtitle}</p>

            <h3 className="mt-2 text-[18px] font-medium">{title}</h3>

            <p className="mt-2 text-[18px] font-semibold">{price}</p>
          </div>

          <button
            className="
        absolute
        right-5
        bottom-5

        flex
        h-11
        w-11
        items-center
        justify-center

        rounded-full
        bg-white/90

        text-lg
      "
          >
            →
          </button>
        </>
      )}
    </HeroCard>
  );
}
