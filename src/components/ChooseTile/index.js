import React, { useState, useContext, memo } from 'react'
import styled, { css, ThemeContext } from 'styled-components'
import { TileLayer } from 'react-leaflet'
import PropTypes from 'prop-types'
import { theme, prop, switchProp, ifProp } from 'styled-tools'
import { motion } from 'framer-motion'

import { Icon } from '@components/Icon'
import { Text } from '@components/Text'


const TILE = {
  mono: {
    id: 'mono',
    value: 'cjwm765e00uul1dmzjkqn5xju'
  },
  color: {
    id: 'color',
    value: 'cjt7hm1hb5ib41fs6q2eh4vl9'
  },
  satellite: {
    id: 'satellite',
    value: 'cjxko1zlo04np1cmwe632wh35'
  },
  dark: {
    id: 'dark',
    value: 'cjxko5tme04r81cmwxowzbkku'
  }
}

const Button = styled.div`
  width: 35px;
  height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${ifProp(
    { isOpen: true },
    theme('colors.blue.fifty'),
    theme('colors.white.hundred')
  )};
  border-radius: ${theme('border.radius.fifty')};
  cursor: pointer;
  position: absolute;
  left: 0;
  bottom: 0;
  transition: all 0.1s linear;

  &:hover {
    background-color: ${theme('colors.blue.fifty')};
  }
`

const Container = styled.div`
  left: 17px;
  bottom: 26px;
  position: absolute;
  z-index: ${theme('zindex.above')};
  display: flex;
  justify-content: center;
  align-items: center;
`

const Chooser = styled.div`
  width: 35px;
  height: 35px;
  border-radius: ${theme('border.radius.fifty')};

  ${ifProp(
    { isActive: true },
    css`
      border: 2px solid ${prop('color')};
    `
  )}

  ${switchProp('type', {
    color: css`
      background: linear-gradient(
        90deg,
        ${theme('colors.yellow.fifty')} 50%,
        ${theme('colors.blue.fifty')} 50%
      );
    `,
    dark: css`
      background: linear-gradient(
        90deg,
        ${theme('colors.gray.fifty')} 50%,
        ${theme('colors.ebony.zero')} 50%
      );
    `,
    mono: css`
      background: linear-gradient(
        90deg,
        ${theme('colors.white.hundred')} 50%,
        ${theme('colors.ebony.sixty')} 50%
      );
    `,
    satellite: css`
      background: linear-gradient(
        90deg,
        ${theme('colors.ebony.zero')} 50%,
        ${theme('colors.green.twenty')} 50%
      );
    `
  })}
`

const Content = styled(motion.div)`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Name = styled(Text)`
  opacity: 1;
  text-transform: capitalize;
`

const Choose = memo(({ id, name, type, onClick, tile, isOpen }) => {
  const { colors } = useContext(ThemeContext)

  const isActive = tile.id === name

  const getColor = {
    mono: colors.ebony.zero,
    color: colors.ebony.zero,
    satellite: colors.white.hundred,
    dark: colors.white.hundred
  }

  return (
    <Content
      onClick={onClick}
      initial="exit"
      animate={isOpen ? 'enter' : 'exit'}
      variants={{
        enter: () => ({
          x: 43 + id * 8,
          display: 'flex'
        }),
        exit: () => ({
          x: -(35 * id + 2),
          transition: {
            duration: 0.2
          },
          transitionEnd: {
            display: 'none'
          }
        })
      }}
    >
      <motion.div
        initial="exit"
        variants={{
          enter: {
            opacity: 1,
            transition: {
              delay: 0.4
            }
          },
          exit: {
            opacity: 0
          }
        }}
      >
        <Name bottom={5} size={Text.size.twelve} color={getColor[tile.id]}>
          {name}
        </Name>
      </motion.div>
      <Chooser type={type} color={getColor[tile.id]} isActive={isActive} />
    </Content>
  )
})

Choose.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['mono', 'color', 'satellite', 'dark']).isRequired,
  onClick: PropTypes.func.isRequired,
  tile: PropTypes.shape({
    id: PropTypes.oneOf(['mono', 'color', 'satellite', 'dark']).isRequired,
    value: PropTypes.string.isRequired
  })
}

export const ChooseTile = memo(({ setTile, tile }) => {
  const { colors } = useContext(ThemeContext)
  const [isOpen, setIsOpen] = useState(false)

  const buttons = ['color', 'dark', 'mono', 'satellite']

  const toggle = () => setIsOpen(!isOpen)

  const choose = color => () => {
    toggle()

    setTile(TILE[color])
  }

  return (
    <>
      <TileLayer
        url={`https://api.mapbox.com/styles/v1/somar-olavo/${tile.value}/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1Ijoic29tYXItb2xhdm8iLCJhIjoiY2pscXphaXJrMmxhYjNsbjM0bmZzMmY1ciJ9.FBzDk-1pBrBkqNiwLbr5xQ`}
      />

      <Container>
        <Button onClick={toggle} isOpen={isOpen}>
          {isOpen ? (
            <Icon
              name={Icon.name.close}
              width={12}
              height={12}
              color={colors.white.hundred}
            />
          ) : (
            <Icon width={20} name={Icon.name.layer} height={20} />
          )}
        </Button>

        {buttons.map((button, index) => (
          <Choose
            id={index}
            key={index}
            name={button}
            type={button}
            isOpen={isOpen}
            tile={tile}
            onClick={choose(button)}
          />
        ))}
      </Container>
    </>
  )
})

ChooseTile.TILE = TILE
