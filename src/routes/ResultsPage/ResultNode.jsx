import React from 'react'
import _ from 'lodash'
import { t } from 'core/intl'


export default function ResultNode({ node, ...props }) {
  const { results } = props
  const { id, children = [], tagName: Component = 'div' } = node

  return (
    <Component id={id}>
      {_.isEmpty(children) && id && t(id)}
      {children
        .filter(({ requires }) => !requires || _.get(results, requires))
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
