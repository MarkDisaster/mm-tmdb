export const getIsAuthorizationTokenExpired = (expiresAt: string): boolean => {
   // Convert to ISO format
   if (!expiresAt) return true;

   const expiresDate = expiresAt
      .replace(' ', 'T')
      .replace(' ', '')
      .replace('UTC', 'Z');
   const expiresDateISO = new Date(expiresDate);
   const actualDate = new Date();

   return actualDate > expiresDateISO;
};
