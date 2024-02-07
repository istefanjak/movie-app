"use client";

import { Heart, Trash } from "@phosphor-icons/react";
import React, { FC, ReactElement, useState } from "react";
import Link from "next/link";
import { Favorite } from "@/types/types";
import Button from "@/components/common/Button";
import { API_PATH } from "@/const/apiPaths";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/reducers/types";
import { removeFavoriteAction } from "@/actions/favoritesActions";

const FavoritesMenu: FC<{ className?: string }> = ({ className }) => {
  const favorites = useSelector(
    (state: RootState) => state.favorites.favorites
  );
  const dispatch = useDispatch();

  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  const onRemoveClick = (favoriteId: number) => {
    removeFavoriteAction(dispatch, favoriteId);
  };

  const renderFavorite = (favorite: Favorite): ReactElement => {
    return (
      <div key={favorite.id} className="flex">
        <Link
          className="block flex-1 px-4 py-2 rounded-md hover:bg-gray-100 hover:text-black"
          href={`${
            favorite.type === "movie"
              ? API_PATH.movieDetails
              : API_PATH.tvSeriesDetails
          }/${favorite.id}`}
        >
          {favorite.title}
        </Link>
        <Button
          icon={<Trash className="text-red-600" weight="fill" />}
          className="bg-transparent rounded-full"
          onClick={() => onRemoveClick(favorite.id)}
        />
      </div>
    );
  };

  const renderNoFavorites = (): ReactElement => {
    return <div className="px-4 py-2 text-right">Nemate favorita</div>;
  };

  return (
    <div className={`relative ${className}`}>
      <Button
        className={`bg-transparent hover:bg-transparent ${
          isOpen ? "font-tertiary" : "font-primary"
        }`}
        icon={<Heart size={24} weight="fill" />}
        onClick={toggleDropdown}
      />
      {isOpen && (
        <div className="w-72 md:min-w-96 absolute right-0 mt-2 bg-1 font-secondary shadow-lg rounded-md">
          <div className="px-4 py-2 mb-5 bg-4 text-black text-right rounded-md">
            Favoriti
          </div>
          <div className="max-h-64 overflow-y-auto custom-scrollbar">
            {(!!favorites.length && favorites.map(renderFavorite)) ||
              renderNoFavorites()}
          </div>
        </div>
      )}
    </div>
  );
};

export default FavoritesMenu;
