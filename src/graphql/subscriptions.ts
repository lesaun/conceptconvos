/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onLineConversationCreate = /* GraphQL */ `
  subscription OnLineConversationCreate($conversationID: String!) {
    onLineConversationCreate(conversationID: $conversationID) {
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
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
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
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
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
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
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
          speaker
          createdAt
          liked
          conversationID
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
          speaker
          createdAt
          liked
          conversationID
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
          speaker
          createdAt
          liked
          conversationID
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
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
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
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
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
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
