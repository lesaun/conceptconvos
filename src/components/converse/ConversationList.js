import React from "react";
import Link from "next/link";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { Button } from "@mui/material";

import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";

import { API, graphqlOperation } from "aws-amplify";
import * as mutations from "src/graphql/mutations";

const deleteConversation = (conversationId) => {
  API.graphql(
    graphqlOperation(mutations.deleteConversation, {
      input: {
        id: conversationId
      },
    })
  );
};


export default function ConversationList({
  conversations,
  selectedConversationId,
}) {
  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: 360,
        bgcolor: "background.paper",
        borderRight: "1px solid lightgray",
        overflow: 'scroll'
      }}
    >
      <List component="nav" aria-label="main mailbox folders">
        {conversations.map((conversation) => (
          <Link
            key={conversation.id}
            href={{ pathname: "/[id]", query: { id: conversation.id } }}
            passHref
          >
            <ListItemButton
              component="a"
              selected={selectedConversationId === conversation.id}
            >
              <ListItemText primary={conversation.title} />
              <IconButton onClick={() => deleteConversation(conversation.id)}>
                <DeleteIcon />
              </IconButton>
            </ListItemButton>
          </Link>
        ))}
      </List>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Link href={{ pathname: "/" }} passHref>
          <Button component="a">New Conversation</Button>
        </Link>
      </div>
    </Box>
  );
}
