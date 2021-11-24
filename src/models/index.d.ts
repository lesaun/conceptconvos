import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type ConversationMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type LineMetaData = {
  readOnlyFields: 'updatedAt';
}

export declare class Conversation {
  readonly id: string;
  readonly title?: string;
  readonly speakers?: (string | null)[];
  readonly defaultUserSpeaker?: string;
  readonly tempature?: number;
  readonly lines?: (Line | null)[];
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Conversation, ConversationMetaData>);
  static copyOf(source: Conversation, mutator: (draft: MutableModel<Conversation, ConversationMetaData>) => MutableModel<Conversation, ConversationMetaData> | void): Conversation;
}

export declare class Line {
  readonly id: string;
  readonly text?: string;
  readonly temp?: string;
  readonly speaker?: string;
  readonly createdAt: string;
  readonly conversationID: string;
  readonly conversation?: Conversation;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Line, LineMetaData>);
  static copyOf(source: Line, mutator: (draft: MutableModel<Line, LineMetaData>) => MutableModel<Line, LineMetaData> | void): Line;
}