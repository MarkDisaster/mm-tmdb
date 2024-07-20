export class ApiService {
   private baseUrl: string;
   private options: RequestInit;

   constructor(authToken: string, baseURL?: string, baseOptions?: RequestInit) {
      this.baseUrl = baseURL ?? '';
      this.options = {
         headers: {
            Authorization: `Bearer ${authToken}`,
            Accept: 'application/json',
            'Content-Type': 'application/json',
         },
         ...baseOptions,
      };
   }

   // Construct URL with query parameters
   private constructUrlWithParams(
      url: string,
      queryParams?: Record<string, string | number | boolean>,
   ): string {
      if (!queryParams) return url;
      const queryString = Object.entries(queryParams)
         .map(
            ([key, val]) =>
               `${encodeURIComponent(key)}=${encodeURIComponent(val)}`,
         )
         .join('&');
      return `${url}?${queryString}`;
   }

   // Perform a GET request
   async get<T>(
      url: string,
      queryParams?: Record<string, string | number | boolean>,
      options?: RequestInit,
   ): Promise<T> {
      const requestURL = this.constructUrlWithParams(
         `${this.baseUrl}${url}`,
         queryParams,
      );

      const requestInit: RequestInit = {
         ...this.options,
         ...options,
         method: 'GET',
      };

      try {
         const response = await fetch(requestURL, requestInit);
         if (!response.ok) {
            throw new Error(`Error: ${response.status} ${response.statusText}`);
         }

         return await response.json();
      } catch (error) {
         if (error instanceof Error) {
            throw new Error(`Network error: ${error.message}`);
         } else {
            throw new Error('An unknown error occurred');
         }
      }
   }
}

// Export an instance of the ApiService for use in other modules
export default new ApiService(
   import.meta.env.VITE_API_AUTH_TOKEN,
   import.meta.env.VITE_BASE_URI,
);
