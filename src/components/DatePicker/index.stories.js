import React from 'react'
import styled from 'styled-components'
import { storiesOf } from '@storybook/react'

import { GROUPS } from '@helpers/hierarchySeparators'
import { Container } from '@helpers/components/Container'

// import { theme } from '@components/Theme'
import { Reset } from '@components/Reset'
import { DatePicker } from '@components/DatePicker'

const Containerable = styled(Container)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

storiesOf(`${GROUPS.COMPONENTS}|DatePicker`, module)
  .addDecorator(story => (
    <Containerable>
      <Reset />
      {story()}
    </Containerable>
  ))
  .add('Day', () => (
    <DatePicker
      appearence={DatePicker.appearence.day}
      onDayChange={day => console.log(day)}
    />
  ))
  .add('Week', () => (
    <DatePicker
      appearence={DatePicker.appearence.week}
      onWeekChange={week => console.log(week)}
    />
  ))
  .add('Range', () => (
    <DatePicker
      appearence={DatePicker.appearence.range}
      onRangeChange={range => console.log(range)}
    />
  ))
