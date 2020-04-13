import React from 'react'
import { render, wait } from '@testing-library/react'

import { renderWithTheme, withTheme } from '../../test-utilities'

import { Theme } from '@components/Theme'
import { Icon } from '@components/Icon'
import { Text } from '@components/Text'
import { Notification } from '@components/Notification'

const { notification } = Theme.light

const Notificable = ({
  isOpen = false,
  state = Notification.state.primary
}) => (
  <Notification
    icon={({ color }) => <Icon name="disabled" color={color} />}
    state={state}
    toClose={() => {}}
    isOpen={isOpen}
    title={({ color }) => (
      <Text.Heading size={Text.Heading.size.sixteen} color={color}>
        Título
      </Text.Heading>
    )}
    description={({ color }) => (
      <Text size={Text.size.thirteen} color={color}>
        Descrição
      </Text>
    )}
  />
)

test('Not expect visual regression', () => {
  const { container } = renderWithTheme(<Notificable />)

  expect(container.firstChild).toMatchSnapshot()
})

const states = ['success', 'warning', 'primary', 'danger']

test('Expect correct state', () => {
  const { rerender, getByTestId } = render(
    withTheme(<Notificable isOpen={true} />)
  )

  states.forEach(state => {
    rerender(withTheme(<Notificable state={Notification.state[state]} />))

    expect(getByTestId('state')).toHaveStyleRule(
      'background-color',
      notification.state[state]
    )
  })
})

test('Expect not is open, after open', async () => {
  const { getByTestId, rerender } = render(
    withTheme(<Notificable isOpen={false} />)
  )

  expect(getByTestId('notification')).not.toBeVisible()

  rerender(withTheme(<Notificable isOpen={true} />))

  await wait(
    () => {
      expect(getByTestId('notification')).toBeVisible()
    },
    { interval: 500 }
  )
})
