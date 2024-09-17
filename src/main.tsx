import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Home from './pages/Home.tsx'
import Shop from './pages/Shop.tsx'
import GameList from './pages/GameList.tsx'
import Layout from './pages/Layout.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import loadSliderGames, { loadGamesList } from './api/loaders.ts'
import './index.css'
import { GameProvider } from './context/ContextProvider.tsx'
import ShopMain from './pages/ShopMain.tsx'



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
    children: [
      {
        index: true,
        element: <ShopMain />,
        loader: loadSliderGames,

      },
      {
        path: "/shop/gamelist/:list/",
        element: <GameList />,
        loader: loadGamesList,
      }
    ]
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <GameProvider>
      <RouterProvider router={router} />
    </GameProvider>
  </StrictMode>,
)
