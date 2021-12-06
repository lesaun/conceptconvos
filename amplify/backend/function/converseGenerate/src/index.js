const AWS = require("aws-sdk");
const OpenAI = require("openai-api");

exports.handler = async (event) => {
  const { Parameters } = await new AWS.SSM()
    .getParameters({
      Names: ["OPENAI_API_KEY"].map((secretName) => process.env[secretName]),
      WithDecryption: true,
    })
    .promise();

  const OPENAI_API_KEY = Parameters[0].Value;
  const prompt = event.arguments.prompt;
  const stops = event.arguments.stops;
  const openai = new OpenAI(OPENAI_API_KEY);

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

  return JSON.stringify(completion.data);
};
