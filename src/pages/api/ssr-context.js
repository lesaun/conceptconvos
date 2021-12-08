import Amplify from "aws-amplify";
import { withSSRContext } from "aws-amplify";

import awsconfig from "src/aws-exports";
Amplify.configure({ ...awsconfig, ssr: true });

export default async function handler(req, res) {
  const SSR = withSSRContext({ req });

  try {
    let data = await SSR.Auth.currentSession();
    res.status(200).json(data);
  } catch (err) {
    res.status(200).json(err.toString());
  }
}
