import { Link } from 'gatsby';
import React from 'react';
import { Helmet } from 'react-helmet';
import Layout from '../../components/Layout';
import { thankYou } from './ThankYou.module.scss';

const ThankYou = () => {
  return (
    <Layout>
      <Helmet title="Thank you" />

      <section className="container">
        <div className={`flow-content ${thankYou}`}>
          <h1>Message received</h1>
          <p>Thanks for reaching out. Let’s talk soon.</p>
          <Link className="btn" to="/" replace>
            Back Home
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default ThankYou;
