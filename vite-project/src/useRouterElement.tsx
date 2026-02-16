import { useRoutes } from 'react-router-dom'

import RegisterLayout from './layouts/ResgisterLayout'
import Login from './pages/Login'
import ProductList from './pages/ProductList'
import Register from './pages/Register'

export default function useRouterElement() {
  const routes = useRoutes([
    { path: '/', element: <ProductList /> },
    {
      path: '/login',
      element: (
        <RegisterLayout>
          <Login />
        </RegisterLayout>
      ),
    },
    {
      path: '/register',
      element: (
        <RegisterLayout>
          <Register />
        </RegisterLayout>
      ),
    },
  ])
  return routes
}
