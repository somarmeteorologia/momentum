const webpack = require('webpack')

const PATH = require('./path')

module.exports = {
  entry: {
    index: [`${PATH.source}/polyfill.js`, `${PATH.source}/index.js`]
  },

  mode: 'production',
  devtool: 'source-map',

  output: {
    publicPath: '/',
    path: PATH.build
  },

  resolve: {
    modules: ['node_modules'],
    extensions: ['.js'],
    symlinks: true,
    alias: {
      '@components': `${PATH.source}/components`,
      '@resources': `${PATH.source}/resources`
    }
  },
  node: {
    fs: 'empty'
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.css$/,
        use: [{ loader: 'style-loader' }, { loader: 'css-loader' }]
      },
      {
        test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 50000,
              mimetype: 'application/font-woff',
              name: './fonts/[name].[ext]'
            }
          }
        ]
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        use: [
          {
            loader: 'file-loader'
          }
        ]
      }
    ]
  }
}
