import React, { FC } from "react";

const Overlay: FC<{ opacity?: number }> = ({ opacity = 70 }) => {
  return (
    <div
      className={`-z-10 absolute rounded-xl bg-black top-0 bottom-0 left-0 right-0`}
      style={{ opacity: `${opacity}%` }}
    />
  );
};

export default Overlay;
