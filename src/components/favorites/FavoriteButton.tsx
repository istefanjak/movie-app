"use client";

import React, { FC, MouseEvent, useState } from "react";
import Button from "@/components/common/Button";
import { Heart } from "@phosphor-icons/react";
import { Favorite } from "@/types/types";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/reducers/types";
import { isFavorited } from "@/utils/favoriteUtils";
import {
  addFavoriteAction,
  removeFavoriteAction,
} from "@/actions/favoritesActions";

const FavoriteButton: FC<{
  entity: Favorite;
  size?: number;
  className?: string;
}> = ({ entity, size = 32, className = "" }) => {
  const [currentSize, setCurrentSize] = useState(size);

  const favorites = useSelector(
    (state: RootState) => state.favorites.favorites
  );
  const dispatch = useDispatch();

  const onClick = (
    e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>
  ): void => {
    e.preventDefault();
    e.stopPropagation();

    if (isFavorited(favorites, entity.id)) {
      removeFavoriteAction(dispatch, entity.id);
      toast.success("Favorit izbirsan");
    } else {
      addFavoriteAction(dispatch, entity);
      toast.success("Favorit dodan");
    }
  };

  const onMouseEnter = (): void => {
    setCurrentSize(size * 1.5);
  };

  const onMouseLeave = (): void => {
    setCurrentSize(size);
  };

  return (
    <Button
      className="bg-transparent hover:bg-transparent"
      icon={
        <Heart
          size={currentSize}
          weight="fill"
          stroke="black"
          strokeWidth={12}
          className={`heart ${
            isFavorited(favorites, entity.id) ? "text-red-700" : "text-gray-200"
          } ${className}`}
        />
      }
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    />
  );
};

export default FavoriteButton;
