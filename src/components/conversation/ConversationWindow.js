import * as React from "react";
import ConversationActions from "src/components/conversation/ConversationActions";
import ConversationLinesWindow from "src/components/conversation/ConversationLinesWindow";
import styles from "src/styles/Conversation.module.css";

export default function ConversationWindow() {
  return (
    <div className={styles.conversationwindow}>
      <ConversationLinesWindow />
      <ConversationActions />
    </div>
  );
}
