import { createContext, useContext, useState } from "react";

import useConversationLines from "src/components/conversation/useConversationLines";
import {
  executeConversationGenerate,
  executeCreateConversation,
  executeCreateLine,
  executeDeleteConversation,
  executeDeleteLine,
  executeUpdateLineLiked,
} from "./executeFunctions";

const ConversationContext = createContext({});

export function ConversationContextProvider({
  children,
  conversationID,
  speakers,
  initialSpeaker,
  conversations,
  initialConversationLines,
}) {
  const [speaker, setSpeaker] = useState(initialSpeaker);
  const [isEditMode, setIsEditMode] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [loadingConversationID, setLoadingConversationID] =
    useState(conversationID);
  const [conversationLines, setConversationLines] = useConversationLines(
    conversationID,
    initialConversationLines
  );

  const clearConversationLines = () => {
    setConversationLines([]);
  };

  return (
    <ConversationContext.Provider
      value={{
        conversationID,
        conversations,
        speaker,
        speakers,
        conversationLines,
        mobileMenuOpen,
        loadingConversationID,
        isEditMode,
        setIsEditMode,
        setLoadingConversationID,
        setSpeaker,
        setMobileMenuOpen,
        clearConversationLines,
        executeConversationGenerate: () =>
          executeConversationGenerate(conversationID),
        executeCreateConversation,
        executeCreateLine: (speaker, text) =>
          executeCreateLine(conversationID, speaker, text),
        executeDeleteConversation: () =>
          executeDeleteConversation(conversationID),
        executeUpdateLineLiked,
        executeDeleteLine,
      }}
    >
      {children}
    </ConversationContext.Provider>
  );
}

export function useConversationContext() {
  return useContext(ConversationContext);
}
