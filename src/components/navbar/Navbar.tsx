"use client";

import React, { useEffect, useRef } from "react";
import NavbarLink from "@/components/navbar/NavbarLink";
import Button from "@/components/common/Button";
import Logo from "@/components/common/Logo";
import Search from "@/components/common/Search";
import Hamburger from "@/components/navbar/Hamburger";
import Link from "next/link";
import FavoritesMenu from "@/components/favorites/FavoritesMenu";

const Navbar = () => {
  const navbarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const triggerElement = document.getElementsByClassName("hero")?.[0];
    if (!triggerElement) {
      return;
    }

    const handleScroll = () => {
      const triggerPosition =
        triggerElement.getBoundingClientRect().bottom + window.scrollY;

      if (window.scrollY > triggerPosition) {
        navbarRef.current?.classList.add("bg-black");
      } else {
        navbarRef.current?.classList.remove("bg-black");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav ref={navbarRef} className="px-3 py-5">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between gap-5">
        <Link href="/">
          <Logo width={253} height={38} showText />
        </Link>
        <div className="flex items-center gap-3">
          <NavbarLink href="#" text="Novo" className="hidden md:inline" />
          <NavbarLink
            href="#"
            text="Najgledanije"
            className="hidden md:inline"
          />
          <Search />
          <Button text="Prijava" className="hidden md:inline" />
          <Hamburger
            className="md:hidden"
            items={[
              {
                text: "Prijava",
                href: "#",
              },
              {
                text: "Novo",
                href: "#",
              },
              {
                text: "Najgledanije",
                href: "#",
              },
            ]}
          />
          <FavoritesMenu />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
