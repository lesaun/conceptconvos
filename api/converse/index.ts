import { ApolloServer, gql } from "apollo-server-azure-functions";
import schema from './schema'

// @ts-ignore
const server = new ApolloServer({ schema, resolvers, debug: true, playground: true});

export default server.createHandler({
  cors: {
    origin: '*'
  },
});