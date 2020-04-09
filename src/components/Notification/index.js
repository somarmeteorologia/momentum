import React, { memo, useContext, useEffect } from 'react'
import styled, { css, ThemeContext } from 'styled-components'
import PropTypes from 'prop-types'
import { motion } from 'framer-motion'
import { switchProp, theme } from 'styled-tools'

import { Icon } from '@components/Icon'

const Container = styled(motion.div)`
  width: 385px;
  height: 110px;
  padding: 16px;
  border-radius: ${theme('border.radius.four')};
  background-color: ${theme('notification.bg.primary')};
  color: ${theme('notification.text.primary')};
  z-index: ${theme('zindex.above')};
  position: absolute;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  ${switchProp('position', {
    topLeft: css`
      top: 25px;
      left: 25px;
    `,
    topRight: css`
      top: 25px;
      right: 25px;
    `,
    topCenter: css`
      top: 25px;
      left: 0;
      right: 0;
      margin-left: auto;
      margin-right: auto;
    `,
    bottomLeft: css`
      bottom: 25px;
      left: 25px;
    `,
    bottomRight: css`
      bottom: 25px;
      right: 25px;
    `,
    bottomCenter: css`
      bottom: 25px;
      left: 0;
      right: 0;
      margin-left: auto;
      margin-right: auto;
    `
  })}

  .close {
    position: absolute;
    top: 16px;
    right: 16px;
    cursor: pointer;
  }
`

const State = styled.div`
  width: 45px;
  min-width: 45px;
  height: 45px;
  min-height: 45px;
  border-radius: ${theme('border.radius.four')};
  display: flex;
  justify-content: center;
  align-items: center;

  ${switchProp('state', {
    primary: css`
      background-color: ${theme('notification.state.primary')};
    `,
    danger: css`
      background-color: ${theme('notification.state.danger')};
    `,
    warning: css`
      background-color: ${theme('notification.state.warning')};
    `,
    success: css`
      background-color: ${theme('notification.state.success')};
    `
  })};
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 80px;
  padding-left: 16px;
  padding-right: 16px;
`

const Title = styled.div`
  margin-bottom: 5px;
  color: ${theme('colors.red.fifty')};
`

export const Notification = memo(
  ({
    title,
    description,
    isOpen,
    toClose,
    icon,
    state,
    position,
    duration
  }) => {
    const { notification } = useContext(ThemeContext)

    useEffect(() => {
      if (isOpen && duration) {
        const timeout = setTimeout(() => {
          toClose()
        }, duration * 1000)

        return () => {
          clearTimeout(timeout)
        }
      }
    }, [isOpen])

    const chooseColor = state => {
      const values = {
        primary: notification.icon.primary,
        danger: notification.icon.primary,
        warning: notification.icon.secondary
      }

      return values[state]
    }

    return (
      <Container
        initial="hidden"
        animate={isOpen ? 'visible' : 'hidden'}
        position={position}
        variants={{
          hidden: {
            transitionEnd: {
              display: 'none'
            },
            opacity: 0,
            y: ({ position }) => (position.startsWith('top') ? -150 : 150)
          },
          visible: {
            display: 'flex',
            opacity: 1,
            y: 0
          }
        }}
      >
        <Icon
          name="close"
          className="close"
          onClick={toClose}
          width={14}
          height={14}
          color={notification.close.primary}
        />

        <State state={state}>
          {icon({
            color: chooseColor(state)
          })}
        </State>

        <Content>
          <Title>{title({ color: notification.text.primary })}</Title>
          {description({ color: notification.text.primary })}
        </Content>
      </Container>
    )
  }
)

Notification.defaultProps = {
  isOpen: false,
  state: 'primary',
  position: 'topRight',
  duration: 0,
  toClose: () => {}
}

Notification.propTypes = {
  duration: PropTypes.number,
  toClose: PropTypes.func,
  state: PropTypes.oneOf(['primary', 'danger', 'warning']),
  title: PropTypes.func.isRequired,
  description: PropTypes.func.isRequired,
  icon: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired
}

Notification.state = {
  primary: 'primary',
  danger: 'danger',
  warning: 'warning',
  success: 'success'
}

Notification.position = {
  topLeft: 'topLeft',
  topRight: 'topRight',
  topCenter: 'topCenter',
  bottomLeft: 'bottomLeft',
  bottomRight: 'bottomRight',
  bottomCenter: 'bottomCenter'
}
