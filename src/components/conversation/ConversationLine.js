import Paper from "@mui/material/Paper";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import { useConversationContext } from "./context";

import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";

function Buttons({ onDeleteClick, onLikeClick, isLiked, isEditMode }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
      }}
    >
      <div>
        {isEditMode ? (
          <IconButton onClick={onDeleteClick}>
            <DeleteIcon />
          </IconButton>
        ) : (
          <IconButton onClick={onLikeClick}>
            {isLiked ? (
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

export default function ConversationLine({ align, text, color, lineId, liked }) {
  const { isEditMode, executeDeleteLine, executeUpdateLineLiked } = useConversationContext();

  return (
    <div
      style={{
        display: "flex",
        justifyContent: align === "left" ? "flex-start" : "flex-end",
        width: "100%",
      }}
    >
      {align !== "left" ? (
        <Buttons
          onDeleteClick={() => executeDeleteLine(lineId)}
          onLikeClick={() => executeUpdateLineLiked(lineId, !liked)}
          isLiked={liked}
          isEditMode={isEditMode}
        />
      ) : null}
      <Paper
        elevation={1}
        sx={{ width: { sm: 400 }, flexShrink: { sm: 0 } }}
        style={{
          backgroundColor: color,
          margin: 5,
          padding: 10,
          borderRadius: 10,
        }}
      >
        <p>{text}</p>
      </Paper>
      {align === "left" ? (
        <Buttons
          onDeleteClick={() => executeDeleteLine(lineId)}
          onLikeClick={() => executeUpdateLineLiked(lineId, !liked)}
          isLiked={liked}
          isEditMode={isEditMode}
        />
      ) : null}
    </div>
  );
}
