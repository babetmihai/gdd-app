import React from 'react'
import _ from 'lodash'
import unset from 'lodash/fp/unset'
import set from 'lodash/fp/set'
import { t } from 'core/intl'
import { submitAnswers } from 'core/gdd'
import { Button, Form } from 'react-bootstrap'
import styles from './index.module.scss'

export default function FormSelect(props) {
  const { id, options, answer = {}, multiple } = props
  const [value, onChange] = React.useState()

  React.useEffect(() => {
    onChange(answer)
  }, [id]) // eslint-disable-line

  return (
    <Form className={styles.formSelect}>
      <h2>{t(id)}</h2>
      <Form.Group className={styles.content}>
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
                  if (checked) {
                    onChange(unset(optionId, value))
                  } else {
                    onChange(set(optionId, true, value))
                  }
                } else {
                  if (checked) {
                    onChange({})
                  } else {
                    onChange({ [optionId]: true })
                  }
                }
              }}
            >
              <i>extension</i>
              {t(optionId)}
            </Button>
          )
        })}
      </Form.Group>
      <Button
        variant="primary"
        type="submit"
        disabled={_.isEmpty(value)}
        className={styles.submitBtn}
        onClick={(event) => {
          event.preventDefault()
          submitAnswers({ id, value })
        }}
      >
        Next
      </Button>
    </Form>
  )
}
