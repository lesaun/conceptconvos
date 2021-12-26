import React, { useEffect, useRef } from "react";
import LinearProgress from "@mui/material/LinearProgress";
import { useReactiveVar } from "@apollo/client";

import { isConversationLoadingVar } from "src/apollo-cache";
import styles from "src/styles/Conversation.module.css";
import { Line } from "src/API";

import ConversationLine from "./ConversationLine";

type ConversationLinesWindowProps = {
  conversationLines: (Line | null)[] | undefined;
};

export default function ConversationLinesWindow({
  conversationLines,
}: ConversationLinesWindowProps) {
  const isConversationLoading = useReactiveVar(isConversationLoadingVar);

  const el = useRef(null);

  const scrollToBottom = () => {
    (el.current as any).scrollIntoView();
  };

  useEffect(() => {
    scrollToBottom();
  }, [conversationLines]);

  return (
    <div className={styles.conversationlineswindow}>
      {isConversationLoading ? <LinearProgress /> : null}
      {conversationLines?.map((line, i) => (
        line ? <ConversationLine key={`conversationline-${i}`} line={line} /> : null
      ))}
      <div ref={el} />
    </div>
  );
}
