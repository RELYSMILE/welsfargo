import React, { useContext } from 'react'
import ReactDOM from 'react-dom/client'
import Routers from './RouterConfig/Routers.jsx'
import { ToastContainer } from 'react-toastify';
import { ContextProvider } from './Context/Context.jsx';
import './index.css'




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ToastContainer />
    <ContextProvider>
    <Routers />
    </ContextProvider>
  </React.StrictMode>,
)