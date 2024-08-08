import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { GetUserInfoApiReturn } from '../../../services/AccountService/types';
import LocalStorageService from '../../../services/StorageService';
import { LOCAL_STORAGE } from '../../../services/StorageService/interfaces';

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
