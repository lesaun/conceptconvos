/*
Use the following code to retrieve configured secrets from SSM:

const aws = require('aws-sdk');

const { Parameters } = await (new aws.SSM())
  .getParameters({
    Names: ["OPENAI_API_KEY"].map(secretName => process.env[secretName]),
    WithDecryption: true,
  })
  .promise();

Parameters will be of the form { Name: 'secretName', Value: 'secretValue', ... }[]
*/
/* Amplify Params - DO NOT EDIT
	API_CONCEPTCONVOS_GRAPHQLAPIENDPOINTOUTPUT
	API_CONCEPTCONVOS_GRAPHQLAPIIDOUTPUT
	API_CONCEPTCONVOS_GRAPHQLAPIKEYOUTPUT
	AUTH_CONCEPTCONVOSF36A0210_USERPOOLID
	ENV
	REGION
Amplify Params - DO NOT EDIT */
const aws = require('aws-sdk');

exports.handler = async (event) => {
    const { Parameters: { Name: secretName, Value: OPENAI_API_KEY } } = await (new aws.SSM())
      .getParameters({
        Names: ["OPENAI_API_KEY"].map(secretName => process.env[secretName]),
        WithDecryption: true,
      })
      .promise();

    const response = {
        statusCode: 200,
        body: JSON.stringify(secretName),
    };

    return response;
};
