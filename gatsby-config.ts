import type { GatsbyConfig } from 'gatsby';

const config: GatsbyConfig = {
  siteMetadata: {
    title: 'Denise Chan',
    titleTemplate: '%s · The Real Hero',
    description: 'Senior Visual Designer',
    siteUrl: 'https://www.denisechan.design',
    // image: "/snape.jpg", // Path to the image placed in the 'static' folder, in the project's root directory.
    instagramUrl: 'https://www.instagram.com/denisechandesign',
    linkedinUrl: 'Senior Visual Designer',
  },
  plugins: [
    'gatsby-plugin-postcss',
    'gatsby-plugin-image',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-mdx',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/',
      },
      __key: 'images',
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: './src/pages/',
      },
      __key: 'pages',
    },
  ],
};

export default config;
