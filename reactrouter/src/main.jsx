import React from 'react'
import ReactDOM from 'react-dom/client'
import Footer from './components/Footer.jsx'
import Header from './components/Header.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './layout.jsx'
import About from './components/About.jsx'
import Contact from './components/Contact.jsx'
import Home from './components/Home.jsx'
import User from './components/User.jsx'
import Github from './components/Github.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
    children: [{
      path:"",
      element:<Home/>
    },{
      path:"about",
      element:<About/>
    },{
      path:"contact",
      element:<Contact/>
    },{
      path:"user/:userid",
      element:<User/>
    },{
      path:"github",
      element:<Github/>
    }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
<React.StrictMode>
  <RouterProvider router={router}/>
</React.StrictMode>  
)
