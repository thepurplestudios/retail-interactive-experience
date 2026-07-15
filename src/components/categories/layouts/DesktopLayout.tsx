"use client";

import { useCallback, useEffect, useState } from "react";
import { motion } from "framer-motion";

import { ChevronLeft, ChevronRight } from "lucide-react";

import CategoryCard from "../CategoryCard";
import { CATEGORIES } from "../data/categories";
import { DESKTOP_CATEGORY_LAYOUT } from "../data/desktop";

export default function DesktopLayout() {
  const [activeIndex, setActiveIndex] = useState(2);

  const CARD_SPACE =
    DESKTOP_CATEGORY_LAYOUT.carousel.cardWidth +
    DESKTOP_CATEGORY_LAYOUT.carousel.gap;

  const VIEWPORT_WIDTH = DESKTOP_CATEGORY_LAYOUT.section.maxWidth;

  const translateX =
    -(activeIndex * CARD_SPACE) +
    (VIEWPORT_WIDTH - DESKTOP_CATEGORY_LAYOUT.carousel.cardWidth) / 2;

  const wrapIndex = (index: number) => {
    if (index < 0) return CATEGORIES.length - 1;
    if (index >= CATEGORIES.length) return 0;
    return index;
  };

  const previousCategory = useCallback(() => {
    setActiveIndex((prev) => wrapIndex(prev - 1));
  }, []);

  const nextCategory = useCallback(() => {
    setActiveIndex((prev) => wrapIndex(prev + 1));
  }, []);

  // Keyboard
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft") {
        previousCategory();
      }

      if (event.key === "ArrowRight") {
        nextCategory();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [previousCategory, nextCategory]);

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
            flex
            items-center
            justify-center
            py-8
          "
        >
          {" "}
          {/* Left */}
          <button
            onClick={previousCategory}
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
          <div className="w-full overflow-hidden">
            {" "}
            {/* Card */}
            <motion.div
              className="flex items-center will-change-transform"
              drag="x"
              dragConstraints={{
                left: 0,
                right: 0,
              }}
              dragElastic={0.08}
              whileDrag={{
                cursor: "grabbing",
              }}
              style={{
                gap: DESKTOP_CATEGORY_LAYOUT.carousel.gap,
                cursor: "grab",
              }}
              animate={{
                x: translateX,
              }}
              transition={{
                type: "spring",
                stiffness: 120,
                damping: 22,
                mass: 0.9,
              }}
              onDragEnd={(_, info) => {
                if (info.offset.x < -80) {
                  nextCategory();
                }

                if (info.offset.x > 80) {
                  previousCategory();
                }
              }}
            >
              {CATEGORIES.map((category, index) => {
                const distance = Math.abs(index - activeIndex);

                const scale = distance === 0 ? 1 : distance === 1 ? 0.92 : 0.84;

                const opacity =
                  distance === 0 ? 1 : distance === 1 ? 0.65 : 0.3;

                const zIndex = distance === 0 ? 30 : distance === 1 ? 20 : 10;

                return (
                  <motion.div
                    key={category.id}
                    className={`
                    shrink-0 rounded-[32px]
                    ${distance === 0 ? "shadow-2xl" : "shadow-lg"}
                    `}
                    style={{
                      width: DESKTOP_CATEGORY_LAYOUT.carousel.cardWidth,
                      height: DESKTOP_CATEGORY_LAYOUT.carousel.cardHeight,
                      zIndex,
                    }}
                    animate={{
                      scale,
                      opacity,
                      y: 0,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 180,
                      damping: 24,
                      mass: 0.9,
                    }}
                  >
                    <CategoryCard
                      title={category.title}
                      productCount={category.productCount}
                      image={category.image}
                      editorial={category.editorial}
                      href={category.href}
                    />
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
          {/* Right */}
          <button
            onClick={nextCategory}
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
