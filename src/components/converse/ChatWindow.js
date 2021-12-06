import React, { useEffect, useRef } from "react";
import Paper from "@mui/material/Paper";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";

import { API, graphqlOperation } from "aws-amplify";
import * as mutations from "src/graphql/mutations";

const deleteLine = (lineId) => {
  API.graphql(
    graphqlOperation(mutations.deleteLine, {
      input: {
        id: lineId
      },
    })
  );
};

const Chat = ({ align, text, color, lineId }) => {
  console.log(lineId)
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
        <IconButton onClick={() => deleteLine(lineId)}>
          <DeleteIcon />
        </IconButton>
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
                  lineId={conversationLines.id}
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
