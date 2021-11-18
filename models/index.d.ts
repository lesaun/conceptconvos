import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type ConversationMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type LineConversationMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type LineMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Conversation {
  readonly id: string;
  readonly lines?: (LineConversation | null)[];
  readonly title?: string;
  readonly speakers?: (string | null)[];
  readonly defaultUserSpeaker?: string;
  readonly tempature?: number;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Conversation, ConversationMetaData>);
  static copyOf(source: Conversation, mutator: (draft: MutableModel<Conversation, ConversationMetaData>) => MutableModel<Conversation, ConversationMetaData> | void): Conversation;
}

export declare class LineConversation {
  readonly id: string;
  readonly line: Line;
  readonly conversation: Conversation;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<LineConversation, LineConversationMetaData>);
  static copyOf(source: LineConversation, mutator: (draft: MutableModel<LineConversation, LineConversationMetaData>) => MutableModel<LineConversation, LineConversationMetaData> | void): LineConversation;
}

export declare class Line {
  readonly id: string;
  readonly conversations?: (LineConversation | null)[];
  readonly text?: string;
  readonly speaker?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Line, LineMetaData>);
  static copyOf(source: Line, mutator: (draft: MutableModel<Line, LineMetaData>) => MutableModel<Line, LineMetaData> | void): Line;
}