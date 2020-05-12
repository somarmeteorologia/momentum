import React, { useState } from 'react'
import styled from 'styled-components'
import { storiesOf } from '@storybook/react'
import useInterval from '@use-it/interval'
import { Map } from 'react-leaflet'
import { ChooseTile } from '@components/ChooseTile'
import { Env } from '@environment'

import { GROUPS } from '@helpers/hierarchySeparators'

import { Reset } from '@components/Reset'
import { Player } from '@components/Player'

const center = {
  lat: -25.2155,
  lng: -50.9689
}

const Container = styled(Map)`
  width: 100%;
  height: 100vh;
`

const { TILE } = ChooseTile

const MapWithChooseTile = ({ children }) => {
  const [tile, setTile] = useState(TILE.dark)

  return (
    <Container center={center} zoom={7}>
      {children}

      <ChooseTile
        setTile={setTile}
        tile={tile}
        tileKey={Env.getEnv(Env.TILE_KEY)}
      />
    </Container>
  )
}

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
    <>
      <Reset />
      {story()}
      <MapWithChooseTile />
    </>
  ))
  .add('Default', () => <Progress />)
