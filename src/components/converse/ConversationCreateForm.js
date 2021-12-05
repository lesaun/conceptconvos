import * as React from "react";
import { styled } from "@mui/material/styles";
import Chip from "@mui/material/Chip";
import Paper from "@mui/material/Paper";
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Slider,
  TextField,
} from "@mui/material";

import { API, graphqlOperation } from "aws-amplify";
import * as mutations from "src/graphql/mutations";

const ListItem = styled("li")(({ theme }) => ({
  margin: theme.spacing(0.5),
}));

const style = {
  marginTop: "64px",
  width: 500,
};

export default function ConversationCreateForm() {
  const [tempature, setTempature] = React.useState(0.7);
  const [speakers, setSpeakers] = React.useState([""]);
  const [title, setTitle] = React.useState("");
  const [newSpeaker, setNewSpeaker] = React.useState("");
  const [defaultUserSpeaker, setDefaultUserSpeaker] = React.useState("");

  const handleDelete = (chipToDelete) => () => {
    setSpeakers((chips) => chips.filter((chip) => chip !== chipToDelete));
  };

  return (
    <Box sx={style}>
      <TextField
        value={title}
        onChange={(event) => setTitle(event.target.value)}
        id="title"
        label="Title"
        variant="standard"
      />
      <br />
      <TextField
        value={newSpeaker}
        onChange={(event) => setNewSpeaker(event.target.value)}
        id="add-speaker"
        label="Add Speaker"
        variant="standard"
      />
      <Button
        aria-label={"add-speaker-button"}
        onClick={() => {
          setSpeakers([newSpeaker, ...speakers]);
          setNewSpeaker("");
        }}
      >
        Add
      </Button>
      <br />
      <FormControl fullWidth style={{ marginTop: 20 }}>
        <InputLabel id="demo-simple-select-label">
          Default User Speaker
        </InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={defaultUserSpeaker}
          label="Default User Speaker"
          onChange={(event) => setDefaultUserSpeaker(event.target.value)}
        >
          {(speakers !== undefined && speakers !== null ? speakers : []).map(
            (speaker) => (
              <MenuItem key={`default${speaker}`} value={speaker}>
                {speaker}
              </MenuItem>
            )
          )}
        </Select>
      </FormControl>
      <br />
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
        {speakers.map((speaker) => {
          return (
            <ListItem key={`chips${speaker}`}>
              <Chip label={speaker} onDelete={handleDelete(speaker)} />
            </ListItem>
          );
        })}
      </Paper>
      <Slider
        max={1}
        value={tempature}
        step={0.01}
        onChange={(_, value) => {
          setTempature(value);
        }}
        aria-label="Tempature"
        valueLabelDisplay="auto"
      />
      <Button
        aria-label={"submit create"}
        onClick={() =>
          defaultUserSpeaker !== null && title !== "" && speakers.length !== 0
            ? API.graphql(
                graphqlOperation(mutations.createConversation, {
                  input: {
                    title,
                    speakers,
                    defaultUserSpeaker,
                    tempature,
                  },
                })
              )
            : null
        }
      >
        Create
      </Button>
    </Box>
  );
}
