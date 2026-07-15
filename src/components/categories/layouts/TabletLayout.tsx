"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import CategoryCard from "../CategoryCard";
import { CATEGORIES } from "../data/categories";
import { TABLET_CATEGORY_LAYOUT } from "../data/tablet";

export default function TabletLayout() {
  const [activeIndex, setActiveIndex] = useState(2);

  const previousCategory = () => {
    setActiveIndex((prev) => (prev === 0 ? CATEGORIES.length - 1 : prev - 1));
  };

  const nextCategory = () => {
    setActiveIndex((prev) => (prev === CATEGORIES.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="hidden md:block lg:hidden py-24">
      <div
        className="mx-auto"
        style={{
          maxWidth: TABLET_CATEGORY_LAYOUT.section.maxWidth,
        }}
      >
        {/* Heading */}

        <div
          className="mx-auto mb-14 text-center"
          style={{
            maxWidth: TABLET_CATEGORY_LAYOUT.header.maxWidth,
          }}
        >
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-neutral-500">
            Browse Collections
          </p>

          <h2 className="font-display text-5xl leading-none">
            Find Your Style
          </h2>
        </div>

        {/* Card */}

        <div className="flex items-center justify-center gap-8">
          <button
            onClick={previousCategory}
            className="flex h-11 w-11 items-center justify-center rounded-full border bg-white"
          >
            <ChevronLeft size={20} />
          </button>

          <div
            style={{
              width: TABLET_CATEGORY_LAYOUT.card.width,
              height: TABLET_CATEGORY_LAYOUT.card.height,
            }}
          >
            <CategoryCard
              title={CATEGORIES[activeIndex].title}
              image={CATEGORIES[activeIndex].image}
              productCount={CATEGORIES[activeIndex].productCount}
              editorial={CATEGORIES[activeIndex].editorial}
              href={CATEGORIES[activeIndex].href}
            />
          </div>

          <button
            onClick={nextCategory}
            className="flex h-11 w-11 items-center justify-center rounded-full border bg-white"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}
