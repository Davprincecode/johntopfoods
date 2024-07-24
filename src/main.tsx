import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { GoogleOAuthProvider } from '@react-oauth/google';


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
    <GoogleOAuthProvider clientId="197991698926-699l8j7jhbci2kmj7bl3s2fjup0j7m4m.apps.googleusercontent.com">
      <App />
    </GoogleOAuthProvider>
      </BrowserRouter>
  </React.StrictMode>,
)
