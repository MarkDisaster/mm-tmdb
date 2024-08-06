export enum MEDIA_TYPE {
   MOVIE = 'movie',
   SERIES = 'series',
}

type Gravatar = {
   hash: string | null;
};

type TmdbAvatar = {
   avatar_path: string | null;
};

type Avatar = {
   gravatar: Gravatar;
   tmdb: TmdbAvatar;
};

export type GetUserInfoApiReturn = {
   avatar: Avatar;
   id: number;
   iso_639_1: string;
   iso_3166_1: string;
   name: string;
   include_adult: boolean;
   username: string;
};

export type AddRemoveMovieToFavoritesParams = {
   media_id: number;
   media_type: MEDIA_TYPE;
   favorite: boolean;
};

export type AddRemoveMovieApiReturn = {
   status_code: number;
   status_message: string;
};

export type AddRemoveMovieToWatchlistParams = {
   media_id: number;
   media_type: MEDIA_TYPE;
   watchlist: boolean;
};

export type AddRemoveMovieToWatchlistApiReturn = {
   expires_at: string;
   request_token: string;
   success: boolean;
};

export type GetFavoriteMovies = {
   language: string;
   page: number;
   session_id: string;
   sort_by: SORT;
};

export enum SORT {
   ASC = 'created_at.asc',
   DESC = 'created_at.desc',
}

type MovieGenre = {
   id: number;
   name: string;
};

export type Movie = {
   id: number;
   poster_path: string;
   budget: number;
   genres: MovieGenre[];
   title: string;
   original_title: string;
   revenue: number;
   vote_average: number;
   vote_count: number;
   popularity: number;
};

export type GetFavoriteMoviesApiReturn = {
   page: number;
   results: Movie[];
   total_pages: number;
   total_results: number;
};

export type GetRatedMoviesParams = {
   language: string;
   page: number;
   session_id: string;
   sort_by: SORT;
};

type RatedMovie = {
   adult: boolean;
   backdrop_path: string;
   genre_ids: number[];
   id: number;
   original_language: string;
   original_title: string;
   overview: string;
   popularity: number;
   poster_path: string;
   release_date: string;
   title: string;
   video: boolean;
   vote_average: number;
   vote_count: number;
   rating: number;
};

export type GetRatedMoviesReturn = {
   page: number;
   results: RatedMovie[];
   total_pages: number;
   total_results: number;
};

export type AddMovieRatingParams = {
   session_id: string;
};

export type AddMovieRatingBody = {
   value: number;
};

export type AddMovieRatigReturn = {
   status_code: number;
   status_message: string;
};
