"use client";

import { ImageCard } from "../ImageCard";
import TextCard from "../TextCard";
import { VideoCard } from "../VideoCard";

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
      <div
        className="
          mx-auto
          max-w-[940px]
          px-8
        "
      >
        <div
          className="
            grid
            grid-cols-4
            auto-rows-[135px]
            gap-6
          "
        >
          {/* Card 1 */}
          <div className="col-span-2 row-span-5">
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
          <div className="col-span-2 row-span-2">
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

          {/* Card 4 */}
          <div className="col-span-2 row-span-2">
            <ImageCard
              src="/images/hero/Bracelet.png"
              alt="Bracelet"
              subtitle="Best Seller"
              title="Starry Charm Bracelet"
              price="₹799"
              variant="product"
            />
          </div>

          {/* Card 5 */}
          <div className="col-span-1 row-span-2 rounded-[28px] bg-yellow-200" />

          {/* Card 6 */}
          <div className="col-span-1 row-span-2 rounded-[28px] bg-purple-200" />

          {/* Card 3 */}
          <div className="col-span-2 row-span-3 rounded-[28px] bg-pink-200" />

          {/* Card 7 */}
          <div className="col-span-4 row-span-2 rounded-[28px] bg-orange-200" />
        </div>
      </div>
    </section>
  );
}
