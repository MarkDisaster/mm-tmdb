// TODO: Upravit pro svoje potreby.
// Kdyz prijdu na stranku, overit zda je ulozeny expiration time v local storage,
// porovnat ho s aktualnim casem a podle toho set boolean isUserLoggedIn
// + tohle nechat - If location is not changed, auth user after certain interval

import { AUTH_USER_INTERVAL } from './constants';
import { useCallback, useEffect } from 'react';
import { getIsAuthorizationTokenExpired } from '../../helpers/getIsAuthorizationTokenExpired';
import LocalStorageService from '../storage-service';
import { LOCAL_STORAGE } from '../storage-service/interfaces';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { AuthorizationServiceProps } from './interfaces';

const AuthorizationService = ({ children }: AuthorizationServiceProps) => {
   const tokenExpirationTime = LOCAL_STORAGE.TOKEN_EXPIRATION_TIME ?? null;

   const isUserLoggedIn = useSelector(
      (state: RootState) => state.authentication,
   );

   const handleOnAuthUser2 = useCallback(() => {
      const isTokenExpired = getIsAuthorizationTokenExpired(
         LocalStorageService.getItem(tokenExpirationTime),
      );
      if (isTokenExpired) {
         //odhlasit uzivatele
      }
   }, [tokenExpirationTime]);

   useEffect(() => {
      if (isUserLoggedIn) {
         handleOnAuthUser2();
         const interval = setInterval(() => {
            handleOnAuthUser2();
         }, AUTH_USER_INTERVAL);
         return () => clearInterval(interval);
      } else {
         console.log('ahoj svete');
      }
   }, [isUserLoggedIn, handleOnAuthUser2]);

   return <>{children}</>;
};

export default AuthorizationService;
