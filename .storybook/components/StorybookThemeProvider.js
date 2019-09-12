import React, { useState, useEffect } from 'react'
import addons from '@storybook/addons'
import { ThemeProvider } from 'styled-components'

const channel = addons.getChannel()

const KEY = 'DARK_MODE'

export function StorybookThemeProvider({ theme, children }) {
  const [isDark, setDark] = useState(true)

  const { dark, light } = theme

  useEffect(() => {
    channel && channel.on(KEY, setDark)
  }, [channel, setDark])

  return <ThemeProvider theme={isDark ? dark : light}>{children}</ThemeProvider>
}
