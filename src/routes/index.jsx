import { createBrowserRouter } from 'react-router-dom'
import App from '../App'
import Auth from '../components/Auth/Auth'
import Create from './Create'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path: '/auth',
    element: <Auth />
  },
  {
    path: '/create',
    element: <Create />
  }
])

export default router
