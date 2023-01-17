import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './Home'
import "./index.css"
import { Provider } from 'jotai'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider>
    <Home />
    </Provider>
  </React.StrictMode>,
)
