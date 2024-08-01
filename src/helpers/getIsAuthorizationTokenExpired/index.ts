export const getIsAuthorizationTokenExpired = (expiresAt: string): boolean => {
   // Convert to ISO format
   if (!expiresAt) return true;

   const expiresDate = expiresAt
      .replace(' ', 'T')
      .replace(' ', '')
      .replace('UTC', 'Z');
   const expiresDateISO = new Date(expiresDate);
   const now = new Date();
   console.log('expiresDateISO', expiresDateISO);
   console.log('now', now);

   return now > expiresDateISO;
};
