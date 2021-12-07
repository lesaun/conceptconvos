import Box from "@mui/material/Box";

import ConversationMenu from "src/components/conversation/ConversationMenu";
import ConversationActions from "src/components/conversation/ConversationActions";
import ConversationLinesWindow from "src/components/conversation/ConversationLinesWindow";
import { ConversationContextProvider } from "src/components/conversation/context";

import styles from "src/styles/Conversation.module.css";

export default function Conversation(props) {
  return (
    <ConversationContextProvider {...props}>
      {"conversationID" in props ? (
        <>
          <ConversationMenu />
          <div className={styles.chat}>
            <ConversationLinesWindow />
            <ConversationActions />
          </div>
        </>
      ) : (
        <ConversationMenu alwaysMobileOpen />
      )}
    </ConversationContextProvider>
  );
}
