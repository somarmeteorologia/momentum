import React from 'react'
import styled from 'styled-components'
import { storiesOf } from '@storybook/react'

import { GROUPS } from '@helpers/hierarchySeparators'
import { Container } from '@helpers/components/Container'

import { Reset } from '@components/Reset'
import { Text } from '@components/Text'

const Containerable = styled(Container)`
  flex-direction: column;
`

storiesOf(`${GROUPS.COMPONENTS}|Text`, module)
  .addDecorator(story => (
    <Containerable>
      <Reset />
      {story()}
    </Containerable>
  ))
  .add('Default', () => (
    <>
      <Text.Heading size={Text.Heading.size.sixtySeven}>H1</Text.Heading>
      <Text.Heading size={Text.Heading.size.fifty}>H2</Text.Heading>
      <Text.Heading size={Text.Heading.size.thirtyEight}>H3</Text.Heading>
      <Text.Heading size={Text.Heading.size.twentyEight}>H4</Text.Heading>
      <Text.Heading size={Text.Heading.size.twentyOne}>H5</Text.Heading>
      <Text.Heading size={Text.Heading.size.sixteen}>H6</Text.Heading>
      <Text size={Text.size.ten}>
        This component not contains semantic value
      </Text>
      <Text.P family={Text.P.family.roboto}>This is a paragraph</Text.P>
    </>
  ))
