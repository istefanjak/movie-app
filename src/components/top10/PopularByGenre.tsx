"use client";

import React, { FC, ReactElement, useEffect, useState } from "react";
import { Genre, Movie, TmdbPageableResponse } from "@/types/types";
import Top10 from "@/components/top10/Top10";
import { fetchApi } from "@/utils/api";
import { API_PATH } from "@/const/apiPaths";
import { useSelector } from "react-redux";
import { RootState } from "@/reducers/types";

const PopularByGenre: FC = () => {
  const [movies, setMovies] = useState<
    Record<number, Movie[] | null> | undefined
  >();
  const genres = useSelector((state: RootState) => state.genres.genres);

  useEffect(() => {
    const fetchByGenre = async (genreId: number) => {
      try {
        const res = await fetchApi<TmdbPageableResponse<Movie>>(
          API_PATH.discover,
          {
            params: {
              with_genres: genreId.toString(),
            },
          }
        );
        return res.results;
      } catch (e) {
        return null;
      }
    };

    const fetchAllGenres = async () => {
      const results: (Movie[] | null)[] = await Promise.all(
        genres.map(async (genre) => await fetchByGenre(genre.id))
      );
      const resultRecord: Record<number, Movie[] | null> = {};

      genres.forEach((genre, index) => {
        resultRecord[genre.id] = results[index];
      });

      setMovies(resultRecord);
    };

    fetchAllGenres();
  }, [genres]);

  const renderItem = (genre: Genre): ReactElement => {
    return (
      <section key={genre.id} className="flex flex-col gap-5">
        <h2 className="text-3xl font-primary">{genre.name}</h2>
        <Top10 data={movies?.[genre.id]} />
      </section>
    );
  };

  return genres.map(renderItem);
};

export default PopularByGenre;
