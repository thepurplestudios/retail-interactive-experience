"use client";

import { ImageCard } from "./ImageCard";
import { NewsletterCard } from "./NewsletterCard";
import TextCard from "./TextCard";
import { VideoCard } from "./VideoCard";

export function Hero() {
  return (
    <section className="px-6 pb-20 pt-32 lg:px-10">
      <div className="mx-auto max-w-[1600px]">
        {/* HERO ROW */}
        <div
          className="flex gap-2
        items-start"
        >
          {/* Card 1 */}
          <div className="w-[310px] h-[620px] shrink-0">
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
          <div className="w-[450px] h-[370px] shrink-0">
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
          <div className="w-[260px] h-[370px] shrink-0">
            <VideoCard
              src="/images/hero/Men's-Editorial-Shot.mp4"
              title="Y2K State of Mind"
              linkText="Watch Film"
            />
          </div>

          {/* Card 4 */}
          <div className="w-[320px] h-[350px] shrink-0">
            <ImageCard
              src="/images/hero/Bracelet.png"
              alt="Bracelet"
              subtitle="Best Seller"
              title="Starry Charm Bracelet"
              price="₹799"
              variant="product"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
