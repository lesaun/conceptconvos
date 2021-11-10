import { ApolloServer, gql } from "apollo-server-azure-functions";
import mongoose from 'mongoose';

const connectionString = "mongodb://conceptconvos:QYqsspxT2IqAGxC7wI4w0Cq9jALIyrLwxLDsf7TsJIg7HEql6GigRMXuyq1IqL5Nq07dpSjMsctTKEw5qn8KvA==@conceptconvos.mongo.cosmos.azure.com:10255/?ssl=true&replicaSet=globaldb&retrywrites=false&maxIdleTimeMS=120000&appName=@conceptconvos@";
mongoose.connect(connectionString, { useNewUrlParser: true, useCreateIndex: true });       

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
