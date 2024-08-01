import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { CContainer, CRow } from '@coreui/react';

import AuthenticationService from '../../services/authentication-service';

import AccountService from '../../services/account-service';
import { setLoggedIn } from '../../store/slices/authentication/slice';
import LocalStorageService from '../../services/storage-service';

import { LOCAL_STORAGE } from '../../services/storage-service/interfaces';

const LoginPage = () => {
   const dispatch = useDispatch();
   const [loginValues, setLoginValues] = useState({
      username: '',
      password: '',
   });

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

   return (
      <CContainer fluid>
         <CRow>
            Pokud máte registraci na webu www.themoviedb.org, můžete si
            přihlásit pod svými údaji.
         </CRow>
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
         </CRow>
      </CContainer>
   );
};

export default LoginPage;
