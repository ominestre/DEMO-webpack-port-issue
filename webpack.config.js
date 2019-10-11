const path = require('path');
const webpack = require('webpack');

module.exports =  {
  mode: 'development',

  entry: {
    main: path.join(__dirname, 'src/main.js'),
  },

  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js',
  },

  devServer: {
    port: 9876,
    contentBase: path.join(__dirname, 'dist'),
  },
};
