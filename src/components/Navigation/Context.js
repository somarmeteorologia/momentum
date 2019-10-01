import React, { createContext, useState, useEffect } from 'react'
import PropTypes from 'prop-types'

const Context = createContext()

function Provider({
  defaultStructure,
  defaultInterables,
  children,
  onInterable
}) {
  const [structure, setStructure] = useState(defaultStructure)
  const [interables, setInterables] = useState(defaultInterables)

  useEffect(() => {
    onInterable({ interables, setInterables })
  }, [interables])

  return (
    <Context.Provider
      value={{
        structure,
        setStructure,
        interables,
        setInterables
      }}
    >
      {children}
    </Context.Provider>
  )
}

Provider.defaultProps = {
  onInterable: () => {}
}

Provider.propTypes = {
  onInterable: PropTypes.func,
  defaultInterables: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      interables: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.string.isRequired,
          value: PropTypes.any.isRequired
        })
      )
    })
  ).isRequired,
  defaultStructure: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.func.isRequired,
      type: PropTypes.oneOf(['category']).isRequired,
      children: PropTypes.arrayOf(
        PropTypes.shape({
          parent: PropTypes.string.isRequired,
          id: PropTypes.string.isRequired,
          title: PropTypes.func.isRequired,
          type: PropTypes.oneOf(['group', 'item']).isRequired,
          prevent: PropTypes.func,
          onPrevent: PropTypes.func,
          isOpen: PropTypes.bool,
          children: PropTypes.arrayOf(
            PropTypes.shape({
              parent: PropTypes.string.isRequired,
              id: PropTypes.string.isRequired,
              title: PropTypes.func.isRequired,
              type: PropTypes.oneOf(['group', 'item']).isRequired,
              prevent: PropTypes.func,
              onPrevent: PropTypes.func,
              isOpen: PropTypes.bool,
              children: PropTypes.array
            })
          )
        })
      )
    })
  )
}

const Consumer = Context.Consumer

export { Consumer, Context, Provider }
