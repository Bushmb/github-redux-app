var path = require('path');

var webpack = require('webpack');

module.exports = {
    entry: path.resolve(__dirname, 'js/index.js'),
    output: {
        path: path.resolve(__dirname, 'build/js'),
        filename: 'index.js',
    },
    devtool: 'inline-source-map',
    module: {
      loaders: [
        {
          test: /\.js$/,
          exclude: /(node_modules)/,
          loader: 'babel',
        },
        // {
        //   test: /\.(eot|svg|ttf|woff|woff2)$/,
        //   loader: 'file?name=/fonts/[name].[ext]'
        // }
      ]
    }
};
