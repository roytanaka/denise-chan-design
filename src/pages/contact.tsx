import React from 'react';
import { Helmet } from 'react-helmet';
import Layout from '../components/Layout';

const Contact = () => {
  return (
    <Layout>
      <Helmet title="Contact" />

      <section className="container">
        <h1>get in touch</h1>
        <form
          className="form"
          method="post"
          netlify-honeypot="bot-field"
          data-netlify="true"
          name="contact"
        >
          <input type="hidden" name="bot-field" />
          <input type="hidden" name="form-name" value="contact" />
          <div className="form-input">
            <label htmlFor="fname">First name</label>
            <input id="fname" type="text" name="fname" />
          </div>
          <div className="form-input">
            <label htmlFor="lname">Last name</label>
            <input id="lname" type="text" name="lname" />
          </div>
          <div className="form-input span-2">
            <label htmlFor="email">Email</label>
            <input id="email" type="email" name="email" />
          </div>
          <div className="form-input span-2">
            <label htmlFor="message">Message</label>
            <textarea rows={3} id="message" name="message"></textarea>
          </div>
          <div>
            <button type="submit">Submit</button>
          </div>
        </form>
      </section>
    </Layout>
  );
};

export default Contact;
