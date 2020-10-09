/* eslint-disable */
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = {
  poweredByHeader: false,
  webpack: config => {
    if (config.resolve.plugins) {
      config.resolve.plugins.push(new TsconfigPathsPlugin());
    } else {
      config.resolve.plugins = [new TsconfigPathsPlugin()];
    }
    return config;
  },
  devIndicators: {
    autoPrerender: false,
  },
};
