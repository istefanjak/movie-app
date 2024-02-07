"use client";

import React from "react";
import Image from "next/image";
import Button from "@/components/common/Button";
import { useRouter } from "next/navigation";

const Hero = () => {
  const router = useRouter();

  const onDiscoveryButtonClick = () => {
    router.push("/discovery");
  };

  return (
    <section className="hero flex flex-col items-center justify-center text-center gap-3 mb-10">
      <h1 className="w-4/5">
        Vaš vodič za streaming filmovi, TV serije i sport
      </h1>
      <h2 className="w-4/5">
        Uz JustWatch pronađite gdje streamati nove, popularne i nadolazeće
        sadržaje.
      </h2>
      <div className="flex flex-col md:flex-row gap-5 mt-10">
        <Button
          type="yellow"
          className="px-7 py-3"
          text="Otkrijte filmove i serije"
          onClick={onDiscoveryButtonClick}
        />
        <Button type="transparent" className="px-7 py-3" text="Značajke" />
      </div>

      <Image
        src="/assets/images/home-bg.png"
        alt="Home background"
        fill
        className="opacity-60 -z-10 object-cover"
      />
      <div className="gradient -z-10" />
    </section>
  );
};

export default Hero;
