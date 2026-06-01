"use client";

import { Gem, Leaf, Heart } from "lucide-react";
import { HeroCard } from "./HeroCard";

export function PromiseCard() {
  return (
    <HeroCard className="h-full w-full bg-[#E8DFD3] border-white/60">
      <div className="h-full px-5 py-6">
        <p
          className="
            text-[16px]
            font-medium
            text-[#2E2435]
          "
        >
          Our Promise
        </p>

        <div className="mt-8 space-y-6">
          <div className="flex items-center gap-3">
            <Gem size={18} strokeWidth={1.75} className="text-[#2E2435]" />

            <span
              className="
                text-[13px]
                text-[#3A3342]
              "
            >
              Premium Quality
            </span>
          </div>

          <div className="flex items-center gap-3">
            <Leaf size={18} strokeWidth={1.75} className="text-[#2E2435]" />

            <span
              className="
                text-[13px]
                text-[#3A3342]
              "
            >
              Skin Friendly
            </span>
          </div>

          <div className="flex items-center gap-3">
            <Heart size={18} strokeWidth={1.75} className="text-[#2E2435]" />

            <span
              className="
                text-[13px]
                text-[#3A3342]
              "
            >
              Small Batch
            </span>
          </div>
        </div>
      </div>
    </HeroCard>
  );
}
