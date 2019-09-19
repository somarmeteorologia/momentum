import React from 'react'

import { Navigation } from '@components/Navigation'
import { Switch } from '@components/Switch'
import { Text } from '@components/Text'
import { Icon } from '@components/Icon'

const {
  Type,
  Interable,
  Separator,
  Title,
  Control,
  useInterable,
  Provider
} = Navigation

const defaultInterables = [
  {
    id: 'cars',
    interables: [
      {
        id: 'cars',
        value: true
      }
    ]
  },
  {
    id: 'volkswagen',
    interables: [
      {
        id: 'switch',
        value: true
      }
    ]
  },
  {
    id: 'ford',
    interables: [
      {
        id: 'switch',
        value: true
      }
    ]
  },
  {
    id: 'gol',
    interables: [
      {
        id: '1.6',
        value: true
      },
      {
        id: '1.0',
        value: false
      }
    ]
  },
  {
    id: 'knife',
    interables: [
      {
        id: 'knife',
        value: false
      }
    ]
  },
  {
    id: 'nothing',
    interables: [
      {
        id: 'isVisible',
        value: true
      }
    ]
  }
]

const defaultStructure = [
  {
    id: 'monitoring',
    type: Type.Category,
    title: ({ details, description }) => (
      <>
        <Icon name="home" right={10} width={20} height={20} color={details} />
        <Text
          weight={Text.weight.bold}
          size={Text.size.fourteen}
          color={description}
        >
          Monitoramento
        </Text>
      </>
    ),
    children: [
      {
        id: 'cars',
        parent: 'monitoring',
        onPrevent: () => console.log('prevented'),
        title: ({ getter, setter }) => (
          <Interable>
            <>
              <Switch
                id="cars"
                label="Cars"
                labelAlign="right"
                active={getter('cars')}
                onChange={() => setter('cars', !getter('cars'))}
              />
            </>
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
                    <>
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
                    </>
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

export default function TesteableProvider({ children }) {
  const onInterable = ({ interables, setIterables }) => {
    const withInterable = useInterable({ interables, setIterables })

    const [setter, getter] = withInterable('nothing')
  }

  return (
    <Provider
      defaultStructure={defaultStructure}
      defaultInterables={defaultInterables}
      onInterable={onInterable}
    >
      {children}
    </Provider>
  )
}
