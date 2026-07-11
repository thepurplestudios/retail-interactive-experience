"use client";

import Image from "next/image";

import { MOBILE_LAYOUT } from "../data/mobile";

import { ImageCard } from "../ImageCard";
import TextCard from "../TextCard";
import { VideoCard } from "../VideoCard";
import { PromiseCard } from "../PromiseCard";
import { NewsletterCard } from "../NewsletterCard";

export default function MobileLayout() {
  return (
    <section
      className="
        block
        md:hidden
        pt-20
        pb-16
      "
    >
      <div className="mx-auto flex justify-center">
        <div
          className="relative"
          style={{
            width: MOBILE_LAYOUT.canvas.width,
            height: MOBILE_LAYOUT.canvas.height,
          }}
        >
          {/* ---------------- Card 1 ---------------- */}

          <div
            className="absolute"
            style={{
              left: MOBILE_LAYOUT.cards.editorial.x,
              top: MOBILE_LAYOUT.cards.editorial.y,
              width: MOBILE_LAYOUT.cards.editorial.width,
              height: MOBILE_LAYOUT.cards.editorial.height,
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
              size="mobile"
            />
          </div>

          {/* ---------------- Card 4 ---------------- */}

          <div
            className="absolute"
            style={{
              left: MOBILE_LAYOUT.cards.bracelet.x,
              top: MOBILE_LAYOUT.cards.bracelet.y,
              width: MOBILE_LAYOUT.cards.bracelet.width,
              height: MOBILE_LAYOUT.cards.bracelet.height,
            }}
          >
            <ImageCard
              src="/images/hero/Bracelet.png"
              alt="Bracelet"
              subtitle="Best Seller"
              title="Starry Charm Bracelet"
              price="₹799"
              variant="product"
              size="mobile"
            />
          </div>

          {/* ---------------- Card 5 ---------------- */}

          <div
            className="absolute"
            style={{
              left: MOBILE_LAYOUT.cards.rings.x,
              top: MOBILE_LAYOUT.cards.rings.y,
              width: MOBILE_LAYOUT.cards.rings.width,
              height: MOBILE_LAYOUT.cards.rings.height,
            }}
          >
            <ImageCard
              src="/images/hero/ring.png"
              alt="Minimal Rings"
              title="Minimal Rings"
              description="Understated. Iconic."
              linkText="Discover"
              variant="smallProduct"
              size="mobile"
            />
          </div>

          {/* ---------------- Card 2 ---------------- */}

          <div
            className="absolute"
            style={{
              left: MOBILE_LAYOUT.cards.story.x,
              top: MOBILE_LAYOUT.cards.story.y,
              width: MOBILE_LAYOUT.cards.story.width,
              height: MOBILE_LAYOUT.cards.story.height,
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
              size="mobile"
            />
          </div>

          {/* ---------------- Card 6 ---------------- */}

          <div
            className="absolute"
            style={{
              left: MOBILE_LAYOUT.cards.promise.x,
              top: MOBILE_LAYOUT.cards.promise.y,
              width: MOBILE_LAYOUT.cards.promise.width,
              height: MOBILE_LAYOUT.cards.promise.height,
            }}
          >
            <PromiseCard size="mobile" />
          </div>

          {/* ---------------- Card 3 ---------------- */}

          <div
            className="absolute"
            style={{
              left: MOBILE_LAYOUT.cards.video.x,
              top: MOBILE_LAYOUT.cards.video.y,
              width: MOBILE_LAYOUT.cards.video.width,
              height: MOBILE_LAYOUT.cards.video.height,
            }}
          >
            <VideoCard
              src="/images/hero/Men's-Editorial-Shot.mp4"
              title="Y2K State of Mind"
              linkText="Watch Film"
              size="mobile"
            />
          </div>

          {/* ---------------- Card 7 ---------------- */}

          <div
            className="absolute"
            style={{
              left: MOBILE_LAYOUT.cards.pearl.x,
              top: MOBILE_LAYOUT.cards.pearl.y,
              width: MOBILE_LAYOUT.cards.pearl.width,
              height: MOBILE_LAYOUT.cards.pearl.height,
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
              size="mobile"
            />
          </div>

          {/* ---------------- Card 8 ---------------- */}

          <div
            className="absolute"
            style={{
              left: MOBILE_LAYOUT.cards.mens.x,
              top: MOBILE_LAYOUT.cards.mens.y,
              width: MOBILE_LAYOUT.cards.mens.width,
              height: MOBILE_LAYOUT.cards.mens.height,
            }}
          >
            <ImageCard
              src="/images/hero/Bracelet-Lifestyle2.png"
              alt="Men Collection"
              subtitle="FOR HIM"
              title="Bold. Classic. Effortlessly You."
              linkText="Shop Men's Collection"
              variant="mens"
              size="mobile"
            />
          </div>

          {/* ---------------- Card 11 ---------------- */}

          <div
            className="absolute"
            style={{
              left: MOBILE_LAYOUT.cards.newsletter.x,
              top: MOBILE_LAYOUT.cards.newsletter.y,
              width: MOBILE_LAYOUT.cards.newsletter.width,
              height: MOBILE_LAYOUT.cards.newsletter.height,
            }}
          >
            <NewsletterCard
              size="mobile"
              className="!bg-transparent !backdrop-blur-none !shadow-none !border-none"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
