import React, { createContext, useState, useRef, useEffect } from 'react'

export const Context = createContext()

function Provider({ size, labelAlign, onChange, children, initial, raw }) {
  const [checkable, setCheckable] = useState(initial)
  const ref = useRef()

  const setCheckableWithChange = value => {
    setCheckable(value)

    ref.current.dispatchEvent(
      new Event('change', {
        bubbles: true
      })
    )
  }

  const getChecked = value => Object.keys(value).filter(key => value[key])

  const value = {
    setCheckable: setCheckableWithChange,
    checkable,
    size,
    labelAlign
  }

  const whenChange = event => {
    const { value } = event.target

    onChange(raw ? event : value)
  }

  useEffect(() => {
    ref.current.addEventListener('change', whenChange)
  }, [ref])

  return (
    <Context.Provider value={value}>
      <>
        <input ref={ref} type="hidden" value={getChecked(checkable)} />

        {children}
      </>
    </Context.Provider>
  )
}

const Consumer = Context.Consumer

export { Consumer, Provider }
