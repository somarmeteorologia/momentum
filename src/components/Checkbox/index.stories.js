import React, { useState } from 'react'
import styled from 'styled-components'
import { storiesOf } from '@storybook/react'

import { GROUPS } from '@helpers/hierarchySeparators'
import { Container } from '@helpers/components/Container'

import { Reset } from '@components/Reset'
import { Checkbox } from '@components/Checkbox'

const Containerable = styled(Container)`
  flex-wrap: wrap;
  justify-content: space-evenly;
`

const Toggle = ({ label, labelAlign, id, disabled, size }) => {
  const [on, setOn] = useState(false)

  return (
    <Checkbox
      id={id}
      size={size}
      label={label}
      labelAlign={labelAlign}
      disabled={disabled}
      checked={on}
      onChange={setOn}
    />
  )
}

storiesOf(`${GROUPS.COMPONENTS}|Checkbox`, module)
  .addDecorator(story => (
    <Containerable>
      <Reset />
      {story()}
    </Containerable>
  ))
  .add('Default', () => (
    <>
      <Toggle id="apple" label="Bottom" />
      <Toggle id="1" label="Right" labelAlign="right" />
      <Toggle id="2" label="Top" labelAlign="top" />
      <Toggle id="0" label="Left" labelAlign="left" />
    </>
  ))
  .add('Large', () => (
    <>
      <Toggle id="apple" label="Bottom" size={Checkbox.size.large} />
      <Toggle
        id="1"
        label="Right"
        labelAlign="right"
        size={Checkbox.size.large}
      />
      <Toggle id="2" label="Top" labelAlign="top" size={Checkbox.size.large} />
      <Toggle
        id="0"
        label="Left"
        labelAlign="left"
        size={Checkbox.size.large}
      />
    </>
  ))
  .add('Disabled', () => (
    <>
      <Toggle id="banana" label="Default" disabled={true} />
      <Toggle
        id="apple"
        label="Large"
        disabled={true}
        size={Checkbox.size.large}
      />
    </>
  ))
