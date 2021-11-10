// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Conversation, LineConversation, Line } = initSchema(schema);

export {
  Conversation,
  LineConversation,
  Line
};