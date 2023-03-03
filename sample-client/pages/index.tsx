import React from 'react';
import fetchFact from '../communications/sample-api';
import Layout from '../components/layout';
import GetFact from '../components/get-fact';

export default function Home() {
  return (
    <Layout>
      <GetFact fetch={ fetchFact }></GetFact>
    </Layout>
  );
};
