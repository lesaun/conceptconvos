import * as React from "react";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

import { useConversationContext } from "./context";

export default function ConversationMobileMenuOpenButton() {
  const { setMobileMenuOpen } = useConversationContext();

  return (
    <div>
      <IconButton
        color="primary"
        onClick={() => setMobileMenuOpen(true)}
        sx={{ display: { xs: "block", sm: "none" } }}
        aria-label="send line"
      >
        <MenuIcon />
      </IconButton>
    </div>
  );
}
