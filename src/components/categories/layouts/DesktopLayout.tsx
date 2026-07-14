"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";

import CategoryCard from "../CategoryCard";
import { CATEGORIES } from "../data/categories";
import { DESKTOP_CATEGORY_LAYOUT } from "../data/desktop";

export default function DesktopLayout() {
  return (
    <section
      className="
        hidden
        lg:block
        py-28
      "
    >
      <div
        className="mx-auto"
        style={{
          maxWidth: DESKTOP_CATEGORY_LAYOUT.section.maxWidth,
        }}
      >
        {/* Heading */}

        <div
          className="mx-auto mb-16 text-center"
          style={{
            maxWidth: DESKTOP_CATEGORY_LAYOUT.header.maxWidth,
          }}
        >
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-neutral-500">
            Browse Collections
          </p>

          <h2 className="font-display text-6xl leading-none">
            Find Your Style
          </h2>
        </div>

        {/* Carousel */}

        <div className="relative flex items-center justify-center">
          {/* Left */}

          <button
            className="
              absolute
              left-10

              z-10

              flex
              h-12
              w-12
              items-center
              justify-center

              rounded-full

              border

              bg-white
            "
          >
            <ChevronLeft size={22} />
          </button>

          {/* Card */}

          <div
            style={{
              width: DESKTOP_CATEGORY_LAYOUT.carousel.cardWidth,
              height: DESKTOP_CATEGORY_LAYOUT.carousel.cardHeight,
            }}
          >
            <CategoryCard
              title={CATEGORIES[0].title}
              productCount={CATEGORIES[0].productCount}
              image=""
            />
          </div>

          {/* Right */}

          <button
            className="
              absolute
              right-10

              z-10

              flex
              h-12
              w-12
              items-center
              justify-center

              rounded-full

              border

              bg-white
            "
          >
            <ChevronRight size={22} />
          </button>
        </div>
      </div>
    </section>
  );
}
