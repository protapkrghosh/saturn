import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { router } from './Routes/Routes.jsx'
import { RouterProvider } from 'react-router-dom'
import WalletContextProvider from "./components/WalletContextProvider";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <WalletContextProvider>
      <RouterProvider router={router} />
    </WalletContextProvider>
  </React.StrictMode>,
)
