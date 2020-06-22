import React, { useState } from 'react'
import { storiesOf } from '@storybook/react'
import styled from 'styled-components'

import { GROUPS } from '@helpers/hierarchySeparators'

import { Reset } from '@components/Reset'
import { Menu as Menuable } from '@components/Menu'

const Content = styled.div`
  width: 100%;
`

const Container = styled.div`
  display: flex;
`

const Menu = ({ draggable, children, width }) => {
  const [isOpen, setOpen] = useState(true)

  return (
    <Menuable
      draggable={draggable}
      isOpen={isOpen}
      setOpen={setOpen}
      width={width}
    >
      {children}
    </Menuable>
  )
}

storiesOf(`${GROUPS.COMPONENTS}|Menu`, module)
  .addDecorator(story => (
    <>
      <Reset />
      {story()}
    </>
  ))
  .add('Default', () => (
    <Container>
      <Menu>
        <div>content</div>
      </Menu>

      <Content />
    </Container>
  ))
  .add('Dragging', () => (
    <>
      <Menu draggable={true}>
        <div>content</div>
      </Menu>

      <Content />
    </>
  ))
  .add('Custom width', () => (
    <>
      <Menu width={350}>
        <div>content</div>
      </Menu>

      <Content />
    </>
  ))
