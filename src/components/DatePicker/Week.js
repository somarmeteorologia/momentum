import React, { memo, useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import dayjs from 'dayjs'
import DayPicker from 'react-day-picker'
import { WEEKDAYS_SHORT, WEEKDAYS_LONG, MONTHS } from './locale'

export const Week = memo(
  ({
    navbar,
    initialDate,
    onWeekChange,
    setPlaceholder,
    toClose,
    ...props
  }) => {
    const [week, setWeek] = useState([])
    const [hoverRange, setHoverRange] = useState({
      from: initialDate || null,
      to: null
    })

    const getWeekDays = weekStart => {
      const days = [weekStart]

      for (let i = 1; i < 7; i += 1) {
        days.push(
          dayjs(weekStart)
            .add(i, 'days')
            .toDate()
        )
      }
      return days
    }

    const getWeekRange = date => ({
      from: dayjs(date)
        .startOf('week')
        .toDate(),
      to: dayjs(date)
        .endOf('week')
        .toDate()
    })

    const handleWeekChange = date => {
      onWeekChange(getWeekDays(getWeekRange(date).from))
      setWeek(getWeekDays(getWeekRange(date).from))
      setPlaceholder(
        `${formatDate(getWeekRange(date).from)} - ${formatDate(
          getWeekRange(date).to
        )}`
      )
      toClose()
    }

    const handleHoverEnter = date => setHoverRange(getWeekRange(date))

    const handleHoverLeave = () => setHoverRange(undefined)

    const daysAreSelected = week.length > 0

    const modifiers = {
      hoverRange,
      selectedRange: daysAreSelected && {
        from: week[0],
        to: week[6]
      },
      hoverRangeStart: hoverRange && hoverRange.from,
      hoverRangeEnd: hoverRange && hoverRange.to,
      selectedRangeStart: daysAreSelected && week[0],
      selectedRangeEnd: daysAreSelected && week[6]
    }

    const formatDate = date => dayjs(date).format('DD/MM/YYYY')

    useEffect(() => {
      week.length &&
        setPlaceholder(`${formatDate(week[0])} - ${formatDate(week[6])}`)
    }, [week])

    return (
      <>
        <DayPicker
          locale="pt-br"
          months={MONTHS}
          weekdaysLong={WEEKDAYS_LONG}
          weekdaysShort={WEEKDAYS_SHORT}
          showOutsideDays
          modifiers={modifiers}
          selectedDays={week}
          onDayClick={handleWeekChange}
          onDayMouseEnter={handleHoverEnter}
          onDayMouseLeave={handleHoverLeave}
          navbarElement={navbar}
          {...props}
        />
      </>
    )
  }
)

Week.defaultProps = {
  onWeekChange: () => {}
}

Week.propTypes = {
  navbar: PropTypes.func.isRequired,
  initialDate: PropTypes.date,
  onWeekChange: PropTypes.func,
  setPlaceholder: PropTypes.func.isRequired,
  toClose: PropTypes.func.isRequired
}
