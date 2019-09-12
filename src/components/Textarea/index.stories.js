import React from 'react'
import styled from 'styled-components'
import { storiesOf } from '@storybook/react'

import { GROUPS } from '@helpers/hierarchySeparators'
import { Container } from '@helpers/components/Container'

import { Reset } from '@components/Reset'
import { Textarea } from '@components/Textarea'
import { Icon } from '@components/Icon'

const Containerable = styled(Container)`
  flex-wrap: wrap;
`

const Wrapper = styled.div`
  display: flex;
  align-items: flex-end;
`

storiesOf(`${GROUPS.COMPONENTS}|Textarea`, module)
  .addDecorator(story => (
    <Containerable>
      <Reset />
      {story()}
    </Containerable>
  ))
  .add('Default', () => (
    <>
      <Textarea placeholder="Your document" />
    </>
  ))
  .add('With label', () => (
    <>
      <Textarea placeholder="Your document" label="Field label" />
      <Textarea placeholder="Your document" label="Field label" required />
    </>
  ))
  .add('With error', () => (
    <>
      <Textarea
        placeholder="Your document"
        error={{ has: true, message: 'Your document' }}
      />
    </>
  ))
  .add('With success', () => (
    <>
      <Textarea
        placeholder="Your e-mail"
        icon={({ color, width, height }) => (
          <Icon
            name={Icon.name.checked}
            color={color}
            width={width}
            height={height}
          />
        )}
        iconAlign={Textarea.iconAlign.right}
        success={{ has: true, message: 'Your document' }}
      />
    </>
  ))
  .add('With icon', () => (
    <>
      <Textarea
        placeholder="Your document"
        icon={({ color, width, height }) => (
          <Icon
            name={Icon.name.checked}
            color={color}
            width={width}
            height={height}
          />
        )}
        iconAlign={Textarea.iconAlign.left}
      />

      <Textarea
        placeholder="Your document"
        icon={({ color, width, height }) => (
          <Icon
            name={Icon.name.checked}
            color={color}
            width={width}
            height={height}
          />
        )}
        iconAlign={Textarea.iconAlign.right}
      />
    </>
  ))
  .add('Full', () => (
    <>
      <Textarea placeholder="Your document" full />
    </>
  ))
  .add('Disabled', () => (
    <Wrapper>
      <Textarea placeholder="Your document" disabled />
      <Textarea placeholder="Your document" label="Field label" disabled />
      <Textarea
        placeholder="Your document"
        label="Field label"
        disabled
        required
      />
    </Wrapper>
  ))
