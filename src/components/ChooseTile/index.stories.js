import React, { useState } from 'react'
import styled from 'styled-components'
import { storiesOf } from '@storybook/react'
import { Map } from 'react-leaflet'

import { GROUPS } from '@helpers/hierarchySeparators'

import { Reset } from '@components/Reset'
import { ChooseTile } from '@components/ChooseTile'

const center = {
  lat: -25.2155,
  lng: -50.9689
}

const Container = styled(Map)`
  width: 100%;
  height: 100vh;
`

const { TILE } = ChooseTile

const MapWithChooseTile = () => {
  const [tile, setTile] = useState(TILE.dark)

  return (
    <Container center={center} zoom={7}>
      <ChooseTile setTile={setTile} tile={tile} />
    </Container>
  )
}

storiesOf(`${GROUPS.COMPONENTS}|ChooseTile`, module)
  .addDecorator(story => (
    <>
      <Reset />
      {story()}
    </>
  ))
  .add('Default', () => <MapWithChooseTile />)
