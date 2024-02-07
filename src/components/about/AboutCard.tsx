import { AboutCardProps } from "@/types/types";
import React, { FC } from "react";
import Image from "next/image";

const AboutCard: FC<AboutCardProps> = ({
  imageUrl,
  text1,
  text2,
  text3,
  className = "",
}) => {
  return (
    <div
      className={`about-card p-7 flex flex-col gap-5 text-center rounded-xl ${className}`}
    >
      <div className="relative h-48">
        <Image
          src={imageUrl}
          alt="About image"
          fill
          sizes="328px"
          className="object-contain"
        />
      </div>
      <span className="font-tertiary uppercase font-bold">{text1}</span>
      <span className="font-primary font-bold text-xl">{text2}</span>
      <span className="font-secondary">{text3}</span>
    </div>
  );
};

export default AboutCard;
