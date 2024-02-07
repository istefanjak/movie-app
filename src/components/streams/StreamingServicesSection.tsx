import React, { FC } from "react";
import StreamingServiceIcon from "@/components/streams/StreamingServiceIcon";
import Button from "@/components/common/Button";

const StreamingServicesSection: FC = () => {
  return (
    <section className="flex flex-col gap-5 items-center font-secondary ">
      <span>Streaming servisi na JustWatchu</span>
      <div className="flex gap-5">
        <StreamingServiceIcon fileName="netflix.webp" />
        <StreamingServiceIcon fileName="prime_video.webp" />
        <StreamingServiceIcon fileName="ivi.webp" />
        <StreamingServiceIcon fileName="gplay.webp" />
        <StreamingServiceIcon
          fileName="flix_ole.webp"
          className="hidden md:block"
        />
        <StreamingServiceIcon
          fileName="mubi.webp"
          className="hidden md:block"
        />
        <StreamingServiceIcon fileName="zes.webp" className="hidden md:block" />
        <StreamingServiceIcon
          fileName="guidedoc.webp"
          className="hidden lg:block"
        />
        <StreamingServiceIcon fileName="tfc.webp" className="hidden lg:block" />
        <StreamingServiceIcon
          fileName="curiosity.webp"
          className="hidden lg:block"
        />
        <StreamingServiceIcon
          fileName="sun_nxt.webp"
          className="hidden xl:block"
        />
        <StreamingServiceIcon
          fileName="spamflix.webp"
          className="hidden xl:block"
        />
        <StreamingServiceIcon
          fileName="docsville.webp"
          className="hidden xl:block"
        />
        <Button
          text="Pogledajte sve"
          className="uppercase font-secondary ml-2"
        />
      </div>
    </section>
  );
};

export default StreamingServicesSection;
