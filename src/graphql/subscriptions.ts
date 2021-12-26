/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateConversation = /* GraphQL */ `
  subscription OnCreateConversation {
    onCreateConversation {
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
export const onUpdateConversation = /* GraphQL */ `
  subscription OnUpdateConversation {
    onUpdateConversation {
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
export const onDeleteConversation = /* GraphQL */ `
  subscription OnDeleteConversation {
    onDeleteConversation {
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
export const onCreateLine = /* GraphQL */ `
  subscription OnCreateLine {
    onCreateLine {
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
export const onUpdateLine = /* GraphQL */ `
  subscription OnUpdateLine {
    onUpdateLine {
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
export const onDeleteLine = /* GraphQL */ `
  subscription OnDeleteLine {
    onDeleteLine {
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
export const onLineConversationCreate = /* GraphQL */ `
  subscription OnLineConversationCreate($conversationID: String!) {
    onLineConversationCreate(conversationID: $conversationID) {
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
export const onLineConversationUpdate = /* GraphQL */ `
  subscription OnLineConversationUpdate($conversationID: String!) {
    onLineConversationUpdate(conversationID: $conversationID) {
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
export const onLineConversationDelete = /* GraphQL */ `
  subscription OnLineConversationDelete($conversationID: String!) {
    onLineConversationDelete(conversationID: $conversationID) {
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
