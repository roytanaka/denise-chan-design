import React from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { Link } from 'gatsby';
import { ProjectType } from '../../pages/index';
import {
  portfolioGrid,
  portfolioTitle,
  portfolioLink,
  portfolioItem,
} from './Portfolio.module.scss';

type ProjectPropType = {
  projects: ProjectType[];
};

const Portfolio = ({ projects }: ProjectPropType) => {
  return (
    <ul className={portfolioGrid}>
      {projects.map(({ node }) => {
        const img = getImage(node.frontmatter.featuredImage);
        if (!img) return;
        return (
          <li className={portfolioItem} key={node.id}>
            <Link className={portfolioLink} to={node.frontmatter.slug}>
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
