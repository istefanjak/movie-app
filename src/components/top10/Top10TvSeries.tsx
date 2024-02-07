"use client";

import { API_PATH } from "@/const/apiPaths";
import { TmdbPageableResponse, TvShow } from "@/types/types";
import { fetchApi } from "@/utils/api";
import React, { FC, useEffect, useState } from "react";
import Top10 from "@/components/top10/Top10";

const Top10TvSeries: FC = () => {
  const [tvShows, setTvShows] = useState<TmdbPageableResponse<TvShow> | null>();

  useEffect(() => {
    const getTop10TvShows = async () => {
      try {
        const res = await fetchApi<TmdbPageableResponse<TvShow>>(
          API_PATH.tvSeriesPopular
        );
        setTvShows(res);
      } catch (e) {
        setTvShows(null);
      }
    };
    getTop10TvShows();
  }, []);

  return (
    <Top10
      data={tvShows === null ? null : tvShows?.results}
      description={{
        title: "Top 10 serija ovog tjedna",
        text: "Istražite najgledanije serije ovog tjedna i doznajte gdje ih možete streamati.",
      }}
      showPosterOrdinal
    />
  );
};

export default Top10TvSeries;
