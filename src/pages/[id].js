import React from "react";
import Head from "next/head";

import { withSSRContext } from "aws-amplify";
import { getConversation } from "src/graphql/queries";
import { listConversationsOnlyIdTitle } from "src/graphql/queries-custom";

import Conversation from "src/components/conversation/Conversation";
import styles from "src/styles/Conversation.module.css";

export async function getServerSideProps({ req, params }) {
  const SSR = withSSRContext({ req });

  try {
    await SSR.Auth.currentSession();
  } catch {
    return {
      redirect: {
        permanent: false,
        destination: "/login",
      },
    };
  }

  let conversation = null;
  let conversations;

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

  if (conversation === null) {
    return {
      redirect: {
        permanent: false,
        destination: "/",
      },
    };
  }

  try {
    conversations = await SSR.API.graphql({
      query: listConversationsOnlyIdTitle,
      authMode: "AMAZON_COGNITO_USER_POOLS",
    });
    conversations = conversations.data.listConversations.items;
  } catch (e) {
    conversations = [];
  }

  return {
    props: {
      speakers: conversation.speakers,
      conversationID: conversation.id,
      initialConversationLines: conversation.lines.items,
      initialSpeaker: conversation.defaultUserSpeaker,
      conversations,
    },
  };
}

export default function Converse({
  speakers,
  conversationID,
  initialConversationLines,
  initialSpeaker,
  conversations,
}) {
  return (
    <div className={styles.container}>
      <Head>
        <title>conceptconvos</title>
        <meta name="description" content="Conversations with concepts." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Conversation
          conversationID={conversationID}
          speakers={speakers}
          initialConversationLines={initialConversationLines}
          initialSpeaker={initialSpeaker}
          conversations={conversations}
        />
      </main>
    </div>
  );
}
