import Head from "next/head";
import { Auth } from "aws-amplify";
import { withSSRContext } from "aws-amplify";
import { GetServerSideProps } from "next";

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const SSR = withSSRContext({ req });

  try {
    await SSR.Auth.currentSession();
    return {
      redirect: {
        permanent: false,
        destination: "/",
      },
    };
  } finally {
    return { props: {} };
  }
};

export default function Login() {
  Auth.federatedSignIn();

  return (
    <div>
      <Head>
        <title>conceptconvos</title>
        <meta name="description" content="Conversations with concepts." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div></div>
    </div>
  );
}
