"use client";

import { ImageCard } from "./ImageCard";
import { NewsletterCard } from "./NewsletterCard";
import TextCard from "./TextCard";
import { VideoCard } from "./VideoCard";
import { PromiseCard } from "./PromiseCard";

export function Hero() {
  return (
    <section className="pb-15 pt-25">
      <div
        className="
      mx-auto
      max-w-[var(--container-max)]
      px-[var(--section-x)]
    "
      >
        {" "}
        {/* ROW 1 */}
        <div
          className="
    flex
    items-start
    justify-center
    gap-[var(--hero-gap)]
  "
        >
          {" "}
          {/* Card 1 */}
          <div className="w-[350px] h-[620px] shrink-0">
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
          <div className="w-[350px] h-[350px] shrink-0">
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
        {/* ROW 2 */}
        <div className="-mt-[240px]">
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
            <div className="ml-[365px] w-[280px] h-[240px] shrink-0 rounded-[20px]">
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
            <div className="w-[180px] h-[240px] shrink-0 rounded-[20px]">
              <PromiseCard />
            </div>
            {/* Card 7 */}
            <div className="w-[240px] h-[240px] shrink-0 rounded-[20px]">
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
            <div className=" w-[350px] h-[300px] shrink-0 rounded-[20px] -mt-5">
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
        </div>
      </div>
    </section>
  );
}
