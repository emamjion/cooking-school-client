import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css';
import { RouterProvider } from "react-router-dom";
import router from './routes/routes.jsx';
import AuthProvider from './providers/AuthProvider.jsx';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    
    <div className='max-w-screen-xl mx-auto'>
      <AuthProvider>
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={router} />
        </QueryClientProvider>
      </AuthProvider>
    </div>

  </React.StrictMode>,
)
