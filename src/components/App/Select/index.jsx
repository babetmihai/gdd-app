import React from 'react'
import unset from 'lodash/fp/unset'
import set from 'lodash/fp/set'
export default function Select({ onChange, options, value, multiple }) {

  return (
    <div>
      {options.map((id) => (
        <div key={id}>
          <input
            id={id}
            type="checkbox"
            checked={!!value[id]}
            onChange={() => {
              if (multiple) {
                if (value[id]) {
                  onChange(unset(id, value))
                } else {
                  onChange(set(id, true, value))
                }
              } else {
                onChange({ [id]: !value[id] })
              }
            }}
          />
          <label htmlFor={id}>
            {id}
          </label>
        </div>
      ))}
    </div>

  )
}
