import * as React from "react";

import Button from "@mui/material/Button";

import { useConversationContext } from "./context";

import styles from "src/styles/Conversation.module.css";

export default function ConversationGenerateButton() {
  const { executeConversationGenerate } = useConversationContext();

  return (
    <Button
      id="basic-button"
      aria-label="generate conversation line"
      className={styles.conversationgeneratebutton}
      onClick={executeConversationGenerate}
    >
      Generate
    </Button>
  );
}
