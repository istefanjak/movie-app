"use client";

import { API_PATH } from "@/const/apiPaths";
import { TmdbPageableResponse, TvShow } from "@/types/types";
import { fetchApi } from "@/utils/api";
import React, { useEffect, useState } from "react";
import Top10 from "@/components/top10/Top10";

const MostWatchedTvSeries = () => {
  const [tvSeries, setTvSeries] = useState<TmdbPageableResponse<TvShow> | null>();

  useEffect(() => {
    const getNewTvSeries = async () => {
      try {
        const res = await fetchApi<TmdbPageableResponse<TvShow>>(
          API_PATH.tvSeriesPopular
        );
        setTvSeries(res);
      } catch (e) {
        setTvSeries(null);
      }
    };
    getNewTvSeries();
  }, []);

  return (
    <Top10
      data={tvSeries === null ? null : tvSeries?.results}
      description={{
        title: "Najgledanije serije",
        text: "Otkrijte koje su serije u ovom trenutku najgledanije i doznajte gdje ih možete streamati.",
        link: {
          text: "Pogledajte sve najgledanije serije",
          href: "#",
        },
      }}
    />
  );
};

export default MostWatchedTvSeries;
