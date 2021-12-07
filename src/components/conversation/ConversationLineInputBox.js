import React, { useState } from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SendIcon from "@mui/icons-material/Send";

import { useConversationContext } from "./context";

export default function LineInputBox() {
  const { speaker, executeCreateLine } = useConversationContext();
  const [text, setText] = useState("");

  const sendText = () => {
    if (speaker === undefined && text.trim().length !== 0) {
      return;
    }

    executeCreateLine(speaker, text);
    setText("");
  };

  const onInputKeyPress = (event) => {
    if (event.key === "Enter") {
      sendText();
      event.preventDefault();
    }
  };

  return (
    <Paper
      component="form"
      sx={{ p: "2px 4px", flexGrow: 3, display: "flex", alignItems: "center" }}
    >
      <InputBase
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyPress={onInputKeyPress}
        sx={{ ml: 1, flex: 1 }}
        inputProps={{ "aria-label": `speak as ${speaker}` }}
      />
      <IconButton
        color="primary"
        onClick={sendText}
        sx={{ p: "10px" }}
        aria-label="send line"
      >
        <SendIcon />
      </IconButton>
    </Paper>
  );
}
