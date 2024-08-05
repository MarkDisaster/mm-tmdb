import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { GetUserInfoApiReturn } from '../../../services/account-service/types';
import LocalStorageService from '../../../services/storage-service';
import { LOCAL_STORAGE } from '../../../services/storage-service/interfaces';

const favoriteMovies = LocalStorageService.getItem(LOCAL_STORAGE.USER_INFO);

export const initialState: GetUserInfoApiReturn = favoriteMovies?.username
   ? favoriteMovies
   : {
        avatar: '',
        id: '',
        iso_639_1: '',
        iso_3166_1: '',
        name: '',
        include_adult: '',
        username: '',
     };

const userInfoSlice = createSlice({
   name: 'userInfo',
   initialState,
   reducers: {
      setUserInfo: (state, action: PayloadAction<GetUserInfoApiReturn>) => {
         return { ...state, ...action.payload };
      },
   },
});

export const { setUserInfo } = userInfoSlice.actions;
export default userInfoSlice.reducer;
