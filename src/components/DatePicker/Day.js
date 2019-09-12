import React, { memo, useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import dayjs from 'dayjs'
import DayPicker from 'react-day-picker'
import { WEEKDAYS_SHORT, WEEKDAYS_LONG, MONTHS } from './locale'

export const Day = memo(
  ({ navbar, initialDate, onDayChange, setPlaceholder, toClose, ...props }) => {
    const [date, setDate] = useState(initialDate || undefined)

    const handleDayChange = day => {
      onDayChange(day)
      setDate(day)
      setPlaceholder(formatDate(day))
      toClose()
    }

    const formatDate = date => dayjs(date).format('DD/MM/YYYY')

    useEffect(() => {
      date && setPlaceholder(formatDate(date))
    }, [date])

    return (
      <>
        <DayPicker
          onDayClick={handleDayChange}
          showOutsideDays
          locale="pt-br"
          months={MONTHS}
          weekdaysLong={WEEKDAYS_LONG}
          weekdaysShort={WEEKDAYS_SHORT}
          selectedDays={date}
          navbarElement={navbar}
          {...props}
        />
      </>
    )
  }
)

Day.defaultProps = {
  onDayChange: () => {}
}

Day.propTypes = {
  navbar: PropTypes.func.isRequired,
  initialDate: PropTypes.date,
  onDayChange: PropTypes.func,
  setPlaceholder: PropTypes.func.isRequired,
  toClose: PropTypes.func.isRequired
}
