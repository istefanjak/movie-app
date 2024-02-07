"use client";

import { TvShow } from "@/types/types";
import React, { FC, useEffect, useState } from "react";
import Top10 from "@/components/top10/Top10";
import { fetchApi } from "@/utils/api";
import { TmdbPageableResponse } from "@/types/types";
import { API_PATH } from "@/const/apiPaths";

const NewTvSeries: FC<{ showDescription?: boolean }> = ({
  showDescription = true,
}) => {
  const [tvSeries, setTvSeries] =
    useState<TmdbPageableResponse<TvShow> | null>();

  useEffect(() => {
    const getNewTvSeries = async () => {
      try {
        const res = await fetchApi<TmdbPageableResponse<TvShow>>(
          API_PATH.tvSeriesNew
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
      description={
        showDescription
          ? {
              title: "Nove serije",
              text: "Pogledajte svaku novu TV seriju koja je nedavno postala dostupna na streaming servisima.",
              link: {
                text: "Pogledajte sve nove TV serije",
                href: "#",
              },
            }
          : undefined
      }
    />
  );
};

export default NewTvSeries;
