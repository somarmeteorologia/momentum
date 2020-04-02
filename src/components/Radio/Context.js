import React, { createContext, useState } from 'react'

export const Context = createContext()

function Provider({ size, labelAlign, onChange, children, initial }) {
  const [checkable, setCheckable] = useState(initial)

  const setCheckableWithChange = value => {
    setCheckable(value)

    onChange(getChecked(value))
  }

  const getChecked = value => Object.keys(value).filter(key => value[key])

  const value = {
    setCheckable: setCheckableWithChange,
    checkable,
    size,
    labelAlign
  }

  return <Context.Provider value={value}>{children}</Context.Provider>
}

const Consumer = Context.Consumer

export { Consumer, Provider }
