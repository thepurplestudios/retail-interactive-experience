"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface CategoryCardProps {
  title: string;
  image?: string;
  productCount: number;
  href?: string;
  size?: "desktop" | "tablet" | "mobile";
}

export default function CategoryCard({
  title,
  image,
  productCount,
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
              transition-transform
              duration-500
              group-hover:-translate-y-1
            "
          >
            {title}
          </h3>

          <p className="mt-2 text-sm text-white/80">{productCount}</p>
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
