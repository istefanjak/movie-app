import AboutSection from "@/components/about/AboutSection";
import DiscoverSection from "@/components/discover/DiscoverSection";
import Languages from "@/components/footer/Languages";
import Hero from "@/components/hero/Hero";
import SmallSpotlight from "@/components/spotlight/SmallSpotlight";
import Spotlight from "@/components/spotlight/Spotlight";
import StreamingServicesSection from "@/components/streams/StreamingServicesSection";
import MostWatchedMovies from "@/components/top10/MostWatchedMovies";
import MostWatchedTvSeries from "@/components/top10/MostWatchedTvSeries";
import NewMovies from "@/components/top10/NewMovies";
import NewTvSeries from "@/components/top10/NewTvSeries";
import Top10Movies from "@/components/top10/Top10Movies";
import Top10TvSeries from "@/components/top10/Top10TvSeries";
import React, { FC } from "react";

const Page: FC = () => {
  return (
    <>
      <Hero />
      <div className="flex flex-col gap-24">
        <StreamingServicesSection />
        <AboutSection />
        <h1 className="font-bold text-3xl w-3/5 md:w-2/5">
          Pretražite nove, popularne i nadolazeće filmove i serije
        </h1>
        <Top10Movies />
        <Top10TvSeries />
        <Spotlight />
        <NewMovies />
        <SmallSpotlight />
        <NewTvSeries />
        <MostWatchedMovies />
        <MostWatchedTvSeries />
        <DiscoverSection />
        <Languages />
      </div>
    </>
  );
};

export default Page;
