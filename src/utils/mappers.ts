import { Movie, MovieDetails, TvShow, TvShowDetails, Favorite, EntityType } from "@/types/types";


export function mapToFavorite(
  input: Movie | MovieDetails | TvShow | TvShowDetails
): Favorite {
  let title: string;
  let type: EntityType;
  if ("name" in input) {
    type = "tvShow";
    title = input.name;
  } else {
    type = "movie";
    title = input.title;
  }

  return {
    title,
    type,
    id: input.id,
    posterPath: input.poster_path,
  };
}
