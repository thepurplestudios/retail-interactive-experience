"use client";

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

  href?: string;
  size?: "desktop" | "tablet" | "mobile";
}

export default function CategoryCard({
  title,
  image,
  productCount,
  editorial,
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

        <ArrowRight
          size={20}
          className="
            shrink-0
            transition-transform
            duration-500
            group-hover:translate-x-1
          "
        />
      </div>
    </Link>
  );
}
