const path = require('path');

module.exports = {
  entry: './src/Crisp.jsx',
  output: {
    path: path.resolve('dist'),
    filename: 'crisp.js',
    libraryTarget: 'commonjs2',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        use: 'babel-loader',
      },
    ],
  },
};
