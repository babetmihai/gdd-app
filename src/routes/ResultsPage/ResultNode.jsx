import React from 'react'
import { t } from 'core/intl'


export default function ResultNode({ node, ...props }) {
  const { id, children = [], tagName: Component = 'div' } = node

  return (
    <Component id={id}>
      {t(id)}
      {children.map((childNode, index) => (
        <ResultNode
          {...props}
          key={index}
          node={childNode}
        />
      ))}
    </Component>
  )
}
