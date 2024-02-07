"use client";

import React, { FC, ReactElement, ReactNode, useState } from "react";
import Button from "@/components/common/Button";

const TabLayout: FC<{ tabs: { title: string; content: ReactNode }[] }> = ({
  tabs,
}) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const renderButton = (title: string, index: number): ReactElement => {
    return (
      <Button
        key={index}
        type={activeIndex === index ? "yellow" : "transparent"}
        text={title}
        onClick={() => setActiveIndex(index)}
      />
    );
  };

  return (
    <div className="flex flex-col gap-10">
      <div className="flex gap-3">
        {tabs.map((tab, index) => renderButton(tab.title, index))}
      </div>
      <div key={activeIndex}>{tabs[activeIndex].content}</div>
    </div>
  );
};

export default TabLayout;
