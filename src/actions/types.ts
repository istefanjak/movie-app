import { Favorite, Genre } from "@/types/types";

// Genres
export const ADD_GENRES_SUCCESS = "ADD_GENRES_SUCCESS";

export type AddGenresAction = {
  type: typeof ADD_GENRES_SUCCESS;
  payload: Genre[];
};

export type GenresActions = AddGenresAction;

// Favorites
export const ADD_FAVORITE_SUCCESS = "ADD_FAVORITE_SUCCESS";
export const ADD_FAVORITES_SUCCESS = "ADD_FAVORITES_SUCCESS";
export const REMOVE_FAVORITE_SUCCESS = "REMOVE_FAVORITE_SUCCESS";

export type AddFavoriteAction = {
  type: typeof ADD_FAVORITE_SUCCESS;
  payload: Favorite;
};

export type AddFavoritesAction = {
  type: typeof ADD_FAVORITES_SUCCESS;
  payload: Favorite[];
};

export type RemoveFavoriteAction = {
  type: typeof REMOVE_FAVORITE_SUCCESS;
  payload: number;
};

export type FavoritesActions =
  | AddFavoriteAction
  | AddFavoritesAction
  | RemoveFavoriteAction;
