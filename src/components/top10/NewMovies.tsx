"use client";

import React, { FC, useEffect, useState } from "react";
import Top10 from "@/components/top10/Top10";
import { API_PATH } from "@/const/apiPaths";
import { fetchApi } from "@/utils/api";
import { Movie, TmdbPageableResponse } from "@/types/types";

const NewMovies: FC<{ showDescription?: boolean }> = ({
  showDescription = true,
}) => {
  const [movies, setMovies] = useState<TmdbPageableResponse<Movie> | null>();

  useEffect(() => {
    const getNewMovies = async () => {
      try {
        const res = await fetchApi<TmdbPageableResponse<Movie>>(
          API_PATH.moviesNew
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
      description={
        showDescription
          ? {
              title: "Novi filmovi",
              text: "Pogledajte koji su sve novi filmovi nedavno postali dostupni na platformama za streaming",
              link: {
                text: "Pogledajte sve nove filmove",
                href: "#",
              },
            }
          : undefined
      }
    />
  );
};

export default NewMovies;
