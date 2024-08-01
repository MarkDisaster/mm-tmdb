import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { CContainer, CRow } from '@coreui/react';

import AuthenticationService from '../../services/authentication-service';

import AccountService from '../../services/account-service';
import {
   setLoggedIn,
   setLoggedOut,
} from '../../store/slices/authentication/slice';
import LocalStorageService from '../../services/storage-service';

import { LOCAL_STORAGE } from '../../services/storage-service/interfaces';

const ProfilePage = () => {
   const dispatch = useDispatch();
   const [loginValues, setLoginValues] = useState({
      username: '',
      password: '',
   });

   const sessionId = LocalStorageService.getItem(LOCAL_STORAGE.SESSION_ID);

   const handleUserLogIn = () => {
      dispatch(setLoggedIn());
   };

   const handleUserLogOut = () => {
      dispatch(setLoggedOut());
      LocalStorageService.removeItem(LOCAL_STORAGE.SESSION_ID);
      LocalStorageService.removeItem(LOCAL_STORAGE.TOKEN_EXPIRATION_TIME);
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
                     console.log(
                        'handleGetItem(',
                        LocalStorageService.getItem(
                           LOCAL_STORAGE.TOKEN_EXPIRATION_TIME,
                        ),
                     );

                     handleUserLogIn();
                     AccountService.getUserInfo(sessionId).then((res) => {
                        console.log('AccountRes', res);
                     });
                  },
               );
            });
         }
      });
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
               <button onClick={handleUserLogOut}>LOGOUT</button>
            </div>
         </CRow>
      </CContainer>
   );
};

export default ProfilePage;
