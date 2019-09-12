import React from 'react'
import styled from 'styled-components'
import { storiesOf } from '@storybook/react'

import { GROUPS } from '@helpers/hierarchySeparators'
import { Container } from '@helpers/components/Container'

import { Reset } from '@components/Reset'
import { Tabs } from '@components/Tabs'

const Containerable = styled(Container)`
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: flex-start;
`

const tabs = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

storiesOf(`${GROUPS.COMPONENTS}|Tabs`, module)
  .addDecorator(story => (
    <Containerable>
      <Reset />
      {story()}
    </Containerable>
  ))
  .add('Default', () => (
    <>
      <Tabs activeId="0">
        <Tabs.Tab id="0" label="Tab 1">
          <p>Content 1</p>
        </Tabs.Tab>

        <Tabs.Tab id="1" label="Tab 2">
          <p>Content 2</p>
        </Tabs.Tab>
      </Tabs>
    </>
  ))
  .add('With many tabs', () => (
    <>
      <Tabs activeId={0}>
        {tabs.map(tab => (
          <Tabs.Tab key={tab} id={tab} label={`Tab ${tab}`}>
            <p>Content {tab}</p>
          </Tabs.Tab>
        ))}
      </Tabs>
    </>
  ))
