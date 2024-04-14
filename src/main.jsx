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
import BookList from './Pages/BookList';
import ReadBooks from './Pages/ReadBooks';
import Wishlist from './Pages/Wishlist';
import Chart from './components/Chart';
import SignUp from './components/authentication/SignUp';
import SignIn from './components/authentication/SignIn';
const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayOut></MainLayOut>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('/books.json'),
      },
      {
        path:'/signUp',
        element:<SignUp></SignUp>

      },
      {
        path:'/signIn',
        element:<SignIn></SignIn>,

      },
      {
        path: '/upcoming',
        element: <NewBook></NewBook>,

      },
      
      
      {
        path: '/books/:bookId',
        element: <Details></Details>,
        loader: () => fetch('/books.json')

      },
      {
        path: '/writer',
        element: <BestWriter></BestWriter>,
      },
      
      
      {
        path: '/read',
        element: <Chart></Chart>,
        loader: () => fetch('/books.json'),

      },
      {
        path: '/listed',
        element: <BookList></BookList>,
        children: [
          {
            index:true,
            element: <ReadBooks></ReadBooks>,
            loader: () => fetch('/books.json'),
           


          },
          {
            path: 'wish',
            element : <Wishlist></Wishlist>,
            loader: () => fetch('./books.json'),

          }
          
          


        ]
      }


    ]
  },
]);




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />

  </React.StrictMode>,
)
