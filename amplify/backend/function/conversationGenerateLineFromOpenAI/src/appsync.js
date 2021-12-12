const axios = require('axios');
const graphql = require('graphql');
const { print } = graphql;

async function executeQuery(query, operationName, variables, authorization) {
  try {
    const graphqlData = await axios({
      url: process.env.API_CONCEPTCONVOSQL_GRAPHQLAPIENDPOINTOUTPUT,
      method: 'post',
      headers: {
        'Authorization': authorization
      },
      data: {
        query: print(query),
        variables,
      }
    });

    return graphqlData.data.data[operationName];
  } catch (err) {
    console.log('error posting to appsync: ', err);
  } 
}

exports.executeQuery = executeQuery;