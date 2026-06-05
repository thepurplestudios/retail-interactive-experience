"use client";

import { ArrowRight } from "lucide-react";

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
                  group/cta

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
                <span
                  className="
                    flex
                    items-center
                    gap-2
                  "
                >
                  {buttonText.replace(" →", "")}

                  <ArrowRight
                    size={16}
                    className="
                      transition-transform
                      duration-500
                      ease-out

                      group-hover/cta:translate-x-1
                    "
                  />
                </span>
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
                bottom-5
                right-5

                group/product-cta

                flex
                h-10
                w-10

                items-center
                justify-center

                rounded-full

                border
                border-white/50

                bg-white/20
                backdrop-blur-md
              "
            >
              <ArrowRight
                size={16}
                className="
                text-[#2E2435]

                transition-transform
                duration-500
                ease-out

                group-hover/product-cta:translate-x-1
              "
              />
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
                  group/discover

                  mt-2

                  !text-[14px]
                  font-medium

                  underline
                  underline-offset-4

                  text-[#000000]
                "
              >
                <span className="flex items-center gap-1">
                  {linkText}

                  <ArrowRight
                    size={14}
                    className="
                      transition-transform
                      duration-500
                      ease-out

                      group-hover/discover:translate-x-1
                    "
                  />
                </span>
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
                  text-[16px]
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
                    text-[8px]
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
                    group/link

                    mt-2

                    text-[14px]
                    font-medium

                    underline
                    underline-offset-4
                  "
                >
                  <span className="flex items-center gap-1">
                    {linkText}

                    <ArrowRight
                      size={14}
                      className="
                        transition-transform
                        duration-500
                        ease-out

                        group-hover/link:translate-x-1
                      "
                    />
                  </span>
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

            {linkText && (
              <button
                className="
      group/link

      mt-2

      text-[14px]
      font-medium

      underline
      underline-offset-4
    "
              >
                <span className="flex items-center gap-1">
                  {linkText}

                  <ArrowRight
                    size={14}
                    className="
          transition-transform
          duration-500
          ease-out

          group-hover/link:translate-x-1
        "
                  />
                </span>
              </button>
            )}
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

              {linkText && (
                <button
                  className="
      group/link

      mt-2

      text-[14px]
      font-medium

      underline
      underline-offset-4
    "
                >
                  <span className="flex items-center gap-1">
                    {linkText}

                    <ArrowRight
                      size={14}
                      className="
          transition-transform
          duration-500
          ease-out

          group-hover/link:translate-x-1
        "
                    />
                  </span>
                </button>
              )}
            </div>
          </>
        )}
      </div>
    </HeroCard>
  );
}
