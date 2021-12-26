import { InMemoryCache } from "apollo-cache-inmemory";
import { makeVar } from '@apollo/client';

export const activeConversationIdVar = makeVar<string>("");
export const activeSpeakerVar = makeVar<string | null>(null);
export const isEditModeVar = makeVar<boolean>(false);
export const isMobileMenuOpenVar = makeVar<boolean>(false);
export const isConversationLoadingVar = makeVar<boolean>(false);

export const cache = new InMemoryCache({});