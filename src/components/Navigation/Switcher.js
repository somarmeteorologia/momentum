import React, { useContext, useEffect } from 'react'
import PropTypes from 'prop-types'
import Root from './Root'
import Nested from './Nested'
import { Context } from './Context'
import { getHasOpen, setOpenById } from './utils'

export default function Switcher({ toOpen, height }) {
  const { structure, setStructure } = useContext(Context)

  const isEveryClose = !getHasOpen(structure).length
  const [open] = getHasOpen(structure)

  useEffect(() => {
    toOpen && setStructure(setOpenById(toOpen())(structure))
  }, [])

  return (
    <>
      {isEveryClose ? (
        <Root />
      ) : (
        <Nested
          id={open.id}
          parent={open.parent}
          onBack={open.onBack}
          height={height}
        />
      )}
    </>
  )
}

Switcher.propTypes = {
  toOpen: PropTypes.func
}
