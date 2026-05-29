import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

import { Hero } from "@/features/home/hero/hero";
import { Story } from "@/features/home/story/story";
import { Materials } from "@/features/home/materials/materials";
import { Collections } from "@/features/home/collections/collections";
import { Process } from "@/features/home/process/process";
import { Gallery } from "@/features/home/gallery/gallery";
import { CTA } from "@/features/home/cta/cta";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <Story />
        <Materials />
        <Collections />
        <Process />
        <Gallery />
        <CTA />
      </main>

      <Footer />
    </>
  );
}
