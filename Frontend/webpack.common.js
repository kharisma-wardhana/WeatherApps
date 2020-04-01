const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: './src/app.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      /* rules buat component */
      {
        test: /\.css$/i,
        exclude: /styles/,
        use: ['to-string-loader', 'css-loader'],
      },
      /* rules buat global style */
      {
        test: /\.css$/i,
        include: /styles/,
        use: ['style-loader', 'css-loader'],
      },
      /* rules buat assets images */
      {
        test: /\.(ico|png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: '/images/',
            },
          },
        ],
      },
      {
        test: /^(?!.*\.generated\.ttf$).*\.ttf$/,
        use: ['css-loader', 'fontface-loader'],
      },
      {
        test: /\.generated.(ttf|eot|woff|woff2)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: '/fonts/',
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html',
      favicon: './src/favicon.ico',
    }),
  ],
};
