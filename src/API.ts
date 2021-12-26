/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type Line = {
  __typename: "Line",
  id: string,
  text?: string | null,
  speaker?: string | null,
  createdAt: string,
  liked?: boolean | null,
  conversationID: string,
  conversation?: Conversation | null,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type Conversation = {
  __typename: "Conversation",
  id: string,
  title?: string | null,
  speakers?: Array< string | null > | null,
  defaultUserSpeaker?: string | null,
  tempature?: number | null,
  lines?: ModelLineConnection | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type ModelLineConnection = {
  __typename: "ModelLineConnection",
  items:  Array<Line | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type CreateConversationInput = {
  id?: string | null,
  title?: string | null,
  speakers?: Array< string | null > | null,
  defaultUserSpeaker?: string | null,
  tempature?: number | null,
  _version?: number | null,
};

export type ModelConversationConditionInput = {
  title?: ModelStringInput | null,
  speakers?: ModelStringInput | null,
  defaultUserSpeaker?: ModelStringInput | null,
  tempature?: ModelFloatInput | null,
  and?: Array< ModelConversationConditionInput | null > | null,
  or?: Array< ModelConversationConditionInput | null > | null,
  not?: ModelConversationConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelFloatInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type UpdateConversationInput = {
  id: string,
  title?: string | null,
  speakers?: Array< string | null > | null,
  defaultUserSpeaker?: string | null,
  tempature?: number | null,
  _version?: number | null,
};

export type DeleteConversationInput = {
  id: string,
  _version?: number | null,
};

export type CreateLineInput = {
  id?: string | null,
  text?: string | null,
  speaker?: string | null,
  createdAt?: string | null,
  liked?: boolean | null,
  conversationID: string,
  _version?: number | null,
};

export type ModelLineConditionInput = {
  text?: ModelStringInput | null,
  speaker?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  liked?: ModelBooleanInput | null,
  conversationID?: ModelIDInput | null,
  and?: Array< ModelLineConditionInput | null > | null,
  or?: Array< ModelLineConditionInput | null > | null,
  not?: ModelLineConditionInput | null,
};

export type ModelBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type UpdateLineInput = {
  id: string,
  text?: string | null,
  speaker?: string | null,
  createdAt?: string | null,
  liked?: boolean | null,
  conversationID?: string | null,
  _version?: number | null,
};

export type DeleteLineInput = {
  id: string,
  _version?: number | null,
};

export type ModelConversationFilterInput = {
  id?: ModelIDInput | null,
  title?: ModelStringInput | null,
  speakers?: ModelStringInput | null,
  defaultUserSpeaker?: ModelStringInput | null,
  tempature?: ModelFloatInput | null,
  and?: Array< ModelConversationFilterInput | null > | null,
  or?: Array< ModelConversationFilterInput | null > | null,
  not?: ModelConversationFilterInput | null,
};

export type ModelConversationConnection = {
  __typename: "ModelConversationConnection",
  items:  Array<Conversation | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelLineFilterInput = {
  id?: ModelIDInput | null,
  text?: ModelStringInput | null,
  speaker?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  liked?: ModelBooleanInput | null,
  conversationID?: ModelIDInput | null,
  and?: Array< ModelLineFilterInput | null > | null,
  or?: Array< ModelLineFilterInput | null > | null,
  not?: ModelLineFilterInput | null,
};

export type GenerateLineFromOpenAIMutationVariables = {
  conversationID?: string | null,
  speaker?: string | null,
};

export type GenerateLineFromOpenAIMutation = {
  generateLineFromOpenAI?:  {
    __typename: "Line",
    id: string,
    text?: string | null,
    speaker?: string | null,
    createdAt: string,
    liked?: boolean | null,
    conversationID: string,
    conversation?:  {
      __typename: "Conversation",
      id: string,
      title?: string | null,
      speakers?: Array< string | null > | null,
      defaultUserSpeaker?: string | null,
      tempature?: number | null,
      lines?:  {
        __typename: "ModelLineConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateConversationMutationVariables = {
  input: CreateConversationInput,
  condition?: ModelConversationConditionInput | null,
};

export type CreateConversationMutation = {
  createConversation?:  {
    __typename: "Conversation",
    id: string,
    title?: string | null,
    speakers?: Array< string | null > | null,
    defaultUserSpeaker?: string | null,
    tempature?: number | null,
    lines?:  {
      __typename: "ModelLineConnection",
      items:  Array< {
        __typename: "Line",
        id: string,
        text?: string | null,
        speaker?: string | null,
        createdAt: string,
        liked?: boolean | null,
        conversationID: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateConversationMutationVariables = {
  input: UpdateConversationInput,
  condition?: ModelConversationConditionInput | null,
};

export type UpdateConversationMutation = {
  updateConversation?:  {
    __typename: "Conversation",
    id: string,
    title?: string | null,
    speakers?: Array< string | null > | null,
    defaultUserSpeaker?: string | null,
    tempature?: number | null,
    lines?:  {
      __typename: "ModelLineConnection",
      items:  Array< {
        __typename: "Line",
        id: string,
        text?: string | null,
        speaker?: string | null,
        createdAt: string,
        liked?: boolean | null,
        conversationID: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteConversationMutationVariables = {
  input: DeleteConversationInput,
  condition?: ModelConversationConditionInput | null,
};

export type DeleteConversationMutation = {
  deleteConversation?:  {
    __typename: "Conversation",
    id: string,
    title?: string | null,
    speakers?: Array< string | null > | null,
    defaultUserSpeaker?: string | null,
    tempature?: number | null,
    lines?:  {
      __typename: "ModelLineConnection",
      items:  Array< {
        __typename: "Line",
        id: string,
        text?: string | null,
        speaker?: string | null,
        createdAt: string,
        liked?: boolean | null,
        conversationID: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateLineMutationVariables = {
  input: CreateLineInput,
  condition?: ModelLineConditionInput | null,
};

export type CreateLineMutation = {
  createLine?:  {
    __typename: "Line",
    id: string,
    text?: string | null,
    speaker?: string | null,
    createdAt: string,
    liked?: boolean | null,
    conversationID: string,
    conversation?:  {
      __typename: "Conversation",
      id: string,
      title?: string | null,
      speakers?: Array< string | null > | null,
      defaultUserSpeaker?: string | null,
      tempature?: number | null,
      lines?:  {
        __typename: "ModelLineConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateLineMutationVariables = {
  input: UpdateLineInput,
  condition?: ModelLineConditionInput | null,
};

export type UpdateLineMutation = {
  updateLine?:  {
    __typename: "Line",
    id: string,
    text?: string | null,
    speaker?: string | null,
    createdAt: string,
    liked?: boolean | null,
    conversationID: string,
    conversation?:  {
      __typename: "Conversation",
      id: string,
      title?: string | null,
      speakers?: Array< string | null > | null,
      defaultUserSpeaker?: string | null,
      tempature?: number | null,
      lines?:  {
        __typename: "ModelLineConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteLineMutationVariables = {
  input: DeleteLineInput,
  condition?: ModelLineConditionInput | null,
};

export type DeleteLineMutation = {
  deleteLine?:  {
    __typename: "Line",
    id: string,
    text?: string | null,
    speaker?: string | null,
    createdAt: string,
    liked?: boolean | null,
    conversationID: string,
    conversation?:  {
      __typename: "Conversation",
      id: string,
      title?: string | null,
      speakers?: Array< string | null > | null,
      defaultUserSpeaker?: string | null,
      tempature?: number | null,
      lines?:  {
        __typename: "ModelLineConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type GetConversationQueryVariables = {
  id: string,
};

export type GetConversationQuery = {
  getConversation?:  {
    __typename: "Conversation",
    id: string,
    title?: string | null,
    speakers?: Array< string | null > | null,
    defaultUserSpeaker?: string | null,
    tempature?: number | null,
    lines?:  {
      __typename: "ModelLineConnection",
      items:  Array< {
        __typename: "Line",
        id: string,
        text?: string | null,
        speaker?: string | null,
        createdAt: string,
        liked?: boolean | null,
        conversationID: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListConversationsQueryVariables = {
  filter?: ModelConversationFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListConversationsQuery = {
  listConversations?:  {
    __typename: "ModelConversationConnection",
    items:  Array< {
      __typename: "Conversation",
      id: string,
      title?: string | null,
      speakers?: Array< string | null > | null,
      defaultUserSpeaker?: string | null,
      tempature?: number | null,
      lines?:  {
        __typename: "ModelLineConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncConversationsQueryVariables = {
  filter?: ModelConversationFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncConversationsQuery = {
  syncConversations?:  {
    __typename: "ModelConversationConnection",
    items:  Array< {
      __typename: "Conversation",
      id: string,
      title?: string | null,
      speakers?: Array< string | null > | null,
      defaultUserSpeaker?: string | null,
      tempature?: number | null,
      lines?:  {
        __typename: "ModelLineConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetLineQueryVariables = {
  id: string,
};

export type GetLineQuery = {
  getLine?:  {
    __typename: "Line",
    id: string,
    text?: string | null,
    speaker?: string | null,
    createdAt: string,
    liked?: boolean | null,
    conversationID: string,
    conversation?:  {
      __typename: "Conversation",
      id: string,
      title?: string | null,
      speakers?: Array< string | null > | null,
      defaultUserSpeaker?: string | null,
      tempature?: number | null,
      lines?:  {
        __typename: "ModelLineConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListLinesQueryVariables = {
  filter?: ModelLineFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListLinesQuery = {
  listLines?:  {
    __typename: "ModelLineConnection",
    items:  Array< {
      __typename: "Line",
      id: string,
      text?: string | null,
      speaker?: string | null,
      createdAt: string,
      liked?: boolean | null,
      conversationID: string,
      conversation?:  {
        __typename: "Conversation",
        id: string,
        title?: string | null,
        speakers?: Array< string | null > | null,
        defaultUserSpeaker?: string | null,
        tempature?: number | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncLinesQueryVariables = {
  filter?: ModelLineFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncLinesQuery = {
  syncLines?:  {
    __typename: "ModelLineConnection",
    items:  Array< {
      __typename: "Line",
      id: string,
      text?: string | null,
      speaker?: string | null,
      createdAt: string,
      liked?: boolean | null,
      conversationID: string,
      conversation?:  {
        __typename: "Conversation",
        id: string,
        title?: string | null,
        speakers?: Array< string | null > | null,
        defaultUserSpeaker?: string | null,
        tempature?: number | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type OnLineConversationCreateSubscriptionVariables = {
  conversationID: string,
};

export type OnLineConversationCreateSubscription = {
  onLineConversationCreate?:  {
    __typename: "Line",
    id: string,
    text?: string | null,
    speaker?: string | null,
    createdAt: string,
    liked?: boolean | null,
    conversationID: string,
    conversation?:  {
      __typename: "Conversation",
      id: string,
      title?: string | null,
      speakers?: Array< string | null > | null,
      defaultUserSpeaker?: string | null,
      tempature?: number | null,
      lines?:  {
        __typename: "ModelLineConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnLineConversationUpdateSubscriptionVariables = {
  conversationID: string,
};

export type OnLineConversationUpdateSubscription = {
  onLineConversationUpdate?:  {
    __typename: "Line",
    id: string,
    text?: string | null,
    speaker?: string | null,
    createdAt: string,
    liked?: boolean | null,
    conversationID: string,
    conversation?:  {
      __typename: "Conversation",
      id: string,
      title?: string | null,
      speakers?: Array< string | null > | null,
      defaultUserSpeaker?: string | null,
      tempature?: number | null,
      lines?:  {
        __typename: "ModelLineConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnLineConversationDeleteSubscriptionVariables = {
  conversationID: string,
};

export type OnLineConversationDeleteSubscription = {
  onLineConversationDelete?:  {
    __typename: "Line",
    id: string,
    text?: string | null,
    speaker?: string | null,
    createdAt: string,
    liked?: boolean | null,
    conversationID: string,
    conversation?:  {
      __typename: "Conversation",
      id: string,
      title?: string | null,
      speakers?: Array< string | null > | null,
      defaultUserSpeaker?: string | null,
      tempature?: number | null,
      lines?:  {
        __typename: "ModelLineConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateConversationSubscription = {
  onCreateConversation?:  {
    __typename: "Conversation",
    id: string,
    title?: string | null,
    speakers?: Array< string | null > | null,
    defaultUserSpeaker?: string | null,
    tempature?: number | null,
    lines?:  {
      __typename: "ModelLineConnection",
      items:  Array< {
        __typename: "Line",
        id: string,
        text?: string | null,
        speaker?: string | null,
        createdAt: string,
        liked?: boolean | null,
        conversationID: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateConversationSubscription = {
  onUpdateConversation?:  {
    __typename: "Conversation",
    id: string,
    title?: string | null,
    speakers?: Array< string | null > | null,
    defaultUserSpeaker?: string | null,
    tempature?: number | null,
    lines?:  {
      __typename: "ModelLineConnection",
      items:  Array< {
        __typename: "Line",
        id: string,
        text?: string | null,
        speaker?: string | null,
        createdAt: string,
        liked?: boolean | null,
        conversationID: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteConversationSubscription = {
  onDeleteConversation?:  {
    __typename: "Conversation",
    id: string,
    title?: string | null,
    speakers?: Array< string | null > | null,
    defaultUserSpeaker?: string | null,
    tempature?: number | null,
    lines?:  {
      __typename: "ModelLineConnection",
      items:  Array< {
        __typename: "Line",
        id: string,
        text?: string | null,
        speaker?: string | null,
        createdAt: string,
        liked?: boolean | null,
        conversationID: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateLineSubscription = {
  onCreateLine?:  {
    __typename: "Line",
    id: string,
    text?: string | null,
    speaker?: string | null,
    createdAt: string,
    liked?: boolean | null,
    conversationID: string,
    conversation?:  {
      __typename: "Conversation",
      id: string,
      title?: string | null,
      speakers?: Array< string | null > | null,
      defaultUserSpeaker?: string | null,
      tempature?: number | null,
      lines?:  {
        __typename: "ModelLineConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateLineSubscription = {
  onUpdateLine?:  {
    __typename: "Line",
    id: string,
    text?: string | null,
    speaker?: string | null,
    createdAt: string,
    liked?: boolean | null,
    conversationID: string,
    conversation?:  {
      __typename: "Conversation",
      id: string,
      title?: string | null,
      speakers?: Array< string | null > | null,
      defaultUserSpeaker?: string | null,
      tempature?: number | null,
      lines?:  {
        __typename: "ModelLineConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteLineSubscription = {
  onDeleteLine?:  {
    __typename: "Line",
    id: string,
    text?: string | null,
    speaker?: string | null,
    createdAt: string,
    liked?: boolean | null,
    conversationID: string,
    conversation?:  {
      __typename: "Conversation",
      id: string,
      title?: string | null,
      speakers?: Array< string | null > | null,
      defaultUserSpeaker?: string | null,
      tempature?: number | null,
      lines?:  {
        __typename: "ModelLineConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};
