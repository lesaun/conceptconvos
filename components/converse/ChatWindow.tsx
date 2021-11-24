// A react component that renders a chat window with different colors for speakers and left and right sides.
import React, { useEffect, useRef, useState } from "react";
import Paper from "@mui/material/Paper";
import { LineConversation, Conversation, Line } from "../../models";
import { DataStore } from "aws-amplify";

const Chat = ({ align, text, color }: any) => {
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

interface Props {
  activeSpeaker: String | undefined;
  lineConversations: LineConversation[];
}

const ChatWindow = ({ lineConversations, activeSpeaker }: Props) => {
  const el = useRef<null | HTMLDivElement>(null);

  const scrollToBottom = () => {
    el.current?.scrollIntoView()
  }

  useEffect(() => {
    scrollToBottom()
  }, [lineConversations]);

  return (
    <div style={{maxHeight: "calc(100% - 64px)", overflow: "scroll"}}>
      {activeSpeaker !== undefined
        ? lineConversations !== undefined
          ? lineConversations.map((lineConversation, i: number) =>
              lineConversation ? (
                <Chat
                  key={lineConversation.line.speaker + i.toString()}
                  align={
                    lineConversation.line.speaker === activeSpeaker
                      ? "left"
                      : "right"
                  }
                  text={lineConversation.line.text}
                  color={
                    lineConversation.line.speaker === activeSpeaker
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
