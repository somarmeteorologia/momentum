import React, { createContext, useState, useEffect } from 'react'

const Context = createContext()

function Provider({ value, children }) {
  const { defaultStructure, defaultInterables, onInterable } = value
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

const Consumer = Context.Consumer

export { Consumer, Context, Provider }
