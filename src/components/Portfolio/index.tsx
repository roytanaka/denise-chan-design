import React from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { Link, graphql, useStaticQuery } from 'gatsby';
import { ImageDataLike } from 'gatsby-plugin-image';

import {
  portfolioGrid,
  portfolioTitle,
  portfolioLink,
  portfolioItem,
} from './Portfolio.module.scss';

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

const Portfolio = () => {
  const {
    allMdx: { edges: projects },
  }: MdxType = useStaticQuery(getProjects);

  return (
    <ul className={portfolioGrid}>
      {projects.map(({ node }) => {
        const img = getImage(node.frontmatter.featuredImage);
        if (!img) return;
        return (
          <li className={portfolioItem} key={node.id}>
            <Link className={portfolioLink} to={`/${node.frontmatter.slug}`}>
              <GatsbyImage image={img} alt="" />
              <div className={portfolioTitle}>
                <h2>{node.frontmatter.title}</h2>
                <p>
                  - view <span className="visually-hidden">project</span>-
                </p>
              </div>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default Portfolio;
