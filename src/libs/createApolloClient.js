import { split } from 'apollo-link'
import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { setContext } from 'apollo-link-context'
import { WebSocketLink } from 'apollo-link-ws'
import { getMainDefinition } from 'apollo-utilities'

export default () => {
  const authLink = setContext((_, { headers }) => {
    // get the authentication token from local storage if it exists
    const token = localStorage.getItem('token')
    // return the headers to the context so httpLink can read them
    return {
      headers: {
        ...headers,
        authorization: token || ''
      }
    }
  })

  const httpLink = new HttpLink({ uri: 'http://localhost:3000/graphql' })

  // Create a WebSocket link:
  const wsLink = new WebSocketLink({
    uri: `ws://localhost:3000/subscriptions`,
    options: {
      reconnect: true
    }
  })

  const link = split(
    // split based on operation type
    ({ query }) => {
      const { kind, operation } = getMainDefinition(query)
      return kind === 'OperationDefinition' && operation === 'subscription'
    },
    wsLink,
    authLink.concat(httpLink)
  )

  const client = new ApolloClient({
    link,
    cache: new InMemoryCache()
  })

  return client
}
