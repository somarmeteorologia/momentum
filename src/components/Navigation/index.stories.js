import React from 'react'
import styled from 'styled-components'
import { storiesOf } from '@storybook/react'

import { GROUPS } from '@helpers/hierarchySeparators'

import { Reset } from '@components/Reset'

import Testeable from './Testeable'

const Container = styled.div`
  width: 100%;
  height: 100vh;
`

const Default = ({ toOpen }) => {
  return (
    <Container>
      <Testeable toOpen={toOpen} />
    </Container>
  )
}

const AtSpecific = () => {
  const toOpen = () => 'newsletter'

  return <Default toOpen={toOpen} />
}

storiesOf(`${GROUPS.COMPONENTS}|Navigation`, module)
  .addDecorator(story => (
    <>
      <Reset />
      {story()}
    </>
  ))
  .add('Default', () => <Default />)
  .add('At specific', () => <AtSpecific />)
