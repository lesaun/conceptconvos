// A react component that renders a chat window with different colors for speakers and left and right sides.
import React from "react";
import Paper from "@mui/material/Paper";
import { Conversation } from "../../models";

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
  conversation: Conversation | undefined;
  activeSpeaker: String | undefined;
}

const ChatWindow = ({ conversation, activeSpeaker }: Props) => {
  return (
    <div>
      {conversation !== undefined && activeSpeaker !== undefined
        ? conversation.lines !== undefined
          ? conversation.lines.map((conversationLine, i: number) =>
              conversationLine ? (
                <Chat
                  key={conversationLine.line.speaker + i.toString()}
                  align={
                    conversationLine.line.speaker === activeSpeaker
                      ? "left"
                      : "right"
                  }
                  text={conversationLine.line.text}
                  color={
                    conversationLine.line.speaker === activeSpeaker
                      ? "white"
                      : "lightgreen"
                  }
                />
              ) : null
            )
          : null
        : null}
    </div>
  );
};

export default ChatWindow;
