export type AuthenticationTokenApiReturn = {
   expires_at: string;
   request_token: string;
   success: boolean;
};

export enum MEDIA_TYPE {
   MOVIE = 'movie',
   SERIES = 'series',
}

export type AddRemoveMovieToFavoritesParams = {
   media_id: number;
   media_type: MEDIA_TYPE;
   favorite: boolean;
};
