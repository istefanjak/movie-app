"use client";

import React, { FC, useEffect, useState } from "react";
import Top10 from "@/components/top10/Top10";
import { fetchApi } from "@/utils/api";
import { Movie, TmdbPageableResponse } from "@/types/types";
import { API_PATH } from "@/const/apiPaths";

const Top10Movies: FC = () => {
  const [movies, setMovies] = useState<TmdbPageableResponse<Movie> | null>();

  useEffect(() => {
    const getTop10Movies = async () => {
      try {
        const res = await fetchApi<TmdbPageableResponse<Movie>>(API_PATH.moviesPopular);
        setMovies(res);
      } catch (e) {
        setMovies(null);
      }
    };
    getTop10Movies();
  }, []);

  return (
    <Top10
      data={movies === null ? null : movies?.results}
      description={{
        title: "Top 10 filmova ovog tjedna",
        text: "Otkrijte najgledanije filmove ovog tjedna i doznajte gdje ih možete gledati.",
      }}
      showPosterOrdinal
    />
  );
};

export default Top10Movies;
