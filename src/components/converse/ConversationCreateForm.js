import * as React from "react";
import { styled } from "@mui/material/styles";
import { Box, Button, TextField } from "@mui/material";

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
  const [title, setTitle] = React.useState("");

  return (
    <Box sx={style}>
      <TextField
        value={title}
        onChange={(event) => setTitle(event.target.value)}
        id="title"
        label="Concept"
        variant="standard"
      />
      <Button
        aria-label={"submit create"}
        onClick={() =>
          defaultUserSpeaker !== null && title !== "" && speakers.length !== 0
            ? API.graphql(
                graphqlOperation(mutations.createConversation, {
                  input: {
                    title,
                    speakers: ["Inquisitor", title],
                    defaultUserSpeaker: ["Inquisitor"],
                    tempature: 0.9,
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
