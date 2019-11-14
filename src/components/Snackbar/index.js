import React, { memo, useContext, useEffect } from 'react'
import styled, { ThemeContext } from 'styled-components'
import PropTypes from 'prop-types'
import { motion } from 'framer-motion'
import { theme } from 'styled-tools'

import { Text } from '@components/Text'

const Container = styled(motion.div)`
  width: 100%;
  max-width: 285px;
  padding: 16px;
  border-radius: ${theme('border.radius.four')};
  background-color: ${theme('snackbar.bg.primary')};
  color: ${theme('snackbar.text.primary')};
  z-index: ${theme('zindex.above')};
  position: absolute;
  bottom: 10px;
  left: 50%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Close = styled(Text)`
  cursor: pointer;
`

const Content = styled.div`
  display: flex;
`

export const Snackbar = memo(({ description, isOpen, toClose, duration }) => {
  const { snackbar } = useContext(ThemeContext)

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

  return (
    <Container
      initial="hidden"
      variants={{
        hidden: {
          transitionEnd: {
            display: 'none'
          },
          y: 150,
          opacity: 0
        },
        visible: {
          display: 'flex',
          y: 0,
          opacity: 1
        }
      }}
      animate={isOpen ? 'visible' : 'hidden'}
    >
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
        Fechar
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
