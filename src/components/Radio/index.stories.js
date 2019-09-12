import React from 'react'
import styled from 'styled-components'
import { storiesOf } from '@storybook/react'

import { GROUPS } from '@helpers/hierarchySeparators'
import { Container } from '@helpers/components/Container'

import { Reset } from '@components/Reset'
import { Radio } from '@components/Radio'

const Containerable = styled(Container)`
  flex-wrap: wrap;
  justify-content: space-evenly;
`

storiesOf(`${GROUPS.COMPONENTS}|Radio`, module)
  .addDecorator(story => (
    <Containerable>
      <Reset />
      {story()}
    </Containerable>
  ))
  .add('Orientation', () => (
    <>
      <Radio name="bottom">
        <Radio.Option id="apple" label="Row" />
        <Radio.Option id="banana" label="Row" />
      </Radio>
      <Radio orientation={Radio.orientation.column} name="top">
        <Radio.Option id="apple" label="Column" checked />
        <Radio.Option id="banana" label="Columnaaaaa" />
      </Radio>
    </>
  ))
  .add('Label Align', () => (
    <>
      <Radio name="bottom">
        <Radio.Option id="apple" label="Label Bottom" />
        <Radio.Option id="banana" label="Label Bottom" />
      </Radio>
      <Radio labelAlign={Radio.labelAlign.top} name="top">
        <Radio.Option id="apple" label="Label Top" checked />
        <Radio.Option id="banana" label="Label Top" />
      </Radio>
      <Radio labelAlign={Radio.labelAlign.left} name="left">
        <Radio.Option id="1" label="Label Left" checked />
        <Radio.Option id="2" label="Label Left" />
      </Radio>
      <Radio labelAlign={Radio.labelAlign.right} name="right">
        <Radio.Option id="3" label="Label Right" checked />
        <Radio.Option id="4" label="Label Right" />
      </Radio>
    </>
  ))
  .add('Size', () => (
    <>  
      <Radio size={Radio.size.default} name="weather">
        <Radio.Option id="cloudy" label="Default" checked />
        <Radio.Option id="rainy" label="Default" />
      </Radio>

      <Radio size={Radio.size.large} name="color">
        <Radio.Option id="red" label="Large" checked />
        <Radio.Option id="orange" label="Large" />
      </Radio>
    </>
  ))
  .add('Disabled', () => (
    <>  
      <Radio size={Radio.size.large} name="weather">
        <Radio.Option id="cloudy" label="Cloudy" checked />
        <Radio.Option id="rainy" label="Rainy" disabled={true} />
      </Radio>
    </>
  ))
