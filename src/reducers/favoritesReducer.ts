import {
  ADD_FAVORITES_SUCCESS,
  ADD_FAVORITE_SUCCESS,
  FavoritesActions,
  REMOVE_FAVORITE_SUCCESS,
} from "@/actions/types";
import { FavoritesState } from "@/reducers/types";
import { isFavorited } from "@/utils/favoriteUtils";

const initialState: FavoritesState = {
  favorites: [],
};

export const favoritesReducer = (
  state = initialState,
  action: FavoritesActions
): FavoritesState => {
  switch (action.type) {
    case ADD_FAVORITE_SUCCESS:
      if (isFavorited(state.favorites, action.payload.id)) {
        return state;
      }
      return {
        ...state,
        favorites: [...state.favorites, action.payload],
      };
    case ADD_FAVORITES_SUCCESS:
      return {
        ...state,
        favorites: [...state.favorites, ...action.payload],
      };
    case REMOVE_FAVORITE_SUCCESS:
      return {
        ...state,
        favorites: state.favorites.filter((fav) => fav.id !== action.payload),
      };
    default:
      return state;
  }
};
