import React, { useState, useEffect, useContext } from 'react'
import styled from 'styled-components'
import { storiesOf } from '@storybook/react'

import { GROUPS } from '@helpers/hierarchySeparators'

import { Reset } from '@components/Reset'
import { Button } from '@components/Button'
import { Text } from '@components/Text'
import { Navigation } from '@components/Navigation'
import { Icon } from '@components/Icon'
import { DatePicker } from '@components/DatePicker'

const { Context, useInterable, Type, Title } = Navigation

import TesteableProvider from './TesteableProvider'
import testStructure from './testStructure'

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
`

const Default = ({ toOpen, isLow }) => {
  const [toggle, setToggle] = useState(false)
  const interable = useContext(Context)

  const withInterable = useInterable(interable)

  const [setter] = withInterable('nothing')

  useEffect(() => {
    setter('isVisible', toggle)
  }, [toggle])

  return (
    <Container isLow={isLow}>
      <Navigation height={isLow ? '200px' : '100%'} toOpen={toOpen} />
      <Button onClick={() => setToggle(!toggle)}>Toggle</Button>
    </Container>
  )
}

const AtSpecific = () => {
  const toOpen = () => 'newsletter'

  return <Default toOpen={toOpen} />
}

const AutoScroll = () => {
  const defaultStucture = [
    ...testStructure,
    {
      id: 'others',
      parent: 'monitoring',
      title: ({ details }) => (
        <Title>
          <Icon
            name="newsletter"
            right={10}
            width={20}
            height={20}
            color={details}
          />
          <Text size={Text.size.fourteen}>Outros</Text>
        </Title>
      ),
      type: Type.Group,
      children: []
    },
    {
      id: 'tests',
      parent: 'monitoring',
      title: ({ details }) => (
        <Title>
          <Icon
            name="newsletter"
            right={10}
            width={20}
            height={20}
            color={details}
          />
          <Text size={Text.size.fourteen}>Testes</Text>
        </Title>
      ),
      type: Type.Group,
      children: []
    }
  ]

  return (
    <TesteableProvider defaultStructure={defaultStucture}>
      <Default isLow={true} />
    </TesteableProvider>
  )
}

const DontOverflowing = () => {
  const defaultStucture = [
    {
      id: 'fruits',
      type: Type.Category,
      parent: 'monitoring',
      title: ({ details }) => (
        <Title>
          <Icon
            name="agriculture"
            right={10}
            width={20}
            height={20}
            color={details}
          />
          <Text size={Text.size.fourteen}>Fruits</Text>
        </Title>
      ),
      children: [
        {
          id: 'apple',
          parent: 'fruits',
          type: Type.Group,
          title: () => <Title>Apple</Title>,
          children: [
            {
              id: 'content',
              parent: 'apple',
              type: Type.Item,
              title: () => (
                <DatePicker
                  align={DatePicker.align.left}
                  appearence={DatePicker.appearence.range}
                />
              ),
              children: []
            }
          ]
        }
      ]
    }
  ]

  return (
    <TesteableProvider defaultStructure={defaultStucture}>
      <Default isLow={true} />
    </TesteableProvider>
  )
}

storiesOf(`${GROUPS.COMPONENTS}|Navigation`, module)
  .addDecorator(story => (
    <>
      <Reset />
      {story()}
    </>
  ))
  .add('Default', () => (
    <TesteableProvider>
      <Default />
    </TesteableProvider>
  ))
  .add('At specific', () => (
    <TesteableProvider>
      <AtSpecific />
    </TesteableProvider>
  ))
  .add('Do not overflowing content', () => <DontOverflowing />)
  .add('Auto scroll', () => <AutoScroll />)
