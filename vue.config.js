const StyleLintWebpackPlugin = require('stylelint-webpack-plugin');

module.exports = {
  css: {
    sourceMap: true,
  },
  configureWebpack: config => {
    config.devtool = 'source-map';
    config.plugins.push(
      new StyleLintWebpackPlugin({
        files: ['**/*.{vue,htm,html,css,sss,less,scss,sass}'],
      })
    );
  },
};
