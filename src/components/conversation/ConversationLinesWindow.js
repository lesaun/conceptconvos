import React, { useEffect, useRef } from "react";

import ConversationLine from "./ConversationLine";
import LinearProgress from '@mui/material/LinearProgress';
import { useConversationContext } from "./context";

export default function ConversationLinesWindow() {
  const { conversationID, conversationLines, speaker, loadingConversationID } = useConversationContext();
  const el = useRef(null);

  const scrollToBottom = () => {
    el.current?.scrollIntoView();
  };

  useEffect(() => {
    scrollToBottom();
  }, [conversationLines]);

  return (
    <div style={{ maxHeight: "calc(100% - 64px)", overflow: "scroll" }}>
      {(loadingConversationID && conversationID !== loadingConversationID) ?  <LinearProgress /> : null}
      {speaker !== undefined
        ? conversationLines !== undefined
          ? conversationLines.map((line, i) =>
              conversationLines ? (
                <ConversationLine
                  key={line.speaker + i.toString()}
                  liked={line.liked}
                  lineId={line.id}
                  align={
                    line.speaker === speaker ? "left" : "right"
                  }
                  text={line.text}
                  color={
                    line.speaker === speaker
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
}
