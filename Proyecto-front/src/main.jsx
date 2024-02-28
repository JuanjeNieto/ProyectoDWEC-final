import React from 'react'
import ReactDOM from 'react-dom/client'
import Login from './rutas/Login.jsx'
import Signup from './rutas/Signup.jsx'
import Dashboard from './rutas/Dashboard.jsx'
import ProtectedRoute from './rutas/ProtectedRoute.jsx'
import App from './App.jsx'
import './index.css' 
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AuthProvider } from './auth/AuthProvider.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />
  },
  {
    path: "/signup",
    element: <Signup />
  },
  {
    path: "/",
    element: < ProtectedRoute />,
    children: [
      {
      path: "/dashboard",
      element: <Dashboard/>
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode> 
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  
    
  </React.StrictMode>,
)
