import * as React from "react";

import Button from "@mui/material/Button";
import { gql, useMutation, useReactiveVar } from "@apollo/client";
import { activeConversationIdVar, activeSpeakerVar } from "../apollo-cache";
import styles from "src/styles/Conversation.module.css";
import { GenerateLineFromOpenAIMutationVariables, Line } from "src/API";

export const GENERATE_CONVERSATION_LINE = gql`
  mutation GenerateLineFromOpenAI(
    $conversationID: String
    $speaker: String
  ) {
    generateLineFromOpenAI(
      conversationID: $conversationID
      speaker: $speaker
    ) {
      id
      text
      speaker
    }
  }
`;

export default function ConversationGenerateButton() {
  const activeConversationId = useReactiveVar(activeConversationIdVar);
  const activeSpeaker = useReactiveVar(activeSpeakerVar);

  const [generateConversationLine] = useMutation<
    Line,
    GenerateLineFromOpenAIMutationVariables
  >(GENERATE_CONVERSATION_LINE, {
    variables: { conversationID: activeConversationId, speaker: activeSpeaker },
  });

  return (
    <Button
      id="basic-button"
      aria-label="generate conversation line"
      className={styles.conversationgeneratebutton}
      onClick={() => generateConversationLine()}
    >
      Generate
    </Button>
  );
}
