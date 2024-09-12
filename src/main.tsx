import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Home from './pages/Home.tsx'
import Shop, {loadAllGames} from './pages/Shop.tsx'
import GameList from './pages/GameList.tsx'
import Layout from './pages/Layout.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'



const router = createBrowserRouter([
  { 
    path: "/",
    element: (
      <Layout>
        <Home />
      </Layout>
    ),
  },
  {
    path: "/shop",
    element: (
      <Layout>
        <Shop />
      </Layout>
    ),
    loader: loadAllGames,
    children: [
      {
        path: "/shop/gamelist/:filter",
        element: <GameList />
      }
    ]
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
