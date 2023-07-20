import { Resolvers } from './__generated__/resolvers-types'

export const resolvers: Resolvers = {
  Query: {
    hello: () => 'hello',
  },
  Mutation: {
    echo: (_, { text }) => {
      return text
    },
  },
}
