module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        useBuiltIns: 'usage',
        corejs: 3
      }
    ],
    '@babel/preset-react'
  ],
  plugins: [
    '@babel/plugin-transform-spread',
    '@babel/plugin-proposal-class-properties',
    '@babel/plugin-syntax-dynamic-import',
    '@babel/plugin-transform-modules-commonjs',
    '@babel/plugin-proposal-export-default-from'
  ],
  env: {
    development: {
      plugins: [
        [
          'styled-components',
          {
            minify: false
          }
        ]
      ]
    },
    production: {
      plugins: [
        'transform-react-remove-prop-types',
        [
          'styled-components',
          {
            displayName: false
          }
        ]
      ]
    }
  }
}
