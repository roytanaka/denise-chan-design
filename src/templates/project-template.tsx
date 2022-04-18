import * as React from 'react';
import { Link, graphql, PageProps } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import Layout from '../components/Layout';
import { MDXRenderer } from 'gatsby-plugin-mdx';

type DataProps = {
  mdx: {
    frontmatter: {
      title: string;
      featuredImage: string;
      images: [string];
      slug: string;
      tags: [string];
    };
    body: string;
  };
};

const ProjectTemplate = ({ data }: PageProps<DataProps>) => {
  const { title, featuredImage, images, slug, tags } = data.mdx.frontmatter;
  const { body } = data.mdx;

  return (
    <Layout>
      <h1>{title}</h1>
      <pre>
        {featuredImage}
        {JSON.stringify(images, null, 2)}
      </pre>

      <MDXRenderer>{body}</MDXRenderer>
    </Layout>
  );
};

export default ProjectTemplate;

export const query = graphql`
  query getPost($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        featuredImage
        images
        slug
        tags
        title
      }
      body
    }
  }
`;
