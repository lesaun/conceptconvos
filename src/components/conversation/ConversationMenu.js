import React from "react";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";

import ConversationCreateForm from "./ConversationCreateForm";
import ConversationList from "./ConversationList";
import { useConversationContext } from "./context";

const drawer = (
  <Box sx={{ display: "flex", flexDirection: "column", position: "relative" }}>
    <ConversationCreateForm />
    <Divider />
    <ConversationList />
  </Box>
);

export default function ConversationMenu({ alwaysMobileOpen }) {
  const { mobileMenuOpen, setMobileMenuOpen } = useConversationContext();

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
        onClose={() => setMobileMenuOpen(false)}
        open={alwaysMobileOpen || mobileMenuOpen}
      >
        {drawer}
      </Drawer>
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: "none", sm: "block" },
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: 300 },
        }}
        open
      >
        {drawer}
      </Drawer>
    </Box>
  );
}
