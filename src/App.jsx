import { useState } from 'react'
import reactLogo from './assets/react.svg'
//import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from '@apollo/client';
import { Routes, Route, Outlet } from 'react-router-dom';
import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/Home';
import LoginPage from './pages/LoginPage'

// const httpLink = createHttpLink({
//  uri: '/graphql',
// });

function App() {
  return (
    <div>
      <Home />
    </div>
  )
}

export default App
