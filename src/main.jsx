import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { RouterProvider } from 'react-router-dom'
import Route from './Route/Route.jsx'
import {

  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import AuthProvider from './Route/AuthProvider'


// Create a client
const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={Route} />
      </QueryClientProvider>
   </AuthProvider>

  </React.StrictMode>,
)
