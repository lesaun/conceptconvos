import Head from "next/head";
import { withSSRContext } from "aws-amplify";

import { listConversationsOnlyIdTitle } from "src/graphql/queries-custom";

import ConversationList from "src/components/converse/ConversationList";
import ConversationCreateForm from "src/components/converse/ConversationCreateForm";

import styles from "src/styles/Converse.module.css";
import { serializeError } from "serialize-error";

export async function getServerSideProps({ req }) {
  const SSR = withSSRContext({ req });
  let conversationList;
  let error = null

  try {
    conversationList = await SSR.API.graphql({
      query: listConversationsOnlyIdTitle,
      authMode: "AMAZON_COGNITO_USER_POOLS",
    });
    conversationList = conversationList.data.listConversations.items;
  } catch (e) {
    error = serializeError(e)
    conversationList = [];
  }

  return {
    props: {
      conversationList,
      error
    },
  };
}

export default function Converse({ conversationList, error }) {
  console.log(error)

  if (conversationList == null) {
    return <div></div>;
  }

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
          selectedConversationId={null}
        />
        <div className={styles.chat}>
          <ConversationCreateForm />
        </div>
      </main>
    </div>
  );
}
