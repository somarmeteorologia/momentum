import React, { useContext, useState } from 'react'
import PropTypes from 'prop-types'
import styled, { ThemeContext } from 'styled-components'
import { prop } from 'styled-tools'
import { Icon } from '@components/Icon'

import { Context } from './Context'
import { setOpenById, useInterable } from './utils'

const Container = styled.div`
  width: calc(100% - 10px);
  height: 50px;
  border-radius: ${prop('theme.border.radius.four')};
  line-height: 50px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  margin-left: 5px;
  margin-bottom: 10px;

  &:hover {
    background-color: ${prop('theme.navigation.bg.hover')};
  }

  &:hover path,
  &:hover span {
    color: ${prop('theme.navigation.text.hover')};
  }
`

const Title = ({ id, children, onPrevent, prevent, onClick }) => {
  const [hover, setHover] = useState(false)
  const { navigation } = useContext(ThemeContext)

  const details = hover ? navigation.text.hover : navigation.bg.tertiary

  const { structure, setStructure, interables, setInterables } = useContext(
    Context
  )

  const [setter, getter] = useInterable({ interables, setInterables })(id)

  const toOpen = ({ target, currentTarget }) => {
    const interable = [].find.call(currentTarget.childNodes, node =>
      node.hasAttribute('data-interable')
    )

    if (interable && interable.contains(target)) {
      return
    }

    onClick && onClick()

    if (prevent({ getter })) {
      return onPrevent && onPrevent()
    }

    setStructure(setOpenById(id)(structure))
  }

  return (
    <Container
      data-testid={`open-${id}`}
      onClick={toOpen}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {children({
        getter,
        setter,
        details
      })}

      <Icon
        name="right"
        color={hover ? navigation.text.hover : navigation.bg.primary}
        width={12}
        height={12}
      />
    </Container>
  )
}

Title.defaultProps = {
  prevent: () => {},
  onClick: () => {}
}

Title.propTypes = {
  prevent: PropTypes.func,
  onPrevent: PropTypes.func,
  onClick: PropTypes.func,
  id: PropTypes.string.isRequired
}

export default {
  id: 'group',
  Title
}
