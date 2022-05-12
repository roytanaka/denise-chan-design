import * as React from 'react';
import { Link, graphql, PageProps } from 'gatsby';
import Layout from '../components/Layout';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import Slider from '../components/Slider';

export type ImageProps = {
  secure_url: string;
  context: {
    custom?: {
      alt: string;
    };
  };
  id: string;
};
type DataProps = {
  allCloudinaryMedia: {
    nodes: ImageProps[];
  };
  mdx: {
    frontmatter: {
      slug: string;
      tags: string[];
      title: string;
    };
    body: string;
  };
};

const ProjectTemplate = ({ data }: PageProps<DataProps>) => {
  const { title, tags } = data.mdx.frontmatter;

  const { nodes: images } = data.allCloudinaryMedia;

  const { body } = data.mdx;

  return (
    <Layout>
      <h1>{title}</h1>
      <MDXRenderer>{body}</MDXRenderer>
      {images && <Slider images={images} />}
    </Layout>
  );
};

export default ProjectTemplate;

export const query = graphql`
  query getProjects($slug: String!, $projectFolder: String!) {
    allCloudinaryMedia(filter: { folder: { eq: $projectFolder } }) {
      nodes {
        secure_url
        context {
          custom {
            alt
          }
        }
        id
        folder
      }
    }
    mdx(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        slug
        tags
        title
      }
      body
    }
  }
`;
