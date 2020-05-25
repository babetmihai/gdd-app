import React from 'react'
import _ from 'lodash'
import { t } from 'core/intl'
import { Button, Form } from 'react-bootstrap'
import styles from './index.module.scss'

export default function FormSelect(props) {
  const { id, onChange, options, value = {}, multiple } = props
  return (
    <Form className={styles.form}>
      <h2>{t(id)}</h2>
      <Form.Group className={styles.formSelect}>
        {options.map((optionId) => {
          const checked = _.get(value, optionId)
          return (
            <Button
              key={optionId}
              id={optionId}
              className={styles.option}
              variant={checked ? 'primary' : 'outline-primary'}
              onClick={() => {
                if (multiple) {
                  onChange({ ...value, [optionId]: !checked })
                } else {
                  onChange({
                    ...options.reduce((acc, _id) => ({ ...acc, [_id]: false }), {}),
                    [optionId]: !checked
                  })
                }
              }}
            >
              <i>extension</i>
              {t(id)}
            </Button>
          )
        })}
      </Form.Group>
    </Form>
  )
}
