import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainLayOut from './Pages/Mainlayout';
import ErrorPage from './Pages/Eror';
import Home from './Pages/Home';
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayOut></MainLayOut>,
    errorElement : <ErrorPage></ErrorPage>,
    children :[
      {
        path : '/',
        element:<Home></Home>,
        loader : ()=>fetch('../books.json'),
      }
    ]
  },
]);




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />

  </React.StrictMode>,
)
