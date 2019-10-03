import React, { Fragment } from 'react'

import { Switch } from '@components/Switch'
import { Text } from '@components/Text'
import { Icon } from '@components/Icon'
import { Navigation } from '@components/Navigation'

const { Type, Interable, Separator, Title, Control } = Navigation

export default [
  {
    id: 'monitoring',
    type: Type.Category,
    title: ({ details, description }) => (
      <Fragment>
        <Icon name="home" right={10} width={20} height={20} color={details} />
        <Text
          weight={Text.weight.bold}
          size={Text.size.fourteen}
          color={description}
        >
          Monitoramento
        </Text>
      </Fragment>
    ),
    children: [
      {
        id: 'cars',
        parent: 'monitoring',
        onPrevent: () => console.log('prevented'),
        title: ({ getter, setter }) => (
          <Interable>
            <Switch
              id="cars"
              label="Cars"
              labelAlign="right"
              active={getter('cars')}
              onChange={() => setter('cars', !getter('cars'))}
            />
          </Interable>
        ),
        type: Type.Group,
        children: [
          {
            id: 'volkswagen',
            type: Type.Group,
            parent: 'cars',
            title: ({ getter, setter }) => (
              <Interable>
                <Switch
                  id="switch"
                  label="Volkswagen"
                  labelAlign="right"
                  active={getter('switch')}
                  onChange={() => setter('switch', !getter('switch'))}
                />
              </Interable>
            ),
            children: [
              {
                id: 'gol',
                parent: 'volkswagen',
                title: ({ getter, setter }) => (
                  <Control>
                    <Fragment>
                      <Switch
                        id="1.6"
                        label="1.6"
                        labelAlign="right"
                        active={getter('1.6')}
                        onChange={() => setter('1.6', !getter('1.6'))}
                      />

                      <Switch
                        id="1.0"
                        label="1.0"
                        labelAlign="right"
                        active={getter('1.0')}
                        onChange={() => setter('1.0', !getter('1.0'))}
                      />
                    </Fragment>
                  </Control>
                ),
                type: Type.Item,
                children: []
              }
            ]
          },
          {
            id: 'ford',
            parent: 'cars',
            title: ({ getter, setter }) => (
              <Interable>
                <Switch
                  id="switch"
                  label="Ford"
                  labelAlign="right"
                  active={getter('switch')}
                  onChange={() => setter('switch', !getter('switch'))}
                />
              </Interable>
            ),
            type: Type.Group,
            children: [
              {
                id: 'nothing',
                type: Type.Item,
                parent: 'ford',
                title: ({ getter }) => (
                  <div>{getter('isVisible') && 'Unavailable'}</div>
                ),
                children: []
              }
            ]
          },
          {
            id: 'peugeot',
            parent: 'cars',
            title: ({ getter, setter }) => (
              <Interable>
                <Switch
                  id="switch"
                  label="Peugeot"
                  labelAlign="right"
                  active={getter('switch')}
                  onChange={() => setter('switch', !getter('switch'))}
                />
              </Interable>
            ),
            type: Type.Group,
            children: []
          }
        ]
      },
      {
        id: 'firstSeparator',
        parent: 'monitoring',
        title: () => <Separator />,
        type: Type.Item,
        children: []
      },
      {
        id: 'newsletter',
        parent: 'monitoring',
        title: ({ details }) => (
          <Title>
            <Icon
              name="newsletter"
              right={10}
              width={20}
              height={20}
              color={details}
            />
            <Text size={Text.size.fourteen}>Boletins</Text>
          </Title>
        ),
        type: Type.Group,
        children: [
          {
            id: 'content',
            parent: 'newsletter',
            type: Type.Item,
            title: () => <Text>Content from newsletter</Text>,
            children: []
          }
        ]
      }
    ]
  }
]
