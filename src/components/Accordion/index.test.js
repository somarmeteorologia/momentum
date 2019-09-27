import React from 'react'
import { cleanup, fireEvent, waitForElement } from '@testing-library/react'

import { Accordion } from '@components/Accordion'
import { renderWithTheme } from '../../test-utilities'

const accordions = [
    {
        id: 1,
        active: false,
        text: 'foo',
        Header: <div>Header</div>,
        Body: (
            <div>
                Body.
          </div>
        )
    }
]

afterEach(cleanup)

test('expect render with theme', () => {
    const { container } = renderWithTheme(<Accordion accordions={accordions} />)
    expect(container.firstChild).toMatchSnapshot()
})

test('expect open body with click', async () => {
    const { getByText, container } = renderWithTheme(<Accordion accordions={accordions} />)
    const header = getByText('Header')
    fireEvent.click(header)
    const body = await waitForElement(() => container.getElementsByClassName('body')[0])
    expect(body).toHaveStyle('display : block')
})

test('expect full size', () => {
    const { container } = renderWithTheme(<Accordion full accordions={accordions} />)
    expect(container.firstChild).toHaveStyleRule('width', '100%')
})