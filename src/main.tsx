import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

import i18next from 'i18next'
import { initReactI18next } from 'react-i18next'
import es from "../i18n/Español/es.json"
import en from "../i18n/Ingles/en.json"
import Whatsapp from './sections/Whatsapp.tsx'

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  i18next.use(initReactI18next).init({
    lng: "es",
    interpolotion: {
      escapeValue: false,
    },
    resources: {
      es: {
        translation: es,
      },
      en: {
        translation: en,
      }
    }
  })

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
    <Whatsapp />
  </React.StrictMode>,
)
