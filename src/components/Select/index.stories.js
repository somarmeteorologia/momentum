import React, { memo } from 'react'
import styled from 'styled-components'
import { storiesOf } from '@storybook/react'
import { useFormik } from 'formik'

import { GROUPS } from '@helpers/hierarchySeparators'
import { Container } from '@helpers/components/Container'

import { Reset } from '@components/Reset'
import { Icon } from '@components/Icon'
import { Select } from '@components/Select'

const Containerable = styled(Container)`
  flex-wrap: wrap;
`

const Wrapper = styled.div`
  display: flex;
  align-items: flex-end;
`

const Formik = memo(({ options }) => {
  const { values, setFieldValue } = useFormik({
    initialValues: {},
    onSubmit: console.info
  })

  console.log(values)

  return (
    <Select options={options} onChange={value => setFieldValue('raw', value)} />
  )
})

storiesOf(`${GROUPS.COMPONENTS}|Select`, module)
  .addDecorator(story => (
    <Containerable>
      <Reset />
      {story()}
    </Containerable>
  ))
  .add('Default', () => (
    <Select
      options={[
        { value: 1, text: 'Banana' },
        { value: 2, text: 'Apple' },
        { value: 3, text: 'Orange' }
      ]}
    />
  ))
  .add('With Formik', () => (
    <Formik
      options={[
        { value: 1, text: 'Banana' },
        { value: 2, text: 'Apple' },
        { value: 3, text: 'Orange' }
      ]}
    />
  ))
  .add('With icon', () => (
    <Select
      icon={({ color, width, height }) => (
        <Icon
          name={Icon.name.checked}
          color={color}
          width={width}
          height={height}
        />
      )}
      options={[
        { value: 1, text: 'Banana' },
        { value: 2, text: 'Apple' },
        { value: 3, text: 'Orange' }
      ]}
    />
  ))
  .add('With label', () => (
    <>
      <Select
        label="Select label"
        options={[
          { value: 1, text: 'Banana' },
          { value: 2, text: 'Apple' },
          { value: 3, text: 'Orange' }
        ]}
      />

      <Select
        label="Select label"
        options={[
          { value: 1, text: 'Banana' },
          { value: 2, text: 'Apple' },
          { value: 3, text: 'Orange' }
        ]}
        required
      />
    </>
  ))
  .add('Full', () => (
    <>
      <Select
        options={[
          { value: 1, text: 'Banana' },
          { value: 2, text: 'Apple' },
          { value: 3, text: 'Orange' }
        ]}
        full
      />
    </>
  ))
  .add('Disabled', () => (
    <Wrapper>
      <Select
        options={[
          { value: 1, text: 'Banana' },
          { value: 2, text: 'Apple' },
          { value: 3, text: 'Orange' }
        ]}
        disabled
      />
      <Select
        label="Select label"
        options={[
          { value: 1, text: 'Banana' },
          { value: 2, text: 'Apple' },
          { value: 3, text: 'Orange' }
        ]}
        disabled
      />

      <Select
        label="Select label"
        options={[
          { value: 1, text: 'Banana' },
          { value: 2, text: 'Apple' },
          { value: 3, text: 'Orange' }
        ]}
        required
        disabled
      />
    </Wrapper>
  ))
