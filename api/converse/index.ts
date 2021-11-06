import { ApolloServer } from "apollo-server-azure-functions";
import mongoose from 'mongoose'

import schema from './schema'

let connectionString = "mongodb://conceptconvos:QYqsspxT2IqAGxC7wI4w0Cq9jALIyrLwxLDsf7TsJIg7HEql6GigRMXuyq1IqL5Nq07dpSjMsctTKEw5qn8KvA==@conceptconvos.mongo.cosmos.azure.com:10255/?ssl=true&replicaSet=globaldb&retrywrites=false&maxIdleTimeMS=120000&appName=@conceptconvos@";

(async () => {
    await mongoose.connect(connectionString)
})()

// @ts-ignore
const server = new ApolloServer({ schema, debug: true, playground: true});

export default server.createHandler({
  cors: {
    origin: '*'
  },
});