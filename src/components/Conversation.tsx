import ConversationMenu from "./ConversationMenu";
import ConversationWindow from "./ConversationWindow";
import styles from "src/styles/Conversation.module.css";
import { Conversation as ConversationType } from "src/API";

type ConversationProps = {
  conversation?: ConversationType | null;
  conversations: [ConversationType];
};

export default function Conversation({
  conversation,
  conversations,
}: ConversationProps) {
  return conversation !== null && conversation !== undefined ? (
    <div className={styles.main}>
      <ConversationMenu alwaysMobileOpen={false} conversations={conversations} />
      <ConversationWindow conversation={conversation} />
    </div>
  ) : (
    <ConversationMenu alwaysMobileOpen={true} conversations={conversations} />
  );
}
