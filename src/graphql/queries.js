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
          speaker
          createdAt
          liked
          conversationID
          updatedAt
        }
        nextToken
      }
      generateLineFromOpenAI {
        id
        text
        speaker
        createdAt
        liked
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
        generateLineFromOpenAI {
          id
          text
          speaker
          createdAt
          liked
          conversationID
          updatedAt
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
      speaker
      createdAt
      liked
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
        generateLineFromOpenAI {
          id
          text
          speaker
          createdAt
          liked
          conversationID
          updatedAt
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
        speaker
        createdAt
        liked
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
