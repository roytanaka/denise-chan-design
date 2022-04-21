import * as React from 'react';
import { Link, graphql, PageProps } from 'gatsby';
import { ImageDataLike } from 'gatsby-plugin-image';
import Layout from '../components/Layout';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import Slider from '../components/Slider';

type DataProps = {
  mdx: {
    frontmatter: {
      title: string;
      images: any[];
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
      {images && <Slider images={images} />}
    </Layout>
  );
};

export default ProjectTemplate;

export const query = graphql`
  query getProjects($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        images {
          description
          file {
            childImageSharp {
              gatsbyImageData(
                width: 800
                formats: [AUTO, WEBP, AVIF]
                aspectRatio: 1
                transformOptions: { fit: CONTAIN }
                backgroundColor: "rgb(255,255,255)"
              )
            }
            id
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
