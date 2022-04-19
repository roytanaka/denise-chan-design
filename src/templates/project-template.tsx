import * as React from 'react';
import { Link, graphql, PageProps } from 'gatsby';
import { GatsbyImage, getImage, ImageDataLike } from 'gatsby-plugin-image';
import Layout from '../components/Layout';
import { MDXRenderer } from 'gatsby-plugin-mdx';

type DataProps = {
  mdx: {
    frontmatter: {
      title: string;
      images: ImageDataLike[];
      slug: string;
      tags: string[];
    };
    body: string;
  };
};

const ProjectTemplate = ({ data }: PageProps<DataProps>) => {
  const { title, images, slug, tags } = data.mdx.frontmatter;

  const { body } = data.mdx;

  return (
    <Layout>
      <h1>{title}</h1>
      <MDXRenderer>{body}</MDXRenderer>
      {images &&
        images.map((img) => {
          const image = getImage(img);
          if (!image) return;
          return <GatsbyImage image={image} alt="" />;
        })}
    </Layout>
  );
};

export default ProjectTemplate;

export const query = graphql`
  query getProjects($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        images {
          childImageSharp {
            gatsbyImageData(width: 100, formats: [AUTO, WEBP, AVIF])
          }
        }
        slug
        tags
        title
      }
      body
    }
  }
`;
