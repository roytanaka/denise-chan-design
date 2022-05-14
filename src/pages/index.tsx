import * as React from 'react';
import Layout from '../components/Layout';
import { useStaticQuery, graphql, Link } from 'gatsby';
import { GatsbyImage, getImage, ImageDataLike } from 'gatsby-plugin-image';

type ProjectType = {
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
                gatsbyImageData(width: 800, formats: [AUTO, WEBP, AVIF])
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
      <section className="container">
        <h1 className="visually-hidden">Home: Denise Chan</h1>
        <ul >
          {projects.map(({ node }) => {
            const img = getImage(node.frontmatter.featuredImage);
            if (!img) return;
            return (
              <li key={node.id}>
                <GatsbyImage image={img} alt="" />
                <Link to={node.frontmatter.slug}>{node.frontmatter.title}</Link>
              </li>
            );
          })}
        </ul>
      </section>
    </Layout>
  );
};

export default IndexPage;
