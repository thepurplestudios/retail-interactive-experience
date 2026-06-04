"use client";

import Image from "next/image";
import { HERO_LAYOUT, HERO_CARD_SIZES } from "./constants";
import { motion } from "framer-motion";

import { heroReveal, rowReveal } from "../motion/variants";
import { ImageCard } from "./ImageCard";
import { NewsletterCard } from "./NewsletterCard";
import TextCard from "./TextCard";
import { VideoCard } from "./VideoCard";
import { PromiseCard } from "./PromiseCard";

export function Hero() {
  return (
    <motion.section
      className="pb-15 pt-25"
      variants={heroReveal}
      initial="hidden"
      animate="visible"
    >
      {" "}
      <div
        className="
      mx-auto
      max-w-[var(--container-max)]
      px-[var(--section-x)]
    "
      >
        {" "}
        {/* ROW 1 */}
        <motion.div
          variants={rowReveal}
          className="
    flex
    items-start
    justify-center
    gap-[var(--hero-gap)]
  "
        >
          {" "}
          {/* Card 1 */}
          <div
            className="shrink-0"
            style={{
              width: HERO_CARD_SIZES.editorial.width,
              height: HERO_CARD_SIZES.editorial.height,
            }}
          >
            {" "}
            <ImageCard
              src="/images/hero/Main-Female-Editorial-Shot.png"
              alt="Jewelry Story"
              darkOverlay
              subtitle="NEW IN"
              title="Timeless Pieces For Every You"
              buttonText="Explore Collection →"
              variant="editorial"
            />
          </div>
          {/* Card 2 */}
          <div
            className="shrink-0"
            style={{
              width: HERO_CARD_SIZES.story.width,
              height: HERO_CARD_SIZES.story.height,
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
              buttonText="Shop Now"
            />
          </div>
          {/* Card 3 */}
          <div
            className="shrink-0"
            style={{
              width: HERO_CARD_SIZES.video.width,
              height: HERO_CARD_SIZES.video.height,
            }}
          >
            <VideoCard
              src="/images/hero/Men's-Editorial-Shot.mp4"
              title="Y2K State of Mind"
              linkText="Watch Film"
            />
          </div>
          {/* Card 4 */}
          <div
            className="shrink-0"
            style={{
              width: HERO_CARD_SIZES.product.width,
              height: HERO_CARD_SIZES.product.height,
            }}
          >
            <ImageCard
              src="/images/hero/Bracelet.png"
              alt="Bracelet"
              subtitle="Best Seller"
              title="Starry Charm Bracelet"
              price="₹799"
              variant="product"
            />
          </div>
        </motion.div>
        {/* ROW 2 */}
        <motion.div
          variants={rowReveal}
          style={{
            marginTop: HERO_LAYOUT.offsets.row2Overlap,
            marginLeft: HERO_LAYOUT.offsets.row2Start,
          }}
        >
          {" "}
          <div
            className="
      flex
      items-start
      justify-center
      gap-[var(--hero-gap)]
    "
          >
            {" "}
            {/* Card 5 */}
            <div
              className="shrink-0"
              style={{
                width: HERO_CARD_SIZES.rings.width,
                height: HERO_CARD_SIZES.rings.height,
              }}
            >
              {" "}
              <ImageCard
                src="/images/hero/ring.png"
                alt="Minimal Rings"
                title="Minimal Rings"
                description="Understated. Iconic."
                linkText="Discover"
                variant="smallProduct"
              />
            </div>
            {/* Card 6 */}
            <div
              className="shrink-0"
              style={{
                width: HERO_CARD_SIZES.promise.width,
                height: HERO_CARD_SIZES.promise.height,
              }}
            >
              {" "}
              <PromiseCard />
            </div>
            {/* Card 7 */}
            <div
              className="shrink-0"
              style={{
                width: HERO_CARD_SIZES.pearl.width,
                height: HERO_CARD_SIZES.pearl.height,
              }}
            >
              {" "}
              <ImageCard
                src="/images/hero/Necklace2.png"
                alt="Traditional Necklace"
                subtitle="Pearl Collection"
                title="Timeless Pearl Necklace"
                description="Elegant pearls crafted for everyday grace."
                linkText="Learn More"
                variant="smallProductDark"
              />{" "}
            </div>
            {/* Card 8 */}
            <div
              className="shrink-0"
              style={{
                width: HERO_CARD_SIZES.mens.width,
                height: HERO_CARD_SIZES.mens.height,
                marginTop: HERO_LAYOUT.offsets.mensLift,
              }}
            >
              {" "}
              <ImageCard
                src="/images/hero/Bracelet-Lifestyle2.png"
                alt="Men Collection"
                subtitle="FOR HIM"
                title="Bold. Classic. Effortlessly You."
                linkText="Shop Men's Collection"
                variant="mens"
              />
            </div>
          </div>
        </motion.div>
        {/* ROW 3 */}
        <motion.div
          variants={rowReveal}
          style={{
            marginTop: HERO_LAYOUT.offsets.row3Overlap,
          }}
        >
          {" "}
          <div
            className="
      flex
      items-start
      justify-center
      gap-[var(--hero-gap)]
    "
          >
            {/* Card 9 */}
            <div
              style={{
                marginLeft: HERO_LAYOUT.offsets.row3Start,
              }}
            >
              <div
                className="shrink-0"
                style={{
                  width: HERO_CARD_SIZES.lifestyle.width,
                  height: HERO_CARD_SIZES.lifestyle.height,
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
                />
              </div>
            </div>
            {/* Card 10 */}
            <div
              className="shrink-0"
              style={{
                width: HERO_CARD_SIZES.charms.width,
                height: HERO_CARD_SIZES.charms.height,
              }}
            >
              {" "}
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
              />
            </div>
            {/* Card 11 */}
            <div
              className="shrink-0"
              style={{
                width: HERO_CARD_SIZES.newsletter.width,
                height: HERO_CARD_SIZES.newsletter.height,
              }}
            >
              <NewsletterCard className="!bg-transparent !backdrop-blur-none !shadow-none !border-none" />
            </div>

            {/* Card 12 */}
            <div
              className="shrink-0 overflow-hidden rounded-[var(--card-radius)]"
              style={{
                width: HERO_CARD_SIZES.necklace.width,
                height: HERO_CARD_SIZES.necklace.height,
                marginTop: HERO_LAYOUT.offsets.necklaceDrop,
              }}
            >
              {" "}
              <Image
                src="/images/hero/Charm-Necklace.png"
                alt="Heart Necklace"
                width={180}
                height={200}
                className="h-full w-full object-cover object-center"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
