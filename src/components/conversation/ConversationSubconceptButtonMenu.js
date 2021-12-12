import React, { useState } from "react";

import { MenuItem } from "@mui/material";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import { useConversationContext } from "./context";

export default function ConversationButtonMenu() {
  const { speaker, speakers, setSpeaker } = useConversationContext();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="basic-button"
        aria-label={"say as other speakers"}
        aria-controls="basic-menu"
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        Say as {speaker}:
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{ "aria-labelledby": "basic-button" }}
      >
        {speakers !== undefined && speakers !== null
          ? speakers.map((speaker) => (
              <MenuItem
                key={`sayas${speaker}`}
                onClick={() => {
                  setSpeaker(speaker);
                  handleClose();
                }}
                value={speaker}
              >
                {speaker}
              </MenuItem>
            ))
          : null}
      </Menu>
    </div>
  );
}
