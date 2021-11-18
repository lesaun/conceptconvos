import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Converse.module.css";

import Amplify, { API, DataStore, Predicates } from "aws-amplify";
import { AmplifyAuthenticator, AmplifySignOut } from "@aws-amplify/ui-react";
import awsconfig from "../aws-exports";

import ChatActions from "../components/converse/ChatActions";
import ChatWindow from "../components/converse/ChatWindow";
import ConversationList from "../components/converse/ConversationList";
import { Conversation } from "../models";
import React, { useEffect, useState } from "react";
import ConversationCreateForm from "../components/converse/ConversationCreateForm";

Amplify.configure(awsconfig);

const Converse: NextPage = () => {
  const [conversations, setConversations] = useState<Conversation[]>([]);
  const [selectedConversationId, setSelectedConversationId] = useState("");
  const [selectedConversation, setSelectedConversation] =
    useState<Conversation>();
  const [activeSpeaker, setActiveSpeaker] = useState<string | undefined>();

  const setSelectedConversationWithId = (id: string | null) => {
    if (id === null) {
      setSelectedConversation(undefined)
      setSelectedConversationId("")
      setActiveSpeaker(undefined)
    } else {
      setSelectedConversationId(id);
      if (id !== "") {
        for (let i = 0; i < conversations.length; i++) {
          if (conversations[i].id === id) {
            setSelectedConversation(conversations[i]);
            setActiveSpeaker(conversations[i].defaultUserSpeaker);
            break;
          }
        }
      }
    }
  };

  useEffect(() => {
    const subscription = DataStore.observeQuery(
      Conversation,
      Predicates.ALL
    ).subscribe((snapshot) => {
      const { items } = snapshot;
      setConversations(items);
    });
    return () => subscription.unsubscribe();
  }, []);

  console.log(conversations);
  
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
            setSelectedConversationWithId={setSelectedConversationWithId}
          />
          <div className={styles.chat}>
            {selectedConversation === undefined ? (
              <ConversationCreateForm />
            ) : (
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
            )}
          </div>
        </main>
      </div>
    </AmplifyAuthenticator>
  );
};

export default Converse
