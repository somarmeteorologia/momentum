import React, { useState } from 'react'
import styled from 'styled-components'
import { storiesOf } from '@storybook/react'

import { GROUPS } from '@helpers/hierarchySeparators'
import { Container } from '@helpers/components/Container'

import { Reset } from '@components/Reset'
import { Switch } from '@components/Switch'

const Containerable = styled(Container)`
  flex-wrap: wrap;
  justify-content: space-evenly;
`

const Toggle = ({ label, labelAlign, id, disabled, size }) => {
  const [on, setOn] = useState(false)

  return (
    <Switch
      id={id}
      size={size}
      label={label}
      labelAlign={labelAlign}
      disabled={disabled}
      active={on}
      onChange={setOn}
    />
  )
}

storiesOf(`${GROUPS.COMPONENTS}|Switch`, module)
  .addDecorator(story => (
    <Containerable>
      <Reset />
      {story()}
    </Containerable>
  ))
  .add('Default', () => (
    <>
      <Toggle id="1" label="Bottom" />
      <Toggle id="2" label="Right" labelAlign={Switch.labelAlign.right} />
      <Toggle id="3" label="Top" labelAlign={Switch.labelAlign.top} />
      <Toggle id="4" label="Left" labelAlign={Switch.labelAlign.left} />
    </>
  ))
  .add('Large', () => (
    <>
      <Toggle id="1" label="Bottom" size={Switch.size.large} />
      <Toggle
        id="2"
        label="Right"
        size={Switch.size.large}
        labelAlign={Switch.labelAlign.right}
      />
      <Toggle
        id="3"
        label="Top"
        labelAlign={Switch.labelAlign.top}
        size={Switch.size.large}
      />
      <Toggle
        id="4"
        label="Left"
        labelAlign={Switch.labelAlign.left}
        size={Switch.size.large}
      />
    </>
  ))
  .add('Disabled', () => (
    <>
      <Toggle label="Default" disabled={true} />
      <Toggle label="Large" disabled={true} size={Switch.size.large} />
    </>
  ))
