import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Friends from './components/Friends/Friends';
import FriendDetail from './components/FriendDetail/FriendDetail';
import Posts from './components/Posts/Posts';
import PostDetail from './components/PostDetail/PostDetail';

// const router = createBrowserRouter([
//   {
//     path: "/",
//     // element: <div>This is the main content</div>,
//     element: <App></App>
//   },
//   {
//     path:'/about',
//     // element: <div>This is the about page</div>
//     element: <About></About>
//   },
//   {
//     path:'/contact',
//     // element: <div/>This is the Home page</div>
//     element:<Contact></Contact>
//   },
// ]);

const router= createBrowserRouter([
  {
    path:'/',
    element:<Home></Home>,
    children:[
     {
      path: 'about',
      element:<About></About>
     },
     {
      path:'posts',
      element:<Posts></Posts>,
      loader: ()=> fetch('https://jsonplaceholder.typicode.com/posts')
     },
     {
      path:'post/:postId',
      element: <PostDetail></PostDetail>,
      loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`)
     },
     {
      path: 'contact',
      element:<Contact></Contact>,
     },
   
     {
      path: 'friends',
      element:<Friends></Friends>,
      loader: () => fetch('https://jsonplaceholder.typicode.com/users')
     },
     {
      path: 'friend/:friendId',
      element:<FriendDetail></FriendDetail>,
      loader:({params})=> fetch(`https://jsonplaceholder.typicode.com/users/${params.friendId}`)
     },
     {
      path: '*',
      element:<div>44444404444444</div>
     }

    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Header></Header> */}
     <RouterProvider router={router} />
  </React.StrictMode>,
)
