import React from "react";
import Box from "@mui/material/Box";

import ConversationLineInputBox from "./ConversationLineInputBox";
import ConversationSpeakerButtonMenu from "./ConversationSpeakerButtonMenu";
import ConversationGenerateButton from "./ConversationGenerateButton";
import ConversationDeleteButton from "./ConversationDeleteButton";
import ConversationEditButton from "./ConversationEditButton";
import ConversationMobileMenuOpenButton from "./ConversationMobileMenuOpenButton";
import { useConversationContext } from "./context";

export default function ConversationActions() {
  const { isEditMode } = useConversationContext();

  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
        <ConversationSpeakerButtonMenu />
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
          {isEditMode ? (<ConversationDeleteButton />) : null}
          <ConversationEditButton />
          <ConversationMobileMenuOpenButton />
          <ConversationGenerateButton />
        </Box>
      </Box>
      <ConversationLineInputBox />
    </Box>
  );
}
