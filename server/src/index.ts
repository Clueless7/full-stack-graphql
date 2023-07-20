import dotenv from 'dotenv'
dotenv.config()

import { ApolloServer } from '@apollo/server'
import { startStandaloneServer } from '@apollo/server/standalone'
import { readFileSync } from 'fs'
import { resolvers } from './graphql/resolvers.js'

const PORT = parseInt(process.env.PORT)

const typeDefs = readFileSync('./src/graphql/schema.graphql', 'utf8')
const server = new ApolloServer({
  typeDefs,
  resolvers,
})

const { url } = await startStandaloneServer(server, {
  listen: { port: PORT },
})

console.log(`🚀  Server ready at: ${url}`)
