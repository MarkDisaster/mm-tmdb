export type AuthenticationTokenApiReturn = {
   expires_at: string;
   request_token: string;
   success: boolean;
};

export type GetValidateWithLoginParams = {
   username: string;
   password: string;
};

export type GetSessionIdReturn = {
   session_id: string;
   success: boolean;
};
