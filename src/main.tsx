import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { createBrowserRouter } from 'react-router-dom'
import LayoutMain from './components/Layouts/LayoutMain.tsx'
import Home from './pages/Home.tsx'
import Cart from './pages/Cart.tsx'



const router = createBrowserRouter([
  {
    path: '/',
    element: <LayoutMain/>,
    children: [
      { index: true, element: <Home/>},
      { path: '/cart', element: <Cart/>}
    ]
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  {/*   <RouterProvider router={router} /> */}
  </StrictMode>,
)
