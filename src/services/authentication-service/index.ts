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

//parameters {"session_id": "6b2e41942a65af61669665a20bbea4ffef98c580"}
const deleteSession = async (deleteSessionIdParam: string) => {
   const deleteSessionIdParams = { session_id: deleteSessionIdParam };
   const res = await api.delete<GetSessionIdReturn>(
      `authentication/session`,
      deleteSessionIdParams,
   );

   return res;
};

const AuthenticationService = {
   getRequestToken,
   getValidateWithLogin,
   getSessionId,
   deleteSession,
};

export default AuthenticationService;
