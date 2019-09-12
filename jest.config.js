const PATH = require('./path')

module.exports = {
  setupFilesAfterEnv: ['./rtl.setup.js'],
  moduleFileExtensions: ['js'],
  verbose: true,
  moduleNameMapper: {
    '@components(.*)$': `${PATH.source}/components/$1`
  },
  testPathIgnorePatterns: ['/node_modules/'],
  transform: {
    '^.+\\.js$': 'babel-jest'
  }
}
