const webpack = require('webpack');

module.exports = {
  webpack: (config) => {
    config.plugins.push(
      new webpack.DefinePlugin({
        'process.env.PUBLICAPI': JSON.stringify(process.env.PUBLICAPI),
      })
    );

    return config;
  },
};
