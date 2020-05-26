import React from 'react'
import { t } from 'core/intl'
import { Button } from 'react-bootstrap'
import { Form } from 'react-bootstrap'
import styles from './index.module.scss'

export default function FormDone(props) {
  const { onSubmit } = props

  return (
    <Form className={styles.form}>
      <h2>{t('you_are_done')}</h2>
      <Button
        size="lg"
        type="submit"
        onClick={onSubmit}
      >
        Get Results
      </Button>
    </Form>
  )
}
