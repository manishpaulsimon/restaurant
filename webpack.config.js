const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
          test: /\.css$/, // Targets all CSS files
          use: ['style-loader', 'css-loader'] // Applies both loaders
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html/'
    }),
  ],
  mode: 'development',
};