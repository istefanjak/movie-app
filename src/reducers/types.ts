import { Favorite, Genre } from "@/types/types";
import rootReducer from "@/reducers/rootReducer";

export type RootState = ReturnType<typeof rootReducer>;

export type GenresState = {
  genres: Genre[];
};

export type FavoritesState = {
  favorites: Favorite[];
};
