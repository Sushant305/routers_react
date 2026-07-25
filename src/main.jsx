import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import "@fortawesome/fontawesome-free/css/all.min.css";
import {RouterProvider,createBrowserRouter} from 'react-router-dom'

import Layout from './HOC/Layout.jsx';

import {Home , Feature, Reviews, Login} from './components/index.jsx'



const router = createBrowserRouter([
  {
    path:'/',
    element:<Layout/>,
    children:[
      {
        path:"",
        element:<Home/>  
      },
      {
        path:"feature",
        element:<Feature/> 
      },
      {
        path:"reviews",
        element:<Reviews/>
      },
      {
        path:"login",
        element:<Login/>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
