const { join } = require('path')

module.exports = {
  source: join(process.cwd(), 'src'),
  storybook: join(process.cwd(), '.storybook')
}
