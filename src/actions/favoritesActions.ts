import { Dispatch } from "react";
import {
  ADD_FAVORITES_SUCCESS,
  ADD_FAVORITE_SUCCESS,
  AddFavoriteAction,
  AddFavoritesAction,
  REMOVE_FAVORITE_SUCCESS,
  RemoveFavoriteAction,
} from "@/actions/types";
import { Favorite } from "@/types/types";

export const addFavoriteAction = (
  dispatch: Dispatch<AddFavoriteAction>,
  favorite: Favorite
) => {
  dispatch({
    type: ADD_FAVORITE_SUCCESS,
    payload: favorite,
  });
};

export const addFavoritesAction = (
  dispatch: Dispatch<AddFavoritesAction>,
  favorites: Favorite[]
) => {
  dispatch({
    type: ADD_FAVORITES_SUCCESS,
    payload: favorites,
  });
};

export const removeFavoriteAction = (
  dispatch: Dispatch<RemoveFavoriteAction>,
  favoriteId: number
) => {
  dispatch({
    type: REMOVE_FAVORITE_SUCCESS,
    payload: favoriteId,
  });
};
