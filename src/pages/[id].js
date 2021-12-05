import React, { useState } from "react";
import Head from "next/head";

import { withSSRContext } from "aws-amplify";
import { getConversation } from "src/graphql/queries";
import { listConversationsOnlyIdTitle } from "src/graphql/queries-custom";

import produce from "immer";
import ConversationList from "src/components/converse/ConversationList";
import ChatWindow from "src/components/converse/ChatWindow";
import ChatActions from "src/components/converse/ChatActions";
import * as subscriptions from "src/graphql/subscriptions";
import { API } from "aws-amplify";

import styles from "src/styles/Converse.module.css";

export async function getServerSideProps({ req, params }) {
  const SSR = withSSRContext({ req });

  let conversation = null;
  let conversationList;

  if (params !== undefined) {
    try {
      conversation = await SSR.API.graphql({
        query: getConversation,
        authMode: "AMAZON_COGNITO_USER_POOLS",
        variables: { id: params.id },
      });
      conversation = conversation.data.getConversation;
    } catch (e) {}
  }

  try {
    conversationList = await SSR.API.graphql({
      query: listConversationsOnlyIdTitle,
      authMode: "AMAZON_COGNITO_USER_POOLS",
    });
    conversationList = conversationList.data.listConversations.items;
  } catch (e) {
    conversationList = [];
  }

  return {
    props: {
      conversation,
      conversationList,
    },
  };
}

const reducer = (state, action) => {
  switch (action.type) {
    case "create": {
      return produce(state, (draft) => {
        draft.lines.items.push(action.payload);
      });
    }
    case "update": {
      const lineIndex = state.lines.items.findIndex(
        (line) => line.id === action.payload.id
      );
      if (lineIndex === -1) return state;
      return produce(state, (draft) => {
        draft.lines.items[lineIndex] = { ...action.payload };
      });
    }
    case "delete": {
      const lineIndex = state.lines.items.findIndex(
        (line) => line.id === action.payload.id
      );
      if (lineIndex === -1) return state;
      return produce(state, (draft) => {
        draft.lines.items.splice(lineIndex, 1);
      });
    }
    default: {
      throw new Error(`Unsupported action ${JSON.stringify(action)}`);
    }
  }
};

export default function Converse({ conversation, conversationList }) {
  const [conversationState, dispatch] = React.useReducer(reducer, conversation);

  React.useEffect(() => {
    const onLineConversationCreateListener = API.graphql({
      query: subscriptions.onLineConversationCreate,
      variables: { conversationID: conversation.id },
    });
    const onLineConversationUpdateListener = API.graphql({
      query: subscriptions.onLineConversationUpdate,
      variables: { conversationID: conversation.id },
    });
    const onLineConversationDeleteListener = API.graphql({
      query: subscriptions.onLineConversationDelete,
      variables: { conversationID: conversation.id },
    });

    const onLineConversationCreate = onLineConversationCreateListener.subscribe(
      (v) => {
        dispatch({
          type: "create",
          payload: v.value.data.onLineConversationCreate,
        });
      }
    );
    const onLineConversationUpdate = onLineConversationUpdateListener.subscribe(
      (v) => {
        dispatch({
          type: "update",
          payload: v.value.data.onLineConversationUpdate,
        });
      }
    );
    const onLineConversationDelete = onLineConversationDeleteListener.subscribe(
      (v) => {
        dispatch({
          type: "delete",
          payload: v.value.data.onLineConversationDelete,
        });
      }
    );

    return () => {
      onLineConversationCreate.unsubscribe();
      onLineConversationUpdate.unsubscribe();
      onLineConversationDelete.unsubscribe();
    };
  }, [conversation.id]);

  const [activeSpeaker, setActiveSpeaker] = useState(
    conversation.defaultUserSpeaker
  );

  return (
    <div className={styles.container}>
      <Head>
        <title>conceptconvos</title>
        <meta name="description" content="Conversations with concepts." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <ConversationList
          conversations={conversationList}
          selectedConversationId={conversation.id}
        />
        <div className={styles.chat}>
          <ChatWindow
            activeSpeaker={activeSpeaker}
            conversationLines={conversationState.lines.items}
          />
          <ChatActions
            conversation={conversation}
            activeSpeaker={activeSpeaker}
            setActiveSpeaker={setActiveSpeaker}
          />
        </div>
      </main>
    </div>
  );
}
