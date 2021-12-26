/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createConversation = /* GraphQL */ `
  mutation CreateConversation(
    $input: CreateConversationInput!
    $condition: ModelConversationConditionInput
  ) {
    createConversation(input: $input, condition: $condition) {
      id
      title
      speakers
      defaultUserSpeaker
      tempature
      lines {
        items {
          id
          text
          conversationLinesId
          speaker
          liked
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateConversation = /* GraphQL */ `
  mutation UpdateConversation(
    $input: UpdateConversationInput!
    $condition: ModelConversationConditionInput
  ) {
    updateConversation(input: $input, condition: $condition) {
      id
      title
      speakers
      defaultUserSpeaker
      tempature
      lines {
        items {
          id
          text
          conversationLinesId
          speaker
          liked
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteConversation = /* GraphQL */ `
  mutation DeleteConversation(
    $input: DeleteConversationInput!
    $condition: ModelConversationConditionInput
  ) {
    deleteConversation(input: $input, condition: $condition) {
      id
      title
      speakers
      defaultUserSpeaker
      tempature
      lines {
        items {
          id
          text
          conversationLinesId
          speaker
          liked
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const createLine = /* GraphQL */ `
  mutation CreateLine(
    $input: CreateLineInput!
    $condition: ModelLineConditionInput
  ) {
    createLine(input: $input, condition: $condition) {
      id
      text
      conversationLinesId
      speaker
      liked
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateLine = /* GraphQL */ `
  mutation UpdateLine(
    $input: UpdateLineInput!
    $condition: ModelLineConditionInput
  ) {
    updateLine(input: $input, condition: $condition) {
      id
      text
      conversationLinesId
      speaker
      liked
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteLine = /* GraphQL */ `
  mutation DeleteLine(
    $input: DeleteLineInput!
    $condition: ModelLineConditionInput
  ) {
    deleteLine(input: $input, condition: $condition) {
      id
      text
      conversationLinesId
      speaker
      liked
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const generateLineFromOpenAI = /* GraphQL */ `
  mutation GenerateLineFromOpenAI($conversationID: String, $speaker: String) {
    generateLineFromOpenAI(conversationID: $conversationID, speaker: $speaker) {
      id
      text
      conversationLinesId
      speaker
      liked
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
