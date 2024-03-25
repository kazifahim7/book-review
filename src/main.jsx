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
import Details from './Pages/Details';
import BestWriter from './components/BestWriter';
import NewBook from './components/Newbook';
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
      },
      {
        path: '/books/:bookId',
        element :<Details></Details>,
        loader : ()=>fetch('../books.json')
        
      },
      {
        path: '/writer',
        element : <BestWriter></BestWriter>,
      },
      {
        path: '/upcoming',
        element : <NewBook></NewBook>

      }


    ]
  },
]);




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />

  </React.StrictMode>,
)
