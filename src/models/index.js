// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Conversation, Line } = initSchema(schema);

export {
  Conversation,
  Line
};