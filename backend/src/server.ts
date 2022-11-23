import { ApolloServer } from 'apollo-server'
import {
  ApolloServerPluginLandingPageGraphQLPlayground
} from 'apollo-server-core'
import { typeDefs } from './typeDefs'
import { resolvers } from './resolvers'

const server = new ApolloServer({
  typeDefs,
  resolvers,
  plugins: [ApolloServerPluginLandingPageGraphQLPlayground]
})

server.listen()
  .then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`)
  })
  .catch(err => {
    console.error('🚨 An error occurred while starting the server', err)
  })
