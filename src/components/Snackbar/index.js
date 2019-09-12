import React, { memo, useContext, useEffect } from 'react'
import styled, { ThemeContext } from 'styled-components'
import PropTypes from 'prop-types'
import posed from 'react-pose'
import { prop } from 'styled-tools'

import { Text } from '@components/Text'

const Container = posed(styled.div`
  width: 100%;
  max-width: 285px;
  padding: 16px;
  border-radius: ${prop('theme.border.radius.four')};
  background-color: ${prop('theme.snackbar.bg.primary')};
  color: ${prop('theme.snackbar.text.primary')};
  z-index: ${prop('theme.zindex.above')};
  position: absolute;
  bottom: 10px;
  left: 50%;
  margin-right: -50%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`)({
  hidden: {
    applyAtEnd: {
      display: 'none'
    },
    y: 150,
    opacity: 0
  },
  visible: {
    applyAtStart: {
      display: 'flex'
    },
    y: 0,
    opacity: 1
  }
})

const Close = styled(Text)`
  cursor: pointer;
`

const Content = styled.div`
  display: flex;
`

export const Snackbar = memo(({ description, isOpen, toClose, duration }) => {
  const { snackbar } = useContext(ThemeContext)

  useEffect(() => {
    if (isOpen) {
      if (duration) {
        const timeout = setTimeout(() => {
          toClose()
        }, duration * 1000)

        return () => {
          clearTimeout(timeout)
        }
      }
    }
  }, [isOpen])

  return (
    <Container initialPose="hidden" pose={isOpen ? 'visible' : 'hidden'}>
      <Content>
        {description({
          size: Text.size.fourteen,
          color: snackbar.text.primary
        })}
      </Content>

      <Close
        left={10}
        onClick={toClose}
        color={snackbar.text.secondary}
        size={Text.size.fourteen}
        weight={Text.weight.bold}
      >
        Undo
      </Close>
    </Container>
  )
})

Snackbar.defaultProps = {
  isOpen: false,
  duration: 0,
  toClose: () => {}
}

Snackbar.propTypes = {
  duration: PropTypes.number,
  toClose: PropTypes.func,
  description: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired
}
