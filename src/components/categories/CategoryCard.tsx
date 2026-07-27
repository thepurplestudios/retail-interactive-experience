"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface CategoryCardProps {
  title: string;
  image?: string;
  productCount: number;

  editorial: {
    category: string;
    audience: string;
  };

  interaction?: "hover" | "auto";

  href?: string;
  size?: "desktop" | "tablet" | "mobile";
}

export default function CategoryCard({
  title,
  image,
  productCount,
  editorial,
  interaction = "hover",
  href = "#",
}: CategoryCardProps) {
  return (
    <Link
      href={href}
      className="
        group
        relative
        block
        h-full
        w-full
        overflow-hidden
        rounded-[32px]
        bg-[#E8DDF4]
        shadow-sm
        transition-all
        duration-500
        hover:shadow-xl
      "
    >
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden rounded-[32px] bg-[#D8C8F0]">
        {" "}
        {image && (
          <Image
            src={image}
            alt={title}
            fill
            className="
    rounded-[32px]
    object-cover
    transition-transform
    duration-700
    ease-out
    group-hover:scale-105
  "
          />
        )}
      </div>

      {/* Gradient */}
      <div
        className="
          absolute
          inset-0
          bg-gradient-to-t
          from-black/70
          via-black/20
          to-transparent
        "
      />

      {/* Editorial Hover */}
      <div
        className="
    pointer-events-none

    absolute
    left-8
    top-1/2
    -translate-y-1/2

    text-white

    opacity-0
    -translate-x-6

    transition-all
    duration-500
    ease-out

    group-hover:translate-x-0
    group-hover:opacity-100
  "
      >
        <div className="ml-1.5">
          <p
            className="
            text-xs
            font-medium
            tracking-[0.35em]
            uppercase
            text-white/90
            "
          >
            {editorial.category}
          </p>

          <p
            className="
            mt-2
            text-lg
            tracking-[0.35em]
            uppercase
            text-white/80
            "
          >
            FOR
          </p>
        </div>

        <h2
          className="
            font-display
            text-6xl
            leading-none
            "
        >
          {editorial.audience}
        </h2>
      </div>

      {interaction === "auto" && (
        <motion.div
          key={`${editorial.category}-${editorial.audience}`}
          className="
      pointer-events-none
      absolute
      left-8
      top-1/2
      -translate-y-1/2
      text-white
    "
          initial={{
            opacity: 0,
            x: -24,
          }}
          whileInView={{
            opacity: [0, 1, 1, 0],
            x: [-24, 0, 0, 0],
          }}
          viewport={{
            once: true,
            amount: 0.5,
          }}
          transition={{
            duration: 2.8,
            times: [0, 0.15, 0.8, 1],
            ease: "easeOut",
          }}
        >
          <div className="ml-1.5">
            <p
              className="
          text-xs
          font-medium
          tracking-[0.35em]
          uppercase
          text-white/90
        "
            >
              {editorial.category}
            </p>

            <p
              className="
          mt-2
          text-lg
          tracking-[0.35em]
          uppercase
          text-white/80
        "
            >
              FOR
            </p>
          </div>

          <h2
            className="
        font-display
        text-6xl
        leading-none
      "
          >
            {editorial.audience}
          </h2>
        </motion.div>
      )}

      {/* Content */}
      <div
        className="
          absolute
          bottom-0
          left-0
          right-0
          flex
          items-end
          justify-between
          p-6
          text-white
        "
      >
        <div>
          <h3
            className="
              font-display
              text-[32px]
              leading-none
              
            "
          >
            {title}
          </h3>
          <p className="mt-2 text-sm text-white/80">
            {productCount} Pieces
          </p>{" "}
        </div>

        <div
          className="
    group/arrow

    flex
    h-11
    w-11
    items-center
    justify-center

    rounded-full

    border
    border-white/20

    bg-white/10
    backdrop-blur-sm

    transition-all
    duration-300

    hover:bg-white
    hover:border-white
  "
        >
          <ArrowRight
            size={18}
            className="
      text-white

      transition-all
      duration-300

      group-hover/arrow:translate-x-1
      group-hover/arrow:text-black
    "
          />
        </div>
      </div>
    </Link>
  );
}
