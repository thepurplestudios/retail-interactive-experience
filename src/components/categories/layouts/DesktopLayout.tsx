"use client";

import { useState } from "react";

import { ChevronLeft, ChevronRight } from "lucide-react";

import CategoryCard from "../CategoryCard";
import { CATEGORIES } from "../data/categories";
import { DESKTOP_CATEGORY_LAYOUT } from "../data/desktop";

export default function DesktopLayout() {
  const [activeIndex, setActiveIndex] = useState(2);
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

        <div
          className="
            relative
            overflow-hidden
            flex
            items-center
            justify-center
        "
        >
          {" "}
          {/* Left */}
          <button
            onClick={() =>
              setActiveIndex((prev) =>
                prev === 0 ? CATEGORIES.length - 1 : prev - 1,
              )
            }
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
          <div className="flex justify-center">
            {/* Card */}
            <div
              className="flex items-center"
              style={{
                gap: DESKTOP_CATEGORY_LAYOUT.carousel.gap,
              }}
            >
              {CATEGORIES.map((category, index) => (
                <div
                  key={category.id}
                  className={`
                    shrink-0
                    transition-all
                    duration-500
                    ${index === activeIndex ? "scale-100 opacity-100" : "scale-90 opacity-60"}
                    `}
                  style={{
                    width: DESKTOP_CATEGORY_LAYOUT.carousel.cardWidth,
                    height: DESKTOP_CATEGORY_LAYOUT.carousel.cardHeight,
                  }}
                >
                  <CategoryCard
                    title={category.title}
                    productCount={category.productCount}
                    image=""
                    href={category.href}
                  />
                </div>
              ))}
            </div>
          </div>
          {/* Right */}
          <button
            onClick={() =>
              setActiveIndex((prev) =>
                prev === CATEGORIES.length - 1 ? 0 : prev + 1,
              )
            }
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
