import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'

const createApolloClient = () => {
  const link = new HttpLink({ uri: 'http://localhost:3000/graphql' })
  const cache = new InMemoryCache()
  const client = new ApolloClient({
    link,
    cache,
  })
  return client
}

export default createApolloClient
