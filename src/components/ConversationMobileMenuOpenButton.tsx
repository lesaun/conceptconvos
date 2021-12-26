import * as React from "react";

import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

import { isMobileMenuOpenVar } from 'src/apollo-cache';

export default function ConversationMobileMenuOpenButton() {
  return (
    <div>
      <IconButton
        color="primary"
        onClick={() => isMobileMenuOpenVar(!isMobileMenuOpenVar())}
        sx={{ display: { xs: "block", sm: "none" } }}
        aria-label="send line"
      >
        <MenuIcon />
      </IconButton>
    </div>
  );
}
