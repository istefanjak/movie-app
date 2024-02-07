import { Placeholder } from "@phosphor-icons/react";
import React, { FC } from "react";

const PlaceholderImage: FC<{ size?: number }> = ({ size = 64 }) => {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <Placeholder size={size} />
    </div>
  );
};

export default PlaceholderImage;
