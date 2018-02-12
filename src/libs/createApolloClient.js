import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { setContext } from 'apollo-link-context'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { WebSocketLink } from 'apollo-link-ws'
import { split } from 'apollo-link'
import { getMainDefinition } from 'apollo-utilities';

const createApolloClient = store => {
  // 1. Authentication Link
  const authLink = setContext((_, { headers }) => {
    // get the authentication token from local storage if it exists
    const state = store.getState()
    // return the headers to the context so httpLink can read them
    const newHeaders = { ...headers }
    if (state.token) {
      newHeaders.authorization = state.token
    }
    return {
      headers: newHeaders
    }
  })

  // 2. Http Link
  const httpLink = new HttpLink({ uri: 'http://localhost:3001/graphql' })

  // Create a WebSocket link:
  const wsLink = new WebSocketLink({
    uri: `ws://localhost:3001/subscriptions`,
    options: {
      reconnect: true
    }
  })

  // using the ability to split links, you can send data to each link
  // depending on what kind of operation is being sent
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

export default createApolloClient
