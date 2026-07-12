"use client";

import { ArrowRight } from "lucide-react";

import Image from "next/image";
import { HeroCard } from "./HeroCard";
import { ReactNode } from "react";

type CardSize = "desktop" | "tablet" | "mobile";

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

  size?: CardSize;

  className?: string;
}

// ─────────────────────────────────────────────────────────
// Design tokens — one preset per variant, per size.
// Layouts decide the size; this component just renders it.
// ─────────────────────────────────────────────────────────

const imageCardStyles = {
  editorial: {
    desktop: {
      wrapper: "p-6",
      subtitleMb: "mb-3",
      subtitle: "text-xs tracking-[0.25em]",
      titleMaxW: "max-w-[220px]",
      title: "text-4xl",
      buttonMt: "mt-6",
      button: "px-5 py-3 text-sm",
      arrowSize: 16,
    },
    tablet: {
      wrapper: "p-5",
      subtitleMb: "mb-2.5",
      subtitle: "text-[11px] tracking-[0.2em]",
      titleMaxW: "max-w-[190px]",
      title: "text-3xl",
      buttonMt: "mt-5",
      button: "px-4.5 py-2.5 text-xs",
      arrowSize: 16,
    },
    mobile: {
      wrapper: "p-4",
      subtitleMb: "mb-2",
      subtitle: "text-[10px] tracking-[0.15em]",
      titleMaxW: "max-w-[160px]",
      title: "text-2xl",
      buttonMt: "mt-4",
      button: "px-3 py-1.5 text-[10px] rounded-md whitespace-nowrap",
      arrowSize: 10,
    },
  },

  product: {
    desktop: {
      inset: "left-5 bottom-5",
      subtitle: "text-sm",
      title: "mt-2 text-[18px]",
      price: "mt-2 text-[18px]",
      ctaPos: "bottom-5 right-5",
      ctaSize: "h-10 w-10",
      arrowSize: 16,
    },
    tablet: {
      inset: "left-4.5 bottom-4.5",
      subtitle: "text-sm",
      title: "mt-2 text-[16px]",
      price: "mt-2 text-[16px]",
      ctaPos: "bottom-4.5 right-4.5",
      ctaSize: "h-9 w-9",
      arrowSize: 15,
    },
    mobile: {
      inset: "left-4 bottom-4",
      subtitle: "text-xs",
      title: "mt-1.5 text-[14px]",
      price: "mt-1.5 text-[14px]",
      ctaPos: "bottom-4 right-4",
      ctaSize: "h-8 w-8",
      arrowSize: 14,
    },
  },

  smallProduct: {
    desktop: {
      wrapper: "p-4",
      title: "mt-2 text-[14px]",
      description: "mt-2 text-[12px]",
      link: "mt-2 !text-[14px]",
      arrowSize: 14,
    },
    tablet: {
      wrapper: "p-3.5",
      title: "mt-2 text-[13px]",
      description: "mt-2 text-[11px]",
      link: "mt-2 !text-[13px]",
      arrowSize: 14,
    },
    mobile: {
      wrapper: "p-3",
      title: "!mt-0.8 text-[12px]",
      description: "!mt-0.8 text-[10px]",
      link: "!mt-0.8 !text-[12px]",
      arrowSize: 13,
    },
  },

  smallProductDark: {
    desktop: {
      wrapper: "p-4",
      title: "text-[16px]",
      description: "mt-2 text-[8px]",
      link: "mt-3 !text-[12px]",
    },
    tablet: {
      wrapper: "p-3.5",
      title: "text-[14px]",
      description: "mt-2 text-[8px]",
      link: "mt-2.5 !text-[11px]",
    },
    mobile: {
      wrapper: "p-3",
      title: "text-[13px]",
      description: "mt-1.5 text-[7px]",
      link: "mt-2 !text-[11px]",
    },
  },

  mens: {
    desktop: {
      inset: "top-8 left-8 right-8",
      align: "items-start text-left",
      subtitleMb: "mb-4",
      subtitle: "text-[11px] tracking-[0.25em]",
      titleMaxW: "max-w-[220px]",
      title: "text-[28px]",
      linkMt: "mt-2",
      link: "text-[14px]",
      arrowSize: 14,
    },
    tablet: {
      inset: "top-6 left-6 right-6",
      align: "items-start text-left",
      subtitleMb: "mb-3",
      subtitle: "text-[10px] tracking-[0.2em]",
      titleMaxW: "max-w-[190px]",
      title: "text-[24px]",
      linkMt: "mt-5",
      link: "text-[13px]",
      arrowSize: 14,
    },
    mobile: {
      inset: "top-3 left-3 right-3",
      align: "items-start text-left",
      subtitleMb: "mb-3",
      subtitle: "text-[7px] tracking-[0.1em]",
      titleMaxW: "max-w-[130px]",
      title: "text-[14px]",
      linkMt: "mt-3",
      link: "!text-[12px]",
      arrowSize: 11,
    },
  },

  horizontalProduct: {
    desktop: {
      inset: "left-5 top-5 bottom-5",
      titleMaxW: "max-w-[220px]",
      title: "text-[28px]",
      linkMt: "mt-2",
      link: "text-[14px]",
      arrowSize: 14,
    },
    tablet: {
      inset: "left-4.5 top-4.5 bottom-4.5",
      titleMaxW: "max-w-[180px]",
      title: "text-[22px]",
      linkMt: "mt-1.5",
      link: "text-[13px]",
      arrowSize: 14,
    },
    mobile: {
      inset: "left-4 top-4 bottom-4",
      titleMaxW: "max-w-[140px]",
      title: "text-[18px]",
      linkMt: "mt-1.5",
      link: "text-[12px]",
      arrowSize: 14,
    },
  },

  horizontalProductDark: {
    desktop: {
      inset: "left-5 top-5 bottom-5",
      titleMaxW: "max-w-[220px]",
      title: "text-[28px]",
      linkMt: "mt-2",
      link: "text-[14px]",
      arrowSize: 14,
    },
    tablet: {
      inset: "left-4.5 top-4.5 bottom-4.5",
      titleMaxW: "max-w-[180px]",
      title: "text-[22px]",
      linkMt: "mt-1.5",
      link: "text-[13px]",
      arrowSize: 14,
    },
    mobile: {
      inset: "left-4 top-4 bottom-4",
      titleMaxW: "max-w-[140px]",
      title: "text-[18px]",
      linkMt: "mt-1.5",
      link: "text-[12px]",
      arrowSize: 14,
    },
  },
} as const;

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
  size = "desktop",
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
          className="object-cover"
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

        {variant === "editorial" &&
          (title || subtitle) &&
          (() => {
            const ui = imageCardStyles.editorial[size];
            return (
              <div
                className={`absolute bottom-0 left-0 right-0 ${ui.wrapper} text-white`}
              >
                {subtitle && (
                  <p
                    className={`${ui.subtitleMb} uppercase text-white/80 ${ui.subtitle}`}
                  >
                    {subtitle}
                  </p>
                )}

                {title && (
                  <h3
                    className={`font-display leading-[0.95] ${ui.titleMaxW} ${ui.title}`}
                  >
                    {title}
                  </h3>
                )}

                {buttonText && (
                  <button
                    className={`
                        group/cta
                        ${ui.buttonMt}
                        border
                        border-white/40
                        backdrop-blur-md
                        ${ui.button}
                      `}
                  >
                    <span className="flex items-center gap-1">
                      {buttonText.replace(" →", "")}
                      <ArrowRight
                        size={ui.arrowSize}
                        className="
                          shrink-0
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
            );
          })()}

        {variant === "product" &&
          (() => {
            const ui = imageCardStyles.product[size];
            return (
              <>
                <div className={`absolute ${ui.inset} text-[#000000]`}>
                  <p className={`${ui.subtitle} text-black/60`}>{subtitle}</p>
                  <h3 className={`font-medium ${ui.title}`}>{title}</h3>
                  <p className={`font-semibold ${ui.price}`}>{price}</p>
                </div>

                <button
                  className={`
                    absolute
                    ${ui.ctaPos}
                    group/product-cta
                    flex
                    ${ui.ctaSize}
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-white/50
                    bg-white/20
                    backdrop-blur-md
                  `}
                >
                  <ArrowRight
                    size={ui.arrowSize}
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
            );
          })()}

        {variant === "smallProduct" &&
          (() => {
            const ui = imageCardStyles.smallProduct[size];
            return (
              <div
                className={`absolute bottom-0 left-0 right-0 ${ui.wrapper} text-[#2E2435]`}
              >
                <h3 className={`font-semibold text-[#000000] ${ui.title}`}>
                  {title}
                </h3>

                {description && (
                  <p className={`text-[#000000] ${ui.description}`}>
                    {description}
                  </p>
                )}

                {linkText && (
                  <button
                    className={`
                      group/discover
                      font-medium
                      underline
                      underline-offset-4
                      text-[#000000]
                      ${ui.link}
                    `}
                  >
                    <span className="flex items-center gap-1">
                      {linkText}
                      <ArrowRight
                        size={ui.arrowSize}
                        className="
                          shrink-0
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
            );
          })()}

        {variant === "smallProductDark" &&
          (() => {
            const ui = imageCardStyles.smallProductDark[size];
            return (
              <>
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

                <div
                  className={`absolute bottom-0 left-0 right-0 ${ui.wrapper} text-white`}
                >
                  <h3 className={`font-semibold text-white ${ui.title}`}>
                    {title}
                  </h3>

                  {description && (
                    <p
                      className={`leading-relaxed text-white/90 ${ui.description}`}
                    >
                      {description}
                    </p>
                  )}

                  {linkText && (
                    <button
                      className={`font-medium text-white underline underline-offset-4 ${ui.link}`}
                    >
                      {linkText} →
                    </button>
                  )}
                </div>
              </>
            );
          })()}

        {variant === "mens" &&
          (() => {
            const ui = imageCardStyles.mens[size];
            return (
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
                  className={`absolute ${ui.inset} flex flex-col ${ui.align} text-white`}
                >
                  {subtitle && (
                    <p
                      className={`${ui.subtitleMb} uppercase text-white/80 ${ui.subtitle}`}
                    >
                      {subtitle}
                    </p>
                  )}

                  <h3
                    className={`font-display leading-[1.05] text-white text-left ${ui.titleMaxW} ${ui.title}`}
                  >
                    {title}
                  </h3>

                  {linkText && (
                    <button
                      className={`group/link ${ui.linkMt} font-medium underline underline-offset-4 text-left ${ui.link}`}
                    >
                      <span className="flex items-center gap-1">
                        {linkText}
                        <ArrowRight
                          size={ui.arrowSize}
                          className="
                    shrink-0
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
            );
          })()}

        {variant === "horizontalProduct" &&
          (() => {
            const ui = imageCardStyles.horizontalProduct[size];
            return (
              <div
                className={`absolute ${ui.inset} flex flex-col justify-between text-black`}
              >
                <h3
                  className={`font-display leading-[1] ${ui.titleMaxW} ${ui.title}`}
                >
                  {title}
                </h3>

                {linkText && (
                  <button
                    className={`group/link ${ui.linkMt} font-medium underline underline-offset-4 ${ui.link}`}
                  >
                    <span className="flex items-center gap-1">
                      {linkText}
                      <ArrowRight
                        size={ui.arrowSize}
                        className="
                          shrink-0
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
            );
          })()}

        {variant === "horizontalProductDark" &&
          (() => {
            const ui = imageCardStyles.horizontalProductDark[size];
            return (
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
                  className={`absolute ${ui.inset} flex flex-col justify-between text-white`}
                >
                  <h3
                    className={`font-display leading-[1] ${ui.titleMaxW} ${ui.title}`}
                  >
                    {title}
                  </h3>

                  {linkText && (
                    <button
                      className={`group/link ${ui.linkMt} font-medium underline underline-offset-4 ${ui.link}`}
                    >
                      <span className="flex items-center gap-1">
                        {linkText}
                        <ArrowRight
                          size={ui.arrowSize}
                          className="
                            shrink-0
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
            );
          })()}
      </div>
    </HeroCard>
  );
}
