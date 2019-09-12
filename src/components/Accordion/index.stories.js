import React from 'react'
import styled from 'styled-components'
import { storiesOf } from '@storybook/react'

import { GROUPS } from '@helpers/hierarchySeparators'
import { Container } from '@helpers/components/Container'

import { Reset } from '@components/Reset'
import { Accordion } from '@components/Accordion'

const Containerable = styled(Container)`
  flex-wrap: wrap;
`

storiesOf(`${GROUPS.COMPONENTS}|Accordion`, module)
  .addDecorator(story => (
    <Containerable>
      <Reset />
      {story()}
    </Containerable>
  ))
  .add('Default', () => (
    <>
      <Accordion
        accordions={[
          {
            id: 1,
            active: false,
            text: 'foo',
            Header: <div>Lorem ipsum dolor sit amet</div>,
            Body: (
              <div>
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim id est laborum.
              </div>
            )
          },
          {
            id: 2,
            active: false,
            text: 'bar',
            Header: <div>Sed ut perspiciatis unde omnis</div>,
            Body: (
              <div>
                Ut enim ad minima veniam, quis nostrum exercitationem ullam
                corporis suscipit laboriosam, nisi ut aliquid ex ea commodi
                consequatur?
              </div>
            )
          }
        ]}
      />
    </>
  ))
  .add('Auto', () => (
    <>
      <Accordion
        accordions={[
          {
            id: 1,
            active: false,
            text: 'foo',
            Header: (
              <div>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus bibendum sagittis massa eu ullamcorper
              </div>
            ),
            Body: (
              <div>
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim id est laborum.
              </div>
            )
          },
          {
            id: 2,
            active: false,
            text: 'bar',
            Header: <div>Sed ut perspiciatis unde omnis</div>,
            Body: (
              <div>
                Ut enim ad minima veniam, quis nostrum exercitationem ullam
                corporis suscipit laboriosam, nisi ut aliquid ex ea commodi
                consequatur?
              </div>
            )
          }
        ]}
        auto
      />
    </>
  ))
  .add('Full', () => (
    <>
      <Accordion
        accordions={[
          {
            id: 1,
            active: false,
            text: 'foo',
            Header: (
              <div>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus bibendum sagittis massa eu ullamcorper
              </div>
            ),
            Body: (
              <div>
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim id est laborum.
              </div>
            )
          },
          {
            id: 2,
            active: false,
            text: 'bar',
            Header: <div>Sed ut perspiciatis unde omnis</div>,
            Body: (
              <div>
                Ut enim ad minima veniam, quis nostrum exercitationem ullam
                corporis suscipit laboriosam, nisi ut aliquid ex ea commodi
                consequatur?
              </div>
            )
          }
        ]}
        full
      />
    </>
  ))
