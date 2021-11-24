/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getConversation = /* GraphQL */ `
  query GetConversation($id: ID!) {
    getConversation(id: $id) {
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
export const listConversations = /* GraphQL */ `
  query ListConversations(
    $filter: ModelConversationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listConversations(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getLine = /* GraphQL */ `
  query GetLine($id: ID!) {
    getLine(id: $id) {
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
export const listLines = /* GraphQL */ `
  query ListLines(
    $filter: ModelLineFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listLines(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
          createdAt
          updatedAt
        }
        updatedAt
      }
      nextToken
    }
  }
`;
