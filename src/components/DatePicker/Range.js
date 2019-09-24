import React, { memo, useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import dayjs from 'dayjs'
import DayPicker, { DateUtils } from 'react-day-picker'
import { WEEKDAYS_SHORT, WEEKDAYS_LONG, MONTHS } from './locale'

export const Range = memo(
  ({
    navbar,
    initialDate,
    onRangeChange,
    setPlaceholder,
    toClose,
    ...props
  }) => {
    const [range, setRange] = useState({
      from: initialDate || null,
      to: null,
      enteredTo: null
    })

    const isSelectingFirstDay = (from, to, day) => {
      const isBeforeFirstDay = from && DateUtils.isDayBefore(day, from)
      const isRangeSelected = from && to
      return !from || isBeforeFirstDay || isRangeSelected
    }

    const handleDayClick = day => {
      const { from, to } = range

      if (from && to && day >= from && day <= to) {
        setRange({
          from: null,
          to: null,
          enteredTo: null
        })
        return
      }
      if (isSelectingFirstDay(from, to, day)) {
        setRange({
          from: day,
          to: null,
          enteredTo: null
        })
      } else {
        setRange({
          from,
          to: day,
          enteredTo: day
        })
        onRangeChange(range)
        toClose()
      }
    }

    const handleDayMouseEnter = day => {
      const { from, to } = range

      !isSelectingFirstDay(from, to, day) &&
        setRange({
          from,
          to,
          enteredTo: day
        })
    }

    const formatDate = date => dayjs(date).format('DD/MM/YYYY')

    useEffect(() => {
      range.from &&
        setPlaceholder(
          `${formatDate(range.from)} - ${formatDate(range.enteredTo)}`
        )
    }, [range])

    return (
      <DayPicker
        className="Range"
        numberOfMonths={2}
        fromMonth={range.from}
        selectedDays={[range.from, { from: range.from, to: range.enteredTo }]}
        modifiers={{ start: range.from, end: range.enteredTo }}
        onDayClick={handleDayClick}
        onDayMouseEnter={handleDayMouseEnter}
        showOutsideDays
        locale="pt-br"
        months={MONTHS}
        weekdaysLong={WEEKDAYS_LONG}
        weekdaysShort={WEEKDAYS_SHORT}
        navbarElement={navbar}
        {...props}
      />
    )
  }
)

Range.defaultProps = {
  onRangeChange: () => {}
}

Range.propTypes = {
  navbar: PropTypes.func.isRequired,
  initialDate: PropTypes.date,
  onRangeChange: PropTypes.func,
  setPlaceholder: PropTypes.func.isRequired,
  toClose: PropTypes.func.isRequired
}
