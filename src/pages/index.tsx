import * as React from 'react';
import Layout from '../components/Layout';
import { useStaticQuery, graphql, Link } from 'gatsby';

type ProjectType = {
  node: {
    frontmatter: {
      title: string;
      slug: string;
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
      <main>
        <h1>Home: Denise Chan</h1>
        <pre>{JSON.stringify(projects, null, 2)}</pre>
        <ul>
          {projects.map(({ node }) => (
            <li key={node.id}>
              <Link to={node.frontmatter.slug}>{node.frontmatter.title}</Link>
            </li>
          ))}
        </ul>
      </main>
    </Layout>
  );
};

export default IndexPage;
