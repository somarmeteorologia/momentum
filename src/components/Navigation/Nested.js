import React, { useContext, Fragment, memo, useEffect, useState } from 'react'
import styled, { ThemeContext, css } from 'styled-components'
import PropTypes from 'prop-types'
import { prop, ifProp, theme } from 'styled-tools'

import { Context } from './Context'
import { Icon } from '@components/Icon'
import { Text } from '@components/Text'
import { setOpenById, titleMapper, getChildrensById } from './utils'

const Back = styled.div`
  height: 50px;
  background-color: ${theme('navigation.bg.secondary')};
  display: flex;
  justify-content: flex-start;
  align-items: center;
  cursor: pointer;
  padding: 15px 10px;
  box-shadow: none;
  transition: all 0.2s linear;

  &:after {
    content: '';
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    transition: all 0.2s linear;
  }

  ${ifProp(
    'isShadowed',
    css`
      box-shadow: -2px 5px 16px -7px ${theme('shadow.darker')};

      &:after {
        opacity: 1;
      }
    `
  )}
`

const Container = styled.div`
  width: 100%;
  height: ${prop('height')}px;
  padding-top: 15px;
`

const HEIGHT_BACK_COMPONENT = 50

function Nested({ parent, id, onBack, height }) {
  const theme = useContext(ThemeContext)
  const [isShadowed, setIsShadowed] = useState(false)
  const { structure, setStructure } = useContext(Context)

  const toParent = parent => () => {
    onBack()
    setStructure(setOpenById(parent)(structure))
  }

  const onScroll = event =>
    event.target.scrollTop > 0 ? setIsShadowed(true) : setIsShadowed(false)

  useEffect(() => {
    const component = document.getElementById('container')
    component.addEventListener('scroll', onScroll)

    return () => {
      component.removeEventListener('scroll', onScroll)
    }
  }, [])

  return (
    <Fragment>
      <Back onClick={toParent(parent)} isShadowed={isShadowed}>
        <Icon name="left" right={10} width={12} height={12} />
        <Text
          weight={Text.weight.bold}
          size={Text.size.fourteen}
          color={theme.navigation.text.primary}
        >
          Voltar
        </Text>
      </Back>

      <Container id="container" height={height - HEIGHT_BACK_COMPONENT}>
        {getChildrensById(structure, id).map(children => {
          const Title = titleMapper[children.type]
          return (
            <Fragment key={children.id}>
              <Title onClick={children.onClick} id={children.id}>
                {children.title}
              </Title>
            </Fragment>
          )
        })}
      </Container>
    </Fragment>
  )
}

Nested.defaultProps = {
  onBack: () => {}
}

Nested.propTypes = {
  onBack: PropTypes.func,
  parent: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired
}

export default memo(Nested)
