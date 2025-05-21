import { useState } from 'react'
import reactLogo from './assets/react.svg'
//import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from '@apollo/client';
import { Routes, Route, Outlet } from 'react-router-dom';
import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/home';
import LoginPage from './pages/login'

// const httpLink = createHttpLink({
//  uri: '/graphql',
// });

function App() {
  return (
    <div>
      <LoginPage />
    </div>
  )
}

export default App
