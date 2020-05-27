import React from 'react'
import { t } from 'core/intl'
import { submitForm } from 'core/gdd'
import { Button } from 'react-bootstrap'
import { Form } from 'react-bootstrap'
import styles from './index.module.scss'

export default function FormDone(props) {
  return (
    <Form className={styles.form}>
      <h2>{t('you_are_done')}</h2>
      <Button
        size="lg"
        type="submit"
        onClick={submitForm}
      >
        Get Results
      </Button>
    </Form>
  )
}
