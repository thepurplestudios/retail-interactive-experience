"use client";

import {
  useEffect,
  useId,
  useMemo,
  useRef,
  useState,
  type CSSProperties,
  type ReactNode,
} from "react";
import { Mail, ArrowRight } from "lucide-react";
import { HeroCard } from "./HeroCard";
import { createNewsletterClip } from "./NewsletterClip";

interface NewsletterCardProps {
  className?: string;
  title?: string;
  subtitle?: string;
  placeholder?: string;
  buttonLabel?: string;
  icon?: ReactNode;

  size?: "desktop" | "tablet" | "mobile";

  /** Corner radius as a ratio of card width. Overrides the size preset if passed. */
  radiusRatio?: number;
  /** Notch width as a ratio of card width. Overrides the size preset if passed. */
  notchWidthRatio?: number;
  /** Notch height (depth) as a ratio of card height. Overrides the size preset if passed. */
  notchHeightRatio?: number;
}

// ─────────────────────────────────────────────────────────
// Size presets — clamp() ranges + notch geometry per size.
// Unlike the other cards, values here still flex with the
// card's own measured width/height via clamp(); size just
// shifts the min/preferred/max bounds and notch ratios so
// small cards don't inherit desktop-scale floors.
// ─────────────────────────────────────────────────────────

const newsletterStyles = {
  desktop: {
    radiusRatio: 0.06,
    notchWidthRatio: 0.34,
    notchHeightRatio: 0.2,
    padding:
      "clamp(21px, 6%, 28px) clamp(16px, 5%, 24px) clamp(30px, 4.5%, 20px)",
    iconSize: 18,
    titleMt: "clamp(25px, 3%, 12px)",
    title: "clamp(15px, 3vw, 19px)",
    subtitleMt: "clamp(12px, 2%, 8px)",
    subtitle: "clamp(10px, 1.6vw, 11px)",
    fieldHeight: "clamp(34px, 10%, 40px)",
    inputText: "clamp(11px, 1.8vw, 12px)",
    inputPadX: "0 clamp(10px, 3%, 16px)",
    arrowSize: 14,
  },

  tablet: {
    radiusRatio: 0.07,
    notchWidthRatio: 0.25,
    notchHeightRatio: 0.5,
    padding:
      "clamp(50px, 5%, 18px) clamp(15px, 4%, 20px) clamp(30px, 3.5%, 14px)",
    iconSize: 26,
    titleMt: "clamp(40px, 2%, 6px)",
    title: "clamp(26px, 2.2vw, 14px)",
    subtitleMt: "clamp(15px, 1.5%, 5px)",
    subtitle: "clamp(16px, 1.3vw, 9.5px)",
    fieldHeight: "clamp(30px, 8%, 32px)",
    inputText: "clamp(9px, 1.4vw, 10px)",
    inputPadX: "0 clamp(8px, 2%, 12px)",
    arrowSize: 11,
  },

  mobile: {
    radiusRatio: 0.06,
    notchWidthRatio: 0.4,
    notchHeightRatio: 0.4,
    padding:
      "clamp(30px, 5%, 16px) clamp(10px, 4%, 14px) clamp(20px, 3.5%, 12px)",
    iconSize: 12,
    titleMt: "clamp(15px, 2%, 6px)",
    title: "clamp(10px, 3.4vw, 13px)",
    subtitleMt: "clamp(6px, 1.5%, 5px)",
    subtitle: "clamp(7.5px, 2vw, 9px)",
    fieldHeight: "clamp(24px, 8%, 30px)",
    inputText: "clamp(8.5px, 2.4vw, 10px)",
    inputPadX: "0 clamp(6px, 2%, 10px)",
    arrowSize: 10,
  },
} as const;

