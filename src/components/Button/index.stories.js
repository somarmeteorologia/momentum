import React from 'react'
import { storiesOf } from '@storybook/react'

import { GROUPS } from '@helpers/hierarchySeparators'
import { Container } from '@helpers/components/Container'

import { Reset } from '@components/Reset'
import { Button } from '@components/Button'
import { Icon } from '@components/Icon'

import markdown from './index.md'

storiesOf(`${GROUPS.COMPONENTS}|Button`, module)
  .addDecorator(story => (
    <Container>
      <Reset />
      {story()}
    </Container>
  ))
  .add(
    'Appearence',
    () => (
      <>
        <Button appearence={Button.appearence.primary}>Primary</Button>
        <Button appearence={Button.appearence.stroke}>Stroke</Button>
        <Button appearence={Button.appearence.flat}>Flat</Button>
        <Button appearence={Button.appearence.rounded}>Rounded</Button>
      </>
    ),
    {
      notes: {
        markdown
      }
    }
  )
  .add('Disabled', () => (
    <>
      <Button disabled={true}>Disabled</Button>
    </>
  ))
  .add('With link', () => (
    <>
      <Button href="https://google.com">Open Google</Button>
    </>
  ))
  .add('Size', () => (
    <>
      <Button size={Button.size.small}>Small</Button>
      <Button size={Button.size.default}>Default</Button>
      <Button size={Button.size.large}>Large</Button>
    </>
  ))
  .add('Full', () => (
    <>
      <Button full={true}>Full</Button>
    </>
  ))
  .add('With icon', () => (
    <>
      <Button
        icon={color => (
          <Icon
            name={Icon.name.download}
            width={22}
            height={22}
            color={color}
          />
        )}
      >
        Primary
      </Button>
      <Button
        appearence={Button.appearence.stroke}
        icon={color => (
          <Icon
            name={Icon.name.download}
            width={22}
            height={22}
            color={color}
          />
        )}
      >
        Stroke
      </Button>
      <Button
        appearence={Button.appearence.flat}
        icon={color => (
          <Icon
            name={Icon.name.download}
            width={22}
            height={22}
            color={color}
          />
        )}
      >
        Flat
      </Button>
    </>
  ))
  .add('Loading', () => (
    <>
      <Button loading={true} />
    </>
  ))
  .add('Group', () => (
    <>
      <Button.Group activeId="Primary">
        <Button id="Primary">Primary</Button>
        <Button id="Secondary">Secondary</Button>
        <Button id="Tertiary">Tertiary</Button>
      </Button.Group>
      <Button.Group
        activeId="Primary"
        appearence={Button.Group.appearence.secondary}
      >
        <Button id="Primary">Primary</Button>
        <Button id="Secondary">Secondary</Button>
        <Button id="Tertiary">Tertiary</Button>
      </Button.Group>
    </>
  ))
  .add('Group vertical', () => (
    <>
      <Button.Group
        activeId="Primary"
        orientation={Button.Group.orientation.vertical}
      >
        <Button id="Primary">Primary</Button>
        <Button id="Secondary">Secondary</Button>
        <Button id="Tertiary">Tertiary</Button>
      </Button.Group>
      <Button.Group
        activeId="Primary"
        orientation={Button.Group.orientation.vertical}
        appearence={Button.Group.appearence.secondary}
      >
        <Button id="Primary">Primary</Button>
        <Button id="Secondary">Secondary</Button>
        <Button id="Tertiary">Tertiary</Button>
      </Button.Group>
    </>
  ))
