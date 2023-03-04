import Head from 'next/head';
import React from 'react';
import fetchFact from '../communications/api';
import Layout from '../components/layout';
import GetFact from '../components/get-fact';

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Animal Facts</title>
      </Head>
      <GetFact fetch={ fetchFact }></GetFact>
    </Layout>
  );
};
