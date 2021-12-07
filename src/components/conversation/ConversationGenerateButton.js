import * as React from "react";
import Button from "@mui/material/Button";

import { useConversationContext } from "./context";

export default function ConversationGenerateButton() {
  const { executeConversationGenerate } = useConversationContext();

  return (
    <Button
      id="basic-button"
      aria-label="generate conversation line"
      style={{ height: 48, marginLeft: 4, marginRight: 4 }}
      onClick={executeConversationGenerate}
    >
      Generate
    </Button>
  );
}
