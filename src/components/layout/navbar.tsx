"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export function Navbar() {
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchPinned, setSearchPinned] = useState(false);

  const navbarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        navbarRef.current &&
        !navbarRef.current.contains(event.target as Node)
      ) {
        setSearchOpen(false);
        setSearchPinned(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="fixed top-5 left-0 right-0 z-50">
      <div
        ref={navbarRef}
        className="
          mx-auto w-[90%] max-w-[1300px]

          flex items-center justify-between

          rounded-full

          px-8 py-2.5

          border border-white/30

          shadow-[0_8px_32px_rgba(91,63,120,0.15)]

          backdrop-blur-xl

          bg-[rgba(216,200,240,0.45)]
        "
      >
        {/* LEFT */}
        <div className="flex flex-col items-start">
          <h1
            className="
              font-display
              text-4xl
              font-bold
              leading-none
              text-[var(--primary)]
            "
          >
            The PurPle Shop
          </h1>

          <p
            className="
    mt-1
    pl-2
    text-sm
    tracking-[0.18em]
    text-[var(--text-muted)]
  "
          >
            Dreamy. Retro. Y2K Vibes.
          </p>
        </div>

        {/* RIGHT */}
        <div className="flex items-center gap-3">
          {/* Search */}
          <div
            onMouseEnter={() => setSearchOpen(true)}
            onMouseLeave={() => {
              if (!searchPinned) setSearchOpen(false);
            }}
            className="relative"
          >
            <div
              className={`flex items-center overflow-hidden transition-all duration-300 ease-out ${searchOpen ? "w-64" : "w-15"}`}
            >
              <div className="w-16 h-15 flex items-center justify-center shrink-0">
                <Image
                  src="/images/icons/search.png"
                  alt="Search"
                  width={70}
                  height={70}
                />
              </div>
              <input
                type="text"
                placeholder="Dream & Search..."
                onFocus={() => {
                  setSearchOpen(true);
                  setSearchPinned(true);
                }}
                className={`ml-2 w-full bg-transparent outline-none text-sm placeholder:text-[var(--text-muted)] transition-opacity duration-300 ${searchOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}
              />
            </div>
          </div>

          {/* Account */}
          <button className="w-15 h-15 flex items-center justify-center transition-transform duration-300 hover:scale-110">
            <Image
              src="/images/icons/account.png"
              alt="Account"
              width={60}
              height={60}
            />
          </button>

          {/* Wishlist */}
          <button className="w-15 h-15 flex items-center justify-center transition-transform duration-300 hover:scale-110">
            <Image
              src="/images/icons/wishlist.png"
              alt="Wishlist"
              width={60}
              height={60}
            />
          </button>

          {/* Cart */}
          <button className="w-15 h-15 flex items-center justify-center transition-transform duration-300 hover:scale-110">
            <Image
              src="/images/icons/cart.png"
              alt="Cart"
              width={60}
              height={60}
            />
          </button>
        </div>
      </div>
    </header>
  );
}
