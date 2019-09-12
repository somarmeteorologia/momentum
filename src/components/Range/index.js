import React, { memo, useState } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { prop } from 'styled-tools'

import { Box } from '@components/Box'

const Container = styled(Box)`
  width: 100%;
`

const Slider = styled.input.attrs({ type: 'range' })`
  border-radius: ${prop('theme.border.radius.ten')};
  background: linear-gradient(
    90deg,
    ${prop('theme.slider.bg.on')} 0%,
    ${prop('theme.slider.bg.on')} ${prop('value')}%,
    ${prop('theme.slider.bg.off')} ${prop('value')}%
  );
  -webkit-appearance: none;
  width: 100%;
  height: 3px;
  outline: none;

  &::-webkit-slider-thumb {
    border-radius: ${prop('theme.border.radius.fifty')};
    border: ${prop('theme.slider.border.thumb')};
    background-color: ${prop('theme.slider.bg.thumb')};
    -webkit-appearance: none;
    appearance: none;
    width: 30px;
    height: 30px;
    cursor: pointer;
    box-shadow: 0px 1px 4px ${prop('theme.shadow.default')};
  }

  &::-moz-range-thumb {
    border-radius: ${prop('theme.border.radius.fifty')};
    border: ${prop('theme.slider.border.thumb')};
    background-color: ${prop('theme.slider.bg.thumb')};
    width: 30px;
    height: 30px;
    box-shadow: 0px 1px 4px ${prop('theme.shadow.default')};
    cursor: pointer;
  }
`

const Label = styled.div`
  font-size: ${prop('theme.font.size.twelve')};
  font-weight: ${prop('theme.font.weight.bold')};
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .text {
    color: ${prop('theme.slider.text.primary')};
    font-family: ${prop('theme.font.family.inter')};
  }

  .range {
    color: ${prop('theme.slider.text.secondary')};
    font-family: ${prop('theme.font.family.inter')};
  }
`

export const Range = memo(({ value, onChange, min, max, label, ...props }) => {
  const [range, setRange] = useState(value)

  const handleChange = ({ target }) => {
    const { value } = target

    onChange(value)
    setRange(value)
  }

  return (
    <Container {...props}>
      <Label>
        <p className="text">{label}</p>
        <p className="range">{range}%</p>
      </Label>
      <Slider min={min} max={max} value={range} onChange={handleChange} />
    </Container>
  )
})

Range.defaultProps = {
  value: 0,
  min: 0,
  max: 100,
  onChange: () => {}
}

Range.propTypes = {
  value: PropTypes.number,
  min: PropTypes.number,
  max: PropTypes.number,
  onChange: PropTypes.func,
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired
}
