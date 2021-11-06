import mongoose from 'mongoose'
import { composeMongoose } from 'graphql-compose-mongoose'
import { schemaComposer } from 'graphql-compose'

const LineSchema = new mongoose.Schema({
  timestamp: Date,
  text: String,
  speaker: String,
})

const ConversationSchema = new mongoose.Schema({
  name: String,
  lines: {
    type: [LineSchema],
    default: [],
  },
})

const Line = mongoose.model('Line', LineSchema)
const Conversation = mongoose.model('Conversation', ConversationSchema)
const LineTC = composeMongoose(Line, {})
const ConversationTC = composeMongoose(Conversation, {})

schemaComposer.Query.addFields({
  conversationById: ConversationTC.mongooseResolvers.findById(),
  conversationByIds: ConversationTC.mongooseResolvers.findByIds(),
  conversationMany: ConversationTC.mongooseResolvers.findMany(),
  linesById: ConversationTC.mongooseResolvers.findById(),
  linesByIds: ConversationTC.mongooseResolvers.findByIds(),
});

schemaComposer.Mutation.addFields({
  conversationCreateOne: ConversationTC.mongooseResolvers.createOne(),
  conversationUpdateById: ConversationTC.mongooseResolvers.updateById(),
  conversationRemoveById: ConversationTC.mongooseResolvers.removeById(),
  linesCreateOne: LineTC.mongooseResolvers.createOne(),
});

const schema = schemaComposer.buildSchema();
export default schema;