import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useDispatch } from 'react-redux';
import {
   CButton,
   CModal,
   CModalBody,
   CModalFooter,
   CModalHeader,
   CModalTitle,
   CFormInput,
   CForm,
   CContainer,
} from '@coreui/react';

import AuthenticationService from '../../services/authentication-service';
import AccountService from '../../services/account-service';
import { setLoggedIn } from '../../store/slices/authentication/slice';
import LocalStorageService from '../../services/storage-service';
import { LOCAL_STORAGE } from '../../services/storage-service/interfaces';
import { setUserInfo } from '../../store/slices/userInfo/slice';
import { GetUserInfoApiReturn } from '../../services/account-service/types';
import { LoginModalProps } from './interfaces';
import { schema } from './validation';

import styles from './style.module.css';

const LoginModal = ({ isModalVisible, setIsModalVisible }: LoginModalProps) => {
   const dispatch = useDispatch();

   const {
      control,
      handleSubmit,
      formState: { errors },
   } = useForm({
      resolver: zodResolver(schema),
      defaultValues: {
         username: '',
         password: '',
      },
   });

   const handleUserLogIn = () => {
      dispatch(setLoggedIn());
   };

   const handleSetUserInfo = (userInfo: GetUserInfoApiReturn) => {
      dispatch(setUserInfo(userInfo));
   };

   const handleLogIn = (data: { username: string; password: string }) => {
      AuthenticationService.getRequestToken().then((res) => {
         if (res.request_token.length > 0 && data.username.length > 0) {
            const authenticationParams = {
               ...data,
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
      <CModal
         visible={isModalVisible}
         onClose={() => setIsModalVisible(false)}
         aria-labelledby="LiveDemoExampleLabel"
         className={styles.loginFormModal}
      >
         <CModalHeader>
            <CModalTitle id="LiveDemoExampleLabel">Přihlášení</CModalTitle>
         </CModalHeader>
         <CModalBody>
            <p className={styles.loginFormInfoText}>
               Pokud máte registraci na webu www.themoviedb.org,
               <br />
               můžete se přihlásit pod svými údaji.
            </p>
            <CForm onSubmit={handleSubmit(handleLogIn)}>
               <CContainer className={styles.loginFormContainer}>
                  <Controller
                     name="username"
                     control={control}
                     render={({ field }) => (
                        <div>
                           <CFormInput
                              {...field}
                              placeholder="Přihlašovací jméno"
                              label="Přihlašovací jméno"
                           />
                           {errors.username && (
                              <p className="text-danger">
                                 {errors.username.message}
                              </p>
                           )}
                        </div>
                     )}
                  />
                  <Controller
                     name="password"
                     control={control}
                     render={({ field }) => (
                        <div>
                           <CFormInput
                              {...field}
                              type="password"
                              placeholder="Heslo"
                              label="Heslo"
                           />
                           {errors.password && (
                              <p className="text-danger">
                                 {errors.password.message}
                              </p>
                           )}
                        </div>
                     )}
                  />
               </CContainer>

               <p className={styles.loginFormLoginInfo}>
                  Přihlašovací jméno: <b>marek.media</b>
                  <br />
                  Heslo: <b>marek.media</b>
               </p>

               <CModalFooter>
                  <CButton
                     color="secondary"
                     onClick={() => setIsModalVisible(false)}
                  >
                     Zavřít
                  </CButton>
                  <CButton
                     color="primary"
                     type="submit"
                  >
                     Přihlásit
                  </CButton>
               </CModalFooter>
            </CForm>
         </CModalBody>
      </CModal>
   );
};

export default LoginModal;
