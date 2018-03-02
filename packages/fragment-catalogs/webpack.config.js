var webpack = require('webpack')

module.exports = {
  entry: './app/index.js',
  devtool: 'source-map',
  output: {
    path: __dirname + '/public',
    publicPath: 'http://localhost:8181/public/',
    filename: 'bundle.js',
    libraryTarget: 'amd'
  },
  module: {
    loaders: [
      {
        test: /\.js(x)?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.scss$/,
        loader: 'style-loader!css-loader!sass-loader'
      }
    ]
  },
  externals: {
    'react': 'react',
    'react-dom': 'react-dom',
    'react-router': 'react-router',
    'classnames': 'classnames'
  }
}