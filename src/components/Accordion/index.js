import React, { memo, useState, useContext } from 'react'
import PropTypes from 'prop-types'
import posed from 'react-pose'
import styled, { css, ThemeContext } from 'styled-components'
import { ifProp, prop } from 'styled-tools'

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
  font-family: ${prop('theme.font.family.inter')};
  width: 100%;

  &:not(:last-child) {
    ${Headerable} {
      margin-bottom: 5px;
    }
  }

  .body {
    margin-top: 5px;
    padding: 14px 16px;
    font-size: ${prop('theme.font.size.twelve')};
    font-weight: ${prop('theme.font.weight.normal')};
    color: ${prop('theme.accordion.text.primary')};
    background-color: ${prop('theme.accordion.bg.primary')};
    border-radius: ${prop('theme.border.radius.four')};
    line-height: 150%;
  }
`

const Headerable = styled.div`
  height: 40px;
  padding: 14px 48px 14px 16px;
  position: relative;
  display: flex;
  align-items: center;
  font-size: ${prop('theme.font.size.fourteen')};
  font-weight: ${prop('theme.font.weight.bold')};
  color: ${prop('theme.accordion.text.primary')};
  background-color: ${prop('theme.accordion.bg.primary')};
  border-radius: ${prop('theme.border.radius.four')};
  cursor: pointer;

  .icon {
    position: absolute;
    right: 16px;
  }
`

const Bodyable = posed.div({
  visible: {
    applyAtStart: { display: 'block' },
    opacity: 1,
    transition: {
      duration: 300,
      ease: 'easeIn'
    }
  },
  hidden: {
    applyAtEnd: { display: 'none' },
    opacity: 0,
    transition: {
      duration: 300,
      ease: 'easeIn'
    }
  }
})

const Iconable = posed(styled.span`
  width: 16px;
  height: 16px;
`)({
  open: {
    rotate: 0,
    transition: {
      duration: 300,
      ease: 'easeIn'
    }
  },
  close: {
    rotate: '45deg',
    transition: {
      duration: 300,
      ease: 'easeIn'
    }
  }
})

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
            <Headerable onClick={() => setActive(id)}>
              {Header}
              <Iconable pose={active ? 'close' : 'open'} className="icon">
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
            <Bodyable pose={active ? 'visible' : 'hidden'} className="body">
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
