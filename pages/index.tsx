import type { NextPage } from 'next'
import { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

import Amplify, { API } from "aws-amplify";
import {AmplifyAuthenticator, AmplifySignOut} from "@aws-amplify/ui-react";
import awsconfig from "../aws-exports";

Amplify.configure(awsconfig);

/*
export const getServerSideProps: GetServerSideProps = async (context) => {
  console.log('im here?')
  const data = await API.get('api2a6401ae', '/api/requestai', {})
  console.log(data)

  return {
    props: {
      data,
    },
  }
}
*/

const Home: NextPage = () => {
  return (
    <AmplifyAuthenticator>
      <div>
        <Head>
          <title>conceptconvos</title>
          <meta name="description" content="Conversations with concepts." />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className={styles.main}>
          <h1 className={styles.title}>
            Whoa Some Text 
          </h1>
        </main>
      </div>
    </AmplifyAuthenticator>
  )
}

export default Home
