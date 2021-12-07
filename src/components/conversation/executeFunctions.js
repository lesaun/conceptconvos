import { API, graphqlOperation } from "aws-amplify";
import * as mutations from "src/graphql/mutations";

export const executeCreateConversation = (title) => {
  API.graphql(
    graphqlOperation(mutations.createConversation, {
      input: {
        title,
        speakers: ["Inquisitor", title],
        defaultUserSpeaker: "Inquisitor",
        tempature: 0.9,
      },
    })
  );
};

export const executeCreateLine = (conversationID, speaker, text) => {
  API.graphql(
    graphqlOperation(mutations.createLine, {
      input: {
        conversationID,
        speaker,
        text,
      },
    })
  );
};

export const executeDeleteConversation = (conversationID) => {
  API.graphql(
    graphqlOperation(mutations.deleteConversation, {
      input: {
        id: conversationID
      },
    })
  );
};

export const executeDeleteLine = (lineId) => {
  API.graphql(
    graphqlOperation(mutations.deleteLine, {
      input: {
        id: lineId,
      },
    })
  );
};

export const executeUpdateLineLiked = (lineId, liked) => {
  API.graphql(
    graphqlOperation(mutations.updateLine, {
      input: {
        id: lineId,
        liked
      },
    })
  );
};

export const executeConversationGenerate = (conversationID) => {
  fetch(`/conversationGenerate/${conversationID}`);
};
