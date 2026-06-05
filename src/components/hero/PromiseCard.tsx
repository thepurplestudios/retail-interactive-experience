"use client";

import { Gem, Leaf, Heart } from "lucide-react";
import { HeroCard } from "./HeroCard";

export function PromiseCard() {
  return (
    <HeroCard className="h-full w-full bg-[#E8DFD3] border-white/60 ">
      <div className="h-full px-5 py-6">
        <p
          className="
            text-[16px]
            font-medium
            text-[var(--primary)]
          "
        >
          Our Promise
        </p>

        <div className="mt-8 space-y-6">
          <div
            className="
              group/promise

              flex
              items-center
              gap-3
            "
          >
            {" "}
            <Gem
              size={18}
              strokeWidth={1.75}
              className="
                text-[var(--text-muted)]

                transition-all
                duration-500

                group-hover/promise:rotate-6
              "
            />
            <span
              className="
              text-[13px]
              text-[var(--text-muted)]

              transition-transform
              duration-500

              group-hover/promise:translate-x-1
            "
            >
              Premium Quality
            </span>
          </div>

          <div
            className="
              group/promise

              flex
              items-center
              gap-3
            "
          >
            {" "}
            <Leaf
              size={18}
              strokeWidth={1.75}
              className="
                text-[var(--text-muted)]

                transition-all
                duration-500

                group-hover/promise:rotate-6
              "
            />
            <span
              className="
                text-[13px]
                text-[var(--text-muted)]

                transition-transform
                duration-500

                group-hover/promise:translate-x-1
              "
            >
              Skin Friendly
            </span>
          </div>

          <div
            className="
              group/promise

              flex
              items-center
              gap-3
            "
          >
            {" "}
            <Heart
              size={18}
              strokeWidth={1.75}
              className="
                text-[var(--text-muted)]

                transition-all
                duration-500

                group-hover/promise:rotate-6
              "
            />
            <span
              className="
                text-[13px]
                text-[var(--text-muted)]

                transition-transform
                duration-500

                group-hover/promise:translate-x-1
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
