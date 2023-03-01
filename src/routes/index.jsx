import { createBrowserRouter } from 'react-router-dom'
import App from '../App'
import Auth from '../components/Auth/Auth'
import Create from './Create'
import Home from './Home'

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
  },
  {
    path: '/home',
    element: <Home />
  }
])

export default router
