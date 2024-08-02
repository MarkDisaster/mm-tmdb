import { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
   CButton,
   CModal,
   CModalBody,
   CModalFooter,
   CModalHeader,
   CModalTitle,
} from '@coreui/react';

import AuthenticationService from '../../services/authentication-service';

import AccountService from '../../services/account-service';
import { setLoggedIn } from '../../store/slices/authentication/slice';
import LocalStorageService from '../../services/storage-service';

import { LOCAL_STORAGE } from '../../services/storage-service/interfaces';
import { setUserInfo } from '../../store/slices/userInfo/slice';
import { GetUserInfoApiReturn } from '../../services/account-service/types';
import { LoginModalProps } from './interfaces';

const LoginModal = ({ isModalVisible, setIsModalVisible }: LoginModalProps) => {
   const dispatch = useDispatch();
   const [loginValues, setLoginValues] = useState({
      username: '',
      password: '',
   });

   const handleUserLogIn = () => {
      dispatch(setLoggedIn());
   };

   const handleSetUserInfo = (userInfo: GetUserInfoApiReturn) => {
      dispatch(setUserInfo(userInfo));
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
                        LocalStorageService.setItem(
                           LOCAL_STORAGE.USER_INFO,
                           res,
                        );
                        handleSetUserInfo(res);
                     });

                     setIsModalVisible(false);
                  },
               );
            });
         }
      });
   };

   return (
      <>
         <CModal
            visible={isModalVisible}
            onClose={() => setIsModalVisible(false)}
            aria-labelledby="LiveDemoExampleLabel"
         >
            <CModalHeader>
               <CModalTitle id="LiveDemoExampleLabel">Přihlášení</CModalTitle>
            </CModalHeader>
            <CModalBody>
               <p className="fw-bold">
                  Pokud máte registraci na webu www.themoviedb.org,
                  <br /> můžete si přihlásit pod svými údaji.
               </p>
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
               </div>
            </CModalBody>
            <CModalFooter>
               <CButton
                  color="secondary"
                  onClick={() => setIsModalVisible(false)}
               >
                  Zavřít
               </CButton>
               <CButton
                  color="primary"
                  onClick={handleLogIn}
               >
                  Přihlásit
               </CButton>
            </CModalFooter>
         </CModal>
      </>
   );
};

export default LoginModal;
