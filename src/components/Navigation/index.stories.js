import React, { useState, useEffect, useContext } from 'react'
import styled from 'styled-components'
import { storiesOf } from '@storybook/react'

import { GROUPS } from '@helpers/hierarchySeparators'

import { Reset } from '@components/Reset'
import { Button } from '@components/Button'
import { Navigation } from '@components/Navigation'

const { Context, useInterable } = Navigation

import TesteableProvider from './TesteableProvider'

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
`

const Default = ({ toOpen }) => {
  const [toggle, setToggle] = useState(false)
  const interable = useContext(Context)

  const withInterable = useInterable(interable)

  const [setter] = withInterable('nothing')

  useEffect(() => {
    setter('isVisible', toggle)
  }, [toggle])

  return (
    <Container>
      <Navigation toOpen={toOpen} />
      <Button onClick={() => setToggle(!toggle)}>Toggle</Button>
    </Container>
  )
}

const AtSpecific = () => {
  const toOpen = () => 'newsletter'

  return <Default toOpen={toOpen} />
}

storiesOf(`${GROUPS.COMPONENTS}|Navigation`, module)
  .addDecorator(story => (
    <TesteableProvider>
      <Reset />
      {story()}
    </TesteableProvider>
  ))
  .add('Default', () => <Default />)
  .add('At specific', () => <AtSpecific />)
