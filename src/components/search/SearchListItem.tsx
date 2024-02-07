import { API_PATH } from "@/const/apiPaths";
import { Movie } from "@/types/types";
import Link from "next/link";
import React, { FC } from "react";
import Poster from "@/components/common/Poster";
import { mapToFavorite } from "@/utils/mappers";
import VoteDisplay from "@/components/common/VoteDisplay";
import FavoriteButton from "@/components/favorites/FavoriteButton";

const SearchListItem: FC<{ item: Movie }> = ({ item }) => {
  return (
    <Link
      className="flex flex-wrap gap-5 p-2 hover:bg-gray-800 rounded-md"
      href={`${API_PATH.movieDetails}/${item.id}`}
    >
      <Poster entity={mapToFavorite(item)} small />
      <div className="flex-1 flex flex-col gap-5">
        <div>
          <div className="relative flex gap-2">
            <h4 className="text-2xl">{item.title}</h4>
            <FavoriteButton
              entity={mapToFavorite(item)}
              size={24}
              className="absolute"
            />
          </div>
          <VoteDisplay voteAvg={item.vote_average} voteCnt={item.vote_count} />
        </div>
        <span className="font-secondary hidden md:inline">{item.overview}</span>
      </div>
    </Link>
  );
};

export default SearchListItem;
