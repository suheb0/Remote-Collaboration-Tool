import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { GoogleOAuthProvider } from '@react-oauth/google'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import {Provider} from 'react-redux'
import { store } from './app/store.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
    <GoogleOAuthProvider clientId="500980884746-pmbtka925mio2j246jp81j60ihmd91il.apps.googleusercontent.com">
  <BrowserRouter>
  <App />
  </BrowserRouter>
    
    </GoogleOAuthProvider>
    </Provider>
  </StrictMode>,
)
