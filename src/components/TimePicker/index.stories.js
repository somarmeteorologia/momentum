import React from 'react'
import styled from 'styled-components'
import { storiesOf } from '@storybook/react'

import { GROUPS } from '@helpers/hierarchySeparators'
import { Container } from '@helpers/components/Container'

import { Reset } from '@components/Reset'
import { TimePicker } from '@components/TimePicker'

const Containerable = styled(Container)`
  flex-wrap: wrap;
`

const Wrapper = styled.div`
  display: flex;
  align-items: flex-end;
`

storiesOf(`${GROUPS.COMPONENTS}|TimePicker`, module)
  .addDecorator(story => (
    <Containerable>
      <Reset />
      {story()}
    </Containerable>
  ))
  .add('Default', () => (
    <>
      <TimePicker placeholder="Your document" />
    </>
  ))
  .add('With error', () => (
    <>
      <TimePicker error={{ has: true, message: 'Your document' }} />
    </>
  ))
  .add('With label', () => (
    <>
      <TimePicker label="Field label" />
      <TimePicker label="Field label" required />
    </>
  ))
  .add('Disabled', () => (
    <Wrapper>
      <TimePicker disabled />
      <TimePicker label="Field label" disabled />
      <TimePicker label="Field label" disabled required />
    </Wrapper>
  ))
  .add('Full', () => (
    <>
      <TimePicker full />
    </>
  ))
