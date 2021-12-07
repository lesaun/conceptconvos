import Head from "next/head";
import { withSSRContext } from "aws-amplify";

import { listConversationsOnlyIdTitle } from "src/graphql/queries-custom";

import Conversation from "src/components/conversation/Conversation";
import styles from "src/styles/Conversation.module.css";

export async function getServerSideProps({ req }) {
  const SSR = withSSRContext({ req });
  let conversations;

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
}

export default function Converse(props) {
  return (
    <div className={styles.container}>
      <Head>
        <title>conceptconvos</title>
        <meta name="description" content="Conversations with concepts." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Conversation {...props} />
      </main>
    </div>
  );
}
