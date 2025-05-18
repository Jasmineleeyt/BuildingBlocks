import { useState } from 'react'
import reactLogo from './assets/react.svg'
//import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from '@apollo/client';
import { Routes, Route, Outlet } from 'react-router-dom';
import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/home';

// const httpLink = createHttpLink({
//  uri: '/graphql',
// });

function App() {
  return (
    <Home />
  )
}

export default App
