"use client";

import { TvShow } from "@/types/types";
import React, { FC } from "react";
import StreamingServiceIcon from "@/components/streams/StreamingServiceIcon";
import Button from "@/components/common/Button";
import { Info } from "@phosphor-icons/react";
import Image from "next/image";
import Overlay from "@/components/common/Overlay";
import { useRouter } from "next/navigation";
import { API_PATH } from "@/const/apiPaths";

const SmallSpotlightCard: FC<{ show: TvShow }> = ({ show }) => {
  const router = useRouter();

  const onDetailsButtonClick = () => {
    router.push(`${API_PATH.tvSeriesDetails}/${show.id}`);
  };

  return (
    <div className="flex flex-col gap-10 justify-between p-5">
      <div className="relative flex flex-col gap-24">
        <div
          className="absolute top-0 left-0 right-0 flex items-start justify-center"
          style={{ height: "400px" }}
        >
          <Image
            src="/assets/images/chicago-p-d.webp"
            alt="chicago p d"
            fill
            sizes="452px"
            className="-z-10 object-cover mt-auto"
          />
          <Overlay />
        </div>
        <StreamingServiceIcon fileName="prime_video.webp" />
        <div className="flex flex-col gap-3">
          <h1>{show.name}</h1>
          <p>{show.overview}</p>
        </div>
      </div>
      <div>
        <Button
          type="yellow"
          text="Više informacija"
          icon={<Info />}
          onClick={onDetailsButtonClick}
        />
      </div>
    </div>
  );
};

export default SmallSpotlightCard;
