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

  description?: string;
  linkText?: string;

  variant?:
    | "editorial"
    | "product"
    | "smallProduct"
    | "smallProductDark"
    | "mens";

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
  description,
  linkText,
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

      {variant === "smallProduct" && (
        <div
          className="
      absolute
      bottom-0
      left-0
      right-0

      p-4
      text-[#2E2435]
    "
        >
          <h3
            className="
    mt-2
    text-[14px]
    font-semibold
    text-[#000000]
  "
          >
            {title}
          </h3>

          {description && (
            <p
              className="
    
    mt-2
    text-[12px]
    text-[#000000]
  "
            >
              {description}
            </p>
          )}

          {linkText && (
            <button
              className="
    mt-2
!text-[14px]
    font-medium
    underline
    underline-offset-4
    text-[#000000]
  "
            >
              {linkText} →
            </button>
          )}
        </div>
      )}

      {variant === "smallProductDark" && (
        <>
          {/* Dark Overlay */}
          <div
            className="
        absolute
        inset-0

        bg-gradient-to-t
        from-black/50
        via-black/20
        to-transparent
      "
          />

          {/* Content */}
          <div
            className="
        absolute
        bottom-0
        left-0
        right-0

        p-4

        text-white
      "
          >
            <h3
              className="
          text-[12px]
          font-semibold
          text-white
        "
            >
              {title}
            </h3>

            {description && (
              <p
                className="
            mt-2
            text-[10px]
            leading-relaxed
            text-white/90
          "
              >
                {description}
              </p>
            )}

            {linkText && (
              <button
                className="
            mt-3
            !text-[12px]
            font-medium

            text-white

            underline
            underline-offset-4
          "
              >
                {linkText} →
              </button>
            )}
          </div>
        </>
      )}

      {variant === "mens" && (
        <>
          <div
            className="
        absolute
        inset-0

        bg-gradient-to-t
        from-black/65
        via-black/20
        to-transparent
      "
          />

          <div
            className="
        absolute
       top-8
left-8
right-8

        text-white
      "
          >
            {subtitle && (
              <p
                className="
            mb-4

            text-[11px]
            uppercase
            tracking-[0.25em]

            text-white/80
          "
              >
                {subtitle}
              </p>
            )}

            <h3
              className="
          max-w-[220px]

          font-display

          text-[28px]
          leading-[1.05]

          text-white
        "
            >
              {title}
            </h3>

            {linkText && (
              <button
                className="
            mt-5

            !text-[13px]
            font-medium

            text-white

            underline
            underline-offset-4
          "
              >
                {linkText} →
              </button>
            )}
          </div>
        </>
      )}
    </HeroCard>
  );
}
