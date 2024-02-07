import { LinkProps } from "@/types/types";
import React, { FC } from "react";

const NavbarLink: FC<LinkProps> = ({
  text,
  href,
  className = "",
  ...otherPorps
}) => {
  return (
    <a href={href ?? "#"} className={`link-1 ${className}`} {...otherPorps}>
      {text}
    </a>
  );
};

export default NavbarLink;
