import React, { useContext, useState } from 'react'
import styled, { ThemeContext } from 'styled-components'
import { theme } from 'styled-tools'
import PropTypes from 'prop-types'
import { motion } from 'framer-motion'

import { Icon } from '@components/Icon'

const Container = styled(motion.div)`
  width: 100%;
  max-width: 300px;
  height: 100vh;
  background-color: ${theme('menu.bg.primary')};
  position: relative;
`

const Toggleable = styled.div`
  width: 23px;
  height: 23px;
  cursor: pointer;
  border: 1px solid ${theme('menu.toggle.secondary')};
  background-color: ${theme('menu.toggle.primary')};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: ${theme('border.radius.fifty')};
  position: absolute;
  right: -10px;
  top: 122px;
  z-index: ${theme('zindex.above')};

  &:hover {
    background-color: ${theme('menu.toggle.tertiary')};
  }
`

const Draggable = styled(motion.div)`
  width: 320px;
  position: absolute;
  z-index: ${theme('zindex.above')};
`

const Menuable = ({
  children,
  onToggled,
  toggled,
  setToggled,
  draggable,
  ...props
}) => {
  const [hasMenuHover, setHasMenuHover] = useState(false)
  const [hasToggleHover, setHasToggleHover] = useState(false)
  const { menu } = useContext(ThemeContext)

  return (
    <Container
      {...props}
      data-testid="container"
      onMouseEnter={() => setHasMenuHover(true)}
      onMouseLeave={() => setHasMenuHover(false)}
    >
      {children}

      {!draggable && hasMenuHover && (
        <Toggleable
          data-testid="toggleable"
          onMouseEnter={() => setHasToggleHover(true)}
          onMouseLeave={() => setHasToggleHover(false)}
          onClick={() => {
            setToggled(!toggled)
            onToggled(!toggled)
          }}
        >
          <Icon
            width={10}
            height={10}
            name={toggled ? 'right' : 'left'}
            color={
              hasToggleHover ? menu.toggle.secondary : menu.toggle.tertiary
            }
          />
        </Toggleable>
      )}
    </Container>
  )
}

export const Menu = ({ onToggled, children, draggable }) => {
  const [toggled, setToggled] = useState(false)
  const { animations } = useContext(ThemeContext)

  return (
    <>
      {draggable ? (
        <Draggable
          data-testid="draggable"
          drag="x"
          dragConstraints={{ left: -300, right: 0 }}
          dragTransition={{ bounceStiffness: 600, bounceDamping: 10 }}
        >
          <Menuable
            draggable={draggable}
            toggled={toggled}
            setToggled={setToggled}
            onToggled={onToggled}
          >
            {children}
          </Menuable>
        </Draggable>
      ) : (
        <Menuable
          draggable={draggable}
          initial={animations.visible}
          animate={toggled ? animations.collapsed : animations.visible}
          variants={{
            visible: {
              left: 0
            },
            collapsed: {
              left: -280
            }
          }}
          toggled={toggled}
          setToggled={setToggled}
          onToggled={onToggled}
        >
          {children}
        </Menuable>
      )}
    </>
  )
}

Menu.propTypes = {
  onToggled: PropTypes.func,
  draggable: PropTypes.bool
}

Menu.defaultProps = {
  draggable: false,
  onToggled: () => {}
}
