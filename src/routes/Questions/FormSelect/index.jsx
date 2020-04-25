import React from 'react'
import _ from 'lodash'
import { t } from 'core/intl'
import unset from 'lodash/fp/unset'
import set from 'lodash/fp/set'
import { Button, Form } from 'react-bootstrap'
import styles from './index.module.scss'

export default function FormSelect(props) {
  const { id, onChange, options, value = {}, multiple } = props
  React.useEffect(() => {
    onChange(value)
  }, [id]) // eslint-disable-line
  return (
    <Form.Group className={styles.formSelect}>
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
            <i>extension</i>
            {t(id)}
          </Button>
        )
      })}
    </Form.Group>
  )
}
