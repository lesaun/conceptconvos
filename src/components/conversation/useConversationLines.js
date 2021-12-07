import { useState, useEffect } from "react";
import { API } from "aws-amplify";

import * as subscriptions from "src/graphql/subscriptions";

export default function useConversationLines(
  initialConversationID,
  initialConversationLines
) {
  const [conversationID, setConversationID] = useState(initialConversationID);
  const [conversationLines, setConversationLines] = useState(
    initialConversationLines
  );

  if (conversationID !== initialConversationID) {
    setConversationLines(initialConversationLines);
    setConversationID(initialConversationID);
  }

  useEffect(() => {
    const onLineConversationCreateListener = API.graphql({
      query: subscriptions.onLineConversationCreate,
      variables: { conversationID },
    });
    const onLineConversationUpdateListener = API.graphql({
      query: subscriptions.onLineConversationUpdate,
      variables: { conversationID },
    });
    const onLineConversationDeleteListener = API.graphql({
      query: subscriptions.onLineConversationDelete,
      variables: { conversationID },
    });

    const onLineConversationCreate = onLineConversationCreateListener.subscribe(
      ({
        value: {
          data: { onLineConversationCreate: v },
        },
      }) =>
        setConversationLines(
          [...conversationLines, { ...v }].map((l) => ({ ...l }))
        )
    );
    const onLineConversationUpdate = onLineConversationUpdateListener.subscribe(
      ({
        value: {
          data: { onLineConversationUpdate: v },
        },
      }) =>
        setConversationLines(
          [...conversationLines].map((l) => (l.id === v.id ? v : { ...l }))
        )
    );
    const onLineConversationDelete = onLineConversationDeleteListener.subscribe(
      ({
        value: {
          data: { onLineConversationDelete: v },
        },
      }) =>
        setConversationLines(
          [...conversationLines]
            .filter((l) => l.id !== v.id)
            .map((l) => ({ ...l }))
        )
    );

    return () => {
      onLineConversationCreate.unsubscribe();
      onLineConversationUpdate.unsubscribe();
      onLineConversationDelete.unsubscribe();
    };
  }, [conversationID, conversationLines]);

  return [conversationLines, setConversationLines];
}
