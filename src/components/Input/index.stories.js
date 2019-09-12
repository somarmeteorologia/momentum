import React from 'react'
import styled from 'styled-components'
import { storiesOf } from '@storybook/react'

import { GROUPS } from '@helpers/hierarchySeparators'
import { Container } from '@helpers/components/Container'

import { Reset } from '@components/Reset'
import { Input } from '@components/Input'
import { Icon } from '@components/Icon'

const Containerable = styled(Container)`
  flex-wrap: wrap;
`

const Wrapper = styled.div`
  display: flex;
  align-items: flex-end;
`

storiesOf(`${GROUPS.COMPONENTS}|Input`, module)
  .addDecorator(story => (
    <Containerable>
      <Reset />
      {story()}
    </Containerable>
  ))
  .add('Default', () => (
    <>
      <Input placeholder="Your document" />
    </>
  ))
  .add('With label', () => (
    <>
      <Input placeholder="Your document" label="Field label" />
      <Input placeholder="Your document" label="Field label" required />
    </>
  ))
  .add('With error', () => (
    <>
      <Input
        placeholder="Your document"
        error={{ has: true, message: 'Your document' }}
      />
    </>
  ))
  .add('With success', () => (
    <>
      <Input
        placeholder="Your e-mail"
        icon={({ color, width, height }) => (
          <Icon
            name={Icon.name.checked}
            color={color}
            width={width}
            height={height}
          />
        )}
        iconAlign={Input.iconAlign.right}
        success={{ has: true, message: 'Your document' }}
      />
    </>
  ))
  .add('With icon', () => (
    <>
      <Input
        placeholder="Your document"
        icon={({ color, width, height }) => (
          <Icon
            name={Icon.name.checked}
            color={color}
            width={width}
            height={height}
          />
        )}
        iconAlign={Input.iconAlign.left}
      />

      <Input
        placeholder="Your e-mail"
        icon={({ color, width, height }) => (
          <Icon
            name={Icon.name.checked}
            color={color}
            width={width}
            height={height}
          />
        )}
        iconAlign={Input.iconAlign.right}
      />
    </>
  ))
  .add('Types', () => (
    <>
      <Input
        placeholder="Your document"
        icon={({ color, width, height }) => (
          <Icon
            name={Icon.name.checked}
            color={color}
            width={width}
            height={height}
          />
        )}
        iconAlign={Input.iconAlign.left}
      />

      <Input
        placeholder="Your email"
        type={Input.typing.email}
        icon={({ color, width, height }) => (
          <Icon
            name={Icon.name.checked}
            color={color}
            width={width}
            height={height}
          />
        )}
        iconAlign={Input.iconAlign.right}
      />
      <Input
        placeholder="Your password"
        type={Input.typing.password}
        icon={({ color, width, height }) => (
          <Icon
            name={Icon.name.checked}
            color={color}
            width={width}
            height={height}
          />
        )}
        iconAlign={Input.iconAlign.right}
      />
    </>
  ))
  .add('Full', () => (
    <>
      <Input placeholder="Your document" full />
    </>
  ))
  .add('Disabled', () => (
    <Wrapper>
      <Input placeholder="Your document" disabled />
      <Input placeholder="Your document" label="Field label" disabled />
      <Input
        placeholder="Your document"
        label="Field label"
        disabled
        required
      />
    </Wrapper>
  ))
