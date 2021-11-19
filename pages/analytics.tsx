import * as React from 'react';
import type { NextPage } from 'next'
import Head from 'next/head'
import Amplify from "aws-amplify";
import { AmplifyAuthenticator } from "@aws-amplify/ui-react";
import Link from 'next/link'
import Button from '@mui/material/Button';

import styles from '../styles/Home.module.css'
import awsconfig from "../aws-exports";
import Graph from '../components/analytics/Graph';

Amplify.configure(awsconfig);

const Analytics: NextPage = () => {
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
          <Graph/>
        </main>
      </div>
    </AmplifyAuthenticator>
  )
}

export default Analytics
