"use client";

import DesktopLayout from "./layouts/DesktopLayout";
import TabletLayout from "./layouts/TabletLayout";
import MobileLayout from "./layouts/MobileLayout";

export default function Categories() {
  return (
    <>
      <DesktopLayout />
      <TabletLayout />
      <MobileLayout />
    </>
  );
}
