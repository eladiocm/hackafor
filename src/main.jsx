import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

// Router config
import router from './routes'
import { RouterProvider } from 'react-router-dom'
import { IconoirProvider } from 'iconoir-react'

ReactDOM.createRoot(document.getElementById('root')).render(
  <IconoirProvider
    iconProps={{
      strokeWidth: 1,
      width: '1.5rem',
      height: '1.5rem' // 24px
    }}
  >
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </IconoirProvider>
)
