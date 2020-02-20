import React, { useContext, Fragment } from 'react'
import { Context } from './Context'
import v4 from 'uuid/v4'
import { getChildrensById, titleMapper } from './utils'

export default function Root() {
  const { structure } = useContext(Context)

  return (
    <Fragment>
      {structure.map(children => {
        const Title = titleMapper[children.type]

        return (
          <Fragment key={v4()}>
            <Title>{children.title}</Title>
            {getChildrensById(structure, children.id).map(children => {
              const Title = titleMapper[children.type]

              return !children.isHidden ? (
                <Fragment key={v4()}>
                  <Title
                    id={children.id}
                    prevent={children.prevent}
                    onClick={children.onClick}
                    onPrevent={children.onPrevent}
                  >
                    {children.title}
                  </Title>
                </Fragment>
              ) : null
            })}
          </Fragment>
        )
      })}
    </Fragment>
  )
}
