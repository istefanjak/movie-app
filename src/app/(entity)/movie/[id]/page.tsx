"use client";

import { API_PATH } from "@/const/apiPaths";
import DetailsHeader from "@/components/details/DetailsHeader";
import GenreDisplay from "@/components/details/GenreDisplay";
import Loading from "@/components/common/Loading";
import MovieInfoDisplay from "@/components/details/MovieInfoDisplay";
import Poster from "@/components/common/Poster";
import VoteDisplay from "@/components/common/VoteDisplay";
import { MovieDetails } from "@/types/types";
import { mapToFavorite } from "@/utils/mappers";
import { fetchApi } from "@/utils/api";
import { useParams } from "next/navigation";
import React, { FC, useEffect, useState } from "react";

const Page: FC = () => {
  const [movie, setMovie] = useState<MovieDetails | null>();
  const params = useParams<{ id: string }>();

  useEffect(() => {
    const getMovieInfo = async () => {
      try {
        const res = await fetchApi<MovieDetails>(
          `${API_PATH.movieDetails}/${params.id}`
        );
        setMovie(res);
      } catch (e) {
        setMovie(null);
      }
    };
    getMovieInfo();
  }, [params.id]);

  return (
    <Loading fetchData={movie} className="mx-auto mt-3">
      {movie && (
        <>
          <aside>
            <Poster entity={mapToFavorite(movie)} />
          </aside>
          <section className="flex flex-col gap-10">
            <div className="flex flex-col gap-1">
              <DetailsHeader
                title={movie.title}
                airDate={movie.release_date}
                favorite={mapToFavorite(movie)}
              />
              <GenreDisplay genres={movie.genres} />
              <VoteDisplay
                voteAvg={movie.vote_average}
                voteCnt={movie.vote_count}
              />
            </div>
            <MovieInfoDisplay movie={movie} />
            <div className="font-secondary">{movie.overview}</div>
          </section>
        </>
      )}
    </Loading>
  );
};

export default Page;
