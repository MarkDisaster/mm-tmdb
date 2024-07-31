import api from '../api';
import {
   AddRemoveMovieToFavoritesParams,
   AuthenticationTokenApiReturn,
} from './types';

const addMovieToFavorites = async (
   addMovieToFavoritesParams: AddRemoveMovieToFavoritesParams,
   sessionId: string,
) => {
   const res = await api.post<AuthenticationTokenApiReturn>(
      `account/account_id/favorite?session_id=${sessionId}`,
      addMovieToFavoritesParams,
   );

   return res;
};

const AccountService = {
   addMovieToFavorites,
};

export default AccountService;
