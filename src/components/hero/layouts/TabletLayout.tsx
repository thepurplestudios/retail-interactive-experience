"use client";

import { ImageCard } from "../ImageCard";
import TextCard from "../TextCard";
import { VideoCard } from "../VideoCard";
import { PromiseCard } from "../PromiseCard";
import { NewsletterCard } from "../NewsletterCard";

import { TABLET_LAYOUT } from "../data/tablet";

export default function TabletLayout() {
  return (
    <section
      className="
    hidden
    md:block
    lg:hidden
    pt-24
    pb-16
  "
    >
      <div className="mx-auto flex justify-center">
        <div
          className="relative"
          style={{
            width: TABLET_LAYOUT.canvas.width,
            height: TABLET_LAYOUT.canvas.height,
          }}
        >
          {/* ---------------- Card 1 ---------------- */}

          <div
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
            />
          </div>

          {/* ---------------- Card 2 ---------------- */}

          <div
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
          </div>

          {/* ---------------- Card 4 ---------------- */}

          <div
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
            />
          </div>

          {/* ---------------- Card 5 ---------------- */}

          <div
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
            />
          </div>

          {/* ---------------- Card 6 ---------------- */}

          <div
            className="absolute"
            style={{
              left: TABLET_LAYOUT.cards.promise.x,
              top: TABLET_LAYOUT.cards.promise.y,
              width: TABLET_LAYOUT.cards.promise.width,
              height: TABLET_LAYOUT.cards.promise.height,
            }}
          >
            <PromiseCard />
          </div>

          {/* ---------------- Card 3 ---------------- */}

          <div
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
            />
          </div>

          {/* ---------------- Card 7 ---------------- */}

          <div
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
            />
          </div>

          {/* ---------------- Card 8 ---------------- */}

          <div
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
            />
          </div>

          {/* ---------------- Card 11 ---------------- */}

          <div
            className="absolute"
            style={{
              left: TABLET_LAYOUT.cards.newsletter.x,
              top: TABLET_LAYOUT.cards.newsletter.y,
              width: TABLET_LAYOUT.cards.newsletter.width,
              height: TABLET_LAYOUT.cards.newsletter.height,
            }}
          >
            <NewsletterCard
              notchWidthRatio={0.3} // smaller notch than desktop's 0.36
              notchHeightRatio={0.3} // shallower than desktop's 0.22
              radiusRatio={0.06} // tighter corner radius than desktop's 0.08
              className="!bg-transparent !backdrop-blur-none !shadow-none !border-none"
            />{" "}
          </div>
        </div>
      </div>
    </section>
  );
}
