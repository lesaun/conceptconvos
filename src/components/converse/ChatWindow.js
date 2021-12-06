import React, { useEffect, useRef } from "react";
import Paper from "@mui/material/Paper";

const Chat = ({ align, text, color }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: align === "left" ? "flex-start" : "flex-end",
        width: "100%",
      }}
    >
      <Paper
        elevation={1}
        style={{
          width: "400px",
          backgroundColor: color,
          margin: 5,
          padding: 10,
          borderRadius: 10,
        }}
      >
        <p>{text}</p>
      </Paper>
    </div>
  );
};

const ChatWindow = ({ conversationLines, activeSpeaker }) => {
  const el = useRef(null);

  const scrollToBottom = () => {
    el.current?.scrollIntoView();
  };

  useEffect(() => {
    scrollToBottom();
  }, [conversationLines]);

  return (
    <div style={{ maxHeight: "calc(100% - 64px)", overflow: "scroll" }}>
      {activeSpeaker !== undefined
        ? conversationLines !== undefined
          ? conversationLines.map((conversationLines, i) =>
              conversationLines ? (
                <Chat
                  key={conversationLines.speaker + i.toString()}
                  align={
                    conversationLines.speaker === activeSpeaker
                      ? "left"
                      : "right"
                  }
                  text={conversationLines.text}
                  color={
                    conversationLines.speaker === activeSpeaker
                      ? "white"
                      : "lightgreen"
                  }
                />
              ) : null
            )
          : null
        : null}
      <div ref={el} />
    </div>
  );
};

export default ChatWindow;
