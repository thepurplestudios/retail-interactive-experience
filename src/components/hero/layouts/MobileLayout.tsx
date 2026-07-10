"use client";

import { MOBILE_LAYOUT } from "../data/mobile";

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
        />
      </div>
    </section>
  );
}
