const merge = require('webpack-merge')
const PATH = require('./path')
const path = require('path')

module.exports = function({ config }, env) {
  const ourConfig = {
    devtool: 'eval-source-map',

    resolve: {
      modules: ['node_modules'],
      symlinks: true,
      extensions: ['.js', '.css'],
      alias: {
        '@helpers': PATH.storybook,
        '@resources': `${PATH.source}/resources`,
        '@components': `${PATH.source}/components`
      }
    },

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
