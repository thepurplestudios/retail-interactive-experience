import { Navbar } from "@/components/layout/navbar";
import Hero from "@/components/hero/Hero";
import Categories from "@/components/categories/Categories";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Categories />
    </>
  );
}
