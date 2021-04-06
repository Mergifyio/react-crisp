const path = require('path');

module.exports = [
  {
    entry: './src/Crisp.jsx',
    output: {
      path: path.resolve(__dirname, './dist/web/'),
      filename: 'crisp-web.js',
      library: {
        type: 'commonjs2',
      },
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
  },
  {
    entry: './src/Crisp.jsx',
    experiments: {
      outputModule: true,
    },
    output: {
      path: path.resolve(__dirname, './dist/module/'),
      filename: 'crisp-module.js',
      library: {
        type: 'module',
      },
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
  },
];
