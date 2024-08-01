import api from '../api';
import {
   AddRemoveMovieToFavoritesParams,
   AddRemoveMovieApiReturn,
   AddRemoveMovieToWatchlistParams,
   GetUserInfoApiReturn,
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
   const res = await api.get<AddRemoveMovieApiReturn>(
      `account/account_id/watchlist?session_id=${sessionId}`,
      addMovieToFavoritesParams,
   );

   return res;
};

const AccountService = {
   getUserInfo,
   addRemoveMovieFavorites,
   addRemoveMovieWatchlist,
};

export default AccountService;
