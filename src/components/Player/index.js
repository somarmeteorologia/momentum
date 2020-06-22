import React, { useContext, useEffect } from 'react'
import styled, { ThemeContext } from 'styled-components'
import PropTypes from 'prop-types'
import { prop, ifProp, theme } from 'styled-tools'

import { Icon } from '@components/Icon'

const Content = styled.div`
  width: 100%;
  max-width: 775px;
  height: 35px;
  position: absolute;
  left: 50%;
  bottom: 30px;
  transform: translateX(-50%);
  z-index: ${theme('zindex.above')};
  background-color: ${theme('player.bg.primary')};
  border-radius: ${theme('border.radius.twentyFour')};
  opacity: ${theme('player.bg.opacity')};
  display: flex;
  justify-content: center;
  align-items: center;
  user-select: none;
`

const Timeline = styled.div`
  width: 100%;
  height: 3px;
  border-radius: ${theme('border.radius.twentyFour')};
  background-color: ${theme('player.progress.off')};
  margin-right: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  &::before {
    width: ${prop('percentage')}%;
    height: 3px;
    border-radius: ${theme('border.radius.twentyFour')};
    content: '';
    display: block;
    background-color: ${theme('player.progress.on')};
    position: absolute;
  }
`

const Controls = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 15px;
  height: 100%;

  .action {
    background-color: ${theme('player.icon.primary')};
    border-radius: ${theme('border.radius.fifty')};
    width: 24px;
    height: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 10px;
    padding-left: ${ifProp('played', '0', '3px')};
  }
`

const Interactive = styled(Icon)`
  cursor: pointer;
`

const Tooltip = styled.div`
  font-family: ${theme('font.family.inter')};
  font-size: ${theme('font.size.twelve')};
  box-shadow: ${theme('player.shadow.primary')};
  height: 23px;
  line-height: 23px;
  padding: 0 10px;
  left: calc(${prop('percentage')}% - 48px);
  border-radius: ${theme('border.radius.four')};
  background-color: ${theme('player.bg.secondary')};
  text-align: center;
  position: relative;
  bottom: 25px;

  &::after {
    content: '';
    background-color: ${theme('player.bg.secondary')};
    width: 10px;
    height: 10px;
    display: block;
    position: absolute;
    transform: rotate(315deg) translateX(-50%);
    top: 14px;
    left: 50%;
  }
`

export function Player({
  played,
  onPlayPause,
  onPreviousNext,
  index,
  indexes
}) {
  const { player } = useContext(ThemeContext)
  const date = indexes[index]
  const percentage = (index / (indexes.length - 1)) * 100

  let count = 0
  let timeout

  useEffect(() => {
    timeout && clearTimeout(timeout)
  }, [])

  const handlePrevious = () => {
    timeout && clearTimeout(timeout)
    count++

    timeout = setTimeout(() => {
      count === 2
        ? onPreviousNext(0)
        : onPreviousNext(index => (indexes[index - 1] ? index - 1 : 0))
      count = 0
    }, 250)
  }

  return (
    <Content>
      <Controls played={played}>
        <Interactive
          name="back"
          color={player.icon.primary}
          onClick={handlePrevious}
          width={16}
          height={14}
        />

        <Interactive
          className="action"
          name={played ? 'pause' : 'play'}
          color={player.icon.secondary}
          onClick={onPlayPause}
          width={14}
          height={14}
        />

        <Interactive
          name="advance"
          color={player.icon.primary}
          onClick={() =>
            onPreviousNext(index => (indexes[index + 1] ? index + 1 : 0))
          }
          width={16}
          height={14}
        />
      </Controls>
      <Timeline percentage={percentage}>
        <Tooltip percentage={percentage}>{date}</Tooltip>
      </Timeline>
    </Content>
  )
}

Player.defaultProps = {
  played: false
}

Player.propTypes = {
  played: PropTypes.bool,
  onPlayPause: PropTypes.func.isRequired,
  onPreviousNext: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
  indexes: PropTypes.array.isRequired
}
