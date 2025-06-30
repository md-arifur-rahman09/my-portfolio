import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router'
import HomeLayout from './Layouts/HomeLayout'
import Home from './Pages/Home/Home'
import About from './Pages/About/About'
import Contact from './Pages/Contact/Contact'
import Error404 from './Pages/Errors/Error404'
import Projects from './Pages/Home/Projects/Projects'
import FloraNest from './Pages/Home/Projects/FloraNest'
import AthleticHub from './Pages/Home/Projects/AthleticHub'
import TheEPLHub from './Pages/Home/Projects/TheEPLHub'





const router = createBrowserRouter([
  {
    path: '/',
    Component: HomeLayout,
    children: [
      {
        index: true,
        Component: Home
      },
      {
        path:'about',
        Component:About
      },
      {
        path:'contact',
        Component:Contact
      },
      {
        path:'projects',
        Component: Projects
      },
      {
        path: '/projects/flora-nest',
        Component: FloraNest
      },
      {
        path:'/projects/athletic-hub',
        Component: AthleticHub
      },
      {
        path:'projects/the-epl-hub',
        Component:TheEPLHub
      }
     
     
    ]
  },
  {
    path:'*',
    Component: Error404
  }
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router}>
    </RouterProvider>
   
  </StrictMode>,
)
