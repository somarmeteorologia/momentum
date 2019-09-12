import Type from './Type'

import Category from './Category'
import Group from './Group'
import Item from './Item'

export const titleMapper = {
  [Type.Category]: Category.Title,
  [Type.Group]: Group.Title,
  [Type.Item]: Item.Title
}

const common = id => object => ({
  ...object,
  children: object.children && setOpenById(id)(object.children)
})

export const setOpenById = id => array => {
  const commonWithId = common(id)

  return array.map(object => {
    return object.type === Type.Group
      ? commonWithId({
          ...object,
          isOpen: object.id === id
        })
      : commonWithId(object)
  })
}

export const getHasOpen = array => {
  const recursively = index =>
    index.isOpen ? index : getHasOpen(index.children)
  return array.map(recursively).flat()
}

export const getChildrensById = (array, id) =>
  array
    .map(object => {
      return object.id === id
        ? object.children
        : getChildrensById(object.children, id)
    })
    .flat()

export const notEqualsById = id => object => object.id !== id
export const equalsById = id => object => object.id === id

export const useInterable = ({ interables, setInterables }) => id => {
  const interable = interables.find(equalsById(id))

  const getter = id => {
    return interable.interables.find(option => option.id === id).value
  }

  const setter = (_id, value) => {
    const filteredInterable = interables => interables.filter(notEqualsById(id))
    const filtered = interable.interables.filter(notEqualsById(_id))

    setInterables(previous => [
      ...filteredInterable(previous),
      {
        id,
        interables: [
          ...filtered,
          {
            id: _id,
            value
          }
        ]
      }
    ])
  }

  return [setter, getter]
}
