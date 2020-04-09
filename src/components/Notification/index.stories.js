import React, { useState } from 'react'
import styled from 'styled-components'
import v4 from 'uuid/v4'
import { storiesOf } from '@storybook/react'

import { GROUPS } from '@helpers/hierarchySeparators'
import { Container } from '@helpers/components/Container'

import { Reset } from '@components/Reset'
import { Notification } from '@components/Notification'
import { Button } from '@components/Button'
import { Icon } from '@components/Icon'
import { Text } from '@components/Text'

const { keys } = Object

const generatePosition = state => {
  const [one, two, three] = [...keys(Notification.position)].slice(0, 3)

  const values = {
    primary: one,
    danger: two,
    warning: three
  }

  return values[state]
}

const Containerable = styled(Container)`
  flex-wrap: wrap;
  justify-content: space-evenly;
`

const Toggle = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false)

  const toClose = () => setIsOpen(false)

  return (
    <>
      <Button onClick={() => setIsOpen(true)}>Open Notifications</Button>
      {children({ isOpen, toClose })}
    </>
  )
}

storiesOf(`${GROUPS.COMPONENTS}|Notification`, module)
  .addDecorator(story => (
    <Containerable>
      <Reset />
      {story()}
    </Containerable>
  ))
  .add('Default', () => (
    <>
      <Toggle>
        {({ isOpen, toClose }) => (
          <Notification
            icon={({ color }) => <Icon name="disabled" color={color} />}
            state={Notification.state.primary}
            toClose={toClose}
            isOpen={isOpen}
            title={({ color }) => (
              <Text.Heading size={Text.Heading.size.sixteen} color={color}>
                Lorem ipsum dolor sit amet
              </Text.Heading>
            )}
            description={({ color }) => (
              <Text size={Text.size.thirteen} color={color}>
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim id est laborum.
              </Text>
            )}
          />
        )}
      </Toggle>
    </>
  ))
  .add('With duration (5s)', () => (
    <>
      <Toggle>
        {({ isOpen, toClose }) => (
          <Notification
            duration={5}
            icon={({ color }) => <Icon name="disabled" color={color} />}
            state={Notification.state.primary}
            toClose={toClose}
            isOpen={isOpen}
            title={({ color }) => (
              <Text.Heading size={Text.Heading.size.sixteen} color={color}>
                Lorem ipsum dolor sit amet
              </Text.Heading>
            )}
            description={({ color }) => (
              <Text size={Text.size.thirteen} color={color}>
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim id est laborum.
              </Text>
            )}
          />
        )}
      </Toggle>
    </>
  ))
  .add('States', () => (
    <>
      <Toggle>
        {({ isOpen, toClose }) => (
          <>
            {keys(Notification.state).map(item => (
              <Notification
                key={v4()}
                state={item}
                position={generatePosition(item)}
                icon={({ color }) => <Icon name="disabled" color={color} />}
                toClose={toClose}
                isOpen={isOpen}
                title={({ color }) => (
                  <Text.Heading size={Text.Heading.size.sixteen} color={color}>
                    Lorem ipsum dolor sit amet
                  </Text.Heading>
                )}
                description={({ color }) => (
                  <Text size={Text.size.thirteen} color={color}>
                    Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                  </Text>
                )}
              />
            ))}
          </>
        )}
      </Toggle>
    </>
  ))
  .add('Positions', () => (
    <>
      <Toggle>
        {({ isOpen, toClose }) => (
          <>
            {keys(Notification.position).map(pos => (
              <>
                <Notification
                  key={v4()}
                  position={pos}
                  icon={({ color }) => <Icon name="disabled" color={color} />}
                  toClose={toClose}
                  isOpen={isOpen}
                  title={({ color }) => (
                    <Text.Heading
                      size={Text.Heading.size.sixteen}
                      color={color}
                    >
                      Lorem ipsum dolor sit amet
                    </Text.Heading>
                  )}
                  description={({ color }) => (
                    <Text size={Text.size.thirteen} color={color}>
                      Excepteur sint occaecat cupidatat non proident, sunt in
                      culpa qui officia deserunt mollit anim id est laborum.
                    </Text>
                  )}
                />
              </>
            ))}
          </>
        )}
      </Toggle>
    </>
  ))
