"use client";

import React, { FC } from "react";
import Logo from "@/components/common/Logo";
import Button from "@/components/common/Button";
import { useRouter } from "next/navigation";

const DiscoverSection: FC = () => {
  const router = useRouter();

  const onDiscoveryButtonClick = () => {
    router.push("/discovery");
  };

  return (
    <section className="flex flex-col gap-12 items-center text-center">
      <Logo width={68} height={68} />
      <h1 className="text-3xl">
        Otkrijte najbolje filmove i serije na svojim omiljenim platformama za
        streaming
      </h1>
      <Button
        type="yellow"
        text="Otkrijte filmove i serije"
        onClick={onDiscoveryButtonClick}
      />
    </section>
  );
};

export default DiscoverSection;
