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
export const onCreateLine = /* GraphQL */ `
  subscription OnCreateLine {
    onCreateLine {
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
export const onUpdateLine = /* GraphQL */ `
  subscription OnUpdateLine {
    onUpdateLine {
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
export const onDeleteLine = /* GraphQL */ `
  subscription OnDeleteLine {
    onDeleteLine {
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
