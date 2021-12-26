import React, { useState } from "react";

import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SendIcon from "@mui/icons-material/Send";

import { gql, useMutation, useReactiveVar } from "@apollo/client";
import { activeConversationIdVar, activeSpeakerVar } from "../apollo-cache";
import { CreateLineMutationVariables, Line } from "src/API";

export const CREATE_LINE = gql`
  mutation CreateLine($input: CreateLineInput!) {
    createLine(input: $input) {
      id
      speaker
      text
    }
  }
`;

export default function LineInputBox() {
  const activeConversationId = useReactiveVar(activeConversationIdVar);
  const activeSpeaker = useReactiveVar(activeSpeakerVar);
  const [text, setText] = useState("");

  const [createLine] = useMutation<Line, CreateLineMutationVariables>(
    CREATE_LINE,
    {
      variables: {
        input: {
          conversationLinesId: activeConversationId,
          speaker: activeSpeaker ? activeSpeaker : "",
          text,
        },
      },
    }
  );

  const sendText = () => {
    if (activeSpeaker === undefined && text.trim().length !== 0) {
      return;
    }
    createLine();
    setText("");
  };

  const onInputKeyPress = (event: any) => {
    if (event.key === "Enter") {
      sendText();
      event.preventDefault();
    }
  };

  return (
    <Paper
      component="form"
      sx={{ p: "2px 4px", flexGrow: 3, display: "flex", alignItems: "center" }}
    >
      <InputBase
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyPress={onInputKeyPress}
        sx={{ ml: 1, flex: 1 }}
        inputProps={{ "aria-label": `speak as ${activeSpeaker}` }}
      />
      <IconButton
        color="primary"
        onClick={sendText}
        sx={{ p: "10px" }}
        aria-label="send line"
      >
        <SendIcon />
      </IconButton>
    </Paper>
  );
}
