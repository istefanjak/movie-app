import { Genre } from "@/types/types";

export const findGenreId = (genres: Genre[], query: string): number | undefined => {
  const index = genres
    .map((genre) => genre.name)
    .findIndex((genre) => genre.toLowerCase().includes(query.toLowerCase()));
  return index === -1 ? undefined : genres[index].id;
};
