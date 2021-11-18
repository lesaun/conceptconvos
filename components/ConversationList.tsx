import React, { useState } from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { Button } from '@mui/material';
import { Conversation } from '../models';

interface Props {
    conversations: Conversation[];
    selectedConversationId: string;
    setSelectedConversationId: any;
}

const ConversationList = ({ conversations, selectedConversationId, setSelectedConversationId }: Props) => {
  const handleListItemClick = (event: any, index: string) => {
    setSelectedConversationId(index);
  };

  return (
    <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper', borderRight:"1px solid lightgray" }}>
      <List component="nav" aria-label="main mailbox folders">
        {conversations.map((conversation: Conversation) => (
            <ListItemButton
                key={conversation.id}
                selected={selectedConversationId === conversation.id}
                onClick={(event) => handleListItemClick(event, conversation.id)}
            >
                <ListItemText primary={conversation.title} />
            </ListItemButton>
        ))}
      </List>
      <Button>New Conversation</Button>
    </Box>
  );
}

export default ConversationList