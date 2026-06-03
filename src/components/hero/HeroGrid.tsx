"use client";

import { ImageCard } from "./ImageCard";
import TextCard from "./TextCard";
import { VideoCard } from "./VideoCard";
import { PromiseCard } from "./PromiseCard";

export function HeroGrid() {
  return (
    <section className="pt-25 pb-[220px]">
      <div
        className="
          mx-auto
          max-w-[var(--container-max)]
          px-[var(--section-x)]
        "
      >
        <div
          className="
            grid
            justify-center
            gap-[var(--hero-gap)]

            grid-cols-[350px_450px_260px_350px]
          "
        >
          {/* COLUMN 1 */}
          <div className="flex flex-col gap-[var(--hero-gap)]">
            <div className="h-[620px]">
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
          </div>

          {/* COLUMN 2 */}
          <div
            className="
              flex
              flex-col
              gap-[var(--hero-gap)]

              translate-y-[120px]
            "
          >
            <div className="h-[370px]">
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

            <div className="h-[240px]">
              <ImageCard
                src="/images/hero/ring.png"
                alt="Minimal Rings"
                title="Minimal Rings"
                description="Understated. Iconic."
                linkText="Discover"
                variant="smallProduct"
              />
            </div>
          </div>

          {/* COLUMN 3 */}
          <div
            className="
              flex
              flex-col
              gap-[var(--hero-gap)]

              translate-y-[120px]
            "
          >
            <div className="h-[370px]">
              <VideoCard
                src="/images/hero/Men's-Editorial-Shot.mp4"
                title="Y2K State of Mind"
                linkText="Watch Film"
              />
            </div>

            <div className="h-[240px]">
              <PromiseCard />
            </div>

            <div className="h-[240px]">
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
          </div>

          {/* COLUMN 4 */}
          <div
            className="
              flex
              flex-col
              gap-[var(--hero-gap)]

              translate-y-[20px]
            "
          >
            <div className="h-[350px]">
              <ImageCard
                src="/images/hero/Bracelet.png"
                alt="Bracelet"
                subtitle="Best Seller"
                title="Starry Charm Bracelet"
                price="₹799"
                variant="product"
              />
            </div>

            <div className="h-[300px]">
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
        </div>
      </div>
    </section>
  );
}
