"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface HeroCardProps {
  children: ReactNode;
  className?: string;
  noBackground?: boolean;
}

export function HeroCard({ children, className, noBackground }: HeroCardProps) {
  return (
    <motion.div
      whileHover={{
        y: -6,
        transition: {
          duration: 0.25,
        },
      }}
      className={cn(
        `
  relative
  h-full
  w-full

  overflow-hidden
  rounded-[20px]

  shadow-[0_8px_30px_rgba(0,0,0,0.08)]
  `,
        !noBackground &&
          `
    bg-white/70
    backdrop-blur-md
    border
    border-white/50
  `,
        className,
      )}
    >
      {children}
    </motion.div>
  );
}
