import { createBrowserRouter } from 'react-router-dom'
import App from '../App'
import Auth from '../components/Auth/Auth'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path: '/auth',
    element: <Auth />
  }
])

export default router
