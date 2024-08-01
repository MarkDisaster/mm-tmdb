import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { CContainer, CRow } from '@coreui/react';

import AuthenticationService from '../../services/authentication-service';

import AccountService from '../../services/account-service';
import { MEDIA_TYPE } from '../../services/account-service/types';
import { setLoggedIn } from '../../store/slices/authentication/slice';
import LocalStorageService from '../../services/storage-service';

import { LOCAL_STORAGE } from '../../services/storage-service/interfaces';

const LoginPage = () => {
   const dispatch = useDispatch();
   const [loginValues, setLoginValues] = useState({
      username: '',
      password: '',
   });

   const sessionId = LocalStorageService.getItem(LOCAL_STORAGE.SESSION_ID);

   const handleUserLogIn = () => {
      dispatch(setLoggedIn());
   };

   const handleLogIn = () => {
      AuthenticationService.getRequestToken().then((res) => {
         if (res.request_token.length > 0 && loginValues.username.length > 0) {
            const authenticationParams = {
               ...loginValues,
               request_token: res.request_token,
            };
            AuthenticationService.getValidateWithLogin(
               authenticationParams,
            ).then((res) => {
               LocalStorageService.setItem(
                  LOCAL_STORAGE.TOKEN_EXPIRATION_TIME,
                  res.expires_at,
               );

               AuthenticationService.getSessionId(res.request_token).then(
                  (res) => {
                     LocalStorageService.setItem(
                        LOCAL_STORAGE.SESSION_ID,
                        res.session_id,
                     );

                     handleUserLogIn();
                     AccountService.getUserInfo(res.session_id).then((res) => {
                        console.log('AccountRes', res);
                     });
                  },
               );
            });
         }
      });
   };

   const handleAddMovieToFavorites = () => {
      const addMovieToFavoritesParams = {
         media_id: 121,
         media_type: MEDIA_TYPE.MOVIE,
         favorite: false,
      };

      AccountService.addRemoveMovieFavorites(
         addMovieToFavoritesParams,
         sessionId,
      );
   };

   return (
      <CContainer fluid>
         <CRow className="">
            <div>
               <input
                  type="text"
                  onChange={(e) =>
                     setLoginValues({
                        ...loginValues,
                        username: e.target.value,
                     })
                  }
               />
               <input
                  type="password"
                  onChange={(e) =>
                     setLoginValues({
                        ...loginValues,
                        password: e.target.value,
                     })
                  }
               />
               <button onClick={handleLogIn}>LOG IN</button>
            </div>
            <div>
               <button onClick={handleAddMovieToFavorites}>PŘIDEJ MOVIE</button>
            </div>
         </CRow>
      </CContainer>
   );
};

export default LoginPage;
