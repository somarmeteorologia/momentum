import React, { useState } from 'react'
import styled from 'styled-components'
import { storiesOf } from '@storybook/react'

import { GROUPS } from '@helpers/hierarchySeparators'
import { Container } from '@helpers/components/Container'

import { Reset } from '@components/Reset'
import { Snackbar } from '@components/Snackbar'
import { Button } from '@components/Button'
import { Text } from '@components/Text'

const Containerable = styled(Container)`
  flex-wrap: wrap;
  justify-content: space-evenly;
`

const Toggle = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false)

  const toClose = () => setIsOpen(false)

  return (
    <>
      <Button onClick={() => setIsOpen(true)}>Open Snackbar</Button>
      {children({ isOpen, toClose })}
    </>
  )
}

storiesOf(`${GROUPS.COMPONENTS}|Snackbar`, module)
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
          <Snackbar
            toClose={toClose}
            isOpen={isOpen}
            description={({ size, color }) => (
              <Text size={size} color={color}>
                This is an error report.
              </Text>
            )}
          />
        )}
      </Toggle>
    </>
  ))
  .add('Without close', () => (
    <Snackbar
      isOpen={true}
      description={({ size, color }) => (
        <Text size={size} color={color}>
          This is an error report.
        </Text>
      )}
    />
  ))
