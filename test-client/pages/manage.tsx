import Head from 'next/head';
import React from 'react';
import Layout from '../components/layout';
import fetchFact from '../communications/api';
import ManageFacts from '../components/manage-facts';

// TODO

export async function getServerSideProps() {
  const facts = await fetchFact();

  return {
    props: { facts },
  }
}

export default function Manage({ facts }) {
  return (
    <Layout>
      <Head>
        <title>Manage Facts</title>
      </Head>
      <ManageFacts facts={ facts }></ManageFacts>
    </Layout>
  );
};
