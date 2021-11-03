import { ApolloServer, gql } from "apollo-server-azure-functions";

const typeDefs = gql`
  type Query {
    hello: String
  }
`;

const resolvers = {
  Query: {
    hello: () => "Hello from our GraphQL backend!",
  },
};

// @ts-ignore
const server = new ApolloServer({ typeDefs, resolvers, debug: true, playground: true});

export default server.createHandler({
  cors: {
    origin: '*'
  },
});