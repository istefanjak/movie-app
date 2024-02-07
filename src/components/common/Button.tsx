import { ButtonProps } from "@/types/types";
import React, { FC } from "react";

const Button: FC<ButtonProps> = ({
  className = "",
  icon,
  text,
  type = "default",
  submit = false,
  onClick,
  onMouseEnter,
  onMouseLeave,
}) => {
  const getClassName = () => {
    const ret = [className];
    switch (type) {
      case "yellow":
        ret.push("button-1");
        break;
      case "transparent":
        ret.push("button-2");
    }
    return ret.filter((c) => c).join(" ");
  };

  return (
    <button
      type={submit ? "submit" : "button"}
      className={getClassName()}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {(icon && (
        <span className="flex gap-2 items-center">
          {icon}
          {text}
        </span>
      )) ||
        text}
    </button>
  );
};

export default Button;
