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
      <Tag color="#133BEC">
        <Text>Info</Text>
      </Tag>

      <Tag color="#FFC600">
        <Text>Warning</Text>
      </Tag>

      <Tag color="#FF0130">
        <Text>Danger</Text>
      </Tag>
    </>
  ))
