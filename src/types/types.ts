import {
  AnchorHTMLAttributes,
  DetailedHTMLProps,
  MouseEventHandler,
  ReactNode,
} from "react";

export type LinkProps = DetailedHTMLProps<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  HTMLAnchorElement
> & {
  text: string;
};

export type ButtonProps = {
  text?: string;
  type?: ButtonType;
  icon?: ReactNode;
  submit?: boolean;
  className?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
};

export type Top10Props<T extends Movie | TvShow> = {
  data: T[] | undefined | null;
  description?: {
    title: string;
    text: string;
    link?: {
      text: string;
      href: string;
    };
  };
  showPosterOrdinal?: boolean;
};

export type PosterProps = {
  entity: Favorite;
  linkUrl?: string;
  className?: string;
  showLikeButton?: boolean;
  small?: boolean;
};

export type AboutCardProps = {
  imageUrl: string;
  text1: string;
  text2: string;
  text3: string;
  className?: string;
};

export type ButtonType = "default" | "yellow" | "transparent";

export type PosterSize =
  | "w92"
  | "w154"
  | "w185"
  | "w342"
  | "w500"
  | "w780"
  | "original";

export type EntityType = "movie" | "tvShow";

export type Favorite = {
  id: number;
  type: EntityType;
  title: string;
  posterPath: string | null;
};

export type TmdbPageableResponse<T> = {
  page: number;
  total_pages: number;
  total_results: number;
  results: T[];
};

export type TmdbErrorResponse = {
  success: boolean;
  status_code: number;
  status_message: string | null;
};

export type Genre = {
  id: number;
  name: String;
};

export type Movie = {
  id: number;
  adult: boolean;
  backdrop_path: string | null;
  genre_ids: number[];
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string | null;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};

export type MovieDetails = {
  id: number;
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection: string;
  budget: number;
  genres: Genre[];
  homepage: string;
  imdb_id: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: {
    id: number;
    logo_path: string;
    name: string;
    origin_country: string;
  }[];
  production_countries: {
    iso_3166_1: string;
    name: string;
  }[];
  release_date: string;
  revenue: number;
  runtime: number;
  spoken_languages: {
    english_name: string;
    iso_639_1: string;
    name: string;
  }[];
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};

export type TvShow = {
  id: number;
  adult: boolean;
  backdrop_path: string | null;
  genre_ids: number[];
  origin_country: string[];
  original_language: string;
  original_name: string;
  overview: string;
  popularity: number;
  poster_path: string | null;
  first_air_date: string;
  name: string;
  vote_average: number;
  vote_count: number;
};

export type TvShowDetails = {
  adult: boolean;
  backdrop_path: string;
  created_by: {
    id: number;
    credit_id: string;
    name: string;
    gender: number;
    profile_path: string;
  }[];
  episode_run_time: number[];
  first_air_date: string;
  genres: Genre[];
  homepage: string;
  id: number;
  in_production: boolean;
  languages: string[];
  last_air_date: string;
  last_episode_to_air: {
    id: number;
    name: string;
    overview: string;
    vote_average: number;
    vote_count: number;
    air_date: string;
    episode_number: number;
    production_code: string;
    runtime: number;
    season_number: number;
    show_id: number;
    still_path: string;
  };
  name: string;
  next_episode_to_air: string;
  networks: {
    id: number;
    logo_path: string;
    name: string;
    origin_country: string;
  }[];
  number_of_episodes: number;
  number_of_seasons: number;
  origin_country: string[];
  original_language: string;
  original_name: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: {
    id: number;
    logo_path: string;
    name: string;
    origin_country: string;
  }[];
  production_countries: {
    iso_3166_1: string;
    name: string;
  }[];
  seasons: {
    air_date: string;
    episode_count: number;
    id: number;
    name: string;
    overview: string;
    poster_path: string;
    season_number: number;
    vote_average: number;
  }[];
  spoken_languages: {
    english_name: string;
    iso_639_1: string;
    name: string;
  }[];
  status: string;
  tagline: string;
  type: string;
  vote_average: number;
  vote_count: number;
};

export type Trending = Movie & {
  media_type: string;
};
