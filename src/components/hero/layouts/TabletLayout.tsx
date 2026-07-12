"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import { getCanvasHeight } from "../data/getCanvasHeight";

import { heroReveal, cardReveal } from "../../motion/variants";
import { ImageCard } from "../ImageCard";
import TextCard from "../TextCard";
import { VideoCard } from "../VideoCard";
import { PromiseCard } from "../PromiseCard";
import { NewsletterCard } from "../NewsletterCard";

import { TABLET_LAYOUT } from "../data/tablet";

export default function TabletLayout() {
  const canvasHeight = getCanvasHeight(TABLET_LAYOUT.cards);
  return (
    <motion.section
      className="
    hidden
    md:block
    lg:hidden
    pt-24
    pb-16
  "
      variants={heroReveal}
      initial="hidden"
      animate="visible"
    >
      <div className="mx-auto flex justify-center">
        <div
          className="relative"
          style={{
            width: TABLET_LAYOUT.canvas.width,
            height: canvasHeight,
          }}
        >
          {/* ---------------- Card 1 ---------------- */}

          <motion.div
            variants={cardReveal}
            className="absolute"
            style={{
              left: TABLET_LAYOUT.cards.editorial.x,
              top: TABLET_LAYOUT.cards.editorial.y,
              width: TABLET_LAYOUT.cards.editorial.width,
              height: TABLET_LAYOUT.cards.editorial.height,
            }}
          >
            <ImageCard
              src="/images/hero/Main-Female-Editorial-Shot.png"
              alt="Jewelry Story"
              darkOverlay
              subtitle="NEW IN"
              title="Timeless Pieces For Every You"
              buttonText="Explore Collection →"
              variant="editorial"
              size="tablet"
            />
          </motion.div>

          {/* ---------------- Card 2 ---------------- */}

          <motion.div
            variants={cardReveal}
            className="absolute"
            style={{
              left: TABLET_LAYOUT.cards.story.x,
              top: TABLET_LAYOUT.cards.story.y,
              width: TABLET_LAYOUT.cards.story.width,
              height: TABLET_LAYOUT.cards.story.height,
            }}
          >
            <TextCard
              eyebrow="HANDMADE WITH LOVE"
              title={
                <>
                  Jewelry That Tells
                  <br />
                  Your Story
                </>
              }
              description="Handpicked materials, nostalgic designs, and timeless details crafted for dreamers."
              buttonText="Know More About Us"
              size="tablet"
            />
          </motion.div>

          {/* ---------------- Card 4 ---------------- */}

          <motion.div
            variants={cardReveal}
            className="absolute"
            style={{
              left: TABLET_LAYOUT.cards.bracelet.x,
              top: TABLET_LAYOUT.cards.bracelet.y,
              width: TABLET_LAYOUT.cards.bracelet.width,
              height: TABLET_LAYOUT.cards.bracelet.height,
            }}
          >
            <ImageCard
              src="/images/hero/Bracelet.png"
              alt="Bracelet"
              subtitle="Best Seller"
              title="Starry Charm Bracelet"
              price="₹799"
              variant="product"
              size="tablet"
            />
          </motion.div>

          {/* ---------------- Card 5 ---------------- */}

          <motion.div
            variants={cardReveal}
            className="absolute"
            style={{
              left: TABLET_LAYOUT.cards.rings.x,
              top: TABLET_LAYOUT.cards.rings.y,
              width: TABLET_LAYOUT.cards.rings.width,
              height: TABLET_LAYOUT.cards.rings.height,
            }}
          >
            <ImageCard
              src="/images/hero/ring.png"
              alt="Minimal Rings"
              title="Minimal Rings"
              description="Understated. Iconic."
              linkText="Discover"
              variant="smallProduct"
              size="tablet"
            />
          </motion.div>

          {/* ---------------- Card 6 ---------------- */}

          <motion.div
            variants={cardReveal}
            className="absolute"
            style={{
              left: TABLET_LAYOUT.cards.promise.x,
              top: TABLET_LAYOUT.cards.promise.y,
              width: TABLET_LAYOUT.cards.promise.width,
              height: TABLET_LAYOUT.cards.promise.height,
            }}
          >
            <PromiseCard size="tablet" />
          </motion.div>

          {/* ---------------- Card 3 ---------------- */}

          <motion.div
            variants={cardReveal}
            className="absolute"
            style={{
              left: TABLET_LAYOUT.cards.video.x,
              top: TABLET_LAYOUT.cards.video.y,
              width: TABLET_LAYOUT.cards.video.width,
              height: TABLET_LAYOUT.cards.video.height,
            }}
          >
            <VideoCard
              src="/images/hero/Men's-Editorial-Shot.mp4"
              title="Y2K State of Mind"
              linkText="Watch Film"
              size="tablet"
            />
          </motion.div>

          {/* ---------------- Card 7 ---------------- */}

          <motion.div
            variants={cardReveal}
            className="absolute"
            style={{
              left: TABLET_LAYOUT.cards.pearl.x,
              top: TABLET_LAYOUT.cards.pearl.y,
              width: TABLET_LAYOUT.cards.pearl.width,
              height: TABLET_LAYOUT.cards.pearl.height,
            }}
          >
            <ImageCard
              src="/images/hero/Necklace2.png"
              alt="Traditional Necklace"
              subtitle="Pearl Collection"
              title="Timeless Pearl Necklace"
              description="Elegant pearls crafted for everyday grace."
              linkText="Learn More"
              variant="smallProductDark"
              size="tablet"
            />
          </motion.div>

          {/* ---------------- Card 8 ---------------- */}

          <motion.div
            variants={cardReveal}
            className="absolute"
            style={{
              left: TABLET_LAYOUT.cards.mens.x,
              top: TABLET_LAYOUT.cards.mens.y,
              width: TABLET_LAYOUT.cards.mens.width,
              height: TABLET_LAYOUT.cards.mens.height,
            }}
          >
            <ImageCard
              src="/images/hero/Bracelet-Lifestyle2.png"
              alt="Men Collection"
              subtitle="FOR HIM"
              title="Bold. Classic. Effortlessly You."
              linkText="Shop Men's Collection"
              variant="mens"
              size="tablet"
            />
          </motion.div>

          {/* ---------------- Card 11 ---------------- */}

          <motion.div
            variants={cardReveal}
            className="absolute"
            style={{
              left: TABLET_LAYOUT.cards.newsletter.x,
              top: TABLET_LAYOUT.cards.newsletter.y,
              width: TABLET_LAYOUT.cards.newsletter.width,
              height: TABLET_LAYOUT.cards.newsletter.height,
            }}
          >
            <NewsletterCard
              size="tablet"
              className="!bg-transparent !backdrop-blur-none !shadow-none !border-none"
            />
          </motion.div>

          {/* ---------------- Card 12 ---------------- */}

          <motion.div
            variants={cardReveal}
            className="
                group
                relative
                absolute
                overflow-hidden
                rounded-[28px]
              "
            style={{
              left: TABLET_LAYOUT.cards.necklace.x,
              top: TABLET_LAYOUT.cards.necklace.y,
              width: TABLET_LAYOUT.cards.necklace.width,
              height: TABLET_LAYOUT.cards.necklace.height,
            }}
          >
            <Image
              src="/images/hero/Charm-Necklace.png"
              alt="Heart Necklace"
              fill
              className="object-cover object-center"
            />

            <div
              className="
        pointer-events-none
        absolute
        inset-0
        opacity-0
        transition-opacity
        duration-300
        group-hover:opacity-100
      "
            >
              <div
                className="
          absolute
          inset-y-0
          -left-[40%]
          w-[18%]
          rotate-[14deg]
          bg-white/5
          blur-md
          transition-all
          duration-[1400ms]
          ease-out
          group-hover:left-[130%]
        "
              />
            </div>
          </motion.div>

          {/* ---------------- Card 9 ---------------- */}

          <motion.div
            variants={cardReveal}
            className="absolute"
            style={{
              left: TABLET_LAYOUT.cards.lifestyle.x,
              top: TABLET_LAYOUT.cards.lifestyle.y,
              width: TABLET_LAYOUT.cards.lifestyle.width,
              height: TABLET_LAYOUT.cards.lifestyle.height,
            }}
          >
            <ImageCard
              src="/images/hero/Men's-Collection-Product-Shot2.png"
              alt="Bracelet Collection"
              title={
                <>
                  Stack It.
                  <br />
                  Style It.
                  <br />
                  Own It.
                </>
              }
              linkText="Shop Bracelets"
              variant="horizontalProduct"
              size="tablet"
            />
          </motion.div>

          {/* ---------------- Card 10 ---------------- */}

          <motion.div
            variants={cardReveal}
            className="absolute"
            style={{
              left: TABLET_LAYOUT.cards.charms.x,
              top: TABLET_LAYOUT.cards.charms.y,
              width: TABLET_LAYOUT.cards.charms.width,
              height: TABLET_LAYOUT.cards.charms.height,
            }}
          >
            <ImageCard
              src="/images/hero/Charm-Bracelet.png"
              alt="Charm Collection"
              title={
                <>
                  Charms That
                  <br />
                  Mean More
                </>
              }
              linkText="Explore Charms"
              variant="horizontalProductDark"
              size="tablet"
            />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
