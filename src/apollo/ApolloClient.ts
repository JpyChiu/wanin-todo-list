import { ApolloClient, InMemoryCache } from '@apollo/client'
import { split, HttpLink } from '@apollo/client'
import { getMainDefinition } from '@apollo/client/utilities'
import { WebSocketLink } from '@apollo/client/link/ws'

const GRAPHQL_ENDPOINT = process.env.REACT_APP_API_ENDPOINT!
const SUBSCRIPTION_ENDPOINT = process.env.REACT_APP_WEB_SOCKET_ENDPOINT!
const ADMIN_SECRET = process.env.REACT_APP_ADMIN_SECRET!

const httpLink = new HttpLink({
  uri: GRAPHQL_ENDPOINT,
  headers: {
    'x-hasura-admin-secret': ADMIN_SECRET,
  },
})
const wsLink = new WebSocketLink({
  uri: SUBSCRIPTION_ENDPOINT,
  options: {
    reconnect: true,
    connectionParams: {
      headers: {
        'x-hasura-admin-secret': ADMIN_SECRET,
      },
    },
  },
})
const splitLink = split(
  ({ query }) => {
    const definition = getMainDefinition(query)
    return definition.kind === 'OperationDefinition' && definition.operation === 'subscription'
  },
  wsLink,
  httpLink,
)

export const client = new ApolloClient({
  link: splitLink,
  cache: new InMemoryCache(),
})

export default client
