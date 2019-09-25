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
    path: PATH.build,
    library: '',
    libraryTarget: 'umd'
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

  plugins: [
    new webpack.EnvironmentPlugin({
      ENV: JSON.stringify(process.env.ENV)
    })
  ],

  externals: {
    react: {
      root: 'React',
      commonjs2: 'react',
      commonjs: 'react',
      amd: 'react'
    },
    'react-dom': {
      root: 'ReactDOM',
      commonjs2: 'react-dom',
      commonjs: 'react-dom',
      amd: 'react-dom'
    },
    'styled-components': {
      root: 'styled-components',
      commonjs2: 'styled-components',
      commonjs: 'styled-components',
      amd: 'styled-components'
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
