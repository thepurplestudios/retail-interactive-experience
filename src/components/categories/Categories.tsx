"use client";

import DesktopLayout from "./layouts/DesktopLayout";
import TabletLayout from "./layouts/TabletLayout";
import MobileLayout from "./layouts/MobileLayout";

export default function Categories() {
  return (
    <div className="pb-24 lg:pb-32">
      <DesktopLayout />
      <TabletLayout />
      <MobileLayout />
    </div>
  );
}
