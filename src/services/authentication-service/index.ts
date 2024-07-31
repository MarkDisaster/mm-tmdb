import api from '../api';
import {
   AuthenticationTokenApiReturn,
   GetSessionIdReturn,
   GetValidateWithLoginParams,
} from './types';

const getRequestToken = async () => {
   const res = await api.get<AuthenticationTokenApiReturn>(
      `authentication/token/new`,
   );

   return res;
};

const getValidateWithLogin = async (
   getValidateWithLoginParams: GetValidateWithLoginParams,
) => {
   const res = await api.post<AuthenticationTokenApiReturn>(
      `authentication/token/validate_with_login`,
      getValidateWithLoginParams,
   );

   return res;
};

const getSessionId = async (getSessionIdParam: string) => {
   const getSessionIdParams = { request_token: getSessionIdParam };
   const res = await api.get<GetSessionIdReturn>(
      `authentication/session/new`,
      getSessionIdParams,
   );

   return res;
};

const AuthenticationService = {
   getRequestToken,
   getValidateWithLogin,
   getSessionId,
};

export default AuthenticationService;
