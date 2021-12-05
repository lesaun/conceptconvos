import * as React from "react";
import { styled } from "@mui/material/styles";
import Chip from "@mui/material/Chip";
import Paper from "@mui/material/Paper";
import { Box, Modal, Slider } from "@mui/material";

const ListItem = styled("li")(({ theme }) => ({
  margin: theme.spacing(0.5),
}));

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function ChatSettingsModal({ speakers, tempature, setTempature, open, handleClose, }) {
  const [chipData, setChipData] = React.useState(speakers);

  const handleDelete = (chipToDelete) => () => {
    setChipData((chips) => chips.filter((chip) => chip !== chipToDelete));
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Paper
          sx={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            listStyle: "none",
            p: 0.5,
            m: 0,
          }}
          component="ul"
        >
          {chipData.map((data) => {
            return (
              <ListItem key={data}>
                <Chip label={data} onDelete={handleDelete(data)} />
              </ListItem>
            );
          })}
        </Paper>
        <Slider
          max={1}
          value={tempature}
          onChangeCommitted={(_, value) => {
            setTempature(value);
          }}
          aria-label="Tempature"
          valueLabelDisplay="auto"
        />
      </Box>
    </Modal>
  );
}