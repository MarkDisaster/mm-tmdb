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
