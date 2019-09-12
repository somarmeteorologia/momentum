import React, { useState } from 'react'
import styled from 'styled-components'
import { storiesOf } from '@storybook/react'

import { GROUPS } from '@helpers/hierarchySeparators'
import { Container } from '@helpers/components/Container'

import { Reset } from '@components/Reset'
import { Drawer } from '@components/Drawer'
import { Text } from '@components/Text'
import { Button } from '@components/Button'

const Containerable = styled(Container)`
  flex-wrap: wrap;
  height: 100vh;
  position: relative;
  overflow: hidden;
`

const Toggle = ({ from, children }) => {
  const [isOpen, setIsOpen] = useState(false)

  const onClicked = () => setIsOpen(!isOpen)
  const toClose = () => setIsOpen(false)

  return (
    <>
      <Button onClick={onClicked}>{children}</Button>
      <Drawer
        isOpen={isOpen}
        toClose={toClose}
        from={from}
        title="Título da página de teste"
        outsideClose={true}
      >
        <Text.P>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Text.P>
      </Drawer>
    </>
  )
}

storiesOf(`${GROUPS.COMPONENTS}|Drawer`, module)
  .addDecorator(story => (
    <Containerable>
      <Reset />
      {story()}
    </Containerable>
  ))
  .add('Right', () => (
    <>
      <Toggle>Toggle drawer</Toggle>
    </>
  ))
  .add('Left', () => (
    <>
      <Toggle from="left">Toggle drawer</Toggle>
    </>
  ))
