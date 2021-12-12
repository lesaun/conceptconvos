import Head from "next/head";
import { withSSRContext } from "aws-amplify";
import { createConversation } from "src/graphql/mutations";

export async function getServerSideProps({ req, params }) {
  const SSR = withSSRContext({ req });

  try {
    await SSR.Auth.currentSession();
  }
  catch {
    return {
      redirect: {
        permanent: false,
        destination: "/login",
      },
    };
  }

  let destination = "/";

  try {
    const result = await SSR.API.graphql({
      query: createConversation,
      variables: {
        input: {
          title: params.title,
          speakers: ["Inquisitor", params.title],
          defaultUserSpeaker: "Inquisitor",
          tempature: 0.9,
        },
      },
      authMode: "AMAZON_COGNITO_USER_POOLS",
    });
    destination = `/${result.data.createConversation.id}`;
  } finally {
    return {
      redirect: {
        permanent: false,
        destination: destination,
      },
    }
  }
}

export default function Converse(props) {
  return (
    <div>
      <Head>
        <title>conceptconvos</title>
        <meta name="description" content="Conversations with concepts." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </div>
  );
}
