import React, { Fragment } from 'react'
import styled from 'styled-components'
import { prop } from 'styled-tools'
import { storiesOf } from '@storybook/react'

import { GROUPS } from '@helpers/hierarchySeparators'
import { Container } from '@helpers/components'

import { Reset } from '@components/Reset'
import { Icon } from '@components/Icon'

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 135px;
  height: 120px;
`

const Name = styled.span`
  margin-top: 10px;
  font-size: 14px;
  color: ${prop('theme.icons.primary')};
  font-family: ${prop('theme.font.family.inter')};
`

const Containerable = styled(Container)`
  flex-wrap: wrap;
  justify-content: flex-start;
  height: 100%;
`

const outlines = [
  'disabled',
  'home',
  'pause',
  'play',
  'back',
  'advance',
  'city',
  'barChart',
  'lightningCircle',
  'newsletter',
  'cloud',
  'checklist',
  'checked',
  'lightning',
  'left',
  'right',
  'up',
  'down',
  'add',
  'agriculture',
  'alert',
  'arrow',
  'chart',
  'close',
  'comment',
  'configurations',
  'download',
  'energy',
  'favorite',
  'monitoring',
  'notification',
  'options',
  'output',
  'prevision',
  'rain',
  'reservoirs',
  'resume',
  'temperature',
  'tv',
  'loading',
  'plus',
  'arrowRight',
  'calendar',
  'less',
  'more',
  'layer',
  'eye',
  'info',
  'manual',
  'pe',
  'valv',
  'ret',
  'geo',
  'ecomp',
  'emed',
  'emop',
  'segment'
]

const temperaturies = [
  'dayCC',
  'nightCC',

  'dayPN',
  'nightPN',

  'dayNC',
  'nightNC',

  'dayNB',
  'nightNB',

  'en',

  'dayPI',
  'nightPI',

  'dayPC',
  'nightPC',

  'ch',

  'ge',

  'nv',

  'dayCV',
  'nightCV',

  'dayTR',
  'nightTR'
]

const iconByName = name => (
  <Content>
    <Icon name={name} width={50} height={50} />
    <Name>{name}</Name>
  </Content>
)

storiesOf(`${GROUPS.COMPONENTS}|Icon`, module)
  .addDecorator(story => (
    <Containerable>
      <Reset />
      {story()}
    </Containerable>
  ))
  .add('Outline', () => (
    <>
      {outlines.map(outline => (
        <Fragment key={outline}>{iconByName(outline)}</Fragment>
      ))}
    </>
  ))
  .add('Temperature', () => (
    <>
      {temperaturies.map(temperature => (
        <Fragment key={temperature}>{iconByName(temperature)}</Fragment>
      ))}
    </>
  ))
