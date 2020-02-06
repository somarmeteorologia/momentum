import React, { memo, useState, useContext, useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'
import PropTypes from 'prop-types'
import styled, { ThemeContext } from 'styled-components'
import { prop, ifProp, theme } from 'styled-tools'
import { rgba } from 'polished'

import 'react-day-picker/lib/style.css'

import { Icon } from '@components/Icon'
import { Closeable } from '@components/Closeable'

import { Day } from './Day'
import { Week } from './Week'
import { Range } from './Range'

const Navbarable = styled.div`
  position: relative;

  .left,
  .right {
    position: absolute;
    top: 18px;
    height: 24px;
    width: 24px;
    border-radius: ${theme('border.radius.four')};
    background-color: ${theme('datepicker.bg.primary')};
    cursor: pointer;
  }

  .left {
    left: 15px;
  }

  .right {
    right: 15px;
  }
`

const Container = styled.div`
  border-radius: ${theme('border.radius.four')};
  font-family: ${theme('font.family.inter')};
  box-shadow: ${theme('datepicker.shadow.primary')};
  position: absolute;
  top: ${prop('top')}px;
  left: ${prop('left')}px;
  z-index: ${theme('zindex.above')};
  background: linear-gradient(
    180deg,
    ${theme('datepicker.bg.secondary')} 0%,
    ${theme('datepicker.bg.secondary')} 30%,
    ${theme('datepicker.bg.primary')} 30%
  );

  .Range {
    .DayPicker-Day--selected:not(.DayPicker-Day--start):not(.DayPicker-Day--end):not(.DayPicker-Day--outside) {
      font-weight: ${theme('font.weight.bold')};
      color: ${theme('datepicker.text.primary')};
      background: ${({ theme }) =>
        rgba(theme.datepicker.bg.secondary.toString(), 0.2)} !important;
    }

    .DayPicker-Day {
      border-radius: 0 !important;
    }

    .DayPicker-Day--start {
      border-radius: ${theme('border.radius.twentyFour')} 0 0
        ${theme('border.radius.twentyFour')} !important;
    }

    .DayPicker-Day--end {
      border-radius: 0 ${theme('border.radius.twentyFour')}
        ${theme('border.radius.twentyFour')} 0 !important;
    }
  }

  .DayPicker-Day {
    font-weight: ${theme('font.weight.light')};
    font-size: ${theme('font.size.twelve')};
    color: ${theme('datepicker.text.primary')};
    max-width: 35px;
    width: 35px;
    height: 35px;
  }

  .DayPicker-Day--outside {
    color: ${theme('datepicker.text.off')};
  }

  .DayPicker-Day--today {
    color: ${theme('datepicker.text.primary')};
  }

  .DayPicker-Day--selected {
    background-color: ${theme('datepicker.bg.secondary')} !important;
    border-radius: ${theme('border.radius.fifty')};
    font-weight: ${theme('font.weight.bold')};

    &:focus {
      outline: none;
    }
  }

  .DayPicker:not(.DayPicker--interactionDisabled)
    .DayPicker-Day:not(.DayPicker-Day--hoverRange):not(.DayPicker-Day--disabled):not(.DayPicker-Day--selected):not(.DayPicker-Day--outside):hover {
    font-weight: ${theme('font.weight.bold')};
    border-radius: ${theme('border.radius.fifty')} !important;
    background: ${({ theme }) =>
      rgba(theme.datepicker.bg.secondary.toString(), 0.2)} !important;
  }

  .DayPicker-Day--selectedRange {
    border-radius: 0 !important;
  }

  .DayPicker-Day--hoverRange {
    border-radius: 0;
    font-weight: ${theme('font.weight.bold')};
    color: ${theme('datepicker.text.primary')};
    background: ${({ theme }) =>
      rgba(theme.datepicker.bg.secondary.toString(), 0.2)} !important;
  }

  .DayPicker-Day--hoverRange:first-of-type,
  .DayPicker-Day--selected:first-of-type {
    border-radius: ${theme('border.radius.twentyFour')} 0 0
      ${theme('border.radius.twentyFour')} !important;
  }

  .DayPicker-Day--hoverRange:last-of-type,
  .DayPicker-Day--selected:last-of-type {
    border-radius: 0 ${theme('border.radius.twentyFour')}
      ${theme('border.radius.twentyFour')} 0 !important;
  }

  .DayPicker-Caption > div {
    font-size: ${theme('font.size.fourteen')};
    font-weight: ${theme('font.weight.bold')} !important;
    text-align: center;
    color: ${theme('datepicker.text.secondary')};
    margin-top: -13px;
    margin-bottom: 10px;
  }

  .DayPicker-Months {
    flex-wrap: inherit;
  }

  .DayPicker-Month {
    margin-top: 2em;
  }

  .DayPicker-Weekday {
    font-size: ${theme('font.size.twelve')};
    font-weight: ${theme('font.weight.bold')};
    color: ${theme('datepicker.text.secondary')};
  }

  .DayPicker-Day--disabled {
    pointer-events: none;
    color: ${theme('datepicker.text.off')};
  }
`

const Input = styled.div`
  height: 40px;
  width: ${ifProp('full', '100%', '283px')};
  margin-bottom: 10px;
  border: ${theme('datepicker.border.primary')};
  border-radius: ${theme('border.radius.four')};
  background-color: ${theme('datepicker.bg.tertiary')};
  display: flex;
  align-items: center;
  cursor: pointer;

  p {
    color: ${theme('datepicker.text.tertiary')};
    font-family: ${theme('font.family.inter')};
    font-size: ${theme('font.size.fourteen')};
  }
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Navbar = ({ onPreviousClick, onNextClick }) => {
  const { datepicker } = useContext(ThemeContext)

  return (
    <Navbarable>
      <Icon
        name="left"
        className="left"
        color={datepicker.icon.primary}
        width={9}
        height={9}
        onClick={() => onPreviousClick()}
      />
      <Icon
        name="right"
        className="right"
        color={datepicker.icon.primary}
        width={9}
        height={9}
        onClick={() => onNextClick()}
      />
    </Navbarable>
  )
}

export const DatePicker = memo(
  ({
    appearence,
    initialDate,
    onDayChange,
    onWeekChange,
    onRangeChange,
    align,
    full,
    ...props
  }) => {
    const [placeholder, setPlaceholder] = useState('')
    const [isOpen, setIsOpen] = useState(false)
    const [position, setPosition] = useState({
      left: 0,
      top: 0
    })
    const { datepicker } = useContext(ThemeContext)
    const inputRef = useRef(null)
    const containerRef = useRef(null)

    const toClose = () => setIsOpen(false)

    const isDay = () => appearence === 'day'
    const isWeek = () => appearence === 'week'
    const isRange = () => appearence === 'range'

    useEffect(() => {
      const placeholder = isDay()
        ? 'Selecione uma data'
        : isWeek() || isRange()
        ? 'Data início - Data final'
        : ''

      setPlaceholder(placeholder)
    }, [])

    const setPositionByOffset = () => {
      const { top, left } = inputRef.current.getBoundingClientRect()

      /**
       * @todo Corrigir regra de alinhamento por posição quando align igual a center
       */
      const adjustedLeft =
        align === DatePicker.align.left ? left : left - 654 / 2

      const adjustedTop = top + 50

      setPosition({
        left: adjustedLeft,
        top: adjustedTop
      })
    }

    useEffect(() => {
      if (!inputRef.current) {
        return
      }

      setPositionByOffset()

      window.addEventListener('resize', setPositionByOffset)

      return () => window.removeEventListener('resize', setPositionByOffset)
    }, [inputRef])

    const mapping = {
      day: (
        <Day
          navbar={Navbar}
          initialDate={initialDate}
          onDayChange={onDayChange}
          setPlaceholder={setPlaceholder}
          toClose={toClose}
          {...props}
        />
      ),
      week: (
        <Week
          navbar={Navbar}
          initialDate={initialDate}
          onWeekChange={onWeekChange}
          setPlaceholder={setPlaceholder}
          toClose={toClose}
          {...props}
        />
      ),
      range: (
        <Range
          navbar={Navbar}
          initialDate={initialDate}
          onRangeChange={onRangeChange}
          setPlaceholder={setPlaceholder}
          toClose={toClose}
          {...props}
        />
      )
    }

    const Picker = mapping[appearence]

    const { left, top } = position

    return (
      <Content>
        <Input ref={inputRef} onClick={() => setIsOpen(!isOpen)} full={full}>
          <Icon
            name="calendar"
            color={datepicker.icon.tertiary}
            left={13}
            right={13}
            width={24}
            height={24}
          />
          <p>{placeholder}</p>
        </Input>

        {isOpen &&
          createPortal(
            <Closeable whenClose={toClose}>
              <Container ref={containerRef} left={left} top={top}>
                {Picker}
              </Container>
            </Closeable>,
            document.body
          )}
      </Content>
    )
  }
)

DatePicker.align = {
  left: 'left',
  center: 'center'
}

DatePicker.defaultProps = {
  align: DatePicker.align.center
}

DatePicker.propTypes = {
  appearence: PropTypes.oneOf(['day', 'week', 'range']),
  align: PropTypes.oneOf(['left', 'center']),
  initialDate: PropTypes.date,
  onDayChange: PropTypes.func,
  onWeekChange: PropTypes.func,
  onRangeChange: PropTypes.func
}

DatePicker.appearence = {
  day: 'day',
  week: 'week',
  range: 'range'
}
