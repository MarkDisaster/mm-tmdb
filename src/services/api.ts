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

   // General request method
   private async request<TResponse>(
      method: 'GET' | 'POST',
      url: string,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      body?: any,
      queryParams?: Record<string, string | number | boolean>,
      options?: RequestInit,
   ): Promise<TResponse> {
      const requestURL = this.constructUrlWithParams(
         `${this.baseUrl}${url}`,
         queryParams,
      );

      const requestInit: RequestInit = {
         ...this.options,
         ...options,
         method,
         ...(body && { body: JSON.stringify(body) }),
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

   // Perform a GET request
   async get<TResponse>(
      url: string,
      queryParams?: Record<string, string | number | boolean>,
      options?: RequestInit,
   ): Promise<TResponse> {
      return this.request('GET', url, undefined, queryParams, options);
   }

   // Perform a POST request
   async post<TResponse>(
      url: string,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      body?: Record<any, any>,
      queryParams?: Record<string, string | number | boolean>,
      options?: RequestInit,
   ): Promise<TResponse> {
      return this.request('POST', url, body, queryParams, options);
   }
}

// Export an instance of the ApiService for use in other modules
export default new ApiService(
   import.meta.env.VITE_API_AUTH_TOKEN,
   import.meta.env.VITE_BASE_URI,
);
