import React, { useContext, useEffect, Fragment } from 'react'
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
    <Fragment>
      {isEveryClose ? (
        <Root />
      ) : (
        <Nested
          id={open.id}
          parent={open.parent}
          onClick={() => console.log('oi')}
          onBack={open.onBack}
          height={height}
        />
      )}
    </Fragment>
  )
}

Switcher.propTypes = {
  toOpen: PropTypes.func
}
