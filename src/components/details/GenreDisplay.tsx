import { Genre } from "@/types/types";
import React, { FC } from "react";

const GenreDisplay: FC<{
  genres: Genre[];
  className?: string;
}> = ({ genres, className = "" }) => {
  return (
    <div className="flex gap-3 mb-5">
      {genres.map((genre) => (
        <span key={genre.id} className={`font-tertiary ${className}`}>
          {genre.name}
        </span>
      ))}
    </div>
  );
};

export default GenreDisplay;
