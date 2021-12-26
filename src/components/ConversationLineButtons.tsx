import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";

import { gql, useMutation, useReactiveVar } from "@apollo/client";

import styles from "../styles/ConversationActions.module.css";
import { isEditModeVar } from "../apollo-cache";
import {
  DeleteLineMutationVariables,
  Line,
  UpdateLineMutationVariables,
} from "src/API";

export const DELETE_LINE = gql`
  mutation DeleteLine($input: DeleteLineInput!) {
    deleteLine(input: $input) {
      id
    }
  }
`;

export const UPDATE_LINE = gql`
  mutation UpdateLine($input: UpdateLineInput!) {
    updateLine(input: $input) {
      id
    }
  }
`;

type Props = {
  lineId: string;
  liked: boolean;
};

export default function ConversationLineButton({ lineId, liked }: Props) {
  const isEditMode = useReactiveVar(isEditModeVar);

  const [deleteLine] = useMutation<Line, DeleteLineMutationVariables>(
    DELETE_LINE,
    { variables: { input: { id: lineId } } }
  );
  const [updateLine] = useMutation<Line, UpdateLineMutationVariables>(
    UPDATE_LINE,
    { variables: { input: { id: lineId, liked: !liked } } }
  );

  return (
    <div className={styles.conversationlinebuttons}>
      <div>
        {isEditMode ? (
          <IconButton
            onClick={() => deleteLine()}
          >
            <DeleteIcon />
          </IconButton>
        ) : (
          <IconButton onClick={() => updateLine()}>
            {liked ? (
              <ThumbUpIcon color="primary" />
            ) : (
              <ThumbUpOffAltIcon color="primary" />
            )}
          </IconButton>
        )}
      </div>
    </div>
  );
}
