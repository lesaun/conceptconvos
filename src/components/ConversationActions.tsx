import React from "react";

import Box from "@mui/material/Box";

import { useReactiveVar } from '@apollo/client';
import { isEditModeVar } from '../apollo-cache';

import ConversationLineInputBox from "./ConversationLineInputBox";
import ConversationSpeakerButtonMenu from "./ConversationSpeakerButtonMenu";
import ConversationGenerateButton from "./ConversationGenerateButton";
import ConversationDeleteButton from "./ConversationDeleteButton";
import ConversationEditButton from "./ConversationEditButton";
import ConversationMobileMenuOpenButton from "./ConversationMobileMenuOpenButton";

import styles from '../styles/ConversationActions.module.css';

type ConversationActionsProps = {
  speakers: (string | null)[] | null | undefined
}

export default function ConversationActions({ speakers }: ConversationActionsProps) {
  const isEditMode = useReactiveVar(isEditModeVar)

  return (
    <Box className={styles.root}>
      <Box className={styles.rootactionbuttons}>
        <ConversationSpeakerButtonMenu speakers={speakers} />
        <Box className={styles.rightactionbuttons}>
          {isEditMode ? (<ConversationDeleteButton />) : null}
          <ConversationEditButton />
          <ConversationMobileMenuOpenButton />
          <ConversationGenerateButton />
        </Box>
      </Box>
      <ConversationLineInputBox />
    </Box>
  );
}
