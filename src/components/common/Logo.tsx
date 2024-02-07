import React, { FC } from "react";
import Image from "next/image";

const Logo: FC<{ width: number; height: number; showText?: boolean }> = ({
  width,
  height,
  showText = false,
}) => {
  const src = showText
    ? "/assets/images/logo-text.webp"
    : "/assets/images/logo.svg";

  return <Image src={src} alt="Logo" width={width} height={height} />;
};

export default Logo;
