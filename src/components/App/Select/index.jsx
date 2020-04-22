import React from 'react'
import _ from 'lodash'
import unset from 'lodash/fp/unset'
import set from 'lodash/fp/set'
export default function Select({ onChange, options, value, multiple }) {

  return (
    <div>
      {options.map((id) => {
        const checked = _.get(value, id)
        return (
          <div key={id}>
            <input
              id={id}
              type="checkbox"
              checked={checked}
              onChange={() => {
                if (multiple) {
                  if (checked) {
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
        )
      })}
    </div>

  )
}
