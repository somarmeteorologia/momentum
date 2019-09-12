import React, { useState } from 'react'
import styled from 'styled-components'
import { storiesOf } from '@storybook/react'
import useInterval from '@use-it/interval'

import { GROUPS } from '@helpers/hierarchySeparators'
import { Container } from '@helpers/components/Container'

import { Reset } from '@components/Reset'
import { Player } from '@components/Player'

const Containerable = styled(Container)`
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: flex-start;
`

const Progress = () => {
  const [played, setPlayed] = useState(true)
  const [index, setIndex] = useState(0)

  const dates = [
    '09 JUL 12:55',
    '10 JUL 12:55',
    '11 JUL 12:55',
    '12 JUL 12:55',
    '13 JUL 12:55',
    '14 JUL 12:55',
    '15 JUL 12:55'
  ]

  const hasDates = dates => dates.length !== 0

  const onPlayPause = () => setPlayed(!played)

  useInterval(
    () => {
      index === dates.length - 1 ? setIndex(0) : setIndex(index => index + 1)
    },
    hasDates(dates) && played ? 2000 : null
  )

  return (
    <>
      <Player
        played={played}
        onPlayPause={onPlayPause}
        onPreviousNext={setIndex}
        index={index}
        indexes={dates}
      />
    </>
  )
}

storiesOf(`${GROUPS.COMPONENTS}|Player`, module)
  .addDecorator(story => (
    <Containerable>
      <Reset />
      {story()}
    </Containerable>
  ))
  .add('Default', () => (
    <>
      <Progress />
    </>
  ))
