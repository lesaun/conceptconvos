import React, { useState } from "react";
import { useConversationContext } from "./context";
import Link from "next/link";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SendIcon from "@mui/icons-material/Send";

import { useRouter } from "next/router";

export default function ConversationCreateForm() {
  const { setMobileMenuOpen, setLoadingConversationID } = useConversationContext();
  const [title, setTitle] = useState("");
  const router = useRouter();

  const onClick = () => {
    if (title.trim().length !== 0) {
      router.push(`/create/${title}`);
    }
    setLoadingConversationID(null)
    setMobileMenuOpen(false)
    setTitle("");
  };

  const onInputKeyPress = (event) => {
    if (event.key === "Enter") {
      setMobileMenuOpen(false)
      onClick();
      event.preventDefault();
    }
  };

  return (
    <Paper
      component="form"
      elevation={0}
      sx={{
        p: "6px",
        flexGrow: 3,
        width: "100%",
        padding: "6px",
        marginTop: "5px",
        display: "flex",
        top: 0,
        left: 0,
        position: "absolute",
        alignItems: "center",
      }}
    >
      <InputBase
        value={title}
        placeholder={"Create Concept"}
        onKeyPress={onInputKeyPress}
        onChange={(e) => setTitle(e.target.value)}
        sx={{ ml: 1, flex: 1 }}
        inputProps={{ "aria-label": `create concept title input` }}
      />
      <Link href={`/create/${encodeURIComponent(title)}`} passHref>
        <IconButton
          component="a"
          color="primary"
          onClick={onClick}
          sx={{ p: "10px" }}
          aria-label="create concept with title"
        >
          <SendIcon />
        </IconButton>
      </Link>
    </Paper>
  );
}
