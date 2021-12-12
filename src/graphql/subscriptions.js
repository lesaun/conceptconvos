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
