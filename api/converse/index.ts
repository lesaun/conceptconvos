import { ApolloServer, gql } from "apollo-server-azure-functions";
import * as mongoose from 'mongoose'

const connectionString = "mongodb://conceptconvos:QYqsspxT2IqAGxC7wI4w0Cq9jALIyrLwxLDsf7TsJIg7HEql6GigRMXuyq1IqL5Nq07dpSjMsctTKEw5qn8KvA==@conceptconvos.mongo.cosmos.azure.com:10255/?ssl=true&replicaSet=globaldb&retrywrites=false&maxIdleTimeMS=120000&appName=@conceptconvos@";

const ensureMongoose = () =>
  new Promise<mongoose.Connection>((resolve, reject) =>
    mongoose.connect(
      connectionString,
      err => {
        if (err) {
          reject(err)
        } else {
          resolve(mongoose.connection)
        }
      }
    )
  )

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
export default function graphQL() {
  const server = new ApolloServer({
    typeDefs, resolvers,
    introspection: true,
    playground: true,
  })

  const handler = server.createHandler()
  const mongoPromise = ensureMongoose()

  return function(context: any, req: any) {
    mongoPromise.then(() => handler(context, req))
  }
}