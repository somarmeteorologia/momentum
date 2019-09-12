import React from 'react'
import styled from 'styled-components'
import { storiesOf } from '@storybook/react'

import { GROUPS } from '@helpers/hierarchySeparators'
import { Container } from '@helpers/components/Container'

import { Reset } from '@components/Reset'
import { Range } from '@components/Range'

const Containerable = styled(Container)`
  flex-wrap: wrap;
  justify-content: space-evenly;
`

storiesOf(`${GROUPS.COMPONENTS}|Range`, module)
  .addDecorator(story => (
    <Containerable>
      <Reset />
      {story()}
    </Containerable>
  ))
  .add('Default', () => (
    <>
      <Range label="Banana" />
    </>
  ))
