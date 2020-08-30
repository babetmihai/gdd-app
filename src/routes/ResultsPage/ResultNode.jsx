import React from 'react'
import { t } from 'core/intl'


export default function ResultNode({ node, ...props }) {
  const { results } = props
  const { id, children = [], tagName: Component = 'div' } = node

  return (
    <Component id={id}>
      {t(id)}
      {children
        .filter(({ requires }) => {
          console.log(requires, results[requires])
          return !requires || results[requires]
        })
        .map((childNode, index) => (
          <ResultNode
            {...props}
            key={index}
            node={childNode}
          />
        ))}
    </Component>
  )
}
