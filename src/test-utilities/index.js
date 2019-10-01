import React from 'react'
import { render } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'

import { Theme } from '@components/Theme'

function renderWithTheme(ui) {
    return {
        ...render(
            <ThemeProvider theme={Theme.light}>
                {ui}
            </ThemeProvider>
        )
    }
}

export {
    renderWithTheme
}