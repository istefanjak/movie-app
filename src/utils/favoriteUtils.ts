import { Favorite } from "@/types/types";

export const isFavorited = (favorites: Favorite[], id: number): boolean => {
  return favorites.some((fav) => fav.id === id);
};
