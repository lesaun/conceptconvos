import * as React from "react";
import Button from "@mui/material/Button";

export default function GenerateButton({ conversation }) {
  const handleClick = (_) => {
    fetch(`/conversationGenerate/${conversation.id}`);
  };

  return (
    <div>
      <Button
        id="basic-button"
        style={{ height: 48, marginLeft: 4, marginRight: 4 }}
        aria-controls="basic-menu"
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        Generate
      </Button>
    </div>
  );
}
