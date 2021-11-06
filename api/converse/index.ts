import { ApolloServer } from "apollo-server-azure-functions";
import mongoose from 'mongoose'

import schema from './schema'

let connectionString = process.env.COSMOS_CONNECTION_STRING;

(async () => {
    if (mongoose.connection.readyState === 1) return;

    // for dev use in-memory db
    if (!connectionString) {
        const { MongoMemoryServer } = require('mongodb-memory-server')
        connectionString = (await MongoMemoryServer.create()).getUri()
    }

    await mongoose.connect(connectionString)
})()

// @ts-ignore
const server = new ApolloServer({ schema, debug: true, playground: true});

export default server.createHandler({
  cors: {
    origin: '*'
  },
});