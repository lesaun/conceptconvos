import { withSSRContext, graphqlOperation } from "aws-amplify";

import { getOpenAiCompletion, getConversation } from "src/graphql/queries";
import { createLine } from "src/graphql/mutations";

import prompt from "src/prompts/conceptConversationPrompt";

export default async function handler(req, res) {
  const SSR = withSSRContext({ req });
  const { id } = req.query;

  let conversation = await SSR.API.graphql({
    query: getConversation,
    authMode: "AMAZON_COGNITO_USER_POOLS",
    variables: { id: id },
  });

  conversation = conversation.data.getConversation;

  let openAiCompletion = await SSR.API.graphql({
    query: getOpenAiCompletion,
    variables: {
      prompt: prompt(conversation.title, conversation.lines.items),
      stops: conversation.speakers.map((speaker) => `${speaker}:`),
    },
    authMode: "AMAZON_COGNITO_USER_POOLS",
  });

  openAiCompletion = openAiCompletion.data.getOpenAiCompletion;
  openAiCompletion = JSON.parse(openAiCompletion);

  SSR.API.graphql({
    query: createLine,
    variables: {
      input: {
        conversationID: conversation.id,
        speaker: conversation.title,
        text: openAiCompletion.choices[0].text.trim(),
      },
    },
    authMode: "AMAZON_COGNITO_USER_POOLS",
  });

  res.status(200).json({});
}
