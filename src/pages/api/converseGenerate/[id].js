import { withSSRContext } from "aws-amplify";

import { converseGenerate } from "src/graphql/queries";

import { graphqlOperation } from "aws-amplify";
import * as mutations from "src/graphql/mutations";

export default async function handler(req, res) {
  const { id } = req.query;

  const SSR = withSSRContext({ req });
  let apiResult;

  try {
    apiResult = await SSR.API.graphql({
      query: converseGenerate,
      variables: { conversationID: id },
      authMode: "AMAZON_COGNITO_USER_POOLS",
    });
  } catch (e) {
    console.log(e);
  }

  apiResult = JSON.parse(apiResult.data.converseGenerate);
  let generatedResponseText = apiResult[1].choices[0].text.trim();

  SSR.API.graphql(
    graphqlOperation(mutations.createLine, {
      input: {
        conversationID: id,
        speaker: apiResult[0],
        text: generatedResponseText,
      },
    })
  );

  res.status(200).json(generatedResponseText);
}
