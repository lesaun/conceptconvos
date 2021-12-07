import * as React from "react";

import EditIcon from "@mui/icons-material/Edit";
import IconButton from "@mui/material/IconButton";

import { useConversationContext } from "./context";

export default function ConversationEditButton() {
  const { isEditMode, setIsEditMode } = useConversationContext();

  return (
    <div>
      <IconButton
        color="primary"
        onClick={() => setIsEditMode(!isEditMode)}
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
