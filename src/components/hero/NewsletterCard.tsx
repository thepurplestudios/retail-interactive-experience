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
  /** Corner radius as a ratio of card width. Default matches desktop. */
  radiusRatio?: number;
  /** Notch width as a ratio of card width. Default matches desktop. */
  notchWidthRatio?: number;
  /** Notch height (depth) as a ratio of card height. Default matches desktop. */
  notchHeightRatio?: number;
}

// Defaults — these are what desktop uses when no overrides are passed.
const DEFAULT_RADIUS_RATIO = 0.08;
const DEFAULT_NOTCH_WIDTH_RATIO = 0.36;
const DEFAULT_NOTCH_HEIGHT_RATIO = 0.22;

export function NewsletterCard({
  className,
  title = "Join the Club",
  subtitle = "Get early access to new drops and exclusive offers.",
  placeholder = "Enter your email",
  buttonLabel = "Subscribe",
  icon = <Mail size={16} strokeWidth={1.5} />,
  radiusRatio = DEFAULT_RADIUS_RATIO,
  notchWidthRatio = DEFAULT_NOTCH_WIDTH_RATIO,
  notchHeightRatio = DEFAULT_NOTCH_HEIGHT_RATIO,
}: NewsletterCardProps) {
  const clipId = useId();
  const containerRef = useRef<HTMLDivElement>(null);
  const [size, setSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new ResizeObserver(([entry]) => {
      const { width, height } = entry.contentRect;
      setSize({ width, height });
    });

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const clipPath = useMemo(() => {
    if (!size.width || !size.height) return "";
    return createNewsletterClip({
      width: size.width,
      height: size.height,
      radius: size.width * radiusRatio,
      notchWidth: size.width * notchWidthRatio,
      notchHeight: size.height * notchHeightRatio,
    });
  }, [size.width, size.height, radiusRatio, notchWidthRatio, notchHeightRatio]);

  return (
    <HeroCard className={className}>
      <div
        ref={containerRef}
        className="relative h-full w-full"
        style={
          {
            "--newsletter-bg": "#bebdbd",
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
            padding:
              "clamp(16px, 6%, 28px) clamp(16px, 5%, 24px) clamp(14px, 4.5%, 20px)",
            clipPath: clipPath ? `url(#${clipId})` : undefined,
          }}
          aria-label={title}
          onSubmit={(e) => e.preventDefault()}
        >
          <span
            style={{ color: "var(--newsletter-accent)" }}
            aria-hidden="true"
          >
            {icon}
          </span>

          <h2
            className="font-display leading-[1.05]"
            style={{
              marginTop: "clamp(8px, 3%, 12px)",
              fontSize: "clamp(15px, 3vw, 19px)",
              color: "var(--newsletter-text)",
            }}
          >
            {title}
          </h2>

          <p
            className="leading-[1.5]"
            style={{
              marginTop: "clamp(6px, 2%, 8px)",
              fontSize: "clamp(10px, 1.6vw, 11px)",
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
                height: "clamp(34px, 10%, 40px)",
                fontSize: "clamp(11px, 1.8vw, 12px)",
                padding: "0 clamp(10px, 3%, 16px)",
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
              className="group/newsletter-arrow flex items-center justify-center rounded-xl text-white"
              style={{
                height: "clamp(34px, 10%, 40px)",
                width: "clamp(34px, 10%, 40px)",
                backgroundColor: "var(--newsletter-accent)",
              }}
            >
              <ArrowRight
                size={14}
                className="transition-transform duration-500 ease-out group-hover/newsletter-arrow:translate-x-1"
              />
            </button>
          </div>
        </form>
      </div>
    </HeroCard>
  );
}
