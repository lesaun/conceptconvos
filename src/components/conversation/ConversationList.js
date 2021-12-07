import React from "react";
import Link from "next/link";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";

import { useConversationContext } from "./context";

export default function ConversationList() {
  const {
    conversationID,
    conversations,
    setMobileMenuOpen,
    setLoadingConversationID,
    clearConversationLines,
  } = useConversationContext();

  return (
    <Box
      sx={{
        width: "100%",
        height: "calc(100vh - 56px)",
        top: 56,
        left: 0,
        position: "absolute",
        bgcolor: "background.paper",
        overflow: "scroll",
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
              onClick={() => {
                setMobileMenuOpen(false);
                setLoadingConversationID(conversation.id);
                clearConversationLines();
              }}
              selected={conversationID === conversation.id}
            >
              <ListItemText primary={conversation.title} />
            </ListItemButton>
          </Link>
        ))}
      </List>
    </Box>
  );
}
