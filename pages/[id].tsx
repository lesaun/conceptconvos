import Head from "next/head";
import { GetServerSideProps } from "next";

import { withSSRContext } from "aws-amplify";

import { gql, useReactiveVar } from "@apollo/client";
import { activeConversationIdVar } from "src/apollo-cache";

import styles from "src/styles/Conversation.module.css";
import Conversation from "src/components/Conversation";
import { Conversation as ConversationType } from "src/API";
import { getConversation } from "src/graphql/queries";

export const listConversationsOnlyIdTitle = gql`
  query ListConversations {
    listConversations {
      items {
        id
        title
        createdAt
      }
      nextToken
    }
  }
`;

export const getServerSideProps: GetServerSideProps = async ({ req, params }) => {
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
      conversation,
      conversations,
    },
  };
}

type ConversationPageProps = {
  conversation: ConversationType;
  conversations: [ConversationType];
};

export default function ConversationPage({
  conversation,
  conversations,
}: ConversationPageProps) {
  const activeConversationId = useReactiveVar(activeConversationIdVar);

  if (conversation && conversation.id !== activeConversationId) {
    activeConversationIdVar(conversation.id);
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>conceptconvos</title>
        <meta name="description" content="Conversations with concepts." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Conversation conversation={conversation} conversations={conversations} />
    </div>
  );
}
