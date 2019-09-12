import React, { useRef, useEffect } from 'react'
import PropTypes from 'prop-types'

export function Closeable({ children, whenClose, style, key }) {
  const closeable = useRef(null)

  useEffect(() => {
    document.addEventListener('mousedown', whenClicked)

    return () => document.removeEventListener('mousedown', whenClicked)
  }, [])

  const whenClicked = ({ target }) => {
    const current = closeable.current

    if (!current) {
      return
    }

    if (!current.contains(target)) {
      whenClose()
    }
  }

  return (
    <div key={key} ref={closeable} style={style}>
      {children}
    </div>
  )
}

Closeable.propTypes = {
  whenClose: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired
}
