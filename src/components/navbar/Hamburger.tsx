"use client";

import { List } from "@phosphor-icons/react";
import React, { FC, ReactElement, useState } from "react";
import Button from "@/components/common/Button";
import Link from "next/link";

const Hamburger: FC<{
  items: { text: string; href: string }[];
  className?: string;
}> = ({ items, className }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  const renderItem = (
    item: {
      text: string;
      href: string;
    },
    index: number
  ): ReactElement => {
    return (
      <Link
        key={index}
        href={item.href}
        className="block px-4 py-2 rounded-md hover:bg-gray-100 hover:text-black"
      >
        {item.text}
      </Link>
    );
  };

  return (
    <div className={`relative ${className}`}>
      <Button
        className={`bg-transparent hover:bg-transparent ${
          isOpen ? "font-tertiary" : "font-primary"
        }`}
        icon={<List size={24} weight="bold" />}
        onClick={toggleDropdown}
      />

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-1 font-secondary shadow-lg rounded-md">
          {items.map(renderItem)}
        </div>
      )}
    </div>
  );
};

export default Hamburger;
