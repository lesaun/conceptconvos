import React, { useEffect, useState } from 'react';
import Amplify, { API } from 'aws-amplify';
import { AmplifyAuthenticator } from '@aws-amplify/ui-react';

import * as queries from 'graphql/queries';

import type { GetServerSideProps, InferGetServerSidePropsType, InferGetStaticPropsType, NextPage } from 'next';
import Head from 'next/head';

import awsconfig from 'aws-exports';

import styles from 'styles/Converse.module.css';
import { Conversation } from 'models';
import { useRouter } from 'next/dist/client/router';
Amplify.configure(awsconfig);

export const getServerSideProps: GetServerSideProps = async (context) => {
  let conversation = null;

  if (context.params !== undefined) {
    conversation = await API.graphql({ query: queries.getConversation, variables: { id: context.params?.id }});
  }

  let conversationList = await API.graphql({ query: queries.listConversations }); 

  return {
    props: {
      conversation,
      conversationList
    }
  }
}

const Converse: NextPage = ({ conversation, conversationList }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const router = useRouter()

  const { id } = router.query
  const [activeSpeaker, setActiveSpeaker] = useState<string | undefined>();

  console.log(conversation, conversationList, id)

  return (
    <AmplifyAuthenticator>
      <div className={styles.container}>
        <Head>
          <title>conceptconvos</title>
          <meta name="description" content="Conversations with concepts." />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className={styles.main}>
        </main>
      </div>
    </AmplifyAuthenticator>
  );
};

export default Converse;
