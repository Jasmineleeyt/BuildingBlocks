import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/LoginPage.jsx';
import Signup from './pages/SignUpPage.jsx';
import App from './App.jsx';
import './index.css';
import Discussions from './pages/DiscussionPage.jsx'

const router = createBrowserRouter([
  {
    path:'/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: 'login', // Route to the Login page
        element: <Login />,
      },
      {
        path: 'signup', // Route to the Sign Up page
        element: <Signup />,
      },
      {
        path: 'discussions', // Route to the Discussion page
        element: <Discussions />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)