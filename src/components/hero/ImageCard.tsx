"use client";

import Image from "next/image";
import { HeroCard } from "./HeroCard";
import { ReactNode } from "react";

interface ImageCardProps {
  src: string;
  alt: string;

  title?: ReactNode;
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
    | "mens"
    | "horizontalProduct"
    | "horizontalProductDark";

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
      <div className="group relative h-full w-full">
        <Image
          src={src}
          alt={alt}
          fill
          sizes="100vw"
          className="
          object-cover
          
        "
        />

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
    bg-white/5
      blur-md
      group-hover:left-[130%]

      transition-all
      duration-[1400ms]
      ease-out
    "
          />
        </div>

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

        {variant === "horizontalProduct" && (
          <div
            className="
      absolute
      left-5
      top-5
      bottom-5

      flex
      flex-col
      justify-between

      text-black
    "
          >
            <h3
              className="
        max-w-[220px]

        font-display
        text-[28px]
        leading-[1]
      "
            >
              {title}
            </h3>

            <button
              className="
        text-[14px]
        underline
        underline-offset-4
      "
            >
              {linkText} →
            </button>
          </div>
        )}

        {variant === "horizontalProductDark" && (
          <>
            <div
              className="
        absolute
        inset-0

        bg-gradient-to-r
        from-black/50
        to-transparent
      "
            />

            <div
              className="
        absolute
        left-5
        top-5
        bottom-5

        flex
        flex-col
        justify-between

        text-white
      "
            >
              <h3
                className="
          max-w-[220px]

          font-display
          text-[28px]
          leading-[1]
        "
              >
                {title}
              </h3>

              <button
                className="
          text-[14px]
          underline
          underline-offset-4
        "
              >
                {linkText} →
              </button>
            </div>
          </>
        )}
      </div>
    </HeroCard>
  );
}
