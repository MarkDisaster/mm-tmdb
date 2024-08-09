import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import './index.css';
import '@coreui/coreui/dist/css/coreui.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export const queryClient = new QueryClient({
   defaultOptions: {
      queries: {
         retry: 0,
         staleTime: 10000,
         refetchOnMount: false,
         refetchOnWindowFocus: false,
      },
   },
});

ReactDOM.createRoot(document.getElementById('root')!).render(
   <React.StrictMode>
      <QueryClientProvider client={queryClient}>
         <App />
      </QueryClientProvider>
   </React.StrictMode>,
);
