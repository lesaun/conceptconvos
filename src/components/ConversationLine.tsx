import Paper from "@mui/material/Paper";

import ConversationLineButtons from "./ConversationLineButtons";
import styles from "src/styles/Conversation.module.css";
import { gql, useReactiveVar } from "@apollo/client";
import { Line } from "src/API";
import { activeSpeakerVar } from "src/apollo-cache";

type Props = {
  line: Line;
};

export default function ConversationLine({ line }: Props) {
  const activeSpeaker = useReactiveVar(activeSpeakerVar);

  return (
    <div
      className={
        line.speaker === activeSpeaker
          ? styles.conversationlineleft
          : styles.conversationlineright
      }
    >
      {line.speaker === activeSpeaker ? (
        <ConversationLineButtons
          lineId={line.id}
          liked={line.liked ? true : false}
        />
      ) : null}
      <Paper
        elevation={1}
        sx={{ width: { sm: 400 }, flexShrink: { sm: 0 } }}
        className={
          line.speaker === activeSpeaker
            ? styles.conversationlinepaperleft
            : styles.conversationlinepaperright
        }
      >
        <p
          className={
            line.speaker === activeSpeaker
              ? styles.conversationlinetextleft
              : styles.conversationlinetextright
          }
        >
          {line.text}
        </p>
      </Paper>
      {line.speaker === activeSpeaker ? (
        <ConversationLineButtons
          lineId={line.id}
          liked={line.liked ? true : false}
        />
      ) : null}
    </div>
  );
}
