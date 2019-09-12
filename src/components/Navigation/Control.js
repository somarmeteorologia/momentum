import React, { useState, useContext } from 'react'
import PropTypes from 'prop-types'
import styled, { ThemeContext, css } from 'styled-components'
import { ifProp } from 'styled-tools'

import { Text } from '@components/Text'
import { Icon } from '@components/Icon'

import Separator from './Separator'
import Interable from './Interable'

const Container = styled.div`
  display: flex;
  flex-direction: column;
`

const Content = styled.div`
  ${ifProp(
    { toggled: true },
    css`
      padding: 10px 15px;
    `
  )}
`

const Header = styled(Text)`
  cursor: pointer;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`

export default function Control({ open, children }) {
  const { navigation } = useContext(ThemeContext)
  const [toggled, setToggled] = useState(open)

  const toToggle = ({ target, currentTarget }) => {
    const interable = [].find.call(currentTarget.childNodes, node =>
      node.hasAttribute('data-interable')
    )

    if (interable && interable.contains(target)) {
      return
    }

    setToggled(!toggled)
  }

  return (
    <Container onClick={toToggle}>
      <Header
        size={Text.size.twelve}
        color={navigation.text.primary}
        weight={Text.weight.bold}
        bottom={5}
      >
        <Icon
          name={toggled ? 'less' : 'more'}
          width={10}
          height={10}
          right={5}
        />
        Controle
      </Header>
      <Interable>
        <Content toggled={toggled}>{toggled && children}</Content>
      </Interable>
      <Separator />
    </Container>
  )
}

Control.defaultProps = {
  open: true
}

Control.propTypes = {
  open: PropTypes.bool.isRequired
}
