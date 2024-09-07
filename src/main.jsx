import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import router from './router.jsx'
import { RouterProvider } from 'react-router-dom'
import { GameProvider } from './contexts/NumContext.jsx'
import { StateProvider } from './contexts/StateContext.jsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <StateProvider>
    <QueryClientProvider  client={queryClient} >
      <GameProvider>
        

        <RouterProvider router={router} />
        

      </GameProvider>
    </QueryClientProvider>
    </StateProvider>
  </React.StrictMode>,
)
