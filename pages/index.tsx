import Head from "next/head";
import { GetServerSideProps } from "next";

import { withSSRContext } from "aws-amplify";

import styles from "src/styles/Conversation.module.css";
import Conversation from "src/components/Conversation";
import { Conversation as ConversationType } from "src/API";
import { gql } from "@apollo/client";

const listConversationsOnlyIdTitle = gql`
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

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const SSR = withSSRContext({ req });
  let conversations;

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
      conversations,
    },
  };
};


type ConversationPageProps = {
  conversations: [ConversationType]
};

export default function ConversationPage({ conversations }: ConversationPageProps) {
  return (
    <div className={styles.container}>
      <Head>
        <title>conceptconvos</title>
        <meta name="description" content="Conversations with concepts." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Conversation conversation={null} conversations={conversations} />
    </div>
  );
}
