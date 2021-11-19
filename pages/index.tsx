import * as React from 'react';
import type { NextPage } from 'next'
import Head from 'next/head'

import Amplify, { API } from "aws-amplify";
import { AmplifyAuthenticator } from "@aws-amplify/ui-react";
// Button imports
import Link from 'next/link'
import Button from '@mui/material/Button';

import styles from '../styles/Home.module.css'
import awsconfig from "../aws-exports";

Amplify.configure(awsconfig);

const Home: NextPage = () => {
  return (
    <AmplifyAuthenticator>
      <div>
      <h2>
        <Button variant="outlined">
          <Link href="/converse">
            <a>Converse</a>
          </Link>
        </Button>
      </h2>
      </div>
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
