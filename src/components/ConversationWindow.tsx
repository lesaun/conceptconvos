import * as React from "react";

import ConversationActions from "./ConversationActions";
import ConversationLinesWindow from "./ConversationLinesWindow";

import styles from "src/styles/Conversation.module.css";
import { Conversation } from "src/API";

type ConversationWindowProps = {
  conversation: Conversation
};

export default function ConversationWindow({
  conversation
}: ConversationWindowProps) {
  return (
    <div className={styles.conversationwindow}>
      <ConversationLinesWindow conversationLines={conversation.lines?.items} />
      <ConversationActions speakers={conversation.speakers} />
    </div>
  );
}
