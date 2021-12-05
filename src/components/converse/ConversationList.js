import React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { Button } from "@mui/material";

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
      }}
    >
      <List component="nav" aria-label="main mailbox folders">
        {conversations.map((conversation) => (
          <ListItemButton
            key={conversation.id}
            selected={selectedConversationId === conversation.id}
          >
            <ListItemText primary={conversation.title} />
          </ListItemButton>
        ))}
      </List>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Button>New Conversation</Button>
      </div>
    </Box>
  );
}
