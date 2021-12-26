import React from "react";

import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";

import { useReactiveVar } from "@apollo/client";

import { activeConversationIdVar, isMobileMenuOpenVar } from "src/apollo-cache";
import styles from "src/styles/Conversation.module.css";
import { Conversation } from "src/API";

type ConversationListProps = {
  conversations: [Conversation];
};

export default function ConversationList({
  conversations,
}: ConversationListProps) {
  const activeConversationId = useReactiveVar(activeConversationIdVar);

  return (
    <Box className={styles.conversationlist}>
      <List component="nav" aria-label="main mailbox folders">
        {conversations.map((conversation) => (
          <ListItemButton
            selected={activeConversationId === conversation.id}
            key={`convo-list-${conversation.id}`}
            component="a"
            onClick={() => {
              activeConversationIdVar(conversation.id);
              isMobileMenuOpenVar(false);
            }}
          >
            <ListItemText primary={conversation.title} />
          </ListItemButton>
        ))}
      </List>
    </Box>
  );
}
