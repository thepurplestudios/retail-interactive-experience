"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import CategoryCard from "../CategoryCard";
import { CATEGORIES } from "../data/categories";
import { MOBILE_CATEGORY_LAYOUT } from "../data/mobile";

export default function MobileLayout() {
  const [activeIndex, setActiveIndex] = useState(2);
  const [direction, setDirection] = useState(0);

  const previousIndex =
    activeIndex === 0 ? CATEGORIES.length - 1 : activeIndex - 1;

  const nextIndex = activeIndex === CATEGORIES.length - 1 ? 0 : activeIndex + 1;

  const previousCategory = () => {
    setDirection(-1);

    setActiveIndex((prev) => (prev === 0 ? CATEGORIES.length - 1 : prev - 1));
  };

  const nextCategory = () => {
    setDirection(1);

    setActiveIndex((prev) => (prev === CATEGORIES.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="block overflow-hidden  md:hidden">
      <div
        className="mx-auto"
        style={{
          maxWidth: MOBILE_CATEGORY_LAYOUT.section.maxWidth,
          paddingInline: MOBILE_CATEGORY_LAYOUT.section.paddingInline,
        }}
      >
        {/* Heading */}

        <div
          className="mx-auto mb-10 text-center"
          style={{
            maxWidth: MOBILE_CATEGORY_LAYOUT.header.maxWidth,
          }}
        >
          <p className="mb-3 text-xs uppercase tracking-[0.3em] text-neutral-500">
            Browse Collections
          </p>

          <h2 className="font-display text-4xl leading-none">
            Find Your Style
          </h2>
        </div>

        {/* Carousel */}

        <div className="relative flex items-center justify-center">
          {/* Previous Preview */}

          <div
            className="
              pointer-events-none
              absolute
              left-0
              overflow-hidden
              rounded-[28px]
            "
            style={{
              width: MOBILE_CATEGORY_LAYOUT.preview.visibleWidth,
              height: MOBILE_CATEGORY_LAYOUT.card.height,
              opacity: MOBILE_CATEGORY_LAYOUT.preview.opacity,
              transform: `scale(${MOBILE_CATEGORY_LAYOUT.preview.scale})`,
            }}
          >
            <div
              style={{
                width: MOBILE_CATEGORY_LAYOUT.card.width,
                height: MOBILE_CATEGORY_LAYOUT.card.height,
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

          {/* Active Card */}

          <div
            className="relative z-10"
            style={{
              width: MOBILE_CATEGORY_LAYOUT.card.width,
              height: MOBILE_CATEGORY_LAYOUT.card.height,
            }}
          >
            <AnimatePresence custom={direction} mode="popLayout">
              <motion.div
                key={activeIndex}
                custom={direction}
                variants={{
                  enter: (direction: number) => ({
                    x: direction > 0 ? 70 : -70,
                    opacity: 0,
                    scale: 0.97,
                  }),

                  center: {
                    x: 0,
                    opacity: 1,
                    scale: 1,
                  },

                  exit: (direction: number) => ({
                    x: direction > 0 ? -70 : 70,
                    opacity: 0,
                    scale: 0.97,
                  }),
                }}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: {
                    type: "spring",
                    stiffness: 240,
                    damping: 28,
                    mass: 0.85,
                  },
                  opacity: {
                    duration: 0.22,
                  },
                  scale: {
                    duration: 0.3,
                    ease: "easeOut",
                  },
                }}
                drag="x"
                dragConstraints={{
                  left: 0,
                  right: 0,
                }}
                dragElastic={0.12}
                whileDrag={{
                  scale: 0.985,
                }}
                onDragEnd={(_, info) => {
                  if (info.offset.x < -MOBILE_CATEGORY_LAYOUT.swipe.threshold) {
                    nextCategory();
                    return;
                  }

                  if (info.offset.x > MOBILE_CATEGORY_LAYOUT.swipe.threshold) {
                    previousCategory();
                  }
                }}
                className="absolute inset-0 touch-pan-y"
              >
                <CategoryCard
                  title={CATEGORIES[activeIndex].title}
                  image={CATEGORIES[activeIndex].image}
                  productCount={CATEGORIES[activeIndex].productCount}
                  editorial={CATEGORIES[activeIndex].editorial}
                  interaction="auto"
                  href={CATEGORIES[activeIndex].href}
                />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Next Preview */}

          <div
            className="
              pointer-events-none
              absolute
              right-0
              overflow-hidden
              rounded-[28px]
            "
            style={{
              width: MOBILE_CATEGORY_LAYOUT.preview.visibleWidth,
              height: MOBILE_CATEGORY_LAYOUT.card.height,
              opacity: MOBILE_CATEGORY_LAYOUT.preview.opacity,
              transform: `scale(${MOBILE_CATEGORY_LAYOUT.preview.scale})`,
            }}
          >
            <div
              style={{
                width: MOBILE_CATEGORY_LAYOUT.card.width,
                height: MOBILE_CATEGORY_LAYOUT.card.height,
                transform: `translateX(-${
                  MOBILE_CATEGORY_LAYOUT.card.width -
                  MOBILE_CATEGORY_LAYOUT.preview.visibleWidth
                }px)`,
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

          {/* Left Arrow */}

          <button
            type="button"
            onClick={previousCategory}
            aria-label="Previous category"
            className="
              absolute
              left-1
              z-20

              flex
              h-10
              w-10
              items-center
              justify-center

              rounded-full
              border
              bg-white

              transition-transform
              duration-200

              active:scale-95
            "
          >
            <ChevronLeft size={18} />
          </button>

          {/* Right Arrow */}

          <button
            type="button"
            onClick={nextCategory}
            aria-label="Next category"
            className="
              absolute
              right-1
              z-20

              flex
              h-10
              w-10
              items-center
              justify-center

              rounded-full
              border
              bg-white

              transition-transform
              duration-200

              active:scale-95
            "
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}
