"use client";
import { Mail, ArrowRight } from "lucide-react";
import { HeroCard } from "./HeroCard";

const CLIP_ID = "newsletterTabClip";

const W = 250,
  H = 200,
  R = 20;
const NOTCH_W = 90,
  NOTCH_H = 44;
const K = 0.5523;

const rX = R / W;
const rY = R / H;
const nX = (W - NOTCH_W) / W; // notch left edge  ~0.64
const nY = NOTCH_H / H; // notch bottom     ~0.22
const nXr = nX + rX; // notch curve end  ~0.72
const nY0 = nY - rY; // notch curve start ~0.12

export function NewsletterCard({ className }: { className?: string }) {
  const d = `
    M ${rX},0
    L ${nX - rX},0
    C ${nX - rX + rX * K},0 ${nX},${rY * (1 - K)} ${nX},${rY}
    L ${nX},${nY0}
    C ${nX},${nY0 + rY * K} ${nXr - rX * K},${nY} ${nXr},${nY}
    L ${1 - rX},${nY}
    C ${1 - rX * (1 - K)},${nY} 1,${nY + rY * K} 1,${nY + rY}
    L 1,${1 - rY}
    C 1,${1 - rY + rY * K} ${1 - rX * (1 - K)},1 ${1 - rX},1
    L ${rX},1
    C ${rX * (1 - K)},1 0,${1 - rY * (1 - K)} 0,${1 - rY}
    L 0,${rY}
    C 0,${rY * (1 - K)} ${rX * (1 - K)},0 ${rX},0
    Z
  `;

  return (
    <HeroCard className={className} noBackground>
      <div className="relative h-full w-full">
        <svg
          className="absolute w-0 h-0 overflow-hidden"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <clipPath id={CLIP_ID} clipPathUnits="objectBoundingBox">
              <path d={d} />
            </clipPath>
          </defs>
        </svg>

        <div
          className="absolute inset-0 bg-[#F5F1EB]"
          style={{ clipPath: `url(#${CLIP_ID})` }}
        />
        <div
          className="absolute inset-0 flex flex-col px-6 pb-5"
          style={{
            paddingTop: `${NOTCH_H - 6}px`,
            clipPath: `url(#${CLIP_ID})`,
          }}
        >
          <Mail size={16} strokeWidth={1.5} className="text-[#4B3A63]" />
          <h2 className="mt-3 font-display text-[19px] leading-[1.05] text-[#2E2435]">
            {" "}
            Join the Club
          </h2>
          <p className="mt-2 text-[11px] leading-[1.5] text-[#5F576B]">
            {" "}
            Get early access to new drops and exclusive offers.
          </p>
          <div className="flex-1" />
          <div className="flex items-center gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="
  h-[40px]
  flex-1
  rounded-xl
  border
  border-[#DDD5CA]
  bg-white
  px-4
  text-[12px]
  outline-none
  placeholder:text-[#9C95A7]
"
            />
            <button
              className="
  flex
  h-[40px]
  w-[40px]
  items-center
  justify-center
  rounded-xl
  bg-[#4B3A63]
  text-white
"
            >
              <ArrowRight size={14} />
            </button>
          </div>
        </div>
      </div>
    </HeroCard>
  );
}
