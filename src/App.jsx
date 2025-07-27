import { useState } from 'react'
import reactLogo from './assets/react.svg'
//import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from '@apollo/client';
import { Routes, Route, Outlet } from 'react-router-dom';
import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/Home';
import LoginPage from './pages/LoginPage'
import SignupPage from './pages/SignUpPage';
import DiscussionPage from './pages/DiscussionPage';
import Header from './components/Header/Header';

// const httpLink = createHttpLink({
//  uri: '/graphql',
// });

function App() {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  )
}

export default App
