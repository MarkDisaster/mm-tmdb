// TODO: Upravit pro svoje potreby.
// Kdyz prijdu na stranku, overit zda je ulozeny expiration time v local storage,
// porovnat ho s aktualnim casem a podle toho set boolean isUserLoggedIn
// + tohle nechat - If location is not changed, auth user after certain interval

import { AUTH_USER_INTERVAL } from './constants';
import { useCallback, useEffect } from 'react';
import { getIsAuthorizationTokenExpired } from '../../helpers/getIsAuthorizationTokenExpired';
import LocalStorageService from '../storage-service';
import { LOCAL_STORAGE } from '../storage-service/interfaces';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { AuthorizationServiceProps } from './interfaces';
import {
   setLoggedIn,
   setLoggedOut,
} from '../../store/slices/authentication/slice';

const AuthorizationService = ({ children }: AuthorizationServiceProps) => {
   const dispatch = useDispatch();
   const tokenExpirationTime = LOCAL_STORAGE.TOKEN_EXPIRATION_TIME;
   const tokenExpiration = LocalStorageService.getItem(tokenExpirationTime);
   const sessionId = LocalStorageService.getItem(LOCAL_STORAGE.SESSION_ID);
   console.log('token', tokenExpiration);
   console.log(
      'LocalStorageService.getItem(tokenExpirationTime)',
      getIsAuthorizationTokenExpired(
         LocalStorageService.getItem(tokenExpirationTime),
      ),
   );

   const isUserLoggedIn = useSelector(
      (state: RootState) => state.authentication,
   );

   const isTokenExpired = getIsAuthorizationTokenExpired(tokenExpiration);

   const handleOnAuthUser = useCallback(() => {
      if (isTokenExpired) {
         dispatch(setLoggedOut());
      }
   }, [dispatch, isTokenExpired]);

   useEffect(() => {
      const handleUserLogIn = () => {
         dispatch(setLoggedIn());
      };
      if (!isUserLoggedIn && !isTokenExpired) {
         handleUserLogIn();
      }
      if (
         (isUserLoggedIn && isTokenExpired) ||
         !tokenExpiration ||
         !sessionId
      ) {
         handleOnAuthUser();
         const interval = setInterval(() => {
            handleOnAuthUser();
         }, AUTH_USER_INTERVAL);
         return () => clearInterval(interval);
      }
   }, [
      isUserLoggedIn,
      handleOnAuthUser,
      isTokenExpired,
      dispatch,
      tokenExpiration,
      sessionId,
   ]);

   return <>{children}</>;
};

export default AuthorizationService;
