import React from 'react'
import ReactDOM from 'react-dom'
import { ApolloProvider } from '@apollo/client'

import './index.css'
import App from './App'
import apolloClient from './apolloClient'

ReactDOM.render(
  <ApolloProvider client={apolloClient}>
    <App />
  </ApolloProvider>,
  document.getElementById('root'),
)
