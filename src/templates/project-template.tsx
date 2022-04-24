import * as React from 'react';
import { Link, graphql, PageProps } from 'gatsby';
import { ImageDataLike } from 'gatsby-plugin-image';
import Layout from '../components/Layout';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import Slider from '../components/Slider';

export type ImageProps = {
  description: string;
  file: {
    childImageSharp: ImageDataLike;
    id: string;
  };
};
type DataProps = {
  mdx: {
    frontmatter: {
      images: ImageProps[];
      slug: string;
      tags: string[];
      title: string;
    };
    body: string;
  };
  thumbs: {
    frontmatter: {
      images: ImageProps[];
    };
  };
};

const ProjectTemplate = ({ data }: PageProps<DataProps>) => {
  const { title, images, tags } = data.mdx.frontmatter;
  const { images: thumbs } = data.thumbs.frontmatter;

  const { body } = data.mdx;

  return (
    <Layout>
      <h1>{title}</h1>
      <MDXRenderer>{body}</MDXRenderer>
      {images && <Slider images={images} thumbs={thumbs} />}
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
    thumbs: mdx(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        images {
          description
          file {
            childImageSharp {
              gatsbyImageData(width: 150, formats: [AUTO, WEBP, AVIF])
            }
          }
        }
      }
    }
  }
`;
