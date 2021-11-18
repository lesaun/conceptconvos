// A react component that renders a chat window with different colors for speakers and left and right sides.
import React from "react";
import Paper from "@mui/material/Paper";
import { Button, Input, TextField } from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import IconButton from "@mui/material/IconButton";
import SettingsIcon from "@mui/icons-material/Settings";

import ChatBox from "./ChatBox";
import GenerateButton from "./GenerateButton";
import { Conversation } from "../models";

interface Props {
  conversation: Conversation | null;
  activeSpeaker: String | undefined;
  setActiveSpeaker: React.Dispatch<React.SetStateAction<string | undefined>>;
}

const ChatActions = ({ conversation, setActiveSpeaker, activeSpeaker }: Props) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  if (conversation === null) {
    return <div></div>;
  }

  return (
    <div style={{ display: "flex" }}>
      <ChatBox
        activeSpeaker={activeSpeaker}
        setActiveSpeaker={setActiveSpeaker}
        speakers={conversation.speakers}
      />
      <GenerateButton speakers={conversation.speakers} />
      <IconButton onClick={handleOpen}>
        <SettingsIcon />
      </IconButton>
    </div>
  );
};

export default ChatActions;
