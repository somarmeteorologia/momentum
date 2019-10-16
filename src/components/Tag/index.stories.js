import React from 'react'
import styled from 'styled-components'
import { storiesOf } from '@storybook/react'

import { GROUPS } from '@helpers/hierarchySeparators'
import { Container } from '@helpers/components/Container'

import { Reset } from '@components/Reset'
import { Tag } from '@components/Tag'
import { Text } from '@components/Text'

const Containerable = styled(Container)`
  flex-wrap: wrap;
  justify-content: space-evenly;
`

storiesOf(`${GROUPS.COMPONENTS}|Tag`, module)
  .addDecorator(story => (
    <Containerable>
      <Reset />
      {story()}
    </Containerable>
  ))
  .add('Default', () => (
    <>
      <Tag>
        <Text>Info</Text>
      </Tag>

      <Tag color="yellow">
        <Text>Warning</Text>
      </Tag>

      <Tag color="red">
        <Text>Danger</Text>
      </Tag>
    </>
  ))
