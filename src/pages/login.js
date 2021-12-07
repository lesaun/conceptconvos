import { useEffect } from "react";
import Head from "next/head";
import { Auth } from "aws-amplify";
import { withSSRContext } from "aws-amplify";
import { useRouter } from "next/router";

export async function getServerSideProps({ req }) {
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
}

export default function Login(props) {
  const router = useRouter();

  useEffect(() => {
    const getUser = async () => {
      try {
        const authenticatedUser = await Auth.currentAuthenticatedUser();
        router.push("/");
      } catch {
        router.push("/login");
      }
    };
    getUser();
  }, [router]);

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
