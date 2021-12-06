import * as React from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SendIcon from "@mui/icons-material/Send";
import { MenuItem } from "@mui/material";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";

import { API, graphqlOperation } from "aws-amplify";
import * as mutations from "src/graphql/mutations";

export default function ChatBox({
  speakers,
  activeSpeaker,
  setActiveSpeaker,
  conversation,
}) {
  const [text, setText] = React.useState("");
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const sendText = () => {
    if (activeSpeaker === undefined) {
      return;
    }
    API.graphql(
      graphqlOperation(mutations.createLine, {
        input: {
          conversationID: conversation.id,
          speaker: activeSpeaker,
          text,
        },
      })
    );
    setText("");
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
          ? speakers.map((speaker) => (
              <MenuItem
                key={`sayas${speaker}`}
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
        onKeyPress={(e) => {
          if (e.key === "Enter") {
            sendText();
            e.preventDefault();
          }
        }}
        sx={{ ml: 1, flex: 1 }}
        inputProps={{ "aria-label": "speak as speaker" }}
      />
      <IconButton
        color="primary"
        onClick={sendText}
        sx={{ p: "10px" }}
        aria-label="Send Chat"
      >
        <SendIcon />
      </IconButton>
    </Paper>
  );
}
