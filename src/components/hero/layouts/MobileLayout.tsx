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
        </div>
      </div>
    </section>
  );
}
