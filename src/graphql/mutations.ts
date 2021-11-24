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
          temp
          speaker
          createdAt
          conversationID
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
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
          temp
          speaker
          createdAt
          conversationID
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
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
          temp
          speaker
          createdAt
          conversationID
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
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
      temp
      speaker
      createdAt
      conversationID
      conversation {
        id
        title
        speakers
        defaultUserSpeaker
        tempature
        lines {
          nextToken
        }
        createdAt
        updatedAt
      }
      updatedAt
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
      temp
      speaker
      createdAt
      conversationID
      conversation {
        id
        title
        speakers
        defaultUserSpeaker
        tempature
        lines {
          nextToken
        }
        createdAt
        updatedAt
      }
      updatedAt
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
      temp
      speaker
      createdAt
      conversationID
      conversation {
        id
        title
        speakers
        defaultUserSpeaker
        tempature
        lines {
          nextToken
        }
        createdAt
        updatedAt
      }
      updatedAt
    }
  }
`;
