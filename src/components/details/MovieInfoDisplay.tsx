import { MovieDetails } from "@/types/types";
import { formatNumberWithSuffix } from "@/utils/formatters";
import React, { FC } from "react";

const MovieInfoDisplay: FC<{ movie: MovieDetails }> = ({ movie }) => {
  return (
    <div className="inline-block">
      <div className="inline-grid grid-cols-2 gap-x-4 gap-y-1">
        <div>Vrijeme izvođenja:</div>
        <div>{movie.runtime} min</div>

        <div>Popularnost:</div>
        <div>{movie.popularity}</div>

        <div>Prihod:</div>
        <div>{formatNumberWithSuffix(movie.revenue)} $</div>
      </div>
    </div>
  );
};

export default MovieInfoDisplay;
