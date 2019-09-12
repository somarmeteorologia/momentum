import React, { useContext } from 'react'
import { useInterable } from './utils'
import { Context } from './Context'
import styled, { ThemeContext } from 'styled-components'

const Container = styled.div`
  padding: 0 15px;
`

const Title = ({ id, children }) => {
  const { navigation } = useContext(ThemeContext)
  const { interables, setInterables } = useContext(Context)

  const [setter, getter] = useInterable({ interables, setInterables })(id)
  const details = navigation.bg.tertiary

  return (
    <Container>
      {children({
        getter,
        setter,
        details
      })}
    </Container>
  )
}

export default {
  id: 'item',
  Title
}
