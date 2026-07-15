"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import CategoryCard from "../CategoryCard";
import { CATEGORIES } from "../data/categories";
import { TABLET_CATEGORY_LAYOUT } from "../data/tablet";

export default function TabletLayout() {
  const [activeIndex, setActiveIndex] = useState(2);

  const previousIndex =
    activeIndex === 0 ? CATEGORIES.length - 1 : activeIndex - 1;

  const nextIndex = activeIndex === CATEGORIES.length - 1 ? 0 : activeIndex + 1;

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

        <div className="relative flex items-center justify-center">
          {/* Left Arrow */}

          <button
            onClick={previousCategory}
            className="
      absolute
      left-0
      z-20
      flex
      h-11
      w-11
      items-center
      justify-center
      rounded-full
      border
      bg-white
    "
          >
            <ChevronLeft size={20} />
          </button>

          {/* Previous Preview */}

          <div
            className="absolute left-16 overflow-hidden rounded-[32px] opacity-60"
            style={{
              width: TABLET_CATEGORY_LAYOUT.preview.visibleWidth,
              height: TABLET_CATEGORY_LAYOUT.card.height,
            }}
          >
            <div
              style={{
                width: TABLET_CATEGORY_LAYOUT.card.width,
                height: TABLET_CATEGORY_LAYOUT.card.height,
              }}
            >
              <CategoryCard
                title={CATEGORIES[previousIndex].title}
                image={CATEGORIES[previousIndex].image}
                productCount={CATEGORIES[previousIndex].productCount}
                editorial={CATEGORIES[previousIndex].editorial}
                href={CATEGORIES[previousIndex].href}
              />
            </div>
          </div>

          {/* Active */}

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

          {/* Next Preview */}

          <div
            className="absolute right-16 overflow-hidden rounded-[32px] opacity-60"
            style={{
              width: TABLET_CATEGORY_LAYOUT.preview.visibleWidth,
              height: TABLET_CATEGORY_LAYOUT.card.height,
            }}
          >
            <div
              style={{
                width: TABLET_CATEGORY_LAYOUT.card.width,
                height: TABLET_CATEGORY_LAYOUT.card.height,
              }}
            >
              <CategoryCard
                title={CATEGORIES[nextIndex].title}
                image={CATEGORIES[nextIndex].image}
                productCount={CATEGORIES[nextIndex].productCount}
                editorial={CATEGORIES[nextIndex].editorial}
                href={CATEGORIES[nextIndex].href}
              />
            </div>
          </div>

          {/* Right Arrow */}

          <button
            onClick={nextCategory}
            className="
      absolute
      right-0
      z-20
      flex
      h-11
      w-11
      items-center
      justify-center
      rounded-full
      border
      bg-white
    "
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}
