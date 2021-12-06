/* Amplify Params - DO NOT EDIT
	API_CONCEPTCONVOSQL_CONVERSATIONTABLE_ARN
	API_CONCEPTCONVOSQL_CONVERSATIONTABLE_NAME
	API_CONCEPTCONVOSQL_GRAPHQLAPIIDOUTPUT
	API_CONCEPTCONVOSQL_LINETABLE_ARN
	API_CONCEPTCONVOSQL_LINETABLE_NAME
	ENV
	REGION
Amplify Params - DO NOT EDIT */

const AWS = require("aws-sdk");
const OpenAI = require("openai-api");
const docClient = new AWS.DynamoDB.DocumentClient();

const getConversationTitleAndLines = async (conversationID) => {
  let conversationTitle;
  let conversationLines;

  try {
    const data = await docClient
      .get({
        TableName: process.env.API_CONCEPTCONVOSQL_CONVERSATIONTABLE_NAME,
        Key: {
          id: conversationID,
        },
      })
      .promise();
    conversationTitle = data.Item.title;
    speakers = data.Item.speakers;
  } catch (err) {
    return ["conversation", err, conversationID];
  }

  try {
    const data = await docClient
      .query({
        TableName: process.env.API_CONCEPTCONVOSQL_LINETABLE_NAME,
        IndexName: "byConversation",
        KeyConditionExpression: "conversationID  = :conversation_id",
        ExpressionAttributeValues: { ":conversation_id": conversationID },
        ScanIndexForward: false,
        Limit: 10,
      })
      .promise();
    conversationLines = data.Items;
  } catch (err) {
    return ["lines", err, conversationTitle];
  }

  return [conversationTitle, speakers, conversationLines];
};

function prompt(conversationTitle, conversationLines) {
  return `The following is a conversation between an Inquisitor and the concept of Ontology.

Inquisitor: Hello, what is your definition?
Ontology: That which determines the structure and properties of Being.
Inquisitor: Who invented you?
Ontology: I was not invented. There has been an understanding of me since before language.
Inquisitor: What should I learn about you first?
Ontology: Existence is one.

The following is a conversation between an Inquisitor and the concept of Justice.

Inquisitor: What are you?
Justice: I am that which adjudicates the competing desires of self and other.
Inquisitor: What is your power?
Justice: Necessity is my power.
Inquisitor: Certainly, it seems civilization would collapse without you but nature itself? Is there natural justice?
Justice: Nature as well is bound by my presence. Instincts operate within boundaries of necessity in conflict with other instincts and desires. Necessity decides the outcome and perfects the resolution.
Inquisitor: What do you think of injustice done in your name?
Justice: If a man commits injustice in my name, then that is not what I am. He does not know me.
Inquisitor: What of a government?
Justice: A government is a representation of me. When it acts against me, it has overstepped its mandate. Injustice done in my name is injustice.

The following is a conversation between an Inquisitor and the concept of ${conversationTitle}.

${conversationLines.map((line) => `${line.speaker}: ${line.text}`).join("\n")}
${conversationTitle}:`;
}

exports.handler = async (event) => {
  const { Parameters } = await new AWS.SSM()
    .getParameters({
      Names: ["OPENAI_API_KEY"].map((secretName) => process.env[secretName]),
      WithDecryption: true,
    })
    .promise();

  const OPENAI_API_KEY = Parameters[0].Value;
  const conversationID = event.arguments.conversationID;

  const [conversationTitle, speakers, conversationLines] =
    await getConversationTitleAndLines(conversationID);
  const openai = new OpenAI(OPENAI_API_KEY);

  const gptResponse = await openai.complete({
    engine: "davinci",
    prompt: prompt(conversationTitle, conversationLines),
    maxTokens: 400,
    stop: speakers.map((speaker) => `${speaker}:`),
    temperature: 0.9,
    topP: 1,
    presencePenalty: 0,
    frequencyPenalty: 0,
    bestOf: 1,
    n: 1,
    stream: false,
  });

  return JSON.stringify([conversationTitle, gptResponse.data]);
};
