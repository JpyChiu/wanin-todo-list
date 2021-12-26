import { ApolloClient, InMemoryCache, gql, createHttpLink } from '@apollo/client'
import { setContext } from '@apollo/client/link/context'

const graphqlEndpoint = 'http://35.189.161.175:8080/v1/graphql'
const adminSecret = 'myadminsecretkey'
const httpLink = createHttpLink({
  uri: graphqlEndpoint,
})
const authLink = setContext((_, { headers }) => {
  const token = adminSecret
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      'x-hasura-admin-secret': token,
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
