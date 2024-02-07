"use client";

import { API_PATH } from "@/const/apiPaths";
import { Movie, TmdbPageableResponse } from "@/types/types";
import { fetchApi } from "@/utils/api";
import React, { useEffect, useState } from "react";
import Top10 from "@/components/top10/Top10";

const MostWatchedMovies = () => {
  const [movies, setMovies] = useState<TmdbPageableResponse<Movie> | null>();

  useEffect(() => {
    const getNewMovies = async () => {
      try {
        const res = await fetchApi<TmdbPageableResponse<Movie>>(
          API_PATH.moviesPopular
        );
        setMovies(res);
      } catch (e) {
        setMovies(null);
      }
    };
    getNewMovies();
  }, []);

  return (
    <Top10
      data={movies === null ? null : movies?.results}
      description={{
        title: "Najgledaniji filmovi",
        text: "Otkrijte koji su filmovi u ovom trenutku najgledaniji i doznajte gdje ih možete gledati.",
        link: {
          text: "Pogledajte sve najgledanije filmove",
          href: "#",
        },
      }}
    />
  );
};

export default MostWatchedMovies;
