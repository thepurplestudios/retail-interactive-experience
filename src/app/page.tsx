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
    <main className="container-custom py-20">
      <h1 className="heading-xl">The Purple Shop</h1>

      <p className="body-lg mt-6">Dreamy. Retro. Y2K Vibes.</p>
    </main>
  );
}
