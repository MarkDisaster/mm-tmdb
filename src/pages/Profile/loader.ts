import { queryClient } from '../../main';
import LocalStorageService from '../../services/StorageService';
import { LOCAL_STORAGE } from '../../services/StorageService/interfaces';
import { SORT } from '../../services/AccountService/types';
import AccountService from '../../services/AccountService';

export const profilePageLoader = async () => {
   const sessionId = LocalStorageService.getItem(LOCAL_STORAGE.SESSION_ID);

   const getFavoriteMoviesParams = {
      page: 1,
      language: 'en-US',
      session_id: sessionId,
      sort_by: SORT.ASC,
   };

   const data = await queryClient.fetchQuery({
      queryKey: ['getFavoriteMovies', sessionId],
      queryFn: () => AccountService.getFavoriteMovies(getFavoriteMoviesParams),
   });
   return data;
};
