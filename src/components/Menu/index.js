import React, { useContext, useState, memo } from 'react'
import styled, { ThemeContext } from 'styled-components'
import { theme } from 'styled-tools'
import PropTypes from 'prop-types'
import { motion } from 'framer-motion'

import { Icon } from '@components/Icon'

const Container = styled(motion.div)`
  height: 100vh;
  background-color: ${theme('menu.bg.primary')};
  position: relative;
  display: block;
  box-shadow: ${theme('navigation.shadow.primary')};
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

const Handler = styled(motion.div)`
  width: 300px;
  height: 100%;
  box-sizing: content-box;
  padding-right: 20px;
  position: fixed;
  display: block;
  z-index: ${theme('zindex.above')};
  top: 0;
  left: 0;
  touch-action: pan-y;
`

const Overlay = styled(motion.div)`
  width: calc(100% - 300px);
  height: 100%;
  position: absolute;
  z-index: ${theme('zindex.above')};
  right: 0;
  top: 0;
  background-color: transparent;
`

const Content = styled(motion.div)``

const Menuable = memo(
  ({ children, onChange, isOpen, setOpen, draggable, ...props }) => {
    const [hasMenuHover, setHasMenuHover] = useState(false)
    const [hasToggleHover, setHasToggleHover] = useState(false)
    const { menu } = useContext(ThemeContext)

    return (
      <Container
        {...props}
        data-testid="menu"
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
              setOpen(!isOpen)
              onChange(!isOpen)
            }}
          >
            <Icon
              width={10}
              height={10}
              name={isOpen ? 'right' : 'left'}
              color={
                hasToggleHover ? menu.toggle.secondary : menu.toggle.tertiary
              }
            />
          </Toggleable>
        )}
      </Container>
    )
  }
)

export const Menu = memo(
  ({ isOpen, setOpen, onChange, children, draggable }) => {
    const { animations } = useContext(ThemeContext)

    const onPan = (_, info) => setOpen(info.offset.x < 0)

    return (
      <>
        {draggable ? (
          <>
            <Handler
              initial={animations.visible}
              variants={{
                visible: {
                  x: 0
                },
                collapsed: {
                  x: -300
                }
              }}
              animate={isOpen ? animations.collapsed : animations.visible}
              onPan={onPan}
            >
              <Menuable
                isOpen={isOpen}
                draggable={draggable}
                setOpen={setOpen}
                onChange={onChange}
              >
                <Content
                  initial={animations.visible}
                  animate={isOpen ? animations.collapsed : animations.visible}
                  variants={{
                    visible: {
                      opacity: 1,
                      x: 0
                    },
                    collapsed: {
                      opacity: 0,
                      x: -300
                    }
                  }}
                >
                  {children}
                </Content>
              </Menuable>
            </Handler>

            {!isOpen && <Overlay onClick={() => setOpen(true)} />}
          </>
        ) : (
          <Menuable
            draggable={draggable}
            initial={animations.visible}
            animate={isOpen ? animations.collapsed : animations.visible}
            variants={{
              visible: {
                minWidth: '300px'
              },
              collapsed: {
                minWidth: '20px'
              }
            }}
            isOpen={isOpen}
            setOpen={setOpen}
            onChange={onChange}
          >
            <Content
              initial={animations.visible}
              animate={isOpen ? animations.collapsed : animations.visible}
              variants={{
                visible: {
                  opacity: 1,
                  x: 0
                },
                collapsed: {
                  opacity: 0,
                  x: -300
                }
              }}
            >
              {children}
            </Content>
          </Menuable>
        )}
      </>
    )
  }
)

Menu.propTypes = {
  onChange: PropTypes.func,
  isOpen: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired,
  draggable: PropTypes.bool
}

Menu.defaultProps = {
  draggable: false,
  onChange: () => {}
}
