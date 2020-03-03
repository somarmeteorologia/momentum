import React from 'react'

import { Navigation } from '@components/Navigation'

const { Provider } = Navigation

import testStructure from './testStructure'

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
    id: 'peugeot',
    interables: [
      {
        id: 'switch',
        value: true
      }
    ]
  },
  {
    id: 'fiat',
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

export default function TesteableProvider({ children, defaultStructure }) {
  return (
    <Provider
      defaultStructure={defaultStructure}
      defaultInterables={defaultInterables}
    >
      {children}
    </Provider>
  )
}

TesteableProvider.defaultProps = {
  defaultStructure: testStructure
}
