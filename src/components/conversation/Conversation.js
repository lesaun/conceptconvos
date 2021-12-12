import ConversationMenu from "src/components/conversation/ConversationMenu";
import ConversationWindow from "src/components/conversation/ConversationWindow";
import ConversationContextProvider from "src/components/conversation/context";

export default function Conversation({
  speakers,
  conversationID,
  initialConversationLines,
  initialSpeaker,
  conversations,
}) {
  return (
    <ConversationContextProvider
      conversationID={conversationID}
      speakers={speakers}
      initialConversationLines={initialConversationLines}
      initialSpeaker={initialSpeaker}
      conversations={conversations}
    >
      {conversationID !== null ? (
        <>
          <ConversationMenu />
          <ConversationWindow />
        </>
      ) : (
        <ConversationMenu alwaysMobileOpen />
      )}
    </ConversationContextProvider>
  );
}
