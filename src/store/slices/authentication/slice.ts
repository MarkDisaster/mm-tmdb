import { createSlice } from '@reduxjs/toolkit';
import LocalStorageService from '../../../services/storage-service';
import { LOCAL_STORAGE } from '../../../services/storage-service/interfaces';
import { getIsAuthorizationTokenExpired } from '../../../helpers/getIsAuthorizationTokenExpired';

const tokenExpirationTime = LocalStorageService.getItem(
   LOCAL_STORAGE.TOKEN_EXPIRATION_TIME,
);
const isTokenExpired = getIsAuthorizationTokenExpired(tokenExpirationTime);

export const initialState: boolean = !isTokenExpired;

const authenticationSlice = createSlice({
   name: 'authentication',
   initialState,
   reducers: {
      setLoggedIn: () => true,
      setLoggedOut: () => {
         LocalStorageService.clearStorage();
         return false;
      },
   },
});

export const { setLoggedIn, setLoggedOut } = authenticationSlice.actions;

export default authenticationSlice.reducer;
