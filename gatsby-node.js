const path = require('path');
exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        '@styles': path.resolve(__dirname, 'src/styles'),
        '@images': path.resolve(__dirname, 'src/images'),
      },
    },
  });
};

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions;

  const {
    data: {
      allMdx: { edges: posts },
    },
  } = await graphql(`
    {
      allMdx {
        edges {
          node {
            frontmatter {
              slug
            }
          }
        }
      }
    }
  `);

  posts.forEach(({ node }) => {
    const { slug } = node.frontmatter;
    createPage({
      path: slug,
      component: require.resolve('./src/templates/project-template.tsx'),
      context: {
        projectFolder: `denisechan-design/${slug}`,
        slug: slug,
      },
    });
  });
};
