import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import '../assets/style/index.css';
import { router } from '../router/index.jsx';
import { RouterProvider } from 'react-router-dom'; 
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import init from '../config/_config.js';

const queryClient = new QueryClient();

init();

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </StrictMode>
);

