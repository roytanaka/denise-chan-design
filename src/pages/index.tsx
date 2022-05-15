import * as React from 'react';
import Layout from '../components/Layout';
import { useStaticQuery, graphql, Link } from 'gatsby';
import { ImageDataLike } from 'gatsby-plugin-image';
import Portfolio from '../components/Portfolio';

export type ProjectType = {
  node: {
    frontmatter: {
      title: string;
      slug: string;
      featuredImage: ImageDataLike;
    };
    id: string;
  };
};

type MdxType = {
  allMdx: {
    edges: ProjectType[];
  };
};

const getProjects = graphql`
  {
    allMdx {
      edges {
        node {
          frontmatter {
            title
            slug
            featuredImage {
              childImageSharp {
                gatsbyImageData(
                  formats: [AUTO, WEBP, AVIF]
                  layout: CONSTRAINED
                )
              }
            }
          }
          id
        }
      }
    }
  }
`;

// markup
const IndexPage = () => {
  const {
    allMdx: { edges: projects },
  }: MdxType = useStaticQuery(getProjects);

  return (
    <Layout>
      <section>
        <h1 className="visually-hidden">Home: Denise Chan</h1>
        <Portfolio projects={projects} />
      </section>
    </Layout>
  );
};

export default IndexPage;
