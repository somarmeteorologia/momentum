import React from 'react'
import { storiesOf } from '@storybook/react'

import { GROUPS } from '@helpers/hierarchySeparators'

import { Reset } from '@components/Reset'
import { Menu } from '@components/Menu'

storiesOf(`${GROUPS.COMPONENTS}|Menu`, module)
  .addDecorator(story => (
    <>
      <Reset />
      {story()}
    </>
  ))
  .add('Default', () => (
    <Menu>
      <div>content</div>
    </Menu>
  ))
  .add('Dragging', () => <Menu draggable={true} />)
