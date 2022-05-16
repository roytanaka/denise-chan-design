import * as React from 'react';
import { Helmet } from 'react-helmet';
import Layout from '../components/Layout';
import Portfolio from '../components/Portfolio';

const IndexPage = () => {
  return (
    <Layout>
      <Helmet title="Home" />
      <section>
        <h1 className="visually-hidden">Home: Denise Chan</h1>
        <Portfolio />
      </section>
    </Layout>
  );
};

export default IndexPage;
