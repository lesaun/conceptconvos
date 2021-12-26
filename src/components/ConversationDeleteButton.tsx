import React, { useState } from "react";

import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

import { gql, useMutation, useReactiveVar } from "@apollo/client";
import { Conversation, DeleteConversationMutationVariables } from "../API";
import { activeConversationIdVar } from "src/apollo-cache";

export const DELETE_CONVERSATION = gql`
  mutation DeleteConversation($input: DeleteConversationInput!) {
    deleteConversation(input: $input) {
      id
    }
  }
`;

export default function ConversationDeleteButton() {
  const activeConversationId = useReactiveVar(activeConversationIdVar);

  const [deleteConversation] = useMutation<
    Conversation,
    DeleteConversationMutationVariables
  >(DELETE_CONVERSATION, {
    variables: { input: { id: activeConversationId } },
  });

  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));
  const [open, setOpen] = useState(false);

  return (
    <div>
      <IconButton
        onClick={() => setOpen(true)}
        sx={{ p: "10px" }}
        aria-label="send line"
      >
        <DeleteIcon color={"action"} />
      </IconButton>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">
          {"Delete conversation?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText></DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={() => setOpen(false)}>
            No
          </Button>
          <Button onClick={() => deleteConversation()} autoFocus>
            Yes
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
