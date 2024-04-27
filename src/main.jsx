import React from 'react'

import ReactDOM from 'react-dom/client';



import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './Routeses/Routers.jsx'
import AuthProvider from './AuthProvider.jsx/AuthProvider.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={router}>
 
    </RouterProvider>
    </AuthProvider>
 
  

      
 
  </React.StrictMode>,
)
