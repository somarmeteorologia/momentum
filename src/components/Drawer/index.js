import React, { memo, useContext, Fragment } from 'react'
import styled, { css, ThemeContext } from 'styled-components'
import PropTypes from 'prop-types'
import posed from 'react-pose'
import { switchProp, prop } from 'styled-tools'

import { Icon } from '@components/Icon'
import { Closeable } from '@components/Closeable'

const Content = styled.div`
  padding: 25px 20px;
  overflow: auto;
  height: calc(100vh - 60px);
`

const Header = styled.div`
  border-bottom: ${prop('theme.drawer.border.primary')};
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px;
  position: relative;

  .title {
    color: ${prop('theme.drawer.text.primary')};
    font-family: ${prop('theme.font.family.inter')};
    font-size: ${prop('theme.font.size.fourteen')};
    font-weight: ${prop('theme.font.weight.bold')};
  }

  .close {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 20px;
    cursor: pointer;
  }
`

const Animated = posed(styled.div`
  z-index: ${prop('theme.zindex.modal')};
  box-shadow: ${prop('theme.drawer.shadow.primary')};
  max-width: ${prop('width')}px;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  position: absolute;
  top: 0;
  background-color: ${prop('theme.drawer.bg.primary')};

  ${switchProp('from', {
    right: css`
      right: 0;
    `,
    left: css`
      left: 0;
    `
  })};
`)({
  visible: {
    opacity: 1,
    transform: 'translateX(0%)',
    applyAtStart: {
      display: 'block'
    }
  },
  collapsed: {
    opacity: 0,
    transform: ({ from }) =>
      from === 'right' ? 'translateX(100%)' : 'translateX(-100%)',
    applyAtEnd: {
      display: 'none'
    }
  }
})

const renderContent = (title, toClose, drawer, children) => (
  <Fragment>
    <Header>
      <h3 className="title">{title}</h3>

      <Icon
        name="close"
        className="close"
        onClick={toClose}
        color={drawer.icon.primary}
      />
    </Header>
    <Content>{children}</Content>
  </Fragment>
)

export const Drawer = memo(
  ({ isOpen, toClose, title, children, outsideClose, ...props }) => {
    const { animations, drawer } = useContext(ThemeContext)

    return (
      <Animated
        {...props}
        pose={isOpen ? animations.visible : animations.collapsed}
      >
        {outsideClose ? (
          <Closeable whenClose={toClose}>
            {renderContent(title, toClose, drawer, children)}
          </Closeable>
        ) : (
          renderContent(title, toClose, drawer, children)
        )}
      </Animated>
    )
  }
)

Drawer.defaultProps = {
  isOpen: false,
  from: 'right',
  width: 280,
  outsideClose: false
}

Drawer.propTypes = {
  from: PropTypes.oneOf(['left', 'right']),
  isOpen: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  width: PropTypes.number.isRequired,
  toClose: PropTypes.func,
  outsideClose: PropTypes.bool
}
