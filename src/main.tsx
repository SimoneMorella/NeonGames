import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import Home from './pages/Home.tsx'
import Shop from './pages/Shop.tsx'
import Layout from './pages/Layout.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import loadSliderGames, { loadGamesList, LoadGameData } from './api/loaders.ts'
import './index.css'
import { GameProvider } from './context/ContextProvider.tsx'
import { ShopMain, GameList, GamePage } from './utils/lazyLoad.ts'
import Loading from './components/Loading.tsx'
import ErrorPage from './pages/ErrorPage.tsx'



const router = createBrowserRouter([
  { 
    path: "/",
    element: (
      <Layout>
        <Home />
      </Layout>
    ),
    errorElement: (
      <Layout>
        <ErrorPage/>
      </Layout>
      
  )
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
        element: 
        <Suspense fallback={Loading()}>
          <ShopMain />
        </Suspense>,
        loader: loadSliderGames,

      },
      {
        path: "/shop/gamelist/:list/",
        element:         
        <Suspense fallback={Loading()}>
          <GameList />
        </Suspense>,
        loader: loadGamesList,
      }
    ]
  },
  {
    path: "/shop/game/:id",
    element: (
      <Layout>
        <Suspense fallback={Loading()}>
          <GamePage />
        </Suspense>
      </Layout>
    ),
    loader: LoadGameData,
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <GameProvider>
      <RouterProvider router={router} />
    </GameProvider>
  </StrictMode>,
)
