import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Converse.module.css'

import Amplify, { API, DataStore, Predicates } from "aws-amplify";
import {AmplifyAuthenticator, AmplifySignOut} from "@aws-amplify/ui-react";
import awsconfig from "../aws-exports";

import ChatActions from '../components/ChatActions'
import ChatWindow from '../components/ChatWindow'
import ConversationList from '../components/ConversationList'
import { Conversation } from '../models';
import React, { useEffect, useState } from 'react';
import ConversationCreateForm from '../components/ConversationCreateForm';

Amplify.configure(awsconfig);

/*
declare global {
    interface Window { datastore: any; Conversation: any; }
}

if (typeof window !== 'undefined') {
    window.Conversation = Conversation;
    window.datastore = DataStore;
}
*/

const Home: NextPage = () => {
  const [conversations, setConversations] = useState<Conversation[]>([])
  const [selectedConversationId, setSelectedConversationId] = useState("");

  let selectedConversation : Conversation | null = null

  if (selectedConversationId !== "") {
    for (let i = 0; i < conversations.length; i++) {
      if (conversations[i].id === selectedConversationId) {
        selectedConversation = conversations[i]
        break
      }
    }
  }

  const [activeSpeaker, setActiveSpeaker] = useState(selectedConversation?.defaultUserSpeaker);
  console.log(selectedConversation, activeSpeaker)

  useEffect(() => {
    const subscription = DataStore.observeQuery(Conversation, Predicates.ALL).subscribe(snapshot => {
      const { items } = snapshot;
      setConversations(items)
    });
    return () => subscription.unsubscribe();
  }, []);

  console.log(conversations)

  return (
    <AmplifyAuthenticator>
      <div className={styles.container}>
        <Head>
          <title>conceptconvos</title>
          <meta name="description" content="Conversations with concepts." />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className={styles.main}>
          <ConversationList
            conversations={conversations}
            selectedConversationId={selectedConversationId}
            setSelectedConversationId={setSelectedConversationId}
          />
          <div className={styles.chat}>
            {
              selectedConversation === null ? 
              <ConversationCreateForm /> :
              <>
                <ChatWindow 
                  conversation={selectedConversation}
                  activeSpeaker={activeSpeaker}
                />
                <ChatActions
                  conversation={selectedConversation}
                  activeSpeaker={activeSpeaker}
                  setActiveSpeaker={setActiveSpeaker}
                />
              </>
            }
          </div>
        </main>
      </div>
    </AmplifyAuthenticator>
  )
}

export default Home
