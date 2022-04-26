const postcssPresetEnv = require('postcss-preset-env');

module.exports = {
  // only vars used are in build output
  plugins: [
    postcssPresetEnv({
      stage: 1,
      features: {
        'custom-media-queries': {
          importFrom: 'node_modules/open-props/media.min.css',
        },
      },
    }),
  ],
};
