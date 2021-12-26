import React from "react";

import EditIcon from "@mui/icons-material/Edit";
import IconButton from "@mui/material/IconButton";

import { useReactiveVar } from '@apollo/client';
import { isEditModeVar } from '../apollo-cache';

export default function ConversationEditButton() {
  const isEditMode = useReactiveVar(isEditModeVar)

  return (
    <div>
      <IconButton
        color="primary"
        onClick={() => isEditModeVar(!isEditMode)}
        sx={{ p: "10px" }}
        aria-label="send line"
      >
        <EditIcon
          color={isEditMode ? "primary" : "action"}
        />
      </IconButton>
    </div>
  );
}
