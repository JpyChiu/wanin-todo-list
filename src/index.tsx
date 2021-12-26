import React from 'react'
import ReactDOM from 'react-dom'
import { ApolloProvider } from '@apollo/client'

import './index.css'
import App from './App'
import ApolloClient from './apollo/ApolloClient'

ReactDOM.render(
  <ApolloProvider client={ApolloClient}>
    <App />
  </ApolloProvider>,
  document.getElementById('root'),
)
