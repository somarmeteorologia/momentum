import React from 'react'
import styled from 'styled-components'
import { prop } from 'styled-tools'
import { storiesOf } from '@storybook/react'

import { GROUPS } from '@helpers/hierarchySeparators'
import { Container } from '@helpers/components/Container'

import { Reset } from '@components/Reset'
import { Tooltip } from '@components/Tooltip'
import { Text } from '@components/Text'
import { Button } from '@components/Button'

const Containerable = styled(Container)`
  flex-wrap: wrap;
  justify-content: space-evenly;
  color: ${prop('theme.text.primary')};
`

storiesOf(`${GROUPS.COMPONENTS}|Tooltip`, module)
  .addDecorator(story => (
    <Containerable>
      <>
        <Reset />
        {story()}
      </>
    </Containerable>
  ))
  .add('Appearence', () => (
    <>
      <Tooltip
        appearence={Tooltip.appearence.basic}
        trigger={Tooltip.trigger.click}
        header={({ color }) => <Text color={color}>A title here</Text>}
        body={({ color }) => <Text color={color}>And description here</Text>}
      >
        <Text>Lorem ipsum dolor sit amet</Text>
      </Tooltip>
    </>
  ))
  .add('Tail Position', () => (
    <>
      <Tooltip
        tailPosition={Tooltip.tailPosition.top}
        body={({ color }) => (
          <Text color={color}>Description with top position</Text>
        )}
      >
        <Button>Top</Button>
      </Tooltip>
      <Tooltip
        tailPosition={Tooltip.tailPosition.right}
        body={({ color }) => (
          <Text color={color}>Description with right position</Text>
        )}
      >
        <Button>Right</Button>
      </Tooltip>
      <Tooltip
        tailPosition={Tooltip.tailPosition.bottom}
        body={({ color }) => (
          <Text color={color}>Description with bottom position</Text>
        )}
      >
        <Button>Bottom</Button>
      </Tooltip>
      <Tooltip
        tailPosition={Tooltip.tailPosition.left}
        body={({ color }) => (
          <Text color={color}>Description with left position</Text>
        )}
      >
        <Button>Left</Button>
      </Tooltip>
    </>
  ))
  .add('Size', () => (
    <>
      <Tooltip
        size={Tooltip.size.small}
        body={({ color }) => (
          <Text color={color}>Description about small size</Text>
        )}
      >
        Small
      </Tooltip>
      <Tooltip
        size={Tooltip.size.default}
        body={({ color }) => (
          <Text color={color}>Description about default size</Text>
        )}
      >
        Default
      </Tooltip>
      <Tooltip
        size={Tooltip.size.large}
        body={({ color }) => (
          <Text color={color}>Description about large size</Text>
        )}
      >
        Large
      </Tooltip>
    </>
  ))
