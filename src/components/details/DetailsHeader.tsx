import { Favorite } from "@/types/types";
import React, { FC } from "react";
import FavoriteButton from "@/components/favorites/FavoriteButton";

const DetailsHeader: FC<{
  title: string;
  airDate: string;
  favorite: Favorite;
}> = ({ airDate, favorite, title }) => {
  return (
    <div className="flex flex-col lg:flex-row text-center lg:text-left lg:items-end gap-5">
      <h1 className="text-4xl">{title}</h1>
      <h2>({new Date(airDate).getFullYear()})</h2>
      <div className="relative pb-10 lg:pb-3">
        <FavoriteButton className="absolute" entity={favorite} />
      </div>
    </div>
  );
};

export default DetailsHeader;
