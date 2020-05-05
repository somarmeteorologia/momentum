const merge = require('webpack-merge')
const Dotenv = require('dotenv-webpack')

const PATH = require('./path')

module.exports = function({ config }) {
  const ourConfig = {
    devtool: 'eval-source-map',

    resolve: {
      modules: ['node_modules'],
      symlinks: true,
      extensions: ['.js', '.css'],
      alias: {
        '@helpers': PATH.storybook,
        '@environment': `${PATH.source}/environment`,
        '@resources': `${PATH.source}/resources`,
        '@components': `${PATH.source}/components`
      }
    },

    plugins: [new Dotenv()],

    module: {
      rules: [
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
          test: /\.(png|jpg|gif)$/,
          use: [
            {
              loader: 'file-loader'
            }
          ]
        }
      ]
    }
  }

  return merge(config, ourConfig)
}
