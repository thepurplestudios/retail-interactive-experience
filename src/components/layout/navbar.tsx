"use client";

import { Search, User, Heart, ShoppingCart, ArrowLeft } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export function Navbar() {
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchPinned, setSearchPinned] = useState(false);
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false);

  const navbarRef = useRef<HTMLDivElement>(null);
  const mobileInputRef = useRef<HTMLInputElement>(null);

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

  // autofocus the mobile search input when it slides open
  useEffect(() => {
    if (mobileSearchOpen) {
      mobileInputRef.current?.focus();
    }
  }, [mobileSearchOpen]);

  return (
    <header className="fixed top-5 left-0 right-0 z-50">
      <div
        ref={navbarRef}
        className="
          mx-auto

          w-[92%]
          max-w-[1100px]

          px-8
          py-2.5
          md:px-6
          md:py-2
          max-md:px-5
          max-md:py-2.5

          flex
          items-center
          justify-between

          rounded-full

          border
          border-white/30

          bg-[#d8c8f073]
          backdrop-blur-xl

          shadow-[0_8px_24px_rgba(0,0,0,0.06)]
        "
      >
        {/* LEFT */}
        <div className="flex flex-col">
          <h1
            className="
              font-display
              text-[30px]
              md:text-[26px]
              max-md:text-[22px]
              font-semibold
              leading-none
              text-[var(--primary)]
            "
          >
            The PurPle Shop
          </h1>
        </div>

        {/* RIGHT — desktop / tablet */}
        <div className="hidden md:flex items-center gap-6 md:gap-4">
          {/* Search */}
          <div
            onMouseEnter={() => setSearchOpen(true)}
            onMouseLeave={() => {
              if (!searchPinned) setSearchOpen(false);
            }}
            className="relative"
          >
            <div
              className={`
                flex items-center overflow-hidden
                transition-all duration-300 ease-out
                ${searchOpen ? "w-52" : "w-10"}
              `}
            >
              <button
                className="
                  h-10
                  w-10

                  flex
                  items-center
                  justify-center

                  shrink-0

                  text-[var(--primary)]
                "
              >
                <Search size={20} strokeWidth={1.75} />
              </button>

              <input
                type="text"
                placeholder="Search..."
                onFocus={() => {
                  setSearchOpen(true);
                  setSearchPinned(true);
                }}
                className={`
                  ml-2
                  w-full

                  bg-transparent
                  outline-none

                  text-sm

                  placeholder:text-[var(--text-muted)]

                  transition-opacity
                  duration-300

                  ${
                    searchOpen ? "opacity-100" : "opacity-0 pointer-events-none"
                  }
                `}
              />
            </div>
          </div>

          {/* Account */}
          <button
            className="
              text-[var(--primary)]
              transition-transform
              duration-300
              hover:scale-110
            "
          >
            <User size={20} strokeWidth={1.75} />
          </button>

          {/* Wishlist */}
          <button
            className="
              text-[var(--primary)]
              transition-transform
              duration-300
              hover:scale-110
            "
          >
            <Heart size={20} strokeWidth={1.75} />
          </button>

          {/* Cart */}
          <button
            className="
              text-[var(--primary)]
              transition-transform
              duration-300
              hover:scale-110
            "
          >
            <ShoppingCart size={20} strokeWidth={1.75} />
          </button>
        </div>

        {/* RIGHT — mobile: single row, icon-only, no expanding input */}
        <div className="flex md:hidden items-center gap-4">
          <button className="text-[var(--primary)]">
            <Heart size={20} strokeWidth={1.75} />
          </button>

          <button className="text-[var(--primary)]">
            <ShoppingCart size={20} strokeWidth={1.75} />
          </button>

          <button className="text-[var(--primary)]">
            <User size={20} strokeWidth={1.75} />
          </button>

          <button
            onClick={() => setMobileSearchOpen(true)}
            className="text-[var(--primary)]"
          >
            <Search size={20} strokeWidth={1.75} />
          </button>
        </div>
      </div>

      {/* MOBILE — search slides down below the navbar */}
      <div
        className={`
          md:hidden
          mx-auto
          w-[92%]
          max-w-[1100px]

          overflow-hidden
          transition-all duration-300 ease-out

          ${mobileSearchOpen ? "max-h-16 opacity-100 mt-2" : "max-h-0 opacity-0 mt-0"}
        `}
      >
        <div
          className="
            flex
            items-center
            gap-2

            px-4
            py-2.5

            rounded-full

            border
            border-white/30

            bg-[rgba(216,200,240,0.45)]
            backdrop-blur-xl

            shadow-[0_8px_24px_rgba(0,0,0,0.06)]
          "
        >
          <button
            onClick={() => setMobileSearchOpen(false)}
            className="
              h-8 w-8
              flex items-center justify-center
              shrink-0
              text-[var(--primary)]
            "
          >
            <ArrowLeft size={20} strokeWidth={1.75} />
          </button>

          <Search
            size={18}
            strokeWidth={1.75}
            className="text-[var(--primary)] shrink-0"
          />

          <input
            ref={mobileInputRef}
            type="text"
            placeholder="Search..."
            className="
              w-full
              bg-transparent
              outline-none
              text-sm
              placeholder:text-[var(--text-muted)]
            "
          />
        </div>
      </div>
    </header>
  );
}
