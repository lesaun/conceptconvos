/* Amplify Params - DO NOT EDIT
	API_CONCEPTCONVOS_GRAPHQLAPIENDPOINTOUTPUT
	API_CONCEPTCONVOS_GRAPHQLAPIIDOUTPUT
	API_CONCEPTCONVOS_GRAPHQLAPIKEYOUTPUT
	AUTH_CONCEPTCONVOSF36A0210_USERPOOLID
	ENV
	REGION
Amplify Params - DO NOT EDIT */

var express = require('express')
var bodyParser = require('body-parser')
var awsServerlessExpressMiddleware = require('aws-serverless-express/middleware')

var app = express()
app.use(bodyParser.json())
app.use(awsServerlessExpressMiddleware.eventContext())

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "*")
  next()
});

app.get('/requestai', function(req, res) {
  const { Parameters: [ { Value: OPENAI_API_KEY } ] } = await (new aws.SSM())
    .getParameters({
      Names: ["OPENAI_API_KEY"].map(secretName => process.env[secretName]),
      WithDecryption: true,
    })
    .promise();

  res.json({success: 'get call succeed!', url: req.url});
});

app.listen(3000, function() {
    console.log("App started")
});

module.exports = app
