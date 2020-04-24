import React from 'react'
import _ from 'lodash'
import unset from 'lodash/fp/unset'
import set from 'lodash/fp/set'
import { Button } from 'react-bootstrap'
import styles from './index.module.scss'

export default function Select(props) {
  const { onChange, options, value = {}, multiple } = props
  return (
    <div>
      {options.map((id) => {
        const checked = _.get(value, id)
        return (
          <Button
            key={id}
            id={id}
            className={styles.option}
            variant={checked ? 'primary' : 'outline-primary'}
            onClick={() => {
              if (multiple) {
                if (checked) {
                  onChange(unset(id, value))
                } else {
                  onChange(set(id, true, value))
                }
              } else {
                if (checked) {
                  onChange({})
                } else {
                  onChange({ [id]: true })
                }
              }
            }}
          >
            {id}
          </Button>
        )
      })}
    </div>

  )
}
