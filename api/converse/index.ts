import { ApolloServer, gql } from "apollo-server-azure-functions";
import { Context, HttpRequest } from '@azure/functions';
import { connect } from "mongoose";

let connectionString = "mongodb://conceptconvos:QYqsspxT2IqAGxC7wI4w0Cq9jALIyrLwxLDsf7TsJIg7HEql6GigRMXuyq1IqL5Nq07dpSjMsctTKEw5qn8KvA==@conceptconvos.mongo.cosmos.azure.com:10255/?ssl=true&replicaSet=globaldb&retrywrites=false&maxIdleTimeMS=120000&appName=@conceptconvos@";
let db = null

const init = async () => {
  if(!db) {
    db = await connect(connectionString);
  }
};

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
  await init()
  return apolloHandler(context, req)
}

export default handler
