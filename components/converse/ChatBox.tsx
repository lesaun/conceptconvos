import * as React from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SendIcon from "@mui/icons-material/Send";
import { MenuItem } from "@mui/material";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import { Conversation, Line, LineConversation } from "../../models";
import { DataStore } from "aws-amplify";

interface Props {
  speakers: (string | null)[] | undefined;
  activeSpeaker: string | undefined;
  setActiveSpeaker: React.Dispatch<React.SetStateAction<string | undefined>>;
  conversation: Conversation;
}

const saveLine = async (conversation: Conversation, text: string, activeSpeaker: string) => {
  const line = await DataStore.save(
    new Line({
      text: text,
      speaker: activeSpeaker,
    })
  );

  DataStore.save(
    new LineConversation({
      conversation: conversation,
      line: line
    })
  );
};

export default function ChatBox({
  speakers,
  activeSpeaker,
  setActiveSpeaker,
  conversation,
}: Props) {
  const [text, setText] = React.useState("");
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Paper
      component="form"
      sx={{ p: "2px 4px", flexGrow: 3, display: "flex", alignItems: "center" }}
    >
      <Button
        id="basic-button"
        aria-controls="basic-menu"
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        Say as {activeSpeaker}:
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{ "aria-labelledby": "basic-button" }}
      >
        {speakers !== undefined && speakers !== null
          ? speakers.map((speaker: any) => (
              <MenuItem
                onClick={() => {
                  setActiveSpeaker(speaker);
                  handleClose();
                }}
                value={speaker}
              >
                {speaker}
              </MenuItem>
            ))
          : null}
      </Menu>
      <InputBase
        value={text}
        onChange={(e) => setText(e.target.value)}
        sx={{ ml: 1, flex: 1 }}
        inputProps={{ "aria-label": "speak as speaker" }}
      />
      <IconButton color="primary"
       onClick={() => activeSpeaker !== undefined ? saveLine(conversation, text, activeSpeaker) : null}
       sx={{ p: "10px" }} aria-label="Send Chat">
        <SendIcon />
      </IconButton>
    </Paper>
  );
}
