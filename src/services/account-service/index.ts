import api from '../api';
import {
   AddRemoveMovieToFavoritesParams,
   AddRemoveMovieApiReturn,
   AddRemoveMovieToWatchlistParams,
   GetUserInfoApiReturn,
   GetFavoriteMovies,
   GetFavoriteMoviesApiReturn,
   GetRatedMoviesReturn,
   GetRatedMoviesParams,
   AddMovieRatingParams,
   AddMovieRatingBody,
   AddMovieRatigReturn,
} from './types';

const getUserInfo = async (sessionId: string) => {
   const res = await api.get<GetUserInfoApiReturn>(
      `account/account_id?session_id=${sessionId}`,
   );

   return res;
};

const addRemoveMovieFavorites = async (
   addMovieToFavoritesParams: AddRemoveMovieToFavoritesParams,
   sessionId: string,
) => {
   const res = await api.post<AddRemoveMovieApiReturn>(
      `account/account_id/favorite?session_id=${sessionId}`,
      addMovieToFavoritesParams,
   );

   return res;
};

const addRemoveMovieWatchlist = async (
   addMovieToFavoritesParams: AddRemoveMovieToWatchlistParams,
   sessionId: string,
) => {
   const res = await api.post<AddRemoveMovieApiReturn>(
      `account/account_id/watchlist?session_id=${sessionId}`,
      addMovieToFavoritesParams,
   );

   return res;
};

const getFavoriteMovies = async (
   addMovieToFavoritesParams: GetFavoriteMovies,
) => {
   const { session_id, language, page, sort_by } = addMovieToFavoritesParams;

   const res = await api.get<GetFavoriteMoviesApiReturn>(
      `account/account_id/favorite/movies?session_id=${session_id}&language=${language}&page=${page}&sort_by=${sort_by}`,
   );

   return res;
};

const getUserRatedMovies = async (
   getUserMoviesRatingsParams: GetRatedMoviesParams,
) => {
   const res = await api.get<GetRatedMoviesReturn>(
      `account/account_id/rated/movies`,
      getUserMoviesRatingsParams,
   );

   return res;
};

const addMovieRating = async (
   movieId: number,
   addMovieRatingParams: AddMovieRatingParams,
   addMovieRatingBody: AddMovieRatingBody,
) => {
   const res = await api.post<AddMovieRatigReturn>(
      `movie/${movieId}/rating`,
      addMovieRatingBody,
      addMovieRatingParams,
      undefined,
   );

   return res;
};

const AccountService = {
   getUserInfo,
   addRemoveMovieFavorites,
   getFavoriteMovies,
   addRemoveMovieWatchlist,
   getUserRatedMovies,
   addMovieRating,
};

export default AccountService;
