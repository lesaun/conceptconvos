// A react component that renders a chat window with different colors for speakers and left and right sides.
import React from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import SettingsIcon from "@mui/icons-material/Settings";

import ChatBox from "./ChatBox";
import GenerateButton from "./GenerateButton";

const ChatActions = ({ conversation, setActiveSpeaker, activeSpeaker }) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  if (conversation === undefined) {
    return <Box></Box>;
  }

  return (
    <Box sx={{ display: "flex" }}>
      <ChatBox
        activeSpeaker={activeSpeaker}
        setActiveSpeaker={setActiveSpeaker}
        speakers={conversation.speakers}
        conversation={conversation}
      />
      <GenerateButton speakers={conversation.speakers} />
      <IconButton onClick={handleOpen}>
        <SettingsIcon />
      </IconButton>
    </Box>
  );
};

export default ChatActions;