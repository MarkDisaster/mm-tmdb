export const getIsAuthorizationTokenExpired = (expiresAt: string): boolean => {
   // Convert to ISO format
   const expiresDate = expiresAt
      .replace(' ', 'T')
      .replace(' ', '')
      .replace('UTC', 'Z');
   const expiresDateISO = new Date(expiresDate);
   const now = new Date();

   return now > expiresDateISO;
};
