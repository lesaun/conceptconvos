import React, { useState } from "react";

import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SendIcon from "@mui/icons-material/Send";

import { gql, useMutation, useReactiveVar } from "@apollo/client";
import {
  isMobileMenuOpenVar,
  isConversationLoadingVar,
  activeConversationIdVar,
} from "src/apollo-cache";
import { Conversation, CreateConversationMutationVariables } from "src/API";

export const CREATE_CONVERSATION = gql`
  mutation CreateConversation($input: CreateConversationInput!) {
    createConversation(input: $input) {
      id
      title
    }
  }
`;

export default function ConversationCreateForm() {
  const [title, setTitle] = useState("");
  const isConversationLoading = useReactiveVar(isConversationLoadingVar);

  const [createConversation, { data, reset }] = useMutation<
    Conversation,
    CreateConversationMutationVariables
  >(CREATE_CONVERSATION, {
    variables: {
      input: {
        title: title,
        speakers: ["Inquisitor", title],
        defaultUserSpeaker: "Inquisitor",
        tempature: 0.9,
      },
    },
  });

  if (data && isConversationLoading) {
    activeConversationIdVar(data.id);
    isConversationLoadingVar(false);
    reset();
  }

  const createConversationHandler = () => {
    isConversationLoadingVar(true);
    createConversation();
    isMobileMenuOpenVar(false);
    setTitle("");
  };

  return (
    <Paper
      component="form"
      elevation={0}
      sx={{
        p: "6px",
        flexGrow: 3,
        width: "100%",
        padding: "6px",
        marginTop: "5px",
        display: "flex",
        top: 0,
        left: 0,
        position: "absolute",
        alignItems: "center",
      }}
    >
      <InputBase
        value={title}
        placeholder={"Create Concept"}
        onKeyPress={(event) => {
          if (event.key === "Enter") {
            createConversationHandler();
            event.preventDefault();
          }
        }}
        onChange={(e) => setTitle(e.target.value)}
        sx={{ ml: 1, flex: 1 }}
        inputProps={{ "aria-label": `create concept title input` }}
      />
      <IconButton
        component="a"
        color="primary"
        onClick={createConversationHandler}
        sx={{ p: "10px" }}
        aria-label="create concept with title"
      >
        <SendIcon />
      </IconButton>
    </Paper>
  );
}
