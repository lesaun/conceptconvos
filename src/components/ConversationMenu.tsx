import React from "react";

import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";

import { useReactiveVar } from '@apollo/client';
import { isMobileMenuOpenVar } from 'src/apollo-cache';

import ConversationCreateForm from "./ConversationCreateForm";
import ConversationList from "./ConversationList";
import { Conversation } from "src/API";

type Props = {
  alwaysMobileOpen: boolean
  conversations: [Conversation]
}

export default function ConversationMenu({ alwaysMobileOpen, conversations }: Props): JSX.Element {
  const isMobileMenuOpen = useReactiveVar(isMobileMenuOpenVar);

  return (
    <Box
      component="nav"
      sx={{ width: { sm: 300 }, flexShrink: { sm: 0 } }}
      aria-label="mailbox folders"
    >
      <Drawer
        variant="temporary"
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: "block", sm: "none" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: alwaysMobileOpen ? "100%" : "calc(100vw - 30vw)",
          },
        }}
        onClose={() => isMobileMenuOpenVar(!isMobileMenuOpen)}
        open={alwaysMobileOpen || isMobileMenuOpen}
      >
        <Box sx={{ display: "flex", flexDirection: "column", position: "relative" }}>
          <ConversationCreateForm />
          <Divider />
          <ConversationList conversations={conversations} />
        </Box>
      </Drawer>
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: "none", sm: "block" },
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: 300 },
        }}
        open
      >
        <Box sx={{ display: "flex", flexDirection: "column", position: "relative" }}>
          <ConversationCreateForm />
          <Divider />
          <ConversationList conversations={conversations} />
        </Box>
      </Drawer>
    </Box>
  );
}
