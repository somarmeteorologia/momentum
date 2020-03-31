import React from 'react'
import { render } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'

import { Theme } from '@components/Theme'

export const renderWithTheme = (ui, theme = Theme.light) => {
  return {
    ...render(<ThemeProvider theme={theme}>{ui}</ThemeProvider>)
  }
}
