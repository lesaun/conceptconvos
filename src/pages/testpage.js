import Head from "next/head";

export async function getServerSideProps() {
  return {
    props: {
      text: "from server",
    },
  };
}

export default function Converse({ server }) {
  return (
    <div>
      <Head>
        <title>conceptconvos</title>
        <meta name="description" content="Conversations with concepts." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <p>{server}</p>
    </div>
  );
}
