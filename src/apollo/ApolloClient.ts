import { ApolloClient, InMemoryCache, gql, createHttpLink } from '@apollo/client'
import { setContext } from '@apollo/client/link/context'

const graphqlEndpoint = process.env.REACT_APP_API_ENDPOINT!
const adminSecret = process.env.REACT_APP_ADMIN_SECRET!

const httpLink = createHttpLink({
  uri: graphqlEndpoint,
})
const authLink = setContext((_, { headers }) => {
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      'x-hasura-admin-secret': adminSecret,
    },
  }
})

export const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
})

// for debug
client
  .query({
    query: gql`
      query GetTodoList {
        todo_list {
          id
          task
          assignee
        }
      }
    `,
  })
  .then(result => console.log(result))

export default client
