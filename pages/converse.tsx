import React, { useEffect, useState } from 'react';
import Amplify, { DataStore, Predicates, syncExpression } from 'aws-amplify';
import { AmplifyAuthenticator } from '@aws-amplify/ui-react';

import type { NextPage } from 'next';
import Head from 'next/head';

import awsconfig from '../aws-exports';

import ChatActions from '../components/converse/ChatActions';
import ConversationCreateForm from '../components/converse/ConversationCreateForm';
import ChatWindow from '../components/converse/ChatWindow';
import ConversationList from '../components/converse/ConversationList';

import styles from '../styles/Converse.module.css';
import { Conversation, Line, LineConversation } from '../models';

Amplify.configure(awsconfig);
DataStore.start()

const Converse: NextPage = () => {
  const [lines, setLines] = useState<Line[]>([]);
  const [conversations, setConversations] = useState<Conversation[]>([]);
  const [lineConversations, setLineConversations] = useState<LineConversation[]>([]);

  const [lineById, setLineById] = useState<Record<string,Line>>({});
  const [conversationById, setConversationById] = useState<Record<string,Conversation>>({});

  const [selectedConversationId, setSelectedConversationId] = useState('');
  const [selectedConversation, setSelectedConversation] =
    useState<Conversation>();
  const [activeSpeaker, setActiveSpeaker] = useState<string | undefined>();

  const setSelectedConversationWithId = (id: string | null) => {
    if (id === null) {
      setSelectedConversation(undefined);
      setSelectedConversationId('');
      setActiveSpeaker(undefined);
    } else {
      setSelectedConversationId(id);
      if (id !== '') {
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
      const newItemsById: any = {}
      items.forEach(item => { newItemsById[item.id] = item})
      setConversationById({ ...conversationById, ...newItemsById })
    });
    return () => subscription.unsubscribe();
  }, [conversationById]);

  useEffect(() => {
    const subscription = DataStore.observeQuery(
      Line,
      Predicates.ALL
    ).subscribe((snapshot) => {
      const { items } = snapshot;
      setLines(items);
      const newItemsById: any = {}
      items.forEach(item => { newItemsById[item.id] = item})
      setLineById({ ...lineById, ...newItemsById })
    });
    return () => subscription.unsubscribe();
  }, [lineById]);

  useEffect(() => {
    const subscription = DataStore.observeQuery(
      LineConversation,
      Predicates.ALL
    ).subscribe((snapshot) => {
      const { items } = snapshot;
      setLineConversations(items);
      const newItemsById: any = {}
      items.forEach(item => { newItemsById[item.id] = item })
    });
    return () => subscription.unsubscribe();
  }, []);

  const lineConversationsWithObjects : any = lineConversations
    .filter((lc: any) =>
      lc.conversationID === selectedConversationId ||
      (lc.conversation !== undefined && lc.conversation.id === selectedConversationId))
    .map((lc: any) => 
      lc.hasOwnProperty("conversationID") && lc.hasOwnProperty("lineID") &&
      (!lc.hasOwnProperty("line") || !lc.hasOwnProperty("conversation"))
        ? { ...lc, line: lineById[lc.lineID], conversation: conversationById[lc.conversationID] }
        : lc)
    .filter(lc => lc.hasOwnProperty("line") && lc.hasOwnProperty("conversation"))

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
                  activeSpeaker={activeSpeaker}
                  lineConversations={lineConversationsWithObjects}
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

export default Converse;
