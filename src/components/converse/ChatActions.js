import React from "react";
import Box from "@mui/material/Box";

import ChatBox from "./ChatBox";
import GenerateButton from "./GenerateButton";

const ChatActions = ({ conversation, setActiveSpeaker, activeSpeaker }) => {
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
      <GenerateButton conversation={conversation} />
    </Box>
  );
};

export default ChatActions;
