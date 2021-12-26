const AWS = require("aws-sdk");
const OpenAI = require("openai-api");

const gql = require("graphql-tag");

const { executeQuery, executeMutation } = require("./appsync");
const { getPrompt } = require("./conceptConversationPrompt");

const getConversation = gql`
  query GetConversation($id: ID!) {
    getConversation(id: $id) {
      title
      speakers
      lines {
        items {
          text
          speaker
        }
        nextToken
      }
    }
  }
`;

const createLine = gql`
  mutation CreateLine(
    $input: CreateLineInput!
    $condition: ModelLineConditionInput
  ) {
    createLine(input: $input, condition: $condition) {
      id
      speaker
      text
      createdAt
      updatedAt
      conversationID
    }
  }
`;

exports.handler = async ({
  arguments: { speaker, conversationID },
  request: {
    headers: { authorization },
  },
}) => {
  const { Parameters } = await new AWS.SSM()
    .getParameters({
      Names: ["OPENAI_API_KEY"].map((secretName) => process.env[secretName]),
      WithDecryption: true,
    })
    .promise();

  const OPENAI_API_KEY = Parameters[0].Value;
  const openai = new OpenAI(OPENAI_API_KEY);

  const conversation = await executeQuery(
    getConversation,
    "getConversation",
    {
      id: conversationID,
    },
    authorization
  );

  const prompt = getPrompt(
    conversation.title,
    speaker,
    conversation.lines.items
  );

  const stops = [
    ...conversation.speakers.map((speaker) => `${speaker}:`),
    "The following is a conversation",
  ];

  const completion = await openai.complete({
    engine: "davinci",
    prompt: prompt,
    maxTokens: 400,
    stop: stops,
    temperature: 0.9,
    topP: 1,
    presencePenalty: 0,
    frequencyPenalty: 0,
    bestOf: 1,
    n: 1,
    stream: false,
  });

  newLine = await executeQuery(
    createLine,
    "createLine",
    {
      input: {
        conversationID,
        speaker: speaker,
        text: completion.data.choices[0].text.trim(),
      },
    },
    authorization
  );

  return newLine;
};
