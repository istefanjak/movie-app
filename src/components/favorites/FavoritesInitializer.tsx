import { addFavoritesAction } from "@/actions/favoritesActions";
import { RootState } from "@/reducers/types";
import { Favorite } from "@/types/types";
import React, { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const FavoritesInitializer: FC = () => {
  const FAVORITES_LOCAL_STORAGE_KEY = "favorites";

  const dispatch = useDispatch();
  const favorites = useSelector(
    (state: RootState) => state.favorites.favorites
  );

  const loadFavoritesFromLocalStorage = (): Favorite[] => {
    const favorites = localStorage.getItem(FAVORITES_LOCAL_STORAGE_KEY);
    if (!favorites) {
      return [];
    }
    return JSON.parse(favorites);
  };

  useEffect(() => {
    const favorites = loadFavoritesFromLocalStorage();
    addFavoritesAction(dispatch, favorites);
  }, [dispatch]);

  useEffect(() => {
    localStorage.setItem(
      FAVORITES_LOCAL_STORAGE_KEY,
      JSON.stringify(favorites)
    );
  }, [favorites]);

  return <></>;
};

export default FavoritesInitializer;
