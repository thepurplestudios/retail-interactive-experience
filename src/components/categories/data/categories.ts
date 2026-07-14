export interface Category {
  id: string;
  title: string;
  image: string;
  productCount: string;
  href: string;
}

export const CATEGORIES: Category[] = [
  {
    id: "necklaces",
    title: "Necklaces",
    image: "/images/categories/necklaces.jpg",
    productCount: "42 Products",
    href: "/collections/necklaces",
  },

  {
    id: "bracelets",
    title: "Bracelets",
    image: "/images/categories/bracelets.jpg",
    productCount: "28 Products",
    href: "/collections/bracelets",
  },

  {
    id: "rings",
    title: "Rings",
    image: "/images/categories/rings.jpg",
    productCount: "36 Products",
    href: "/collections/rings",
  },

  {
    id: "earrings",
    title: "Earrings",
    image: "/images/categories/earrings.jpg",
    productCount: "31 Products",
    href: "/collections/earrings",
  },

  {
    id: "Charms",
    title: "Charms",
    image: "/images/categories/charms.jpg",
    productCount: "18 Products",
    href: "/collections/charms",
  },

  {
    id: "men",
    title: "Men",
    image: "/images/categories/men.jpg",
    productCount: "24 Products",
    href: "/collections/men",
  },
];
