import React, { memo, useState, useContext } from 'react'
import PropTypes from 'prop-types'
import styled, { css, ThemeContext } from 'styled-components'
import { ifProp, theme } from 'styled-tools'
import { motion } from 'framer-motion'

import { Icon } from '@components/Icon'

const Wrapper = styled.div`
  width: ${ifProp('full', '100%', '300px')};

  ${ifProp(
    'auto',
    css`
      min-width: 300px;
      width: auto;
    `
  )}
`

const Container = styled.div`
  font-family: ${theme('font.family.inter')};
  width: 100%;

  &:not(:last-child) {
    ${Headerable} {
      margin-bottom: 5px;
    }
  }

  .body {
    margin-top: 5px;
    padding: 14px 16px;
    font-size: ${theme('font.size.twelve')};
    font-weight: ${theme('font.weight.normal')};
    color: ${theme('accordion.text.primary')};
    background-color: ${theme('accordion.bg.primary')};
    border-radius: ${theme('border.radius.four')};
    line-height: 150%;
  }
`

const Headerable = styled.div`
  height: 40px;
  padding: 14px 48px 14px 16px;
  position: relative;
  display: flex;
  align-items: center;
  font-size: ${theme('font.size.fourteen')};
  font-weight: ${theme('font.weight.bold')};
  color: ${theme('accordion.text.primary')};
  background-color: ${theme('accordion.bg.primary')};
  border-radius: ${theme('border.radius.four')};
  cursor: pointer;

  .icon {
    position: absolute;
    right: 16px;
  }
`

const Bodyable = motion.div

// ({
// })

const Iconable = styled(motion.span)`
  width: 16px;
  height: 16px;
`

export const Accordion = memo(({ accordions, auto, full }) => {
  const { accordion } = useContext(ThemeContext)
  const [list, setList] = useState(accordions)

  const setActive = id => {
    const newList = list.map(item =>
      item.id === id ? { ...item, active: !item.active } : { ...item }
    )

    setList(newList)
  }

  return (
    <Wrapper auto={auto} full={full}>
      {list.map(({ id, active, Header, Body }) => {
        return (
          <Container key={id}>
            <Headerable
              data-testid="header-accordion"
              onClick={() => setActive(id)}
            >
              {Header}

              <Iconable
                className="icon"
                initial="close"
                animate={active ? 'open' : 'close'}
                variants={{
                  open: {
                    rotate: 0
                  },
                  close: {
                    rotate: '45deg'
                  }
                }}
              >
                <Icon
                  name={Icon.name.plus}
                  width={16}
                  height={16}
                  color={
                    active ? accordion.icon.secondary : accordion.icon.primary
                  }
                />
              </Iconable>
            </Headerable>
            <Bodyable
              animate={active ? 'visible' : 'hidden'}
              className="body"
              data-testid="body-accordion"
              variants={{
                visible: {
                  display: 'block',
                  opacity: 1
                },
                hidden: {
                  transitionEnd: {
                    display: 'none'
                  },
                  opacity: 0
                }
              }}
            >
              {Body}
            </Bodyable>
          </Container>
        )
      })}
    </Wrapper>
  )
})

Accordion.defaultProps = {
  auto: false,
  full: false
}

Accordion.propTypes = {
  accordions: PropTypes.array.isRequired,
  auto: PropTypes.bool,
  full: PropTypes.bool
}
