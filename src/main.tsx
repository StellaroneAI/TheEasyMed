import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { LanguageProvider } from './contexts/LanguageContext'
import { AdminProvider } from './contexts/AdminContext'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <LanguageProvider>
      <AdminProvider>
        <App />
      </AdminProvider>
    </LanguageProvider>
  </React.StrictMode>
)
