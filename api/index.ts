import { ApolloServer, gql } from 'apollo-server';
import { listMarvelCharacters } from './mappings/marvelCharacters';

const typeDefs = gql`

  type character {
    id: Int
    name: String
    description: String
  }

  type Query {
    characters: [character]
  }
`;

const resolvers = {
  Query: {
    characters: async () => await listMarvelCharacters(),
  },
};

// In the most basic sense, the ApolloServer can be started
// by passing type definitions (typeDefs) and the resolvers
// responsible for fetching the data for those types.
const server = new ApolloServer({ typeDefs, resolvers });

// This `listen` method launches a web-server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});