export function NewsletterCard({
  className,
  title = "Join the Club",
  subtitle = "Get early access to new drops and exclusive offers.",
  placeholder = "Enter your email",
  buttonLabel = "Subscribe",
  icon,
  size = "desktop",
  radiusRatio,
  notchWidthRatio,
  notchHeightRatio,
}: NewsletterCardProps) {
  const ui = newsletterStyles[size];
  const resolvedIcon = icon ?? <Mail size={ui.iconSize} strokeWidth={1.5} />;

  const clipId = useId();
  const containerRef = useRef<HTMLDivElement>(null);
  const [measured, setMeasured] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new ResizeObserver(([entry]) => {
      const { width, height } = entry.contentRect;
      setMeasured({ width, height });
    });

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const resolvedRadiusRatio = radiusRatio ?? ui.radiusRatio;
  const resolvedNotchWidthRatio = notchWidthRatio ?? ui.notchWidthRatio;
  const resolvedNotchHeightRatio = notchHeightRatio ?? ui.notchHeightRatio;

  const clipPath = useMemo(() => {
    if (!measured.width || !measured.height) return "";
    return createNewsletterClip({
      width: measured.width,
      height: measured.height,
      radius: measured.width * resolvedRadiusRatio,
      notchWidth: measured.width * resolvedNotchWidthRatio,
      notchHeight: measured.height * resolvedNotchHeightRatio,
    });
  }, [
    measured.width,
    measured.height,
    resolvedRadiusRatio,
    resolvedNotchWidthRatio,
    resolvedNotchHeightRatio,
  ]);

  return (
    <HeroCard className={className}>
      <div
        ref={containerRef}
        className="relative h-full w-full"
        style={
          {
            "--newsletter-bg": "#d8c8f0ac",
            "--newsletter-text": "#2E2435",
            "--newsletter-text-muted": "#5F576B",
            "--newsletter-accent": "#4B3A63",
            "--newsletter-border": "#DDD5CA",
            "--newsletter-border-hover": "#B9AEC7",
            "--newsletter-placeholder": "#9C95A7",
          } as CSSProperties
        }
      >
        <svg
          className="absolute h-0 w-0 overflow-hidden"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <defs>
            <clipPath id={clipId} clipPathUnits="objectBoundingBox">
              <path d={clipPath} />
            </clipPath>
          </defs>
        </svg>

        <div
          className="absolute inset-0"
          style={{
            backgroundColor: "var(--newsletter-bg)",
            clipPath: clipPath ? `url(#${clipId})` : undefined,
          }}
        />

        <form
          className="absolute inset-0 flex flex-col"
          style={{
            padding: ui.padding,
            clipPath: clipPath ? `url(#${clipId})` : undefined,
          }}
          aria-label={title}
          onSubmit={(e) => e.preventDefault()}
        >
          <span
            style={{ color: "var(--newsletter-accent)" }}
            aria-hidden="true"
          >
            {resolvedIcon}
          </span>

          <h2
            className="font-display leading-[1.05]"
            style={{
              marginTop: ui.titleMt,
              fontSize: ui.title,
              color: "var(--newsletter-text)",
            }}
          >
            {title}
          </h2>

          <p
            className="leading-[1.5]"
            style={{
              marginTop: ui.subtitleMt,
              fontSize: ui.subtitle,
              color: "var(--newsletter-text-muted)",
            }}
          >
            {subtitle}
          </p>

          <div className="flex-1" />

          <div className="flex items-center gap-2">
            <label className="sr-only" htmlFor={`${clipId}-email`}>
              Email address
            </label>
            <input
              id={`${clipId}-email`}
              type="email"
              required
              placeholder={placeholder}
              className="
                flex-1 rounded-xl border bg-white outline-none
                transition-all duration-300
              "
              style={{
                height: ui.fieldHeight,
                fontSize: ui.inputText,
                padding: ui.inputPadX,
                borderColor: "var(--newsletter-border)",
                color: "var(--newsletter-text)",
              }}
              onFocus={(e) => {
                e.currentTarget.style.borderColor = "var(--newsletter-accent)";
                e.currentTarget.style.boxShadow =
                  "0 0 0 2px color-mix(in srgb, var(--newsletter-accent) 10%, transparent)";
              }}
              onBlur={(e) => {
                e.currentTarget.style.borderColor = "var(--newsletter-border)";
                e.currentTarget.style.boxShadow = "none";
              }}
            />
            <button
              type="submit"
              title={buttonLabel}
              aria-label={buttonLabel}
              className="group/newsletter-arrow flex items-center justify-center rounded-xl text-white shrink-0"
              style={{
                height: ui.fieldHeight,
                width: ui.fieldHeight,
                backgroundColor: "var(--newsletter-accent)",
              }}
            >
              <ArrowRight
                size={ui.arrowSize}
                className="transition-transform duration-500 ease-out group-hover/newsletter-arrow:translate-x-1"
              />
            </button>
          </div>
        </form>
      </div>
    </HeroCard>
  );
}
