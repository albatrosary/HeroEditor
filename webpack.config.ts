/// <reference path="./node_modules/@types/node/index.d.ts" />
const path = require('path');

module.exports = {
  entry: {
    'bootstrap': './src/main.ts',
    'bootstrap.aot': './src/main.aot.ts'
  },

  output: {
    path: './bin',
    filename: '[name].bundle.js'
  },

  module: {
    loaders: [
      {
        test: /\.ts$/,
        loader: 'ts',
        query: {
          configFileName: 'tsconfig.json'
        }
      }
    ]
  },

  resolve: {
    root: [ path.join(__dirname, 'src') ],
    extensions: ['', '.ts', '.js']
  },

  devtool: false
};
