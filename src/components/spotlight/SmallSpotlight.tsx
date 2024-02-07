"use client";

import React, { FC, useEffect, useState } from "react";
import SmallSpotlightCard from "@/components/spotlight/SmallSpotlightCard";
import { TmdbPageableResponse, TvShow } from "@/types/types";
import { fetchApi } from "@/utils/api";
import { API_PATH } from "@/const/apiPaths";
import Loading from "@/components/common/Loading";

const SmallSpotlight: FC = () => {
  const [shows, setShows] = useState<TmdbPageableResponse<TvShow> | null>();

  useEffect(() => {
    const getTrending = async () => {
      try {
        const res = await fetchApi<TmdbPageableResponse<TvShow>>(
          API_PATH.tvSeriesPopular
        );
        setShows(res);
      } catch (e) {
        setShows(null);
      }
    };
    getTrending();
  }, []);

  return (
    <section className="flex flex-col gap-10">
      <h1 className="text-3xl">Nove serije</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-7xl mx-auto">
        <Loading fetchData={shows}>
          {shows?.results.slice(0, 2).map((show) => (
            <SmallSpotlightCard key={show.id} show={show} />
          ))}
        </Loading>
      </div>
    </section>
  );
};

export default SmallSpotlight;
