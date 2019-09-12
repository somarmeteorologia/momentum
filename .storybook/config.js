import React from 'react'
import { configure, addDecorator } from '@storybook/react'
import { setOptions } from '@storybook/addon-options'
import { withNotes } from '@storybook/addon-notes'
import { addParameters } from '@storybook/react'

import { Theme } from '@components/Theme'

import { StorybookThemeProvider } from './components'

const { dark, light } = Theme

addParameters({
  darkMode: {
    dark: {
      appContentBg: dark.bg.primary,
      appBg: dark.bg.secondary,
      barBg: dark.bg.secondary,
      barTextColor: dark.text.primary,
      textColor: dark.text.primary
    },
    light: {
      appContentBg: light.bg.primary,
      appBg: light.bg.secondary,
      barBg: light.bg.secondary,
      barTextColor: light.text.primary,
      textColor: light.text.primary
    }
  }
})

addDecorator(story => (
  <StorybookThemeProvider theme={Theme}>{story()}</StorybookThemeProvider>
))

addDecorator(withNotes)

setOptions({
  hierarchySeparator: /\//,
  hierarchyRootSeparator: /\|/,
  name: 'Momentum UI',
  url: 'http://momentum.somar.io'
})

const req = require.context('../src', true, /.stories.js$/)
function loadStories() {
  req.keys().forEach(filename => req(filename))
}

configure(loadStories, module)
