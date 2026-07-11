"use client";

import { Gem, Leaf, Heart, LucideIcon } from "lucide-react";
import { HeroCard } from "./HeroCard";

interface PromiseCardProps {
  size?: "desktop" | "tablet" | "mobile";
}

const promises: { icon: LucideIcon; label: string }[] = [
  { icon: Gem, label: "Premium Quality" },
  { icon: Leaf, label: "Skin Friendly" },
  { icon: Heart, label: "Small Batch" },
];

const promiseCardStyles = {
  desktop: {
    wrapper: "px-5 py-6",
    heading: "text-[16px]",
    listMt: "mt-8",
    listGap: "space-y-6",
    itemGap: "gap-3",
    iconSize: 18,
    label: "text-[13px]",
    align: "items-start text-left",
  },

  tablet: {
    wrapper: "px-4 py-5",
    heading: "text-[14px]",
    listMt: "mt-5",
    listGap: "space-y-4",
    itemGap: "gap-2.5",
    iconSize: 15,
    label: "text-[12px]",
    align: "items-start text-left",
  },

  mobile: {
    wrapper: "px-3 py-3",
    heading: "text-[12px]",
    listMt: "mt-5",
    listGap: "space-y-2",
    itemGap: "gap-1.5",
    iconSize: 13,
    label: "text-[10.5px]",
    align: "items-center text-center",
  },
} as const;

export function PromiseCard({ size = "desktop" }: PromiseCardProps) {
  const ui = promiseCardStyles[size];

  return (
    <HeroCard className="h-full w-full bg-[#E8DFD3] border-white/60 overflow-hidden">
      <div className={`h-full flex flex-col ${ui.align} ${ui.wrapper}`}>
        <p
          className={`
            font-medium
            text-[var(--primary)]

            ${ui.heading}
          `}
        >
          Our Promise
        </p>

        <div className={`${ui.listMt} ${ui.listGap} w-full`}>
          {promises.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className={`
                group/promise

                flex
                items-center
                justify-center

                ${ui.itemGap}
              `}
            >
              <Icon
                size={ui.iconSize}
                strokeWidth={1.75}
                className="
                  shrink-0
                  text-[var(--text-muted)]

                  transition-all
                  duration-500

                  group-hover/promise:rotate-6
                "
              />
              <span
                className={`
                  truncate
                  text-[var(--text-muted)]

                  transition-transform
                  duration-500

                  group-hover/promise:translate-x-1

                  ${ui.label}
                `}
              >
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </HeroCard>
  );
}
