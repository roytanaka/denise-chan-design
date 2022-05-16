import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import { Helmet } from 'react-helmet';
import Layout from '../components/Layout';

const About = () => {
  return (
    <Layout>
      <Helmet title="About" />

      <section className="wrapper about-content">
        <div className="flow-content">
          <h1>About me</h1>
          <p>
            From early beginnings in editorial design at two national magazines,
            I've dedicated much of my career to designing for retail brands like
            Club Monaco, The Body Shop, Shoppers Drug Mart and Canadian Tire. In
            my role at Canadian Tire, I quickly earned the trust of the
            management team and was rewarded with high-profile projects.
          </p>
          <p>
            For the opening of the Edmonton flagship store, I helped oversee and
            coordinate the P.O.P. team with artwork direction and quality
            control. For in-store brand launches, I successfully balanced the
            needs of cross-functional teams to deliver solutions that aligned
            with business objectives.
          </p>
          <p>
            Then I followed my heart (and my appetite) to the hospitality
            industry. In pursuit of elevating the brands I represented, I've art
            directed photoshoots with agency partners, conducted in-house
            product photography and styled food.
          </p>
          <p>
            Now I'm humbled to be a visual designer at a boutique digital agency
            where I am inspired by my co-workers every day.&nbsp;
          </p>
        </div>
        <StaticImage
          className="about-content__portrait"
          src="../images/denise-chan-portrait.jpeg"
          width={420}
          alt="Denise Chan"
        />
      </section>
    </Layout>
  );
};

export default About;
