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
    const { getByText, getByTestId } = renderWithTheme(<Accordion accordions={accordions} />)
    const header = getByText('Header')
    fireEvent.click(header)
    const body = await waitForElement(() => getByTestId('body-accordion'))
    expect(body).toHaveStyle('display : block')
})

test('expect full size', () => {
    const { container } = renderWithTheme(<Accordion full accordions={accordions} />)
    expect(container.firstChild).toHaveStyleRule('width', '100%')
})

test('expect close body with click', async done => {
    const { getByText, getByTestId } = renderWithTheme(<Accordion accordions={accordions} />)
    const header = getByText('Header')
    fireEvent.click(header)
    const body = await waitForElement(() => getByTestId('body-accordion'))
    expect(body).toHaveStyle('display : block')
    fireEvent.click(header)
    setTimeout(() => {
        const bodyClose = getByTestId('body-accordion')
        expect(bodyClose).toHaveStyle('display : none')
        done()
    }, 400)
})