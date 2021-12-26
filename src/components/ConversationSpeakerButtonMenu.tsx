import React, { useState } from "react";

import { MenuItem } from "@mui/material";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";

import { useReactiveVar } from '@apollo/client';
import { activeSpeakerVar } from 'src/apollo-cache';

type ConversationButtonMenuProps = {
  speakers: (string | null)[] | null | undefined
}

export default function ConversationButtonMenu({ speakers }: ConversationButtonMenuProps) {
  const activeSpeaker = useReactiveVar(activeSpeakerVar);

  const [anchorEl, setAnchorEl] = useState<any>(null);
  const open = Boolean(anchorEl);

  return (
    <div>
      <Button
        id="basic-button"
        aria-label={"say as other speakers"}
        aria-controls="basic-menu"
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={(e) => setAnchorEl(e.currentTarget)}
      >
        Say as {activeSpeaker}:
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={() => setAnchorEl(null)}
        MenuListProps={{ "aria-labelledby": "basic-button" }}
      >
        {speakers?.map((speaker) => (
          <MenuItem
            key={`sayas${speaker as string}`}
            onClick={() => {
              activeSpeakerVar(speaker as string);
              setAnchorEl(null);
            }}
            value={speaker as string}
          >
            {speaker as string}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}
