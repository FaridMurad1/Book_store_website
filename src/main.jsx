import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { HelmetProvider } from 'react-helmet-async';
import AuthProvider from './providers/AuthProvider.jsx';
import { RouterProvider } from 'react-router-dom';
import { router } from './Routes/Routes.jsx';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const queryClient = new QueryClient();


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
    <QueryClientProvider client={queryClient}>
      <HelmetProvider>
      <div className='max-w-screen-xl mx-auto'>
      {/* <div className='max-w-screen-xl'> */}
          <RouterProvider router={router}/>
        </div>
      </HelmetProvider>
      </QueryClientProvider>
    </AuthProvider>
  </StrictMode>,
)


