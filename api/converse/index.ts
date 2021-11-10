import { ApolloServer, gql } from "apollo-server-azure-functions";
import { Context, HttpRequest } from '@azure/functions';
import { connect } from "mongoose";

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

const apolloHandler = server.createHandler({
  cors: {
    origin: '*'
  },
});

const handler = async (context: Context, req: HttpRequest) => {
  return apolloHandler(context, req)
}

export default handler
